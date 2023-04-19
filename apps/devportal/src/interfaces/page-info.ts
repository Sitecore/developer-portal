import { ContentHeading } from '@/src/interfaces/contentheading';
import { ForumOption, SortOption } from 'ui/components/sitecoreCommunity/SitecoreCommunity.api';

import { SitecoreCommunityContent, SitecoreCommunityEvent } from 'ui/common/types/sitecoreCommunity';
import { StackExchangeQuestion } from 'ui/common/types/stackExchange';
import { Tweet } from 'ui/common/types/twitter';
import { YouTubeVideo } from 'ui/common/types/youTube';

type PageInfoCore = {
  description?: string;
  hasInPageNav?: boolean;
  heroImage?: string;
  openGraphImage?: string;
  id?: string;
  partials?: string[];
  title: string;
  pageTitle?: string;
  fileName: string;
  previewMode?: boolean;
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
  parsedContent?: string;
  productLogo?: string;
  headings?: ContentHeading[];
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
  titles: ContentHeading[];
};

export type PagePartialGroup = {
  title: string;
  description?: string;
  partials: PartialData;
};
