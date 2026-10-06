"use client";

import type { roadmapCategory } from "@/data/data-roadmap";
import { mdiCircle } from "@mdi/js";
import { Icon } from "../ui/icon";
import { RoadmapProductArea } from "./RoadmapProductArea";

interface RoadmapCategoryProps {
  category: roadmapCategory;
}

export const RoadmapCategory: React.FC<RoadmapCategoryProps> = ({
  category,
}: RoadmapCategoryProps) => {
  return (
    <div className="mb-8">
      <h4 className="text-base font-semibold text-primary-fg font-heading uppercase mb-4 gap-2 flex items-center">
        <Icon path={mdiCircle} className="size-3" />
        {category.title}
      </h4>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {category.items.map((item) => (
          <RoadmapProductArea productArea={item} key={item.key} />
        ))}
      </div>
    </div>
  );
};
