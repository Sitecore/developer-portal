import { Button, CardProps, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
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
      <Button onClick={onOpen}>{linkText ?? 'Launch Guided Tour'}</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {productLogo && <ProductIcon product={product} />}
            Guided Tour: {productName}
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
