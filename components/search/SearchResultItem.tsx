import { Result } from '@coveo/headless';

interface SearchResultItemProps {
  result: Result;
}

const SearchResultItem = ({ result }: SearchResultItemProps) => {
  return (
    <div className="p-4 relative">
      <a href={result.clickUri} className="group">
        <p className="font-bold group-hover:underline">{result.title}</p>
        <p>{result.excerpt}</p>
        <span className="absolute inset-0 z-10"></span>
      </a>
    </div>
  );
};

export default SearchResultItem;
