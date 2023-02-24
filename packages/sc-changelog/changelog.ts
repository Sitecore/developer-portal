import ALL_CHANGELOG_QUERY from './graphQl/changelog-query';
import { fetchAPI } from './lib/common/api';
import { extractPosts } from './lib/search-lib';
import { Product } from './types';
import Changelog from './types/changelog';
import { ChangeType } from './types/index';

export async function GetLatestItems(): Promise<Changelog[]> {
  const data = await fetchAPI(`${ALL_CHANGELOG_QUERY}`);
  console.log(data);

  return extractPosts(data.data);
}

export function GetLatestItemsByProduct(product: Product): string {
  return `Hello ${product}`;
}

export function GetLatestItemsByProductAndChangeType(
  product: Product,
  changeType: ChangeType
): string {
  return `Hello ${product} - filter by ${changeType}`;
}
