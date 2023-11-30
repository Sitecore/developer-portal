import { Box } from '@chakra-ui/react';
import { SearchResultsInitialState, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';
import { Loading } from 'ui/components/common/Loading';
import { ChangeLogSearchItem } from './ChangeLogSearchItem';

export interface InitialChangeLogProps {
  initialKeyphrase?: string;
  currentPage?: number;
  initialArticlesPerPage?: number;
  defaultSortType?: string;
}

interface ProductDetails {
  darkIcon: string;
  lightIcon: string;
  description: string;
  name: string;
  sitecoreClouds: string[];
}

export interface ChangeLogResultsType {
  id: string;
  body: string;
  breaking_changes: boolean;
  change_types: string[];
  index_name: string;
  name: string;
  product_names: string[];
  read_more_link: string;
  site_name: string;
  type: string;
  url: string;
  product_details: ProductDetails[];
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
  } = useSearchResults<ChangeLogResultsType, InitialState>({
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
      {!isLoading && <Box ref={widgetRef}>{entries.length > 0 && entries.map((entry, index) => <ChangeLogSearchItem entry={entry} index={index} />)}</Box>}
    </>
  );
};

const SearchResultsWidget = widget(ChangelogSearchResults, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
