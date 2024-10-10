import { Option } from '@/src/components/ui/dropdown';
import { RoadmapInformation } from '@/src/lib/interfaces/jira';
import { Phase } from '@/src/lib/jira';
import { Box, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Loading } from '../ui';
import { RoadmapItem } from './roadmapItem';

interface RoadmapPhaseProps {
  roadmap?: RoadmapInformation;
  phase: Phase;
  selectedProducts?: Option[];
  title: string;
  color: string;
  isLoading: boolean;
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ roadmap, title, color, phase, isLoading }) => {
  return (
    <Box p={4} bg={color}>
      <Stack gap={4}>
        <Heading variant={'section'}>{title}</Heading>

        {isLoading && <Loading />}
        {!isLoading && roadmap?.items?.filter((x) => x.roadmapPhase == phase).map((issue, key) => <RoadmapItem item={issue} key={key} />)}
      </Stack>
    </Box>
  );
};

export default RoadmapPhase;
