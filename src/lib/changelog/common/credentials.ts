import { ChangelogCredentials } from '@lib/changelog/types';

export const entriesApiUrl = '/api/changelog/v1';

export function getChangelogCredentials(): ChangelogCredentials {
  return {
    production: {
      endpoint: process.env.SITECORE_CHONE_ENDPOINT_DELIVERY as string,
      token: process.env.SITECORE_CHONE_AUTH_TOKEN_DELIVERY as string,
    },
    preview: {
      endpoint: process.env.SITECORE_CHONE_ENDPOINT_PREVIEW as string,
      token: process.env.SITECORE_CHONE_AUTH_TOKEN_PREVIEW as string,
    },
  };
}
