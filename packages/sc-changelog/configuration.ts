import { Product } from './types';
import { ChangeType } from './types/index';

export type ProductConfig = {
  type: Product;
  name: string;
  entityId: string;
  entityName: string;
  imageId: string;
};

export type ChangeTypeConfig = {
  type: ChangeType;
  name: string;
  entityId: string;
  entityName: string;
};
