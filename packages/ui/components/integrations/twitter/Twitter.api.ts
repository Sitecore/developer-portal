// Global
import axios, { AxiosResponse } from 'axios';
import { Tweet } from './twitter';
// Interfaces

type TwitterResponse = {
  data: Tweet[];
};

const get = async (args?: string | string[]): Promise<Tweet[]> => {
  if (!args) {
    return [];
  }

  const argsAsArray: string[] = Array.isArray(args) ? args : [args];

  // Don't allow searches without an account so we don't get inappropriate tweets
  if (!argsAsArray.find((arg) => arg.startsWith('@'))) {
    return [];
  }

  const query = argsAsArray.map((arg) => (arg.startsWith('@') ? `from:${arg.substring(1, arg.length).toLowerCase()}` : arg)).join(' OR ');

  // Search for our Tweets
  return axios({
    method: 'get',
    url: `https://api.twitter.com/2/tweets/search/recent`,
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
      'User-Agent': 'v2RecentSearchJS',
    },
  })
    .then((response: AxiosResponse<TwitterResponse>) => {
      if (response.data.data.length > 3) {
        return response.data.data.slice(0, 3);
      }
      return response.data.data;
    })
    .catch(() => {
      return [];
    });
};

export default {
  get,
};
