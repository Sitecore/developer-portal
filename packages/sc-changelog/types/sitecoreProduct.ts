import { Media } from './common/media';
import { SitecoreCloudResults } from './sitecoreCloud';

type SitecoreProduct = {
  id: string;
  name: string;
  productName: string;
  productDescription: string;
  abbreviation: string;
  productIcon: Media;
  sitecoreCloud: SitecoreCloudResults;
};
export default SitecoreProduct;

export type SitecoreProductResults = {
  total: string;
  results: SitecoreProduct[];
};
