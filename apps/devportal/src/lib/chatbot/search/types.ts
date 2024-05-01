export type SearchResult = {
  id: string;
  title: string;
  name: string;
  description: string;
}

export type QuerySearchApiParams = {
  query: string;
}

export type QuerySearchApiResult = {
  entries: SearchResult[];
}

export type SearchChangeLogQueryParams = {
  path: string;
  limit?: number;
  offset?: number;
  uuid?: string;
  term: string;
}