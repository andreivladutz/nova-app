import { QueryResultType } from "../types/notionApi";
import { notionObjectToPlainObject } from "./schemaObjectMappings";

// Creates an object with accessors which allow getting
// information from the wrapped notion page object (like the page id)
const notionAccessObject = (queryResult: QueryResultType) => ({
  get pageId() {
    return queryResult.id;
  },
  get originalProperties() {
    return queryResult.properties;
  },
});

const notionAccessPrototype = (queryResult: QueryResultType) => ({
  $notion: notionAccessObject(queryResult),
});

export type NotionAcessPrototype = ReturnType<typeof notionAccessPrototype>;

// Create a wrapper object over a notion-to-plain object (page)
// that can be used like a normal plain object, but also has a prototype linked
// which is useful for getting notion-specific data, like the page id
export function notionPage<O extends object>(queryResult: QueryResultType) {
  const plainObject = notionObjectToPlainObject<O>(queryResult.properties);
  Object.setPrototypeOf(plainObject, notionAccessPrototype(queryResult));

  return plainObject as O & NotionAcessPrototype;
}
