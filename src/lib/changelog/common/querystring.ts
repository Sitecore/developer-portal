import { Option } from '@/src/components/ui/dropdown';
import { Product } from '@lib/changelog/types';

export function buildProductQuerystring(product?: Product, selectedProducts?: Array<Option>): string {
  const query: Array<string> = [];

  if (product) {
    query.push(`product=${product.id}`);
  }

  if (selectedProducts) {
    selectedProducts.map((p) => {
      query.push(`product=${p.value}`);
    });
  }

  return query.join('&');
}

export function buildQuerystring(products: Array<Option>, changes: Array<Option>, cursor?: string, initialProduct?: Product, breaking?: boolean): Array<string> {
  const query: Array<string> = [];
  const PAGE_SIZE = 5;

  if (initialProduct) {
    query.push(`product=${initialProduct.id}`);
  }

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

  if (breaking) {
    query.push(`breaking=true`);
  }

  return query;
}
