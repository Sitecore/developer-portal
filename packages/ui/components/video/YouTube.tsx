import { Box } from '@chakra-ui/react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import styles from './YouTube.module.css';

type VideoProps = {
  youTubeId: string;
  isPlayList?: boolean;
  playlistCoverId?: string;
};

const YouTube = ({ youTubeId, isPlayList, playlistCoverId }: VideoProps): JSX.Element => {
  return (
    <Box flexDirection={'column'} alignItems={'center'}>
      <LiteYouTubeEmbed
        id={`${youTubeId}`}
        adNetwork={false}
        params={`loop=1&playlist=${youTubeId}`}
        aspectHeight={9}
        aspectWidth={16}
        playlist={isPlayList}
        playlistCoverId={playlistCoverId}
        poster="maxresdefault"
        title="YouTube Embed"
        noCookie={true}
        wrapperClass={styles.ytLite}
        iframeClass=""
        playerClass={styles.ltyPlaybtn}
        activatedClass={styles.ltyActivated}
      />
    </Box>
  );
};

export default YouTube;
