/* eslint-disable no-unused-vars */

import { entriesApiUrl, getChangeTypeOptions, getProductOptions } from '@/src/lib/changelog/common/changelog';
import { buildQuerystring } from '@/src/lib/changelog/common/querystring';
import { Box, Button, CloseButton, Link, SkeletonText, VisuallyHidden } from '@chakra-ui/react';
import { ChangelogEntry, ChangelogEntryList, Product } from '@lib/changelog/types';
import { Option } from '@src/components/dropdown';
import axios from 'axios';
import NextLink from 'next/link';
import { useState } from 'react';
import { Fetcher } from 'swr';
import useSWRInfinite from 'swr/infinite';
import ChangelogFilter from './ChangelogFilter';
import ChangelogResultsList from './ChangelogResultsList';
import { Hint } from './Hint';

type ChangelogListProps = {
  initialProduct?: Product;
  selectedProducts?: Option[];
  onProductsChange?: (selectedProducts: Option[]) => void;
};

const ChangelogList = ({ initialProduct, selectedProducts, onProductsChange = () => {} }: ChangelogListProps): JSX.Element => {
  const [selectedChange, setSelectedChange] = useState<Option[]>([]);
  const fetcher: Fetcher<ChangelogEntryList<ChangelogEntry[]>, string> = async (url: string) => await axios.get(url).then((response) => response.data);

  const getKey = (pageIndex: any, previousPageData: ChangelogEntryList<ChangelogEntry[]>) => {
    if (previousPageData && !previousPageData.hasNext) {
      return null;
    }

    const cursor = previousPageData ? previousPageData.endCursor : undefined;
    const query = buildQuerystring(selectedProducts != null ? selectedProducts : [], selectedChange, cursor, initialProduct);

    return [`${entriesApiUrl}?${query.join('&')}`];
  };

  const { data, error, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher);
  const items = data ? data.flatMap((data) => data.entries.map((entry) => entry)) : [];

  return (
    <Box>
      {initialProduct && (
        <>
          <Link as={NextLink} href="/changelog" passHref>
            <Button rightIcon={<CloseButton as={'div'} color={'white'} />} variant="solid" borderRadius={'sm'} mb={4}>
              Product: {initialProduct.name}
            </Button>
            <VisuallyHidden>Go back to the changelog overview</VisuallyHidden>
          </Link>
        </>
      )}
      {!initialProduct && (
        <ChangelogFilter
          id="productSelector"
          label="Products"
          placeholder="Select one or more products"
          options={getProductOptions()}
          onSelectChange={function (selectedValues: Option[]): void {
            onProductsChange(selectedValues);
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

      <Hint products={selectedProducts} enabled={selectedProducts?.length == 1} />

      {isLoading && (
        <Box marginTop={8}>
          <Placeholder />
          <Placeholder />
        </Box>
      )}

      {!error && data && <ChangelogResultsList entries={items} isLoading={isLoading} hasNext={data[data.length - 1].hasNext} onEndTriggered={() => setSize(size + 1)} />}

      {data && !data[data.length - 1].hasNext && <span className={`border-violet text-violet dark:border-teal dark:text-teal mt-5 inline-block w-full border-2 px-3 py-2 text-center text-sm`}>No more results</span>}
    </Box>
  );
};

export default ChangelogList;

const Placeholder = (): JSX.Element => {
  return (
    <>
      <SkeletonText noOfLines={1} skeletonHeight={'20px'} marginBottom={'20px'} />
      <SkeletonText noOfLines={8} skeletonHeight={'20px'} />
    </>
  );
};
