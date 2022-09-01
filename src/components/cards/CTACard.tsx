// Global
import Link from 'next/link';
import { classnames } from '@/src/common/types/tailwindcss-classnames';
// Interfaces
import type { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Data
import data from '@/data/promos/get-help';
// Components
import DynamicTag from '@/src/components/common/DynamicTag';

export type CTACardProps = {
  description: string;
  headingLevel?: ValidHeadingLevels;
  href: string;
  linkText: string;
  title: string;
};

const CTACard = ({
  description,
  headingLevel = 'h2',
  href,
  linkText,
  title,
}: CTACardProps): JSX.Element => (
  <div className={classnames('w-full', 'bg-theme-bg-alt', 'px-16', 'py-10')}>
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
  </div>
);

export default CTACard;
