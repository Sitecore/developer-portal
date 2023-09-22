// Global
import axios, { AxiosResponse } from 'axios';
import { StackExchangeQuestion } from './stackExchange';
// Interfaces

type StackExchangeResponse = {
  items: StackExchangeQuestion[];
};

const avoidRateLimit = async () => {
  // Rate limit ourselves to ...about... 20 per second
  return new Promise((res) => setTimeout(res, 50));
};

const get = async (args?: string | string[]): Promise<StackExchangeQuestion[]> => {
  if (!args) {
    return [];
  }

  await avoidRateLimit();

  const tags: string[] = [];

  const argsAsArray = Array.isArray(args) ? args : [args];
  argsAsArray.forEach((arg) => {
    if (arg.startsWith('#')) {
      // API doesn't want the #
      tags.push(arg.substring(1));
    }
  });

  const tagParams = tags.length > 0 ? `&tagged=${tags.join('&tagged=')}` : '';
  return axios
    .get(`https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=sitecore${tagParams}`)
    .then((response: AxiosResponse<StackExchangeResponse>) => {
      return response.data.items.slice(0, 4);
    })
    .catch(() => {
      return [];
    });
};

export default {
  get,
};
