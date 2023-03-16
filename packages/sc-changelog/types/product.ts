import { SitecoreProductResults } from './sitecoreProduct';

type Product = {
  id: string;
  name: string;
  productIcon: string;
  cloud: string;
  hasEntries: boolean;
};
export default Product;

export function ParseProduct(data: SitecoreProductResults): Product[] {
  return data.results.map((x) => {
    return {
      id: x.id,
      name: x.name,
      productIcon: x.id,
      cloud: x.sitecoreCloud.results[0].name,
      hasEntries: false,
    };
  });
}
