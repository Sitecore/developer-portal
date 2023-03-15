import { useSearchResults, widget, WidgetDataType } from '@sitecore-discover/react';
import { WidgetComponentProps } from '@sitecore-discover/react/types';
import Image from 'next/image';
import type { ComponentType } from 'react';
import Loader from './Loader';
import QuerySummary from './QuerySummary';

export interface SearchResultsType extends WidgetComponentProps {
  initialKeyphrase?: string;
  initialArticlesPerPage?: number;
  title?: string;
}

export const SearchResults = (props: SearchResultsType) => {
  const { initialKeyphrase = '', initialArticlesPerPage = 24, title = '' } = props;
  const {
    actions: { onSortChange },
    context: { page = 0, itemsPerPage = initialArticlesPerPage },
    queryResult: { isLoading, data: { sort: { choices: sortChoices = [] } = {}, total_item: totalItems = 0, content: articles = [] } = {} },
  } = useSearchResults(() => {
    // initialization code
    return {
      itemsPerPage: initialArticlesPerPage,
      keyphrase: initialKeyphrase,
    };
  });
  const sortOptions = sortChoices.map(({ name, label }) => {
    return { label, value: `${name}` };
  });
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="mt-12">
          <div className="m-auto w-full items-center">
            <div className="relative float-right inline-flex">
              <label>Sort by:</label>
              <select
                className="sortSelect"
                onChange={(event) => {
                  onSortChange({ sortType: event.target.value });
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value} />
                ))}
              </select>
            </div>
            {articles.length && <QuerySummary currentPage={page} resultsPerPage={itemsPerPage} totalResults={totalItems} title={title} />}
          </div>

          <div>
            <ul>
              {articles.map((result, index) => (
                <li key={index}>
                  <div className="border-theme-border relative border-b p-4">
                    <a href={result.url} className="group">
                      {result.image_url && <Image width={25} height={25} src={result.image_url} alt={title} />}
                      <p className="font-bold group-hover:underline">{result.title}</p>
                      <span className="text-xs italic">{result.url}</span>
                      <p>{result.description}</p>
                      <p>{result.index_name}</p>
                      <span className="absolute inset-0 z-10"></span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

const SearchResultsWidget = widget(SearchResults as ComponentType, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
