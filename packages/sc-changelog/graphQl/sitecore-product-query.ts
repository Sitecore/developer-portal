import MEDIA_QUERY from './common/media-query';
import SITECORE_CLOUD_QUERY from './sitecore-cloud-query';

export const SITECORE_PRODUCT_QUERY = `
    id
    name
    productName
    productDescription
    abbreviation
    productIcon {
      total
      results {
        ${MEDIA_QUERY}
      }
    }
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
    data: allSitecoreProduct{
      total
      results {
        ${SITECORE_PRODUCT_QUERY}
      }
    }
  }
  `;
