import { SitecoreProductResults } from './sitecoreProduct';

type SitecoreProductInternal = {
  id: string;
  name: string;
  productAbbreviationInternal: string;
  productNameInternal: string;
  productDescriptionInternal: string;
  sitecoreProducts: SitecoreProductResults;
};
export default SitecoreProductInternal;

export type SitecoreProductInternalResults = {
  total: string;
  results: SitecoreProductInternal[];
};
