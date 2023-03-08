import Image from 'next/image';
import { GetProductLogo } from '../../common/assets';

export type ProductLogoProps = {
  product: string;
  variant: string;
  alt?: string;
  className?: string;
};

const ProductLogo = ({ product, variant, alt, className }: ProductLogoProps): JSX.Element => {
  const productImage = GetProductLogo(product, variant);

  return (
    <Image
      src={productImage}
      alt={alt != null ? alt : ''}
      className={`relative z-10 ${className}`}
      fill
      sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
      priority={true}
    />
  );
};

ProductLogo.defaultProps = {
  alt: '',
  className: '',
};

export default ProductLogo;
