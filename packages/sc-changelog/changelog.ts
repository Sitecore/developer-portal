import { getSearchResultsChangelogs } from './lib/search-lib';

import { ChangelogEntry, ChangelogEntrySummary, parseChangeLogItem, ParseRawData, ParseRawSummaryData } from './types/changeLogEntry';

export async function GetAllChangelogEntries(productId?: string, changeTypeId?: string) {
  if (productId && changeTypeId) {
    return GetLatestItemsByProductAndChangeType(productId, changeTypeId);
  }

  if (productId && !changeTypeId) {
    return GetLatestItemsByProductAndChangeType(productId, '');
  }
  return GetLatestItemsByProductAndChangeType('', '');
}

export async function GetChangelogEntry(title: string, productId: string, changeTypeId: string, entityId?: string) {
  const data = await getSearchResultsChangelogs(title, changeTypeId, productId);

  return parseChangeLogItem(data[0]);
}

export async function GetLatestItemsByProductAndChangeType(productId: string, changeTypeId: string): Promise<ChangelogEntry[]> {
  const data = await getSearchResultsChangelogs('', changeTypeId, productId);
  return ParseRawData(data);
}

export async function GetSummaryLatestItemsByProductAndChangeType(productId: string, changeTypeId: string): Promise<ChangelogEntrySummary[]> {
  const data = await getSearchResultsChangelogs('', changeTypeId, productId, true);
  return ParseRawSummaryData(data);
}
