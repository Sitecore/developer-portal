import { ProductFragment } from '@data/gql/generated/graphql';
import { getStringValue } from '@/src/lib/utils/stringUtil';

export type SitecoreProduct = {
  id: string;
  name: string;
  productName: string;
  productDescription: string;
  lightIcon: string;
  darkIcon: string;
};
export default SitecoreProduct;

export type SitecoreProductResults = {
  total: string;
  results: Array<SitecoreProduct>;
};

/**
 * Parse a single SitecoreProduct from raw GraphQL data
 * @param rawItem - GraphQL ProductFragment result
 * @returns Parsed SitecoreProduct
 */
export function parseSitecoreProductItem(rawItem: ProductFragment | null | undefined): SitecoreProduct {
  if (!rawItem) {
    throw new Error('Invalid SitecoreProduct: rawItem is null or undefined');
  }

  return {
    id: getStringValue(rawItem.system?.id),
    name: getStringValue(rawItem.productName),
    productName: getStringValue(rawItem.productName),
    productDescription: getStringValue(rawItem.productDescription),
    lightIcon: getStringValue(rawItem.lightIcon),
    darkIcon: getStringValue(rawItem.darkIcon),
  };
}

/**
 * Parse multiple SitecoreProduct items from raw GraphQL data array
 * @param rawItems - Array of GraphQL ProductFragment results
 * @returns Array of parsed SitecoreProduct items
 */
export function parseSitecoreProductItems(rawItems: Array<ProductFragment | null> | null | undefined): Array<SitecoreProduct> {
  if (!rawItems) {
    return [];
  }

  return rawItems.filter((x): x is ProductFragment => x !== null).map((x) => parseSitecoreProductItem(x));
}
