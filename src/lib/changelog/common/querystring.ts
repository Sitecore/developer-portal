import type { Option } from "@src/components/ui/dropdown";
import type { Product } from "@src/lib/changelog/types";

export function buildProductQuerystring(
  product?: Product,
  selectedProducts?: Array<Option>,
): string {
  const query: Array<string> = [];

  if (product) {
    query.push(`product=${product.id}`);
  }

  if (selectedProducts) {
    selectedProducts.forEach((p) => {
      query.push(`product=${p.value}`);
    });
  }

  return query.join("&");
}

export function buildQuerystring(
  products: Array<Option>,
  changes: Array<Option>,
  cursor?: string,
  initialProduct?: Product,
  breaking?: boolean,
): Array<string> {
  const query: Array<string> = [];
  const PAGE_SIZE = 5;

  if (initialProduct) {
    query.push(`product=${initialProduct.id}`);
  }

  query.push(`limit=${PAGE_SIZE}`);
  products.forEach((p) => {
    query.push(`product=${p.value}`);
  });
  changes.forEach((c) => {
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
