import { getCustomEntryByTitleAndDateQuery, SearchByTitleAndDateQuery, SearchByTitleAndDateQueryVariables } from '@data/gql/custom/getCustomEntryByTitleAndDateQuery';
import { getCustomEntryByTitleQuery } from '@data/gql/custom/getCustomEntryByTitleQuery';
import {
  GetAllChangetypesDocument,
  GetAllChangetypesQuery,
  GetAllChangetypesQueryVariables,
  GetAllProductsDocument,
  GetAllProductsQuery,
  GetAllProductsQueryVariables,
  GetAllStatusDocument,
  GetAllStatusQuery,
  GetAllStatusQueryVariables,
  GetNumberOfEntriesByProductDocument,
  GetNumberOfEntriesByProductQuery,
  GetNumberOfEntriesByProductQueryVariables,
  SearchByDateDocument,
  SearchByDateQuery,
  SearchByDateQueryVariables,
  SearchByProductDocument,
  SearchByProductQuery,
  SearchByProductQueryVariables,
  SearchByProductsAndChangeTypesAndBreakingChangeDocument,
  SearchByProductsAndChangeTypesAndBreakingChangeQuery,
  SearchByProductsAndChangeTypesAndBreakingChangeQueryVariables,
  SearchByProductsAndChangeTypesQuery,
  SearchByProductsAndChangeTypesQueryVariables,
  SearchByTitleQuery,
  SearchByTitleQueryVariables,
} from '@data/gql/generated/graphql';

import { getCustomEntryByTitleProductAndChangeTypeQuery } from '@/data/gql/custom/getCustomEntryByTitleProductAndChangeTypeQuery';
import { getSearchByProductsAndChangeTypesQuery } from '@/data/gql/custom/getSearchByProductsAndChangeTypesQuery';
import { getSelectedIds } from './common/changelog';
import { fetchGraphQL } from './common/fetch';
import { ParseStatus, Status } from './types';
import { ChangelogCredentials } from './types/changelog';
import { ChangelogEntry, ChangelogEntryList, parseChangeLogItem, ParseRawData } from './types/changeLogEntry';
import { ChangeType, ParseChangeType } from './types/changeType';
import { ParseProduct, Product } from './types/product';

// Cache for entry counts by product ID
interface CacheEntry {
  value: number;
  expiresAt: number;
}

const entryCountCache = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function getCacheKey(productId: string, preview: boolean): string {
  return `entryCount:${productId}:${preview}`;
}

function getCachedEntryCount(productId: string, preview: boolean): number | null {
  const key = getCacheKey(productId, preview);
  const entry = entryCountCache.get(key);
  
  if (!entry) {
    return null;
  }
  
  if (Date.now() > entry.expiresAt) {
    entryCountCache.delete(key);
    return null;
  }
  
  return entry.value;
}

function setCachedEntryCount(productId: string, preview: boolean, count: number): void {
  const key = getCacheKey(productId, preview);
  entryCountCache.set(key, {
    value: count,
    expiresAt: Date.now() + CACHE_TTL_MS,
  });
}

export class Changelog {
  private credentials: ChangelogCredentials;
  private isPreview: boolean;

  constructor(changelogCredentials: ChangelogCredentials, usePreview?: boolean) {
    this.credentials = changelogCredentials;
    this.isPreview = usePreview ?? false;
  }

