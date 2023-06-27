import { GetProductInfo } from '@/../../packages/ui/common/assets';
import Image from 'next/image';
import Button from '../buttons/Button';
import { ProductInfoType } from './HexagonTypes';

type HexagonItemProps = {
  product?: ProductInfoType;
  active?: boolean;
  showModal?: boolean;
  onClick?: () => void;
};

export const HexagonItem = ({ product, active = true, showModal = false, onClick }: HexagonItemProps): JSX.Element | null => {
  if (product == null) return <li className="hex-grid__item transparent"></li>;

  const productInfo = GetProductInfo(product.product);

  return (
    <li className={`hex-grid__item hex-grid__item--${product.color} ${active ? 'active' : ''} ${showModal ? 'z-10' : ''} `} data-target={`#${product.cloud}`} onClick={onClick}>
      {showModal ? (
        <div className="hex-grid__modal dark:bg-theme-bg-alt visible">
          <Image className="hex-grid__modal__close" src="/images/modal-close.svg" alt="close" width="12" height="12" onClick={onClick} />

          <div className="hex-grid__modal__title">
            <Image src={productInfo.lightIcon} alt="Sitecore CDP" width="30" height="30" className="dark:hidden" />
            <Image src={productInfo.darkIcon} alt="Sitecore CDP" width="30" height="30" className="hidden dark:block" />
            <h3>{product.subTitle}</h3>
          </div>
          <p className="hex-grid__modal__description">{product.description}</p>
          <Button variant="text" text={product.linkText} href={product.linkHref} icon={true} className="mobile__hex__item__link" />
        </div>
      ) : null}
      <div className="hex-grid__content">
        <Image className="hex-grid__content__icon" src={productInfo.darkIcon} alt={productInfo.name} width={30} height={30} />

        <h3 className="hex-grid__content__title">{productInfo.name}</h3>
      </div>
    </li>
  );
};
