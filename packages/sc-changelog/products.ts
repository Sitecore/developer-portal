import { GetAllProducts, GetEntryCountByProductId } from './lib/products';
import { ParseProduct, Product } from './types';

export default async function GetProducts(isPreview: boolean): Promise<Product[]> {
  // Get all products
  const response = await GetAllProducts(isPreview);
  const products = ParseProduct(response.data);

  // Iterate products
  const asyncFunc = async () => {
    const p = products.map((n) => calc(n));
    const results = await Promise.all(p);
    return results;
  };

  // Check whether there are entries that have it selected
  const calc = async (n: Product) => {
    // No need to check in preview mode
    if (isPreview) {
      n.hasEntries = true;
      return n;
    }

    const count = await GetEntryCountByProductId(n.id, isPreview);
    n.hasEntries = count > 0;
    return n;
  };

  return asyncFunc();
}
