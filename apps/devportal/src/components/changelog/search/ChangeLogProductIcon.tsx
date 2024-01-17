import { HStack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import SitecoreProduct from 'sc-changelog/types/sitecoreProduct';

type ProductIconProps = {
  product: SitecoreProduct;
};

export const ChangeLogProductIcon = ({ product }: ProductIconProps): JSX.Element => {
  return (
    <Tooltip label={`Go to the ${product.productName} changelog page`} aria-label="A tooltip">
      <Link href={`/changelog/${product.productName}`}>
        <HStack>
          <Image src={useColorModeValue(product.lightIcon, product.darkIcon)} alt={product.productName} width={20} height={20} priority={true} />
          <Text>{product.productName}</Text>
        </HStack>
      </Link>
    </Tooltip>
  );
};
