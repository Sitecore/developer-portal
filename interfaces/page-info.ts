import { StackExchangeQuestion, Tweet, YouTubeVideo } from './integrations';

type PageInfoCore = {
  description?: string;
  hasInPageNav?: boolean;
  heroImage?: string;
  id?: string;
  partials?: string[];
  title: string;
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

// @TODO: Rename this
export type PagePartials = {
  [name: string]: string;
};

export type PagePartial = {
  content: string;
  title: string;
};

export type PagePartialGroup = {
  title: string;
  description?: string;
  partials: PagePartial[];
};
