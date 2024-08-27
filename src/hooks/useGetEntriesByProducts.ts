import { Option } from '@/src/components/ui/dropdown';
import { ChangelogEntrySummary, Product } from '@lib/changelog/types';
import axios from 'axios';
import useSWR, { Fetcher } from 'swr';
import { buildProductQuerystring } from '../lib/changelog/common/querystring';

const fetcher: Fetcher<Record<string, Array<ChangelogEntrySummary>> | null, string> = async (url: string) => await axios.get(url).then((response) => response.data);

export function useGetEntriesByProducts(product?: Product, selectedProducts?: Array<Option>): { entries: Record<string, Array<ChangelogEntrySummary>>; isLoading: boolean; isError: any } {
  const { data, error, isLoading } = useSWR<Record<string, Array<ChangelogEntrySummary>> | null>(`/api/changelog/v1/all?${buildProductQuerystring(product, selectedProducts)}`, fetcher);

  return {
    entries: data != null ? data : {},
    isLoading,
    isError: error,
  };
}
