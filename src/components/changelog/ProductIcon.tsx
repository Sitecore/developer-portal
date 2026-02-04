import { HStack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { SitecoreProduct } from '@lib/changelog/types';
import { getSlug } from '@lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type ProductIconProps = {
  product: SitecoreProduct;
};



export const ProductIcon = ({ product }: ProductIconProps) => {
  try {
    return (
      <Tooltip label={`Go to the ${product.productName} changelog page`} aria-label="A tooltip">
        <Link href={`/changelog/${getSlug(product.productName)}`}>
          <HStack>
            <Image src={useColorModeValue(product.lightIcon, product.darkIcon)} alt={product.productName} width={20} height={20} priority={true} />
            <Text>{product.productName}</Text>
          </HStack>
        </Link>
      </Tooltip>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};
