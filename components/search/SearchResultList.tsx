// Global
import router from 'next/router';
import { Result, buildResultTemplatesManager, ResultTemplatesHelpers } from '@coveo/headless';
import { useEffect, useState } from 'react';
// Lib
import {
  coveoEngine,
  resultList,
  querySummary,
  urlManager,
  searchStatus,
} from '@/lib/search/coveo-engine';
// Components
import SearchResultItem from './SearchResultItem';
import VideoResultItem from './VideoResultItem';

const SearchResultList = () => {
  const [resultState, setResultState] = useState(resultList.state);
  const [querySummaryState, setQuerySummaryState] = useState(querySummary.state);
  const [searchStatusState, setSearchStatusState] = useState(searchStatus.state);

  const templateManager = buildResultTemplatesManager(coveoEngine);
  templateManager.registerTemplates(
    {
      conditions: [ResultTemplatesHelpers.fieldMustMatch('sourcetype', ['YouTube'])],
      content: (result: Result, i: number) => (
        <li key={result.uniqueId}>
          <VideoResultItem result={result} />
        </li>
      ),
      priority: 1,
    },
    {
      conditions: [],
      content: (result: Result, i: number) => (
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
      <div className="border-b border-theme-border flex justify-between items-center text-sm">
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
          const template: any = templateManager.selectTemplate(result);
          return template(result);
        })}
      </ul>
    </div>
  );
};

export default SearchResultList;
