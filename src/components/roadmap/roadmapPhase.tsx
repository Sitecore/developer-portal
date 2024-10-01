import { Option } from '@/src/components/ui/dropdown';
import { CustomField, Issue } from '@/src/lib/interfaces/jira';
import { getBadgeColor, Phase } from '@/src/lib/jira';
import { Badge, Box, Card, CardBody, CardHeader, Heading, Stack, Wrap } from '@chakra-ui/react';
import React from 'react';
import { getStatusColor } from '../../lib/jira';

interface RoadmapPhaseProps {
  issues: Issue[];
  phase: Phase;
  productId?: Option[];
  title: string;
  color: string;
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ issues, title, color, phase, productId }) => {
  console.log(productId);
  return (
    <Box p={4} bg={color}>
      <Stack gap={4}>
        <Heading variant={'section'}>{title}</Heading>
        {issues
          .filter((x) => x.fields.customfield_15180.value == phase)
          .filter((x) => !productId || productId.length === 0 || x.fields.customfield_15258?.some((label: CustomField) => productId.some((option: Option) => option.value === label.id)))
          .map((issue) => (
            <Card key={issue.id} variant={'outlineRaised'} size={'md'}>
              <CardHeader>
                <Heading size="sm">{issue.fields.summary}</Heading>
              </CardHeader>
              <CardBody>
                <Wrap mb={4}>
                  {issue.fields.customfield_15258?.map((label: CustomField) => (
                    <Badge key={label.id} colorScheme={'gray'}>
                      {label.value}
                    </Badge>
                  ))}
                </Wrap>
                <Stack direction="row">
                  <Badge colorScheme={getBadgeColor(issue.fields.customfield_15180.value)}>{issue.fields.customfield_15180.value}</Badge>
                  <Badge colorScheme={getStatusColor(issue.fields.status.name)}>{issue.fields.status.name}</Badge>
                </Stack>
              </CardBody>
            </Card>
          ))}
      </Stack>
    </Box>
  );
};

export default RoadmapPhase;
