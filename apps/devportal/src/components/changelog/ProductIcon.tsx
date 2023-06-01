import Image from 'next/image';
import Link from 'next/link';
import SitecoreProduct from 'sc-changelog/types/sitecoreProduct';
import { getSlug } from 'sc-changelog/utils/stringUtils';

type ProductIconProps = {
  product: SitecoreProduct;
  isLoading?: boolean;
};

const skeletonLoaderClasses = 'bg-theme-text-alt animate-pulse text-transparent hover:text-transparent';

export const ProductIcon = ({ product, isLoading }: ProductIconProps): JSX.Element => {
  return (
    <Link href={`/changelog/${getSlug(product.productName)}`} className="">
      <div className={` text-sm ${isLoading ? 'w-12' && skeletonLoaderClasses : ''} hover:underline`}>
        <div className="absolute h-5 w-5 dark:hidden ">
          <Image src={product.lightIcon} alt={product.productName} className={`${isLoading ? 'hidden' : ''} `} width={20} height={20} priority={true} />
        </div>
        <div className="absolute hidden h-5 w-5 dark:block">
          <Image src={product.darkIcon} alt={product.productName} className={`${isLoading ? 'hidden' : ''}`} width={20} height={20} priority={true} />
        </div>
        <div className="ml-6 text-xs">{product.productName}</div>
      </div>
    </Link>
  );
};
