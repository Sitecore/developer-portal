import { ChangelogEntry } from "../types/changeLogEntry";

export type QuerySearchApiParams = {
  query: string;
}

export type QuerySearchApiResult = {
  entries: ChangelogEntry[];
  facets: ChangeLogSearchFacet[];
}

export type SearchChangeLogQueryParams = {
  path: string;
  limit?: number;
  offset?: number;
  uuid?: string;
}

export type ChangeLogSearchFacetValue = {
  id: string;
  text: string;
  count: number;
}

export type ChangeLogSearchFacet = {
  name: string;
  label: string;
  value: ChangeLogSearchFacetValue[];
}