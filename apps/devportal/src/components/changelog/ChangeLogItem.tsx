import { Button, Card, CardBody, CardFooter, CardHeader, Center, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
//import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ChangelogEntry } from '@scdp/changelog/types';
import { getSlug } from '@scdp/changelog/utils';
import { getChangelogEntryUrl } from '@scdp/changelog/utils';

import { Loading, ButtonLink, SocialShare } from '@scdp/ui/components';
import { ChangelogItemMeta } from './ChangelogItemMeta';

export type ChangeLogItemProps = {
  item: ChangelogEntry;
  loading: boolean;
  isLast: boolean;
  isMore?: boolean;
  loadEntries: () => void;
};

const ChangeLogItem = ({ item, loading, loadEntries, isLast, isMore }: ChangeLogItemProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const entryRef = useRef(null);

  useEffect(() => {
    if (!entryRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting && isMore) {
        loadEntries();
        observer.unobserve(entry.target);
      }
    });

    observer.observe(entryRef.current);
  }, [isLast]);

  return (
    <>
      <Card ref={entryRef} variant={'unstyled'} mt={2} mb={8}>
        <CardHeader pb={4}>
          <Heading as="h2" fontSize={'1.25rem'} id={getSlug(item.title)} mb={4}>
            <Link href={getChangelogEntryUrl(item)} title={item.title}>
              {item.title}
            </Link>
          </Heading>
          <ChangelogItemMeta item={item} loading={loading} />
        </CardHeader>
        <CardBody py={0}>
          {item.image.length > 0 && (
            <>
              <Image src={`${item.image[0].fileUrl}`} alt={item.title || ''} borderRadius={'lg'} onClick={onOpen} cursor={'zoom-in'} mb={4} maxW={'full'} />

              <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick size={'6xl'}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{item.title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Center>
                      <Image src={`${item.image[0].fileUrl}`} alt={item.title || ''} />
                    </Center>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="neutral" mr={3} onClick={onClose} variant={'outline'}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
          )}
          <Prose margin={0} padding={0} dangerouslySetInnerHTML={{ __html: item.description }} />
        </CardBody>
        <CardFooter justifyContent={item.readMoreLink ? 'space-between' : 'flex-end'}>
          {item.readMoreLink && <ButtonLink variant="text" href={item.readMoreLink} text="Read more" title={`Read more about ${item.title}`} margin={0} padding={0} />}
          <SocialShare url={getChangelogEntryUrl(item, true)} title={item.title} />
        </CardFooter>
      </Card>

      {isLast && isMore && <Loading />}
    </>
  );
};

export default ChangeLogItem;
