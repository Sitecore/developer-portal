// Global
import Link from 'next/link';
// Interfaces
import { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Components
import DynamicTag from '@/src/components/common/DynamicTag';
import SvgIcon from '../common/SvgIcon';
import { classnames } from '@/src/common/types/tailwindcss-classnames';

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
  headingLevel = 'h3',
  href,
  title,
}: CategoryTileProps): JSX.Element => {
  return (
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
          <a className={classnames('group', 'pr-6', 'inline-block', 'mb-1')} aria-label={title}>
            <span className={classnames('relative')}>
              {title}
              <span
                className={classnames(
                  'duration-300',
                  'h-em',
                  'inline-block',
                  'transform-gpu',
                  'transition-transform',
                  'w-em',
                  'group-focus:translate-x-1',
                  'whitespace-nowrap',
                  'group-hover:translate-x-1',
                  'absolute',
                  '-right-6',
                  'bottom-1'
                )}
              >
                <SvgIcon
                  icon="arrow-right"
                  className={classnames('text-violet', 'dark:text-red', 'relative', 'top-0.5')}
                />
              </span>
            </span>
            <span className={classnames('absolute', 'inset-0', 'z-10')}></span>
          </a>
        </Link>
      </DynamicTag>
      <p className={classnames('text-sm', 'text-theme-text-alt')}>{description}</p>
    </DynamicTag>
  );
};

export default CategoryTile;
