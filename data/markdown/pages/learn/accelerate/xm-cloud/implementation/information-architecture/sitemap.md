---
title: 'Sitemap'
description: 'Configuration of Sitemap in XM Cloud'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-04-26'
created: '2024-10-07'
audience: ['Architect','Technical Implementer']
---

## Context

A marketer, strategist or content author would like to use industry standard SEO tools to ensure that all required content is discoverable and included in search engine indexes. To do this a sitemap is required. This recipe will walk the developer through the steps to configure a Sitemap in XM Cloud

## Execution

This solution assumes the developer has already configured an XM Cloud site and the Next.JS web application. XM Cloud uses SXA sitemap functionality by default. However it’s possible to implement additional Sitemap’s directly in the head application to target other sets of content, such as PDF’s or Images.

Avoid building the XM Cloud sitemap with custom implementations on the Content Management role, it can lead to maintenance challenges, compatibility issues, and unnecessary complexity—leveraging the built-in sitemap generation ensures reliability, scalability, and alignment with best practices.


Setting this up will require:
- An SXA Site with properly configured site definitions
- The site has been published to Experience Edge.

To configure the Host name for your Sitemap you’ll need to udpate the target hostnmane and hostname on the `Site` level. Detail of this can be found on the [Configure a sitemap](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html) documentation.

XM Cloud sitemaps can be managed using the configuration options available in [Sites](https://doc.sitecore.com/xmc/en/users/xm-cloud/configure-a-sitemap-in-sites.html). Configure the sitemap to guide search engines through your site's structure. The sitemap is regenerated after the publishing process ends, depending on the refresh threshold configuration. To ensure that the sitemap link is generated properly for your hosted/live sites, you must configure the target hostname on the site host item. Find the sitemap of hosted/live sites by typing /sitemap.xml after the hostname

XM Cloud generates the Sitemap media item when an item is published on the Site, but only after a period of time has passed since the last sitemap generation job occurred. This media item contains the Sitemap.xml file that is served in Experience Edge.

XM Cloud sitemaps are configured on `/sitecore/content/<site collection>/<site>/Settings/Sitemap`. Detail of this can be found on the [Configure a sitemap](https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html) documentation.


### Excluding Items and Publishing

To configure an item so that it’s excluded from the Sitemap you can follow the following list of steps:

1. Go to the Content Editor
2. Find your current site and find a content item that you want to exclude from the Sitemap. For example, the homepage which is located at: `<site collection>/<site>/Home`
3. Under the "Sitemap settings" section configure the `Change frequency` field to "do not include"
4. Save and then Publish this item.
5. Depending on the configuration of the caching configuration of your sitemap, wait until the cache has expired and check again. You can also go to the Sitemap configuration item here: `<site collection>/<site>/Settings/Sitemap` and update the field "Refresh threshold" to test these changes by setting the value to 0. Just make sure to update this value back to the previous value once you complete testing.

## Insights

### Managing the sitemap in the Head Application
XM Cloud sitemaps can also be managed directly within the Head application by leveraging [Next.js's built-in sitemap metadata API](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap). This approach allows developers to generate and serve sitemaps dynamically within the app directory.

By defining a `sitemap.ts` file within the `app` directory, you can programmatically structure the sitemap data based on your site's content, fetching necessary routes from the Experience Edge.

While XM Cloud provides built-in sitemap generation, if your sitemap requirements are more complex—such as needing dynamic URL generation, multiple sitemap files, or further conditional route inclusion—managing sitemaps within the Head application can be a viable option. This approach allows greater flexibility, enabling you to fetch and structure sitemap data dynamically based on your XM Cloud content, apply custom logic, integrate with external data sources if needed.


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

Below are some helpful tips to troubleshoot issues with the generation of your Sitemap XML. Keep in mind that the below has to be actioned in the [Content Editor](https://doc.sitecore.com/xmc/en/users/xm-cloud/the-content-editor.html).

#### The Sitemap is not reflecting the most recent published changes

Sitecore will cache the last built Sitemap, and even though you’ve published, it won’t rebuild the sitemap until a specific amount of time has passed. You can change these default cache timeouts in the `<site collection>/<site>/Settings/Sitemap` item, though it is recommended to use the default settings. The two settings on the `Sitemap` item to look at changing during testing are the `Refresh threshold` and `Cache Expiration`.

#### Understanding where the generated Sitemap is stored

If you have clicked the check box on `<site collection>/<site>/Settings/Sitemap` on the field labeled `Generate sitemap media items - if checked sitemaps will be stored in media items` then the generated output of the Sitemap will be stored in the Media Library. On the `<site collection>/<site>` item you will see a field called `Sitemap media items` which will specify the sitemap(s) that are being used. You can either view this field with the raw values view turned on in order to see the item ID and then search with the ID to find its location in the content tree, or you could also search for `sitemap` to find it as well. Another option is to navigate to the Media Library and the following folder: `Project/<site>/<site>/Sitemaps/<site>` and you'll find a list of your sitemaps.

## Related Recipes

<Row columns={2}>
  <Link title="Publishing to Edge" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge" />
  <Link title="Publishing optimization" link="/learn/accelerate/xm-cloud/optimization/publishing-optimization" />  
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Configure a sitemap" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/configure-a-sitemap.html" />
   <Link title="Configure a sitemap in Sites" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/configure-a-sitemap-in-sites.html" />
</Row>

