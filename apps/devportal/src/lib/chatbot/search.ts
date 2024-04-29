import { buildSearchQuery } from './search/queries';
import { QuerySearchApi } from './search/searchAPI';
import { QuerySearchApiResult } from './search/types';

export type SearchChangeLogParams = {
  path: string;
  uuid?: string;
  term: string;
};

export async function CallSearch({ path, uuid, term }: SearchChangeLogParams): Promise<QuerySearchApiResult> {
  const query = buildSearchQuery({ path, uuid, term });
  return await QuerySearchApi({ query });
}