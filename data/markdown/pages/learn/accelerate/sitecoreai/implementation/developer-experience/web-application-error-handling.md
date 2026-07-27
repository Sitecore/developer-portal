---
title: 'Web Application Error Monitoring'
description: 'Guidance on ceating robust error handling mechanisms in XM Cloud headless applications.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['Architect','Technical Implementer']
features: ['Next.js SDK']
---

## Context
In the development of any web  application, error handling on the application level is critical. Without robust frontend error handling, a single component failure could crash an entire page or even the Pages editor, leading to poor user experience, lost work for content authors, and frustrated developers trying to debug issues without proper context.

## Execution
Effective error handling in  XM Cloud applications ultimately enhances user experience and application reliability. A well-designed approach ensures that frontend components remain stable, preventing issues from impacting site visitors and content editors. Containing component failures minimizes disruptions, while specialized handling of API integrations keeps interactions smooth. 

Thoughtful error UX design plays a key role in maintaining user trust by providing clear, helpful messaging, guiding users toward solutions, and ensuring a consistent journey even when issues arise. By anticipating potential failures, applications become more resilient, improving both usability and long-term adoption.

There are a number of key considerations to address during implementation to ensure error handling follows best practices.

### Default Error Pages

Your web application should have error pages to keeps users engaged and guide them when something goes wrong. It also ensures brand consistency, turning potential dead-ends into opportunities for better usability and retention.

| Purpose | Benefits |
| - | - |
| - Provide standardized error handling for common HTTP error scenarios<br/>- Create consistent user experience during error states<br/>- Establish a centralized location for error page management |- Easier maintenance with centralized error page management<br/>- Consistent branding across error states<br/>- Reduced development time using pre-built templates |

The starter kit provides default error pages located at` src\project\<projectname>\rendering\src\pages\404.tsx` for handling "Page Not Found" errors, and `src\project\<projectname>\rendering\src\pages\500.tsx` for "Internal Server Error" cases. These components serve as placeholders for common error states and can be easily customized to reflect your application's branding and messaging.

For multi-site implementations, you'll need to configure site-specific error pages. For detailed instructions on implementing custom error pages in a multi-site context, refer to *Custom 404 and Error Pages with the Pages Router* in the [Multisite Architecture](/learn/accelerate/xm-cloud/pre-development/project-architecture/multisite) recipe.

The most common error pages are:
- 404.tsx: For handling situations when a user tries to access a route that doesn’t exist.
- 500.tsx: For handling server-side errors, typically when there’s an issue processing the request on the backend.

You can customize these error components to provide more useful information, such as:
- Direct users back to the homepage or to a search page.
- Displaying a user-friendly message along with contact support options can help users feel more comfortable in case of an issue.
- Provide error codes that can assist users or your support team in identifying the exact nature of the error when an error occurs.


<figure><img src="/images/learn/accelerate/xm-cloud/customizing-404-error-01.png" alt="Customization of Default 404"/><figcaption></figcaption></figure>

<figure><img src="/images/learn/accelerate/xm-cloud/customizing-404-error-02.png" alt="Customization of Default 404"/><figcaption></figcaption></figure>

### Error Boundaries for Client-Side Errors

In web applications, client-side errors—such as issues with rendering React components—can be gracefully handled with Error Boundaries. An Error Boundary is a React component that "catches" errors in its child components and prevents the entire app from crashing. Without error boundaries, a single broken component could cause the entire page and/or page editor to fail, impact the end user experience.

| Purpose | Benefits |
| - | - |
| - Catch and handle React component rendering errors <br/><br/>- Prevent cascading failures in the application <br/><br/>- Isolate component failures to maintain overall app stability | - Enhanced application reliability <br/> - Improved debugging capabilities <br/>- Better user experience with graceful error handling <br/> - Protected page editor functionality in XM Cloud |

 By using Error Boundaries, we ensure that errors in a single component won't bring down the whole page. This is critical in XMC apps where users rely on multiple interconnected components. Instead of the whole page crashing, an error boundary catches the error in a specific component and displays a fallback UI, such as a message notifying the user of the issue.

<figure><img src="/images/learn/accelerate/xm-cloud/error-boundary-implementation-1.png" alt="Error Boundary Implementation"/><figcaption></figcaption></figure>
<figure><img src="/images/learn/accelerate/xm-cloud/error-boundary-implementation-2.png" alt="Error Boundary Implementation"/><figcaption></figcaption></figure>

<figure><img src="/images/learn/accelerate/xm-cloud/component-error-handling.png" alt="Individual Component Error Handling (won’t crash full page)"/><figcaption></figcaption></figure>


