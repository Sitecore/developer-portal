import { CustomField, Issue } from '@/src/lib/interfaces/jira';
import { getBadgeColor } from '@/src/lib/jira';
import { Badge, Button, Card, CardBody, CardHeader, Divider, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, Wrap } from '@chakra-ui/react';
import { getStatusColor } from '../../lib/jira';

interface RoadmapItemProps {
  issue: Issue;
}

export const RoadmapItem = ({ issue }: RoadmapItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };
  return (
    <>
      <Card key={issue.id} variant={'outlineRaised'} size={'md'}>
        <CardHeader>
          <Heading size="sm" onClick={handleClick} cursor={'pointer'}>
            {issue.fields.summary}
          </Heading>
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
      <Modal size={'md'} onClose={onClose} isOpen={isOpen} key={issue.id} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{issue.fields.summary}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{issue.fields.customfield_15555}</Text>
            <Divider my={4} />

            <Stack>
              <Wrap>
                <Heading variant={'section'}>Roadmap Phase:</Heading> <Badge colorScheme={getBadgeColor(issue.fields.customfield_15180.value)}>{issue.fields.customfield_15180.value}</Badge>
              </Wrap>
              <Wrap>
                <Heading variant={'section'}>Status:</Heading> <Badge colorScheme={getStatusColor(issue.fields.status.name)}>{issue.fields.status.name}</Badge>
              </Wrap>
              <Wrap>
                <Heading variant={'section'}>Product(s):</Heading>
                {issue.fields.customfield_15258?.map((label: CustomField) => (
                  <Badge key={label.id} colorScheme={'gray'}>
                    {label.value}
                  </Badge>
                ))}
              </Wrap>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
