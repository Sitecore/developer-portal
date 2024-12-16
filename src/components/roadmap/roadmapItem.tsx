import { getBadgeColor } from '@/src/lib/jira';
import { IRoadmapItem, RoadmapProduct } from '@/src/lib/roadmap';
import { getQueryValue, slugify } from '@/src/lib/utils';
import { Badge, Box, Card, CardBody, CardHeader, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Heading, HStack, Stack, Tooltip, useDisclosure, Wrap } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { excludedProducts, getStatusColor } from '../../lib/jira';
import { LinkedHeading } from '../links/LinkedHeading';
import { ImageModal } from '../ui/imageModal';

interface RoadmapItemProps {
  item: IRoadmapItem;
}

export const RoadmapItem: React.FC<RoadmapItemProps> = ({ item }: RoadmapItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { details } = router.query;
  const selectedItem = getQueryValue(details);
  const images: string[] = item.attachments?.map((attachment) => attachment.url) || [];

  useEffect(() => {
    if (selectedItem.toLowerCase() === item.key.toLowerCase()) {
      onOpen();
    }
  }, [selectedItem, item.key, onOpen]);

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
        <CardBody hideBelow={'sm'}>
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
      <Drawer onClose={onClose} isOpen={isOpen} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader as={HStack}>
            <LinkedHeading id={slugify(item.key)}>{item.title}</LinkedHeading>
          </DrawerHeader>
          <DrawerBody>
            <Stack p={4} border="1px solid" borderRadius={'md'} borderColor={'chakra-border-color'}>
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
                    <Link href={`/roadmap/${slugify(label.name)}`}>{label.name}</Link>
                  </Badge>
                ))}
              </Wrap>
            </Stack>

            <Prose margin={0} my={4} padding={0} dangerouslySetInnerHTML={{ __html: item.description }} />
          </DrawerBody>
          {item.attachments.length > 0 && (
            <DrawerFooter>
              <Stack>
                <Divider />
                <Heading mb={1} variant={'section'}>
                  Attachments:
                </Heading>
                <HStack h={'100px'}>
                  {images.map((url, index) => (
                    <Box width={'20%'} key={index}>
                      <ImageModal key={index} src={url} disableModal={false} border="none" />
                    </Box>
                  ))}
                </HStack>
              </Stack>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
