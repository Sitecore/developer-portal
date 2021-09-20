// Global
import React, { useState, useEffect } from 'react';
import { classnames, TTailwindString } from '@/tailwindcss-classnames';
// Interfaces
import type { YouTubeVideo, YouTubeSnippet } from '@/interfaces/integrations';
import { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';
import TextLink from '@/components/helper/TextLink';
import Image from 'next/image';

type YouTubeFeedProps = {
  content: YouTubeVideo[];
  className?: TTailwindString;
  title?: string;
  headingLevel?: ValidHeadingLevels;
};

type YouTubeItemProps = {
  snippet: YouTubeSnippet;
  id: string;
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
          <YouTubeItem snippet={snippet} id={id} key={id} />
        ))}
      </ul>
    </div>
  );
};

const YouTubeItem = ({ snippet, id }: YouTubeItemProps): JSX.Element => {
  const [isLoaded, setLoaded] = useState(false);

  const toggleVideoLoad = () => {
    setLoaded(!isLoaded);
  };

  return (
    <li key={id}>
      <div className={classnames('aspect-w-16', 'aspect-h-9', 'mb-2')}>
        {!isLoaded ? (
          <button
            onClick={toggleVideoLoad}
            className={classnames('text-white', 'hover:text-teal', 'focus:text-teal')}
          >
            <span className={classnames('sr-only')}>Play Video</span>
            <svg
              className={classnames(
                'absolute',
                'top-1/2',
                'left-1/2',
                'transform-gpu',
                '-translate-y-2/4',
                '-translate-x-2/4',
                'z-10'
              )}
              width="58"
              height="59"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <filter
                  x="-18.4%"
                  y="-18.4%"
                  width="136.7%"
                  height="136.7%"
                  filterUnits="objectBoundingBox"
                  id="a"
                >
                  <feMorphology
                    radius=".5"
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
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
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
                    radius=".5"
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
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
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
            <div className={classnames('border', 'border-gray-light', 'aspect-w-16', 'aspect-h-9')}>
              <Image src={snippet.thumbnails.medium.url} layout="fill" />
            </div>
          </button>
        ) : (
          <iframe
            className={classnames('w-full', 'bg-gray-light')}
            src={`https://www.youtube.com/embed/${snippet.resourceId.videoId}?enablejsapi=1&autoplay=1&mute=1`}
            allowFullScreen
          ></iframe>
        )}
      </div>
      <p className={classnames('text-sm', 'font-semibold')}>{snippet.title}</p>
    </li>
  );
};

export default YouTubeFeed;
