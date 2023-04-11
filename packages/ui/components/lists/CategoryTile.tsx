import Link from 'next/link';
import { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import DynamicTag from 'ui/components/common/DynamicTag';
import SvgIcon from 'ui/components/common/SvgIcon';

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
      className="relative px-6 py-12 border bg-theme-bg border-theme-border-alt hover:shadow-theme-md"
    >
      <DynamicTag tag={headingLevel} className="mb-1 heading-sm">
        <Link href={href} className="inline-block pr-6 mb-1 group" aria-label={title}>
          <span className="relative">
            {title}
            <span className="absolute inline-block transition-transform duration-300 h-em w-em -right-6 bottom-1 transform-gpu whitespace-nowrap group-hover:translate-x-1 group-focus:translate-x-1">
              <SvgIcon icon="arrow-right" className="text-primary-500 dark:text-red relative top-0.5" />
            </span>
          </span>
          <span className="absolute inset-0 z-10"></span>
        </Link>
      </DynamicTag>
      <p className="text-sm text-theme-text-alt">{description}</p>
    </DynamicTag>
  );
};

export default CategoryTile;
