import { ParseRawData, parseChangeLogItem } from '@lib/changelog/types/changeLogEntry';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('@tiptap/html', () => ({
  generateHTML: vi.fn((content) => `<p>${JSON.stringify(content)}</p>`),
}));

vi.mock('@lib/changelog/utils/date', () => ({
  formatReleaseDate: vi.fn((date) => (date ? 'Jul 12, 2024' : '')),
}));

vi.mock('@lib/utils', () => ({
  getStringValue: vi.fn((value) => value ?? ''),
}));

vi.mock('@lib/changelog/types/changeType', () => ({
  parseChangeTypeItem: vi.fn((item) => ({
    id: 'change-1',
    name: 'Feature',
    changeType: 'Feature',
    type: 'feature',
  })),
}));

vi.mock('@lib/changelog/types/common/media', () => ({
  parseMediaItem: vi.fn((item) => ({
    id: 'media-1',
    name: 'image.png',
    fileName: 'image.png',
    fileUrl: 'https://example.com/image.png',
    description: '',
    fileWidth: 100,
    fileHeight: 100,
    fileId: 'media-1',
    fileSize: '1000',
    fileType: 'image/png',
  })),
}));

vi.mock('@lib/changelog/types/sitecoreProduct', () => ({
  parseSitecoreProductItem: vi.fn((item) => ({
    id: 'product-1',
    name: 'Product A',
    productName: 'Product A',
    productDescription: 'Description',
    lightIcon: 'light-icon',
    darkIcon: 'dark-icon',
  })),
}));

vi.mock('@lib/changelog/types/status', () => ({
  parseStatusItem: vi.fn((item) => ({
    id: 'status-1',
    name: 'Available',
    identifier: 'available',
    description: '',
  })),
}));

describe('ParseRawData', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should parse data with changelog.results structure', () => {
    const mockData = {
      changelog: {
        results: [
          {
            system: { id: 'entry-1' },
            title: 'Test Entry',
            releaseDate: '2024-07-12',
            sitecoreProduct: {
              results: [{ productName: 'Product A' }],
            },
          },
        ],
        cursor: 'cursor-123',
        hasMore: true,
      },
    };

    const result = ParseRawData(mockData as any);

    expect(result.total).toBe(0); // Note: GraphQL schema doesn't expose total
    expect(result.hasNext).toBe(true);
    expect(result.endCursor).toBe('cursor-123');
    expect(result.entries).toHaveLength(1);
  });

  test('should parse data with data.results structure', () => {
    const mockData = {
      data: {
        results: [
          {
            system: { id: 'entry-1' },
            title: 'Test Entry',
            sitecoreProduct: {
              results: [{ productName: 'Product A' }],
            },
          },
        ],
        cursor: 'cursor-456',
        hasMore: false,
      },
    };

    const result = ParseRawData(mockData as any);

    expect(result.hasNext).toBe(false);
    expect(result.endCursor).toBe('cursor-456');
    expect(result.entries).toHaveLength(1);
  });

  test('should return empty result for null data', () => {
    const result = ParseRawData(null);

    expect(result.total).toBe(0);
    expect(result.hasNext).toBe(false);
    expect(result.endCursor).toBe('');
    expect(result.entries).toEqual([]);
  });

  test('should return empty result for undefined data', () => {
    const result = ParseRawData(undefined);

    expect(result.total).toBe(0);
    expect(result.hasNext).toBe(false);
    expect(result.endCursor).toBe('');
    expect(result.entries).toEqual([]);
  });

  test('should filter out null results', () => {
    const mockData = {
      changelog: {
        results: [
          {
            system: { id: 'entry-1' },
            title: 'Entry 1',
            sitecoreProduct: {
              results: [{ productName: 'Product A' }],
            },
          },
          null,
          {
            system: { id: 'entry-2' },
            title: 'Entry 2',
            sitecoreProduct: {
              results: [{ productName: 'Product B' }],
            },
          },
          null,
        ],
        cursor: '',
        hasMore: false,
      },
    };

    const result = ParseRawData(mockData as any);

    expect(result.entries).toHaveLength(2);
  });

  test('should handle missing results array', () => {
    const mockData = {
      changelog: {
        cursor: 'cursor-123',
        hasMore: false,
      },
    };

    const result = ParseRawData(mockData as any);

    expect(result.entries).toEqual([]);
  });
});

