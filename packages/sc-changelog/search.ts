import { buildSearchQuery } from "./search/queries";
import { QuerySearchApi } from "./search/searchAPI";
import { ChangelogEntry } from "./types/changeLogEntry";

export type SearchChangeLogParams = {
  path: string;
  limit?: number;
  offset?: number;
  uuid?: string;
}

export default async function SearchChangeLog({ path, limit = 10, offset = 0, uuid }: SearchChangeLogParams): Promise<ChangelogEntry[]> {
  const query = buildSearchQuery({ path, limit, offset, uuid });
  return await QuerySearchApi({ query });
}