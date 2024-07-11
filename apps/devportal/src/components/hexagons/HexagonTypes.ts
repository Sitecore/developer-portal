import { Product } from '../../lib/assets';

export type ProductInfoType = {
  type: Product;
  name: string;
  subTitle: string;
  description: string;
  linkHref: string;
  linkText: string;
  cloud: string;
  color: string;
};

export type CloudInfoType = {
  name: string;
  type: Product;
  id: string;
  color: string;
  description: string;
  linkHref: string;
  linkText: string;
};
