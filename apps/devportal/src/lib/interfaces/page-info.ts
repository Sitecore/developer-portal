import { ChangelogEntry } from '@scdp/changelog/types';
import { ForumOption, SitecoreCommunityContent, SitecoreCommunityEvent, SortOption, StackExchangeQuestion, YouTubeVideo } from '@scdp/ui/components';
import { ContentHeading } from './contentheading';

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
  slug: string;
  menuOrder?: number;
  area: string[];
  product?: string[];
  cdpTags?: string[];
};

// Input for 3rd party integrations are just strings
export type MarkdownMeta = PageInfoCore & {
  stackexchange?: string | string[];
  twitter?: string | string[];
  youtube?: string;
  changelogProductId?: string[];
  changelog?: string;
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
  changelogProductId?: string[];
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
  guidedDemoId?: string;
};

export type SidebarNavigationConfig = {
  title: string;
  description: string;
  heading: boolean;
  path: string;
  showRootAsSections?: boolean;
  routes: SidebarNavigationItem[];
};

export type SidebarNavigationItem = {
  title: string;
  path: string;
  ignoreLink?: boolean;
  children: SidebarNavigationItem[];
  collapsed?: boolean;
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
