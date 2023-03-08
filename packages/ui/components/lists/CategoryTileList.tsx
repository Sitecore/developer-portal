import type { ValidHeadingLevels } from 'ui/common/types/heading-levels';
import CategoryTile, { CategoryTileProps } from 'ui/components/lists/CategoryTile';

type CategoryTileListProps = {
  cards: CategoryTileProps[];
  headingLevel?: ValidHeadingLevels;
};

const CategoryTileList = ({ cards, headingLevel = 'h3' }: CategoryTileListProps): JSX.Element => (
  <ul className="grid gap-6 md:grid-cols-2">
    {cards.map((card, i) => (
      <CategoryTile key={i} containerTag="li" headingLevel={headingLevel} {...card} />
    ))}
  </ul>
);

export default CategoryTileList;
