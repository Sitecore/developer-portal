import { generateHTML } from '@tiptap/html';
import { GetChangeTypeById, GetProductByProductId } from '../constants/products';
import { richTextProfile } from '../lib/common/richTextConfiguration';
import { Changelog, ChangelogBase, ChangelogList } from './changelog';
import ChangeType from './changeType';
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
  imageId?: string;
  productName: string;
  changeTypeName: string;
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
    releaseDate: new Date(changelog.releaseDate).toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }),
    imageId: GetProductByProductId(changelog.sitecoreProduct.results[0]?.id)?.imageId,
    productName: GetProductByProductId(changelog.sitecoreProduct.results[0]?.id)?.name ?? '',
    changeTypeName: GetChangeTypeById(changelog.changeType.results[0]?.id)?.name ?? '',
  };
}

export function parseChangeLogItem(changelog: Changelog): ChangelogEntry {
  return {
    id: changelog.id,
    name: changelog.name,
    readMoreLink: changelog.readMoreLink,
    title: changelog.title,
    description: generateHTML(changelog.description, [richTextProfile]),
    fullArticle: changelog.fullArticle != null ? generateHTML(changelog.fullArticle, [richTextProfile]) : null,
    breakingChange: changelog.breakingChange,
    sitecoreProduct: changelog.sitecoreProduct.results,
    changeType: changelog.changeType.results,
    version: changelog.version,
    releaseDate: new Date(changelog.releaseDate).toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }),
    image: changelog.image.results,
    imageId: GetProductByProductId(changelog.sitecoreProduct.results[0]?.id)?.imageId,
    productName: GetProductByProductId(changelog.sitecoreProduct.results[0]?.id)?.name ?? '',
    changeTypeName: GetChangeTypeById(changelog.changeType.results[0]?.id)?.name ?? '',
  };
}
