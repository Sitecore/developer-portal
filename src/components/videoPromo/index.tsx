// Global
import { classnames, TTailwindString } from '@/src/common/types/tailwindcss-classnames';
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
      <iframe
        src={`https://www.youtube.com/embed/${youTubeId}?&controls=0&modestbranding=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
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
