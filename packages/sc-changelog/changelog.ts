import { PaginatedSearch, Search } from './lib/search';
import { ChangelogEntry, ChangelogEntryList, ChangelogEntrySummary, ParseRawData, ParseRawSummaryData, parseChangeLogItem } from './types/changeLogEntry';

export async function AllChangelogEntries(isPreview: boolean): Promise<ChangelogEntryList<ChangelogEntry[]>> {
  const response = await Search(isPreview);
  return ParseRawData(response.data);
}

export async function ChangelogEntriesByProduct(isPreview: boolean, productId: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
  const response = await Search(isPreview, productId);
  return ParseRawData(response.data);
}
export async function ChangelogEntriesPaginated(isPreview: boolean, pageSize: string, productId: string, changeTypeId: string, endCursor?: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
  const _pageSize: number = Number(pageSize) ?? undefined;
  const _endCursor: string = endCursor ?? '';

  const response = await PaginatedSearch(isPreview, _pageSize, _endCursor, productId, changeTypeId);
  return ParseRawData(response.data);
}

export async function ChangelogEntryByTitle(isPreview: boolean, entryTitle: string, productId?: string, changeTypeId?: string): Promise<ChangelogEntry> {
  const response = await Search(isPreview, productId, changeTypeId, false, entryTitle, 1);

  return parseChangeLogItem(response.data.results[0]);
}

export async function GetSummaryLatestItemsByProductAndChangeType(isPreview: boolean, productId?: string, changeTypeId?: string): Promise<ChangelogEntryList<ChangelogEntrySummary[]>> {
  const response = await Search(isPreview, productId, changeTypeId, true, undefined, 50);
  return ParseRawSummaryData(response.data);
}
