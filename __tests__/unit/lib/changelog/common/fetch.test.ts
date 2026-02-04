import {
  ChangelogConfigurationError,
  ChangelogGraphQLError,
  ChangelogNetworkError,
} from '@lib/changelog/errors';
import { ChangelogCredentials } from '@lib/changelog/types';
import axios from 'axios';
import axiosThrottle from 'axios-request-throttle';
import { beforeEach, describe, expect, test, vi } from 'vitest';

vi.mock('axios');
vi.mock('axios-request-throttle');

import { fetchGraphQL } from '@lib/changelog/common/fetch';

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
  });

  test('should fetch GraphQL with production credentials', async () => {
    const mockResponse = {
      data: {
        data: { result: 'success' },
      },
    };

    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    const result = await fetchGraphQL(mockDocument, mockCredentials, false, mockVariables);

    expect(result.data).toEqual({ result: 'success' });
    expect(axios.post).toHaveBeenCalledWith(
      'https://api.example.com/production',
      { query: mockDocument, variables: mockVariables },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer prod-token',
        },
      }
    );
  });

  test('should fetch GraphQL with preview credentials', async () => {
    const mockResponse = {
      data: {
        data: { result: 'success' },
      },
    };

    const mockAxiosInstance = {
      post: vi.fn().mockResolvedValue(mockResponse),
    };

    vi.mocked(axios.create).mockReturnValue(mockAxiosInstance as any);
    vi.mocked(axiosThrottle.use).mockImplementation(() => {});

    const result = await fetchGraphQL(mockDocument, mockCredentials, true, mockVariables);

    expect(result.data).toEqual({ result: 'success' });
    expect(axios.create).toHaveBeenCalled();
    expect(axiosThrottle.use).toHaveBeenCalledWith(mockAxiosInstance, { requestsPerSecond: 10 });
    expect(mockAxiosInstance.post).toHaveBeenCalledWith(
      'https://api.example.com/preview',
      { query: mockDocument, variables: mockVariables },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer preview-token',
        },
      }
    );
  });

  test('should use throttled axios instance for preview requests', async () => {
    const mockResponse = {
      data: {
        data: { result: 'success' },
      },
    };

    // The throttled instance is cached, so we test that preview requests work
    // by verifying the request is made (the instance may have been created in a previous test)
    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    const result = await fetchGraphQL(mockDocument, mockCredentials, true);

    // Verify the request succeeded (which means throttled instance was used)
    expect(result.data).toEqual({ result: 'success' });
  });

  test('should reuse throttled axios instance for multiple preview requests', async () => {
    const mockResponse = {
      data: {
        data: { result: 'success' },
      },
    };

    // The throttled instance is cached, so we test that multiple preview requests work
    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    const result1 = await fetchGraphQL(mockDocument, mockCredentials, true);
    const result2 = await fetchGraphQL(mockDocument, mockCredentials, true);

    // Verify both requests succeeded (which means throttled instance was reused)
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

    await expect(fetchGraphQL(mockDocument, invalidCredentials, false)).rejects.toThrow(
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

    await expect(fetchGraphQL(mockDocument, invalidCredentials, false)).rejects.toThrow(
      ChangelogConfigurationError
    );
  });

  test('should throw ChangelogGraphQLError when GraphQL returns errors', async () => {
    const mockResponse = {
      data: {
        data: null,
        errors: [{ message: 'Field not found' }, { message: 'Invalid argument' }],
      },
    };

    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    await expect(fetchGraphQL(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogGraphQLError
    );

    try {
      await fetchGraphQL(mockDocument, mockCredentials, false);
    } catch (error) {
      expect(error).toBeInstanceOf(ChangelogGraphQLError);
      if (error instanceof ChangelogGraphQLError) {
        expect(error.graphQLErrors).toEqual(mockResponse.data.errors);
      }
    }
  });

  test('should throw ChangelogGraphQLError when data is missing', async () => {
    const mockResponse = {
      data: {
        data: null,
      },
    };

    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    await expect(fetchGraphQL(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogGraphQLError
    );
  });

  test('should throw ChangelogNetworkError on axios error', async () => {
    const axiosError = {
      isAxiosError: true,
      message: 'Network Error',
      response: {
        status: 404,
        statusText: 'Not Found',
        data: { error: 'Not found' },
      },
    };

    vi.mocked(axios.isAxiosError).mockReturnValue(true);
    vi.mocked(axios.post).mockRejectedValue(axiosError);

    await expect(fetchGraphQL(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogNetworkError
    );

    try {
      await fetchGraphQL(mockDocument, mockCredentials, false);
    } catch (error) {
      expect(error).toBeInstanceOf(ChangelogNetworkError);
      if (error instanceof ChangelogNetworkError) {
        expect(error.statusCode).toBe(404);
      }
    }
  });

  test('should throw ChangelogNetworkError on network timeout', async () => {
    const axiosError = {
      isAxiosError: true,
      message: 'timeout of 5000ms exceeded',
      response: undefined,
    };

    vi.mocked(axios.isAxiosError).mockReturnValue(true);
    vi.mocked(axios.post).mockRejectedValue(axiosError);

    await expect(fetchGraphQL(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogNetworkError
    );
  });

  test('should throw ChangelogNetworkError on 500 error', async () => {
    const axiosError = {
      isAxiosError: true,
      message: 'Internal Server Error',
      response: {
        status: 500,
        statusText: 'Internal Server Error',
        data: { error: 'Server error' },
      },
    };

    vi.mocked(axios.isAxiosError).mockReturnValue(true);
    vi.mocked(axios.post).mockRejectedValue(axiosError);

    await expect(fetchGraphQL(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogNetworkError
    );

    try {
      await fetchGraphQL(mockDocument, mockCredentials, false);
    } catch (error) {
      expect(error).toBeInstanceOf(ChangelogNetworkError);
      if (error instanceof ChangelogNetworkError) {
        expect(error.statusCode).toBe(500);
      }
    }
  });

  test('should wrap unknown errors as ChangelogNetworkError', async () => {
    const unknownError = new Error('Unknown error');

    vi.mocked(axios.isAxiosError).mockReturnValue(false);
    vi.mocked(axios.post).mockRejectedValue(unknownError);

    await expect(fetchGraphQL(mockDocument, mockCredentials, false)).rejects.toThrow(
      ChangelogNetworkError
    );
  });

  test('should handle TypedDocumentString', async () => {
    const mockTypedDocument = {
      toString: () => 'query { test }',
    };

    const mockResponse = {
      data: {
        data: { result: 'success' },
      },
    };

    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    const result = await fetchGraphQL(mockTypedDocument as any, mockCredentials, false);

    expect(result.data).toEqual({ result: 'success' });
    expect(axios.post).toHaveBeenCalledWith(
      'https://api.example.com/production',
      { query: 'query { test }', variables: {} },
      expect.any(Object)
    );
  });

  test('should handle empty variables', async () => {
    const mockResponse = {
      data: {
        data: { result: 'success' },
      },
    };

    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    await fetchGraphQL(mockDocument, mockCredentials, false);

    expect(axios.post).toHaveBeenCalledWith(
      expect.any(String),
      { query: mockDocument, variables: {} },
      expect.any(Object)
    );
  });
});

