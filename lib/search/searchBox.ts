import { buildSearchBox } from '@coveo/headless';
import { coveoEngine } from './coveo-engine';

export const searchBox = buildSearchBox(coveoEngine);
