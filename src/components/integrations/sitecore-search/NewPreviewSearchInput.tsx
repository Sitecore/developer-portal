import { cn } from '@/src/lib/util';
import type { PreviewSearchInitialState } from '@sitecore-search/react';
import { trackEntityPageViewEvent, usePreviewSearch, widget, WidgetDataType } from '@sitecore-search/react';
import { Badge } from '@src/components/ui/badge';
import { Button } from '@src/components/ui/button';
import { Input } from '@src/components/ui/input';
import { ProductLogo } from '@src/components/ui/logos';
import { Product } from '@src/lib/assets';
import { ArrowRight, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../ui/dialog';
import { SearchSuggestions } from './SearchSuggestions';

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
  defaultItemsPerPage?: number;
}

const PreviewSearchComponent = ({ defaultItemsPerPage = 6 }: PreviewSearchProps) => {
  const router = useRouter();
  const indexSources = process.env.NEXT_PUBLIC_SEARCH_SOURCES?.split(',') || [];
  const { q } = router.query;
  const {
    state: { keyphrase = q || '' },
    actions: { onItemClick, onKeyphraseChange, onSuggestionClick },
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const keyphraseHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onKeyphraseChange({
        keyphrase: event.target.value,
      });
    },
    [onKeyphraseChange]
  );

  const onGotoFullSearch = useCallback(
    (text: string) => {
      router.push(`/search?q=${encodeURIComponent(text)}`).then(() => router.reload());
    },
    [router]
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector<HTMLInputElement>("input[name='query']");
    if (input?.value) {
      onGotoFullSearch(input.value.trim());
    }
  };

  const handleClearSearch = () => {
    onKeyphraseChange({ keyphrase: '' });
    inputRef.current?.focus();
  };

  // Focus input when dialog opens
  useEffect(() => {
    if (isDialogOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isDialogOpen]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-muted/50 transition-colors" onClick={() => setIsDialogOpen(true)}>
          <Search className="h-5 w-5" />
          <span className="sr-only">Open search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-full md:max-w-fit overflow-y-auto max-h-[80vh] p-0">
        <DialogTitle>
          <span className="sr-only">Search the documentation</span>
        </DialogTitle>
        <div className="px-6 pb-6">
          <div className="flex items-center justify-start mb-4">
            <ProductLogo product={Product.Search} width={67} height={18} />
          </div>

          <form onSubmit={handleSubmit} className="relative mb-6">
            <div className="relative">
              <label className="sr-only">Search:</label>
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 pointer-events-none select-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                ref={inputRef}
                onChange={keyphraseHandler}
                placeholder="search for..."
                className={cn('w-full h-12 pl-10 pr-10 bg-background border border-input rounded-md text-sm transition-colors', 'focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent', 'placeholder:text-muted-foreground text-lg')}
                name="query"
                value={keyphrase}
                onFocus={() => setIsDialogOpen(true)}
                autoComplete="off"
              />
            </div>
            {keyphrase.length > 0 && (
              <Button type="button" variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted" onClick={handleClearSearch}>
                <X className="h-4 w-4" />
              </Button>
            )}

            {/* Powered by section inside the input */}
            {keyphrase.length === 0 && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none select-none flex items-center">
                <span className="mr-1 text-xs text-muted-foreground">Powered by</span>
                <ProductLogo product={Product.Search} width={67} height={18} />
              </div>
            )}
          </form>

          {/* Search Results and Suggestions Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Search Results */}
            <div className="lg:col-span-3 space-y-2">
              <ul className="list-none">
                {!isLoading &&
                  !isFetching &&
                  articles.map((article, index) => (
                    <li key={`${article.id}-${article.source_id}`} className="w-full">
                      <article className="p-2 rounded-md hover:bg-muted">
                        <Link
                          href={article.url}
                          onClick={(e) => {
                            e.preventDefault();
                            onItemClick({
                              id: article.id || '',
                              index,
                            });

                            if (article.index_name !== 'sitecore-devportal-v2') {
                              trackEntityPageViewEvent('content', {
                                items: [{ id: article.id }],
                              });
                              window.open(article.url, '_blank');
                            } else {
                              window.open(`${article.url}?fromSearch=true`, '_blank');
                            }
                          }}
                          className="block"
                        >
                          <h4 className="text-sm font-heading line-clamp-1">{article.name}</h4>
                          <p className="text-sm line-clamp-1">{article.description}</p>
                          <div className="flex gap-2 items-center mb-2 w-full">
                            {article.type && (
                              <Badge variant="default" className="text-xs">
                                {article.type}
                              </Badge>
                            )}
                            {article.index_name && (
                              <Badge variant="default" className="text-xs">
                                {article.site_name}
                              </Badge>
                            )}
                          </div>
                        </Link>
                      </article>
                    </li>
                  ))}
              </ul>

              {/* No Results Message */}
              {!isFetching && articles.length === 0 && keyphrase.toString().trim().length > 0 && (
                <div className="flex justify-center items-center py-8">
                  <span className="text-sm text-center text-muted-foreground">
                    <span className="font-medium">{keyphrase}</span> returned <span className="font-medium">{articles.length}</span> results
                  </span>
                </div>
              )}

              {/* View All Results Button */}
              {articles.length > 0 && (
                <div className="flex justify-center pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      onGotoFullSearch(keyphrase.toString().trim());
                      setIsDialogOpen(false);
                    }}
                  >
                    View all results <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              )}
            </div>

            {/* Suggestions Sidebar */}
            {articleSuggestions.length > 0 && (
              <div className="lg:col-span-1">
                <div className="mb-2">
                  <span className="font-medium text-muted-foreground">Suggestions</span>
                </div>
                <div className="space-y-1">
                  <SearchSuggestions
                    groupTitle="Suggested Terms"
                    groupId="keyphrase"
                    articles={articleSuggestions}
                    onItemClick={(text) =>
                      onSuggestionClick({
                        name: 'article_name_context_aware',
                        title: 'Suggestions',
                        value: text,
                        displayName: text,
                      })
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const PreviewSearchInput = widget(PreviewSearchComponent, WidgetDataType.PREVIEW_SEARCH, 'content');
