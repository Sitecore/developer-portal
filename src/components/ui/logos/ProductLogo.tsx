'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { GetProductInfo, GetProductLogoByVariant, Product, Type, Variant } from '@/src/lib/assets';

export type ProductLogoProps = {
  product: Product;
  alt?: string;
  width?: number;
  height?: number;
};

export const ProductLogo = ({ product, alt, width, height }: ProductLogoProps) => {
  const { theme } = useTheme();
  const darkProductLogo = GetProductLogoByVariant(product, Variant.Dark, Type.Full);
  const lightProductLogo = GetProductLogoByVariant(product, Variant.Light, Type.Full);
  const url = theme === 'dark' ? darkProductLogo : lightProductLogo;
  const info = GetProductInfo(product);

  return <Image src={url} alt={alt ? alt : `${info.name} logo`} width={width} height={height} />;
};

export default ProductLogo;
