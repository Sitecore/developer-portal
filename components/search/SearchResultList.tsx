// Global
import {
  Result,
  ResultListState,
  buildResultList,
  buildResultTemplatesManager,
  buildQuerySummary,
  QuerySummaryState,
  buildSort,
  SortByRelevancy,
  SortByDate,
  buildRelevanceSortCriterion,
  SortInitialState,
  SortState,
  buildDateSortCriterion,
  SortOrder,
  SortCriterion,
} from '@coveo/headless';
import { useEffect, useState } from 'react';
// Lib
import { coveoEngine } from '@/lib/search/coveo-engine';
// Components
import SearchResultItem from './SearchResultItem';

type SortOption = 'relevance' | 'dateAscending' | 'dateDescending';

const SearchResultList = () => {
  const resultList = buildResultList(coveoEngine, { options: { fieldsToInclude: ['date'] } });
  const [resultState, setResultState] = useState<ResultListState | null>(null);
  const querySummary = buildQuerySummary(coveoEngine);
  const [querySummaryState, setQuerySummaryState] = useState<QuerySummaryState | null>(null);

  const sortOptions: Record<SortOption, SortByRelevancy | SortByDate | SortInitialState> = {
    relevance: buildRelevanceSortCriterion(),
    dateAscending: buildDateSortCriterion(SortOrder.Ascending),
    dateDescending: buildDateSortCriterion(SortOrder.Descending),
  };
  const resultsSort = buildSort(coveoEngine, {
    initialState: sortOptions.relevance as SortInitialState,
  });
  const [sortState, setSortState] = useState<SortState | null>(null);

  const templateManager = buildResultTemplatesManager(coveoEngine);
  templateManager.registerTemplates({
    conditions: [],
    content: (result: Result, i: number) => (
      <li key={result.uniqueId}>
        <SearchResultItem result={result} />
      </li>
    ),
  });

  useEffect(() => {
    resultList.subscribe(() => {
      setResultState(resultList.state);
    });
    querySummary.subscribe(() => {
      setQuerySummaryState(querySummary.state);
    });
    resultsSort.subscribe(() => {
      setSortState(resultsSort.state);
    });

    return () => {
      resultList.subscribe(() => {});
      querySummary.subscribe(() => {});
      resultsSort.subscribe(() => {});
    };
  }, []);

  if (!resultState || !querySummaryState) {
    return null;
  }

  const handleSortChange = (val: SortOption) => {
    resultsSort.sortBy(sortOptions[val] as SortCriterion);
  };

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
        </p>
        <select
          onChange={(event) => {
            handleSortChange(event.target.value as SortOption);
          }}
          className="bg-theme-bg-alt p-2"
        >
          <option value="relevance">Relevance</option>
          <option value="dateAscending">Date Ascending</option>
          <option value="dateDescending">Date Descending</option>
        </select>
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
