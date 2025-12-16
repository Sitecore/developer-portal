import { parseSitecoreProductItem, parseSitecoreProductItems } from '@lib/changelog/types/sitecoreProduct';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('@lib/utils', () => ({
  getStringValue: vi.fn((value) => value ?? ''),
}));

describe('parseSitecoreProductItem', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should parse valid sitecore product item', () => {
    const mockItem = {
      system: {
        id: 'product-123',
      },
      productName: 'Product A',
      productDescription: 'Product description',
      lightIcon: 'light-icon-url',
      darkIcon: 'dark-icon-url',
    };

    const result = parseSitecoreProductItem(mockItem as any);

    expect(result.id).toBe('product-123');
    expect(result.name).toBe('Product A');
    expect(result.productName).toBe('Product A');
    expect(result.productDescription).toBe('Product description');
    expect(result.lightIcon).toBe('light-icon-url');
    expect(result.darkIcon).toBe('dark-icon-url');
  });

  test('should throw error for null item', () => {
    expect(() => parseSitecoreProductItem(null)).toThrow(
      'Invalid SitecoreProduct: rawItem is null or undefined'
    );
  });

  test('should throw error for undefined item', () => {
    expect(() => parseSitecoreProductItem(undefined)).toThrow(
      'Invalid SitecoreProduct: rawItem is null or undefined'
    );
  });

  test('should handle missing optional fields', () => {
    const mockItem = {
      system: {
        id: 'product-123',
      },
      productName: 'Product A',
      productDescription: null,
      lightIcon: null,
      darkIcon: null,
    };

    const result = parseSitecoreProductItem(mockItem as any);

    expect(result.productDescription).toBe('');
    expect(result.lightIcon).toBe('');
    expect(result.darkIcon).toBe('');
  });
});

describe('parseSitecoreProductItems', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should parse array of sitecore product items', () => {
    const mockItems = [
      {
        system: { id: 'product-1' },
        productName: 'Product A',
        productDescription: 'Description A',
        lightIcon: 'light-1',
        darkIcon: 'dark-1',
      },
      {
        system: { id: 'product-2' },
        productName: 'Product B',
        productDescription: 'Description B',
        lightIcon: 'light-2',
        darkIcon: 'dark-2',
      },
    ];

    const result = parseSitecoreProductItems(mockItems as any);

    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('product-1');
    expect(result[0].productName).toBe('Product A');
    expect(result[1].id).toBe('product-2');
    expect(result[1].productName).toBe('Product B');
  });

  test('should return empty array for null', () => {
    const result = parseSitecoreProductItems(null);

    expect(result).toEqual([]);
  });

  test('should return empty array for undefined', () => {
    const result = parseSitecoreProductItems(undefined);

    expect(result).toEqual([]);
  });

  test('should filter out null items', () => {
    const mockItems = [
      {
        system: { id: 'product-1' },
        productName: 'Product A',
        productDescription: '',
        lightIcon: '',
        darkIcon: '',
      },
      null,
      {
        system: { id: 'product-2' },
        productName: 'Product B',
        productDescription: '',
        lightIcon: '',
        darkIcon: '',
      },
    ];

    const result = parseSitecoreProductItems(mockItems as any);

    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('product-1');
    expect(result[1].id).toBe('product-2');
  });

  test('should return empty array for empty array', () => {
    const result = parseSitecoreProductItems([]);

    expect(result).toEqual([]);
  });
});

