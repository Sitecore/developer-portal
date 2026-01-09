'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { Option } from '@/src/components/ui/dropdown';
import { RoadmapInformation } from '@/src/lib/interfaces/jira';
import { Phase } from '@/src/lib/jira';
import { Loading } from '../ui';
import { RoadmapItem } from './roadmapItem';
import { cn } from '@lib/utils';

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
    <div className="p-4" style={{ backgroundColor: color }}>
      <div className="flex flex-col gap-4 hidden md:flex">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">{title}</p>

        {isLoading && <Loading />}
        {!isLoading && roadmap?.items?.filter((x) => x.roadmapPhase == phase).map((issue, key) => <RoadmapItem item={issue} key={key} />)}
      </div>

      <div className="md:hidden">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <p className="text-sm uppercase tracking-wide text-muted-foreground">{title}</p>
            {isOpen ? <X className="h-3 w-3" /> : <ChevronDown className="h-5 w-5" />}
          </div>

          {isOpen && (
            <div className="flex flex-col gap-4">
              {isLoading && <Loading />}
              {!isLoading && roadmap?.items?.filter((x) => x.roadmapPhase == phase).map((issue, key) => <RoadmapItem item={issue} key={key} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};