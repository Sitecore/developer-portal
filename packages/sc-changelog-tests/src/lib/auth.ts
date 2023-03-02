import { ClientCredentialsScheme, ContentHubOneClientFactory } from '@sitecore/contenthub-one-sdk';

export function authenticate(clientId: string, clientSecret: string) {
  //use SDK & Connect
  const credentials = new ClientCredentialsScheme(clientId, clientSecret);
  const client = ContentHubOneClientFactory.create(credentials);

  return client;
}
