import { ForumOption, SortOption } from 'ui/components/sitecoreCommunity/SitecoreCommunity.api';
import { ContentHeading } from './contentheading';

import { ChangelogEntry } from '@/../../packages/sc-changelog/types/changeLogEntry';
import { SitecoreCommunityContent, SitecoreCommunityEvent } from 'ui/common/types/sitecoreCommunity';
import { StackExchangeQuestion } from 'ui/common/types/stackExchange';
import { Tweet } from 'ui/common/types/twitter';
import { YouTubeVideo } from 'ui/common/types/youTube';

type PageInfoCore = {
  pageType?: string;
  description?: string;
  hasInPageNav?: boolean;
  hasSubPageNav?: boolean;
  heroImage?: string;
  openGraphImage?: string;
  id?: string;
  partials?: string[];
  partialGroups?: PagePartials[];
  title: string;
  pageTitle?: string;
  fileName: string;
  previewMode?: boolean;
  slug: string;
  menuOrder?: number;
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
  changelogEntries: ChangelogEntry[];
  changelogProductId?: string;
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
  parsedContent?: string;
  productLogo?: string;
  headings?: ContentHeading[];
};

export type SubPageNavigation = {
  title: string;
  description: string;
  heading: string;
  path: string;
  routes: SubPageNavigationItem[];
};

export type SubPageNavigationItem = {
  title: string;
  path: string;
  children: SubPageNavigationItem[];
};

export type ChildPageInfo = {
  description?: string;
  id?: string;
  link: string;
  title: string;
  children?: ChildPageInfo[];
};

export type PartialData = {
  fileNames: string[];
  content: string[];
  titles: ContentHeading[];
};

export type PagePartials = {
  title: string;
  description?: string;
  partials: string[];
};

export type PagePartialGroup = {
  title: string;
  description?: string;
  partials: PartialData;
};
