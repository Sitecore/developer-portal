// Global
import axios from 'axios';
// Integrations
import { StackExchangeQuestion } from '@/interfaces/integrations';

type StackExchangeResponse = {
  data: {
    items: StackExchangeQuestion[];
  };
};

const get = async (args?: string | string[]): Promise<StackExchangeQuestion[]> => {
  if (!args) {
    return [];
  }

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
    .get(
      `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=sitecore${tagParams}`
    )
    .then((response: StackExchangeResponse) => {
      return response.data.items.slice(0, 3);
    })
    .catch((err) => {
      return [];
    });
};

export default {
  get,
};
