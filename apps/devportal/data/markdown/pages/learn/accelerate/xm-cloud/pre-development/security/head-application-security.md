---
title: 'Head Application Security'
description: 'This recipe will define the best practices for securing your Next.js head application.'
area: ['accelerate']
---

## Problem

The client requires that part or all of the head application is behind a login. This may be a paywall, or just requiring the user to login to get access to specific content.

This recipe will also cover best practice with Experience Edge token handling.

## Solution

### Authentication/User Management

#### Authentication Provider

Your head application will need an external authentication provider. Sitecore Portal Unified Identity cannot be used as this provider, it is only there to provide security for your Sitecore Portal. Content Management users and Application users should be isolated.

The Authentication Provider can be one of the built-in providers for NextAuth, or a custom OAuth Provider.

#### NextAuth.js

To secure your Next.js application, we recommend using **NextAuth.js**. The NextAuth library will be responsible for handling session state, sign in, sign out, and connecting to the selected authentication provider.

NextAuth is designed to work with any OAuth service, it support **OAuth 1.0, 1.0A, 2.0** and **OpenID Connect (OIDC)** and has built-in support for most popular sign-in services. See the link below for a list.

#### Clerk

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for login, signup, user profile, and organization management. Clerk is designed to be easy to use and customize and can be dropped into any React or Next.js application.

#### Security Roles

For some clients, a simple check for login state (Authentication) is not enough control over what content the user can see (Authorization). For a more complex solution, you may need to add in security roles and link them to content.

**The standard Sitecore security fields should not be used for this**. They are designed for Content Management access only. To achieve this, a new field should be added to your project's base page template. This can be a simple text field, or a multilist/treelist that points at a predefined set of roles matching your authentication provider. You can check this field against your user record in either middleware or server side.

## Discussion

### SSG or SSR

The question on whether pages should be SSG or SSR when behind authentication will depend on what those page contain.

If your pages contain basic paywalled content, e.g., a News article that requires a subscription to view, then the page should be SSG. The authentication will be handled by middleware allowing or denying access to the content.

If your page contains data specific to the user pulled from external data sources or from a database, then you can utilize SSR or Server Rendered components to get that content for the user and make sure that the request is authenticated.

### Experience Edge Token

The Experience Edge documentation lists the following limitations:

> Experience Edge for XM does not enforce security constraints on Sitecore content. You must apply publishing restrictions to avoid publishing content that you do not want to be publicly available.

> Experience Edge for XM only utilizes a single content scope for the whole tenant. Security tokens, query cache clearing, and webhooks cannot be limited by site.

While this technically is true, by making sure that the content token is never exposed to the public browser, you can effectively “secure” content within your application.

_Important: JSS Exposes the API Token by default. Follow the steps below to address that:_

To make sure that the content delivery api token is not exposed to the browser, you need to remove the following line from the `./scripts/generate-config.js`:

```typescript
/*
  CONFIG GENERATION
  Generates the /src/temp/config.js file which contains runtime configuration
  that the app can import and use.
*/

const defaultConfig: JssConfig = {
****
  sitecoreApiKey: process.env[`${constantCase('sitecoreApiKey')}`], <---- REMOVE THIS LINE!!!!!
****
  sitecoreApiHost: process.env[`${constantCase('sitecoreApiHost')}`],
  jssAppName: process.env[`${constantCase('jssAppName')}`],
  graphQLEndpointPath: process.env[`${constantCase('graphQLEndpointPath')}`],
  defaultLanguage: process.env[`${constantCase('defaultLanguage')}`],
  graphQLEndpoint: process.env[`${constantCase('graphQLEndpoint')}`],
  layoutServiceConfigurationName: process.env[`${constantCase('layoutServiceConfigurationName')}`],
};
```

## Related Recipes

<Row columns={2}>
  <Link title="Content Management" link="/learn/accelerate/xm-cloud/security/content-management-security" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="NextAuth.js" link="https://next-auth.js.org" />
  <Link title="NextAuth Provider List" link="https://next-auth.js.org/providers/" />
  <Link title="Limitations and restrictions of Experience Edge" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/limitations-and-restrictions-of-experience-edge-for-xm.html" />
  <Link title="How to secure Experience Edge content delivery token" link="https://sitecore.stackexchange.com/questions/35671/how-can-i-secure-the-experience-edge-content-delivery-token-on-my-next-js-jss-ap" />
  <Link title="Authentication and User Management with Clerk" link="https://clerk.com/docs/quickstarts/nextjs" />
</Row>
