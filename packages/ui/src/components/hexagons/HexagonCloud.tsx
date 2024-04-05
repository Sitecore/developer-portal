'use client';
import { Box, ListItem, ListItemProps, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { CloudInfoType } from './HexagonTypes';
import styles from './Hexagons.module.css';
import { ButtonLink } from '../links/ButtonLink';
import ProductIcon from '../common/ProductIcon';

type HexagonCloudProps = ListItemProps & {
  cloud: CloudInfoType;
  isOpen?: boolean;
  key: number;
  children: React.ReactNode | React.ReactNode[];
  onClick: () => void;
};

function resetElements(invert?: boolean) {
  const allElements = document.querySelectorAll('#hexList > li');
  const allElementsArray = Array.from(allElements);

  if (invert) {
    allElementsArray?.forEach((e) => {
      e.classList.remove(styles.hexListItemActive);
    });
  } else {
    allElementsArray?.forEach((e) => {
      e.classList.add(styles.hexListItemActive);
    });
  }
}

function mouseOver(event: React.MouseEvent<HTMLLIElement>) {
  const value = (event.currentTarget as HTMLElement).getAttribute('data-target');

  const elements = document.querySelectorAll(`#hexList > [data-target="${value}"]`);
  const elementsArray = Array.from(elements);
  resetElements(true);
  elementsArray.forEach((el) => {
    el.classList.toggle(styles.hexListItemActive);
  });
}

export const HexagonCloud = ({ cloud, isOpen, children, onClick }: HexagonCloudProps): JSX.Element | null => {
  return (
    <ListItem
      className={`${styles.hexGridTab} dark:from-whiteAlpha-500 dark:to-whiteAlpha-700 ${styles.hexGridTab_violet} ${styles.active} transition-transform delay-200 dark:bg-gradient-to-r ${isOpen ? styles.hexGridTabExpand : ''}`}
      data-target={`#${cloud.id}`}
      onMouseOver={(e) => mouseOver(e)}
      onMouseOut={() => resetElements()}
      onClick={onClick}
      backgroundColor={useColorModeValue('transparent', 'chakra-subtle-bg')}
      color={useColorModeValue('chakra-text', 'white')}
      listStyleType={'none'}
    >
      <Box className={styles.hexGridTabTop}>
        <ProductIcon product={cloud.type} width={'35px'} height={'25px'} />
        <span className={styles.hexGridTabTitle}>
          <Text ml={4}>{cloud.name}</Text>
        </span>
        <Image className={styles.hexGridTabPlus} src="/images/modal-close.svg" alt="open" width={11} height={11} />
      </Box>

      <Box id={cloud.id} className={`${styles.hexGridTabItemsMobile} ${isOpen ? styles.block : ''} transition ease-in-out	`}>
        <Text p={'0 15px 1rem'} fontSize={'md'}>
          {cloud.description}
          {!!cloud.linkHref && !!cloud.linkText && <ButtonLink href={cloud.linkHref} text={cloud.linkText} />}
        </Text>
        {children}
      </Box>
    </ListItem>
  );
};
