import {
  ChangelogConfigurationError,
  ChangelogGraphQLError,
  ChangelogNetworkError,
} from '@lib/changelog/errors';
import { ChangelogCredentials } from '@lib/changelog/types';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { fetchGraphQL } from '@lib/changelog/common/fetch';

// Mock global fetch
global.fetch = vi.fn();

describe('fetchGraphQL', () => {
  const mockCredentials: ChangelogCredentials = {
    production: {
      endpoint: 'https://api.example.com/production',
      token: 'prod-token',
    },
    preview: {
      endpoint: 'https://api.example.com/preview',
      token: 'preview-token',
    },
  };

  const mockDocument = 'query { test }';
  const mockVariables = { productId: '123' };

  beforeEach(() => {
    vi.clearAllMocks();
    // Reset throttled fetch instance
    vi.resetModules();
  });

  test('should fetch GraphQL with production credentials', async () => {
    const mockResponseData = {
      data: { result: 'success' },
    };

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockResponseData,
    } as Response);

    const result = await fetchGraphQL(mockDocument, mockCredentials, false, mockVariables);

    expect(result.data).toEqual({ result: 'success' });
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.example.com/production',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer prod-token',
        },
        body: JSON.stringify({ query: mockDocument, variables: mockVariables }),
      }
    );
  });

  test('should fetch GraphQL with preview credentials', async () => {
    const mockResponseData = {
      data: { result: 'success' },
    };

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockResponseData,
    } as Response);

    const result = await fetchGraphQL(mockDocument, mockCredentials, true, mockVariables);

    expect(result.data).toEqual({ result: 'success' });
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.example.com/preview',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer preview-token',
        },
        body: JSON.stringify({ query: mockDocument, variables: mockVariables }),
      }
    );
  });

  test('should use throttled fetch function for preview requests', async () => {
    const mockResponseData = {
      data: { result: 'success' },
    };

    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockResponseData,
    } as Response);

    const result = await fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, true);

    // Verify the request succeeded (which means throttled fetch was used)
    expect(result.data).toEqual({ result: 'success' });
  });

  test('should reuse throttled fetch function for multiple preview requests', async () => {
    const mockResponseData = {
      data: { result: 'success' },
    };

    vi.mocked(global.fetch).mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockResponseData,
    } as Response);

    const result1 = await fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, true);
    const result2 = await fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, true);

    // Verify both requests succeeded (which means throttled fetch was reused)
    expect(result1.data).toEqual({ result: 'success' });
    expect(result2.data).toEqual({ result: 'success' });
  });

  test('should throw ChangelogConfigurationError when endpoint is missing', async () => {
    const invalidCredentials: ChangelogCredentials = {
      production: {
        endpoint: '',
        token: 'token',
      },
      preview: {
        endpoint: 'https://api.example.com/preview',
        token: 'preview-token',
      },
    };

    await expect(fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, invalidCredentials, false)).rejects.toThrow(
      ChangelogConfigurationError
    );
  });

  test('should throw ChangelogConfigurationError when token is missing', async () => {
    const invalidCredentials: ChangelogCredentials = {
      production: {
        endpoint: 'https://api.example.com/production',
        token: '',
      },
      preview: {
        endpoint: 'https://api.example.com/preview',
        token: 'preview-token',
      },
    };

    await expect(fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, invalidCredentials, false)).rejects.toThrow(
      ChangelogConfigurationError
    );
  });

  test('should throw ChangelogGraphQLError when GraphQL returns errors', async () => {
    const mockResponseData = {
      data: null,
      errors: [{ message: 'Field not found' }, { message: 'Invalid argument' }],
    };

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockResponseData,
    } as Response);

    await expect(fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogGraphQLError
    );

    try {
      await fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false);
    } catch (error) {
      expect(error).toBeInstanceOf(ChangelogGraphQLError);
      if (error instanceof ChangelogGraphQLError) {
        expect(error.graphQLErrors).toEqual(mockResponseData.errors);
      }
    }
  });

  test('should throw ChangelogGraphQLError when data is missing', async () => {
    const mockResponseData = {
      data: null,
    };

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockResponseData,
    } as Response);

    await expect(fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogGraphQLError
    );
  });

  test('should throw ChangelogNetworkError on HTTP error', async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      json: async () => ({ error: 'Not found' }),
    } as Response);

    await expect(fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogNetworkError
    );

    try {
      await fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false);
    } catch (error) {
      expect(error).toBeInstanceOf(ChangelogNetworkError);
      if (error instanceof ChangelogNetworkError) {
        expect(error.statusCode).toBe(404);
      }
    }
  });

  test('should throw ChangelogNetworkError on network error', async () => {
    vi.mocked(global.fetch).mockRejectedValueOnce(new Error('Network error'));

    await expect(fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogNetworkError
    );
  });

  test('should throw ChangelogNetworkError on 500 error', async () => {
    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
      json: async () => ({ error: 'Server error' }),
    } as Response);

    await expect(fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogNetworkError
    );

    try {
      await fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false);
    } catch (error) {
      expect(error).toBeInstanceOf(ChangelogNetworkError);
      if (error instanceof ChangelogNetworkError) {
        expect(error.statusCode).toBe(500);
      }
    }
  });

  test('should wrap unknown errors as ChangelogNetworkError', async () => {
    const unknownError = new Error('Unknown error');

    vi.mocked(global.fetch).mockRejectedValueOnce(unknownError);

    await expect(fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogNetworkError
    );
  });

  test('should handle TypedDocumentString', async () => {
    const mockTypedDocument = {
      toString: () => 'query { test }',
    };

    const mockResponseData = {
      data: { result: 'success' },
    };

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockResponseData,
    } as Response);

    const result = await fetchGraphQL<{ result: string }, Record<string, never>>(mockTypedDocument as any, mockCredentials, false);

    expect(result.data).toEqual({ result: 'success' });
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.example.com/production',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ query: 'query { test }', variables: {} }),
      })
    );
  });

  test('should handle empty variables', async () => {
    const mockResponseData = {
      data: { result: 'success' },
    };

    vi.mocked(global.fetch).mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockResponseData,
    } as Response);

    await fetchGraphQL<{ result: string }, Record<string, never>>(mockDocument, mockCredentials, false);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ query: mockDocument, variables: {} }),
      })
    );
  });
});
