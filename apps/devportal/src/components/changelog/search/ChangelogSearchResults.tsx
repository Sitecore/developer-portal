import { Box } from '@chakra-ui/react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import ChangeLogSearchItem from './ChangeLogSearchItem';

type ChangeLogSearchItemProps = {
  entries: ChangelogEntry[];
  loadEntries: () => void;
};

export const ChangelogSearchResults = ({ entries, loadEntries }: ChangeLogSearchItemProps) => {
  return (
    <>
      <Box>
        {entries.length > 0 && (
          <>
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
