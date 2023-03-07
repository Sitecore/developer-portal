import { PaginatedSearch, Search } from './lib/search-lib';

import { ChangelogEntry, ChangelogEntryList, ChangelogEntrySummary, parseChangeLogItem, ParseRawData, ParseRawSummaryData } from './types/changeLogEntry';

export async function AllChangelogEntries(): Promise<ChangelogEntryList<ChangelogEntry[]>> {
  const response = await Search();
  return ParseRawData(response.data);
}

export async function ChangelogEntriesByProduct(productId: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
  const response = await Search(productId);
  return ParseRawData(response.data);
}
export async function ChangelogEntriesPaginated(pageSize: string, productId: string, changeTypeId: string, endCursor?: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
  const _pageSize: number = Number(pageSize) ?? undefined;
  const _endCursor: string = endCursor ?? '';

  const response = await PaginatedSearch(_pageSize, _endCursor, productId, changeTypeId);
  return ParseRawData(response.data);
}

export async function ChangelogEntriesByProductAndChangeType(productId: string, changeTypeId: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
  const response = await Search(productId, changeTypeId);
  return ParseRawData(response.data);
}

export async function ChangelogEntryByTitle(entryTitle: string, productId?: string, changeTypeId?: string): Promise<ChangelogEntry> {
  const response = await Search(productId, changeTypeId, false, entryTitle);
  return parseChangeLogItem(response.data.results[0]);
}

export async function GetSummaryLatestItemsByProductAndChangeType(productId?: string, changeTypeId?: string): Promise<ChangelogEntryList<ChangelogEntrySummary[]>> {
  const response = await Search(productId, changeTypeId, true, undefined, 50);
  return ParseRawSummaryData(response.data);
}
