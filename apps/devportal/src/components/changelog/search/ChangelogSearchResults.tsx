import { getChangeTypeOptions, getProductOptions } from '@/src/lib/changelog/changelog';
import { Box, Button, CloseButton, Link, SkeletonText, VisuallyHidden } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { ChangeLogSearchFacet, ChangeLogSearchFacetValue } from 'sc-changelog/search/types';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { Option } from 'ui/components/dropdown/MultiSelect';
import ChangeLogSearchItem from './ChangeLogSearchItem';
import ChangelogFilter from './ChangelogFilter';
import ChangelogSearchFacets from './ChangelogSearchFacets';

type ChangeLogSearchItemProps = {
  entries: ChangelogEntry[];
  facets: ChangeLogSearchFacet[];
  onNextPage: () => void;
  onFacetChange: (facet: ChangeLogSearchFacetValue[], facetName: string) => void;
  onPreviewFilterChange: (products: Option[], changeTypes: Option[]) => void;
  isLoading: boolean;
  isMore: boolean;
  initialProduct?: string;
  isPreview: boolean;
};

export const ChangelogSearchResults = ({ entries, facets, onNextPage, isLoading, onFacetChange, onPreviewFilterChange, isMore, initialProduct, isPreview }: ChangeLogSearchItemProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Option[]>([]);
  const [selectedChanges, setSelectedChanges] = useState<Option[]>([]);

  return (
    <>
      <Box>
        {initialProduct && (
          <>
            <Link as={NextLink} href="/changelog" passHref>
              <Button rightIcon={<CloseButton as={'div'} color={'white'} />} variant="solid" borderRadius={'sm'} mb={4}>
                Product: {initialProduct}
              </Button>
              <VisuallyHidden>Go back to the changelog overview</VisuallyHidden>
            </Link>
          </>
        )}
        {isPreview && (
          <>
            {!initialProduct && (
              <ChangelogFilter
                id="productSelector"
                label="Products"
                placeholder="Select one or more products"
                options={getProductOptions()}
                onSelectChange={function (selectedValues: Option[]): void {
                  setSelectedProducts(selectedValues);
                  onPreviewFilterChange(selectedValues, selectedChanges);
                }}
              />
            )}
            <ChangelogFilter
              id="changeSelector"
              label="Changes"
              placeholder="Select one or more "
              options={getChangeTypeOptions()}
              onSelectChange={function (selectedValues: Option[]): void {
                setSelectedChanges(selectedValues);
                onPreviewFilterChange(selectedProducts, selectedValues);
              }}
            />
          </>
        )}

        {facets.length > 0 && <ChangelogSearchFacets facets={facets} onFacetChange={onFacetChange} />}

        {isLoading && (
          <>
            <Placeholder />
            <Placeholder />
          </>
        )}

        {!isLoading && entries.length > 0 && entries.map((entry, i) => <ChangeLogSearchItem item={entry} key={i} isLast={i === entries.length - 1} isMore={isMore} onNextPage={onNextPage} isPreview={isPreview} />)}
      </Box>
    </>
  );
};

export default ChangelogSearchResults;

const Placeholder = (): JSX.Element => {
  return (
    <>
      <SkeletonText noOfLines={1} skeletonHeight={'20px'} marginBottom={'20px'} />
      <SkeletonText noOfLines={8} skeletonHeight={'20px'} />
    </>
  );
};
