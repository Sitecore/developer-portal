import { GetAllChangeTypes } from './lib/changeType';
import { GetAllProducts, GetEntryCountByProductId } from './lib/products';
import { PaginatedSearch, Search, SearchByDate } from './lib/search';
import { GetAllStatuses } from './lib/status';
import { ParseStatus, Status } from './types';
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
    return ParseRawData(response.data);
  }

  async getEntriesByProduct(productId: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
    const response = await Search(this.credentials, this.isPreview, productId);
    return ParseRawData(response.data);
  }

  async getEntriesPaginated(pageSize: string, productId: string, changeTypeId: string, endCursor?: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
    const _pageSize: number = Number(pageSize) ?? undefined;
    const _endCursor: string = endCursor ?? '';

    const response = await PaginatedSearch(this.credentials, this.isPreview, _pageSize, _endCursor, productId, changeTypeId);
    return ParseRawData(response.data);
  }

  async getEntryByTitle(entryTitle: string, productId?: string, changeTypeId?: string): Promise<ChangelogEntry> {
    const response = await Search(this.credentials, this.isPreview, productId, changeTypeId, false, entryTitle, 1);

    return parseChangeLogItem(response.data.results[0]);
  }

  async getEntriesByDate(date: Date, summary?: boolean, pageSize?: string, endCursor?: string): Promise<ChangelogEntryList<ChangelogEntry[]>> {
    const _pageSize: number = Number(pageSize) ?? undefined;
    const _endCursor: string = endCursor ?? '';

    const response = await SearchByDate(this.credentials, this.isPreview, date, summary, _pageSize, _endCursor);
    return ParseRawData(response.data);
  }

  async getSummarizedEntries(productId?: string, changeTypeId?: string): Promise<ChangelogEntryList<ChangelogEntrySummary[]>> {
    const response = await Search(this.credentials, this.isPreview, productId, changeTypeId, true, undefined, 50);
    return ParseRawSummaryData(response.data);
  }

  async getChangeTypes(): Promise<ChangeType[]> {
    const response = await GetAllChangeTypes(this.credentials, this.isPreview);
    return ParseChangeType(response.data);
  }

  async getStatus(): Promise<Status[]> {
    const response = await GetAllStatuses(this.credentials, this.isPreview);
    return ParseStatus(response.data);
  }

  async getProducts(): Promise<Product[]> {
    // Get all products
    const response = await GetAllProducts(this.credentials, this.isPreview);
    const products = ParseProduct(response.data);

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
          n.hasEntries = count > 0;
          return n;
        })
      );
      return results;
    };

    return asyncFunc();
  }
}
