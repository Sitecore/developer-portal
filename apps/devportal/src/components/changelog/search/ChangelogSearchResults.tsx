import { Box } from '@chakra-ui/react';
import { SearchResultsInitialState, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';
import { useState } from 'react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { Loading } from 'ui/components/common/Loading';
import ChangeLogSearchItem from './ChangeLogSearchItem';
import ChangelogSearchFacets from './ChangelogSearchFacets';

export interface InitialChangeLogProps {
  initialKeyphrase?: string;
  currentPage?: number;
  initialArticlesPerPage?: number;
  defaultSortType?: string;
}

type InitialState = SearchResultsInitialState<'itemsPerPage' | 'keyphrase' | 'page' | 'sortType'>;

export const ChangelogSearchResults = (props: InitialChangeLogProps) => {
  const [pageCounter, setPageCounter] = useState<number>(2);
  const changeLogSources = [process.env.NEXT_PUBLIC_CHANGELOG_SEARCH_SOURCE || ''];
  const { initialKeyphrase = '', initialArticlesPerPage = 10, currentPage = 1, defaultSortType = 'release_date_desc' } = props;
  const {
    widgetRef,
    actions: { onFacetClick, onResultsPerPageChange },
    state: { itemsPerPage = initialArticlesPerPage },
    queryResult: { isLoading, data: { total_item: totalItems = 0, content: entries = [], facet: facets = [] } = {} },
  } = useSearchResults<ChangelogEntry, InitialState>({
    query: (query) =>
      query
        .getRequest()
        .setSources(changeLogSources)
        .setSearchFacet({ types: [{ name: 'product_names' }, { name: 'changeTypeName' }] }),
    state: {
      sortType: defaultSortType,
      page: currentPage,
      itemsPerPage: initialArticlesPerPage,
      keyphrase: initialKeyphrase,
    },
  });

  function handlePagination() {
    setPageCounter(pageCounter + 1);
    console.log(`triggering paging for: ${pageCounter * initialArticlesPerPage} items`);
    console.log(`pageCounter: ${pageCounter}, itemsPerPage: ${itemsPerPage}, initialArticlesPerPage: ${initialArticlesPerPage}`);
    onResultsPerPageChange({ numItems: pageCounter * initialArticlesPerPage });
    console.log(`finished triggering paging for: ${pageCounter * initialArticlesPerPage} items`);
  }

  return (
    <>
      {isLoading && (
        <div className="pt-10">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <>
          <ChangelogSearchFacets facets={facets} onFacetClick={onFacetClick} />

          <Box ref={widgetRef}>
            {entries.length > 0 && (
              <>
                {entries.map((entry, i) => (
                  <ChangeLogSearchItem item={entry} key={i} isLast={i === entries.length - 1} isMore={pageCounter * initialArticlesPerPage < totalItems} loadEntries={handlePagination} />
                ))}
              </>
            )}
          </Box>
        </>
      )}
    </>
  );
};

const SearchResultsWidget = widget(ChangelogSearchResults, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
