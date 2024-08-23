---
product: ['xm-cloud']
title: 'Experience Edge'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## How is content delivery connected with Experience Edge?

XM Cloud publishes and serves content exclusively to Experience Edge. The Edge for XM Connector is preconfigured as part of the XM cloud solution. Edge is a content delivery network (CDN) that uses a set of GraphQL libraries which your front-end application uses to retrieve content.

### Learn more about Experience Edge

<Row columns={2}>
  <Link title="Sitecore Experience Edge documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-experience-edge-for-xm.html" />
  <Link title="Working with Experience Edge Rate Limits and Caching" link="http://localhost:3000/learn/accelerate/xm-cloud/pre-development/project-architecture/rate-limits-and-caching" />
</Row>

## Is Experience Edge only available to customers using Sitecore Managed Cloud and the future XM Cloud?

Experience Edge is available today for both Content Hub and Experience Manager customers regardless of whether they are self-hosted, or using Sitecore Managed Cloud or XM Cloud.

## With XM Cloud, will there always be an Experience Edge tenant?

Since XM Cloud does not use Content Delivery servers, developers need to use the Experience Edge endpoint to query item and layout data build-time for static site generation, at runtime for server-side rendering or incremental static generation, and directly from the browser for client-side rendering. Experience Edge will not be hosting the public-facing application.

## Does relying on Experience Edge for all content and Layout services come with any limitations for multi-language and multi-site?

Experience edge will be able to handle these scenarios. The biggest change here is that switching sites/languages will need to be handled on the front end. i.e. you can't get the automatic language context switching you are used to when running on a server-side content delivery instance.

There are rate limits and other limitations applied to Experience Edge, please read more in the documentation:

<Row columns={2}>

  <Link title="Limitations and restrictions of Experience Edge for XM" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/limitations-and-restrictions-of-experience-edge-for-xm.html" />
  <Link title="Working with Experience Edge Rate Limits and Caching" link="http://localhost:3000/learn/accelerate/xm-cloud/pre-development/project-architecture/rate-limits-and-caching" />
</Row>
