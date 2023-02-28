import { getSearchResultsChangelogs } from './lib/search-lib';

import ChangelogEntry, { ChangelogEntrySummary, ParseRawData, ParseRawSummaryData } from './types/changeLogEntry';

export async function GetLatestItemsByProductAndChangeType(productId: string, changeTypeId: string): Promise<ChangelogEntry[]> {
  const data = await getSearchResultsChangelogs('', changeTypeId, productId);
  return ParseRawData(data);
}

export async function GetSummaryLatestItemsByProductAndChangeType(productId: string, changeTypeId: string): Promise<ChangelogEntrySummary[]> {
  const data = await getSearchResultsChangelogs('', changeTypeId, productId, true);
  return ParseRawSummaryData(data);
}
