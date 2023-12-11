import { Box, SkeletonText } from '@chakra-ui/react';
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
};

export const ChangelogSearchResults = ({ entries, facets, onNextPage, isLoading, onFacetChange }: ChangeLogSearchItemProps) => {
  return (
    <>
      <Box>
        {isLoading && (
          <>
            <Placeholder />
            <Placeholder />
          </>
        )}

        {facets.length > 0 && <ChangelogSearchFacets facets={facets} onFacetChange={onFacetChange} />}

        {entries.length > 0 && entries.map((entry, i) => <ChangeLogSearchItem item={entry} key={i} isLast={i === entries.length - 1} isMore={true} onNextPage={onNextPage} />)}
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
