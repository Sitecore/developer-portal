import { Box } from '@chakra-ui/react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import ChangeLogSearchItem from './ChangeLogSearchItem';

type ChangeLogSearchItemProps = {
  entries: ChangelogEntry[];
};

export const ChangelogSearchResults = ({ entries }: ChangeLogSearchItemProps) => {
  return (
    <>
      <Box>
        {entries.length > 0 && (
          <>
            {entries.map((entry, i) => (
              <ChangeLogSearchItem item={entry} key={i} isLast={i === entries.length - 1} isMore={true} loadEntries={() => window.alert('PAGING!')} />
            ))}
          </>
        )}
      </Box>
    </>
  );
};

export default ChangelogSearchResults;
