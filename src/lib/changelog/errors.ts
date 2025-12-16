/**
 * Base error class for all changelog-related errors
 */
export class ChangelogError extends Error {
  constructor(
    message: string,
    public readonly context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'ChangelogError';
    Object.setPrototypeOf(this, ChangelogError.prototype);
  }
}

/**
 * Error thrown when a changelog entry is not found
 */
export class ChangelogNotFoundError extends ChangelogError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, context);
    this.name = 'ChangelogNotFoundError';
    Object.setPrototypeOf(this, ChangelogNotFoundError.prototype);
  }
}

/**
 * Error thrown when validation fails (e.g., missing required parameters)
 */
export class ChangelogValidationError extends ChangelogError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, context);
    this.name = 'ChangelogValidationError';
    Object.setPrototypeOf(this, ChangelogValidationError.prototype);
  }
}

/**
 * Error thrown when a network request fails
 */
export class ChangelogNetworkError extends ChangelogError {
  constructor(
    message: string,
    public readonly statusCode?: number,
    context?: Record<string, unknown>
  ) {
    super(message, context);
    this.name = 'ChangelogNetworkError';
    Object.setPrototypeOf(this, ChangelogNetworkError.prototype);
  }
}

/**
 * Error thrown when configuration is invalid (e.g., missing credentials)
 */
export class ChangelogConfigurationError extends ChangelogError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, context);
    this.name = 'ChangelogConfigurationError';
    Object.setPrototypeOf(this, ChangelogConfigurationError.prototype);
  }
}

/**
 * Error thrown when a GraphQL query returns errors
 */
export class ChangelogGraphQLError extends ChangelogError {
  constructor(
    message: string,
    public readonly graphQLErrors?: Array<unknown>,
    context?: Record<string, unknown>
  ) {
    super(message, context);
    this.name = 'ChangelogGraphQLError';
    Object.setPrototypeOf(this, ChangelogGraphQLError.prototype);
  }
}
