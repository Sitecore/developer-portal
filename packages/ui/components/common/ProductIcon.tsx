import Image from 'next/image';
import { GetProductIcon } from '../../common/assets';

export type ProductLogoProps = {
  product: string;
  variant: string;
  alt?: string;
  className?: string;
};

const ProductIcon = ({ product, variant, alt, className }: ProductLogoProps): JSX.Element => {
  const productIcon = GetProductIcon(product, variant);

  return (
    <Image
      src={productIcon}
      alt={alt != null ? alt : ''}
      className={`${className}`}
      fill
      sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
      priority={true}
    />
  );
};

ProductIcon.defaultProps = {
  alt: '',
  className: '',
};

export default ProductIcon;
