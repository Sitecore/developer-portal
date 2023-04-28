import { GetAllChangeTypes } from './lib/changeType';
import { GetAllProducts, GetEntryCountByProductId } from './lib/products';
import { PaginatedSearch, Search } from './lib/search-lib';

import { ChangelogEntry, ChangelogEntryList, ChangelogEntrySummary, parseChangeLogItem, ParseRawData, ParseRawSummaryData } from './types/changeLogEntry';
import ChangeType, { ParseChangeType } from './types/changeType';
import Product, { ParseProduct } from './types/product';

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

//export async function ChangelogEntriesByProductAndChangeType(productId: string, changeTypeId: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
//  const response = await Search(productId, changeTypeId);
//  return ParseRawData(response.data);
//}

export async function ChangelogEntryByTitle(isPreview: boolean, entryTitle: string, productId?: string, changeTypeId?: string): Promise<ChangelogEntry> {
  const response = await Search(isPreview, productId, changeTypeId, false, entryTitle, 1);

  return parseChangeLogItem(response.data.results[0]);
}

export async function GetSummaryLatestItemsByProductAndChangeType(isPreview: boolean, productId?: string, changeTypeId?: string): Promise<ChangelogEntryList<ChangelogEntrySummary[]>> {
  const response = await Search(isPreview, productId, changeTypeId, true, undefined, 50);
  return ParseRawSummaryData(response.data);
}
export async function GetChangeTypes(isPreview: boolean): Promise<ChangeType[]> {
  const response = await GetAllChangeTypes(isPreview);
  return ParseChangeType(response.data);
}
export async function GetProducts(isPreview: boolean): Promise<Product[]> {
  // Get all products
  const response = await GetAllProducts(isPreview);
  const products = ParseProduct(response.data);

  // Iterate products
  const asyncFunc = async () => {
    const p = products.map((n) => calc(n));
    const results = await Promise.all(p);
    return results;
  };

  // Check whether there are entries that have it selected
  const calc = async (n: Product) => {
    const count = await GetEntryCountByProductId(n.id, isPreview);
    n.hasEntries = count > 0;
    return n;
  };

  return asyncFunc();
}
