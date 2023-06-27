import Image from 'next/image';
import { GetProductLogoByVariant, Type, Variant } from 'ui/common/assets';
import { ProductInfoType } from 'ui/components/hexagons/HexagonTypes';
import Button from '../buttons/Button';

type HexagonMobileItemProps = {
  product: ProductInfoType;
};

export const HexagonMobileItem = ({ product }: HexagonMobileItemProps): JSX.Element | null => {
  return (
    <li className={`mobile__hex__item mobile__hex__item--${product.color}`}>
      <div className="flex">
        <Image src={GetProductLogoByVariant(product.product, Variant.Light, Type.IconOnly)} className=" dark:hidden" alt={`${product.name} icon`} width="30" height="30" />
        <Image src={GetProductLogoByVariant(product.product, Variant.Dark, Type.IconOnly)} className="hidden dark:block" alt={`${product.name} icon`} width="30" height="30" />

        <h3 className="pl-2 font-semibold">{product.name}</h3>
      </div>
      <p className="mobile__hex__item__description">{product.description}</p>
      <Button variant="text" text={product.linkText} href={product.linkHref} icon={true} />
    </li>
  );
};
