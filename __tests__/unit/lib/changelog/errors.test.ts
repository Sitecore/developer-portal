import {
  ChangelogConfigurationError,
  ChangelogError,
  ChangelogGraphQLError,
  ChangelogNetworkError,
  ChangelogNotFoundError,
  ChangelogValidationError,
} from '@lib/changelog/errors';
import { describe, expect, test } from 'vitest';

describe('ChangelogError', () => {
  test('should create error with message', () => {
    const error = new ChangelogError('Test error');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(ChangelogError);
    expect(error.message).toBe('Test error');
    expect(error.name).toBe('ChangelogError');
  });

  test('should create error with message and context', () => {
    const context = { productId: '123', action: 'get' };
    const error = new ChangelogError('Test error', context);
    expect(error.message).toBe('Test error');
    expect(error.context).toEqual(context);
  });
});

describe('ChangelogNotFoundError', () => {
  test('should create error with message', () => {
    const error = new ChangelogNotFoundError('Entry not found');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(ChangelogError);
    expect(error).toBeInstanceOf(ChangelogNotFoundError);
    expect(error.message).toBe('Entry not found');
    expect(error.name).toBe('ChangelogNotFoundError');
  });

  test('should create error with message and context', () => {
    const context = { entryTitle: 'Test Entry', productId: '123' };
    const error = new ChangelogNotFoundError('Entry not found', context);
    expect(error.message).toBe('Entry not found');
    expect(error.context).toEqual(context);
  });

  test('should be catchable with instanceof', () => {
    const error = new ChangelogNotFoundError('Entry not found');
    expect(error instanceof ChangelogNotFoundError).toBe(true);
    expect(error instanceof ChangelogError).toBe(true);
    expect(error instanceof Error).toBe(true);
  });
});

describe('ChangelogValidationError', () => {
  test('should create error with message', () => {
    const error = new ChangelogValidationError('Validation failed');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(ChangelogError);
    expect(error).toBeInstanceOf(ChangelogValidationError);
    expect(error.message).toBe('Validation failed');
    expect(error.name).toBe('ChangelogValidationError');
  });

  test('should create error with message and context', () => {
    const context = { field: 'entryTitle', reason: 'required' };
    const error = new ChangelogValidationError('Validation failed', context);
    expect(error.message).toBe('Validation failed');
    expect(error.context).toEqual(context);
  });

  test('should be catchable with instanceof', () => {
    const error = new ChangelogValidationError('Validation failed');
    expect(error instanceof ChangelogValidationError).toBe(true);
    expect(error instanceof ChangelogError).toBe(true);
  });
});

describe('ChangelogNetworkError', () => {
  test('should create error with message', () => {
    const error = new ChangelogNetworkError('Network request failed');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(ChangelogError);
    expect(error).toBeInstanceOf(ChangelogNetworkError);
    expect(error.message).toBe('Network request failed');
    expect(error.name).toBe('ChangelogNetworkError');
    expect(error.statusCode).toBeUndefined();
  });

  test('should create error with message and statusCode', () => {
    const error = new ChangelogNetworkError('Network request failed', 404);
    expect(error.message).toBe('Network request failed');
    expect(error.statusCode).toBe(404);
  });

  test('should create error with message, statusCode, and context', () => {
    const context = { url: 'https://api.example.com', method: 'POST' };
    const error = new ChangelogNetworkError('Network request failed', 500, context);
    expect(error.message).toBe('Network request failed');
    expect(error.statusCode).toBe(500);
    expect(error.context).toEqual(context);
  });

  test('should be catchable with instanceof', () => {
    const error = new ChangelogNetworkError('Network request failed', 404);
    expect(error instanceof ChangelogNetworkError).toBe(true);
    expect(error instanceof ChangelogError).toBe(true);
  });
});

describe('ChangelogConfigurationError', () => {
  test('should create error with message', () => {
    const error = new ChangelogConfigurationError('Configuration invalid');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(ChangelogError);
    expect(error).toBeInstanceOf(ChangelogConfigurationError);
    expect(error.message).toBe('Configuration invalid');
    expect(error.name).toBe('ChangelogConfigurationError');
  });

  test('should create error with message and context', () => {
    const context = { missing: 'endpoint', hasToken: true };
    const error = new ChangelogConfigurationError('Configuration invalid', context);
    expect(error.message).toBe('Configuration invalid');
    expect(error.context).toEqual(context);
  });

  test('should be catchable with instanceof', () => {
    const error = new ChangelogConfigurationError('Configuration invalid');
    expect(error instanceof ChangelogConfigurationError).toBe(true);
    expect(error instanceof ChangelogError).toBe(true);
  });
});

describe('ChangelogGraphQLError', () => {
  test('should create error with message', () => {
    const error = new ChangelogGraphQLError('GraphQL query failed');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(ChangelogError);
    expect(error).toBeInstanceOf(ChangelogGraphQLError);
    expect(error.message).toBe('GraphQL query failed');
    expect(error.name).toBe('ChangelogGraphQLError');
    expect(error.graphQLErrors).toBeUndefined();
  });

  test('should create error with message and graphQLErrors', () => {
    const graphQLErrors = [{ message: 'Field not found' }, { message: 'Invalid argument' }];
    const error = new ChangelogGraphQLError('GraphQL query failed', graphQLErrors);
    expect(error.message).toBe('GraphQL query failed');
    expect(error.graphQLErrors).toEqual(graphQLErrors);
  });

  test('should create error with message, graphQLErrors, and context', () => {
    const graphQLErrors = [{ message: 'Field not found' }];
    const context = { query: 'GetEntries', variables: { productId: '123' } };
    const error = new ChangelogGraphQLError('GraphQL query failed', graphQLErrors, context);
    expect(error.message).toBe('GraphQL query failed');
    expect(error.graphQLErrors).toEqual(graphQLErrors);
    expect(error.context).toEqual(context);
  });

  test('should be catchable with instanceof', () => {
    const error = new ChangelogGraphQLError('GraphQL query failed');
    expect(error instanceof ChangelogGraphQLError).toBe(true);
    expect(error instanceof ChangelogError).toBe(true);
  });
});

