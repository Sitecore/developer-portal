import { Option } from '@/src/components/ui/dropdown';
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Button } from '@components/ui/button';
import { Card, CardContent } from '@components/ui/card';
import { Checkbox } from '@components/ui/checkbox';
import { Label } from '@components/ui/label';
import { Skeleton } from '@components/ui/skeleton';
import { ChangelogEntry, ChangelogEntryList, ChangeType, Product } from '@lib/changelog/types';
import NextLink from 'next/link';
import { useState } from 'react';
import { Fetcher } from 'swr';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { ChevronLeft } from 'lucide-react';
import { entriesApiUrl } from '@/src/lib/changelog/common/changelog';
import { buildQuerystring } from '@/src/lib/changelog/common/querystring';
import ChangelogFilter from './ChangelogFilter';
import ChangelogResultsList from './ChangelogResultsList';
import { Hint } from './Hint';
import { cn } from '@lib/utils';

type ChangelogListProps = {
  initialProduct?: Product;
  selectedProducts?: Array<Option>;
  onProductsChange?: (selectedProducts: Array<Option>) => void;
};

/**
 * Get change type options using SWR hook
 * This should be used in React components only
 */
function getChangeTypeOptions(): Array<Option> {
  const fetcher: Fetcher<Array<ChangeType>, string> = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };
  const { data: changeTypes, error } = useSWR(`${entriesApiUrl}/types`, fetcher);

  if (error) {
    console.log(error);
  }

  if (changeTypes) {
    return changeTypes?.map((e: ChangeType) => ({ label: e.name, value: e.id }));
  }

  return [];
}

/**
 * Get product options using SWR hook
 * This should be used in React components only
 */
function getProductOptions(): Array<Option> {
  const fetcher: Fetcher<Array<Product>, string> = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };
  const { data: products, error } = useSWR(`${entriesApiUrl}/products?all=false`, fetcher);

  if (error) {
    console.log(error);
  }

  if (products) {
    return products?.map((e: Product) => ({ label: e.name, value: e.id }));
  }

  return [];
}

const ChangelogList = ({ initialProduct, selectedProducts, onProductsChange = () => {} }: ChangelogListProps) => {
  const [selectedChange, setSelectedChange] = useState<Array<Option>>([]);
  const [breaking, setBreaking] = useState<boolean>(false);

  const fetcher: Fetcher<ChangelogEntryList<Array<ChangelogEntry>>, string> = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  };

  const getKey = (pageIndex: any, previousPageData: ChangelogEntryList<Array<ChangelogEntry>>) => {
    if (previousPageData && !previousPageData.hasNext) {
      return null;
    }

    const cursor = previousPageData ? previousPageData.endCursor : undefined;
    const query = buildQuerystring(selectedProducts != null ? selectedProducts : [], selectedChange, cursor, initialProduct, breaking);

    return [`${entriesApiUrl}?${query.join('&')}`];
  };

  const { data, error, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher);
  const items = data ? data.flatMap((data) => data.entries.map((entry) => entry)) : [];

  return (
    <div>
      {initialProduct && (
        <div className="mb-4">
          <Button variant="ghost" className="w-full" asChild>
            <NextLink href="/changelog">
              <ChevronLeft className="mr-2 h-6 w-6" />
              Go back to the changelog overview
            </NextLink>
          </Button>
          <span className="sr-only">Go back to the changelog overview</span>
        </div>
      )}
      <Card className="bg-muted">
        <CardContent>
          {!initialProduct && (
            <div className="flex items-baseline justify-between mb-4">
              <Label>Products</Label>
              <ChangelogFilter
                id="productSelector"
                label="Products"
                placeholder="Select products"
                options={getProductOptions()}
                onSelectChange={function (selectedValues: Array<Option>): void {
                  onProductsChange(selectedValues);
                }}
              />
            </div>
          )}
          <div className="flex items-baseline justify-between mb-4">
            <Label>Changes</Label>
            <ChangelogFilter
              id="changeSelector"
              label="Changes"
              placeholder="Select changes"
              options={getChangeTypeOptions()}
              onSelectChange={function (selectedValues: Array<Option>): void {
                setSelectedChange(selectedValues);
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox checked={breaking} onCheckedChange={(checked) => setBreaking(checked === true)} />
            <Label>Only show changes that might require action</Label>
          </div>
        </CardContent>
      </Card>
      <Hint products={selectedProducts} enabled={selectedProducts?.length == 1} />

      {isLoading && (
        <div className="mt-12">
          <Placeholder />
          <Placeholder />
        </div>
      )}

      {!error && data && <ChangelogResultsList entries={items} isLoading={isLoading} hasNext={data[data.length - 1].hasNext} onEndTriggered={() => setSize(size + 1)} className="mt-8" />}

      {data && !data[data.length - 1].hasNext && (
        <Alert variant="default" className="mt-4">
          <AlertTitle>{items.length == 0 ? 'No entries found' : 'No other entries found'}</AlertTitle>
        </Alert>
      )}
    </div>
  );
};

export default ChangelogList;

const Placeholder = () => {
  return (
    <div className="mb-5">
      <Skeleton className="h-5 mb-5" />
      <div className="space-y-2">
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
      </div>
    </div>
  );
};
