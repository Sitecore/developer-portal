import { HStack, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import SitecoreProduct from 'sc-changelog/types/sitecoreProduct';
import { getSlug } from 'sc-changelog/utils/stringUtils';

type ProductIconProps = {
  product: SitecoreProduct;
  isLoading?: boolean;
};

const skeletonLoaderClasses = 'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent';

export const ProductIcon = ({ product, isLoading }: ProductIconProps): JSX.Element => {
  return (
    <Link href={`/changelog/${getSlug(product.productName)}`} className="">
      <HStack>
        <Image src={useColorModeValue(product.lightIcon, product.darkIcon)} alt={product.productName} width={20} height={20} priority={true} />
        <Text>{product.productName}</Text>
      </HStack>
    </Link>
  );
};
