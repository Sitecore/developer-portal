import { QuerySearchApi } from "./search/searchAPI";
import { ChangelogEntry } from "./types/changeLogEntry";

export type SearchChangeLogParams = {
  path: string;
}

export default async function SearchChangeLog({ path }: SearchChangeLogParams): Promise<ChangelogEntry[]> {
  const query = `{"context":{"page":{"uri":"${path}"}},"widget":{"items":[{"entity":"content","rfk_id":"rfk_changelog","search":{"content":{},"facet":{"all":false,"types":[{"name":"changeTypeName"},{"name":"product_names"}]},"sort":{"value":[{"name":"release_date_desc"}]}}}]}}`;
  return await QuerySearchApi({ query });
}
