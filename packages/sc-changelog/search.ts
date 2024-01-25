import { ChangelogEntriesPaginated, GetSummaryLatestItemsByProductAndChangeType } from "./changelog";
import { buildSearchQuery } from "./search/queries";
import { QuerySearchApi } from "./search/searchAPI";
import { ChangeLogSearchFacet, ChangelogFilter, QuerySearchApiResult } from "./search/types";

export type SearchChangeLogParams = {
  path: string;
  limit?: number;
  offset?: number;
  uuid?: string;
  facets: ChangeLogSearchFacet[];
  enabledFacets: string[];
  filters?: ChangelogFilter[];
}

export async function SearchChangeLog({ path, limit = 10, offset = 0, uuid, facets, enabledFacets, filters }: SearchChangeLogParams): Promise<QuerySearchApiResult> {
  const query = buildSearchQuery({ path, limit, offset, uuid, facets, enabledFacets, filters });
  return await QuerySearchApi({ query, selectedFacets: facets });
}

export async function PreviewChangeLog({ limit = "10", productName }: { limit: string, productName: string }): Promise<QuerySearchApiResult> {
  const previewEntries = (await ChangelogEntriesPaginated(true, limit, productName, '', ''));
  const previewEntriesByMonth = (await GetSummaryLatestItemsByProductAndChangeType(true, productName, ''));
  return { entries: previewEntries.entries, facets: [], entriesByMonth: previewEntriesByMonth.entries, isMore: false };
}