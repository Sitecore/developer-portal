import { resultList } from '@/src/common/search/coveo-engine';
import { Result } from '@coveo/headless';

interface SearchResultItemProps {
  result: Result;
}

const SearchResultItem = ({ result }: SearchResultItemProps) => (
  <div className="p-4 relative border-b border-theme-border">
    <a href={result.clickUri} className="group">
      <p className="font-bold group-hover:underline">{result.title}</p>
      <span className="text-xs italic">{result.clickUri}</span>
      <p>{result.excerpt}</p>
      <span className="absolute inset-0 z-10"></span>
    </a>
  </div>
);

export default SearchResultItem;
