// Global
import {
  Result,
  ResultListState,
  buildResultList,
  buildResultTemplatesManager,
} from '@coveo/headless';
import { useEffect, useState } from 'react';
// Lib
import { coveoEngine } from '@/lib/search/coveo-engine';
// Components
import SearchResultItem from './SearchResultItem';

const SearchResultList = () => {
  const resultList = buildResultList(coveoEngine, { options: { fieldsToInclude: ['date'] } });
  const [resultState, setResultState] = useState<ResultListState>(resultList.state);

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

    return () => {
      resultList.subscribe(() => {});
    };
  }, []);

  return (
    <ul>
      {resultState.results.map((result: Result) => {
        const template: any = templateManager.selectTemplate(result);
        return template(result);
      })}
    </ul>
  );
};

export default SearchResultList;
