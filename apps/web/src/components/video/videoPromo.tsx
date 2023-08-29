/* eslint-disable react/no-unknown-property */
// Global

import { Box, Flex } from '@chakra-ui/react';
import { ButtonLink } from '../ui/ButtonLink';
import YouTube from './YouTube';
// Components

type VideoProps = {
  videoUrl?: string;
  youTubeId?: string;
};

export type VideoPromoProps = VideoProps & {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  className?: string;
  isImageLeft?: boolean;
};

const Video = ({ videoUrl }: VideoProps): JSX.Element => (
  <Box className="aspect-video w-full">
    <video className="h-full w-full" autoPlay muted controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
  </Box>
);

const VideoPromo = ({ title, description, videoUrl, youTubeId, linkText, linkHref, className, isImageLeft = true }: VideoPromoProps): JSX.Element => {
  return (
    <Flex gap={6} my={8}>
      {isImageLeft && videoUrl != undefined && (
        <Box flexDirection={'column'} width={'50%'}>
          <Video videoUrl={videoUrl} />
        </Box>
      )}
      {isImageLeft && youTubeId != undefined && (
        <Box flexDirection={'column'} width={'50%'}>
          <YouTube youTubeId={youTubeId} />
        </Box>
      )}
      <Box flexDirection={'column'} width={'50%'}>
        <h2 className="heading-md mb-4 mt-0">{title}</h2>
        <p className={`text-theme-text-alt ${linkText ? 'mb-8' : ''}`}>{description}</p>
        {!!linkText && (
          <div>
            <ButtonLink text={linkText ? linkText : 'Read more'} href={linkHref} />
          </div>
        )}
      </Box>
      {!isImageLeft && videoUrl != undefined && (
        <Box flexDirection={'column'} width={'50%'}>
          <Video videoUrl={videoUrl} />
        </Box>
      )}
      {!isImageLeft && youTubeId != undefined && (
        <Box flexDirection={'column'} width={'50%'}>
          <YouTube youTubeId={youTubeId} />
        </Box>
      )}
    </Flex>
  );
};

export default VideoPromo;
