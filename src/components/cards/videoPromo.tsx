import { LinkButton } from '../links';
import YouTube from '../video/YouTube';
import { cn } from '@lib/utils';

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
  className?: string;
};

const Video = ({ videoUrl }: VideoProps) => (
  <div className="w-full aspect-video">
    <video className="w-full h-full" autoPlay muted controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
  </div>
);

export const VideoPromo = ({ title, description, videoUrl, youTubeId, linkText, linkHref, isImageLeft = true, className }: VideoPromoProps) => {
  return (
    <div className={cn('flex gap-6 my-8', className)}>
      {isImageLeft && videoUrl != undefined && (
        <div className="flex flex-col w-1/2 inline-grid items-center">
          <Video videoUrl={videoUrl} />
        </div>
      )}
      {isImageLeft && youTubeId != undefined && (
        <div className="flex flex-col w-1/2 inline-grid items-center">
          <YouTube youTubeId={youTubeId} />
        </div>
      )}
      <div className="flex flex-col w-1/2">
        <h4 className="text-lg font-heading">
          {title}
        </h4>
        <p className="my-4">{description}</p>
        {!!linkText && <LinkButton text={linkText ? linkText : 'Read more'} href={linkHref} />}
      </div>
      {!isImageLeft && videoUrl != undefined && (
        <div className="flex flex-col w-1/2">
          <Video videoUrl={videoUrl} />
        </div>
      )}
      {!isImageLeft && youTubeId != undefined && (
        <div className="flex flex-col w-1/2">
          <YouTube youTubeId={youTubeId} />
        </div>
      )}
    </div>
  );
};
