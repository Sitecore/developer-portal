import { JSONContent } from '@tiptap/core';
import { ChangeTypeResults } from './changeType';
import { MediaResults } from './common/media';
import { SitecoreProductResults } from './sitecoreProduct';
import { StatusResults } from './status';

export type ChangelogBase = {
  id: string;
  title: string;
  sitecoreProduct: SitecoreProductResults;
  changeType: ChangeTypeResults;
  status: StatusResults;
  releaseDate: string;
};

export type Changelog = ChangelogBase & {
  name: string;
  readMoreLink: string;
  description: JSONContent;
  fullArticle?: JSONContent;
  breakingChange: boolean;
  version: string;
  image: MediaResults;
};

export type pageInfo = {
  hasNext: boolean;
  endCursor: string;
};

export type ChangelogList = {
  pageInfo: pageInfo;
  total: number;
  results: Changelog[];
};

export type ChangelogCredentials = {
  preview: ChangelogEndpoint;
  production: ChangelogEndpoint;
};

export type ChangelogEndpoint = {
  endpoint: string;
  token: string;
};