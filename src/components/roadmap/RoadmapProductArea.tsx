'use client';

import type { roadmapProductArea } from '@/data/data-roadmap';
import { mdiArrowRight } from '@mdi/js';
import Link from 'next/link';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { Icon } from '../ui/icon';

interface RoadmapProductAreaProps {
  productArea: roadmapProductArea;
}

export const RoadmapProductArea: React.FC<RoadmapProductAreaProps> = ({ productArea }: RoadmapProductAreaProps) => {
  return (
    <Link href={`/roadmap/${productArea.key}`} className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2">
      <HoverCard>
        <HoverCardTrigger>
          <Card style="flat" elevation={'base'} padding="md" className="hover:bg-subtle-bg transition-colors duration-200">
            <CardHeader className="justify-between">
              <CardTitle className="">{productArea.title}</CardTitle>
              <CardAction>
                <Icon path={mdiArrowRight} size="sm" colorScheme="neutral" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-default line-clamp-3">{productArea.caption}</CardDescription>
            </CardContent>
          </Card>
          <HoverCardContent>
            <p className="font-medium">{productArea.title}</p>
            <p className="text-sm text-muted-foreground">{productArea.caption}</p>
          </HoverCardContent>
        </HoverCardTrigger>
      </HoverCard>
    </Link>
  );
};
