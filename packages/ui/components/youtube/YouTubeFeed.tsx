// Global
// Interfaces
import { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import type { YouTubeSnippet, YouTubeVideo } from 'ui/common/types/youTube';
// Components
import Image from 'next/image';
import FeedHeading from 'ui/components/headings/FeedHeading';

type YouTubeFeedProps = {
  className?: string;
  content: YouTubeVideo[];
  headingLevel?: ValidHeadingLevels;
  // The playlistTitle is only used if the author has not already supplied a youtubeTitle meta tag
  playlistTitle?: string;
  title?: string;
};

type YouTubeItemProps = {
  snippet: YouTubeSnippet;
  id: string;
};

const YouTubeFeed = ({
  className,
  content,
  headingLevel,
  playlistTitle,
  title,
}: YouTubeFeedProps): JSX.Element => {
  if (content.length === 0) {
    return <></>;
  }

  return (
    <div className={className}>
      <FeedHeading
        title={title || `Latest ${playlistTitle} videos`}
        link={{
          href: `https://www.youtube.com/playlist?list=${content[0].snippet.playlistId}`,
          title: 'See all videos',
        }}
        headingTag={headingLevel || 'h2'}
      />
      <ul className="grid gap-8 md:grid-cols-3">
        {content.map(({ snippet, id }) => (
          <YouTubeItem snippet={snippet} id={id} key={id} />
        ))}
      </ul>
    </div>
  );
};

const YouTubeItem = ({ snippet, id }: YouTubeItemProps): JSX.Element => {
  return (
    <li key={id}>
      <div className="relative mb-4 aspect-video">
        <a
          href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}&list=${snippet.playlistId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet focus:text-violet text-white"
        >
          <span className="sr-only">Opens in a new tab</span>
          <svg
            className="absolute top-1/2 left-1/2 z-10 -translate-y-2/4 -translate-x-2/4 transform-gpu"
            width="58"
            height="59"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <filter
                x="-18.4%"
                y="-18.4%"
                width="150%"
                height="150%"
                filterUnits="objectBoundingBox"
                id="a"
              >
                <feMorphology
                  radius="3"
                  operator="dilate"
                  in="SourceAlpha"
                  result="shadowSpreadOuter1"
                />
                <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  stdDeviation="2.5"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                  in="shadowBlurOuter1"
                />
              </filter>
              <filter
                x="-49.3%"
                y="-45.7%"
                width="198.6%"
                height="198.6%"
                filterUnits="objectBoundingBox"
                id="c"
              >
                <feMorphology
                  radius="3"
                  operator="dilate"
                  in="SourceAlpha"
                  result="shadowSpreadOuter1"
                />
                <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                <feGaussianBlur
                  stdDeviation="2.5"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                  in="shadowBlurOuter1"
                />
              </filter>
              <path
                d="M24.5 0C38.031 0 49 10.969 49 24.5S38.031 49 24.5 49 0 38.031 0 24.5 10.969 0 24.5 0zm0 4.712c-10.929 0-19.788 8.86-19.788 19.788 0 10.929 8.86 19.788 19.788 19.788 10.929 0 19.788-8.86 19.788-19.788 0-10.929-8.86-19.788-19.788-19.788z"
                id="b"
              />
              <path
                d="m27.394 17.789 6.882 13.764A1 1 0 0 1 33.382 33H19.618a1 1 0 0 1-.894-1.447l6.882-13.764a1 1 0 0 1 1.788 0z"
                id="d"
              />
            </defs>
            <g fill="none" fillRule="evenodd">
              <g fillRule="nonzero" transform="translate(5 5)">
                <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                <use fill="currentColor" xlinkHref="#b" />
              </g>
              <g transform="rotate(90 26.5 29.5)">
                <use fill="#000" filter="url(#c)" xlinkHref="#d" />
                <use fill="currentColor" xlinkHref="#d" />
              </g>
            </g>
          </svg>
          <div className="border-theme-border-alt aspect-video border">
            <Image
              src={snippet.thumbnails.medium.url}
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              alt=""
            />
          </div>
        </a>
      </div>
      <p className="text-sm font-semibold">{snippet.title}</p>
    </li>
  );
};

export default YouTubeFeed;
