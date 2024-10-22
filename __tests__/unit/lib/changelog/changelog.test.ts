import { buildProductQuerystring } from '@lib/changelog/common/querystring';
import { Product } from '@lib/changelog/types';
import { describe, expect, test } from 'vitest';

describe('buildProductQuerystring Tests', () => {
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
