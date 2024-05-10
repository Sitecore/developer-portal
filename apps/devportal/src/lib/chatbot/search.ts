import { buildSearchQuery } from './search/queries';
import { QuerySearchApi } from './search/searchAPI';
import { QuerySearchApiResult } from './search/types';

export type SearchChangeLogParams = {
  path: string;
  uuid?: string;
  term: string;
  sources: string[];
};

export async function CallSearch({ path, uuid, term, sources }: SearchChangeLogParams): Promise<QuerySearchApiResult> {
  const query = buildSearchQuery({ path, uuid, term, sources });
  return await QuerySearchApi({ query });
}