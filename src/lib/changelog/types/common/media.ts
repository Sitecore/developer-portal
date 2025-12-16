import { getStringValue } from '@lib/utils';

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
 */
export function parseMediaItem(rawItem: any): Media {
  return {
    id: getStringValue(rawItem?.system?.id),
    name: getStringValue(rawItem?.system?.name),
    fileName: getStringValue(rawItem?.system?.name),
    fileUrl: rawItem?.media_publicLink ?? '',
    description: '',
    fileWidth: 0,
    fileHeight: 0,
    fileId: getStringValue(rawItem?.system?.id),
    fileSize: '',
    fileType: rawItem?.media_type?.[0]?.name ?? '',
  };
}

/**
 * Parse multiple Media items from raw GraphQL data array
 */
export function parseMediaItems(rawItems: any[] | null | undefined): Array<Media> {
  if (!rawItems) {
    return [];
  }

  return rawItems.map((img) => parseMediaItem(img));
}
