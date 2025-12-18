import { ChangelogEntryList } from '@lib/changelog/types';
import { mockedChangelogEntry, mockedChangelogEntries } from '__mocks__/changelog/changelogEntry.mock';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

const originalEnv = process.env.NEXT_PUBLIC_PUBLIC_URL;

vi.mock('@lib/utils', () => ({
  getChangelogEntryUrl: vi.fn((entry) => `changelog/${entry.id}`),
}));

describe('CreateFeed', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.NEXT_PUBLIC_PUBLIC_URL = 'https://example.com';
    // Force module reload to pick up new env var
    vi.resetModules();
  });

  afterEach(() => {
    process.env.NEXT_PUBLIC_PUBLIC_URL = originalEnv;
    vi.resetModules();
  });

  test('should create feed with correct metadata', async () => {
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');
    const entryList: ChangelogEntryList<Array<typeof mockedChangelogEntry>> = {
      total: 1,
      hasNext: false,
      endCursor: '',
      entries: [mockedChangelogEntry],
    };

    const feed = CreateFeedReloaded(entryList);

    expect(feed.options.title).toBe('Sitecore Changelog');
    expect(feed.options.description).toBe('Learn more about new versions, changes and improvements!');
    expect(feed.options.id).toBe('https://example.com/changelog');
    expect(feed.options.link).toBe('https://example.com/changelog');
    expect(feed.options.language).toBe('en');
    expect(feed.options.image).toBe('https://example.com/image.png');
    expect(feed.options.favicon).toBe('https://example.com/favicon.ico');
    expect(feed.options.copyright).toBe('All rights reserved 2024, Sitecore');
    expect(feed.options.generator).toBe('Feed for Node.js');
    expect(feed.options.author).toEqual({
      name: 'Sitecore',
      email: 'no-reply@sitecore.com',
      link: 'https://example.com',
    });
  });

  test('should handle missing public URL', async () => {
    delete process.env.NEXT_PUBLIC_PUBLIC_URL;
    vi.resetModules();
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');

    const entryList: ChangelogEntryList<Array<typeof mockedChangelogEntry>> = {
      total: 1,
      hasNext: false,
      endCursor: '',
      entries: [mockedChangelogEntry],
    };

    const feed = CreateFeedReloaded(entryList);

    expect(feed.options.id).toBe('/changelog');
    expect(feed.options.link).toBe('/changelog');
  });

  test('should add entries to feed', async () => {
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');
    const entryList: ChangelogEntryList<Array<typeof mockedChangelogEntry>> = {
      total: 1,
      hasNext: false,
      endCursor: '',
      entries: [mockedChangelogEntry],
    };

    const feed = CreateFeedReloaded(entryList);

    const items = feed.items;
    expect(items).toHaveLength(1);
    expect(items[0].title).toBe(mockedChangelogEntry.title);
    expect(items[0].description).toBe(mockedChangelogEntry.description);
    expect(items[0].content).toBe('');
    expect(items[0].link).toBe('https://example.com/changelog/FhtEs6vt80qgrzCuP5nxdA');
    expect(items[0].guid).toBe(mockedChangelogEntry.id);
    expect(items[0].date).toBeInstanceOf(Date);
  });

  test('should handle entries with fullArticle', async () => {
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');
    const entryWithFullArticle = {
      ...mockedChangelogEntry,
      fullArticle: '<p>Full article content</p>',
    };

    const entryList: ChangelogEntryList<Array<typeof entryWithFullArticle>> = {
      total: 1,
      hasNext: false,
      endCursor: '',
      entries: [entryWithFullArticle],
    };

    const feed = CreateFeedReloaded(entryList);

    expect(feed.items[0].content).toBe('<p>Full article content</p>');
  });

  test('should handle entries with images', async () => {
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');
    
    // Create entry with image
    const entryWithImage = {
      ...mockedChangelogEntry,
      image: [
        {
          id: 'img-1',
          name: 'test.png',
          fileName: 'test.png',
          fileUrl: 'https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/da693ca9-8504-4b34-319a-08db21b77927/3cf1860ea0d04caf8b1df611c82f46a2',
          description: '',
          fileWidth: 827,
          fileHeight: 231,
          fileId: '3cf1860ea0d04caf8b1df611c82f46a2',
          fileSize: '14991',
          fileType: 'image/png',
        },
      ],
    };

    const entryList: ChangelogEntryList<Array<typeof entryWithImage>> = {
      total: 1,
      hasNext: false,
      endCursor: '',
      entries: [entryWithImage],
    };

    const feed = CreateFeedReloaded(entryList);

    expect(feed.items[0].image).toBe(
      'https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/da693ca9-8504-4b34-319a-08db21b77927/3cf1860ea0d04caf8b1df611c82f46a2?transform=true'
    );
  });

  test('should handle entries without images', async () => {
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');
    const entryWithoutImage = {
      ...mockedChangelogEntry,
      image: [],
    };

    const entryList: ChangelogEntryList<Array<typeof entryWithoutImage>> = {
      total: 1,
      hasNext: false,
      endCursor: '',
      entries: [entryWithoutImage],
    };

    const feed = CreateFeedReloaded(entryList);

    expect(feed.items[0].image).toBe('');
  });

  test('should handle entries with empty image array', async () => {
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');
    const entryWithEmptyImage = {
      ...mockedChangelogEntry,
      image: [],
    };

    const entryList: ChangelogEntryList<Array<typeof entryWithEmptyImage>> = {
      total: 1,
      hasNext: false,
      endCursor: '',
      entries: [entryWithEmptyImage],
    };

    const feed = CreateFeedReloaded(entryList);

    expect(feed.items[0].image).toBe('');
  });

  test('should handle multiple entries', async () => {
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');
    const entryList: ChangelogEntryList<Array<typeof mockedChangelogEntry>> = {
      total: 2,
      hasNext: false,
      endCursor: '',
      entries: mockedChangelogEntries.slice(0, 2),
    };

    const feed = CreateFeedReloaded(entryList);

    expect(feed.items).toHaveLength(2);
    expect(feed.items[0].title).toBe(mockedChangelogEntries[0].title);
    expect(feed.items[1].title).toBe(mockedChangelogEntries[1].title);
  });

  test('should handle empty entry list', async () => {
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');
    const entryList: ChangelogEntryList<Array<typeof mockedChangelogEntry>> = {
      total: 0,
      hasNext: false,
      endCursor: '',
      entries: [],
    };

    const feed = CreateFeedReloaded(entryList);

    expect(feed.items).toHaveLength(0);
  });

  test('should format release date correctly', async () => {
    const { CreateFeed: CreateFeedReloaded } = await import('@lib/changelog/feeds');
    const entryList: ChangelogEntryList<Array<typeof mockedChangelogEntry>> = {
      total: 1,
      hasNext: false,
      endCursor: '',
      entries: [mockedChangelogEntry],
    };

    const feed = CreateFeedReloaded(entryList);

    expect(feed.items[0].date).toBeInstanceOf(Date);
  });
});

