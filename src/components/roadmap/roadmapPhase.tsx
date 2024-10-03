import { Option } from '@/src/components/ui/dropdown';
import { RoadmapInformation } from '@/src/lib/interfaces/jira';
import { Phase } from '@/src/lib/jira';
import { Box, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Loading } from '../ui';
import { RoadmapItem } from './roadmapItem';

interface RoadmapPhaseProps {
  issues?: RoadmapInformation;
  phase: Phase;
  selectedProducts?: Option[];
  title: string;
  color: string;
  isLoading: boolean;
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ issues, title, color, phase, isLoading }) => {
  return (
    <Box p={4} bg={color}>
      <Stack gap={4}>
        <Heading variant={'section'}>{title}</Heading>

        {isLoading && <Loading />}
        {!isLoading && issues?.items?.filter((x) => x.fields.customfield_15180.value == phase).map((issue, key) => <RoadmapItem issue={issue} key={key} />)}
      </Stack>
    </Box>
  );
};

export default RoadmapPhase;
