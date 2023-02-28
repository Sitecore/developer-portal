import { JSONContent } from '@tiptap/core';
import { ChangeTypeResults } from './changeType';
import { MediaResults } from './common/media';
import { SitecoreProductResults } from './sitecoreProduct';

export type ChangelogBase = {
  title: string;
  sitecoreProduct: SitecoreProductResults;
  releaseDate: string;
};

type Changelog = ChangelogBase & {
  id: string;
  name: string;
  readMoreLink: string;
  description: JSONContent;
  breakingChange: boolean;
  changeType: ChangeTypeResults;
  version: string;
  image: MediaResults;
};

export default Changelog;

export type ChangelogList = {
  total: string;
  results: Changelog[];
};
