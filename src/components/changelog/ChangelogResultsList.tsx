import { ChangelogEntry } from '@lib/changelog/types';
import ChangeLogItem from './ChangeLogItem';
import { cn } from '@lib/utils';

type ChangelogResultsListProps = {
  entries?: Array<ChangelogEntry>;
  isLoading: boolean;
  hasNext?: boolean;
  onEndTriggered: () => void;
  className?: string;
};

const ChangelogResultsList = ({ entries, isLoading, hasNext, onEndTriggered, className }: ChangelogResultsListProps) => {
  return <div className={cn(className)}>{entries && entries.map((item, i) => <ChangeLogItem item={item} key={i} loading={isLoading} isLast={i === entries.length - 1} isMore={hasNext} loadEntries={() => onEndTriggered()} />)}</div>;
};

export default ChangelogResultsList;
