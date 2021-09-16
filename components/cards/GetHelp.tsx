// Global
import Link from 'next/link';
import { classnames, TTailwindString } from '@/tailwindcss-classnames';
// Interfaces
import type { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Data
import data from '@/data/data-get-help';
// Components
import DynamicTag from '@/components/helper/DynamicTag';

type GetHelpProps = {
  className?: TTailwindString;
  headingLevel?: ValidHeadingLevels;
};

const GetHelp = ({ className, headingLevel = 'h2' }: GetHelpProps): JSX.Element => (
  <div className={classnames('w-full', 'bg-gray-lightest', 'px-16', 'py-10', 'mb-16', className)}>
    <DynamicTag tag={headingLevel} className={classnames('heading-md', 'mb-4')}>
      {data.title}
    </DynamicTag>
    <p className={classnames('text-gray-darkest', 'mb-6')}>{data.description}</p>
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
        {data.linkText}
      </a>
    </Link>
  </div>
);

export default GetHelp;
