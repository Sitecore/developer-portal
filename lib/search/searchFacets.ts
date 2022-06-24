import { buildFacet, Facet } from '@coveo/headless';
import { coveoEngine } from './coveo-engine';

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
