import type { Option } from "@src/components/ui/dropdown";
import type { ChangelogEntrySummary, Product } from "@src/lib/changelog/types";
import useSWR, { type Fetcher } from "swr";
import { buildProductQuerystring } from "../lib/changelog/common/querystring";

const fetcher: Fetcher<
  Record<string, Array<ChangelogEntrySummary>> | null,
  string
> = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export function useGetEntriesByProducts(
  product?: Product,
  selectedProducts?: Array<Option>,
): {
  entries: Record<string, Array<ChangelogEntrySummary>>;
  isLoading: boolean;
  isError: any;
} {
  const { data, error, isLoading } = useSWR<Record<
    string,
    Array<ChangelogEntrySummary>
  > | null>(
    `/api/changelog/v1/all?${buildProductQuerystring(product, selectedProducts)}`,
    fetcher,
  );

  return {
    entries: data != null ? data : {},
    isLoading,
    isError: error,
  };
}
