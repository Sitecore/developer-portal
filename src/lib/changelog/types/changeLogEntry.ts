import { SearchByDateQuery, SearchByProductQuery, SearchByProductsAndChangeTypesAndBreakingChangeQuery, SearchByProductsAndChangeTypesQuery } from '@data/gql/generated/graphql';
import { clearTimeStamp, getStringValue } from '@lib/utils';
import { generateHTML } from '@tiptap/html';

import { richTextProfile } from '../common/richTextConfiguration';
import { ChangeType, parseChangeTypeItem } from './changeType';
import { parseMediaItem } from './common/media';
import { Media } from './index';
import SitecoreProduct, { parseSitecoreProductItem } from './sitecoreProduct';
import { parseStatusItem, Status } from './status';

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
  status: Status | null;
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

export function ParseRawData(data: SearchByDateQuery | SearchByProductQuery | SearchByProductsAndChangeTypesQuery | SearchByProductsAndChangeTypesAndBreakingChangeQuery | null): ChangelogEntryList<Array<ChangelogEntry>> {
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

/**
 * Parse a release date string to a formatted date string
 */
function parseReleaseDate(dateString: string | null | undefined): string {
  if (!dateString) {
    return '';
  }

  const clearedDate = clearTimeStamp(dateString);
  if (!clearedDate) {
    return '';
  }

  const date = new Date(clearedDate);
  if (isNaN(date.getTime())) {
    console.warn(`Invalid date: ${dateString}`);
    return '';
  }

  return date.toLocaleDateString(['en-US'], { year: 'numeric', month: 'short', day: 'numeric' });
}

/**
 * Parse rich text content to HTML string
 */
function parseRichTextContent(content: any): string {
  if (!content) {
    return '';
  }

  return generateHTML(content, [richTextProfile]);
}

/**
 * Parse rich text content to HTML string or null
 */
function parseRichTextContentNullable(content: any): string | null {
  if (content == null) {
    return null;
  }

  if (!content.content) {
    return null;
  }

  return generateHTML(content, [richTextProfile]);
}

export function parseChangeLogItem(changelog: any): ChangelogEntry {
  const sitecoreProducts = changelog.sitecoreProduct?.results ?? [];
  const changeTypes = changelog.changeType?.results ?? [];
  const images = changelog.image?.results ?? [];

  // Parse all products
  const parsedProducts = sitecoreProducts.map((x: any) => parseSitecoreProductItem(x));
  const firstProduct = parsedProducts[0];

  return {
    id: getStringValue(changelog?.system?.id),
    name: getStringValue(changelog?.system?.name),
    readMoreLink: changelog.readMoreLink ?? '',
    title: changelog.title ?? '',
    description: changelog.description ? parseRichTextContent(changelog.description) : '',
    fullArticle: parseRichTextContentNullable(changelog.fullArticle),
    breakingChange: changelog.breakingChange ?? false,
    sitecoreProduct: parsedProducts,
    scheduled: changelog.scheduled ? changelog.scheduled : false,
    changeType: changeTypes.map((x: any) => parseChangeTypeItem(x)),
    version: changelog.x_version ?? '',
    releaseDate: parseReleaseDate(changelog.releaseDate),
    image: images.map((img: any) => parseMediaItem(img)),
    lightIcon: firstProduct?.lightIcon ?? '',
    darkIcon: firstProduct?.darkIcon ?? '',
    productName: firstProduct?.productName ?? null,
    products: parsedProducts,
    status: changelog.scheduled == true ? null : changelog.status?.results?.[0] ? parseStatusItem(changelog.status.results[0]) : null,
    changeTypeName: changeTypes[0]?.changeType ?? null,
  };
}
