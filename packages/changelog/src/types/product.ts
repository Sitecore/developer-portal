//import { GetProductLogoByVariant, Product as ProductLogo, Type, Variant } from '@src/lib';
import { GetAllProductsQuery } from '../gql/generated/graphql';
import { getStringValue } from '../utils';

export type Product = {
  id: string;
  name: string;
  darkIcon: string;
  lightIcon: string;
  hasEntries: boolean;
};

export function ParseProduct(data: GetAllProductsQuery): Product[] {
  if (!data.allSitecoreProduct?.results) {
    console.log('No products found');
    return [];
  }

  return data.allSitecoreProduct.results.map((x) => {
    return {
      id: getStringValue(x?.id),
      name: getStringValue(x?.productName),
      description: getStringValue(x?.productDescription),
      lightIcon: getStringValue(x?.lightIcon),
      darkIcon: getStringValue(x?.darkIcon),
      hasEntries: false,
    };
  });
}
