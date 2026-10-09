'use client';

import type { roadmapCategory } from '@/data/data-roadmap';
import { cn } from '../lib/utils';
import { RoadmapProductArea } from './RoadmapProductArea';

interface RoadmapCategoryProps {
  category: roadmapCategory;
  className?: string;
}

export const RoadmapCategory: React.FC<RoadmapCategoryProps> = ({ category, className }: RoadmapCategoryProps) => {
  const topLevelClassName = cn('border-t-2', 'border-t-primary-fg');

  if (category.title) {
    return (
      <div className={cn(className, topLevelClassName, 'mb-8', 'px-0 py-4', category.items.length > 1 ? 'md:col-span-2 lg:col-span-1' : 'md:col-span-1 lg:col-span-1')}>
        <h4 className="text-lg font-semibold font-heading mb-4 gap-2 flex items-center">{category.title}</h4>
        <div className={cn('grid gap-4', category.items.length > 1 ? 'md:grid-cols-2 lg:grid-cols-1' : 'md:grid-cols-1')}>
          {category.items.map((item) => (
            <RoadmapProductArea productArea={item} key={item.key} />
          ))}
        </div>
      </div>
    );
  }

  return category.items.map((item) => <RoadmapProductArea productArea={item} key={item.key} />);
};
