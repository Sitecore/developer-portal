import { Product } from '@/src/lib/assets';
import { Badge } from '@components/ui/badge';
import { Button } from '@components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/ui/tooltip';
import { cn } from '@lib/utils';
import type { PreviewSearchInitialState } from '@sitecore-search/react';
import { trackEntityPageViewEvent, usePreviewSearch, widget, WidgetDataType } from '@sitecore-search/react';
import { Presence, PreviewSearch } from '@sitecore-search/ui';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useCallback } from 'react';
import { ProductLogo } from '../../ui/logos';

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
interface PreviewSearchProps {
  defaultItemsPerPage: number | 6;
  className?: string;
  width?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  transition?: string;

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

const PreviewSearchComponent = ({ defaultItemsPerPage = 6, ...rest }: PreviewSearchProps) => {
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
    <div className={cn('flex', rest.className)} style={{ width: rest.width, transition: rest.transition }} onFocus={rest.onFocus} onBlur={rest.onBlur}>
      <PreviewSearch.Root data-control="PreviewSearch.Root">
        <form
          onSubmit={(e: SyntheticEvent): void => {
            e.preventDefault();

            // @ts-expect-error
            const target = e.target.query as HTMLInputElement;

            router.push('/search?q=' + encodeURIComponent(target.value)).then(() => router.reload());
          }}
          role="searchbox"
          className="w-full"
        >
          <div className="relative rounded-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <div className="pl-10 pr-[150px]">
              <PreviewSearch.Input 
                name="query" 
                onChange={keyphraseHandler} 
                autoComplete="off" 
                value={keyphrase}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-none" 
                title="Search across different Sitecore domains" 
                placeholder="search for ..." 
                role="searchbox" 
              />
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 w-[150px]">
              <span className="hidden md:flex text-xs text-muted-foreground">
                Powered by
              </span>
              <ProductLogo product={Product.Search} width={67} height={18} />
            </div>
          </div>
        </form>
        <PreviewSearch.Content ref={widgetRef} data-control="PreviewSearch.Content">
          <div className="flex flex-row bg-background w-full max-w-4xl 2xl:max-w-2xl border rounded-md shadow-md">
            <Presence present={!loading}>
              <>
                {articleSuggestions.length > 0 && (
                  <PreviewSearch.Suggestions>
                    <div className="bg-primary h-full">
                      <PreviewSearch.SuggestionsGroup id="article_name_context_aware">
                        <p className="text-sm uppercase tracking-wide text-muted-foreground px-4 py-2">
                          Suggested terms
                        </p>
                        <div className="flex flex-col gap-1">
                          {articleSuggestions.map(({ text }) => (
                            <PreviewSearch.SuggestionTrigger id={text} key={text}>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      className="rounded-md text-left mb-1 justify-start"
                                      onClick={() => {
                                        onSuggestionClick({
                                          name: 'article_name_context_aware',
                                          title: 'Suggestions',
                                          value: text,
                                          displayName: text,
                                        });
                                      }}
                                    >
                                      <span className="truncate w-[200px]">
                                        {text}
                                      </span>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{text}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </PreviewSearch.SuggestionTrigger>
                          ))}
                        </div>
                      </PreviewSearch.SuggestionsGroup>
                    </div>
                  </PreviewSearch.Suggestions>
                )}
                <PreviewSearch.Results defaultQueryResult={queryResult}>
                  {({ isFetching: loading, data: { content: articles = [] } = {} }) => (
                    <PreviewSearch.Items data-loading={loading} data-control="PreviewSearch.Items" asChild>
                      <div className="p-2 w-full">
                        <Presence present={loading}>
                          <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                          </div>
                        </Presence>

                        {!loading && (
                          <ul className="list-none">
                            {articles.map((article, index) => (
                              <PreviewSearch.Item key={article.id} asChild data-control="PreviewSearch.Item">
                                <li key={index} className="w-full">
                                  <article className="p-2 rounded-md hover:bg-muted">
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
                                      }}
                                      className="block"
                                    >
                                      <h4 className="text-sm font-heading line-clamp-1">
                                        {article.name}
                                      </h4>
                                      <p className="line-clamp-1 text-sm">{article.description}</p>
                                      <div className="flex items-center gap-2 mb-2 w-full">
                                        {article.type && (
                                          <Badge variant="default" className="text-xs">
                                            {article.type}
                                          </Badge>
                                        )}
                                        {article.index_name && <Badge variant="default" className="text-xs">{article.site_name}</Badge>}
                                      </div>
                                    </Link>
                                  </article>
                                </li>
                              </PreviewSearch.Item>
                            ))}
                          </ul>
                        )}
                      </div>
                    </PreviewSearch.Items>
                  )}
                </PreviewSearch.Results>
              </>
            </Presence>
          </div>
        </PreviewSearch.Content>
      </PreviewSearch.Root>
    </div>
  );
};

export const PreviewSearchInput = widget(PreviewSearchComponent, WidgetDataType.PREVIEW_SEARCH, 'content');
