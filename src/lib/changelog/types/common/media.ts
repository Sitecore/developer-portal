import { MediaFragment } from '@data/gql/generated/graphql';
import { getStringValue } from '@/src/lib/utils/stringUtil';

export type Media = {
  id: string;
  name: string;
  fileName: string;
  fileUrl: string;
  description: string;
  fileWidth: number;
  fileHeight: number;
  fileId: string;
  fileSize: string;
  fileType: string;
};

export type MediaResults = {
  total: string;
  results: Array<Media>;
};

/**
 * Parse a single Media item from raw GraphQL data
 * @param rawItem - GraphQL MediaFragment result
 * @returns Parsed Media
 */
export function parseMediaItem(rawItem: MediaFragment | null | undefined): Media {
  if (!rawItem) {
    throw new Error('Invalid Media: rawItem is null or undefined');
  }

  return {
    id: getStringValue(rawItem.system?.id),
    name: getStringValue(rawItem.system?.name),
    fileName: getStringValue(rawItem.system?.name),
    fileUrl: rawItem.media_publicLink ?? '',
    description: '',
    fileWidth: 0,
    fileHeight: 0,
    fileId: getStringValue(rawItem.system?.id),
    fileSize: '',
    fileType: rawItem.media_type?.[0]?.name ?? '',
  };
}

/**
 * Parse multiple Media items from raw GraphQL data array
 * @param rawItems - Array of GraphQL MediaFragment results
 * @returns Array of parsed Media items
 */
export function parseMediaItems(rawItems: Array<MediaFragment | null> | null | undefined): Array<Media> {
  if (!rawItems) {
    return [];
  }

  return rawItems.filter((img): img is MediaFragment => img !== null).map((img) => parseMediaItem(img));
}