  async getAllEntries(): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
    return this.getEntries({ pageSize: 10 });
  }

  async getEntryByTitleAndDate(entryTitle: string, date: string, productId?: string): Promise<ChangelogEntry> {
    const formattedDate = `${date.slice(4, 8)}-${date.slice(2, 4)}-${date.slice(0, 2)}`;
    const parsedDate = new Date(formattedDate);

    const _startDate = new Date(parsedDate);

    _startDate.setDate(parsedDate.getDate() - 1);

    const _endDate = new Date(parsedDate);

    _endDate.setDate(parsedDate.getDate() + 1);

    const productIds = productId ? [productId] : [];
    const CustomEntryByTitleDocument = getCustomEntryByTitleAndDateQuery(entryTitle, productIds);

    const response = await fetchGraphQL<SearchByTitleAndDateQuery, SearchByTitleAndDateQueryVariables>(CustomEntryByTitleDocument, this.credentials, this.isPreview, {
      startDate: _startDate,
      endDate: _endDate,
      productId: productIds.length > 0 ? productIds : null,
    });

    if (!response.data?.data?.results || response.data.data.results.length === 0) {
      throw new Error(`No changelog entry found for title "${entryTitle}" and date "${date}"`);
    }

    return parseChangeLogItem(response.data.data.results[0]);
  }

  async getEntryByTitle(entryTitle: string, productId?: string): Promise<ChangelogEntry> {
    const CustomEntryByTitleDocument = getCustomEntryByTitleQuery(entryTitle);
    const response = await fetchGraphQL<SearchByTitleQuery, SearchByTitleQueryVariables>(CustomEntryByTitleDocument, this.credentials, this.isPreview, {
      date: new Date(),
      productId: productId ? [productId] : [],
    });

    if (!response.data?.data?.results || response.data.data.results.length === 0) {
      throw new Error(`No changelog entry found for title "${entryTitle}"`);
    }

    return parseChangeLogItem(response.data.data.results[0]);
  }

  async getEntriesByDate(date: Date, pageSize?: number, endCursor?: string): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
    const _startDate = new Date(date);

    _startDate.setDate(date.getDate() - 1);

    const _endDate = new Date(date);

    _endDate.setDate(date.getDate() + 1);

    const response = await fetchGraphQL<SearchByDateQuery, SearchByDateQueryVariables>(SearchByDateDocument, this.credentials, this.isPreview, {
      startDate: _startDate,
      endDate: _endDate,
      first: pageSize ? pageSize : 5,
      after: endCursor ?? null,
    });

    return ParseRawData(response.data);
  }

  async getEntriesByProduct(productId: string): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
    const response = await fetchGraphQL<SearchByProductQuery, SearchByProductQueryVariables>(SearchByProductDocument, this.credentials, this.isPreview, {
      date: new Date(),
      productId: getSelectedIds(productId),
    });

    return ParseRawData(response.data);
  }

  async getEntriesPaginated(pageSize: string, productId: string, changeTypeId: string, endCursor?: string, breaking?: boolean): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
    return this.getEntries({ productId, changeTypeId, pageSize: Number(pageSize), endCursor, breaking });
  }

  async getEntriesByTitleProductChangeType({
    entryTitle,
    productId,
    changeTypeId,
    pageSize,
    endCursor,
    breaking = false,
  }: {
    entryTitle?: string;
    productId?: string;
    changeTypeId?: string;
    pageSize?: number;
    endCursor?: string;
    breaking?: boolean;
  } = {}): Promise<ChangelogEntryList<Array<ChangelogEntry>>> {
    // If there is no search query provided, return the normal entries
    if (entryTitle == undefined) {
      return this.getEntries({ productId, changeTypeId, pageSize, endCursor, breaking });
    }

    const CustomEntryByTitleProductAndChangeTypeDocument = getCustomEntryByTitleProductAndChangeTypeQuery(entryTitle);

    const response = await fetchGraphQL<SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables>(CustomEntryByTitleProductAndChangeTypeDocument, this.credentials, this.isPreview, {
      first: pageSize ? pageSize : 5,
      after: endCursor ?? '',
      date: new Date(),
      productIds: getSelectedIds(productId),
      changeTypeIds: getSelectedIds(changeTypeId),
    });

    if (response == null) {
      return ParseRawData(response);
    }

    return ParseRawData(response.data);
  }

  async getEntries({ productId, changeTypeId, pageSize, endCursor, breaking = false }: { productId?: string; changeTypeId?: string; pageSize?: number; endCursor?: string; breaking?: boolean } = {}): Promise<
    ChangelogEntryList<Array<ChangelogEntry>>
  > {
    const productIds = getSelectedIds(productId);
    const changeTypeIds = getSelectedIds(changeTypeId);

    let response;
    if (breaking == false) {
      const queryDocument = getSearchByProductsAndChangeTypesQuery(productIds, changeTypeIds);
      response = await fetchGraphQL<SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables>(queryDocument, this.credentials, this.isPreview, {
        first: pageSize ? pageSize : 5,
        after: endCursor ?? '',
        date: new Date(),
        productIds: productIds.length > 0 ? productIds : null,
        changeTypeIds: changeTypeIds.length > 0 ? changeTypeIds : null,
      });
    } else {
      response = await fetchGraphQL<SearchByProductsAndChangeTypesAndBreakingChangeQuery, SearchByProductsAndChangeTypesAndBreakingChangeQueryVariables>(SearchByProductsAndChangeTypesAndBreakingChangeDocument, this.credentials, this.isPreview, {
        first: pageSize ? pageSize : 5,
        after: endCursor ?? '',
        date: new Date(),
        productIds: productIds,
        changeTypeIds: changeTypeIds,
        breaking: breaking,
      });
    }

    if (response == null) {
      return ParseRawData(response);
    }

    return ParseRawData(response.data);
  }

  async getChangeTypes(): Promise<Array<ChangeType>> {
    const response = await fetchGraphQL<GetAllChangetypesQuery, GetAllChangetypesQueryVariables>(GetAllChangetypesDocument, this.credentials, this.isPreview);

    return ParseChangeType(response.data);
  }

  async getStatus(): Promise<Array<Status>> {
    const response = await fetchGraphQL<GetAllStatusQuery, GetAllStatusQueryVariables>(GetAllStatusDocument, this.credentials, this.isPreview);

    return ParseStatus(response.data);
  }

  async getProducts(): Promise<Array<Product>> {
    // Get all products
    const response = await fetchGraphQL<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, this.credentials, this.isPreview);
    const products = ParseProduct(response.data);

    // Check whether there are entries that have it selected
    const asyncFunc = async () => {
      const results = await Promise.all(
        products.map(async (n) => {
          // No need to check in preview mode
          // Combined logic: always check or set hasEntries in one block
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

export async function GetEntryCountByProductId(credentials: ChangelogCredentials, productId: string, preview: boolean): Promise<number> {
  // Check cache first
  const cachedCount = getCachedEntryCount(productId, preview);
  if (cachedCount !== null) {
    return cachedCount;
  }

  // Fetch from API if not in cache
  const response = await fetchGraphQL<GetNumberOfEntriesByProductQuery, GetNumberOfEntriesByProductQueryVariables>(GetNumberOfEntriesByProductDocument, credentials, preview, { productId: [productId] });

  const count = response?.data?.changelog.results.length ?? 0;

  // Store in cache
  setCachedEntryCount(productId, preview, count);

  return count;
}
