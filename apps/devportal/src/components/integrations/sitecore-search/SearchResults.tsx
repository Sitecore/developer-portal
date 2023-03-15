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
    // initialization code
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
            <div className="mt-4 basis-1/4">
              {facets.map((facet, index) => (
                <div key={index}>
                  <h4 className="font-bold">{facet.label}</h4>
                  <ul>
                    {facet.value.map((facetOption, index) => (
                      <li key={index}>
                        <input type="checkbox" value={facetOption.id} />
                        {facetOption.text} ({facetOption.count})
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="basis-3/4">
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

              <div className="m-auto w-full items-center text-center">
                <div>
                  {page > 1 ? <a href={'?q=' + initialKeyphrase + '&p=' + (parseInt(page) - 1)}>&lt; Prev</a> : ''}
                  <span>...</span>
                  {page < totalItems / itemsPerPage ? <a href={'?q=' + initialKeyphrase + '&p=' + (parseInt(page) + 1)}>Next &gt;</a> : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SearchResultsWidget = widget(SearchResults as ComponentType, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
