// Global
import Link from 'next/link';
import { classnames } from '@/tailwindcss-classnames';
// Interfaces
import type { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Data
import data from '@/data/promos/get-help';
// Components
import DynamicTag from '@/components/helper/DynamicTag';

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
    <p className={classnames('text-theme-text-alt', 'mb-6')}>{description}</p>
    <Link href={data.href}>
      <a
        className={classnames(
          'bg-teal',
          'focus:bg-teal-dark',
          'font-semibold',
          'hover:bg-teal-dark',
          'inline-block',
          'px-12',
          'py-4',
          'text-sm',
          'text-white'
        )}
      >
        {linkText}
      </a>
    </Link>
  </div>
);

export default CTACard;
