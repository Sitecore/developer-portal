export type StackExchangeQuestion = {
  creation_date: number;
  last_activity_date: number;
  link: string;
  question_id: string;
  title: string;
};

export type Tweet = {};

/**
 * YouTube
 */
type YouTubeThumbnail = {
  url: string;
  height: number;
  width: number;
};

type YouTubeSnippet = {
  resourceId: {
    videoId: string;
  };
  thumbnails: {
    medium: YouTubeThumbnail;
  };
  title: string;
};

export type YouTubeVideo = {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubeSnippet;
};
