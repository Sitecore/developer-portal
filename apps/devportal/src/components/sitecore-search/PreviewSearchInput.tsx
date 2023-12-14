import { ActionPropPayload, ItemIndexActionPayload, PreviewSearchInitialState, PreviewSearchSuggestionQuery, SearchResponseSuggestion, WidgetAction, WidgetDataType, trackEntityPageViewEvent, usePreviewSearch, widget } from '@sitecore-search/react';
import { NavMenu, Presence } from '@sitecore-search/ui';
import type { PreviewSearchActionProps } from '@sitecore-search/widgets';
// import Image from 'next/image';
import { IsSearchEnabled, getColorScheme } from '@/src/lib/search';
import { Badge, Box, Button, Flex, FormControl, HStack, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, List, ListItem, Tag, Text, VisuallyHidden } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { SyntheticEvent, useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Loading } from 'ui/components/common/Loading';
import ProductLogo from 'ui/components/common/ProductLogo';
import { Product } from 'ui/lib/assets';

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

const Articles = ({ loading = false, articles, onItemClick }: { loading?: boolean; articles: Array<ArticleModel>; onItemClick: PreviewSearchActionProps['onItemClick']; suggestionsReturned?: boolean }) => (
  <NavMenu.Content asChild>
    <Box width={[4 / 6]} position={'absolute'} right={0} top={0} overflow={'hidden'} display={'inline-block'} p={4}>
      <Presence present={loading}>
        <Loading />
      </Presence>
      <NavMenu.List>
        {/* {loading && <Loading />} */}
        <List spacing="4">
          {!loading &&
            articles.map((article, index) => (
              <ListItem key={index}>
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
                  <Heading as={'h4'} size={'sm'} noOfLines={2}>
                    {article.name}
                  </Heading>
                  {/* <Text noOfLines={1}>{article.highlight?.description || article.description}</Text> */}
                  <HStack mb={2} width={'full'}>
                    {article.type && (
                      <Tag colorScheme={getColorScheme(article.type)} size="sm">
                        {article.type}
                      </Tag>
                    )}
                    {article.index_name && <Badge>{article.site_name}</Badge>}
                  </HStack>
                </Link>
              </ListItem>
            ))}
        </List>
      </NavMenu.List>
    </Box>
  </NavMenu.Content>
);

interface SearchItemClickedAction extends WidgetAction {
  payload: ItemIndexActionPayload;
  type: string;
}

const Group = ({
  groupTitle,
  groupId,
  filterAttribute,
  articles,
  activeItem,
  onActiveItem,
  onItemClick,
  onGroupTitleClick,
}: {
  groupTitle: string;
  groupId: string;
  filterAttribute?: string;
  articles: Array<SearchResponseSuggestion>;
  activeItem: string;
  onActiveItem: (arg: string) => void;
  onItemClick: (payload: ActionPropPayload<SearchItemClickedAction>) => void;
  onGroupTitleClick: (arg: string) => void;
}) => {
  return (
    <Box width={[2 / 6]} p={2} background={'primary-bg'}>
      <Heading variant="section" px={4}>
        {groupTitle}
      </Heading>
      {articles.map(({ text }) => (
        <NavMenu.Item value={getGroupId(groupId, text)} key={text} style={{ listStyle: 'none' }}>
          <NavMenu.Trigger
            asChild
            onMouseOver={(e) => {
              const target = e.target as HTMLLinkElement;
              target.focus();
            }}
            onFocus={() => onActiveItem(getGroupId(groupId, text))}
            onClick={() => onGroupTitleClick(text)}
          >
            <Button variant={'ghost'} colorScheme="neutral" borderRadius={'md'} title={text} textAlign={'left'} mb={2}>
              <Text isTruncated width={180}>
                {text}
              </Text>
            </Button>
          </NavMenu.Trigger>

          <PreviewSearchSuggestionQuery<ArticleModel> active={activeItem === getGroupId(groupId, text)} value={text} filterAttribute={filterAttribute}>
            {({ queryResult: { isFetching, data: { content: articles = [] } = {} } }) => <Articles loading={isFetching} articles={articles} onItemClick={onItemClick} suggestionsReturned={true} />}
          </PreviewSearchSuggestionQuery>
        </NavMenu.Item>
      ))}
    </Box>
  );
};

