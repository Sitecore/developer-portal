import {
  buildBreadcrumbManager,
  buildFacet,
  buildQuerySummary,
  buildResultList,
  buildSearchBox,
  buildSearchEngine,
  buildSearchStatus,
  buildUrlManager,
  Facet,
} from '@coveo/headless';

export const coveoEngine = buildSearchEngine({
  configuration: {
    organizationId: process.env.COVEO_ORGANIZATION_ID as string,
    accessToken: process.env.COVEO_ACCESS_TOKEN as string,
    search: {
      searchHub: process.env.COVEO_SEARCH_HUB as string,
      pipeline: process.env.COVEO_PIPELINE as string,
    },
  },
});
export const urlManager = buildUrlManager(coveoEngine, {
  initialState: { fragment: '' },
});

export const searchStatus = buildSearchStatus(coveoEngine);
export const resultList = buildResultList(coveoEngine, { options: { fieldsToInclude: ['date'] } });
export const searchBox = buildSearchBox(coveoEngine);
export const querySummary = buildQuerySummary(coveoEngine);
export const breadcrumbManager = buildBreadcrumbManager(coveoEngine);

// Facets
export const versionFacet: Facet = buildFacet(coveoEngine, {
  options: { field: 'sitecoreversion' },
});

export const productFacet: Facet = buildFacet(coveoEngine, {
  options: { field: 'product' },
});

export const sourceFacet: Facet = buildFacet(coveoEngine, {
  options: { field: 'source' },
});

export const yearFacet: Facet = buildFacet(coveoEngine, {
  options: { field: 'year' },
});

export const fileTypeFacet: Facet = buildFacet(coveoEngine, {
  options: { field: 'fileType' },
});

export const languageFacet: Facet = buildFacet(coveoEngine, {
  options: { field: 'language' },
});
