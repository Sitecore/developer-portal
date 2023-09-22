import { Box, Flex } from '@chakra-ui/react';
import { ButtonLink } from '../../links/ButtonLink';
import YouTube from '../../video/YouTube';
import { VideoPromoProps, VideoProps } from './types';

const Video = ({ videoUrl }: VideoProps): JSX.Element => (
  <Box className="w-full aspect-video">
    <video className="w-full h-full" autoPlay muted controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
  </Box>
);

export const VideoPromo = ({ title, description, videoUrl, youTubeId, linkText, linkHref, isImageLeft = true }: VideoPromoProps): JSX.Element => {
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
        <h2 className="mt-0 mb-4 heading-md">{title}</h2>
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
