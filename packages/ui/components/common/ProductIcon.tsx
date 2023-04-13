import Image from 'next/image';
import { GetProductIcon } from '../../common/assets';

export type ProductLogoProps = {
  product: string;
  variant: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
};

const ProductIcon = ({ product, variant, alt, className, width, height }: ProductLogoProps): JSX.Element => {
  const productIcon = GetProductIcon(product, variant);

  return <Image src={productIcon} alt={alt != null ? alt : ''} className={`${className}`} width={width} height={height} priority={true} />;
};

ProductIcon.defaultProps = {
  alt: '',
  className: '',
};

export default ProductIcon;
