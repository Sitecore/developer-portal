/* eslint-disable react/no-unknown-property */
// Global
import ButtonLink from 'ui/components/buttons/ButtonLink';
import YouTube from 'ui/components/video/YouTube';
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
  <div className="w-full aspect-video">
    <video className="w-full h-full" autoPlay muted controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
  </div>
);

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
    <div className={`not-prose my-8 grid gap-6 md:grid-cols-2 ${className}`}>
      {isImageLeft && videoUrl != undefined && <Video videoUrl={videoUrl} />}
      {isImageLeft && youTubeId != undefined && <YouTube youTubeId={youTubeId} />}
      <div className="flex flex-col justify-center">
        <h2 className="mt-0 mb-4 heading-md">{title}</h2>
        <p className={`text-theme-text-alt ${linkText ? 'mb-8' : ''}`}>{description}</p>
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
