import { GetAllChangeTypes } from './lib/changeType';
import { GetAllProducts, GetEntryCountByProductId } from './lib/products';
import { PaginatedSearch, Search } from './lib/search';
import { ChangelogEntry, ChangelogEntryList, ChangelogEntrySummary, ParseRawData, ParseRawSummaryData, parseChangeLogItem } from './types/changeLogEntry';
import { ChangeType, ParseChangeType } from './types/changeType';
import { ChangelogCredentials } from './types/changelog';
import { ParseProduct, Product } from './types/product';

export class Changelog {
  private credentials: ChangelogCredentials;
  private isPreview: boolean;

  constructor(changelogCredentials: ChangelogCredentials, usePreview?: boolean) {
    this.credentials = changelogCredentials;
    this.isPreview = usePreview ?? false;
  }

  async getAllEntries(): Promise<ChangelogEntryList<ChangelogEntry[]>> {
    const response = await Search(this.credentials, this.isPreview);

    if (response.ok) return ParseRawData(response.val.data);

    return { entries: [], total: 0, hasNext: false, endCursor: '' };
  }

  async getEntriesByProduct(productId: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
    const response = await Search(this.credentials, this.isPreview, productId);

    if (response.ok) return ParseRawData(response.val.data);

    return { entries: [], total: 0, hasNext: false, endCursor: '' };
  }

  async getEntriesPaginated(pageSize: string, productId: string, changeTypeId: string, endCursor?: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
    const _pageSize: number = Number(pageSize) ?? undefined;
    const _endCursor: string = endCursor ?? '';

    const response = await PaginatedSearch(this.credentials, this.isPreview, _pageSize, _endCursor, productId, changeTypeId);
    if (response.ok) return ParseRawData(response.val.data);

    return { entries: [], total: 0, hasNext: false, endCursor: '' };
  }

  async getEntryByTitle(entryTitle: string, productId?: string, changeTypeId?: string): Promise<ChangelogEntry | null> {
    const response = await Search(this.credentials, this.isPreview, productId, changeTypeId, false, entryTitle, 1);

    if (response.ok && response.val.data.results.length > 0) return parseChangeLogItem(response.val.data.results[0]);

    return null;
  }

  async getSummarizedEntries(productId?: string, changeTypeId?: string): Promise<ChangelogEntryList<ChangelogEntrySummary[]>> {
    const response = await Search(this.credentials, this.isPreview, productId, changeTypeId, true, undefined, 50);

    if (response.ok) return ParseRawSummaryData(response.val.data);

    return { entries: [], total: 0, hasNext: false, endCursor: '' };
  }

  async getChangeTypes(): Promise<ChangeType[]> {
    const response = await GetAllChangeTypes(this.credentials, this.isPreview);

    if (response.err) {
      return [];
    }
    return ParseChangeType(response.val.data);
  }

  async getProducts(): Promise<Product[]> {
    // Get all products
    const response = await GetAllProducts(this.credentials, this.isPreview);

    if (response.err) {
      return [];
    }
    const products = ParseProduct(response.val.data);

    // Check whether there are entries that have it selected
    const asyncFunc = async () => {
      const results = await Promise.all(
        products.map(async (n) => {
          // No need to check in preview mode
          if (this.isPreview) {
            n.hasEntries = true;
            return n;
          }

          const count = await GetEntryCountByProductId(this.credentials, n.id, this.isPreview);

          if (count.err) return n;

          n.hasEntries = count.val > 0;
          return n;
        })
      );
      return results;
    };

    return asyncFunc();
  }
}
