import SITECORE_PRODUCT_QUERY from "./sitecore-product-query";

export const SITECORE_PRODUCT_INTERNAL_QUERY = `
    id
    name
    productAbbreviationInternal
    productNameInternal
    sitecoreProducts{
        total
        results {
          __typename
          ... on SitecoreProducts {
            ${SITECORE_PRODUCT_QUERY}
          }
        }
    }
`;
export default SITECORE_PRODUCT_INTERNAL_QUERY

export const ALL_SITECORE_PRODUCT_INTERNAL_QUERY = `{ 
  data: allSitecoreProductsInternal{
    total
    results {
      ${SITECORE_PRODUCT_INTERNAL_QUERY}
    }
  }
}
`;