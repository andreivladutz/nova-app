import { Client } from "@notionhq/client";
import {
  DbQueryFilter,
  DbQuerySorts,
  DbSortDirection,
  QueryDatabaseResponse,
  QueryResultType,
} from "./types/notionApi";

const queryProjection = (queryResult: QueryDatabaseResponse) =>
  queryResult.results.map((result) => (result as QueryResultType).properties);

export type QueryProjection = ReturnType<typeof queryProjection>;

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
      notion.databases
        .query({
          database_id: dbId,
          filter,
          sorts,
          page_size: pageSize,
        })
        .then(queryProjection);

  return {
    dbQuery,
  };
};

export const createDbWrapper = (notionToken: string, dbId: string) => {
  const apiWrapper = createNotionApiWrapper(notionToken);
  const sorts = [] as DbQuerySorts;
  let filter: DbQueryFilter | undefined;

  const getFirst = () => apiWrapper.dbQuery(dbId, 1)({ sorts, filter });
  const getN = (n: number) => apiWrapper.dbQuery(dbId, n)({ sorts, filter });

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

  const dbWrapper = {
    getFirst,
    getN,

    orderBy,
    filter: filterMethod,
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
