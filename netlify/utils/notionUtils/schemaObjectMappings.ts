import { GetDatabaseResponse, QueryResultType } from "../types/notionApi";
import { RemovePropFromUnion } from "../types/utilitary";

type NotionObject = QueryResultType["properties"];
type NotionObjectProperty = NotionObject[string];
type NotionObjectPropertyNoId = RemovePropFromUnion<
  NotionObjectProperty,
  "type",
  "id"
>;
type NotionObjectNoId = Record<string, NotionObjectPropertyNoId>;

export { NotionObjectNoId as NotionObject };

type PropertySchema = {
  type: GetDatabaseResponse["properties"][string]["type"];
};
type DbSchema = Record<string, PropertySchema>;

const schemaTypedPropertyToValue = (schemaProp: NotionObject[string]) => {
  switch (schemaProp.type) {
    case "number":
      return schemaProp.number;
    case "checkbox":
      return schemaProp.checkbox;
    // Very naive text interpretation as rich text is not supported for the app props
    case "rich_text":
      return schemaProp.rich_text.reduce(
        (accText, text) => `${accText}${text.plain_text}`,
        ""
      );
    // Yet very naive date interpretation -> only dates with start prop supported as of yet
    case "date":
      return schemaProp.date.start;
    case "title":
      return schemaProp.title.reduce(
        (accText, currText) => `${accText}${currText.plain_text}`,
        ""
      );
    // For files we support only one file => we return the url to the file
    case "files":
      const [fileObj] = schemaProp.files;
      if (fileObj.type === "file") {
        return fileObj.file.url;
      }

      return fileObj.external.url;
    case "formula":
      switch (schemaProp.formula.type) {
        case "boolean":
          return schemaProp.formula.boolean;
        case "date":
          return schemaProp.formula.date.start;
        case "string":
          return schemaProp.formula.string;
        case "number":
          return schemaProp.formula.number;
      }
    default:
      throw new Error(
        `Unsupported schemaProp type detected ("${schemaProp.type}") when converting to plain object`
      );
  }
};

const typeAssertions = {
  isNumber: (value: unknown): value is number => typeof value === "number",
  isBoolean: (value: unknown): value is boolean => typeof value === "boolean",
  isString: (value: unknown): value is string => typeof value === "string",
};

const typeMismatchErr = (schemaType: string, value: unknown) =>
  `Unexpected schema property type mismatch. (schemaType = ${schemaType}) !== (realType = ${typeof value}) for value = ${value}`;

const valueToSchemaTypedProp = (
  value: unknown,
  propSchema: PropertySchema
): NotionObjectPropertyNoId => {
  switch (propSchema.type) {
    case "number":
      if (!typeAssertions.isNumber(value)) {
        throw new Error(typeMismatchErr(propSchema.type, value));
      }

      return {
        type: "number",
        number: value,
      };
    case "checkbox":
      if (!typeAssertions.isBoolean(value)) {
        throw new Error(typeMismatchErr(propSchema.type, value));
      }

      return {
        type: "checkbox",
        checkbox: value,
      };
    case "rich_text":
      if (!typeAssertions.isString(value)) {
        throw new Error(typeMismatchErr(propSchema.type, value));
      }

      return {
        type: "rich_text",
        rich_text: [
          {
            type: "text",
            // @ts-expect-error (no link prop)
            text: {
              content: value,
            },
          },
        ],
      };
    // VERY NAIVE (read "missing") date corectness check
    case "date":
      if (!typeAssertions.isString(value)) {
        throw new Error(typeMismatchErr(propSchema.type, value));
      }
      return {
        type: "date",
        date: { start: value, end: null, time_zone: null },
      };
    case "title":
      if (!typeAssertions.isString(value)) {
        throw new Error(typeMismatchErr(propSchema.type, value));
      }
      return {
        title: [
          {
            type: "text",
            //@ts-expect-error (no link prop)
            text: {
              content: value,
            },
          },
        ],
      };
    default:
      throw new Error(
        `Unsupported schemaProp type detected ("${propSchema.type}") when converting to notion object`
      );
  }
};

export const notionObjectToPlainObject = <O extends object>(
  notionObj: NotionObject
) => {
  const plainObjEntries = Object.entries(notionObj).map(
    ([key, value]) => [key, schemaTypedPropertyToValue(value)] as const
  );

  return Object.fromEntries(plainObjEntries) as O;
};

export const plainObjectToNotionObject = <O extends object>(
  plainObj: O,
  schema: DbSchema
): NotionObjectNoId => {
  const schemaEntries = Object.entries(schema);

  return schemaEntries.reduce((notionObj, [name, schemaDescription]) => {
    // The plain object does not contain this prop name
    // that we are just iterating from the prop schema description object
    if (!plainObj.hasOwnProperty(name)) {
      return notionObj;
    }

    return {
      ...notionObj,
      [name]: valueToSchemaTypedProp(plainObj[name], schemaDescription),
    };
  }, {} as NotionObjectNoId);
};
