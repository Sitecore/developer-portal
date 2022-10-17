// Global
import { classnames, TTailwindString } from '@/src/common/types/tailwindcss-classnames';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import ButtonLink from '../common/ButtonLink';
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
  className?: TTailwindString;
  isImageLeft?: boolean;
};

const Video = ({ videoUrl }: VideoProps): JSX.Element => (
  <div className={classnames('aspect-h-9', 'aspect-w-16', 'w-full')}>
    <video className={classnames('w-full', 'h-full')} autoPlay muted controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
  </div>
);

const YouTube = ({ youTubeId }: VideoProps): JSX.Element => {
  return (
    <div className={classnames('aspect-h-9', 'aspect-w-16', 'w-full')}>
      <LiteYouTubeEmbed
        id={`${youTubeId}`} // Default none, id of the video or playlist
        adNetwork={false} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
        params="" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
        aspectHeight={9}
        aspectWidth={16}
        poster="maxresdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
        title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
        noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
        wrapperClass="yt-lite bg-no-repeat bg-cover"
        iframeClass="absolute top-0 w-full h-full"
        playerClass="lty-playbtn absolute z-10"
      />
    </div>
  );
};

const VideoPromo = ({
  title,
  description,
  videoUrl,
  youTubeId,
  linkText,
  linkHref,
  className,
  isImageLeft = true,
}: VideoPromoProps): JSX.Element => {
  return (
    <div className={classnames('not-prose', 'grid', 'gap-6', 'my-8', 'md:grid-cols-2', className)}>
      {isImageLeft && videoUrl != undefined && <Video videoUrl={videoUrl} />}
      {isImageLeft && youTubeId != undefined && <YouTube youTubeId={youTubeId} />}
      <div className={classnames('flex', 'flex-col', 'justify-center')}>
        <h2 className={classnames('heading-md', 'mb-4')}>{title}</h2>
        <p className={classnames('text-theme-text-alt', { 'mb-8': !!linkText })}>{description}</p>
        {!!linkText && (
          <div>
            <ButtonLink text={linkText} href={linkHref} />
          </div>
        )}
      </div>
      {!isImageLeft && videoUrl != undefined && <Video videoUrl={videoUrl} />}
      {!isImageLeft && youTubeId != undefined && <YouTube youTubeId={youTubeId} />}
    </div>
  );
};

export default VideoPromo;
