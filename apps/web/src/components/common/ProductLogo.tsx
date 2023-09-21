import { useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { GetProductInfo, GetProductLogoByVariant, Product, Type, Variant } from '../../lib/assets';

export type ProductLogoProps = {
  product: Product;
  alt?: string;
  width?: number;
  height?: number;
};

const ProductLogo = ({ product, alt, width, height }: ProductLogoProps): JSX.Element => {
  const darkProductLogo = GetProductLogoByVariant(product, Variant.Dark, Type.Full);
  const lightProductLogo = GetProductLogoByVariant(product, Variant.Light, Type.Full);
  const url = useColorModeValue(lightProductLogo, darkProductLogo);
  const info = GetProductInfo(product);

  return <Image src={url} alt={alt ? alt : `${info.name} logo`} width={width} height={height} />;
};

ProductLogo.defaultProps = {
  alt: '',
  className: '',
};

export default ProductLogo;
