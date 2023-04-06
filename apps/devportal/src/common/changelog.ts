import ChangeType from '@/../../packages/sc-changelog/types/changeType';
import Product from '@/../../packages/sc-changelog/types/product';
import { slugify } from '@/../../packages/sc-changelog/utils/stringUtils';
import axios from 'axios';
import { ChangelogEntry, ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';
//import { Fetcher } from 'swr';
import { Option } from '@/../../packages/ui/components/dropdown/MultiSelect';
import useSWR, { Fetcher } from 'swr';

export function OrderByMonthAndYear(items: ChangelogEntry[]): { [month: string]: ChangelogEntry[] } {
  const entriesByMonth: { [month: string]: ChangelogEntry[] } = {};

  items.forEach((post) => {
    const month = new Date(post.releaseDate).toLocaleString('en-US', { month: 'short', year: 'numeric' });
    if (!entriesByMonth[month]) {
      entriesByMonth[month] = [];
    }
    entriesByMonth[month].push(post);
  });

  return entriesByMonth;
}

export function getChangelogEntryUrlSegments(entry: ChangelogEntry | ChangelogEntrySummary): string[] {
  const segments: string[] = [];

  segments.push(slugify(entry.productName));
  //segments.push(slugify(entry.changeTypeName));
  segments.push(`${slugify(entry.title)}`);

  return segments;
}

export function getChangelogEntryUrl(entry: ChangelogEntry | ChangelogEntrySummary): string {
  const url: string[] = [];

  url.push('/changelog');
  url.push(...getChangelogEntryUrlSegments(entry));
  return url.join('/');
}

const entriesApiUrl = '/api/changelog';

export const getChangeTypes = () => {
  const fetcher: Fetcher<ChangeType[], string> = async (url: string) => await axios.get(url).then((response) => response.data);

  const { data: changeTypes, error } = useSWR('/api/changelog/types', fetcher);
  return { changeTypes, error };
};

export const getChangeTypeOptions = () => {
  const { changeTypes, error } = getChangeTypes();

  if (changeTypes) return changeTypes?.map((e: ChangeType) => ({ label: e.name, value: e.id }));

  return [];
};

export const getProducts = () => {
  const fetcher: Fetcher<Product[], string> = async (url: string) => await axios.get(url).then((response) => response.data);
  const { data: products, error } = useSWR('/api/changelog/products?all=false', fetcher);
  return { products, error };
};

export const getProductOptions = () => {
  const { products, error } = getProducts();

  if (products) return products?.map((e: Product) => ({ label: e.name, value: e.id }));
  return [];
};

export function buildQuerystring(products: Option[], changes: Option[], cursor?: string, initialProduct?: Product): string[] {
  const query: string[] = [];
  const PAGE_SIZE = 5;

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
  return query;
}

//export function getChangelogEntries(products: Option[], changes: Option[], cursor: string) {
//  const fetcher: Fetcher<ChangelogEntryList<ChangelogEntry[]>, string> = async (url: string) => await axios.get(url).then((response) => response.//data);
//
//  const query: string[] = [];
//  const PAGE_SIZE = 5;
//
//  products.map((p) => {
//    query.push(`product=${p.value}`);
//  });
//
//  changes.map((c) => {
//    query.push(`changeType=${c.value}`);
//  });
//
//  if (cursor) {
//    query.push(`end=${cursor}`);
//  }
//
//  const getKey = (pageIndex, previousPageData) => {
//    if (previousPageData && !previousPageData.items.pageInfo.hasNextPage) {
//      return null; // reached end of list
//    }
//
//    const cursor = previousPageData ? previousPageData.items.pageInfo.endCursor : null;
//
//    return [`/api/changelog?limit=${PAGE_SIZE}&${query.join('&')}`, cursor];
//  };
//
//  //  const getKey = (pageIndex: number, previousData: ChangelogEntryList<ChangelogEntry>) => {
//  //    pageIndex = pageIndex + 1;
//  //    if (previousData && !previousData.entries) return null;
//  //  };
//
//  //  const { data, error } = useSWRInfinite(getKey, fetcher);
//  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
//
//  const items = data ? data.flatMap((page) => page.entries.map((edge) => edge)) : [];
//
//  console.log(items);
//
//  return items;
//}
//
