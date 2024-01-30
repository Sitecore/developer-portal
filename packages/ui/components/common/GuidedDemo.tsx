import { Button, CardProps, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { Product } from 'ui/lib/assets';
import ProductIcon from './ProductIcon';

type GuidedDemoProps = CardProps & {
  link: string;
  productName: string;
  productLogo?: string;
};
export const GuidedDemo = ({ link, productName, productLogo, ...rest }: GuidedDemoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  var product: Product = Product[productLogo as keyof typeof Product];
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {productLogo && <ProductIcon product={product} />}
            Guided Tour: {productName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe src={link} width="800" height="500"></iframe>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
