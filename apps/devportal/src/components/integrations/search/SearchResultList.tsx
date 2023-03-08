// Global
import { buildResultTemplatesManager, Result, ResultTemplatesHelpers } from '@coveo/headless';
import router from 'next/router';
import { useEffect, useState } from 'react';
// Lib
import {
  coveoEngine,
  querySummary,
  resultList,
  searchStatus,
  urlManager,
} from '@/src/common/coveo-engine';
// Components
import SearchResultItem from './SearchResultItem';
import VideoResultItem from './VideoResultItem';

const SearchResultList = () => {
  const [resultState, setResultState] = useState(resultList.state);
  const [querySummaryState, setQuerySummaryState] = useState(querySummary.state);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchStatusState, setSearchStatusState] = useState(searchStatus.state);

  const templateManager = buildResultTemplatesManager(coveoEngine);
  templateManager.registerTemplates(
    {
      conditions: [ResultTemplatesHelpers.fieldMustMatch('sourcetype', ['YouTube'])],
      content: (result: Result) => (
        <li key={result.uniqueId}>
          <VideoResultItem result={result} />
        </li>
      ),
      priority: 1,
    },
    {
      conditions: [],
      content: (result: Result) => (
        <li key={result.uniqueId}>
          <SearchResultItem result={result} />
        </li>
      ),
    }
  );

  const subscribeToStateChangesAndReturnCleanup = () => {
    const allunsubscribers: { (): void }[] = [];
    allunsubscribers.push(searchStatus.subscribe(() => setSearchStatusState(searchStatus.state)));
    allunsubscribers.push(
      resultList.subscribe(() => {
        setResultState(resultList.state);
      })
    );
    allunsubscribers.push(
      querySummary.subscribe(() => {
        setQuerySummaryState(querySummary.state);
      })
    );
    allunsubscribers.push(
      urlManager.subscribe(() => {
        router.push({ hash: urlManager.state.fragment });
      })
    );
    return function cleanup() {
      allunsubscribers.forEach((unsub) => unsub());
    };
  };

  useEffect(subscribeToStateChangesAndReturnCleanup, []);

  if (!resultState || !querySummaryState) {
    return null;
  }

  if (!querySummaryState.hasResults) {
    return (
      <div>
        <p>No results found.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="border-theme-border flex items-center justify-between border-b text-sm">
        <p>
          Results{' '}
          <strong>
            {querySummaryState.firstResult} - {querySummaryState.lastResult}
          </strong>{' '}
          of <strong>{querySummaryState.total}</strong> in {querySummaryState.durationInSeconds}{' '}
          seconds
          {querySummaryState.query != '' && (
            <>
              {' '}
              for <strong>{querySummaryState.query}</strong>
            </>
          )}
        </p>
      </div>

      <ul>
        {resultState.results.map((result: Result) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const template: any = templateManager.selectTemplate(result);
          return template(result);
        })}
      </ul>
    </div>
  );
};

export default SearchResultList;
