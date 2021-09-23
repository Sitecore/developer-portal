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
