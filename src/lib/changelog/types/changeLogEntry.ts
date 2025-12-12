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
  products: Array<SitecoreProduct> | null;
  changeTypeName: string | null;
  scheduled: boolean;
  status: Status;
};

export type ChangelogEntry = ChangelogEntrySummary & {
  sitecoreProduct: Array<SitecoreProduct>;
  name: string;
  readMoreLink: string;
  description: string;
  fullArticle?: string | null;
  breakingChange: boolean;
  changeType: Array<ChangeType>;
  version: string;
  image: Array<Media>;
};

export function ParseRawData(data: GetLatestEntriesQuery | null): ChangelogEntryList<Array<ChangelogEntry>> {
  if (data == null || !data.changelog?.results) {
    return {
      endCursor: '',
      hasNext: false,
      total: 0,
      entries: [],
    };
  }

  return {
    endCursor: getStringValue(data.changelog.cursor),
    hasNext: data.changelog.hasMore ?? false,
    total: 0, // TODO [IVA] Where to get totals?
    entries: data.changelog.results.map((item) => {
      return parseChangeLogItem(item);
    }),
  };
}

export function parseChangeLogItem(changelog: any): ChangelogEntry {
  return {
    id: getStringValue(changelog?.system?.id),
    name: getStringValue(changelog?.system?.name),
    readMoreLink: changelog.readMoreLink ?? '',
    title: changelog.title ?? '',
    description: changelog.description ? generateHTML(changelog.description, [richTextProfile]) : '',
    fullArticle: changelog.fullArticle != null && changelog.fullArticle?.content ? generateHTML(changelog.fullArticle, [richTextProfile]) : null,
    breakingChange: changelog.breakingChange ?? false,
    sitecoreProduct: changelog.sitecoreProduct?.results ?? [],
    scheduled: changelog.scheduled ? changelog.scheduled : false,
    changeType: changelog.changeType?.results ?? [],
    version: changelog.x_version ?? '',
    releaseDate: changelog.releaseDate
      ? (() => {
          const dateString = clearTimeStamp(changelog.releaseDate);
          if (!dateString) {
            return '';
          }
          const date = new Date(dateString);
          if (isNaN(date.getTime())) {
            console.warn(`Invalid date: ${changelog.releaseDate}`);
            return '';
          }
          return date.toLocaleDateString(['en-US'], { year: 'numeric', month: 'short', day: 'numeric' });
        })()
      : '',
    image: (changelog.image?.results ?? []).map((img: any) => ({
      id: getStringValue(img?.system?.id),
      name: getStringValue(img?.system?.name),
      fileName: getStringValue(img?.system?.name),
      fileUrl: img?.media_publicLink ?? '',
      description: '',
      fileWidth: 0,
      fileHeight: 0,
      fileId: getStringValue(img?.system?.id),
      fileSize: '',
      fileType: img?.media_type?.[0]?.name ?? '',
    })),
    lightIcon: changelog.sitecoreProduct?.results[0]?.lightIcon ?? '',
    darkIcon: changelog.sitecoreProduct?.results[0]?.darkIcon ?? '',
    productName: changelog.sitecoreProduct?.results[0]?.productName ?? null,
    products: changelog.sitecoreProduct?.results ?? null,
    status: changelog.scheduled == true ? null : changelog.status?.results[0] ? changelog.status.results[0] : DefaultStatus,
    changeTypeName: changelog.changeType?.results[0]?.changeType ?? null,
  };
}
