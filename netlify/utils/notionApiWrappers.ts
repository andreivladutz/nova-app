import { Client } from "@notionhq/client";
import { NotionAcessPrototype, notionPage } from "./notionUtils/notionPage";
import {
  NotionObject,
  notionObjectToPlainObject,
  plainObjectToNotionObject,
} from "./notionUtils/schemaObjectMappings";
import {
  SuccessfulCreatePageResponse,
  DbQueryFilter,
  DbQuerySorts,
  DbSortDirection,
  QueryDatabaseResponse,
  QueryResultType,
  UpdatePageParameters,
  SuccessfulUpdatePageResponse,
} from "./types/notionApi";

// Project all query results (made up of notion schema-following objects)
// into wrapper objects acting as plain objects with key and value
const queryProjection = <O extends object>(
  queryResult: QueryDatabaseResponse
) =>
  queryResult.results.map((result) => notionPage<O>(result as QueryResultType));

const createNotionApiWrapper = (notionToken: string) => {
  const notion = new Client({ auth: notionToken });

  const dbQuery =
    (
      dbId: string,
      // Number of returned results
      pageSize = 100
    ) =>
    ({
      filter,
      sorts,
    }: {
      // Notion-like filters
      filter?: DbQueryFilter;
      // Notion-like sorts
      sorts?: DbQuerySorts;
    }) =>
      notion.databases.query({
        database_id: dbId,
        filter,
        sorts,
        page_size: pageSize,
      });

  const dbSchema = (dbId: string) =>
    notion.databases
      .retrieve({ database_id: dbId })
      .then((value) => value.properties);

  const dbPageCreate = (dbId: string, notionObject: NotionObject) =>
    notion.pages.create({
      parent: {
        database_id: dbId,
      } as { database_id: string; page_id: string },
      properties: notionObject,
    });

  const dbPageUpdate = (pageId: string, notionObject: NotionObject) =>
    notion.pages.update({
      page_id: pageId,
      properties: notionObject as UpdatePageParameters["properties"],
    });

  return {
    dbQuery,
    dbSchema,
    dbPageCreate,
    dbPageUpdate,
  };
};

export type DbWrapper = ReturnType<typeof createDbWrapper>;

export const createDbWrapper = <O extends object>(
  notionToken: string,
  dbId: string
) => {
  const apiWrapper = createNotionApiWrapper(notionToken);
  const sorts = [] as DbQuerySorts;
  let filter: DbQueryFilter | undefined;

  const query = (itemsCount: number) =>
    apiWrapper
      .dbQuery(
        dbId,
        itemsCount
      )({ sorts, filter })
      .then((results) => queryProjection<O>(results));

  const getFirst = async () => (await query(1))[0];
  const getN = (n = 100) => query(n);

  const dbSchema = () => apiWrapper.dbSchema(dbId);

  const filterMethod = function (filterObject: DbQueryFilter) {
    filter = filterObject;

    return this;
  };

  const orderBy = function (property: string) {
    const addToSorts = (sortDir: DbSortDirection) => {
      sorts.push({
        property,
        direction: sortDir,
      });

      return this;
    };
    return {
      ascending: () => addToSorts("ascending"),
      descending: () => addToSorts("descending"),
    };
  };

  // The create wrapper abstracts away the db schema fetching beforehand
  // and transforming the plain object to the notion object
  const create = async (plainObject: O) => {
    const schema = await dbSchema();

    return apiWrapper
      .dbPageCreate(dbId, plainObjectToNotionObject(plainObject, schema))
      .then((notionObject) =>
        notionPage<O>(notionObject as SuccessfulCreatePageResponse)
      );
  };

  // The update object has to be similar to (if not "a") notionPage wrapper
  // s.t. we have access to the page id to be updated
  const update = (plainUpdateObject: Partial<O> & NotionAcessPrototype) =>
    apiWrapper
      .dbPageUpdate(
        plainUpdateObject.$notion.pageId,
        plainObjectToNotionObject(
          plainUpdateObject,
          // The notion object's properties can be used as schema as they have a "type"
          // property in them which is sufficient for translating back to a notion object
          plainUpdateObject.$notion.originalProperties
        )
      )
      .then((notionObject) =>
        notionPage<O>(notionObject as SuccessfulUpdatePageResponse)
      );

  const dbWrapper = {
    getFirst,
    getN,

    dbSchema,

    orderBy,
    filter: filterMethod,

    create,
    update,
  };

  dbWrapper.orderBy = dbWrapper.orderBy.bind(dbWrapper);
  dbWrapper.filter = dbWrapper.filter.bind(dbWrapper);

  // Type the methods that enable chaining
  type DbWrapper = Omit<typeof dbWrapper, "orderBy" | "filter">;
  type TypedDbWrapperMethods = {
    orderBy: (property: string) => {
      ascending: () => DbWrapper & TypedDbWrapperMethods;
      descending: () => DbWrapper & TypedDbWrapperMethods;
    };

    filter: (filterObject: DbQueryFilter) => DbWrapper & TypedDbWrapperMethods;
  };

  return dbWrapper as DbWrapper & TypedDbWrapperMethods;
};
