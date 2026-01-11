import type { ChangelogEntry } from "@src/lib/changelog/types";
import { cn } from "@src/lib/utils";
import ChangeLogItem from "./ChangeLogItem";

type ChangelogResultsListProps = {
	entries?: Array<ChangelogEntry>;
	isLoading: boolean;
	hasNext?: boolean;
	onEndTriggered: () => void;
	className?: string;
};

const ChangelogResultsList = ({
	entries,
	isLoading,
	hasNext,
	onEndTriggered,
	className,
}: ChangelogResultsListProps) => {
	return (
		<div className={cn(className)}>
			{entries?.map((item, i) => (
				<ChangeLogItem
					item={item}
					key={item.id || i}
					loading={isLoading}
					isLast={i === entries.length - 1}
					isMore={hasNext}
					loadEntries={() => onEndTriggered()}
				/>
			))}
		</div>
	);
};

export default ChangelogResultsList;
