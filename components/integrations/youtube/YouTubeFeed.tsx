import { classnames } from '@/tailwindcss-classnames';
import type { YouTubeVideo } from '@/interfaces/integrations';

type YouTubeFeedProps = {
  content: YouTubeVideo[];
};

const YouTubeFeed = ({ content }: YouTubeFeedProps): JSX.Element => {
  if (content.length === 0) {
    return <></>;
  }

  return (
    <div className="my-16 max-w-screen-xl mx-auto">
      <p>YouTube</p>
      <ul className={classnames('grid', 'md:grid-cols-3', 'gap-6')}>
        {content.map(({ snippet, id }) => (
          <li key={id}>
            <div className={classnames('aspect-w-16', 'aspect-h-9')}>
              <iframe
                className={classnames('w-full')}
                src={`http://www.youtube.com/embed/${snippet.resourceId.videoId}?enablejsapi=1`}
                allowFullScreen
              ></iframe>
            </div>
            <p>{snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeFeed;
