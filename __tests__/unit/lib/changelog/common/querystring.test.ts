import { buildProductQuerystring, buildQuerystring } from '@lib/changelog/common/querystring';
import { Product } from '@lib/changelog/types';
import { describe, expect, test } from 'vitest';

describe('buildProductQuerystring', () => {
  test('should return an empty string if no product and selected products are provided', () => {
    const querystring = buildProductQuerystring();
    expect(querystring).toBe('');
  });

  test('should return a querystring with a single product if only product is provided', () => {
    const product: Product = { id: '123', name: 'Product A', darkIcon: '', lightIcon: '', hasEntries: false };
    const querystring = buildProductQuerystring(product);
    expect(querystring).toBe('product=123');
  });

  test('should return a querystring with multiple products if selected products are provided', () => {
    const selectedProducts = [
      { label: 'Product A', value: '123' },
      { label: 'Product B', value: '456' },
    ];
    const querystring = buildProductQuerystring(undefined, selectedProducts);
    expect(querystring).toBe('product=123&product=456');
  });

  test('should return a querystring with both product and selected products', () => {
    const product = { id: '123', name: 'Product A', darkIcon: '', lightIcon: '', hasEntries: false };
    const selectedProducts = [
      { label: 'Product B', value: '456', darkIcon: '', lightIcon: '', hasEntries: false },
      { label: 'Product C', value: '789', darkIcon: '', lightIcon: '', hasEntries: false },
    ];
    const querystring = buildProductQuerystring(product, selectedProducts);
    expect(querystring).toBe('product=123&product=456&product=789');
  });
});

describe('buildQuerystring', () => {
  test('should build querystring with products and changes', () => {
    const products = [
      { label: 'Product A', value: '123' },
      { label: 'Product B', value: '456' },
    ];
    const changes = [
      { label: 'Feature', value: 'feature-123' },
      { label: 'Fix', value: 'fix-456' },
    ];

    const result = buildQuerystring(products, changes);

    expect(result).toContain('product=123');
    expect(result).toContain('product=456');
    expect(result).toContain('changeType=feature-123');
    expect(result).toContain('changeType=fix-456');
    expect(result).toContain('limit=5');
  });

  test('should include initialProduct if provided', () => {
    const initialProduct: Product = { id: '999', name: 'Initial Product', darkIcon: '', lightIcon: '', hasEntries: false };
    const products = [{ label: 'Product A', value: '123' }];
    const changes = [{ label: 'Feature', value: 'feature-123' }];

    const result = buildQuerystring(products, changes, undefined, initialProduct);

    expect(result).toContain('product=999');
    expect(result).toContain('product=123');
  });

  test('should include cursor if provided', () => {
    const products = [{ label: 'Product A', value: '123' }];
    const changes = [{ label: 'Feature', value: 'feature-123' }];

    const result = buildQuerystring(products, changes, 'cursor-123');

    expect(result).toContain('end=cursor-123');
  });

  test('should include breaking flag if provided', () => {
    const products = [{ label: 'Product A', value: '123' }];
    const changes = [{ label: 'Feature', value: 'feature-123' }];

    const result = buildQuerystring(products, changes, undefined, undefined, true);

    expect(result).toContain('breaking=true');
  });

  test('should not include breaking flag if false', () => {
    const products = [{ label: 'Product A', value: '123' }];
    const changes = [{ label: 'Feature', value: 'feature-123' }];

    const result = buildQuerystring(products, changes, undefined, undefined, false);

    expect(result).not.toContain('breaking=true');
  });

  test('should always include limit=5', () => {
    const products = [{ label: 'Product A', value: '123' }];
    const changes = [{ label: 'Feature', value: 'feature-123' }];

    const result = buildQuerystring(products, changes);

    expect(result).toContain('limit=5');
  });

  test('should handle empty products and changes arrays', () => {
    const result = buildQuerystring([], []);

    expect(result).toContain('limit=5');
    expect(result).not.toContain('product=');
    expect(result).not.toContain('changeType=');
  });

  test('should build complete querystring with all parameters', () => {
    const initialProduct: Product = { id: '999', name: 'Initial', darkIcon: '', lightIcon: '', hasEntries: false };
    const products = [{ label: 'Product A', value: '123' }];
    const changes = [{ label: 'Feature', value: 'feature-123' }];

    const result = buildQuerystring(products, changes, 'cursor-456', initialProduct, true);

    expect(result).toContain('product=999');
    expect(result).toContain('limit=5');
    expect(result).toContain('product=123');
    expect(result).toContain('changeType=feature-123');
    expect(result).toContain('end=cursor-456');
    expect(result).toContain('breaking=true');
  });

  test('should return array of query string parts', () => {
    const products = [{ label: 'Product A', value: '123' }];
    const changes = [{ label: 'Feature', value: 'feature-123' }];

    const result = buildQuerystring(products, changes);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});

