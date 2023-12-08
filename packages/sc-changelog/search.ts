import { buildSearchQuery } from "./search/queries";
import { QuerySearchApi } from "./search/searchAPI";
import { ChangelogEntry } from "./types/changeLogEntry";

export type SearchChangeLogParams = {
  path: string;
  limit?: number;
  offset?: number;
}

export default async function SearchChangeLog({ path, limit = 10, offset = 0 }: SearchChangeLogParams): Promise<ChangelogEntry[]> {

  const query = buildSearchQuery({ path, limit, offset });

  return await QuerySearchApi({ query });
}
