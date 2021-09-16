// Global
import Link from 'next/link';
// Interfaces
import { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';
import { classnames } from '@/tailwindcss-classnames';

export type ProductCategoryCardProps = {
  containerTag?: 'div' | 'li';
  description: string;
  headingLevel?: ValidHeadingLevels;
  href: string;
  title: string;
};

const ProductCategoryCard = ({
  containerTag = 'li',
  description,
  headingLevel = 'h4',
  href,
  title,
}: ProductCategoryCardProps): JSX.Element => (
  <DynamicTag
    tag={containerTag}
    className={classnames('bg-white', 'border-gray-light', 'border', 'px-6', 'py-12', 'relative')}
  >
    <DynamicTag tag={headingLevel} className={classnames('heading-sm', 'mb-1')}>
      <Link href={href}>
        <a className={classnames('hover:underline', 'focus:underline')}>
          {title}
          <span className={classnames('absolute', 'inset-0', 'z-10')}></span>
        </a>
      </Link>
    </DynamicTag>
    <p className={classnames('text-sm', 'text-gray-dark')}>{description}</p>
  </DynamicTag>
);

export default ProductCategoryCard;
