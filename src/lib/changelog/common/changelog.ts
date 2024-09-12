import { Option } from '@/src/components/ui/dropdown';
import { ChangeType, Product } from '@lib/changelog/types';
import axios from 'axios';
import useSWR, { Fetcher } from 'swr';

export const entriesApiUrl = '/api/changelog/v1';

export function getChangeTypeOptions(): Array<Option> {
  const fetcher: Fetcher<Array<ChangeType>, string> = async (url: string) => await axios.get(url).then((response) => response.data);
  const { data: changeTypes, error } = useSWR(`${entriesApiUrl}/types`, fetcher);

  if (error) {
    console.log(error);
  }

  if (changeTypes) {
    return changeTypes?.map((e: ChangeType) => ({ label: e.name, value: e.id }));
  }

  return [];
}

export function getProductOptions(): Array<Option> {
  const fetcher: Fetcher<Array<Product>, string> = async (url: string) => await axios.get(url).then((response) => response.data);
  const { data: products, error } = useSWR(`${entriesApiUrl}/products?all=false`, fetcher);

  if (error) {
    console.log(error);
  }

  if (products) {
    return products?.map((e: Product) => ({ label: e.name, value: e.id }));
  }

  return [];
}
