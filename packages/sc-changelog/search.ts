import { buildSearchQuery } from "./search/queries";
import { QuerySearchApi } from "./search/searchAPI";
import { ChangeLogSearchFacet, QuerySearchApiResult } from "./search/types";

export type SearchChangeLogParams = {
  path: string;
  limit?: number;
  offset?: number;
  uuid?: string;
  facets: ChangeLogSearchFacet[]
  enabledFacets: string[]
}

export default async function SearchChangeLog({ path, limit = 10, offset = 0, uuid, facets, enabledFacets }: SearchChangeLogParams): Promise<QuerySearchApiResult> {
  const query = buildSearchQuery({ path, limit, offset, uuid, facets, enabledFacets });
  return await QuerySearchApi({ query, selectedFacets: facets });
}