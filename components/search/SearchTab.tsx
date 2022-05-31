// Global
import { useState, useEffect } from 'react';
import { buildTab, TabState } from '@coveo/headless';
// Lib
import { coveoEngine } from '@/lib/search/coveo-engine';
import { classnames } from '@/tailwindcss-classnames';

interface SearchTabProps {
  id: string;
  expression: string;
  title: string;
  selected?: boolean;
}

const SearchTab = ({ id, expression, title, selected }: SearchTabProps) => {
  const tab = buildTab(coveoEngine, { options: { expression, id } });
  const [tabState, setTabState] = useState<TabState | null>(null);

  useEffect(() => {
    tab.subscribe(() => {
      setTabState(tab.state);
    });

    return () => {
      tab.subscribe(() => {});
    };
  }, []);

  if (!tabState) {
    return <></>;
  }

  const activeClasses = classnames(
    'border-b-4',
    'border-theme-link-hover',
    'text-theme-link-hover'
  );

  return (
    <button
      onClick={() => {
        tab.select();
      }}
      className={classnames('py-4', 'font-bold', 'block', { [activeClasses]: tabState.isActive })}
    >
      {title}
    </button>
  );
};

export default SearchTab;
