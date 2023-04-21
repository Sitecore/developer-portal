export const SITECORE_CLOUD_QUERY = ` 
    id
    name
    cloudName
`;
export default SITECORE_CLOUD_QUERY

export const ALL_SITECORE_CLOUD_QUERY = `{ 
    data: allSitecoreCloud{
      total
      results {
        ${SITECORE_CLOUD_QUERY}
      }
    }
  }
  `;