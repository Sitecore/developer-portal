import { ALL_SITECORE_PRODUCT_QUERY } from '../graphQl/sitecore-product-query';
import { fetchAPI } from './common/api';

export async function GetAllProducts(preview: boolean) {
  const response = await fetchAPI(ALL_SITECORE_PRODUCT_QUERY, preview);
  return response.data;
}

export async function GetEntryCountByProductId(productId: string, preview: boolean) {
  const response = await fetchAPI(
    `{
      data: allChangelog(where: { sitecoreProduct: { changelog_ids: "${productId}" } }) 
      {
        total
      }
    }
  `,
    preview
  );
  return response.data.data.total;
}
