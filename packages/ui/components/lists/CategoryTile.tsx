import { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import DynamicTag from 'ui/components/common/DynamicTag';
import Button from '../buttons/Button';

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
        <Button variant="text" text={title} href={href} size="xl" icon={true} aria-label={title} />
      </DynamicTag>
      <p className="text-theme-text-alt text-sm">{description}</p>
    </DynamicTag>
  );
};

export default CategoryTile;
