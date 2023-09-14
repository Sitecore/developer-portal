import { Badge, Button, ButtonGroup, Card, CardBody, CardHeader, Flex, Grid, HStack, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, Link, Tag, Text, Wrap } from '@chakra-ui/react';
import { ActionPropPayload, ItemIndexActionPayload, PreviewSearchInitialState, PreviewSearchSuggestionQuery, SearchResponseSuggestion, WidgetAction, WidgetDataType, trackEntityPageViewEvent, usePreviewSearch, widget } from '@sitecore-search/react';
import type { PreviewSearchActionProps } from '@sitecore-search/widgets';
import { useRouter } from 'next/router';
import React, { SyntheticEvent, useCallback, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Loading } from '../common/Loading';

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

const Articles = ({ loading = false, articles, onItemClick, suggestionsReturned }: { loading?: boolean; articles: Array<ArticleModel>; onItemClick: PreviewSearchActionProps['onItemClick']; suggestionsReturned?: boolean }) => (
  <Grid templateColumns="repeat(3, 1fr)" position="relative">
    {loading && <Loading />}

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
          <Card variant={'flat'} size={'sm'}>
            <CardHeader>
              <Heading as={'h4'} size={'sm'}>
                {article.name}
              </Heading>
            </CardHeader>
            <CardBody>
              <HStack>
                {article.type && <Tag colorScheme="purple">{article.type}</Tag>}
                {article.index_name && <Badge>{article.site_name}</Badge>}
              </HStack>
              {article.type == 'Video' && (
                <div className="col-span-1">
                  {article.image_url && <Image width={256} height={144} src={article.image_url} alt={article.index_name} className="object-scale-down" />}
                  {!article.image_url && <Image width={256} height={144} src="/images/social/social-card-default.jpeg" alt={article.index_name} className="object-scale-down" />}
                </div>
              )}
              {article.type != 'Video' && article?.highlight?.description && <p className="text-xs line-clamp-5" dangerouslySetInnerHTML={{ __html: article.highlight.description }} />}
              {article.type != 'Video' && !article.highlight && article.description && <p className="text-xs line-clamp-5">{article.description}</p>}
            </CardBody>
          </Card>
        </Link>
      ))}
  </Grid>
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
    <>
      <Wrap>
        <Heading variant={'section'}>{groupTitle}</Heading>

        <ButtonGroup variant="navigation" orientation="vertical" spacing="1" m="-2">
          {articles.map(({ text }) => (
            <>
              <Button
                onMouseOver={(e) => {
                  const target = e.target as HTMLLinkElement;
                  target.focus();
                }}
                maxWidth={'240'}
                onFocus={() => onActiveItem(getGroupId(groupId, text))}
                onClick={() => onGroupTitleClick(text)}
              >
                <Text isTruncated>{text}</Text>
              </Button>

              <PreviewSearchSuggestionQuery<ArticleModel> active={activeItem === getGroupId(groupId, text)} value={text} filterAttribute={filterAttribute}>
                {({ queryResult: { isFetching, data: { content: articles = [] } = {} } }) => <Articles loading={isFetching} articles={articles} onItemClick={onItemClick} suggestionsReturned={true} />}
              </PreviewSearchSuggestionQuery>
            </>
          ))}
        </ButtonGroup>
      </Wrap>
    </>
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
  const ref = React.useRef();
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
    <>
      <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }} padding={3} paddingX={'2rem'} position={'static'} background={'chakra-body-bg'} shadow={'md'}>
        <Flex display={{ base: 'flex', md: 'flex' }} justify={'flex-center'} boxSize={'100%'} maxWidth="6xl">
          <InputGroup size="md" width={'full'} rounded={'none'} onSubmit={handleSubmit}>
            <InputLeftElement>
              <FaSearch />
            </InputLeftElement>
            <Input name="query" onChange={keyphraseHandler} placeholder="What are you looking for?" onFocus={() => setActiveItem('defaultArticlesResults')} autoComplete="off" value={keyphrase} />
            <InputRightElement width={'200px'}>
              <Text display={{ base: 'none', sm: 'flex ' }}>Powered by</Text>
              <Image src="https://developers.sitecore.com/_next/image?url=https%3A%2F%2Fsitecorecontenthub.stylelabs.cloud%2Fapi%2Fpublic%2Fcontent%2F43e414bbc80143e2b21acd0808456e26&w=96&q=75" opacity={0.5} alt="Sitecore Search logo" />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
      {loading && <Loading />}
      {!loading && (
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }} position={'static'} id="testmva">
          <Flex display={{ base: 'flex', md: 'flex' }} justify={'flex-center'} boxSize={'100%'} padding={3} width="full" background={'chakra-body-bg'} shadow={'sm'} maxWidth={'6xl'}>
            {articleSuggestions.length > 0 && (
              // <Group groupTitle="Suggested Terms" groupId="keyphrase" articles={articleSuggestions} onItemClick={onItemClick} onGroupTitleClick={onGroupTitleClick} activeItem={activeItem} onActiveItem={setActiveItem} />

              <Wrap>
                <Heading variant={'section'}>Suggested Terms</Heading>

                <ButtonGroup variant="navigation" orientation="vertical" spacing="1" m="-2">
                  {articleSuggestions.map(({ text }) => (
                    <>
                      <Button
                        onMouseOver={(e) => {
                          const target = e.target as HTMLLinkElement;
                          target.focus();
                        }}
                        maxWidth={'240'}
                        onFocus={() => setActiveItem(getGroupId(keyphrase.toString(), text))}
                        onClick={() => onGroupTitleClick(text)}
                      >
                        <Text isTruncated>{text}</Text>
                      </Button>

                      <PreviewSearchSuggestionQuery<ArticleModel> active={activeItem === getGroupId(keyphrase.toString(), text)} value={text}>
                        {({ queryResult: { isFetching, data: { content: articles = [] } = {} } }) => <Articles loading={isFetching} articles={articles} onItemClick={onItemClick} suggestionsReturned={true} />}
                      </PreviewSearchSuggestionQuery>
                    </>
                  ))}
                </ButtonGroup>
              </Wrap>
            )}

            <Articles articles={articles} onItemClick={onItemClick} suggestionsReturned={articleSuggestions.length > 0} />
          </Flex>
        </Flex>
      )}
      {/* <NavMenu.Content className="relative left-0 justify-center inline-block w-full pt-0 border-b border-r shadow-md bg-theme-bg text-theme-text border-theme-border">
            <Presence present={loading}>
              <Loading />
            </Presence>
            {!loading && (
              <NavMenu.SubContent orientation="vertical" value={activeItem} className="box-border block w-full" ref={widgetRef}>
                <NavMenu.List className="">
                  {articleSuggestions.length > 0 && (
                    <Group groupTitle="Suggested Terms" groupId="keyphrase" articles={articleSuggestions} onItemClick={onItemClick} onGroupTitleClick={onGroupTitleClick} activeItem={activeItem} onActiveItem={setActiveItem} />
                  )}
                  <NavMenu.Item value="defaultArticlesResults" key="defaultArticlesResults" className="b-0 bg-none">
                    <NavMenu.Trigger aria-hidden className="hidden" />
                  </NavMenu.Item>
                </NavMenu.List>
              </NavMenu.SubContent>
            )}
          </NavMenu.Content> */}
    </>
  );
};

const PreviewSearchInputWidget = widget(PreviewSearchInput, WidgetDataType.PREVIEW_SEARCH, 'content');
export default PreviewSearchInputWidget;
