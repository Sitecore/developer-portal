import type { YouTubeApiResponse } from "./youTube";

// Global
// Interfaces

type YouTubeResponse = {
  items: [];
};

type YouTubePlaylistItem = {
  snippet: {
    title: string;
  };
};

// biome-ignore lint/complexity/noStaticOnlyClass: API utility class with static methods
export class YouTubeApi {
  static async get(playlistId?: string): Promise<YouTubeApiResponse> {
    if (!playlistId) {
      return {
        content: [],
        playlistTitle: undefined,
      };
    }

    return Promise.all([
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&playlistId=${playlistId}&part=snippet&maxResults=3`,
      )
        .then(async (response) => {
          if (!response.ok) {
            return [];
          }
          const data: YouTubeResponse = await response.json();
          return data.items;
        })
        .catch(() => {
          return [];
        }),
      fetch(
        `https://www.googleapis.com/youtube/v3/playlists?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&id=${playlistId}&part=snippet`,
      )
        .then(async (response) => {
          if (!response.ok) {
            return "";
          }
          const data: YouTubeResponse = await response.json();
          const items: Array<YouTubePlaylistItem> = data?.items;

          if (items && items.length > 0) {
            return items[0].snippet?.title || undefined;
          }

          return undefined;
        })
        .catch(() => {
          return "";
        }),
    ]).then((res) => {
      return {
        content: res[0],
        playlistTitle: res[1],
      };
    });
  }
}

export default YouTubeApi;
