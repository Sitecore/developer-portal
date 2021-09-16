// Global
import axios, { AxiosResponse } from 'axios';
// Interfaces
import type { YouTubeVideo } from '@/interfaces/integrations';

type YouTubeResponse = {
  items: [];
};

const get = async (playlistId?: string): Promise<YouTubeVideo[]> => {
  if (!playlistId) {
    return [];
  }

  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_API_KEY}&playlistId=${playlistId}&part=snippet&maxResults=3`
    )
    .then((response: AxiosResponse<YouTubeResponse>) => {
      return response.data.items;
    })
    .catch(() => {
      return [];
    });
};

export default {
  get,
};
