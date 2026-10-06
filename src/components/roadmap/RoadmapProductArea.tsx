"use client";

import type { roadmapProductArea } from "@/data/data-roadmap";
import { mdiArrowRight } from "@mdi/js";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Icon } from "../ui/icon";

interface RoadmapProductAreaProps {
  productArea: roadmapProductArea;
}

export const RoadmapProductArea: React.FC<RoadmapProductAreaProps> = ({
  productArea,
}: RoadmapProductAreaProps) => {
  return (
    <Link
      href={`/roadmap/${productArea.key}`}
      className="block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <Card
        style="outline"
        elevation={"base"}
        className="h-full hover:bg-subtle-bg transition-colors duration-200"
      >
        <CardHeader className="justify-between">
          <CardTitle className="text-primary-fg">{productArea.title}</CardTitle>
          <CardAction>
            <Icon path={mdiArrowRight} size="sm" colorScheme="primary" />
          </CardAction>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-default">
            {productArea.caption}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
