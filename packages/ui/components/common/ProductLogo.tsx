import Image from 'next/image';
import { GetProductLogo } from '../../common/assets';
export type ProductLogoProps = {
  product: string;
  variant: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
};

const ProductLogo = ({ product, variant, alt, className, width, height }: ProductLogoProps): JSX.Element => {
  const productImage = GetProductLogo(product, variant);

  //return <img src={productImage} alt={alt != null ? alt : ''} width={width} height={height} />;

  return <Image src={productImage} alt={alt != null ? alt : ''} className={`relative z-10 ${className}`} fill={width && height ? false : true} priority={true} width={width} height={height} />;
};

ProductLogo.defaultProps = {
  alt: '',
  className: '',
};

export default ProductLogo;
