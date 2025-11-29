// import { GetProductLogoByVariant, Product as ProductLogo, Type, Variant } from '@src/lib';
import { GetAllProductsQuery } from '@data/gql/generated/graphql';
import { getStringValue } from '@lib/utils';

export type Product = {
  id: string;
  name: string;
  darkIcon: string;
  lightIcon: string;
  hasEntries: boolean;
};

export function ParseProduct(data: GetAllProductsQuery): Array<Product> {
  if (!data.manySitecoreProduct?.results) {
    console.log('No products found');

    return [];
  }

  return data.manySitecoreProduct.results.map((x) => {
    return {
      id: getStringValue(x?.system.id),
      name: getStringValue(x?.productName),
      description: getStringValue(x?.productDescription),
      lightIcon: getStringValue(x?.lightIcon),
      darkIcon: getStringValue(x?.darkIcon),
      hasEntries: false,
    };
  });
}
