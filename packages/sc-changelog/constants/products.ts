import { ProductConfig } from '../configuration';
import { Product } from '../types';
import { getSlug } from '../utils/stringUtils';

const Products: ProductConfig[] = [
  {
    type: Product.CDP,
    name: 'Sitecore CDP',
    entityId: 'entityId',
    entityName: 'entityName',
  },
  {
    type: Product.CONTENTHUBONE,
    name: 'Content Hub ONE',
    entityId: 'entityId',
    entityName: 'entityName',
  },
  {
    type: Product.XMCLOUD,
    name: 'XM Cloud',
    entityId: 'entityId',
    entityName: 'entityName',
  },
];

export default Products;

export function GetProductBySlug(productName: string): ProductConfig | undefined {
  //const _product = Product[productName as keyof typeof Product];
  const first = Products.find((obj) => {
    return getSlug(obj.name) === productName;
  });

  return first;
}
