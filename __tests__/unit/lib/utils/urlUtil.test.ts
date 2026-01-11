import { getChangelogEntryUrl, getChangelogEntryUrlSegments } from '@/src/lib/util/urlUtil';
import type { ChangelogEntry } from '@src/lib/changelog/types';
import { describe, expect, test } from 'vitest';

const dummyEntry: ChangelogEntry = {
  id: '0uYMWlsdMUmmHD7wGsEbCA',
  name: 'MDOC-5034 - Fixed issues in Content Hub July 22, 2024',
  readMoreLink: 'https://doc.sitecore.com/ch',
  title: 'Fixed issues in Content Hub July 22, 2024',
  description: '<ul><li><p>Dynamic filters in search results now work as intended. <em>(MONE-46539)</em></p></li></ul>',
  fullArticle: null,
  breakingChange: false,
  sitecoreProduct: [
    {
      id: '8OiTP5UKXE-RRpU17Vpq4A',
      productName: 'Content Hub',
      productDescription: '',
      darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
      lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
    },
  ],
  scheduled: false,
  changeType: [{ id: 'jNZQWrssyEaU7gwlIYpJnQ', name: 'Resolved', changeType: 'Resolved', type: 'Resolved' }],
  version: '',
  releaseDate: 'Jul 22, 2024',
  image: [],
  lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
  darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
  productName: 'Content Hub',
  products: [
    {
      id: '8OiTP5UKXE-RRpU17Vpq4A',
      productName: 'Content Hub',
      productDescription: '',
      darkIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub-dark',
      lightIcon: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/mark-content_hub',
    },
  ],
  status: { id: 'pNOVO2dhtESFOSwd4Va84w', name: 'Available', identifier: 'available', description: '' },
  changeTypeName: 'Resolved',
};

describe('getChangelogEntryUrlSegments', () => {
  test('should return the URL segments for a ChangelogEntry', () => {
    const segments = getChangelogEntryUrlSegments(dummyEntry);

    expect(segments).toEqual(['content-hub', '22072024', 'fixed-issues-in-content-hub-july-22%2c-2024']);
  });

  test('should return the URL segments for a ChangelogEntrySummary', () => {
    const segments = getChangelogEntryUrlSegments(dummyEntry);

    expect(segments).toEqual(['content-hub', '22072024', 'fixed-issues-in-content-hub-july-22%2c-2024']);
  });
});

describe('getChangelogEntryUrl', () => {
  test('should return the URL for a ChangelogEntry', () => {
    const url = getChangelogEntryUrl(dummyEntry);

    expect(url).toBe('/changelog/content-hub/22072024/fixed-issues-in-content-hub-july-22%2c-2024');
  });

  test('should return the URL for a ChangelogEntrySummary', () => {
    const url = getChangelogEntryUrl(dummyEntry);

    expect(url).toBe('/changelog/content-hub/22072024/fixed-issues-in-content-hub-july-22%2c-2024');
  });

  test('should return the URL with the server URL included', () => {
    const url = getChangelogEntryUrl(dummyEntry, true);

    expect(url).toBe('/changelog/content-hub/22072024/fixed-issues-in-content-hub-july-22%2c-2024');
  });
});
