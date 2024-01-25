import { HStack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import SitecoreProduct from 'sc-changelog/types/sitecoreProduct';
import { getSlug } from 'sc-changelog/utils/stringUtils';

type ProductIconProps = {
  product: SitecoreProduct;
  isPreview: boolean;
};

export const ProductIcon = ({ product, isPreview }: ProductIconProps): JSX.Element => {
  return (
    <Tooltip label={`Go to the ${product.productName} changelog page`} aria-label="A tooltip">
      <Link href={`/changelog/${isPreview ? getSlug(product.productName) : product.productSlug}`}>
        <HStack>
          <Image src={useColorModeValue(product.lightIcon, product.darkIcon)} alt={product.productName} width={20} height={20} priority={true} />
          <Text>{product.productName}</Text>
        </HStack>
      </Link>
    </Tooltip>
  );
};
