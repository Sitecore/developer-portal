import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { LinkButton } from '../links';
import YouTube from '../video/YouTube';

export type VideoProps = {
  videoUrl?: string;
  youTubeId?: string;
};

export type VideoPromoProps = VideoProps & {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  isImageLeft?: boolean;
};

const Video = ({ videoUrl }: VideoProps) => (
  <Box className="w-full aspect-video">
    <video className="w-full h-full" autoPlay muted controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
  </Box>
);

export const VideoPromo = ({ title, description, videoUrl, youTubeId, linkText, linkHref, isImageLeft = true }: VideoPromoProps) => {
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
        <Heading as={'h4'} size="md">
          {title}
        </Heading>
        <Text my="4">{description}</Text>
        {!!linkText && <LinkButton text={linkText ? linkText : 'Read more'} href={linkHref} />}
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
