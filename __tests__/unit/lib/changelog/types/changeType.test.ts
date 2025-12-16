import { ParseChangeType, parseChangeTypeItem } from '@lib/changelog/types/changeType';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('@lib/utils', () => ({
  getStringValue: vi.fn((value) => value ?? ''),
  slugify: vi.fn((value) => value?.toLowerCase().replace(/\s+/g, '-') ?? ''),
}));

describe('parseChangeTypeItem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should parse valid change type item', () => {
    const mockItem = {
      changeType: 'Feature',
      system: {
        id: 'change-123',
        name: 'Feature Change Type',
      },
    };

    const result = parseChangeTypeItem(mockItem as any);

    expect(result.id).toBe('change-123');
    expect(result.name).toBe('Feature');
    expect(result.changeType).toBe('Feature');
    expect(result.type).toBe('feature-change-type');
  });

  test('should throw error for null item', () => {
    expect(() => parseChangeTypeItem(null)).toThrow('Invalid ChangeType: rawItem is null or undefined');
  });

  test('should throw error for undefined item', () => {
    expect(() => parseChangeTypeItem(undefined)).toThrow('Invalid ChangeType: rawItem is null or undefined');
  });

  test('should handle missing system fields', () => {
    const mockItem = {
      changeType: 'Fix',
      system: null,
    };

    const result = parseChangeTypeItem(mockItem as any);

    expect(result.changeType).toBe('Fix');
    expect(result.id).toBe('');
    expect(result.type).toBe('');
  });
});

describe('ParseChangeType', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should parse multiple change types', () => {
    const mockData = {
      manyChangetype: {
        results: [
          {
            changeType: 'Feature',
            system: { id: '1', name: 'Feature' },
          },
          {
            changeType: 'Fix',
            system: { id: '2', name: 'Fix' },
          },
        ],
      },
    };

    const result = ParseChangeType(mockData as any);

    expect(result).toHaveLength(2);
    expect(result[0].changeType).toBe('Feature');
    expect(result[1].changeType).toBe('Fix');
  });

  test('should return empty array for null results', () => {
    const mockData = {
      manyChangetype: {
        results: null,
      },
    };

    const result = ParseChangeType(mockData as any);

    expect(result).toEqual([]);
  });

  test('should return empty array for missing manyChangetype', () => {
    const mockData = {};

    const result = ParseChangeType(mockData as any);

    expect(result).toEqual([]);
  });

  test('should return empty array for empty results', () => {
    const mockData = {
      manyChangetype: {
        results: [],
      },
    };

    const result = ParseChangeType(mockData as any);

    expect(result).toEqual([]);
  });
});

