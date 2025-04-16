import { Option } from '@/src/components/ui/dropdown';
import { RoadmapInformation } from '@/src/lib/interfaces/jira';
import { Phase } from '@/src/lib/jira';
import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Collapse, Heading, HStack, Show, Stack, useDisclosure } from '@chakra-ui/react';
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

export const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ roadmap, title, color, phase, isLoading }: RoadmapPhaseProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box p={4} bg={color}>
      <Stack gap={4} hideBelow={'md'}>
        <Heading variant={'section'}>{title}</Heading>

        {isLoading && <Loading />}
        {!isLoading && roadmap?.items?.filter((x) => x.roadmapPhase == phase).map((issue, key) => <RoadmapItem item={issue} key={key} />)}
      </Stack>

      <Show below="md">
        <Stack gap={4}>
          <HStack justifyContent="space-between" alignItems="center" onClick={onToggle} cursor="pointer">
            <Heading variant={'section'}>{title}</Heading>
            {isOpen ? <CloseIcon w={3} h={3} /> : <ChevronDownIcon w={5} h={5} />}
          </HStack>

          <Collapse in={isOpen} animateOpacity>
            <Stack gap={4}>
              {isLoading && <Loading />}
              {!isLoading && roadmap?.items?.filter((x) => x.roadmapPhase == phase).map((issue, key) => <RoadmapItem item={issue} key={key} />)}
            </Stack>
          </Collapse>
        </Stack>
      </Show>
    </Box>
  );
};