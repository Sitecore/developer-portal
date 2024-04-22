import { GetProductLogoByVariant, Product as ProductLogo, Type, Variant } from '@scdp/ui/lib';
import { SitecoreProductResults } from './sitecoreProduct';

export type Product = {
  id: string;
  name: string;
  darkIcon: string;
  lightIcon: string;
  cloud: string;
  hasEntries: boolean;
};

export function ParseProduct(data: SitecoreProductResults): Product[] {
  const darkDefaultLogo = GetProductLogoByVariant(ProductLogo.Default, Variant.Dark, Type.IconOnly);
  const lightDefaultLogo = GetProductLogoByVariant(ProductLogo.Default, Variant.Light, Type.IconOnly);

  return data.results.map((x) => {
    return {
      id: x.id,
      name: x.productName,
      description: x.productDescription,
      lightIcon: x.lightIcon != null ? x.lightIcon : lightDefaultLogo,
      darkIcon: x.darkIcon != null ? x.darkIcon : darkDefaultLogo,
      cloud: x.sitecoreCloud.results[0].cloudName,
      hasEntries: false,
    };
  });
}
