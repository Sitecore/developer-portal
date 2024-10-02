import { Option } from '@/src/components/ui/dropdown';
import { CustomField, Issue } from '@/src/lib/interfaces/jira';
import { Phase } from '@/src/lib/jira';
import { Box, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { RoadmapItem } from './roadmapItem';

interface RoadmapPhaseProps {
  issues: Issue[];
  phase: Phase;
  productId?: Option[];
  title: string;
  color: string;
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ issues, title, color, phase, productId }) => {
  return (
    <Box p={4} bg={color}>
      <Stack gap={4}>
        <Heading variant={'section'}>{title}</Heading>
        {issues
          .filter((x) => x.fields.customfield_15180.value == phase)
          .filter((x) => !productId || productId.length === 0 || x.fields.customfield_15258?.some((label: CustomField) => productId.some((option: Option) => option.value === label.id)))
          .map((issue, key) => (
            <RoadmapItem issue={issue} key={key} />
          ))}
      </Stack>
    </Box>
  );
};

export default RoadmapPhase;
