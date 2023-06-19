import TextLink from '@/../../packages/ui/components/common/TextLink';
import Image from 'next/image';
import React from 'react';
import { CloudInfoType } from './HexagonTypes';

type HexagonCloudProps = {
  cloud: CloudInfoType;
  isOpen?: boolean;
  key: number;
  children: React.ReactNode | React.ReactNode[];
  onClick: () => void;
};

function resetElements(invert?: boolean) {
  const allElements = document.querySelectorAll('#hex-list > li');
  const allElementsArray = Array.from(allElements);

  if (invert) {
    allElementsArray?.forEach((e) => {
      e.classList.remove('active');
    });
  } else {
    allElementsArray?.forEach((e) => {
      e.classList.add('active');
    });
  }
}

function mouseOver(event: React.MouseEvent<HTMLLIElement>) {
  const value = (event.currentTarget as HTMLElement).getAttribute('data-target');

  const elements = document.querySelectorAll(`#hex-list > [data-target="${value}"]`);
  const elementsArray = Array.from(elements);
  resetElements(true);
  elementsArray.forEach((el) => {
    el.classList.toggle('active');
  });
}

export const HexagonCloud = ({ cloud, isOpen, children, onClick }: HexagonCloudProps): JSX.Element | null => {
  return (
    <li
      className={`hex-grid__tab dark:from-whiteAlpha-500 dark:to-whiteAlpha-700 hex-grid__tab--violet active transition-transform	delay-200 dark:bg-gradient-to-r ${isOpen ? 'expanded' : ''}`}
      data-target={`#${cloud.id}`}
      onMouseOver={(e) => mouseOver(e)}
      onMouseOut={() => resetElements()}
      onClick={onClick}
    >
      <div className="hex-grid__tab__top">
        <Image className="hex-grid__tab__icon" src={cloud.logoUrl} alt={cloud.name} width={35} height={25} />
        <span className="hex-grid__tab__title">{cloud.name}</span>
        <Image className="hex-grid__tab__plus" src="/images/modal-close.svg" alt="open" width={11} height={11} />
      </div>
      <div id="content-cloud" className={`hex-grid__tab__expand ${isOpen ? 'block' : ''} transition ease-in-out	`}>
        <p>{cloud.description}</p>
        {!!cloud.linkHref && !!cloud.linkText && <TextLink href={cloud.linkHref} text={cloud.linkText} className="dark:text-blackAlpha-900 ml-1 text-xs" />}
        {children}
      </div>
    </li>
  );
};
