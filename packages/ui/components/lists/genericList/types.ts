import { CardProps } from '@chakra-ui/react';

export type GenericListData = CardProps & {
  title: string;
  subtitle: string;
  data: GenericListItem[];
  column?: number;
  overrideColor?: {
    light: string;
    dark: string;
  };
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
};
