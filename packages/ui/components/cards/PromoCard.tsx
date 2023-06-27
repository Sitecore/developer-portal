// Global
import Image from 'next/image';
// Components
import Button from '../buttons/Button';

type PromoCardImage = {
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

const PromoCardImage = ({ img }: PromoCardImage): JSX.Element => (
  <div className="relative aspect-video w-full">
    <Image
      src={img.src}
      alt={img.alt || ''}
      className="relative z-10"
      priority={true}
      fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />
  </div>
);

const PromoCard = ({ title, description, img, link, className, isImageLeft = true }: PromoCardProps): JSX.Element => (
  <div className={'mt-8 grid gap-6 md:grid-cols-2 ' + (className ? className : '')}>
    {isImageLeft && <PromoCardImage img={img} />}
    <div className="flex flex-col justify-center">
      <h2 className="heading-md mb-4">{title}</h2>
      <p className={`text-theme-text-alt ${link ? 'mb-8' : ''}`}>{description}</p>
      {!!link && (
        <div>
          <Button variant="text" text={link.text ? link.text : 'Read more'} href={link.href} icon={true} className="no-underline" />
        </div>
      )}
    </div>
    {!isImageLeft && <PromoCardImage img={img} />}
  </div>
);

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

export const Promo = ({ title, description, linkText, linkHref, imageSource, imageAlt, className, isImageLeft }: SimplePromoCardProps): JSX.Element => {
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

export default PromoCard;
