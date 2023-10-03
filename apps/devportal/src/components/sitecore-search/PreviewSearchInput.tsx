import { ActionPropPayload, ItemIndexActionPayload, PreviewSearchInitialState, PreviewSearchSuggestionQuery, SearchResponseSuggestion, WidgetAction, WidgetDataType, trackEntityPageViewEvent, usePreviewSearch, widget } from '@sitecore-search/react';
import { NavMenu, Presence } from '@sitecore-search/ui';
import type { PreviewSearchActionProps } from '@sitecore-search/widgets';
// import Image from 'next/image';
import { getColorScheme } from '@/src/lib/search';
import { Badge, Box, Button, Card, CardBody, CardHeader, Flex, FormControl, Grid, HStack, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, Link, Tag, Text, VisuallyHidden } from '@chakra-ui/react';
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
    <Box width={[4 / 5]} position={'absolute'} right={0} top={0} overflow={'hidden'} display={'inline-block'}>
      <Presence present={loading}>
        <Loading />
      </Presence>
      <NavMenu.List>
        <Grid templateColumns="repeat(3, 1fr)" position="relative" gap={4}>
          {/* {loading && <Loading />} */}

          {!loading &&
            articles.map((article, index) => (
              <Link
                key={`${article.id}@${article.source_id}`}
                href={article.url}
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick({ id: article.id || '', index: index });
                  if (article.index_name != 'sitecore-devportal-v2') trackEntityPageViewEvent('content', { items: [{ id: article.id }] });
                  window.open(article.url, '_blank');
                }}
              >
                <Card variant={'none'} size={'sm'}>
                  <CardHeader pb={0}>
                    <Heading as={'h4'} size={'sm'} noOfLines={2}>
                      {article.name}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <HStack mb={2}>
                      {article.type && <Tag colorScheme={getColorScheme(article.type)}>{article.type}</Tag>}
                      {article.index_name && <Badge>{article.site_name}</Badge>}
                    </HStack>
                    {article.type == 'Video' && (
                      <div className="col-span-1">
                        {article.image_url && <Image width={160} height={90} src={article.image_url} alt={article.index_name} className="object-scale-down" />}
                        {!article.image_url && <Image width={160} height={90} src="/images/social/social-card-default.jpeg" alt={article.index_name} className="object-scale-down" />}
                      </div>
                    )}
                    {article.type != 'Video' && article?.highlight?.description && <Text noOfLines={4} dangerouslySetInnerHTML={{ __html: article.highlight.description }} />}
                    {article.type != 'Video' && !article.highlight && article.description && <Text noOfLines={4}>{article.description}</Text>}
                  </CardBody>
                </Card>
              </Link>
            ))}
        </Grid>
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
    <Box width={[1 / 5]} p={2} background={'primary.100'} minH={'400'}>
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
            <Button variant={'ghost'} colorScheme="neutral" borderRadius={'md'} title={text} textAlign={'left'}>
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
              <Input as={NavMenu.InputTrigger} name="query" role="search" onChange={keyphraseHandler} placeholder="What are you looking for?" onFocus={() => setActiveItem('defaultArticlesResults')} autoComplete="off" value={keyphrase} />
              <InputRightElement width={{ base: '100px', md: '200px' }} opacity={'0.5'}>
                <Text as={'span'} display={{ base: 'none', md: 'flex ' }}>
                  Powered by
                </Text>
                <ProductLogo product={Product.Search} width={89} height={24} />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Flex as={NavMenu.Content} position={'relative'} left={0} display={{ base: 'none', md: 'inline-block' }} width={'100%'} justifyContent={'center'} direction={'row'} background={'chakra-body-bg'}>
            <Presence present={loading}>
              <Loading />
            </Presence>
            {!loading && (
              <Box shadow={'base'}>
                <NavMenu.SubContent orientation="vertical" value={activeItem} ref={widgetRef}>
                  <NavMenu.List style={{ listStyle: 'none' }}>
                    {articleSuggestions.length > 0 && (
                      <Group groupTitle="Suggested Terms" groupId="keyphrase" articles={articleSuggestions} onItemClick={onItemClick} onGroupTitleClick={onGroupTitleClick} activeItem={activeItem} onActiveItem={setActiveItem} />
                    )}

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
