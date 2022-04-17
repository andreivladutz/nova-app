import { Client } from "@notionhq/client";
import { ArrayParam, PromiseParam, UnionToIntersection } from "./utilitary";

// The query fn signature (...params) => result
type NotionDbQueryFn = Client["databases"]["query"];
// Query fn (QueryDbParams) => result
type QueryDbParams = Parameters<NotionDbQueryFn>[0];
// Query fn (...params) => QueryDbPromiseResult
type QueryDbPromiseResult = ReturnType<NotionDbQueryFn>;

export type DbQueryFilter = QueryDbParams["filter"];

export type DbQuerySorts = QueryDbParams["sorts"];
export type DbQuerySort = DbQuerySorts[number];
export type DbSortDirection = DbQuerySort["direction"];

// Query fn result (...params) => Promise<DbQueryResult>
export type DbQueryResult = PromiseParam<QueryDbPromiseResult>;
// Just the type of one item of the DbQueryResult.results array
export type QueryResultType = UnionToIntersection<
  ArrayParam<DbQueryResult["results"]>
>;
