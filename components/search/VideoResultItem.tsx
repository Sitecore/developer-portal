import { resultList } from '@/lib/search/coveo-engine';
import { Result } from '@coveo/headless';

interface SearchResultItemProps {
  result: Result;
}

const VideoResultItem = ({ result }: SearchResultItemProps) => (
  <div className="p-4 relative border-b border-theme-border">
    <a href={result.clickUri} className="group">
      <p className="font-bold group-hover:underline">{result.title}</p>

      <img
        src={`http://img.youtube.com/vi/${
          result.uri.split(':')[result.uri.split(':').length - 1]
        }/maxresdefault.jpg`}
        className="my-5 max-w-xs"
      />
      <p>{result.excerpt}</p>
      <span className="absolute inset-0 z-10"></span>
    </a>
  </div>
);

export default VideoResultItem;
