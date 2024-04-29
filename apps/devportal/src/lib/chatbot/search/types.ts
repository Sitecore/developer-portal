export type SearchResult = {
  id: string;
  title: string;
  releaseDate: string;
  lightIcon: string;
  darkIcon: string;
  productName: string | null;
  changeTypeName: string | null;
  name: string;
  readMoreLink: string;
  description: string;
  fullArticle?: string | null;
  breakingChange: boolean;
  version: string;
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