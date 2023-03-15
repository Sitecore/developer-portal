import { useSearchResults, widget, WidgetDataType } from '@sitecore-discover/react';
import { WidgetComponentProps } from '@sitecore-discover/react/types';
import Image from 'next/image';
import type { ComponentType } from 'react';
import Loader from './Loader';
import QuerySummary from './QuerySummary';

export interface SearchResultsType extends WidgetComponentProps {
  initialKeyphrase?: string;
  currentPage?: number;
  initialArticlesPerPage?: number;
  title?: string;
}

export const SearchResults = (props: SearchResultsType) => {
  const { initialKeyphrase = '', initialArticlesPerPage = 24, title = '', currentPage = 1 } = props;
  const {
    actions: { onSortChange },
    context: { page = currentPage, itemsPerPage = initialArticlesPerPage },
    queryResult: { isLoading, data: { sort: { choices: sortChoices = [] } = {}, total_item: totalItems = 0, content: articles = [], facet: facets = [] } = {} },
  } = useSearchResults(() => {
    return {
      itemsPerPage: initialArticlesPerPage,
      keyphrase: initialKeyphrase,
      page: currentPage,
    };
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
                {sortChoices.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {articles.length && <QuerySummary currentPage={page} resultsPerPage={itemsPerPage} totalResults={totalItems} title={title} />}
          </div>

          <div className="flex flex-row">
            <div className="mt-4 shrink-0 basis-1/4">
              {facets.map((facet, index) => (
                <div key={index}>
                  <h4 className="font-bold">{facet.label}</h4>
                  <ul>
                    {facet.value.map((facetOption, index) => (
                      <li key={index}>
                        <input type="checkbox" value={facetOption.id} />
                        <span className="ml-2">
                          {facetOption.text} ({facetOption.count})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="basis-3/4">
              <ul className="border-theme-border mt-2 border-t">
                {articles.map((result, index) => (
                  <li key={index}>
                    <div className="border-theme-border relative border-b p-4">
                      <a href={result.url} className="group flex">
                        {result.image_url && <Image width={200} height={25} src={result.image_url} alt={title} />}
                        <div className={result.image_url ? 'mt-8 ml-6' : ''}>
                          <p className="font-bold group-hover:underline">{result.name}</p>
                          <span className="break-words text-xs italic">{result.url}</span>
                          {result.description && <p className="text-sm">{result.description}</p>}
                          {result.index_name && <p className="text-sm">Source: {result.index_name}</p>}
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              {totalItems <= itemsPerPage ? (
                ''
              ) : (
                <div className="m-auto w-full items-center text-center">
                  <div>
                    {page > 1 ? <a href={'?q=' + initialKeyphrase + '&p=' + (parseInt(page) - 1)}>&lt; Prev</a> : ''}
                    <span>...</span>
                    {page < totalItems / itemsPerPage ? <a href={'?q=' + initialKeyphrase + '&p=' + (parseInt(page) + 1)}>Next &gt;</a> : ''}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SearchResultsWidget = widget(SearchResults as ComponentType, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
