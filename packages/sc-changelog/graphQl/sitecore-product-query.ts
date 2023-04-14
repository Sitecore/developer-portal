import SITECORE_CLOUD_QUERY from './sitecore-cloud-query';

export const SITECORE_PRODUCT_QUERY = `
    id
    name
    productName
    productDescription
    darkIcon:productIconDark
    lightIcon: productIconLight
    sitecoreCloud {
        total
        results
        {
            __typename
            ... on SitecoreCloud {
                ${SITECORE_CLOUD_QUERY}
            }
        } 
    }
`;
export default SITECORE_PRODUCT_QUERY;

export const ALL_SITECORE_PRODUCT_QUERY = `{ 
    data: allSitecoreProduct(first:25) {
      total
      results {
        ${SITECORE_PRODUCT_QUERY}
      }
    }
  }
  `;
