import { Box } from '@chakra-ui/react';
import { ChangelogEntry } from '@lib/changelog/types';

import ChangeLogItem from './ChangeLogItem';

type ChangelogResultsListProps = {
  entries?: Array<ChangelogEntry>;
  isLoading: boolean;
  hasNext?: boolean;
  onEndTriggered: () => void;
};

const ChangelogResultsList = ({ entries, isLoading, hasNext, onEndTriggered }: ChangelogResultsListProps): JSX.Element => {
  return <Box>{entries && entries.map((item, i) => <ChangeLogItem item={item} key={i} loading={isLoading} isLast={i === entries.length - 1} isMore={hasNext} loadEntries={() => onEndTriggered()} />)}</Box>;
};

export default ChangelogResultsList;
