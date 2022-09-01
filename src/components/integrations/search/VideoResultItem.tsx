/* eslint-disable @next/next/no-img-element */
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
        }/hqdefault.jpg`}
        className="my-5 max-w-sm"
      />
      <p>{result.excerpt}</p>
      <span className="absolute inset-0 z-10"></span>
    </a>
  </div>
);

export default VideoResultItem;