describe('parseChangeLogItem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should parse complete changelog item', () => {
    const mockItem = {
      system: { id: 'entry-1', name: 'entry-name' },
      title: 'Test Entry',
      description: { content: 'Description content' },
      fullArticle: { content: 'Full article content' },
      readMoreLink: 'https://example.com',
      breakingChange: false,
      scheduled: false,
      x_version: '1.0.0',
      releaseDate: '2024-07-12',
      sitecoreProduct: {
        results: [{ productName: 'Product A' }],
      },
      changeType: {
        results: [{ changeType: 'Feature' }],
      },
      image: {
        results: [{ system: { id: 'img-1' } }],
      },
      status: {
        results: [{ identifier: 'available' }],
      },
    };

    const result = parseChangeLogItem(mockItem as any);

    expect(result.id).toBe('entry-1');
    expect(result.name).toBe('entry-name');
    expect(result.title).toBe('Test Entry');
    expect(result.breakingChange).toBe(false);
    expect(result.scheduled).toBe(false);
    expect(result.version).toBe('1.0.0');
    expect(result.sitecoreProduct).toHaveLength(1);
    expect(result.changeType).toHaveLength(1);
    expect(result.image).toHaveLength(1);
  });

  test('should throw error for null changelog item', () => {
    expect(() => parseChangeLogItem(null)).toThrow('Invalid changelog item: changelog is null or undefined');
  });

  test('should throw error for undefined changelog item', () => {
    expect(() => parseChangeLogItem(undefined)).toThrow('Invalid changelog item: changelog is null or undefined');
  });

  test('should handle missing optional fields', () => {
    const mockItem = {
      system: { id: 'entry-1' },
      title: 'Test Entry',
      sitecoreProduct: {
        results: [{ productName: 'Product A' }],
      },
      changeType: { results: [] },
      image: { results: [] },
      status: { results: [] },
    };

    const result = parseChangeLogItem(mockItem as any);

    expect(result.id).toBe('entry-1');
    expect(result.title).toBe('Test Entry');
    expect(result.description).toBe('');
    expect(result.fullArticle).toBeNull();
    expect(result.readMoreLink).toBe('');
    expect(result.sitecoreProduct).toHaveLength(1);
    expect(result.changeType).toEqual([]);
    expect(result.image).toEqual([]);
  });

  test('should handle scheduled entries without status', () => {
    const mockItem = {
      system: { id: 'entry-1' },
      title: 'Test Entry',
      scheduled: true,
      sitecoreProduct: {
        results: [{ productName: 'Product A' }],
      },
      changeType: { results: [] },
      image: { results: [] },
      status: { results: [] },
    };

    const result = parseChangeLogItem(mockItem as any);

    expect(result.scheduled).toBe(true);
    expect(result.status).toBeNull();
  });

  test('should parse rich text description', () => {
    const mockItem = {
      system: { id: 'entry-1' },
      title: 'Test Entry',
      description: { content: 'Rich text content' },
      sitecoreProduct: {
        results: [{ productName: 'Product A' }],
      },
      changeType: { results: [] },
      image: { results: [] },
      status: { results: [] },
    };

    const result = parseChangeLogItem(mockItem as any);

    expect(result.description).toContain('Rich text content');
  });

  test('should handle null fullArticle', () => {
    const mockItem = {
      system: { id: 'entry-1' },
      title: 'Test Entry',
      fullArticle: null,
      sitecoreProduct: {
        results: [{ productName: 'Product A' }],
      },
      changeType: { results: [] },
      image: { results: [] },
      status: { results: [] },
    };

    const result = parseChangeLogItem(mockItem as any);

    expect(result.fullArticle).toBeNull();
  });

  test('should handle empty fullArticle content', () => {
    const mockItem = {
      system: { id: 'entry-1' },
      title: 'Test Entry',
      fullArticle: { content: null },
      sitecoreProduct: {
        results: [{ productName: 'Product A' }],
      },
      changeType: { results: [] },
      image: { results: [] },
      status: { results: [] },
    };

    const result = parseChangeLogItem(mockItem as any);

    expect(result.fullArticle).toBeNull();
  });
});

