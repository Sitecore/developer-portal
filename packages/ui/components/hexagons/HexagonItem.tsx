import { Box, Heading, ListItem, ListItemProps, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react';
import { GetProductInfo, Variant } from '../../lib/assets';
import ProductIcon from '../common/ProductIcon';
import { ButtonLink } from '../links/ButtonLink';
import { ProductInfoType } from './HexagonTypes';
import styles from './Hexagons.module.css';

type HexagonItemProps = ListItemProps & {
  product?: ProductInfoType;
  active?: boolean;
};

export const HexagonItem = ({ product, active = true }: HexagonItemProps): JSX.Element | null => {
  if (product == null) return <ListItem listStyleType={'none'} className={`${styles.hexGridItem} ${styles.transparent}`}></ListItem>;

  const productInfo = GetProductInfo(product.type);

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
            <ProductIcon product={product.type} variant={Variant.Dark} />
            <Heading as="h3" color={'white'} size={'sm'} maxW={'65%'}>
              {productInfo.name}
            </Heading>
          </Box>
        </ListItem>
      </PopoverTrigger>
      <PopoverContent zIndex={'99999'} position={'absolute'} background={'none'} border={0}>
        <Box className={styles.hexgrid__modal} position={'absolute'} background={'chakra-subtle-bg'} display={'block'} width={'320px'} height={'auto'}>
          <PopoverCloseButton />
          <PopoverHeader>
            <Box className={styles.hexgrid__modal__title}>
              <ProductIcon product={product.type} alt={product.name} />
              <Heading as="h3">{product.subTitle}</Heading>
            </Box>
          </PopoverHeader>
          <PopoverBody>
            <Text>{product.description}</Text>
            <ButtonLink text={product.name} href={product.linkHref} title={`${product.name} product page`} className="mobile__hex__item__link" />
          </PopoverBody>
        </Box>
      </PopoverContent>
    </Popover>
  );
};
