import { GitHubRepo } from './interfaces/github';

export const getGitHubRepositories = async (perPage: number = 6): Promise<GitHubRepo[]> => {
  const params = new URLSearchParams({
    sort: 'pushed',
    per_page: perPage.toString(),
    direction: 'desc',
  });

  const response = await fetch(`https://api.github.com/orgs/Sitecore/repos?${params.toString()}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  return response.json();
};
