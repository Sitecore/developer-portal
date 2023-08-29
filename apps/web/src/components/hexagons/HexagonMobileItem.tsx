import { Flex, Heading, ListItem, ListItemProps, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { GetProductLogoByVariant, Type, Variant } from 'ui/common/assets';
import { ProductInfoType } from 'ui/components/hexagons/HexagonTypes';
import { ButtonLink } from '../ui/ButtonLink';
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
        <Image src={GetProductLogoByVariant(product.product, useColorModeValue(Variant.Light, Variant.Dark), Type.IconOnly)} alt={`${product.name} icon`} width="30" height="30" />
        <Heading as="h3" pl={2} mt={1} size={'md'}>
          {product.name}
        </Heading>
      </Flex>
      <Text my={2}>{product.description}</Text>
      <ButtonLink text={product.linkText} href={product.linkHref} />
    </ListItem>
  );
};
