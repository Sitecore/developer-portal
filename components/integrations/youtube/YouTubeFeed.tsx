// Global
import { classnames, TTailwindString } from '@/tailwindcss-classnames';
// Interfaces
import type { YouTubeVideo } from '@/interfaces/integrations';
import { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';
import TextLink from '@/components/helper/TextLink';

type YouTubeFeedProps = {
  content: YouTubeVideo[];
  className?: TTailwindString;
  title?: string;
  headingLevel?: ValidHeadingLevels;
};

const YouTubeFeed = ({
  content,
  className,
  title,
  headingLevel,
}: YouTubeFeedProps): JSX.Element => {
  if (content.length === 0) {
    return <></>;
  }

  return (
    <div className={className}>
      <div className={classnames('mb-8', 'justify-between', 'md:flex', 'md:items-end')}>
        {title && (
          <DynamicTag
            tag={headingLevel ? headingLevel : 'h2'}
            className={classnames('heading-md', 'mb-4', 'mr-4', 'md:mb-0')}
          >
            {title}
          </DynamicTag>
        )}
        <TextLink
          href={`https://www.youtube.com/playlist?list=${content[0].snippet.playlistId}`}
          text="View Playlist"
          target="_blank"
          className={classnames('ml-auto')}
        />
      </div>
      <ul className={classnames('grid', 'md:grid-cols-3', 'gap-8')}>
        {content.map(({ snippet, id }) => (
          <li key={id}>
            <div className={classnames('aspect-w-16', 'aspect-h-9', 'mb-2')}>
              <iframe
                className={classnames('w-full')}
                src={`https://www.youtube.com/embed/${snippet.resourceId.videoId}?enablejsapi=1`}
                allowFullScreen
              ></iframe>
            </div>
            <p className={classnames('text-sm', 'font-semibold')}>{snippet.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YouTubeFeed;
