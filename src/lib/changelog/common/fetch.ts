import type { TypedDocumentString } from "@data/gql/generated/graphql";
import type { ChangelogCredentials } from "@src/lib/changelog/types";
import { Log } from "@/src/lib/util/logger";
import { createThrottledFetch } from "@/src/lib/util/throttle";
import {
  ChangelogConfigurationError,
  ChangelogGraphQLError,
  ChangelogNetworkError,
} from "../errors";
import { extractQueryName } from "../utils/graphql";

/**
 * Create a throttled fetch function for preview requests
 * This is scoped to avoid affecting other fetch requests
 */
let throttledFetch: typeof fetch | null = null;

function getFetchFunction(preview: boolean): typeof fetch {
  if (preview) {
    if (!throttledFetch) {
      // Throttle requests to 10 per second for the preview environment
      throttledFetch = createThrottledFetch(10);
    }
    return throttledFetch;
  }
  return fetch;
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
    throw new ChangelogConfigurationError("Missing CS endpoint or token", {
      hasEndpoint: !!endpoint,
      hasToken: !!token,
      preview,
    });
  }

  const fetchFunction = getFetchFunction(preview ?? false);

  const queryString =
    typeof document === "string" ? document : document.toString();
  const queryName = extractQueryName(queryString);

  try {
    Log.debug(
      `Executing GraphQL [query: ${queryName}, variables: ${variables ? JSON.stringify(variables) : "no variables"}]`,
    );

    const response = await fetchFunction(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query: queryString, variables: variables ?? {} }),
    });

    if (!response.ok) {
      const statusCode = response.status;
      let errorData: any;
      try {
        errorData = await response.json();
      } catch {
        errorData = await response.text();
      }

      throw new ChangelogNetworkError(
        `GraphQL request failed: ${response.statusText}`,
        statusCode,
        {
          status: statusCode,
          statusText: response.statusText,
          data: errorData,
          query:
            typeof document === "string"
              ? document.substring(0, 200)
              : "TypedDocumentString",
          variables,
        },
      );
    }

    const responseData: { data: TResult; errors?: Array<unknown> } =
      await response.json();

    if (responseData.errors && responseData.errors.length > 0) {
      throw new ChangelogGraphQLError(
        "GraphQL query returned errors",
        responseData.errors,
        {
          query:
            typeof document === "string"
              ? document.substring(0, 200)
              : "TypedDocumentString",
          variables,
        },
      );
    }

    if (!responseData.data) {
      throw new ChangelogGraphQLError(
        "GraphQL response missing data",
        undefined,
        {
          query:
            typeof document === "string"
              ? document.substring(0, 200)
              : "TypedDocumentString",
          variables,
        },
      );
    }

    return { data: responseData.data };
  } catch (err) {
    // Re-throw if it's already a ChangelogError
    if (
      err instanceof ChangelogGraphQLError ||
      err instanceof ChangelogNetworkError
    ) {
      throw err;
    }

    // Wrap unknown errors
    throw new ChangelogNetworkError(
      `Unexpected error: ${err instanceof Error ? err.message : String(err)}`,
      undefined,
      {
        originalError: err,
        query:
          typeof document === "string"
            ? document.substring(0, 200)
            : "TypedDocumentString",
        variables,
      },
    );
  }
}
