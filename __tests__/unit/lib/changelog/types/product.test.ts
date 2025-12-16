import { ParseProduct } from '@lib/changelog/types/product';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('@lib/changelog/types/sitecoreProduct', () => ({
  parseSitecoreProductItem: vi.fn((item) => ({
    id: item.system?.id ?? 'product-1',
    name: item.productName ?? 'Product',
    productName: item.productName ?? 'Product',
    productDescription: item.productDescription ?? '',
    lightIcon: item.lightIcon ?? '',
    darkIcon: item.darkIcon ?? '',
  })),
}));

describe('ParseProduct', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should parse products from query result', () => {
    const mockData = {
      manySitecoreProduct: {
        results: [
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
        ],
      },
    };

    const result = ParseProduct(mockData as any);

    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('product-1');
    expect(result[0].name).toBe('Product A');
    expect(result[0].hasEntries).toBe(false);
    expect(result[1].id).toBe('product-2');
    expect(result[1].name).toBe('Product B');
    expect(result[1].hasEntries).toBe(false);
  });

  test('should return empty array for null results', () => {
    const mockData = {
      manySitecoreProduct: {
        results: null,
      },
    };

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const result = ParseProduct(mockData as any);

    expect(result).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith('No products found');

    consoleSpy.mockRestore();
  });

  test('should return empty array for missing manySitecoreProduct', () => {
    const mockData = {};

    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const result = ParseProduct(mockData as any);

    expect(result).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith('No products found');

    consoleSpy.mockRestore();
  });

  test('should set hasEntries to false by default', () => {
    const mockData = {
      manySitecoreProduct: {
        results: [
          {
            system: { id: 'product-1' },
            productName: 'Product A',
          },
        ],
      },
    };

    const result = ParseProduct(mockData as any);

    expect(result[0].hasEntries).toBe(false);
  });

  test('should map SitecoreProduct fields correctly', () => {
    const mockData = {
      manySitecoreProduct: {
        results: [
          {
            system: { id: 'product-1' },
            productName: 'Product A',
            productDescription: 'Description',
            lightIcon: 'light-icon',
            darkIcon: 'dark-icon',
          },
        ],
      },
    };

    const result = ParseProduct(mockData as any);

    expect(result[0].id).toBe('product-1');
    expect(result[0].name).toBe('Product A');
    expect(result[0].lightIcon).toBe('light-icon');
    expect(result[0].darkIcon).toBe('dark-icon');
  });
});

