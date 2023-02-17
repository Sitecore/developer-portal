import LiteYouTubeEmbed from 'react-lite-youtube-embed';

/* eslint-disable react/no-unknown-property */
type VideoProps = {
  youTubeId: string;
  isPlayList?: boolean;
  playlistCoverId?: string;
};

const YouTube = ({ youTubeId, isPlayList, playlistCoverId }: VideoProps): JSX.Element => {
  return (
    <>
      <style jsx>{`
        /* Post-click styles */
        .yt-lite.lyt-activated {
          cursor: unset;
        }
        .yt-lite.lyt-activated::before,
        .yt-lite.lyt-activated > .lty-playbtn {
          opacity: 0;
          pointer-events: none;
        }
      `}</style>
      <div className="flex flex-col justify-center w-full">
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
          wrapperClass="yt-lite bg-no-repeat bg-cover relative"
          iframeClass="top-0 w-full h-full"
          playerClass="lty-playbtn z-10"
        />
      </div>
    </>
  );
};

export default YouTube;
