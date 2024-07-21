import { Box, Button, Center, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tooltip, useDisclosure } from '@chakra-ui/react';

type ImageModalProps = {
  src: string;
  title?: string;
  maxW?: string;
  disableModal?: boolean;
};

export const ImageModal = ({ src, title, maxW, disableModal }: ImageModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (disableModal) {
    return (
      <Box p={4} my="8" width={'fit-content'} shadow={'sm'} border={'1px'} borderColor={'chakra-border-color'} borderRadius={'lg'}>
        <Image src={src} alt={title || ''} maxW={maxW ?? 'full'} />
      </Box>
    );
  }

  return (
    <Box p={4} my="8" width={'fit-content'} shadow={'sm'} border={'1px'} borderColor={'chakra-border-color'} borderRadius={'lg'}>
      <Tooltip label={'Click to enlarge'} aria-label={'Click to enlarge'}>
        <Image src={src} alt={title || ''} onClick={onOpen} cursor={'zoom-in'} maxW={{ base: 'full', md: maxW ? maxW : 'full' }} />
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick size={'6xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image src={src} alt={title || ''} />
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="neutral" mr={3} onClick={onClose} variant={'outline'}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ImageModal;
