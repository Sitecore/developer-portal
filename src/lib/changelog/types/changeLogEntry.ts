import {
  ChangeTypeFragment,
  MediaFragment,
  ProductFragment,
  SearchByDateQuery,
  SearchByProductQuery,
  SearchByProductsAndChangeTypesAndBreakingChangeQuery,
  SearchByProductsAndChangeTypesQuery,
  SearchByTitleAndDateQuery,
  SearchByTitleQuery,
  StatusFragment,
} from '@data/gql/generated/graphql';
import { getStringValue } from '@lib/utils';
import { generateHTML } from '@tiptap/html';

import { richTextProfile } from '../common/richTextConfiguration';
import { formatReleaseDate } from '../utils/date';
import { ChangeType, parseChangeTypeItem } from './changeType';
import { parseMediaItem } from './common/media';
import { Media } from './index';
import SitecoreProduct, { parseSitecoreProductItem } from './sitecoreProduct';
import { parseStatusItem, Status } from './status';

/**
 * Type helper to extract changelog result item from query results
 * All query results have the same structure for the result items
 * We use the SearchByDateQuery structure as the base since all queries return the same item structure
 */
type ChangelogResultItem = NonNullable<NonNullable<NonNullable<SearchByDateQuery['changelog']>['results']>[number]>;

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

/**
 * Helper type to extract the common data structure from different query types
 */
type ChangelogQueryData =
  | SearchByDateQuery['changelog']
  | SearchByProductQuery['changelog']
  | SearchByProductsAndChangeTypesQuery['changelog']
  | SearchByProductsAndChangeTypesAndBreakingChangeQuery['changelog']
  | SearchByTitleQuery['data']
  | SearchByTitleAndDateQuery['data']
  | null
  | undefined;

/**
 * Parse raw GraphQL query data into ChangelogEntryList
 * @param data - GraphQL query result (can be from various query types)
 * @returns Parsed ChangelogEntryList
 */
export function ParseRawData(
  data: SearchByDateQuery | SearchByProductQuery | SearchByProductsAndChangeTypesQuery | SearchByProductsAndChangeTypesAndBreakingChangeQuery | SearchByTitleQuery | SearchByTitleAndDateQuery | null
): ChangelogEntryList<Array<ChangelogEntry>> {
  // Handle different query result structures
  const changelogData: ChangelogQueryData = data && 'changelog' in data ? data.changelog : data && 'data' in data ? data.data : null;

  if (!changelogData?.results) {
    return {
      endCursor: '',
      hasNext: false,
      total: 0,
      entries: [],
    };
  }

  return {
    endCursor: getStringValue(changelogData.cursor),
    hasNext: changelogData.hasMore ?? false,
    // Note: GraphQL schema doesn't expose total count in current queries
    // This would need to be added to the GraphQL query if total count is needed
    total: 0,
    entries: changelogData.results
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .map((item) => {
        return parseChangeLogItem(item as ChangelogResultItem);
      }),
  };
}

/**
 * Parse a release date string to a formatted date string
 * @param dateString - Date string to parse
 * @returns Formatted date string
 */
function parseReleaseDate(dateString: string | null | undefined): string {
  return formatReleaseDate(dateString);
}

/**
 * Parse rich text content to HTML string
 * @param content - Rich text content object
 * @returns HTML string
 */
function parseRichTextContent(content: { [key: string]: unknown } | null | undefined): string {
  if (!content) {
    return '';
  }

  return generateHTML(content, [richTextProfile]);
}

/**
 * Parse rich text content to HTML string or null
 * @param content - Rich text content object
 * @returns HTML string or null if content is empty
 */
function parseRichTextContentNullable(content: { [key: string]: unknown } | null | undefined): string | null {
  if (content == null) {
    return null;
  }

  if (!content.content) {
    return null;
  }

  return generateHTML(content, [richTextProfile]);
}

/**
 * Parse a single changelog item from GraphQL query result
 * @param changelog - Changelog result item from GraphQL query
 * @returns Parsed ChangelogEntry
 */
export function parseChangeLogItem(changelog: ChangelogResultItem | null | undefined): ChangelogEntry {
  if (!changelog) {
    throw new Error('Invalid changelog item: changelog is null or undefined');
  }

  // Extract and filter arrays safely
  // TypeScript has difficulty with the complex union types from GraphQL, so we use type assertions
  // after runtime checks
  const sitecoreProductResults = changelog.sitecoreProduct?.results;
  const changeTypeResults = changelog.changeType?.results;
  const imageResults = changelog.image?.results;
  const statusResults = changelog.status?.results;

  const sitecoreProducts = Array.isArray(sitecoreProductResults) ? sitecoreProductResults.filter((x): x is NonNullable<typeof x> => x !== null && typeof x === 'object') : [];
  const changeTypes = Array.isArray(changeTypeResults) ? changeTypeResults.filter((x): x is NonNullable<typeof x> => x !== null && typeof x === 'object') : [];
  const images = Array.isArray(imageResults) ? imageResults.filter((img): img is NonNullable<typeof img> => img !== null && typeof img === 'object') : [];
  const statuses = Array.isArray(statusResults) ? statusResults.filter((x): x is NonNullable<typeof x> => x !== null && typeof x === 'object') : [];

  // Parse all products
  const parsedProducts = sitecoreProducts.map((x) => parseSitecoreProductItem(x as unknown as ProductFragment));
  const firstProduct = parsedProducts[0];

  const firstStatus = statuses[0];

  // Safely extract changeType from the first change type item
  const firstChangeType = changeTypes[0];
  const changeTypeName = firstChangeType && 'changeType' in firstChangeType ? firstChangeType.changeType : null;

  return {
    id: getStringValue(changelog.system?.id),
    name: getStringValue(changelog.system?.name),
    readMoreLink: changelog.readMoreLink ?? '',
    title: changelog.title ?? '',
    description: changelog.description ? parseRichTextContent(changelog.description) : '',
    fullArticle: parseRichTextContentNullable(changelog.fullArticle),
    breakingChange: changelog.breakingChange ?? false,
    sitecoreProduct: parsedProducts,
    scheduled: changelog.scheduled ?? false,
    changeType: changeTypes.map((x) => parseChangeTypeItem(x as unknown as ChangeTypeFragment)),
    version: changelog.x_version ?? '',
    releaseDate: parseReleaseDate(changelog.releaseDate),
    image: images.map((img) => parseMediaItem(img as unknown as MediaFragment)),
    lightIcon: firstProduct?.lightIcon ?? '',
    darkIcon: firstProduct?.darkIcon ?? '',
    productName: firstProduct?.productName ?? null,
    products: parsedProducts,
    status: changelog.scheduled === true ? null : firstStatus ? parseStatusItem(firstStatus as unknown as StatusFragment) : null,
    changeTypeName,
  };
}
