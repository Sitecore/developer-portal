import { TextLink } from "@src/components/links/TextLink";
import { Card, CardContent, CardHeader } from "@src/components/ui/card";
import Image from "next/image";
import NextLink from "next/link";
import { cn } from "@/src/lib/util";
import type { YouTubeSnippet, YouTubeVideo } from "./youTube";

type YouTubeFeedProps = {
  data: Array<YouTubeVideo>;
  // The playlistTitle is only used if the author has not already supplied a youtubeTitle meta tag
  playlistTitle?: string;
  title?: string;
  className?: string;
};

type YouTubeItemProps = {
  snippet: YouTubeSnippet;
  id: string;
};

export const YouTubeFeed = ({
  data,
  playlistTitle,
  title,
  className,
}: YouTubeFeedProps) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <Card className={cn("shadow-none bg-transparent", className)}>
      <CardHeader className="flex flex-col md:flex-row justify-between px-0">
        <h3 className="text-2xl font-heading font-normal">
          {title ? title : `Latest ${playlistTitle} videos`}
        </h3>
        <TextLink
          href={`https://www.youtube.com/playlist?list=${data[0].snippet.playlistId}`}
          text="See all videos"
        />
      </CardHeader>
      <CardContent className="px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map(({ snippet, id }) => (
            <YouTubeItem snippet={snippet} id={id} key={id} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export const YouTubeItem = ({ snippet, id }: YouTubeItemProps) => {
  const aspectRatio =
    snippet.thumbnails.medium.width / snippet.thumbnails.medium.height;

  return (
    <div key={id}>
      <NextLink
        href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}&list=${snippet.playlistId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative mb-4">
          <span className="sr-only">Opens in a new tab</span>
          <div
            style={{ aspectRatio: aspectRatio.toString() }}
            className="relative"
          >
            <Image
              src={snippet.thumbnails.medium.url}
              alt={snippet.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-md object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="58"
              height="59"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-label="Play video"
              role="img"
            >
              <title>Play video</title>
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
                  <feOffset
                    in="shadowSpreadOuter1"
                    result="shadowOffsetOuter1"
                  />
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
                  <feOffset
                    in="shadowSpreadOuter1"
                    result="shadowOffsetOuter1"
                  />
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
                  <use fill="white" xlinkHref="#b" />
                </g>
                <g transform="rotate(90 26.5 29.5)">
                  <use fill="#000" filter="url(#c)" xlinkHref="#d" />
                  <use fill="white" xlinkHref="#d" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <p className="text-lg font-medium">{snippet.title}</p>
      </NextLink>
    </div>
  );
};
