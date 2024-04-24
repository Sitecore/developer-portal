import { ChangeType, ChangelogCredentials, Product } from '@scdp/changelog/types';
import { Option } from '@scdp/ui/components';
import axios from 'axios';
import useSWR, { Fetcher } from 'swr';

export const entriesApiUrl = '/api/changelog/v1';

export function getChangelogCredentials(): ChangelogCredentials {
  return {
    production: {
      endpoint: process.env.SITECORE_CHONE_ENDPOINT_DELIVERY as string,
      token: process.env.SITECORE_CHONE_AUTH_TOKEN_DELIVERY as string,
    },
    preview: {
      endpoint: process.env.SITECORE_CHONE_ENDPOINT_PREVIEW as string,
      token: process.env.SITECORE_CHONE_AUTH_TOKEN_PREVIEW as string,
    },
  };
}

export function getChangeTypeOptions(): Option[] {
  const fetcher: Fetcher<ChangeType[], string> = async (url: string) => await axios.get(url).then((response) => response.data);
  const { data: changeTypes, error } = useSWR(`${entriesApiUrl}/types`, fetcher);

  if (error) console.log(error);

  if (changeTypes) return changeTypes?.map((e: ChangeType) => ({ label: e.name, value: e.id }));
  return [];
}

export function getProductOptions(): Option[] {
  const fetcher: Fetcher<Product[], string> = async (url: string) => await axios.get(url).then((response) => response.data);
  const { data: products, error } = useSWR(`${entriesApiUrl}/products?all=false`, fetcher);

  if (error) console.log(error);

  if (products) return products?.map((e: Product) => ({ label: e.name, value: e.id }));
  return [];
}

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
