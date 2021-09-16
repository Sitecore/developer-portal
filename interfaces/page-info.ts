import { StackExchangeQuestion, Tweet, YouTubeVideo } from './integrations';

type PageInfoCore = {
  description?: string;
  id?: string;
  title: string;
  heroImage?: string;
  partials?: string[];
};

// Input for 3rd party integrations are just strings
export type MarkdownMeta = PageInfoCore & {
  stackexchange?: string | string[];
  twitter?: string | string[];
  youtube?: string;
};

// Output for 3rd party integrations contain specific data structures
export type PageInfo = PageInfoCore & {
  stackexchange: StackExchangeQuestion[];
  twitter: Tweet[];
  youtube: YouTubeVideo[];
};

export type ChildPageInfo = {
  description?: string;
  id?: string;
  link: string;
  title: string;
};

export type PagePartials = {
  [name: string]: string;
};
