import { GetProductInfo } from '@/../../packages/ui/common/assets';
import { Box, Heading, ListItem, ListItemProps, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { ButtonLink } from '../ui/ButtonLink';
import { ProductInfoType } from './HexagonTypes';
import styles from './Hexagons.module.css';

type HexagonItemProps = ListItemProps & {
  product?: ProductInfoType;
  active?: boolean;
};

export const HexagonItem = ({ product, active = true }: HexagonItemProps): JSX.Element | null => {
  if (product == null) return <ListItem listStyleType={'none'} className={`${styles.hexGridItem} ${styles.transparent}`}></ListItem>;

  const productInfo = GetProductInfo(product.product);

  const getStyle = (color: string) => {
    if (color == 'red') return styles.hexGridItemContent_red;
    if (color == 'violet') return styles.hexGridItemContent_violet;
    if (color == 'teal') return styles.hexGridItemContent_teal;
  };

  return (
    <Popover placement="top-start" autoFocus={false} closeOnBlur={true} trigger="hover">
      <PopoverTrigger>
        <ListItem listStyleType={'none'} className={`${styles.hexGridItem}   ${active ? styles.hexListItemActive : ''} `} data-target={`#${product.cloud}`}>
          <Box className={`${styles.hexGridContent} ${getStyle(product.color)}`}>
            <Image className={styles.hexGrid__content__icon} src={productInfo.darkIcon} alt={productInfo.name} width={30} height={30} />

            <Heading as="h3" color={'white'} size={'sm'} maxW={'65%'}>
              {productInfo.name}
            </Heading>
          </Box>
        </ListItem>
      </PopoverTrigger>
      <PopoverContent zIndex={'99999'} position={'absolute'}>
        <Box className={styles.hexgrid__modal} position={'absolute'} background={'white'} display={'block'} width={'320px'} height={'auto'}>
          <PopoverCloseButton />
          <PopoverHeader>
            <Box className={styles.hexgrid__modal__title}>
              <Image src={useColorModeValue(productInfo.lightIcon, productInfo.darkIcon)} alt="Sitecore CDP" width="30" height="30" />
              <Heading as="h3">{product.subTitle}</Heading>
            </Box>
          </PopoverHeader>
          <PopoverBody>
            <p className="hex-grid__modal__description">{product.description}</p>
            <ButtonLink text={product.linkText} href={product.linkHref} className="mobile__hex__item__link" />
          </PopoverBody>
        </Box>
      </PopoverContent>
    </Popover>
  );
};
