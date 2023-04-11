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

const CategoryTile = ({ containerTag = 'li', description, headingLevel = 'h3', href, title }: CategoryTileProps): JSX.Element => {
  return (
    <DynamicTag tag={containerTag} className="bg-theme-bg border-theme-border-alt hover:shadow-theme-md relative border px-6 py-12">
      <DynamicTag tag={headingLevel} className="heading-sm mb-1">
        <Link href={href} className="group mb-1 inline-block pr-6" aria-label={title}>
          <span className="relative">
            {title}
            <span className="h-em w-em absolute -right-6 bottom-1 inline-block transform-gpu whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1">
              <SvgIcon icon="arrow-right" className="text-primary-500 relative top-0.5 dark:text-red-500" />
            </span>
          </span>
          <span className="absolute inset-0 z-10"></span>
        </Link>
      </DynamicTag>
      <p className="text-theme-text-alt text-sm">{description}</p>
    </DynamicTag>
  );
};

export default CategoryTile;
