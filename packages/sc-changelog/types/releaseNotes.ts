import { JSONContent } from '@tiptap/core';
import { ChangeTypeResults } from './changeType';
import { MediaResults } from './common/media';
import { SitecoreProductResults } from './sitecoreProducts';

type ReleaseNote = {
  id: string;
  name: string;
  readMoreLink: string;
  title: string;
  description: JSONContent;
  breakingChange: boolean;
  sitecoreProduct: SitecoreProductResults;
  changeType: ChangeTypeResults;
  version: string;
  releaseDate: string;
  image: MediaResults;
};

export default ReleaseNote;

export type ReleaseNoteList = {
  total: string;
  results: ReleaseNote[];
};
