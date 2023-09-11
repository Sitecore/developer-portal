import { useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { GetProductLogoByVariant, Product, Type, Variant } from '../../lib/assets';
export type ProductLogoProps = {
  product: Product;
  alt?: string;
  width?: number;
  height?: number;
};

const ProductIcon = ({ product, width = 10, height = 10, alt, ...rest }: ProductLogoProps): JSX.Element => {
  const darkProductIcon = GetProductLogoByVariant(product, Variant.Dark, Type.IconOnly);
  const lightProductIcon = GetProductLogoByVariant(product, Variant.Light, Type.IconOnly);

  return <Image src={useColorModeValue(lightProductIcon, darkProductIcon)} alt={alt != null ? alt : ''} width={width} height={height} {...rest} style={{ display: 'inline' }} />;
};

ProductIcon.defaultProps = {
  alt: '',
  className: '',
};

export default ProductIcon;
