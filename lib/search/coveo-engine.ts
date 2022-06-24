import { buildSearchEngine, getSampleSearchEngineConfiguration } from '@coveo/headless';

export const coveoEngine = buildSearchEngine({
  configuration: {
    organizationId: process.env.COVEO_ORGANIZATION_ID as string,
    accessToken: process.env.COVEO_ACCESS_TOKEN as string,
    search: {
      searchHub: 'devPortalSearch',
      pipeline: 'DeveloperPortalPipeline',
    },
  },
});
