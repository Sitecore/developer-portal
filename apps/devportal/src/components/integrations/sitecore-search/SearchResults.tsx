import { useSearchResults, widget, WidgetDataType } from '@sitecore-discover/react';
import { WidgetComponentProps } from '@sitecore-discover/react/types';
import { AccordionFacets } from '@sitecore-discover/ui';
import Image from 'next/image';
import { ComponentType } from 'react';
import Loader from './Loader';
import QuerySummary from './QuerySummary';
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
        <div className="mt-12">
          <div className="m-auto w-full items-center">
            <div className="relative float-right inline-flex">
              <div>
                <label>Sorting by: </label>
              </div>
              <div>
                <SearchSort onSortChange={onSortChange} sortChoices={sortChoices} sortType={sortType} />
              </div>
            </div>
            {articles.length && <QuerySummary currentPage={page} resultsPerPage={itemsPerPage} totalResults={totalItems} title={initialKeyphrase} />}
          </div>

          <div className="flex flex-row">
            <div className="mt-4 shrink-0 basis-1/4">
              <AccordionFacets.Root defaultFacetTypesExpandedList={[]} onFacetValueClick={onFacetClick}>
                {facets.map((facet, index) => (
                  <AccordionFacets.Facet key={index} facetId={facet.name}>
                    <AccordionFacets.Header className="mt-4 rounded-md border p-2">
                      <AccordionFacets.Trigger className="w-full text-left">{facet.label}</AccordionFacets.Trigger>
                    </AccordionFacets.Header>
                    <AccordionFacets.Content>
                      <AccordionFacets.ValueList>
                        {facet.value.map((v, index) => (
                          <AccordionFacets.Item
                            className="pl-2 pr-2"
                            key={v.id}
                            {...{
                              index,
                              facetValueId: v.id,
                              facetLabel: v.text,
                            }}
                          >
                            <AccordionFacets.ItemCheckbox>
                              <AccordionFacets.ItemCheckboxIndicator className="h-14 w-14">
                                <input type="checkbox" checked />
                              </AccordionFacets.ItemCheckboxIndicator>
                            </AccordionFacets.ItemCheckbox>
                            <AccordionFacets.ItemLabel className="ml-2 text-sm">
                              {v.text} {v.count && `(${v.count})`}
                            </AccordionFacets.ItemLabel>
                          </AccordionFacets.Item>
                        ))}
                      </AccordionFacets.ValueList>
                    </AccordionFacets.Content>
                  </AccordionFacets.Facet>
                ))}
              </AccordionFacets.Root>
            </div>

            <div className="basis-3/4">
              <ul className="border-theme-border mt-2 border-t">
                {articles.map((result, index) => (
                  <li key={index}>
                    <div className="border-theme-border relative border-b p-4">
                      <a href={result.url} className="group flex">
                        {result.image_url && <Image width={256} height={144} src={result.image_url} alt={result.index_name} className="m-auto h-fit" />}
                        <div className={result.image_url ? 'mt-2 ml-6' : ''}>
                          <p className="font-bold group-hover:underline">{result.name}</p>
                          <span className="break-words text-xs italic">{result.url}</span>
                          {result.description && <p className="text-sm">{result.description}</p>}
                          {result.index_name && <p className="text-sm">Source: {result.index_name}</p>}
                          {result.type && <p className="text-sm">Document Type: {result.type}</p>}
                        </div>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>

              <SearchPagination defaultCurrentPage={1} onPageNumberChange={(v) => onPageNumberChange({ page: v })} page={page} pageSize={itemsPerPage} totalItems={totalItems} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SearchResultsWidget = widget(SearchResults as ComponentType, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
