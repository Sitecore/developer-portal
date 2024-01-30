import { Button, CardProps, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';

type GuidedDemoProps = CardProps & {
  link: string;
  linkText?: string;
};
export const GuidedDemo = ({ link, linkText, ...rest }: GuidedDemoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Guided Tour: Product Name Here</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe src={link} width="800" height="500"></iframe>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
