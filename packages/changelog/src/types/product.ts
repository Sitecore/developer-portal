//import { GetProductLogoByVariant, Product as ProductLogo, Type, Variant } from '@src/lib';
import { SitecoreProductResults } from './sitecoreProduct';

export type Product = {
  id: string;
  name: string;
  darkIcon: string;
  lightIcon: string;
  hasEntries: boolean;
};

export function ParseProduct(data: SitecoreProductResults): Product[] {
  return data.results.map((x) => {
    return {
      id: x.id,
      name: x.productName,
      description: x.productDescription,
      lightIcon: x.lightIcon,
      darkIcon: x.darkIcon,
      hasEntries: false,
    };
  });
}
