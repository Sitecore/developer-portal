import { AbsoluteCenter, AspectRatio, Box, Card, CardBody, CardHeader, CardProps, Heading, Image, LinkBox, SimpleGrid, Text, VisuallyHidden } from '@chakra-ui/react';
import NextLink from 'next/link';
import { TextLink } from '../../links/TextLink';

import type { YouTubeSnippet, YouTubeVideo } from './youTube';

type YouTubeFeedProps = CardProps & {
  data: YouTubeVideo[];
  // The playlistTitle is only used if the author has not already supplied a youtubeTitle meta tag
  playlistTitle?: string;
  title?: string;
};

type YouTubeItemProps = {
  snippet: YouTubeSnippet;
  id: string;
};

export const YouTubeFeed = ({ data, playlistTitle, title, ...rest }: YouTubeFeedProps): JSX.Element => {
  if (data.length === 0) {
    return <></>;
  }

  return (
    <Card shadow={'none'} {...rest} background={'transparent'}>
      <CardHeader justifyContent={'space-between'} display={{ base: 'inline', md: 'flex' }} px={0}>
        <Heading as={'h3'} size={'xl'}>
          {title ? title : `Latest ${playlistTitle} videos`}
        </Heading>
        <TextLink href={`https://www.youtube.com/playlist?list=${data[0].snippet.playlistId}`} text={'See all videos'} />
      </CardHeader>
      <CardBody px={0}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {data.map(({ snippet, id }) => (
            <YouTubeItem snippet={snippet} id={id} key={id} />
          ))}
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

export const YouTubeItem = ({ snippet, id }: YouTubeItemProps): JSX.Element => {
  return (
    <Box key={id}>
      <LinkBox as={NextLink} href={`https://www.youtube.com/watch?v=${snippet.resourceId.videoId}&list=${snippet.playlistId}`} rel="noopener noreferrer">
        <Box position={'relative'} marginBottom={4}>
          <VisuallyHidden>Opens in a new tab</VisuallyHidden>
          <AspectRatio ratio={snippet.thumbnails.medium.width / snippet.thumbnails.medium.height}>
            <Image
              src={snippet.thumbnails.medium.url}
              sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              alt={snippet.title}
              rounded="md"
            />
          </AspectRatio>
          <AbsoluteCenter>
            <svg width="58" height="59" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <filter x="-18.4%" y="-18.4%" width="150%" height="150%" filterUnits="objectBoundingBox" id="a">
                  <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                  <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                  <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1" />
                </filter>
                <filter x="-49.3%" y="-45.7%" width="198.6%" height="198.6%" filterUnits="objectBoundingBox" id="c">
                  <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                  <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                  <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter1" />
                </filter>
                <path
                  d="M24.5 0C38.031 0 49 10.969 49 24.5S38.031 49 24.5 49 0 38.031 0 24.5 10.969 0 24.5 0zm0 4.712c-10.929 0-19.788 8.86-19.788 19.788 0 10.929 8.86 19.788 19.788 19.788 10.929 0 19.788-8.86 19.788-19.788 0-10.929-8.86-19.788-19.788-19.788z"
                  id="b"
                />
                <path d="m27.394 17.789 6.882 13.764A1 1 0 0 1 33.382 33H19.618a1 1 0 0 1-.894-1.447l6.882-13.764a1 1 0 0 1 1.788 0z" id="d" />
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
          </AbsoluteCenter>
        </Box>
        <Text variant={'large'} fontWeight={'medium'}>
          {snippet.title}
        </Text>
      </LinkBox>
    </Box>
  );
};
