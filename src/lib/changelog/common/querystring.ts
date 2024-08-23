import { Product } from '@lib/changelog/types';
import { Option } from '@src/components/dropdown';

export function buildProductQuerystring(product?: Product, selectedProducts?: Option[]): string {
  const query: string[] = [];

  if (product) query.push(`product=${product.id}`);

  if (selectedProducts) {
    selectedProducts.map((p) => {
      query.push(`product=${p.value}`);
    });
  }

  return query.join('&');
}

export function buildQuerystring(products: Option[], changes: Option[], cursor?: string, initialProduct?: Product): string[] {
  const query: string[] = [];
  const PAGE_SIZE = 5;

  if (initialProduct) query.push(`product=${initialProduct.id}`);

  query.push(`limit=${PAGE_SIZE}`);
  products.map((p) => {
    query.push(`product=${p.value}`);
  });
  changes.map((c) => {
    query.push(`changeType=${c.value}`);
  });

  if (cursor) {
    query.push(`end=${cursor}`);
  }
  return query;
}
