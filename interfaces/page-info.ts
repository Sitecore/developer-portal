import {
  ForumOption,
  SortOption,
} from '@/components/integrations/sitecore-community/SitecoreCommunity.api';
import {
  SitecoreCommunityEvent,
  SitecoreCommunityContent,
  StackExchangeQuestion,
  Tweet,
  YouTubeVideo,
} from './integrations';

type PageInfoCore = {
  description?: string;
  hasInPageNav?: boolean;
  heroImage?: string;
  id?: string;
  partials?: string[];
  title: string;
  pageTitle?: string;
  fileName: string;
};

// Input for 3rd party integrations are just strings
export type MarkdownMeta = PageInfoCore & {
  stackexchange?: string | string[];
  twitter?: string | string[];
  youtube?: string;
  promoBefore?: string[];
  promoAfter?: string[];
  sitecoreCommunityBlog?: number | boolean;
  sitecoreCommunityBlogSort?: SortOption | SortOption[];
  sitecoreCommunityEvents?: boolean;
  sitecoreCommunityNews?: boolean;
  sitecoreCommunityQuestions?: number | boolean;
  sitecoreCommunityQuestionsSort?: SortOption | SortOption[];
  sitecoreCommunityQuestionsCategory?: ForumOption | ForumOption[];
};

type SitecoreCommunityData = {
  blog?: SitecoreCommunityContent[];
  blogSort?: SortOption | SortOption[];
  events?: SitecoreCommunityEvent[];
  news?: SitecoreCommunityContent[];
  questions?: SitecoreCommunityContent[];
  questionsSort?: SortOption | SortOption[];
  questionsForums?: ForumOption | ForumOption[];
};

// Output for 3rd party integrations contain specific data structures
export type PageInfo = PageInfoCore & {
  stackexchange: StackExchangeQuestion[];
  twitter: Tweet[];
  twitterHandle?: string;
  youtube: YouTubeVideo[];
  youtubeTitle?: string;
  youtubePlaylistTitle?: string;
  sitecoreCommunity: SitecoreCommunityData;
  sitecoreCommunityBlogSort?: SortOption | SortOption[];
  sitecoreCommunityQuestionsSort?: SortOption | SortOption[];
  sitecoreCommunityQuestionsCategory?: ForumOption | ForumOption[];
  promoBefore: string[];
  promoAfter: string[];
  content?: string;
};

export type ChildPageInfo = {
  description?: string;
  id?: string;
  link: string;
  title: string;
};

export type PartialData = {
  fileNames: string[];
  content: string[];
  titles: string[];
};

export type PagePartialGroup = {
  title: string;
  description?: string;
  partials: PartialData;
};

export type TrialNavContext = {
  trial: string;
  parent: string;
  child: string;
};

type TrialNavChild = {
  title: string;
  slug: string;
};

type TrialNavParent = {
  title: string;
  slug: string;
  children: TrialNavChild[];
};

export type TrialNavData = {
  title: string;
  description?: string;
  nav: TrialNavParent[];
};

export type CustomNavContext = {
  parent: string;
  article: string;
  page: string;
};

type CustomNavChild = {
  title: string;
  slug: string;
};

export type CustomNavRoute = {
  title: string;
  path: string;
  children?: CustomNavRoute[];
};

export type CustomNavData = {
  title: string;
  routes: CustomNavRoute[];
};

export type ContentPagerContext = {
  previous?: CustomNavRoute | null;
  next?: CustomNavRoute | null;
};
