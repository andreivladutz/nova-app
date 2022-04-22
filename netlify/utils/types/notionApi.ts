import {
  QueryDatabaseParameters,
  QueryDatabaseResponse,
  GetDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { ArrayParam, PickSubset, UnionToIntersection } from "./utilitary";

export {
  // Query fn (QueryDatabaseParameters) => result
  QueryDatabaseParameters,
  // Query fn (...params) => Promise<QueryDatabaseResponse>
  QueryDatabaseResponse,
  GetDatabaseResponse,
};

export type DbQueryFilter = QueryDatabaseParameters["filter"];
// Utility to pick the { or: .. } object type from a union of types
type PickOrSubset<T> = PickSubset<{ or: any }, T>;
// Isolating PropertyFilter type from Notion's types
// the form of property filters without any or(s) / and(s)
export type PropertyFilter = ArrayParam<
  PickOrSubset<ArrayParam<PickOrSubset<DbQueryFilter>["or"]>>["or"]
>;
// All possible property types for filters "rich_text" | "number" | ...
export type PropertyFilterType = PropertyFilter["type"];

type PickPropFilterSubset<Type> = PickSubset<{ type?: Type }, PropertyFilter>;
// The filter having { type: "rich_text" }
export type TextFilterType = PickPropFilterSubset<"rich_text">;
// The filter having { type: "number" }
export type NumberFilterType = PickPropFilterSubset<"number">;

export type DbQuerySorts = QueryDatabaseParameters["sorts"];
export type DbQuerySort = DbQuerySorts[number];
export type DbSortDirection = DbQuerySort["direction"];

// Just the type of one item of the DbQueryResult.results array
export type QueryResultType = UnionToIntersection<
  ArrayParam<QueryDatabaseResponse["results"]>
>;
