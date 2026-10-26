'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { GetProductLogoByVariant, type Product, Type, Variant } from '../../../lib/assets';
export type ProductLogoProps = {
  product: Product;
  alt?: string;
  width?: string;
  height?: string;
  variant?: Variant;
  style?: string;
};

export function GetProductLogo(light: string, dark: string, theme?: string) {
  return theme === 'dark' ? dark : light;
}

export const ProductIcon = ({ product, width = '24px', height = '24px', alt = '', variant, ...rest }: ProductLogoProps) => {
  const { theme } = useTheme();
  let url: string | undefined;

  if (variant) {
    url = GetProductLogoByVariant(product, variant, Type.IconOnly);
  } else {
    const darkProductIcon = GetProductLogoByVariant(product, Variant.Dark, Type.IconOnly);
    const lightProductIcon = GetProductLogoByVariant(product, Variant.Light, Type.IconOnly);

    url = theme === 'dark' ? darkProductIcon : lightProductIcon;
  }

  return (
    <div className="relative" style={{ width, height }}>
      <Image src={url} alt={alt} fill {...rest} style={{ objectFit: 'contain' }} unoptimized />
    </div>
  );
};

export default ProductIcon;
