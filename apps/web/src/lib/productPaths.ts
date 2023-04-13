import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { getSlug } from 'sc-changelog/utils/stringUtils';

type ProductPaths = { params: { product: string } };
type ProductChangeTypePaths = { params: { product: string; changeType: string } };

export const getProductPaths = async (): Promise<ProductPaths[]> => {
  const paths: ProductPaths[] = [];

  Products.map((p) => {
    const product = getSlug(p.name);
    paths.push({ params: { product } });
  });

  return paths;
};

export const getProductChangeTypePaths = async (): Promise<ProductChangeTypePaths[]> => {
  const paths: ProductChangeTypePaths[] = [];

  Products.map((p) => {
    ChangeTypes.map((c) => {
      const product = getSlug(p.name);
      const changeType = getSlug(c.name);
      paths.push({ params: { product, changeType } });
    });
  });

  return paths;
};
