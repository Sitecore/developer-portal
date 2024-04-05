import { Badge, Box, Grid, GridItem, HStack, Heading, Hide, Image, Stack, StackDivider, Text } from '@chakra-ui/react';
import { SearchResultsInitialState, WidgetDataType, trackEntityPageViewEvent, useSearchResults, widget } from '@sitecore-search/react';
//import Image from 'next/image';
import { getColorScheme } from '@/src/lib/search';
import { Loading } from '@scdp/ui/components';
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
              <GridItem colSpan={{ base: 6, md: 2 }}>
                {/* Hide for desktop */}
                <Hide above="md">
                  <SearchSort onSortChange={onSortChange} sortChoices={sortChoices} sortType={sortType} />
                </Hide>

                <Box ml={2} display={'inline'}>
                  <SearchFacets onFacetClick={onFacetClick} facets={facets} />
                </Box>
              </GridItem>

              <GridItem colSpan={{ base: 6, md: 4 }}>
                <HStack justify={'space-between'} pb={8}>
                  {articles.length > 0 && <QuerySummary currentPage={page} resultsPerPage={itemsPerPage} totalResults={totalItems} title={initialKeyphrase} />}
                  {/* Hide for mobile, will be replaced with SearchSort component line 74 */}
                  <Hide below="md">
                    <SearchSort onSortChange={onSortChange} sortChoices={sortChoices} sortType={sortType} />
                  </Hide>
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
                          if (result.index_name != 'sitecore-devportal-v2') {
                            trackEntityPageViewEvent('content', { items: [{ id: result.id }] });
                            window.open(result.url, '_blank');
                          } else {
                            window.open(result.url + '?fromSearch=true', '_blank');
                          }
                        }}
                      >
                        <HStack pb={2}>
                          {result.type && (
                            <Badge colorScheme={getColorScheme(result.type)} size="sm">
                              {result.type}
                            </Badge>
                          )}
                          {result.index_name && <Heading variant={'section'}>{result.site_name}</Heading>}
                        </HStack>
                        <Heading as="h3" size="md">
                          {result.name}
                        </Heading>

                        <HStack spacing={6} py={2}>
                          {result.type == 'Video' && (
                            <>
                              {result.image_url && <Image width={200} src={result.image_url} alt={result.index_name} shadow={'md'} />}
                              {!result.image_url && <Image width={200} src="/images/social/social-card-default.jpeg" alt={result.index_name} shadow={'md'} />}
                            </>
                          )}

                          {result.type == 'Repository' && (
                            <>
                              {result.image_url && <Image width={200} src={result.url.replace('https://github.com', 'https://opengraph.githubassets.com/1')} alt={result.index_name} shadow={'md'} />}
                              {!result.image_url && <Image width={200} src={result.url.replace('https://github.com', 'https://opengraph.githubassets.com/1')} alt={result.index_name} shadow={'md'} />}
                            </>
                          )}

                          {result?.highlight?.description && <Text size="sm" noOfLines={3} dangerouslySetInnerHTML={{ __html: result.highlight.description }} my={0} />}
                          {!result.highlight && result.description && (
                            <Text size="sm" noOfLines={3} py={0}>
                              {result.description}
                            </Text>
                          )}
                        </HStack>
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

const SearchResultsWidget = widget(SearchResults, WidgetDataType.SEARCH_RESULTS, 'content');
export default SearchResultsWidget;
