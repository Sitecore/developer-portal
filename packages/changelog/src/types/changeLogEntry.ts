import { generateHTML } from '@tiptap/html';
import { richTextProfile } from '../lib/common/richTextConfiguration';
import { ChangeType } from './changeType';
import { Changelog, ChangelogBase, ChangelogList } from './changelog';
import { Media } from './index';
import SitecoreProduct from './sitecoreProduct';

export type ChangelogEntryList<T> = {
  total: number;
  hasNext: boolean;
  endCursor: string;
  entries: T;
};

export type ChangelogEntrySummary = {
  id: string;
  title: string;
  releaseDate: string;
  lightIcon: string;
  darkIcon: string;
  productName: string | null;
  products: SitecoreProduct[] | null;
  changeTypeName: string | null;
};

export type ChangelogEntry = ChangelogEntrySummary & {
  sitecoreProduct: SitecoreProduct[];
  name: string;
  readMoreLink: string;
  description: string;
  fullArticle?: string | null;
  breakingChange: boolean;
  changeType: ChangeType[];
  version: string;
  image: Media[];
};

export function ParseRawData(data: ChangelogList): ChangelogEntryList<ChangelogEntry[]> {
  if (!data.results || data.results.length == 0)
    return {
      endCursor: '',
      hasNext: false,
      total: 0,
      entries: [],
    };

  return {
    endCursor: data.pageInfo.endCursor,
    hasNext: data.pageInfo.hasNext,
    total: data.total,
    entries: data.results.map((item: Changelog) => {
      return parseChangeLogItem(item);
    }),
  };
}

export function ParseRawSummaryData(data: ChangelogList): ChangelogEntryList<ChangelogEntrySummary[]> {
  return {
    endCursor: data.pageInfo.endCursor,
    hasNext: data.pageInfo.hasNext,
    total: data.total,
    entries: data.results.map((item: Changelog) => {
      return parseChangeLogSummaryItem(item);
    }),
  };
}

function parseChangeLogSummaryItem(changelog: ChangelogBase): ChangelogEntrySummary {
  return {
    id: changelog.id,
    title: changelog.title,
    releaseDate: new Date(changelog.releaseDate).toLocaleDateString(['en-US'], { year: 'numeric', month: 'short', day: 'numeric' }),
    lightIcon: changelog.sitecoreProduct.results[0]?.lightIcon,
    darkIcon: changelog.sitecoreProduct.results[0]?.darkIcon,
    productName: changelog.sitecoreProduct.results[0]?.productName ?? null,
    products: changelog.sitecoreProduct.results ?? null,
    changeTypeName: changelog.changeType.results[0]?.changeType ?? null,
  };
}

export function parseChangeLogItem(changelog: Changelog): ChangelogEntry {
  return {
    id: changelog.id,
    name: changelog.name,
    readMoreLink: changelog.readMoreLink,
    title: changelog.title,
    description: generateHTML(changelog.description, [richTextProfile]),
    fullArticle: changelog.fullArticle != null && changelog.fullArticle?.content ? generateHTML(changelog.fullArticle, [richTextProfile]) : null,
    breakingChange: changelog.breakingChange,
    sitecoreProduct: changelog.sitecoreProduct.results,
    changeType: changelog.changeType.results,
    version: changelog.version,
    releaseDate: new Date(changelog.releaseDate).toLocaleDateString(['en-US'], { year: 'numeric', month: 'short', day: 'numeric' }),
    image: changelog.image.results,
    lightIcon: changelog.sitecoreProduct.results[0]?.lightIcon,
    darkIcon: changelog.sitecoreProduct.results[0]?.darkIcon,
    productName: changelog.sitecoreProduct.results[0]?.productName ?? null,
    products: changelog.sitecoreProduct.results ?? null,
    changeTypeName: changelog.changeType.results[0]?.changeType ?? null,
  };
}
