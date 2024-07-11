import axios from 'axios';
import axiosThrottle from 'axios-request-throttle';
import { TypedDocumentString } from '../../gql/generated/graphql';
import { ChangelogCredentials } from '../../types/changelog';

export async function fetchGraphQL<TResult, TVariables>(document: TypedDocumentString<TResult, TVariables> | string, credentials: ChangelogCredentials, preview?: boolean, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]) {
  const environment = preview ? credentials.preview : credentials.production;
  const endpoint = environment.endpoint as string;
  const token = environment.token as string;

  if (preview) {
    // Throttle requests to 15 per second for the preview environment
    axiosThrottle.use(axios, { requestsPerSecond: 15 });
  }

  if (endpoint === undefined || token === undefined) {
    console.warn('WARNING: Missing CH ONE endpoint or token');
    return null;
  }

  try {
    const response = await axios.post(
      endpoint as string,
      { query: document.toString(), variables: variables },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-GQL-Token': token,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
