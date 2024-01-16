import { ChangelogEntry, ChangelogEntrySummary } from "../types/changeLogEntry";

export type QuerySearchApiParams = {
  query: string;
  selectedFacets: ChangeLogSearchFacet[];
}

export type QuerySearchApiResult = {
  entries: ChangelogEntry[];
  entriesByMonth: ChangelogEntrySummary[];
  facets: ChangeLogSearchFacet[];
  isMore: boolean;
}

export type SearchChangeLogQueryParams = {
  path: string;
  limit?: number;
  offset?: number;
  uuid?: string;
  facets: ChangeLogSearchFacet[];
  enabledFacets: string[]
}

export type ChangeLogSearchFacetValue = {
  id: string;
  text: string;
  count: number;
  selected: boolean;
}

export type ChangeLogSearchFacet = {
  name: string;
  label: string;
  value: ChangeLogSearchFacetValue[];
}