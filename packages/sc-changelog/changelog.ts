import ALL_CHANGELOG_QUERY from './graphQl/changelog-query';
import { fetchAPI } from './lib/common/api';
import { extractPosts, getSearchResultsChangelogs } from './lib/search-lib';

import ChangelogEntry, { ParseRawData } from './types/changeLogEntry';
import { ChangeType, ProductName } from './types/index';

export async function GetLatestItems(): Promise<ChangelogEntry[]> {
  const data = await fetchAPI(`${ALL_CHANGELOG_QUERY}`);
  const rawData = extractPosts(data.data);

  return ParseRawData(rawData);
}

export async function GetLatestItemsByProduct(productId: string): Promise<ChangelogEntry[]> {
  // TODO How to get product specific query
  const data = await getSearchResultsChangelogs('', '', productId);
  return ParseRawData(data);
}

export function GetLatestItemsByProductAndChangeType(product: ProductName, changeType: ChangeType): string {
  return `Hello ${product} - filter by ${changeType}`;
}
