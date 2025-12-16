import { getStringValue } from '@lib/utils';

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
 */
export function parseSitecoreProductItem(rawItem: any): SitecoreProduct {
  return {
    id: getStringValue(rawItem?.system?.id),
    name: getStringValue(rawItem?.productName),
    productName: getStringValue(rawItem?.productName),
    productDescription: getStringValue(rawItem?.productDescription),
    lightIcon: getStringValue(rawItem?.lightIcon),
    darkIcon: getStringValue(rawItem?.darkIcon),
  };
}

/**
 * Parse multiple SitecoreProduct items from raw GraphQL data array
 */
export function parseSitecoreProductItems(rawItems: any[] | null | undefined): Array<SitecoreProduct> {
  if (!rawItems) {
    return [];
  }

  return rawItems.map((x) => parseSitecoreProductItem(x));
}
