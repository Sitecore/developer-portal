import { TypedDocumentString } from '@data/gql/generated/graphql';
import { ChangelogCredentials } from '@lib/changelog/types';
import axios from 'axios';
import axiosThrottle from 'axios-request-throttle';

export async function fetchGraphQL<TResult, TVariables>(document: TypedDocumentString<TResult, TVariables> | string, credentials: ChangelogCredentials, preview?: boolean, ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]) {
  
  let environment = preview ? credentials.preview : credentials.production;

    const endpoint = environment.endpoint;
    const token = environment.token;

    if (preview) {
      // Throttle requests to 10 per second for the preview environment
      axiosThrottle.use(axios, { requestsPerSecond: 10 });
    }

    if (endpoint === undefined || token === undefined) {
      console.warn('WARNING: Missing CS endpoint or token');

      return null;
    }

    try {
      const response = await axios.post(
        endpoint,
        { query: document.toString(), variables: variables },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.errors) {
        console.error('GraphQL Error:', response.data.errors);
        // console.error('GraphQL Query:', document.toString());
        // console.error('GraphQL Variables:', variables);
        return null;
      }

      return response.data;
    } catch (err: any) {
      if (err.response?.data) {
        console.error('GraphQL Request Error:', {
          status: err.response.status,
          statusText: err.response.statusText,
          data: err.response.data,
          query: typeof document === 'string' ? document.substring(0, 200) : 'TypedDocumentString',
          variables: variables,
        });
      } else {
        console.error('GraphQL Request Error:', err);
      }

      return null;
    }
}
