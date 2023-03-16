import { ALL_SITECORE_PRODUCT_QUERY } from '../graphQl/sitecore-product-query';
import { fetchAPI } from './common/api';

export async function GetAllProducts() {
  const response = await fetchAPI(ALL_SITECORE_PRODUCT_QUERY);
  return response.data;
}

export async function GetEntryCountByProductId(productId: string) {
  const response = await fetchAPI(`{
      data: allChangelog(where: { sitecoreProduct: { changelog_ids: "${productId}" } }) 
      {
        total
      }
    }
  `);
  return response.data.data.total;
}
