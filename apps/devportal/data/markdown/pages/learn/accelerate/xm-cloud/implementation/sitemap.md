---
title: 'Sitemap'
description: 'Recipe for generation of Sitemap.xml that accurately reflects the canonical location of all published and not excluded pages.  Content authors should have the ability to control the composition of the sitemap while doing content entry of individual content items.'
hasSubPageNav: true
hasInPageNav: false
area: ['accelerate']
---

## Problem

A marketer, strategist. or content author would like to use industry standard SEO tools to ensure that all required content is discoverable and included in search engine indexes. To do this a sitemap is required. This recipe will walk the developer through the steps to configure a Sitemap in XMC.

## Solution

This solution assumes the developer has already configured an XM Cloud site and the Next.JS web application. XMC uses SXA sitemap functionality by default. However it’s possible to implement additional Sitemap’s directly in the head application to target other sets of content, such as PDF’s or Images.

### Prerequisites

- An SXA Site with properly configured site definitions
- The site has been published to Experience Edge.

To configure the Host name for your Sitemap you’ll need to make the following steps:

1. Go to the Content Editor
2. In the content tree, navigate to the site you want to configure, and find the following item: `<site collection>/<site>/Settings/Site Grouping/Site`
3. You will need to update the following fields with the domain(s) that you need in your sitemap:
   - `Target hostname`
   - `Hostname`
4. Publish this item

### Configuring

XMC generates the Sitemap media item when an item is published on the Site, but only after a period of time has passed since the last sitemap generation job occurred. This media item contains the Sitemap.xml file that is served in Experience Edge.

XMC sitemaps are configured using the following item: `/sitecore/content/<site collection>/<site>/Settings/Sitemap`. The following fields are the only relevant settings that should be configured or updated in XMC:

1. `Refresh threshold` - Duration is defined in minutes, this field controls how often the sitemap can be generated on publish.
2. `Cache expiration` - Should be configured to match the value set in `Refresh threshold`
3. `Maximum number of pages per sitemap` - When a value is provided, this field will cause the Sitemap to be generated as a Sitemap index, and limit the number of pages in each sitemap.
4. `Generate sitemap media items` - This is **required** to be enabled on XMC in order to properly work with Experience Edge.

### Excluding Items and Publishing

To configure an item so that it’s excluded from the Sitemap you can follow the following list of steps:

1. Go to the Content Editor
2. Find your current site and find a content item that you want to exclude from the Sitemap. For example, the homepage which is located at: `<site collection>/<site>/Home`
3. Under the "Sitemap settings" section configure the `Change frequency` field to "do not include"
4. Save and then Publish this item.
5. Depending on the configuration of the caching configuration of your sitemap, wait until the cache has expired and check again. You can also go to the Sitemap configuration item here: `<site collection>/<site>/Settings/Sitemap` and update the field "Refresh threshold" to test these changes by setting the value to 0. Just make sure to update this value back to the previous value once you complete testing.

## Discussion

### The Experience Edge sitemap GraphQL query

The following query is used to retrieve the generated sitemap for a site on Experience Edge:

```graphql
query SitemapQuery($siteName: String!) {
  site {
    siteInfo(site: $siteName) {
      sitemap
    }
  }
}
```

### How to Effectively Troubleshoot Issues

Below are some helpful tips to troubleshoot issues with the generation of your Sitemap XML.

#### The Sitemap is not reflecting the most recent published changes

Sitecore will cache the last built Sitemap, and even though you’ve published, it won’t rebuild the sitemap until a specific amount of time has passed. You can change these default cache timeouts in the `<site collection>/<site>/Settings/Sitemap` item, though it is recommended to use the default settings. The two settings on the `Sitemap` item to look at changing during testing are the `Refresh threshold` and `Cache Expiration`.

#### Understanding where the generated Sitemap is stored

If you have clicked the check box on `<site collection>/<site>/Settings/Sitemap` on the field labeled `Generate sitemap media items - if checked sitemaps will be stored in media items` then the generated output of the Sitemap will be stored in the Media Library. On the `<site collection>/<site>` item you will see a field called `Sitemap media items` which will specify the sitemap(s) that are being used. You can either view this field with the raw values view turned on in order to see the item ID and then search with the ID to find its location in the content tree, or you could also search for `sitemap` to find it as well. Another option is to navigate to the Media Library and the following folder: `Project/<site>/<site>/Sitemaps/<site>` and you'll find a list of your sitemaps.

### Related Recipes

<Row columns={2}>
  <Link title="Publishing to Edge" link="/learn/accelerate/xm-cloud/pre-development/information-project-architecture/publishing-to-edge" />
</Row>
