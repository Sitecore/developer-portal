import { GetProductLogo } from '@/src/common/assets';
import { classnames, TTailwindString } from '@/src/common/types/tailwindcss-classnames';
import Image from 'next/legacy/image';

export type ProductLogoProps = {
  product: string;
  variant: string;
  alt?: string;
  className?: TTailwindString;
};

const ProductLogo = ({ product, variant, alt, className }: ProductLogoProps): JSX.Element => {
  const productImage = GetProductLogo(product, variant);

  return (
    <Image
      src={productImage}
      alt={alt != null ? alt : ''}
      className={classnames('relative', 'z-10', className)}
      layout="fill"
      objectFit="fill"
      priority={true}
    />
  );
};

export default ProductLogo;
