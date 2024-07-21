import { Box, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { GetProductLogoByVariant, Product, Type, Variant } from '../../lib/assets';
export type ProductLogoProps = {
  product: Product;
  alt?: string;
  width?: string;
  height?: string;
  variant?: Variant;
  style?: string;
};

export const ProductIcon = ({ product, width = '24px', height = '24px', alt, variant, ...rest }: ProductLogoProps): JSX.Element => {
  let url;

  if (variant) {
    url = GetProductLogoByVariant(product, variant, Type.IconOnly);
  } else {
    const darkProductIcon = GetProductLogoByVariant(product, Variant.Dark, Type.IconOnly);
    const lightProductIcon = GetProductLogoByVariant(product, Variant.Light, Type.IconOnly);
    url = useColorModeValue(lightProductIcon, darkProductIcon);
  }
  return (
    <Box width={width} height={height} position={'relative'}>
      <Image src={url} alt={alt != null ? alt : ''} fill {...rest} style={{ objectFit: 'contain' }} sizes="(min-width: 5em) 5vw, (min-width: 44em) 20vw, 33vw" />
    </Box>
  );
};

ProductIcon.defaultProps = {
  alt: '',
  className: '',
};

export default ProductIcon;
