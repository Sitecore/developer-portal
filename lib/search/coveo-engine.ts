import { buildSearchEngine, getSampleSearchEngineConfiguration } from '@coveo/headless';

export const coveoEngine = buildSearchEngine({
  configuration: getSampleSearchEngineConfiguration(),
});
