import { classnames } from '@/tailwindcss-classnames';
import Image from 'next/image';
import type { YouTubeVideo } from '@/interfaces/integrations';

type YouTubeFeedProps = {
  content: YouTubeVideo[];
};

const YouTubeFeed = ({ content }: YouTubeFeedProps): JSX.Element => {
  if (content.length === 0) {
    return <></>;
  }

  return (
    <div>
      <p>YouTube</p>
      <ul className={classnames('grid', 'md:grid-cols-3', 'gap-6')}>
        {content.map(({ snippet, id }) => (
          <li key={id}>
            {/* <Image
              src={snippet.thumbnails.medium.url}
              height={snippet.thumbnails.medium.height}
              width={snippet.thumbnails.medium.width}
            /> */}
            <div className={classnames('aspect-w-16', 'aspect-h-9')}>
              <iframe
                className={classnames('w-full')}
                src={`http://www.youtube.com/embed/${snippet.resourceId.videoId}?enablejsapi=1`}
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
