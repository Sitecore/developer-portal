// Global
import Link from 'next/link';
// Interfaces
import { ValidHeadingLevels } from '@/interfaces/heading-levels';
// Components
import DynamicTag from '@/components/helper/DynamicTag';

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
  <DynamicTag tag={containerTag}>
    <DynamicTag tag={headingLevel}>{title}</DynamicTag>
    <p>{description}</p>
    <Link href={href}>Learn more...</Link>
  </DynamicTag>
);

export default ProductCategoryCard;
