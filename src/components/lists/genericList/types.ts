import { CardProps, IconProps } from '@chakra-ui/react';
import { ComponentType } from 'react';


export type GenericListData = CardProps & {
  title: string;
  subtitle: string;
  data: Array<GenericListItem>;
  column?: number;
  cardVariant?: string;
};

export type GenericListItem = {
  description: string;
  href: string;
  linkText: string;
  title: string;
  img: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  color?: string;
  icon?: ComponentType<IconProps>;

};
