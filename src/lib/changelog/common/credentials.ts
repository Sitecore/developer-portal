import { ChangelogCredentials } from '@lib/changelog/types';

export const entriesApiUrl = '/api/changelog/v1';

export function getChangelogCredentials(): ChangelogCredentials {

  const endpoint = process.env.SITECORE_CS_ENDPOINT as string;
  const tenant = process.env.SITECOR_CS_TENANT as string;
  const env = process.env.SITECOR_CS_ENV as string;

  return {
    production: {
      endpoint: `${endpoint}/${tenant}/${env}?preview=true`,
      token: process.env.SITECORE_CS_AUTH_TOKEN_DELIVERY as string,
    },
    preview: {
      endpoint: `${endpoint}/${tenant}/${env}?preview=true`,
      token: process.env.SITECORE_CS_AUTH_TOKEN_PREVIEW as string,
    },
  };
}
