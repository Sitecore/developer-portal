// Global
import { classnames, TTailwindString } from 'tailwindcss-classnames';
import Image from 'next/image';
// Components
import TextLink from '@/components/helper/TextLink';

export type PromoCardProps = {
  title: string;
  description: string;
  img: {
    src: string;
    alt?: string;
  };
  link?: {
    text: string;
    href: string;
  };
  className?: TTailwindString;
};

const PromoCard = ({ title, description, img, link, className }: PromoCardProps): JSX.Element => (
  <div className={classnames('grid', 'gap-6', 'md:grid-cols-2', className)}>
    <div className={classnames('aspect-h-9', 'aspect-w-16', 'w-full', 'bg-theme-bg-alt')}>
      <Image
        src={img.src}
        alt={img.alt}
        className={classnames('relative', 'z-10')}
        layout="fill"
        objectFit="fill"
        priority={true}
      />
    </div>
    <div className={classnames('flex', 'flex-col', 'justify-center')}>
      <h2 className={classnames('heading-md', 'mb-4')}>{title}</h2>
      <p className={classnames('text-theme-text-alt', { 'mb-8': !!link })}>{description}</p>
      {!!link && (
        <div>
          <TextLink text={link.text} href={link.href} />
        </div>
      )}
    </div>
  </div>
);

export default PromoCard;
