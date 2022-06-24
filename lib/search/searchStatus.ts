import { buildSearchStatus } from '@coveo/headless';
import { coveoEngine } from '@/lib/search/coveo-engine';

export const searchStatus = buildSearchStatus(coveoEngine);
