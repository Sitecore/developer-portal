import { getBadgeColor } from '@/src/lib/jira';
import { IRoadmapItem, RoadmapProduct } from '@/src/lib/roadmap';
import { Badge, Button, Card, CardBody, CardHeader, Divider, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, Wrap } from '@chakra-ui/react';
import { getStatusColor } from '../../lib/jira';

interface RoadmapItemProps {
  item: IRoadmapItem;
}

export const RoadmapItem = ({ item }: RoadmapItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };
  return (
    <>
      <Card variant={'outlineRaised'} size={'md'}>
        <CardHeader>
          <Heading size="sm" onClick={handleClick} cursor={'pointer'}>
            {item.title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Wrap mb={4}>
            {item.product?.map((label: RoadmapProduct) => (
              <Badge key={label.id} colorScheme={'gray'}>
                {label.name}
              </Badge>
            ))}
          </Wrap>
          <Stack direction="row">
            <Badge colorScheme={getBadgeColor(item.roadmapPhase)}>{item.roadmapPhase}</Badge>
            <Badge colorScheme={getStatusColor(item.status)}>{item.status}</Badge>
          </Stack>
        </CardBody>
      </Card>
      <Modal size={'xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item.description}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{item.title}</Text>
            <Divider my={4} />

            {item.attachments.length > 0 && <Image src={`${item.attachments[0].content}`} alt={item.attachments[0].filename || ''} borderRadius={'lg'} onClick={onOpen} cursor={'zoom-in'} mb={4} maxW={'full'} />}

            <Stack>
              <Wrap>
                <Heading variant={'section'}>Roadmap Phase:</Heading> <Badge colorScheme={getBadgeColor(item.roadmapPhase)}>{item.roadmapPhase}</Badge>
              </Wrap>
              <Wrap>
                <Heading variant={'section'}>Status:</Heading> <Badge colorScheme={getStatusColor(item.status)}>{item.status}</Badge>
              </Wrap>
              <Wrap>
                <Heading variant={'section'}>Product(s):</Heading>
                {item.product?.map((label: RoadmapProduct) => (
                  <Badge key={label.id} colorScheme={'gray'}>
                    {label.name}
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
