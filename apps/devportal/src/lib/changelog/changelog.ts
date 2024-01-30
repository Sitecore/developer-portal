import axios from 'axios';
import { ChangelogEntriesPaginated, GetSummaryLatestItemsByProductAndChangeType } from 'sc-changelog/changelog';
import { QuerySearchApiResult } from 'sc-changelog/search/types';
import { ChangeType, Product } from 'sc-changelog/types';
import useSWR, { Fetcher } from 'swr';
import { Option } from 'ui/components/dropdown/MultiSelect';

export const entriesApiUrl = '/api/changelog/v1';

export type PreviewChangeLogParams = {
  limit: string;
  productName: string;
  endCursor?: string;
};

export async function PreviewChangeLog({ limit = '10', productName, endCursor }: PreviewChangeLogParams): Promise<QuerySearchApiResult> {
  const previewEntries = await ChangelogEntriesPaginated(true, limit, productName, '', endCursor);
  const previewEntriesByMonth = await GetSummaryLatestItemsByProductAndChangeType(true, productName, '');
  return { entries: previewEntries.entries, facets: [], entriesByMonth: previewEntriesByMonth.entries, isMore: previewEntries.hasNext, endCursor: previewEntries.endCursor };
}

export type PreviewChangeLogSearchParams = {
  products: Option[];
  changeType: Option[];
  currentProduct?: Product;
  cursor?: string
};

export async function SearchPreviewChangeLog({ products = [], changeType = [], currentProduct, cursor }: PreviewChangeLogSearchParams): Promise<QuerySearchApiResult> {
  const query = buildQuerystring(products != null ? products : [], changeType, cursor ?? undefined, currentProduct != undefined ? currentProduct : undefined);
  const url = `${entriesApiUrl}?${query.join('&')}`;
  const data = await axios.get(url).then((response) => response.data);

  query.push(`limit=50`);
  const url2 = `${entriesApiUrl}?${query.join('&')}`;
  const data2 = await axios.get(url2).then((response) => response.data);

  return { entries: data.entries, facets: [], entriesByMonth: data2.entries, isMore: true, endCursor: data.endCursor };
}

export function getChangeTypeOptions(): Option[] {
  const fetcher: Fetcher<ChangeType[], string> = async (url: string) => await axios.get(url).then((response) => response.data);
  const { data: changeTypes, error } = useSWR(`${entriesApiUrl}/types`, fetcher);

  if (error) console.log(error);

  if (changeTypes) return changeTypes?.map((e: ChangeType) => ({ label: e.name, value: e.id }));
  return [];
}

export function getProductOptions(): Option[] {
  const fetcher: Fetcher<Product[], string> = async (url: string) => await axios.get(url).then((response) => response.data);
  const { data: products, error } = useSWR(`${entriesApiUrl}/products?all=false`, fetcher);

  if (error) console.log(error);

  if (products) return products?.map((e: Product) => ({ label: e.name, value: e.id }));
  return [];
}

export function buildProductQuerystring(product?: Product, selectedProducts?: Option[]): string {
  const query: string[] = [];

  if (product) query.push(`product=${product.id}`);

  if (selectedProducts) {
    selectedProducts.map((p) => {
      query.push(`product=${p.value}`);
    });
  }

  return query.join('&');
}

export function buildQuerystring(products: Option[], changes: Option[], cursor?: string, initialProduct?: Product): string[] {
  const query: string[] = [];
  const PAGE_SIZE = 10;

  if (initialProduct) query.push(`product=${initialProduct.id}`);

  query.push(`limit=${PAGE_SIZE}`);
  products.map((p) => {
    query.push(`product=${p.value}`);
  });
  changes.map((c) => {
    query.push(`changeType=${c.value}`);
  });

  if (cursor) {
    query.push(`end=${cursor}`);
  }
  console.log(query);
  return query;
}
