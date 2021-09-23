// Global
import Link from 'next/link';
// Interfaces
import { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';
import { classnames } from '@/tailwindcss-classnames';

export type CategoryTileProps = {
  containerTag?: 'div' | 'li';
  description: string;
  headingLevel?: ValidHeadingLevels;
  href: string;
  title: string;
};

const CategoryTile = ({
  containerTag = 'li',
  description,
  headingLevel = 'h4',
  href,
  title,
}: CategoryTileProps): JSX.Element => (
  <DynamicTag
    tag={containerTag}
    className={classnames(
      'bg-theme-bg',
      'border-theme-border',
      'border',
      'px-6',
      'py-12',
      'relative',
      'hover:shadow-lg'
    )}
  >
    <DynamicTag tag={headingLevel} className={classnames('heading-sm', 'mb-1')}>
      <Link href={href}>
        <a>
          {title}
          <span className={classnames('absolute', 'inset-0', 'z-10')}></span>
        </a>
      </Link>
    </DynamicTag>
    <p className={classnames('text-sm', 'text-theme-text-alt')}>{description}</p>
  </DynamicTag>
);

export default CategoryTile;