### Handling API Errors Gracefully

Handling API errors gracefully ensures application stability, and preventing disruptions caused by failed requests.

| Purpose | Benefits |
| - | - |
| - Manage asynchronous operation failures <br/>- Handle network-related issues gracefully <br/>- Provide feedback for server-side errors | - Improved user confidence through clear error feedback <br/>- Reduced application downtime <br/>- Better debugging capabilities <br/>- Optimized performance through proper request handling <br/>- Prevention of memory leaks |

When working with asynchronous operations, such as fetching data from APIs, ensure that errors are handled appropriately. For API errors (e.g., network failures, timeouts, or server-side issues), provide users with helpful messages, a retry option, or suggestions for further action.

<figure><img src="/images/learn/accelerate/xm-cloud/API-error-handling.png" alt="Sample component handling API error gracefully"/><figcaption></figcaption></figure>

Good API Error Handling is necessary in any implemenation, but in this case specifically:
- Make sure you have comprehensive Error Handling. It accounts for various error scenarios (server errors, network issues, request setup errors) and provides meaningful feedback to the user based on the type of error.
- Optimized Axios usage - The axios instance is memoized using `useMemo`, ensuring it isn’t recreated on every render, and interceptors handle request and response errors globally.
- The use of `CancelTokenSource` allows safe cancellation of requests when the component is unmounted or if the user navigates away, preventing memory leaks.
- Provide the end user clear UI feedback (loading, error messages, or the fetched data) to keep them informed about the request state.
-  The `fetchData` function is memoized with useCallback to avoid unnecessary re-creations, optimizing performance while maintaining clarity and manageability.
- Implement retries strategies such as exponential backoff for transient failures, set maximum retry attempts to prevent infinite loops, consider circuit breakers for recurring API failures

###  User Friendly Error Message

Ensure that any errors displayed to users are not too technical or verbose. Displaying stack traces or raw error objects is not ideal. Instead, provide user-friendly messages with clear instructions on what to do next (e.g., retry, contact support, check for updates).

| Purpose | Benefits |
| - | - |
| - Transform technical errors into understandable messages <br/>- Handle network-related issues gracefully <br/>- Provide feedback for server-side errors | - Improved user confidence through clear error feedback <br/>- Reduced application downtime <br/>- Better debugging capabilities <br/>- Optimized performance through proper request handling <br/>- Prevention of memory leaks |


Any error message needs to:
- Be clear and specific - explain what happened in simple language without overcomplicated the issue
- Offer next steps and tell users what they can do to resolve the issue
- Maintain a consistent tone, in line with your brand voice even in error states
- Provide context and help the users understand if the error is temporary or requires action
- Include support options such as contact information for persistent issues

Example Error Message Mapping:

``` typescript
// Error message mapping
const errorMessages = {
  // Network errors
  'Network Error': 'We're having trouble connecting to our servers. Please check your internet connection and try again.',
  'Request Timeout': 'The request took too long to complete. Please try again later.',
  // Authentication errors
  'Unauthorized': 'Your session has expired. Please sign in again to continue.',
  'Forbidden': 'You don\'t have permission to access this content.',
  // Server errors
  '500': 'We\'re experiencing technical difficulties. Our team has been notified and is working on a solution.',
  '503': 'Our service is temporarily unavailable. Please try again in a few minutes.',
  // Default error
  'default': 'Something went wrong. Please try again or contact support if the problem persists.'
};
// Function to get user-friendly message
const getUserFriendlyMessage = (error) => {
  const statusCode = error.response?.status?.toString();
  const errorKey = error.message || statusCode || 'default';
  return errorMessages[errorKey] || errorMessages['default'];
};
```
<br/>

### Error Logging Best Practices

Proper error logging is essential for diagnosing and resolving issues in production. For your web application make sure that:
- Log comprehensive context including the action being performed, timestamp, and relevant state data
- Use appropriate log levels between
  - *ERROR* for serious issues that require immediate attention
  - *WARN* for less critical problems that might need future investigation
  - *INFO* for significant events that aren't errors
- And protect sensitive data - never log user passwords, user data, authentication tokens, or personal information

## Related Recipes

<Row columns={2}>
  <Link title="Error Monitoring" link="/learn/accelerate/xm-cloud/implementation/developer-experience/backend-error-monitoring" />
</Row>

## Related Documentation

<Row columns={2}>
    <Link title="Front-end hosting applications" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/front-end-hosting-applications.html" />
</Row>
