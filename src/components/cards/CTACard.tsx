// Global
import { classnames } from '@/src/common/types/tailwindcss-classnames';
import Link from 'next/link';
// Interfaces
import type { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Components
import DynamicTag from '@/src/components/common/DynamicTag';

export type CTACardProps = {
  description: string;
  headingLevel?: ValidHeadingLevels;
  href: string;
  linkText: string;
  link2href?: string;
  link2Text?: string;
  title: string;
};

const CTACard = ({
  description,
  headingLevel = 'h2',
  href,
  linkText,
  title,
  link2Text,
  link2href,
}: CTACardProps): JSX.Element => (
  <div className={classnames('w-full', 'bg-theme-bg-alt', 'px-16', 'py-10', 'my-8')}>
    <DynamicTag tag={headingLevel} className={classnames('heading-md', 'mb-4')}>
      {title}
    </DynamicTag>
    <p className={classnames('text-theme-text', 'mb-6')}>{description}</p>
    <Link href={href}>
      <a
        className={classnames(
          'bg-violet',
          'focus:bg-violet-dark',
          'font-semibold',
          'hover:bg-violet-dark',
          'inline-block',
          'px-12',
          'py-4',
          'text-sm',
          'text-white',
          'rounded-full'
        )}
      >
        {linkText}
      </a>
    </Link>
    {link2href && link2Text && (
      <Link href={link2href}>
        <a
          className={classnames(
            'bg-violet',
            'focus:bg-violet-dark',
            'font-semibold',
            'hover:bg-violet-dark',
            'inline-block',
            'px-12',
            'py-4',
            'text-sm',
            'text-white',
            'rounded-full',
            'ml-4'
          )}
        >
          {link2Text}
        </a>
      </Link>
    )}
  </div>
);

export default CTACard;
