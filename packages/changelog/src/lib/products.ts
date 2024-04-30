import { Err, Ok } from 'ts-results';
import { ALL_SITECORE_PRODUCT_QUERY } from '../graphQl/sitecore-product-query';
import { ChangelogCredentials } from '../types/changelog';
import { fetchAPI } from './common/api';

export async function GetAllProducts(credentials: ChangelogCredentials, preview: boolean) {
  const response = await fetchAPI(credentials, ALL_SITECORE_PRODUCT_QUERY, preview);

  if (!response) return new Err({ data: [] });

  return new Ok(response.data);
}

export async function GetEntryCountByProductId(credentials: ChangelogCredentials, productId: string, preview: boolean) {
  const response = await fetchAPI(
    credentials,
    `{
      data: allChangelog(where: { sitecoreProduct: { changelog_ids: "${productId}" } }) 
      {
        total
      }
    }
  `,
    preview
  );

  if (!response) return new Err({ data: [] });

  return new Ok(response.data.data.total);
}
