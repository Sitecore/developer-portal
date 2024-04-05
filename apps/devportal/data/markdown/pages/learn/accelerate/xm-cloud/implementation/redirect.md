---
title: 'Redirect'
description: 'Recipe for handling redirects using XM Cloud.'
hasSubPageNav: true
hasInPageNav: false
area: ['accelerate']
---

## Problem

You need to create redirects for the new Next.js XM Cloud site. The redirects need to support both content authored redirects for creating vanity urls/moving pages, and application/platform redirects to make sure that old pages/urls are redirected when the new site goes live.

## Content Authored Redirects

The XM Cloud and Next.js app already have OOTB support for [Redirect Item](https://doc.sitecore.com/xmc/en/users/xm-cloud/redirect-a-url.html) and [Redirect Map](https://doc.sitecore.com/xmc/en/users/xm-cloud/create-a-redirect-map.html).
Both solutions allow a content author to create and maintain redirects in XM Cloud without requiring a code deployment

### Redirect Item vs Redirect Map

Redirect items provide an easy way to map a single path to another path. Redirect maps will provide much better manageability by grouping redirects together and having regex support. From the maintenace and features perspective, using redirect map could be a better choice.

## Developer Controlled Redirects

When you have a large number of redirects, you need to use the hosting provider features to handle it in your frontend application.

### Next.config.js Redirects on Vercel

You can use use the `redirects` key in `next.config.js`:

```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/company/about',
        permanent: true,
      },
    ];
  },
};
```

Configuration based redirects will support up to 1024 redirects.

### Redirects on Netlify

Netlify prefers that you use the Netlify framework for handling redirects. There are two ways to achieve this:

- Save a plain text file called `_redirects` without a file extension to the publish directory of your site.
- Add one or more `redirects` tables to your Netlify configuration file. This method allows for more structured configuration and additional capabilities.

Netlify processes and serializes your redirect rules across the `_redirects` and `netlify.toml` files. If the size of this output is too large, the deploy might fail.

If you need to set up 10,000 redirects or more, we recommend using wildcards or placeholders as much as possible. For a more complex redirect setup, Edge Functions can be a better option.

## Discussion

### When use the SXA redirects vs static redirects

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

  <Alert status="info">
    <AlertIcon />
      IMPORTANT: Always keep in mind the redirects are processed with every single request, if your regex is too complicated, it my cause a performance issue.
  </Alert>

### How do SXA redirects work?

With every request, the redirect middleware in your Next.js application will run the following graphql query against the experience edge to get the list of redirects:

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

### Considerations for SXA redirects:

If you are planning to use the redirect item or redirect map consider the following:

- Whereever possible try to use Regex instead of creating multiple redirect entry.
- Keep the number of SXA redirect as low as possible, as mentioned before the redirect middleware needs to process the list by hitting experience edge endpoint and it can cause performance issue.
- Periodically check the number of redirects in the XM Cloud and if needed move them to the frontend app (see the next part).

### Middleware based redirects for Next.js

When your redirects count exceeds 1024 redirects you need to use a middleware. In the related documentation section you can find provided example using edge function.
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

And create a new middleware plugin `src/lib/middleware/plugins/staticRedirects.ts`:

```javascript
import { default as staticRedirects } from '../../../../site-redirects.json';
import { NextRequest, NextResponse } from 'next/server';
import { debug } from '@sitecore-jss/sitecore-jss';
import { MiddlewarePlugin } from '..';

class StaticRedirectsPlugin implements MiddlewarePlugin {
    private staticRedirectsMiddleware: StaticRedirectsMiddleware;
    order = 0;

    constructor() {
        this.staticRedirectsMiddleware = new StaticRedirectsMiddleware({
            disabled: () => false,
        });
    }

    async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
        return this.staticRedirectsMiddleware.getHandler()(req, res);
    }
}

export type StaticRedirectsMiddlewareConfig = {
    defaultHostname?: string;
    disabled?: (req?: NextRequest, res?: NextResponse) => boolean;
    excludeRoute?: (pathname: string) => boolean;
}

export class StaticRedirectsMiddleware {
    private defaultHostname: string;
    private config: StaticRedirectsMiddlewareConfig;

    constructor(config: StaticRedirectsMiddlewareConfig) {
        this.defaultHostname = config.defaultHostname || 'localhost';
        this.config = config;
    }

    public getHandler() {
        return async (req: NextRequest, res?: NextResponse) => {
            try {
                return await this.handler(req, res);
            } catch (error) {
                console.log('Redirect middleware failed:');
                console.log(error);
                return res || NextResponse.next();
            }
        };
    }

    private handler = async (req: NextRequest, res?: NextResponse) => {
        const pathname: string = req.nextUrl.pathname;
        const hostname: string = this.getHostHeader(req) || this.defaultHostname;

        if (this.isPreview(req) || this.excludeRoute(pathname)) {
            debug.redirects('skipped (%s)', this.isPreview(req) ? 'preview' : 'route excluded');
            return res || NextResponse.next();
        }

        if (staticRedirectsFile.hostName.indexOf(hostname) > -1) {
            const urlPathName = decodeURIComponent(pathname).toLowerCase();

            for (const redirectItem of staticRedirectsFile.redirects) {
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

        debug.redirects('skipped (redirect does not exist)');
        return res || NextResponse.next();
    }

    protected isPreview(req: NextRequest) {
        return !!(
            req.cookies.get('__prerender_bypass')?.value || req.cookies.get('__next_preview_data')?.value
        );
    }

    protected excludeRoute(pathname: string) {
        return (
            pathname.startsWith('/api/') || // Ignore Next.js API calls
            pathname.startsWith('/sitecore/') || // Ignore Sitecore API calls
            pathname.startsWith('/_next') || // Ignore next service calls
            (this.config?.excludeRoute && this.config?.excludeRoute(pathname))
        );
    }

    protected getHostHeader(req: NextRequest) {
        return req.headers.get('host')?.split(':')[0];
    }
}

```

keep in mind the example above is a simplified version and you need to consider handling the multisite and caching in your implementation.

### When to use Netlify redirects or rewrites

- Generally, if your redirect can be handled with Netlify redirects, this is the preferred option because they are faster to evaluate.
- Identity, proxying, and country-based redirects are Netlify-specific features and must use Netlify redirects.
- If you need redirects or rewrites to be applied before loading static files, you must use Netlify redirects and rewrites.

### When to use Next.js redirects or rewrites instead of Netlify redirects

- If you are using a rewrite that points to a dynamic Next.js page, you must use Next.js rewrites. Next.js has no way of knowing what the rewritten page is when using Netlify rewrites, so the wrong page is likely to be rendered. Note that this only applies to rewrites, not redirects.
- If you need Next.js-specific features, such as regex path or header matching, you must use Next.js rewrites.

### Related documentations

<Row columns={2}>
  <Link title="Edge Redirects | Vercel Documentation" link="https://vercel.com/docs/edge-network/redirects" />
  <Link title="Next.Js Redirects | Vercel Documentation" link="https://nextjs.org/docs/app/api-reference/next-config-js/redirects" />
  <Link title="How can I increase the limit of redirects or use dynamic redirects on Vercel? | Vercel Documentation" link="https://vercel.com/guides/how-can-i-increase-the-limit-of-redirects-or-use-dynamic-redirects-on-vercel" />
  <Link title="Edge Config Limits | Vercel Documentation" link="https://vercel.com/docs/storage/edge-config/edge-config-limits" />
  <Link title="Redirects | Netlify Documentation" link="https://docs.netlify.com/routing/redirects/" />
  <Link title="Next.js redirects and rewrites on Netlify | Netlify Documentation" link="https://docs.netlify.com/frameworks/next-js/runtime-v4/redirects-and-rewrites" />
</Row>
