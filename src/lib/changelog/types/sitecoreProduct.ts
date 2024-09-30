export type SitecoreProduct = {
  id: string;
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
