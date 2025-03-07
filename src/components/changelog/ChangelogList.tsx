import { Option } from '@/src/components/ui/dropdown';
import { Alert, AlertIcon, Box, Button, Card, CardBody, Checkbox, FormControl, FormLabel, HStack, Icon, Link, SkeletonText, VisuallyHidden, Wrap } from '@chakra-ui/react';
import { ChangelogEntry, ChangelogEntryList, Product } from '@lib/changelog/types';
import axios from 'axios';
import NextLink from 'next/link';
import { useState } from 'react';
import { Fetcher } from 'swr';
import useSWRInfinite from 'swr/infinite';

import { entriesApiUrl, getChangeTypeOptions, getProductOptions } from '@/src/lib/changelog/common/changelog';
import { buildQuerystring } from '@/src/lib/changelog/common/querystring';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import ChangelogFilter from './ChangelogFilter';
import ChangelogResultsList from './ChangelogResultsList';
import { Hint } from './Hint';

type ChangelogListProps = {
  initialProduct?: Product;
  selectedProducts?: Array<Option>;
  onProductsChange?: (selectedProducts: Array<Option>) => void;
};

const ChangelogList = ({ initialProduct, selectedProducts, onProductsChange = () => {} }: ChangelogListProps) => {
  const [selectedChange, setSelectedChange] = useState<Array<Option>>([]);
  const [breaking, setBreaking] = useState<boolean>(false);

  const fetcher: Fetcher<ChangelogEntryList<Array<ChangelogEntry>>, string> = async (url: string) => await axios.get(url).then((response) => response.data);

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
    <Box>
      {initialProduct && (
        <Wrap mb={4}>
          <Link as={NextLink} href="/changelog" passHref>
            <Button leftIcon={<Icon as={ChevronLeftIcon} w={6} h={6} />} width={'100%'} variant={'ghost'}>
              Go back to the changelog overview
            </Button>
            <VisuallyHidden>Go back to the changelog overview</VisuallyHidden>
          </Link>
        </Wrap>
      )}
      <Card variant="filled">
        <CardBody>
          {!initialProduct && (
            <FormControl>
              <HStack alignItems={'baseline'} justifyContent={'space-between'}>
                <FormLabel>Products</FormLabel>
                <ChangelogFilter
                  id="productSelector"
                  label="Products"
                  placeholder="Select products"
                  options={getProductOptions()}
                  onSelectChange={function (selectedValues: Array<Option>): void {
                    onProductsChange(selectedValues);
                  }}
                />
              </HStack>
            </FormControl>
          )}
          <FormControl>
            <HStack alignItems={'baseline'} justifyContent={'space-between'}>
              <FormLabel>Changes</FormLabel>
              <ChangelogFilter
                id="changeSelector"
                label="Changes"
                placeholder="Select changes"
                options={getChangeTypeOptions()}
                onSelectChange={function (selectedValues: Array<Option>): void {
                  setSelectedChange(selectedValues);
                }}
              />
            </HStack>
          </FormControl>

          <Checkbox checked={breaking} onChange={(e) => setBreaking(e.target.checked)}>
            Only show changes that might require action
          </Checkbox>
        </CardBody>
      </Card>
      <Hint products={selectedProducts} enabled={selectedProducts?.length == 1} />

      {isLoading && (
        <Box marginTop={12}>
          <Placeholder />
          <Placeholder />
        </Box>
      )}

      {!error && data && <ChangelogResultsList entries={items} isLoading={isLoading} hasNext={data[data.length - 1].hasNext} onEndTriggered={() => setSize(size + 1)} mt={8} />}

      {data && !data[data.length - 1].hasNext && (
        <Alert colorScheme="neutral">
          <AlertIcon />
          {items.length == 0 ? 'No entries found' : 'No other entries found'}
        </Alert>
      )}
    </Box>
  );
};

export default ChangelogList;

const Placeholder = () => {
  return (
    <>
      <SkeletonText noOfLines={1} skeletonHeight={'20px'} marginBottom={'20px'} />
      <SkeletonText noOfLines={8} skeletonHeight={'20px'} />
    </>
  );
};
