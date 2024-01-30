import { Button, CardProps, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { Product } from 'ui/lib/assets';
import ProductIcon from './ProductIcon';

type GuidedDemoProps = CardProps & {
  demoId: string;
  linkText?: string;
  productName: string;
  productLogo?: string;
};
export const GuidedDemo = ({ demoId, linkText, productName, productLogo, ...rest }: GuidedDemoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  var product: Product = Product[productLogo as keyof typeof Product];
  return (
    <>
      <Button onClick={onOpen}>{linkText ?? 'Launch guided tour'}</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex>
              {productLogo && <ProductIcon product={product} />}
              <Text>Guided Tour: {productName}</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe src={'https://capture.navattic.com/' + demoId} width="800" height="500"></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
