import { Box } from '@chakra-ui/react';
import { SearchResultsInitialState, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';
import { Loading } from 'ui/components/common/Loading';
import ChangeLogItem from '../ChangeLogItem';

export interface InitialChangeLogProps {
  initialKeyphrase?: string;
  currentPage?: number;
  initialArticlesPerPage?: number;
  defaultSortType?: string;
}

type InitialState = SearchResultsInitialState<'itemsPerPage' | 'keyphrase' | 'page' | 'sortType'>;

export const ChangelogSearchResults = (props: InitialChangeLogProps) => {
  const changeLogSources = [process.env.NEXT_PUBLIC_CHANGELOG_SEARCH_SOURCE || ''];
  const { initialKeyphrase = '', initialArticlesPerPage = 10, currentPage = 1, defaultSortType = 'created_at_desc' } = props;
  const {
    widgetRef,
    //actions: { onSortChange, onFacetClick, onPageNumberChange, onItemClick },
    state: { page = currentPage, itemsPerPage = initialArticlesPerPage, sortType = defaultSortType },
    queryResult: { isLoading, data: { sort: { choices: sortChoices = [] } = {}, total_item: totalItems = 0, content: entries = [], facet: facets = [] } = {} },
  } = useSearchResults<ChangelogEntry, InitialState>({
    query: (query) => query.getRequest().setSources(changeLogSources),
    state: {
      sortType: defaultSortType,
      page: currentPage,
      itemsPerPage: initialArticlesPerPage,
      keyphrase: initialKeyphrase,
    },
  });

  return (
    <>
      {isLoading && (
        <div className="pt-10">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <Box ref={widgetRef}>{entries.length > 0 && entries.map((entry, i) => <ChangeLogItem item={entry} key={i} loading={isLoading} isLast={i === entries.length - 1} isMore={true} loadEntries={() => window.alert('Load More!')} />)}</Box>
      )}
    </>
  );
};

const SearchResultsWidget = widget(ChangelogSearchResults, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
