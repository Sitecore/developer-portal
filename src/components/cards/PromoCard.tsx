// Global
import { classnames, TTailwindString } from '@/src/common/types/tailwindcss-classnames';
import Image from 'next/image';
// Components
import TextLink from '@/src/components/common/TextLink';

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
  className?: TTailwindString;
  isImageLeft?: boolean;
};

const PromoCardImage = ({ img }: PromoCardImage): JSX.Element => (
  <div className={classnames('aspect-h-9', 'aspect-w-16', 'w-full', 'bg-gray-light')}>
    <Image
      src={img.src}
      alt={img.alt || ''}
      className={classnames('relative', 'z-10')}
      layout="fill"
      objectFit="fill"
      priority={true}
    />
  </div>
);

const PromoCard = ({
  title,
  description,
  img,
  link,
  className,
  isImageLeft = true,
}: PromoCardProps): JSX.Element => (
  <div className={classnames('grid', 'gap-6', 'mt-8', 'md:grid-cols-2', className)}>
    {isImageLeft && <PromoCardImage img={img} />}
    <div className={classnames('flex', 'flex-col', 'justify-center')}>
      <h2 className={classnames('heading-md', 'mb-4')}>{title}</h2>
      <p className={classnames('text-theme-text-alt', { 'mb-8': !!link })}>{description}</p>
      {!!link && (
        <div>
          <TextLink text={link.text} href={link.href} />
        </div>
      )}
    </div>
    {!isImageLeft && <PromoCardImage img={img} />}
  </div>
);

export default PromoCard;
