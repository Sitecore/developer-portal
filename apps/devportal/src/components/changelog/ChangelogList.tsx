import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { ChangeType, Product } from 'sc-changelog/types';
import { ChangelogEntry, ChangelogEntryList } from 'sc-changelog/types/changeLogEntry';
import useSWR, { Fetcher } from 'swr';
import useSWRInfinite from 'swr/infinite';
import SvgIcon from 'ui/components/common/SvgIcon';
import { Option } from 'ui/components/dropdown/MultiSelect';
import ChangelogFilter from './ChangelogFilter';
import ChangelogResultsList from './ChangelogResultsList';

const entriesApiUrl = '/api/changelog/v1';

type ChangelogListProps = {
  initialProduct?: Product;
};

const ChangelogList = ({ initialProduct }: ChangelogListProps): JSX.Element => {
  const [selectedProduct, setSelectedProduct] = useState<Option[]>([]);
  const [selectedChange, setSelectedChange] = useState<Option[]>([]);
  const fetcher: Fetcher<ChangelogEntryList<ChangelogEntry[]>, string> = async (url: string) => await axios.get(url).then((response) => response.data);

  const getKey = (pageIndex: any, previousPageData: ChangelogEntryList<ChangelogEntry[]>) => {
    if (previousPageData && !previousPageData.hasNext) {
      return null;
    }

    const cursor = previousPageData ? previousPageData.endCursor : undefined;
    const query = buildQuerystring(selectedProduct, selectedChange, cursor, initialProduct);

    return [`${entriesApiUrl}?${query.join('&')}`];
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
  const items = data ? data.flatMap((data) => data.entries.map((entry) => entry)) : [];

  return (
    <div className="col-span-3">
      <div className={`z-50 ${initialProduct ? 'grid grid-cols-1 lg:grid-cols-2' : ''}`}>
        {initialProduct && (
          <div className="bg-primary-100 text-primary-800 mb-2 mr-2 flex rounded-md px-3 py-2 text-sm">
            <div className="m-auto">
              <strong>Product:</strong> {initialProduct.name}
              <Link href="/changelog" title="Go back to the changelog overview">
                <SvgIcon icon="close" width={24} height={24} className="text-primary-500 relative -top-0.5 left-1 inline-block h-5 w-5 dark:text-red-500" />
              </Link>
            </div>
          </div>
        )}
        {!initialProduct && (
          <ChangelogFilter
            id="productSelector"
            label="Products"
            placeholder="Select one or more products"
            options={getProductOptions()}
            onSelectChange={function (selectedValues: Option[]): void {
              setSelectedProduct(selectedValues);
            }}
          />
        )}
        <ChangelogFilter
          id="changeSelector"
          label="Changes"
          placeholder="Select one or more "
          options={getChangeTypeOptions()}
          onSelectChange={function (selectedValues: Option[]): void {
            setSelectedChange(selectedValues);
          }}
        />
      </div>
      {!error && data && <ChangelogResultsList entries={items} isLoading={false} hasNext={data[data.length - 1].hasNext} onEndTriggered={() => setSize(size + 1)} />}

      {data && !data[data.length - 1].hasNext && <span className={`border-violet text-violet dark:border-teal dark:text-teal mt-5 inline-block w-full border-2 px-3 py-2 text-center text-sm`}>No more results</span>}
    </div>
  );
};

const getChangeTypeOptions = () => {
  const fetcher: Fetcher<ChangeType[], string> = async (url: string) => await axios.get(url).then((response) => response.data);
  const { data: changeTypes, error } = useSWR(`${entriesApiUrl}/types`, fetcher);

  if (error) console.log(error);

  if (changeTypes) return changeTypes?.map((e: ChangeType) => ({ label: e.name, value: e.id }));
  return [];
};

const getProductOptions = () => {
  const fetcher: Fetcher<Product[], string> = async (url: string) => await axios.get(url).then((response) => response.data);
  const { data: products, error } = useSWR(`${entriesApiUrl}/products?all=false`, fetcher);

  if (error) console.log(error);

  if (products) return products?.map((e: Product) => ({ label: e.name, value: e.id }));
  return [];
};

function buildQuerystring(products: Option[], changes: Option[], cursor?: string, initialProduct?: Product): string[] {
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

export default ChangelogList;
