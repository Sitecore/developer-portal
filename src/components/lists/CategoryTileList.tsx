// Global
import { classnames } from '@/src/common/types/tailwindcss-classnames';
// Interfaces
import type { ValidHeadingLevels } from '@/src/interfaces/heading-levels';
// Components
import CategoryTile, { CategoryTileProps } from '@/src/components/lists/CategoryTile';

type CategoryTileListProps = {
  cards: CategoryTileProps[];
  headingLevel?: ValidHeadingLevels;
};

const CategoryTileList = ({ cards, headingLevel = 'h3' }: CategoryTileListProps): JSX.Element => (
  <ul className={classnames('grid', 'gap-6', 'md:grid-cols-2')}>
    {cards.map((card, i) => (
      <CategoryTile key={i} containerTag="li" headingLevel={headingLevel} {...card} />
    ))}
  </ul>
);

export default CategoryTileList;
