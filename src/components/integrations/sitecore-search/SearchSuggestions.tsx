import { cn } from '@src/components/lib/utils';
import { Button } from '@src/components/ui/button';

interface SuggestionArticle {
  text?: string;
  value?: string;
  displayName?: string;
}

interface SearchSuggestionsProps {
  groupTitle: string;
  groupId: string;
  articles: Array<SuggestionArticle | string>;
  onItemClick: (text: string) => void;
  activeItem?: string;
  onActiveItem?: (item: string) => void;
}

export const SearchSuggestions = ({ groupTitle, groupId, articles, onItemClick, activeItem, onActiveItem }: SearchSuggestionsProps) => {
  const getText = (article: SuggestionArticle | string): string => {
    if (typeof article === 'string') {
      return article;
    }
    return article.text || article.value || article.displayName || '';
  };

  const handleClick = (text: string) => {
    if (onActiveItem) {
      onActiveItem(`${groupId}-${text}`);
    }
    onItemClick(text);
  };

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div>
      <p className="px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">{groupTitle}</p>
      <div className="flex flex-col gap-1">
        {articles.map((article, index) => {
          const text = getText(article);
          const itemId = `${groupId}-${text}`;
          const isActive = activeItem === itemId;

          if (!text) {
            return null;
          }

          return (
            <Button key={`${itemId}-${index}`} variant="ghost" className={cn('justify-start text-left h-auto py-1.5 px-2 text-sm rounded-md', isActive && 'bg-muted')} onClick={() => handleClick(text)}>
              <span className="truncate">{text}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
