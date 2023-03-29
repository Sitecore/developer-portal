import { useSearchResults, widget, WidgetDataType } from '@sitecore-discover/react';
import { WidgetComponentProps } from '@sitecore-discover/react/types';
import Image from 'next/image';
import { ComponentType } from 'react';
import { truncateString } from 'ui/common/text-util';
import Loader from './Loader';
import QuerySummary from './QuerySummary';
import SearchFacets from './SearchFacets';
import SearchPagination from './SearchPagination';
import SearchSort from './SearchSort';

export interface SearchResultsType extends WidgetComponentProps {
  initialKeyphrase?: string;
  currentPage?: number;
  initialArticlesPerPage?: number;
  defaultSortType?: string;
}

export const SearchResults = (props: SearchResultsType) => {
  const { initialKeyphrase = '', initialArticlesPerPage = 24, currentPage = 1, defaultSortType = 'title_asc' } = props;
  const {
    actions: { onSortChange, onFacetClick, onPageNumberChange },
    context: { page = currentPage, itemsPerPage = initialArticlesPerPage, sortType = defaultSortType },
    queryResult: { isLoading, data: { sort: { choices: sortChoices = [] } = {}, total_item: totalItems = 0, content: articles = [], facet: facets = [] } = {} },
  } = useSearchResults(() => {
    return {
      itemsPerPage: initialArticlesPerPage,
      keyphrase: initialKeyphrase,
      page: currentPage,
      sortType: defaultSortType,
    };
  });

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="grid gap-6 mt-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <SearchFacets onFacetClick={onFacetClick} facets={facets} />
          </div>
          <div className="md:col-span-2">
            <div className="items-center w-full m-auto">
              <div className="relative inline-flex float-right text-sm">
                <SearchSort onSortChange={onSortChange} sortChoices={sortChoices} sortType={sortType} />
              </div>
              {articles.length && <QuerySummary currentPage={page} resultsPerPage={itemsPerPage} totalResults={totalItems} title={initialKeyphrase} />}
            </div>
            <ul className="mt-2 border-t border-theme-border">
              {articles.map((result, index) => (
                <li key={index} className="py-4 mt-2 ml-6 ">
                  <a href={result.url} className="group">
                    <div className="grid items-center grid-cols-4 bg-theme-bg md:flex-row">
                      <div className={`${result.type == 'Video' ? 'col-span-3' : 'col-span-4'} pr-2`}>
                        {result.type && <span className="bg-gray-lightest dark:bg-teal  mr-2 px-2.5 py-1 text-xs uppercase">{result.type}</span>}
                        {result.index_name && <span className="mr-2 px-2.5 py-1 text-xs uppercase">{result.index_name}</span>}
                        <h3 className="mt-2 font-bold group-hover:underline">{result.name}</h3>

                        {result.description && <p className="text-sm">{truncateString(result.description, 300, true)}</p>}
                      </div>
                      {result.type == 'Video' && (
                        <div className="col-span-1">
                          {result.image_url && <Image width={256} height={144} src={result.image_url} alt={result.index_name} className="object-scale-down mt-20" />}
                          {!result.image_url && <Image width={256} height={144} src="/images/social/social-card-default.jpeg" alt={result.index_name} className="object-scale-down mt-20" />}
                        </div>
                      )}
                    </div>
                    <span className="block mt-5 text-xs font-semibold break-words text-violet">{result.url}</span>
                  </a>
                </li>
              ))}
            </ul>

            <SearchPagination defaultCurrentPage={1} onPageNumberChange={(v) => onPageNumberChange({ page: v })} page={page} pageSize={itemsPerPage} totalItems={totalItems} />
          </div>
        </div>
      )}
    </>
  );
};

const SearchResultsWidget = widget(SearchResults as ComponentType, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
