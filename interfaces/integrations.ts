export type StackExchangeQuestion = {
  creation_date: number;
  last_activity_date: number;
  link: string;
  question_id: string;
  title: string;
  view_count: string;
  tags: string[];
};

export type Tweet = {
  id: string;
};

/**
 * YouTube
 */
type YouTubeThumbnail = {
  url: string;
  height: number;
  width: number;
};

export type YouTubeSnippet = {
  resourceId: {
    videoId: string;
  };
  thumbnails: {
    medium: YouTubeThumbnail;
  };
  title: string;
  description: string;
  playlistId: string;
};

export type YouTubeVideo = {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubeSnippet;
};

export type YouTubeApiResponse = {
  content: YouTubeVideo[];
  playlistTitle?: string;
};

/**
 * Sitecore Community Integrations
 */
type SitecoreCommunityCore = {
  commentCount: string;
  title: string;
  url: string;
  viewCount: string;
  contentType: 'event' | 'Blog';
  userName: string;
};

export type SitecoreCommunityEvent = SitecoreCommunityCore & {
  editedDate: string;
  endDate: string;
  location: string;
  startDate: string;
  virtualUrl: string;
};

export type SitecoreCommunityContent = SitecoreCommunityCore & {
  publishDate: string;
};
