import Image from 'next/image';
import NextLink from 'next/link';
import { Card, CardContent } from '@components/ui/card';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';
import { cn } from '@lib/utils';

export type SimplePromoCardProps = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  imageSource: string;
  imageAlt?: string;
  className?: string;
  isImageLeft?: boolean;
};

export type PromoCardImage = {
  img: {
    src: string;
    alt?: string;
  };
};

export type PromoCardProps = PromoCardImage & {
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
  className?: string;
  isImageLeft?: boolean;
};

function PromoImage({ img }: PromoCardImage) {
  return (
    <div className="relative w-full md:w-[310px] h-48 md:h-auto">
      <Image
        src={img.src}
        alt={img.alt || ''}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 310px"
      />
    </div>
  );
}

export const PromoCard = ({ title, description, img, link, isImageLeft = true, className }: PromoCardProps) => (
  <div className="flex justify-center">
    <Card className={cn('overflow-hidden border shadow-md hover:shadow-lg transition-shadow max-w-2xl', className)}>
      <div className="flex flex-col md:flex-row">
        {isImageLeft && <PromoImage img={img} />}
        <CardContent className="flex flex-col justify-between items-start">
          <div>
            <h4 className="text-lg font-heading mb-2">
              {title}
            </h4>
            <p className="mb-4">{description}</p>
          </div>
          {link && (
            <NextLink href={link.href} className="inline-flex items-center gap-1 font-semibold hover:underline mt-2">
              {link.text}
              <Icon path={mdiArrowRight} size={0.8} />
            </NextLink>
          )}
        </CardContent>
        {!isImageLeft && (
          <div className="hidden md:block">
            <PromoImage img={img} />
          </div>
        )}
      </div>
    </Card>
  </div>
);

export const Promo = ({ title, description, linkText, linkHref, imageSource, imageAlt, className, isImageLeft }: SimplePromoCardProps) => {
  const data: PromoCardProps = {
    title: title,
    description: description,
    img: {
      src: imageSource,
      alt: imageAlt ? imageAlt : title,
    },
    link: {
      href: linkHref,
      text: linkText,
    },
    className: className,
    isImageLeft: isImageLeft,
  };

  return <PromoCard {...data} />;
};