const getGroupId = (name: string, value: string) => `${name}@${value}`;

type InitialState = PreviewSearchInitialState<'itemsPerPage' | 'suggestionsList'>;

const PreviewSearchInput = ({ defaultItemsPerPage = 6 }) => {
  if (!IsSearchEnabled()) {
    return;
  }
  const router = useRouter();
  const indexSources = process.env.NEXT_PUBLIC_SEARCH_SOURCES?.split(',') || [];
  const { q } = router.query;
  const {
    widgetRef,
    state: { keyphrase = q || '' },
    actions: { onItemClick, onKeyphraseChange },
    queryResult: { isFetching, isLoading, data: { content: articles = [], suggestion: { name_suggester: articleSuggestions = [] } = {} } = {} },
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
  const [activeItem, setActiveItem] = useState('defaultArticlesResults');
  const [value, setValue] = useState('');
  const onValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const keyphraseHandler = useCallback(
    (event: { target: HTMLInputElement }) => {
      const target = event.target as HTMLInputElement;
      if (keyphrase !== target.value) {
        onKeyphraseChange({ keyphrase: target.value });
      }
    },
    [onKeyphraseChange, keyphrase]
  );

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const target = e.target.query as HTMLInputElement;
    setValue('');
    router.push('/search?q=' + encodeURIComponent(target.value)).then(() => router.reload());
  };

  function onGroupTitleClick(arg: string): void {
    setValue('');
    router.push('/search?q=' + encodeURIComponent(arg)).then(() => router.reload());
  }

  return (
    <NavMenu.Root onValueChange={onValueChange} value={value} id="NavMenuRoot" style={{ width: '100%' }}>
      <NavMenu.List style={{ listStyle: 'none' }}>
        <NavMenu.Item>
          <FormControl onSubmit={handleSubmit} as="form" role="searchbox">
            <InputGroup width={'full'} rounded={'none'}>
              <InputLeftElement>
                <FaSearch />
              </InputLeftElement>
              <Input as={NavMenu.InputTrigger} name="query" role="search" onChange={keyphraseHandler} onFocus={() => setActiveItem('defaultArticlesResults')} autoComplete="off" value={keyphrase} />
              <InputRightElement width={{ base: '100px', md: '150px' }} opacity={''}>
                <Text as={'span'} display={{ base: 'none', md: 'flex ' }} variant="tiny">
                  Powered by
                </Text>

                <ProductLogo product={Product.Search} width={67} height={18} />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Flex as={NavMenu.Content} position={'absolute'} top={10} display={{ base: 'none', md: 'block' }} width={'100%'} justifyContent={'left'} direction={'row'} background={'chakra-body-bg'}>
            <Presence present={loading}>
              <Loading />
            </Presence>
            {!loading && (
              <Box shadow={'base'} height={'100%'}>
                <NavMenu.SubContent orientation="vertical" value={activeItem} ref={widgetRef}>
                  <NavMenu.List style={{ listStyle: 'none' }}>
                    {/* Suggested terms */}

                    {articleSuggestions.length > 0 && (
                      <Group groupTitle="Suggested Terms" groupId="keyphrase" articles={articleSuggestions} onItemClick={onItemClick} onGroupTitleClick={onGroupTitleClick} activeItem={activeItem} onActiveItem={setActiveItem} />
                    )}

                    {/* Results */}
                    <Box as={NavMenu.Item} value="defaultArticlesResults" key="defaultArticlesResults" className="b-0 bg-none">
                      <VisuallyHidden>
                        <NavMenu.Trigger aria-hidden />
                      </VisuallyHidden>
                      <Articles articles={articles} onItemClick={onItemClick} suggestionsReturned={articleSuggestions.length > 0} />
                    </Box>
                  </NavMenu.List>
                </NavMenu.SubContent>
              </Box>
            )}
          </Flex>
        </NavMenu.Item>
      </NavMenu.List>
    </NavMenu.Root>
  );
};

const PreviewSearchInputWidget = widget(PreviewSearchInput, WidgetDataType.PREVIEW_SEARCH, 'content');
export default PreviewSearchInputWidget;
