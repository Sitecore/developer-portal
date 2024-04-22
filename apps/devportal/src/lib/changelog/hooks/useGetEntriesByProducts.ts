import axios from 'axios';
import { Product } from '@scdp/changelog/types';
import { ChangelogEntrySummary } from '@scdp/changelog/types';
import useSWR, { Fetcher } from 'swr';
import { Option } from '@scdp/ui/components';
import { buildProductQuerystring } from '../changelog';

const fetcher: Fetcher<Record<string, ChangelogEntrySummary[]> | null, string> = async (url: string) => await axios.get(url).then((response) => response.data);

export function useGetEntriesByProducts(product?: Product, selectedProducts?: Option[]): { entries: Record<string, ChangelogEntrySummary[]>; isLoading: boolean; isError: any } {
  const { data, error, isLoading } = useSWR<Record<string, ChangelogEntrySummary[]> | null>(`/api/changelog/v1/all?${buildProductQuerystring(product, selectedProducts)}`, fetcher);

  return {
    entries: data != null ? data : {},
    isLoading,
    isError: error,
  };
}
