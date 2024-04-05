import { Flex, Heading, ListItem, ListItemProps, Text } from '@chakra-ui/react';
import ProductIcon from '../common/ProductIcon';
import { ButtonLink } from '../links/ButtonLink';
import { ProductInfoType } from './HexagonTypes';
import styles from './Hexagons.module.css';

type HexagonMobileItemProps = ListItemProps & {
  product: ProductInfoType;
};
//styles.mobileHexItem--${product.color}

const getStyle = (color: string) => {
  if (color == 'red') return styles.mobileHexItem_red;
  if (color == 'violet') return styles.mobileHexItem_violet;
  if (color == 'teal') return styles.mobileHexItem_teal;
  return '';
};

export const HexagonMobileItem = ({ product }: HexagonMobileItemProps): JSX.Element | null => {
  return (
    <ListItem className={`${styles.mobileHexItem} ${getStyle(product.color)}`} listStyleType={'none'}>
      <Flex justifyContent={'start'}>
        <ProductIcon product={product.type} />
        <Heading as="h3" pl={2} mt={1} size={'md'}>
          {product.name}
        </Heading>
      </Flex>
      <Text my={2}>{product.description}</Text>
      <ButtonLink text={product.name} href={product.linkHref} title={`${product.name} product page`} />
    </ListItem>
  );
};
