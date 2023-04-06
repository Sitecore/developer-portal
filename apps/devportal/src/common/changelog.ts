import ChangeType from '@/../../packages/sc-changelog/types/changeType';
import Product from '@/../../packages/sc-changelog/types/product';
import { slugify } from '@/../../packages/sc-changelog/utils/stringUtils';
import axios from 'axios';
import { ChangelogEntry, ChangelogEntrySummary } from 'sc-changelog/types/changeLogEntry';
//import { Fetcher } from 'swr';
import { GetSummaryLatestItemsByProductAndChangeType } from '@/../../packages/sc-changelog/changelog';
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

export const getOverviewPerMonth: any = async (products?: Product[], changes?: ChangeType[]) => {
  const items = await GetSummaryLatestItemsByProductAndChangeType(products?.join('|'), changes?.join('|'));
  const entries: ChangelogEntrySummary[] = items.entries;

  const groupedObjects = entries.reduce((collection, obj) => {
    const monthYear = new Date(obj.releaseDate).toLocaleString('en-US', { month: 'short', year: 'numeric' });
    if (!collection[monthYear]) {
      collection[monthYear] = [];
    }
    collection[monthYear].push(obj);

    // Sort updates within a month (latest first)
    collection[monthYear].sort((a, b) => {
      const earliestDateA = new Date(a.releaseDate);
      const earliestDateB = new Date(b.releaseDate);
      return earliestDateB.getTime() - earliestDateA.getTime();
    });
    return collection;
  }, {} as Record<string, ChangelogEntrySummary[]>);

  // Sort the keys (year-month)
  const sorted = Object.entries(groupedObjects)
    .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
    .reduce((acc, [date, value]) => ({ ...acc, [date]: value }), {});

  return sorted;
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
