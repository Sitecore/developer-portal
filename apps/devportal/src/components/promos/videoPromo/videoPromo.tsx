import { Box, Flex, Heading, Text } from '@chakra-ui/react';
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
        <Box flexDirection={'column'} width={'50%'} display={'inline-grid'} alignItems={'center'}>
          <Video videoUrl={videoUrl} />
        </Box>
      )}
      {isImageLeft && youTubeId != undefined && (
        <Box flexDirection={'column'} width={'50%'} display={'inline-grid'} alignItems={'center'}>
          <YouTube youTubeId={youTubeId} />
        </Box>
      )}
      <Box flexDirection={'column'} width={'50%'}>
        <Heading as={'h3'}>{title}</Heading>
        <Text>{description}</Text>
        {!!linkText && <ButtonLink text={linkText ? linkText : 'Read more'} href={linkHref} />}
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
