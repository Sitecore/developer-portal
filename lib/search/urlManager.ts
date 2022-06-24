import { buildUrlManager } from '@coveo/headless';
import { coveoEngine } from './coveo-engine';

export const urlManager = buildUrlManager(coveoEngine, {
  initialState: { fragment: '' },
});
