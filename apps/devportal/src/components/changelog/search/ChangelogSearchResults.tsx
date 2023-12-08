import { Box } from '@chakra-ui/react';
import { ChangeLogSearchFacet } from 'sc-changelog/search/types';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import ChangeLogSearchItem from './ChangeLogSearchItem';
import ChangelogSearchFacets from './ChangelogSearchFacets';

type ChangeLogSearchItemProps = {
  entries: ChangelogEntry[];
  facets: ChangeLogSearchFacet[];
  loadEntries: () => void;
};

export const ChangelogSearchResults = ({ entries, facets, loadEntries }: ChangeLogSearchItemProps) => {
  return (
    <>
      <Box>
        {entries.length > 0 && (
          <>
            <ChangelogSearchFacets facets={facets} onFacetClick={() => console.log('facet clicked!')} />

            {entries.map((entry, i) => (
              <ChangeLogSearchItem item={entry} key={i} isLast={i === entries.length - 1} isMore={true} loadEntries={loadEntries} />
            ))}
          </>
        )}
      </Box>
    </>
  );
};

export default ChangelogSearchResults;
