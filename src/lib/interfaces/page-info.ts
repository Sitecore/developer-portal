import { ChangelogEntry } from '@lib/changelog/types';
import { ForumOption, SitecoreCommunityContent, SitecoreCommunityEvent, SortOption, StackExchangeQuestion, YouTubeVideo } from '@src/components/integrations';

import { ContentHeading } from './contentheading';

type PageInfoCore = {
  pageType?: string;
  description?: string;
  hasInPageNav?: boolean;
  hasSubPageNav?: boolean;
  heroImage?: string;
  openGraphImage?: string;
  id?: string;
  title: string;
  pageTitle?: string;
  fileName: string;
  slug: string;
  menuOrder?: number;
  area: Array<string>;
  product?: Array<string>;
  cdpTags?: Array<string>;
  created?: string;
  lastUpdated?: string;
  productLogo?: string;
  audience?: string;
};

// Input for 3rd party integrations are just strings
export type MarkdownMeta = PageInfoCore & {
  stackexchange?: string | Array<string>;
  twitter?: string | Array<string>;
  youtube?: string;
  changelogProductId?: Array<string>;
  changelog?: string;
  promoBefore?: Array<string>;
  promoAfter?: Array<string>;
  sitecoreCommunityBlog?: number | boolean;
  sitecoreCommunityBlogSort?: SortOption | Array<SortOption>;
  sitecoreCommunityEvents?: boolean;
  sitecoreCommunityNews?: boolean;
  sitecoreCommunityQuestions?: number | boolean;
  sitecoreCommunityQuestionsSort?: SortOption | Array<SortOption>;
  sitecoreCommunityQuestionsCategory?: ForumOption | Array<ForumOption>;
};

type SitecoreCommunityData = {
  blog?: Array<SitecoreCommunityContent>;
  blogSort?: SortOption | Array<SortOption>;
  events?: Array<SitecoreCommunityEvent>;
  news?: Array<SitecoreCommunityContent>;
  questions?: Array<SitecoreCommunityContent>;
  questionsSort?: SortOption | Array<SortOption>;
  questionsForums?: ForumOption | Array<ForumOption>;
};

// Output for 3rd party integrations contain specific data structures
export type PageInfo = PageInfoCore & {
  stackexchange: Array<StackExchangeQuestion>;
  changelogEntries: Array<ChangelogEntry>;
  changelogProductId?: Array<string>;
  twitterHandle?: string;
  youtube: Array<YouTubeVideo>;
  youtubeTitle?: string;
  youtubePlaylistTitle?: string;
  sitecoreCommunity: SitecoreCommunityData;
  sitecoreCommunityBlogSort?: SortOption | Array<SortOption>;
  sitecoreCommunityQuestionsSort?: SortOption | Array<SortOption>;
  sitecoreCommunityQuestionsCategory?: ForumOption | Array<ForumOption>;
  promoBefore: Array<string>;
  promoAfter: Array<string>;
  content?: string;
  parsedContent?: string;
  headings?: Array<ContentHeading>;
  guidedDemoId?: string;
  audience?: Array<string>;
  features?: Array<string>;
  topics?: Array<string>;
  level?: Array<string>;
  requestedBy?: Array<string>;
};


export type ChildPageInfo = PageInfo & {
  description?: string;
  id?: string;
  link: string;
  title: string;
  children?: Array<ChildPageInfo>;
  menuOrder?: number;
};

