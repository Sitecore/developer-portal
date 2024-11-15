import { getBadgeColor } from '@/src/lib/jira';
import { IRoadmapItem, RoadmapProduct } from '@/src/lib/roadmap';
import { slugify } from '@/src/lib/utils';
import { Badge, Button, Card, CardBody, CardHeader, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, Tooltip, useDisclosure, Wrap } from '@chakra-ui/react';
import Link from 'next/link';
import { excludedProducts, getStatusColor } from '../../lib/jira';
import Carousel from '../ui/carousel/carousel';

interface RoadmapItemProps {
  item: IRoadmapItem;
}

export const RoadmapItem: React.FC<RoadmapItemProps> = ({ item }: RoadmapItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const images: string[] = item.attachments?.map((attachment) => attachment.url) || [];

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
                {excludedProducts.includes(label.name) ? (
                  label.name
                ) : (
                  <Tooltip label={`Go to the roadmap page for ${label.name}`}>
                    <Link href={`/roadmap/${slugify(label.name)}`}>{label.name}</Link>
                  </Tooltip>
                )}
              </Badge>
            ))}
          </Wrap>
        </CardBody>
      </Card>
      <Modal size={'xl'} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size={'md'}>{item.title}</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack p={4} border="1px solid" borderRadius={'md'} borderColor={'chakra-border-color'}>
              <HStack>
                <Wrap>
                  <Heading variant={'section'}>Roadmap Phase:</Heading> <Badge colorScheme={getBadgeColor(item.roadmapPhase)}>{item.roadmapPhase}</Badge>
                </Wrap>
                <Wrap>
                  <Heading variant={'section'}>Status:</Heading> <Badge colorScheme={getStatusColor(item.status)}>{item.status}</Badge>
                </Wrap>
              </HStack>
              <Wrap>
                <Heading variant={'section'}>Product(s):</Heading>
                {item.product?.map((label: RoadmapProduct) => (
                  <Badge key={label.id} colorScheme={'gray'}>
                    <Link href={`/roadmap/${slugify(label.name)}`}>{label.name}</Link>
                  </Badge>
                ))}
              </Wrap>
            </Stack>

            <Text py={4}>{item.description}</Text>

            {item.attachments.length > 0 && <Carousel images={images} />}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
