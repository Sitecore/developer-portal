---
title: 'Redirect'
description: 'Recipe for handling redirects using xmcloud and vercel.'
hasSubPageNav: true
hasInPageNav: false
area: ['accelerate']
---

## Problem

The customer has the following requirements:

- R1. A marketer, strategist, or content author would like to create redirects.
- R2. The Customer has a huge list of redirects after migration to xmcloud.

## Solution for R1 - small number of redirects

The xmcloud and nextjs app already have O.O.T.B. support for [Redirect](https://doc.sitecore.com/xmc/en/users/xm-cloud/redirect-a-url.html) and [Redirect Map](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-redirect-map.html).
Both solutions are quite useful as long as you do not have a large amount of redirects.

## Solution for R2 - large number of redirects

When you have a large number of redirects, you need to use the hosting provider features to handle it in your frontend application.

For example, vercel has a few methods for handling redirects:

- [Serverless functions](https://vercel.com/docs/edge-network/redirects#serverless-functions)
- [Edge functions](https://vercel.com/docs/edge-network/redirects#edge-functions)
- [Edge middleware](https://vercel.com/docs/edge-network/redirects#edge-middleware)
- [Configuration redirects](https://vercel.com/docs/edge-network/redirects#configuration-redirects)

Each of these methods has its own limitation, for example, configuration redirects supports a maximum 1000 redirects.

If your redirect amount exceeds the limitation you may want to consider using a [middleware](https://vercel.com/guides/how-can-i-increase-the-limit-of-redirects-or-use-dynamic-redirects-on-vercel) for it.

Middleware can be used with the edge config as documented above, but you also need to consider the [edge config limmitation](https://vercel.com/docs/storage/edge-config/edge-config-limits) depending on your subscription.

If you do not want to use edge config, you can still use a edge middleware with a simple json file that includes the redirect list.

This is an simplified example for `/site-redirects.json`:

```json
{
  "hostName": ["www.mysite.com", "mysite.com"],
  "redirects": [
    {
      "s": "/old-page-url-1",
      "d": "/en/new-page-url-1",
      "c": 301
    },
    {
      "s": "/old-page-url-2",
      "d": "https://external-site.com",
      "c": 302
    }
  ]
}
```

And inside your `/src/middleware.ts`:

```javascript
import { default as staticRedirects } from '../site-redirects.json';
import { get } from '@vercel/edge-config';
import { type NextFetchEvent, type NextRequest, NextResponse } from 'next/server';
import middleware from 'lib/middleware';

// Check if the page is in preview mode
const isPreview = (req: NextRequest): boolean => {
  const preValue = req.cookies.get('__prerender_bypass')?.value;
  const nextValue = req.cookies.get('__next_preview_data')?.value;

  return !!preValue || !!nextValue;
};

export default async function (req: NextRequest, ev: NextFetchEvent) {
  if (!isPreview(req)) {
    const reqUrl = new URL(req.url);
    const hostName = reqUrl.hostname;

    if (staticRedirects.hostName.indexOf(hostName) > -1) {
      const urlPathName = decodeURIComponent(reqUrl.pathname).toLowerCase();

      for (const redirectItem of staticRedirects.redirects) {
        if (urlPathName === redirectItem.s) {
          const destination = redirectItem.d;
          if (destination.startsWith('http')) {
            return NextResponse.redirect(new URL(destination), redirectItem.c);
          } else {
            return NextResponse.redirect(new URL(destination, req.url), redirectItem.c);
          }
        }
      }
    }
  }
}

export const config = {
  /*
   * Match all paths except for:
   * 1. /api routes
   * 2. /_next (Next.js internals)
   * 3. /sitecore/api (Sitecore API routes)
   * 4. /- (Sitecore media)
   * 6. all root files inside /public
   */
  matcher: ['/', '/((?!api/|_next/|sitecore/api/|-/).*)'],
};
```

keep in mind the example above is a simplified version and you need to consider handling the multisite and caching in your implementation.

## Discussion

### When use the sxa redirects vs static redirects

Before planning the redirect implementation, you need to ask few questions:

- Should the redirects be editable by content authors or development team will handle it?
- How many redirects are needed?
- Can the number of redirects be reduced by using Regex?
- When to use redirect map vs redirect item?

If the redirects need to be editable by authors, you need to use the redirect or redirect map.

If you have large number of redirects, which does not have a common pattern and can not be reduced using regex, you need to use your hosting provider's functions to manage it(ex. Vercel).

When you need to map a simple path to another url for example `/about` to `/company/about` you can use the redirect item. The benefit if redirect item is the simplicity of the usage. A possible downside is the visibility and manageability in comparison with redirect map which groups and centeralized the redirercts. Because the redirect item is created as an item in the content tree, and when you want to see the list of existing redirects, you need to search for them.

If you have a multiple redirects or you want to use regex you need to use redirect map instead. For example:

```
/company/products/arc-ow01 -> /products/oil/ow01
/company/products/arc-ow02 -> /products/oil/ow02
/company/products/arc-ow03 -> /products/oil/ow03
```

These type of redirects can be simplified with one regex statement in redirect map item:

```
/company/products/arc-(.*)$  -> /products/oil/$1
```

Again, always keep in mind the redirects are processed with every single request, if your regex is too complicated, it my cause a performance issue.

### How does sxa redirects work?

With every request, the redirect middleware in your nextjs application will run the following graphql query against the experience edge to get the list of redirects:

```graphql
query RedirectsQuery($siteName: String!) {
  site {
    siteInfo(site: $siteName) {
      redirects {
        pattern
        target
        redirectType
        isQueryStringPreserved
        locale
      }
    }
  }
}
```

After receiving the redirects list, the jss redirect middleware will process it against the current request.

### Redirects are not updated

After publishing the redirect map item, you need to publish the headless site item (your site as a single item). If you forget this step, the query above will return the outdated results.

### Considerations for sxa redirects:

If you are planning to use the redirect or redirect map consider the following:

- Whereever possible try to use Regex instead of creating multiple redirect entry.
- Keep the number of sxa redirect as low as possible, as mentioned before the redirect middleware needs to process the list by hitting experience edge endpoint and it can cause performance issue.
- Periodically check the number of redirects in the xmcloud and if needed move them to the frontend app (see the next part).
