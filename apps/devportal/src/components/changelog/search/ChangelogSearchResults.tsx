import { Box, Button, CloseButton, Link, SkeletonText, VisuallyHidden } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ChangeLogSearchFacet, ChangeLogSearchFacetValue } from 'sc-changelog/search/types';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import ChangeLogSearchItem from './ChangeLogSearchItem';
import ChangelogSearchFacets from './ChangelogSearchFacets';

type ChangeLogSearchItemProps = {
  entries: ChangelogEntry[];
  facets: ChangeLogSearchFacet[];
  onNextPage: () => void;
  onFacetChange: (facet: ChangeLogSearchFacetValue[], facetName: string) => void;
  isLoading: boolean;
  isMore: boolean;
  initialProduct?: string;
  isPreview: boolean;
};

export const ChangelogSearchResults = ({ entries, facets, onNextPage, isLoading, onFacetChange, isMore, initialProduct, isPreview }: ChangeLogSearchItemProps) => {
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
