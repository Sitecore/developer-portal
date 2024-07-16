import { AspectRatio, Button, CardProps, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { Product, Variant } from '../../lib/assets';
import ProductIcon from './ProductIcon';

type GuidedDemoProps = CardProps & {
  demoId: string;
  linkText?: string;
  productName: string;
  productLogo?: string;
};
export const GuidedDemo = ({ demoId, linkText, productName, productLogo }: GuidedDemoProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const product: Product = Product[productLogo as keyof typeof Product];
  return (
    <>
      <Button onClick={onOpen}>{linkText ?? 'Launch guided tour'}</Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="8xl">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent background={'transparent'} shadow={'lg'}>
          <ModalHeader background={useColorModeValue('primary.600', 'gray.700')} textColor={'white'} roundedTop={'3xl'} boxShadow={'lg'}>
            <Flex>
              {productLogo && <ProductIcon product={product} variant={Variant.Dark} />}
              <Text marginLeft={2}>Guided tour: {productName}</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton color={'white'} />
          <ModalBody padding={0} background={'chakra-body-bg'}>
            <AspectRatio maxW="full" ratio={4 / 3}>
              <iframe src={'https://capture.navattic.com/' + demoId}></iframe>
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
