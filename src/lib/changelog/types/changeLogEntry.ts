import { GetLatestEntriesQuery } from '@data/gql/generated/graphql';
import { clearTimeStamp, getStringValue } from '@lib/utils';
import { generateHTML } from '@tiptap/html';
import { richTextProfile } from '../common/richTextConfiguration';
import { ChangeType } from './changeType';
import { Media } from './index';
import SitecoreProduct from './sitecoreProduct';
import { DefaultStatus, Status } from './status';

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
  scheduled: boolean;
  status: Status;
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

export function ParseRawData(data: GetLatestEntriesQuery | null): ChangelogEntryList<ChangelogEntry[]> {
  if (data == null || !data.changelog?.results)
    return {
      endCursor: '',
      hasNext: false,
      total: 0,
      entries: [],
    };

  return {
    endCursor: getStringValue(data.changelog.pageInfo?.endCursor),
    hasNext: data.changelog.pageInfo?.hasNext ?? false,
    total: data.changelog.total ?? 0,
    entries: data.changelog.results.map((item) => {
      return parseChangeLogItem(item);
    }),
  };
}

export function parseChangeLogItem(changelog: any): ChangelogEntry {
  return {
    id: getStringValue(changelog?.id),
    name: changelog.name,
    readMoreLink: changelog.readMoreLink,
    title: changelog.title,
    description: changelog.description ? generateHTML(changelog.description, [richTextProfile]) : '',
    fullArticle: changelog.fullArticle != null && changelog.fullArticle?.content ? generateHTML(changelog.fullArticle, [richTextProfile]) : null,
    breakingChange: changelog.breakingChange,
    sitecoreProduct: changelog.sitecoreProduct.results,
    scheduled: changelog.scheduled ? changelog.scheduled : false,
    changeType: changelog.changeType.results,
    version: changelog.version,
    releaseDate: new Date(clearTimeStamp(changelog.releaseDate)).toLocaleDateString(['en-US'], { year: 'numeric', month: 'short', day: 'numeric' }),
    image: changelog.image?.results,
    lightIcon: changelog.sitecoreProduct.results[0]?.lightIcon,
    darkIcon: changelog.sitecoreProduct.results[0]?.darkIcon,
    productName: changelog.sitecoreProduct.results[0]?.productName ?? null,
    products: changelog.sitecoreProduct.results ?? null,
    status: changelog.scheduled == true ? null : changelog.status.results[0] ? changelog.status.results[0] : DefaultStatus,
    changeTypeName: changelog.changeType.results[0]?.changeType ?? null,
  };
}
