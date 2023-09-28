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
