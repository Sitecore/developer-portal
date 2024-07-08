import { GetProductLogoByVariant, Product as ProductLogo, Type, Variant } from '@scdp/ui/lib';
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
  const darkDefaultLogo = GetProductLogoByVariant(ProductLogo.Default, Variant.Dark, Type.IconOnly);
  const lightDefaultLogo = GetProductLogoByVariant(ProductLogo.Default, Variant.Light, Type.IconOnly);

  if (!data.allSitecoreProduct?.results) {
    console.log('No products found');
    return [];
  }

  return data.allSitecoreProduct.results.map((x) => {
    return {
      id: getStringValue(x?.id),
      name: getStringValue(x?.productName),
      description: getStringValue(x?.productDescription),
      lightIcon: getStringValue(x?.lightIcon) != null ? getStringValue(x?.lightIcon) : lightDefaultLogo,
      darkIcon: getStringValue(x?.darkIcon) != null ? getStringValue(x?.darkIcon) : darkDefaultLogo,
      hasEntries: false,
    };
  });
}
