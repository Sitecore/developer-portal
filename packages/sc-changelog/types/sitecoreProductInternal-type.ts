import { SitecoreProductResults } from './sitecoreProducts';

type SitecoreProductInternal = {
  id: string;
  name: string;
  roductAbbreviationInternal: string;
  productNameInternal: string;
  productDescriptionInternal: string;
  sitecoreProducts: SitecoreProductResults;
};
export default SitecoreProductInternal;

export type SitecoreProductInternalResults = {
  total: string;
  results: SitecoreProductInternal[];
};
