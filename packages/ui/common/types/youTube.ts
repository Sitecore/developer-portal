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
