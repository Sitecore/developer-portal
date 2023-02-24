import { Product } from '../ui/common/assets';
import { ProductName } from './types';
import { ChangeType } from './types/index';

export type ProductConfig = {
  type: ProductName;
  name: string;
  entityId: string;
  entityName: string;
  imageId: Product;
};

export type ChangeTypeConfig = {
  type: ChangeType;
  name: string;
  entityId: string;
  entityName: string;
};
