// Global
import axios, { AxiosResponse } from 'axios';
// Interfaces
import type { YouTubeApiResponse } from './youTube';

type YouTubeResponse = {
  items: [];
};

type YouTubePlaylistItem = {
  snippet: {
    title: string;
  };
};

const get = async (playlistId?: string): Promise<YouTubeApiResponse> => {
  if (!playlistId) {
    return {
      content: [],
      playlistTitle: undefined,
    };
  }

  return Promise.all([
    axios
      .get(`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&playlistId=${playlistId}&part=snippet&maxResults=3`)
      .then((response: AxiosResponse<YouTubeResponse>) => {
        return response.data.items;
      })
      .catch(() => {
        return [];
      }),
    axios
      .get(`https://www.googleapis.com/youtube/v3/playlists?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&id=${playlistId}&part=snippet`)
      .then((response: AxiosResponse<YouTubeResponse>) => {
        const items: YouTubePlaylistItem[] = response.data?.items;
        if (items && items.length > 0) {
          return items[0].snippet?.title || undefined;
        }
        return undefined;
      })
      .catch(() => {
        return '';
      }),
  ]).then((res) => {
    return {
      content: res[0],
      playlistTitle: res[1],
    };
  });
};

export default {
  get,
};
