import { TypedDocumentString } from '@data/gql/generated/graphql';
import { ChangelogCredentials } from '@lib/changelog/types';
import axios, { AxiosInstance } from 'axios';
import axiosThrottle from 'axios-request-throttle';

import { Log } from '@/src/lib/utils/logger';
import { ChangelogConfigurationError, ChangelogGraphQLError, ChangelogNetworkError } from '../errors';
import { extractQueryName } from '../utils/graphql';

/**
 * Create a throttled axios instance for preview requests
 * This is scoped to avoid affecting other axios requests
 */
let throttledAxiosInstance: AxiosInstance | null = null;

function getAxiosInstance(preview: boolean): AxiosInstance {
  if (preview) {
    if (!throttledAxiosInstance) {
      throttledAxiosInstance = axios.create();
      // Throttle requests to 10 per second for the preview environment
      axiosThrottle.use(throttledAxiosInstance, { requestsPerSecond: 10 });
    }
    return throttledAxiosInstance;
  }
  return axios;
}

/**
 * Fetch data from GraphQL endpoint
 * @param document - GraphQL query document
 * @param credentials - Changelog credentials
 * @param preview - Whether to use preview endpoint
 * @param variables - GraphQL query variables
 * @returns GraphQL response data
 * @throws ChangelogConfigurationError if credentials are missing
 * @throws ChangelogNetworkError if network request fails
 * @throws ChangelogGraphQLError if GraphQL returns errors
 */
export async function fetchGraphQL<TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables> | string,
  credentials: ChangelogCredentials,
  preview?: boolean,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<{ data: TResult }> {
  const environment = preview ? credentials.preview : credentials.production;
  const endpoint = environment.endpoint;
  const token = environment.token;

  if (!endpoint || !token) {
    throw new ChangelogConfigurationError('Missing CS endpoint or token', {
      hasEndpoint: !!endpoint,
      hasToken: !!token,
      preview,
    });
  }

  const axiosInstance = getAxiosInstance(preview ?? false);

  const queryString = typeof document === 'string' ? document : document.toString();
  const queryName = extractQueryName(queryString);

  try {
    Log.debug(`Executing GraphQL [query: ${queryName}, variables: ${variables ? JSON.stringify(variables) : 'no variables'}]`);

    const response = await axiosInstance.post<{ data: TResult; errors?: Array<unknown> }>(
      endpoint,
      { query: queryString, variables: variables ?? {} },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.errors && response.data.errors.length > 0) {
      throw new ChangelogGraphQLError('GraphQL query returned errors', response.data.errors, {
        query: typeof document === 'string' ? document.substring(0, 200) : 'TypedDocumentString',
        variables,
      });
    }

    if (!response.data.data) {
      throw new ChangelogGraphQLError('GraphQL response missing data', undefined, {
        query: typeof document === 'string' ? document.substring(0, 200) : 'TypedDocumentString',
        variables,
      });
    }

    return { data: response.data.data };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const statusCode = err.response?.status;
      const errorData = err.response?.data;

      throw new ChangelogNetworkError(`GraphQL request failed: ${err.message}`, statusCode, {
        status: statusCode,
        statusText: err.response?.statusText,
        data: errorData,
        query: typeof document === 'string' ? document.substring(0, 200) : 'TypedDocumentString',
        variables,
      });
    }

    // Re-throw if it's already a ChangelogError
    if (err instanceof ChangelogGraphQLError || err instanceof ChangelogNetworkError) {
      throw err;
    }

    // Wrap unknown errors
    throw new ChangelogNetworkError(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`, undefined, {
      originalError: err,
      query: typeof document === 'string' ? document.substring(0, 200) : 'TypedDocumentString',
      variables,
    });
  }
}
