// Global
import Link from 'next/link';
// Interfaces
import { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';
import SvgIcon from '../helper/SvgIcon';
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
      'border',
      'border-theme-border-alt',
      'px-6',
      'py-12',
      'relative',
      'hover:shadow-theme-md'
    )}
  >
    <DynamicTag tag={headingLevel} className={classnames('heading-sm', 'mb-1')}>
      <Link href={href}>
        <a className={classnames('group', 'pr-2')}>
          {title}
          <span className={classnames('absolute', 'inset-0', 'z-10')}></span>
          <span
            className={classnames(
              'duration-300',
              'h-em',
              'inline-block',
              'ml-2',
              'transform-gpu',
              'transition-transform',
              'w-em',
              'group-focus:translate-x-1',
              'group-hover:translate-x-1'
            )}
          >
            <SvgIcon icon="arrow-right" className={classnames('text-red', 'relative', 'top-0.5')} />
          </span>
        </a>
      </Link>
    </DynamicTag>
    <p className={classnames('text-sm', 'text-theme-text-alt')}>{description}</p>
  </DynamicTag>
);

export default CategoryTile;
