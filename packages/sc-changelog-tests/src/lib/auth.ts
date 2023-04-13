import { ClientCredentialsScheme, ContentHubOneClientFactory } from '@sitecore/contenthub-one-sdk';

export function authenticate(clientId: string, clientSecret: string) {
  if (!clientId || !clientSecret) {
    throw new Error('No clientID and/or clienttSecret defined in environment variables');
  }

  //use SDK & Connect
  const credentials = new ClientCredentialsScheme(clientId, clientSecret);
  const client = ContentHubOneClientFactory.create(credentials);

  return client;
}
