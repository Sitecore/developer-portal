import { Grid, GridItem, HStack, Heading, Image, SimpleGrid, Stack, StackDivider, Tag, Text } from '@chakra-ui/react';
import { SearchResultsInitialState, WidgetDataType, trackEntityPageViewEvent, useSearchResults, widget } from '@sitecore-search/react';
//import Image from 'next/image';
import { Loading } from '../common/Loading';
import QuerySummary from './QuerySummary';
import SearchFacets from './SearchFacets';
import SearchPagination from './SearchPagination';
import SearchSort from './SearchSort';

export interface HighlightType {
  description?: string;
}
export interface InitialSearchProps {
  initialKeyphrase?: string;
  currentPage?: number;
  initialArticlesPerPage?: number;
  defaultSortType?: string;
}
interface SearchResultsType {
  url: string;
  id: string;
  index_name: string;
  type: string;
  image_url: string;
  description: string;
  site_name: string;
  name: string;
  highlight: HighlightType;
}
type InitialState = SearchResultsInitialState<'itemsPerPage' | 'keyphrase' | 'page' | 'sortType'>;

export const SearchResults = (props: InitialSearchProps) => {
  const indexSources = process.env.NEXT_PUBLIC_SEARCH_SOURCES?.split(',') || [];
  const { initialKeyphrase = '', initialArticlesPerPage = 24, currentPage = 1, defaultSortType = 'suggested' } = props;
  const {
    widgetRef,
    actions: { onSortChange, onFacetClick, onPageNumberChange, onItemClick },
    state: { page = currentPage, itemsPerPage = initialArticlesPerPage, sortType = defaultSortType },
    queryResult: { isLoading, data: { sort: { choices: sortChoices = [] } = {}, total_item: totalItems = 0, content: articles = [], facet: facets = [] } = {} },
  } = useSearchResults<SearchResultsType, InitialState>({
    query: (query) =>
      query
        .getRequest()
        .setSearchQueryHighlight({
          fields: ['description'],
          fragment_size: 100,
          pre_tag: '<strong>',
          post_tag: '</strong>',
        })
        .setSources(indexSources),
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
        <Grid templateColumns="repeat(6, 1fr)" gap={6} ref={widgetRef}>
          {articles.length > 0 && (
            <>
              <GridItem colSpan={2}>
                <SearchFacets onFacetClick={onFacetClick} facets={facets} />
              </GridItem>

              <GridItem colSpan={4}>
                <HStack justify={'space-between'} pb={8}>
                  {articles.length > 0 && <QuerySummary currentPage={page} resultsPerPage={itemsPerPage} totalResults={totalItems} title={initialKeyphrase} />}
                  <SearchSort onSortChange={onSortChange} sortChoices={sortChoices} sortType={sortType} />
                </HStack>

                <Stack divider={<StackDivider />} gap={2}>
                  {articles.length > 0 &&
                    articles.map((result, index) => (
                      <a
                        href={result.url}
                        key={index}
                        className="group"
                        onClick={(e) => {
                          e.preventDefault();
                          onItemClick({ id: result.id || '', index });
                          if (result.index_name != 'sitecore-devportal-v2') trackEntityPageViewEvent('content', { items: [{ id: result.id }] });
                          window.open(result.url, '_blank');
                        }}
                      >
                        <SimpleGrid columns={4} spacing={4} alignItems={'center'} flexDirection={'row'}>
                          <GridItem colSpan={result.type == 'Video' ? 3 : 4}>
                            <HStack pb={2}>
                              {result.type && (
                                <Tag colorScheme={getColorScheme(result.type)} size="md">
                                  {result.type}
                                </Tag>
                              )}
                              {result.index_name && <Heading variant={'section'}>{result.site_name}</Heading>}
                            </HStack>
                            <Heading as="h3" size="md">
                              {result.name}
                            </Heading>

                            {result?.highlight?.description && <Text size="sm" noOfLines={3} dangerouslySetInnerHTML={{ __html: result.highlight.description }} my={2} />}
                            {!result.highlight && result.description && (
                              <Text size="sm" noOfLines={3}>
                                {result.description}
                              </Text>
                            )}
                          </GridItem>

                          {result.type == 'Video' && (
                            <GridItem colSpan={1}>
                              {result.image_url && <Image width={256} src={result.image_url} alt={result.index_name} shadow={'md'} />}
                              {!result.image_url && <Image width={256} src="/images/social/social-card-default.jpeg" alt={result.index_name} shadow={'md'} />}
                            </GridItem>
                          )}
                        </SimpleGrid>
                        <Text variant={'tiny'}>{result.url}</Text>
                      </a>
                    ))}
                </Stack>

                <SearchPagination defaultCurrentPage={1} onPageNumberChange={(v) => onPageNumberChange({ page: v })} page={page} pageSize={itemsPerPage} totalItems={totalItems} />
              </GridItem>
            </>
          )}
          {articles.length === 0 && <p className="md:col-span-3">Your search terms did not return any results, please use the input above to try again.</p>}
        </Grid>
      )}
    </>
  );
};

function getColorScheme(resultType: string) {
  if (resultType == 'Article') {
    return 'purple';
  }
  if (resultType == 'Forum') {
    return 'teal';
  }
  if (resultType == 'Repository') {
    return 'black';
  }
  if (resultType == 'Video') {
    return 'red';
  }
  if (resultType == 'ChangeLog') {
    return 'blue';
  }
  return 'gray';
}

const SearchResultsWidget = widget(SearchResults, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
