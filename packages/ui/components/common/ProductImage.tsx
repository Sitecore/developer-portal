import React from 'react';
import ProductLogo from './ProductLogo';

export type ProductImageProps = {
  productLogo: string;
  className?: string;
};

const ProductImage = ({ productLogo, className }: ProductImageProps): JSX.Element => (
  <React.Fragment>
    <div className="relative hidden md:col-span-4 md:block">
      <div className={`hidden h-16 w-full dark:block ${className != undefined ? className : ''}`}>
        <ProductLogo product={productLogo} variant="Dark" className="h-16" />
      </div>
      <div className={`h-16 w-full dark:hidden ${className}`}>
        <ProductLogo product={productLogo} variant="Light" className="h-16" />
      </div>
    </div>
  </React.Fragment>
);

export default ProductImage;
