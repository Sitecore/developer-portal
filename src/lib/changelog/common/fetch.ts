import { TypedDocumentString } from '@data/gql/generated/graphql';
import { ChangelogCredentials } from '@lib/changelog/types';
import axios from 'axios';
import axiosThrottle from 'axios-request-throttle';

export async function fetchGraphQL<TResult, TVariables>(document: TypedDocumentString<TResult, TVariables> | string, credentials: ChangelogCredentials, preview?: boolean, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]) {
  const environment = preview ? credentials.preview : credentials.production;
  const endpoint = environment.endpoint;
  const token = environment.token;

  if (preview) {
    // Throttle requests to 15 per second for the preview environment
    axiosThrottle.use(axios, { requestsPerSecond: 15 });
  }

  if (endpoint === undefined || token === undefined) {
    console.warn('WARNING: Missing CH ONE endpoint or token');

    return null;
  }

  // console.log('endpoint', endpoint, 'token', token);
  try {
    const response = await axios.post(
      endpoint,
      { query: document.toString(), variables: variables },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-GQL-Token': token,
        },
      }
    );

    if (response.data.errors) {
      console.error('GraphQL Error:', response.data.errors);

      return null;
    }

    return response.data;
  } catch (err) {
    console.log(err);

    return null;
  }
}
