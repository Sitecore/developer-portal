import { GetProductInfo, Product } from '@/../../packages/ui/common/assets';
import TextLink from '@/../../packages/ui/components/common/TextLink';
import Image from 'next/image';
import { useState } from 'react';

type HexagonItemProps = {
  product: Product;
  modalTitle: string;
  description: string;
  cloud: string;
  color: string;
  linkHref: string;
  linkText?: string;
  active?: boolean;
};

export const HexagonItem = ({ product, modalTitle, description, cloud, color, active = true, linkHref, linkText = 'Learn more' }: HexagonItemProps): JSX.Element | null => {
  const [showModal, setShowModal] = useState(false);
  const productInfo = GetProductInfo(product);

  return (
    <li className={`hex-grid__item hex-grid__item--${color} ${active ? 'active' : ''} ${showModal ? 'z-10' : ''} `} data-target={`#${cloud}`} onClick={() => setShowModal(!showModal)}>
      {showModal ? (
        <div className="hex-grid__modal dark:bg-theme-bg-alt visible">
          <Image className="hex-grid__modal__close" src="/images/modal-close.svg" alt="close" width="12" height="12" onClick={() => setShowModal(!showModal)} />

          <div className="hex-grid__modal__title">
            <Image src={productInfo.lightIcon} alt="Sitecore CDP" width="30" height="30" className="dark:hidden" />
            <Image src={productInfo.darkIcon} alt="Sitecore CDP" width="30" height="30" className="hidden dark:block" />
            <h3>{modalTitle}</h3>
          </div>
          <p className="hex-grid__modal__description">{description}</p>
          <TextLink text={linkText} href={linkHref} className="mobile__hex__item__link" />
        </div>
      ) : null}
      <div className="hex-grid__content">
        <Image className="hex-grid__content__icon" src={productInfo.darkIcon} alt={productInfo.name} width={30} height={30} />

        <h3 className="hex-grid__content__title">{productInfo.name}</h3>
      </div>
    </li>
  );
};
