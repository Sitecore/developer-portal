/* eslint-disable no-unused-vars */
import { getColorScheme } from '@/src/lib/search';
import {
  AbsoluteCenter,
  Badge,
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  CircularProgress,
  Flex,
  FormControl,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  LinkBox,
  List,
  ListItem,
  Tag,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { ProductLogo } from '@scdp/ui/components';
import { Product } from '@scdp/ui/lib';
import type { PreviewSearchInitialState } from '@sitecore-search/react';
import { WidgetDataType, trackEntityPageViewEvent, usePreviewSearch, widget } from '@sitecore-search/react';
import { Presence, PreviewSearch } from '@sitecore-search/ui';
import { useRouter } from 'next/router';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

type ArticleModel = {
  id: string;
  name: string;
  image_url: string;
  url: string;
  source_id: string;
  type: string;
  index_name: string;
  description: string;
  site_name: string;
  highlight: {
    description: string;
  };
};

type InitialState = PreviewSearchInitialState<'itemsPerPage' | 'suggestionsList'>;
interface PreviewSearchProps extends BoxProps {
  defaultItemsPerPage: number | 6;

  /**
   * An optional custom redirection handler that will be called when the user clicks on an article.
   * You can use your own redirection logic here, or any other side effect.
   * Examples
   * * (article: Article) => history.push(`/search?q=${article.id}`);
   * * (article: Article) => window.location.href = `/search?q=${article.id}`;
   * * (article: Article) => setRoute(`/custom/search/endpoint?q=${article.id}`);
   * @param article The article that was clicked.
   */
  itemRedirectionHandler?: (article: ArticleModel) => void;

  /**
   * An optional custom submit handler that will be called when the user submits the form by pressing the enter key.
   * You can use your own submit logic here, or any other side effect.
   * Most common use case is to redirect the user to a custom search page with the query string.
   * Examples
   * * (query: string) => history.push(`/search?q=${query}`);
   * * (query: string) => window.location.href = `/search?q=${query}`;
   * * (query: string) => setRoute(`/custom/search/endpoint?q=${query}`);
   * @param query The query string that was submitted.
   */
  submitRedirectionHandler?: (query: string) => void;
}
export const PreviewSearchComponent = ({ defaultItemsPerPage = 6, ...rest }: PreviewSearchProps) => {
  const router = useRouter();
  const indexSources = process.env.NEXT_PUBLIC_SEARCH_SOURCES?.split(',') || [];
  const { q } = router.query;
  const {
    widgetRef,
    state: { keyphrase = q || '' },
    actions: { onItemClick, onKeyphraseChange, onSuggestionClick },
    queryResult,
    queryResult: { isFetching, isLoading, data: { suggestion: { name_suggester: articleSuggestions = [] } = {} } = {} },
  } = usePreviewSearch<ArticleModel, InitialState>({
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
      suggestionsList: [
        {
          suggestion: 'name_suggester',
          max: 10,
        },
      ],
      itemsPerPage: defaultItemsPerPage,
    },
  });
  const loading = isLoading || isFetching;
  const keyphraseHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const target = event.target;
      onKeyphraseChange({
        keyphrase: target.value,
      });
    },
    [onKeyphraseChange]
  );

  return (
    <Box display={'flex'} width={rest.width} onFocus={rest.onFocus} onBlur={rest.onBlur} transition={rest.transition}>
      <PreviewSearch.Root data-control="PreviewSearch.Root">
        <FormControl
          onSubmit={(e: SyntheticEvent): void => {
            e.preventDefault();
            // @ts-expect-error
            const target = e.target.query as HTMLInputElement;
            router.push('/search?q=' + encodeURIComponent(target.value)).then(() => router.reload());
          }}
          as="form"
          role="searchbox"
        >
          <InputGroup rounded={'none'}>
            <InputLeftElement>
              <FaSearch />
            </InputLeftElement>
            <Input as={PreviewSearch.Input} name="query" role="search" onChange={keyphraseHandler} autoComplete="off" value={keyphrase} />
            <InputRightElement width={{ base: '100px', md: '150px' }} opacity={''}>
              <Text as={'span'} display={{ base: 'none', md: 'flex ' }} variant="tiny">
                Powered by
              </Text>
              <ProductLogo product={Product.Search} width={67} height={18} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <PreviewSearch.Content ref={widgetRef} data-control="PreviewSearch.Content">
          <Flex dir="row" background={'chakra-body-bg'} width={{ base: '4xl', '2xl': '2xl' }} border={'md'} shadow={'md'}>
            <Presence present={!loading}>
              <>
                {articleSuggestions.length > 0 && (
                  <PreviewSearch.Suggestions>
                    <Box background={'primary-bg'} h="100%">
                      <PreviewSearch.SuggestionsGroup id="article_name_context_aware">
                        <Heading variant="section" px={4} py={2}>
                          Suggested terms
                        </Heading>
                        <ButtonGroup variant="navigation" orientation="vertical" spacing="1">
                          {articleSuggestions.map(({ text }) => (
                            <PreviewSearch.SuggestionTrigger id={text} key={text}>
                              <Tooltip label={text} aria-label={text}>
                                <Button
                                  variant={'ghost'}
                                  colorScheme="neutral"
                                  borderRadius={'md'}
                                  textAlign={'left'}
                                  mb={1}
                                  onClick={() => {
                                    onSuggestionClick({
                                      name: 'article_name_context_aware',
                                      title: 'Suggestions',
                                      value: text,
                                      displayName: text,
                                    });
                                  }}
                                >
                                  <Text isTruncated width={200}>
                                    {text}
                                  </Text>
                                </Button>
                              </Tooltip>
                            </PreviewSearch.SuggestionTrigger>
                          ))}
                        </ButtonGroup>
                      </PreviewSearch.SuggestionsGroup>
                    </Box>
                  </PreviewSearch.Suggestions>
                )}
                <PreviewSearch.Results defaultQueryResult={queryResult}>
                  {({ isFetching: loading, data: { content: articles = [] } = {} }) => (
                    <PreviewSearch.Items data-loading={loading} data-control="PreviewSearch.Items" asChild>
                      <Box p={2} w="full">
                        <Presence present={loading}>
                          <AbsoluteCenter>
                            <CircularProgress isIndeterminate capIsRound color="primary" trackColor="neutral-color.200" />
                          </AbsoluteCenter>
                        </Presence>

                        {!loading && (
                          <List>
                            {articles.map((article, index) => (
                              <PreviewSearch.Item key={article.id} asChild data-control="PreviewSearch.Item">
                                <ListItem key={index} w={'full'}>
                                  <LinkBox as="article" p={2} rounded="md">
                                    <Link
                                      key={`${article.id}@${article.source_id}`}
                                      href={article.url}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        onItemClick({ id: article.id || '', index: index });
                                        if (article.index_name != 'sitecore-devportal-v2') {
                                          trackEntityPageViewEvent('content', { items: [{ id: article.id }] });
                                          window.open(article.url, '_blank');
                                        } else {
                                          window.open(article.url + '?fromSearch=true', '_blank');
                                        }
                                        window.open(article.url, '_blank');
                                      }}
                                    >
                                      <Heading as={'h4'} size={'sm'} noOfLines={1}>
                                        {article.name}
                                      </Heading>
                                      <Text noOfLines={1}>{article.description}</Text>
                                      <HStack mb={2} width={'full'}>
                                        {article.type && (
                                          <Tag colorScheme={getColorScheme(article.type)} size="sm">
                                            {article.type}
                                          </Tag>
                                        )}
                                        {article.index_name && <Badge>{article.site_name}</Badge>}
                                      </HStack>
                                    </Link>
                                  </LinkBox>
                                </ListItem>
                              </PreviewSearch.Item>
                            ))}
                          </List>
                        )}
                      </Box>
                    </PreviewSearch.Items>
                  )}
                </PreviewSearch.Results>
              </>
            </Presence>
          </Flex>
        </PreviewSearch.Content>
      </PreviewSearch.Root>
    </Box>
  );
};
const PreviewSearchInputWidget = widget(PreviewSearchComponent, WidgetDataType.PREVIEW_SEARCH, 'content');
export default PreviewSearchInputWidget;
