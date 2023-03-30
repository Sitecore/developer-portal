import CHANGE_TYPE_QUERY from './change-type-query';
import MEDIA_QUERY from './common/media-query';
import SITECORE_PRODUCT_QUERY from './sitecore-product-query';

export const CHANGELOG_QUERY = `
  id
  name
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  version
  releaseDate
  image {
    total
    results {
      ${MEDIA_QUERY}
    }
  }
  sitecoreProduct{
    total
    results {
      __typename
      ... on SitecoreProduct {
        ${SITECORE_PRODUCT_QUERY}
      }
    }
  }
  changeType
  {
    total
    results {
      __typename
      ... on Changetype {
        ${CHANGE_TYPE_QUERY}
      }
    }
  }
`;

export const CHANGELOG_SUMMARY_QUERY = `
  id
  title
  releaseDate
  sitecoreProduct{
    total
    results {
      __typename
      ... on SitecoreProduct {
        ${SITECORE_PRODUCT_QUERY}
      }
    }
  }
  changeType
  {
    total
    results {
      __typename
      ... on Changetype {
        ${CHANGE_TYPE_QUERY}
      }
    }
  }
`;

export const ALL_CHANGELOG_QUERY = `{ 
    data: allChangelog{
      total
      results {
        ${CHANGELOG_QUERY}
      }
    }
  }
  `;
export default ALL_CHANGELOG_QUERY;
