import { Product } from 'ui/common/assets';

export type ProductInfoType = {
  product: Product;
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
  id: string;
  color: string;
  logoUrl: string;
  description: string;
  linkHref: string;
  linkText: string;
};
