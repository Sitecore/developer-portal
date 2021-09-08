import { ValidHeadingLevels } from '@/interfaces/heading-levels';

export type ProductCategoryCardProps = {
  description: string;
  headingLevel?: ValidHeadingLevels;
  href: string;
  title: string;
};

const ProductCategoryCard = ({
  description,
  headingLevel = 'h2',
  href,
  title,
}: ProductCategoryCardProps): JSX.Element => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={href}>Learn more...</a>
  </div>
);

export default ProductCategoryCard;
