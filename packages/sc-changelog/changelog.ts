import { getSearchResultsChangelogs } from './lib/search-lib';

import ChangelogEntry, { ParseRawData } from './types/changeLogEntry';


export async function GetLatestItemsByProductAndChangeType(productId: string, changeTypeId: string): Promise<ChangelogEntry[]> {
  const data = await getSearchResultsChangelogs('', changeTypeId, productId);
  return ParseRawData(data);
}
