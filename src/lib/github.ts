import axios from 'axios';
import { GitHubRepo } from './interfaces/github';

export const getGitHubRepositories = async (perPage: number = 6): Promise<GitHubRepo[]> => {
  const response = await axios.get('https://api.github.com/orgs/Sitecore/repos', {
    params: {
      sort: 'updated',
      per_page: perPage,
      direction: 'desc',
    },
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  return response.data;
};
