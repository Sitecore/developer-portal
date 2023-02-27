import ALL_CHANGELOG_QUERY from './graphQl/changelog-query';
import { fetchAPI } from './lib/common/api';
import { extractPosts } from './lib/search-lib';
import { Product } from './types';
import ChangelogEntry, { ParseRawData } from './types/changeLogEntry';
import { ChangeType } from './types/index';

export async function GetLatestItems(): Promise<ChangelogEntry[]> {
  const data = await fetchAPI(`${ALL_CHANGELOG_QUERY}`);
  const rawData = extractPosts(data.data);

  return ParseRawData(rawData);
}

export async function GetLatestItemsByProduct(product: Product): Promise<ChangelogEntry[]> {
  // TODO How to get product specific query
  const data = await fetchAPI(`${ALL_CHANGELOG_QUERY}`);
  const rawData = extractPosts(data.data);

  return ParseRawData(rawData);
}

export function GetLatestItemsByProductAndChangeType(product: Product, changeType: ChangeType): string {
  return `Hello ${product} - filter by ${changeType}`;
}
