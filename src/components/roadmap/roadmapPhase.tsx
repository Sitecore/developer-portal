'use client';

import { Loading } from '@src/components/ui';
import type { Option } from '@src/components/ui/dropdown';
import type { RoadmapInformation } from '@src/lib/interfaces/jira';
import type { Phase } from '@src/lib/jira';
import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { RoadmapItem } from './roadmapItem';

interface RoadmapPhaseProps {
  roadmap?: RoadmapInformation;
  phase: Phase;
  selectedProducts?: Option[];
  title: string;
  color: string;
  isLoading: boolean;
}

export const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ roadmap, title, color, phase, isLoading }: RoadmapPhaseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card style="filled" className={`bg-${color}`} padding="sm">
      <CardHeader>
        <CardTitle className="">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 hidden md:flex">
          {isLoading && <Loading />}
          {!isLoading && roadmap?.items?.filter((x) => x.roadmapPhase === phase).map((issue) => <RoadmapItem item={issue} key={issue.id} />)}
        </div>

        <div className="md:hidden">
          <div className="flex flex-col gap-4">
            <button type="button" className="flex justify-between items-center cursor-pointer w-full" onClick={() => setIsOpen(!isOpen)}>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">{title}</p>
              {isOpen ? <X className="h-3 w-3" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {isOpen && (
              <div className="flex flex-col gap-4">
                {isLoading && <Loading />}
                {!isLoading && roadmap?.items?.filter((x) => x.roadmapPhase === phase).map((issue) => <RoadmapItem item={issue} key={issue.id} />)}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
