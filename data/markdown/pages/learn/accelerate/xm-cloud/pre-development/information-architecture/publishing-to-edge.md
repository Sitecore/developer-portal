---
title: 'Publishing to Experience Edge'
description: 'Understand and improve the publishing experience on Experience Edge'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-04-30'
created: '2024-10-08'
audience: ['Architect','Product Owner','Technical Implementer', 'System Administrator']
---

## Context

Publishing is an important moment in any content life cycle. Through publishing, companies effectively communicates with the outside world about messages, mission, products and everything it wants to present.

The publishing process can be on a page, a section or the entire site. Despite the publication item, the process may require publication of other items, so-called related items. For this reason, publishing is a delicate operation that may require many CMS resources to be completed - authors should be aware of the process and requirements on publication operations.

## Execution

The solution to improve the publishing experience is through the application of practices concerning several aspects of the solution design like, for example, the Information Architecture, the configuration of the Connector and the publishing workflow. 


### Publishing Overview

Publishing in a headless setup works different from PaaS/IaaS with the introduction of Edge, in this case Experience Edge.

Publishing with a app server, historically known as Content Delivery for Sitecore XM/XP and other DXPs, moved data between databases while SaaS CMSs use an Edge service to delivers static information to the client, therefore all layout service logic needs to run during the publish process. 

With Content Delivery servers, single items were published, meaning the were copied from Master database to Web database. On request the Content Delivery server took the items from Web database and generated the Layout Service response. 

<img src="/images/learn/accelerate/xm-cloud/publish-edge-1.png" alt="How it works with Content Delivery servers"/>

<br/>

With Experience Edge this works different - Edge is not a 1-to-1 match to a Sitecore database. Not all properties of an item are published to Edge.

During Publish time on XM Cloud, the Layout Service generates a static Layout response, collecting all necessary items for the pages where the published item is referenced. The generated layout snapshot is then pushed to Experience Edge, which delivers this static data to the Head applications on request via GraphQL. 

<img src="/images/learn/accelerate/xm-cloud/publish-edge-2.png" alt="How it works with Experience Edge"/>

<br/>

The following graphic shows in detail how the headless architecture works with Experience Edge. Review the [Architecture of Sitecore Experience Edge](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-architecture-of-sitecore-experience-edge-for-xm.html) documentation for further detail.

<img src="/images/learn/accelerate/xm-cloud/publish-edge-3.png" alt="The architecture of Sitecore Experience Edge for XM"/>

<br/>
It’s important to highlight the “layout snapshot” that is pushed to Edge via the Experience Edge Connector might differ based on your type of publishing setup:
- Snapshot publishing  - stores the JSON as a single entity on Experience Edge.
- Edge runtime publishing - stores the main structure layout, with separate references to each data source.

Review the [publishing pipelines](https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html#publishing-all-items) documentation for more additional detail. Consider that the Snapshot publishing is required for Incremental Static Regeneration and [Incrementally updating Search](/learn/accelerate/xm-cloud/implementation/sitecore-search/search-incremental-updates).


### Limitations in Experience Edge

When designing your headless application, consider both the new architecture and [limitations that Experience Edge](https://doc.sitecore.com/xmc/en/developers/xm-cloud/limitations-and-restrictions-of-experience-edge.html) has; in particular, about solution design. It is worth highlight the following:

* Experience Edge for XM does not enforce security constraints on Sitecore content. You must apply publishing restrictions to avoid publishing content that you do not want to be publicly accessible.
* Experience Edge for XM only utilizes a single content scope for the whole tenant. Security tokens, query cache clearing, and webhooks cannot be limited by site.
* The maximum size for Media items is 50MB.
* Experience Edge doesn't support virtual folders and aliases.
* Although it is a high standard for the CMS industry, the XM Cloud Experience Edge GraphQL endpoint is rate-limited. If you are building a very large website, you must [enable retries for requests to the XM Cloud Experience Edge GraphQL endpoint](https://doc.sitecore.com/xmc/en/developers/jss/216/jss-xmc/enable-retries-for-requests-to-the-xm-cloud-experience-edge-graphql-endpoint.html) to complete builds.
* Layout data in Experience Edge only supports the Default device layer in item presentation. Delivering content based on different devices such as mobile is now a front-end responsibility.

### Dependency resolving during publish

As said, despite the publication item, the process may require publication of other items, for this reason, it is worth introducing the concept of **dependency resolution.**

When an item is published to Edge, dependencies are calculated for the item and added to the publishing pipeline. Because these items are being published, all items that depend on the new items are also published. Any items identified as a dependency are included in the publication queue, regardless of whether they have changed. The process repeats until no new publishable items are found.

Review the [Publishing optimizatio](/learn/accelerate/xm-cloud/optimization/publishing-optimization) recipe for more detail on dependency resolution.

The dependency resolution process is one of the main reasons to implement workflows: it's possible for one user to make a change that causes a page another user is working on to be published. Even a simple two-step workflow consisting of *Draft* and *Publish* statuses is sufficient to ensure a website only shows completed content.

Further detail can be found on the [Publishing to Experience Edge](https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html#the-publishing-pipeline) documentation.

### How to increase publishing performance

The process can be very complex and depends on many factors. We can consider the following list as general recommendations which should always be compared with project requirements:

* **Review the ancestor collecting** - relationship between content items are key for performance, review the detail provided in the discussion below.
* **Review the default Publishing options** as used in Pages as, review the detail provided in the discussion below.
* **Publish items batched by individual languages** instead of publishing all languages at once. This reduces the number of items which need to be kept in memory during the publishing process, which enables publishing to finish more efficiently.
* **Use the "Publish related Items" option carefully** when publishing from Content Editor. If the user is using Content Editor, Sitecore does not recommend doing a related item publish from the root of the sitecore tree ( /sitecore/ ) when publishing subitems. Instead, users should do a full publish.
* **Remove cyclic references in the site architecture**. Publishing time can increase significantly if the site architecture includes circular dependencies. For example, if the home item is used as a data source in a header or footer, and a change is made to that item. This relationship will lead to a highly complex and time-consuming dependency check since many pages include the header or footer, so a change to the home item in this case will essentially lead to all pages having to be evaluated and published.
* Introduce the **Web Content Publisher** role if necessary, further detailed is discussed below.
* **Disable the storing of the Sitemap in cache**. When publishing a large volume of items, XM may need a significant amount of memory to complete. If a large Sitemap is stored in cache, this reduces the memory available for the publishing task. Configure each site to store the Sitemap in file by changing the Sitemap Cache Type from “Stored in cache” to “Stored in file”.

## Insights

### Publishing in Pages

In XM Cloud, Pages is the main editing tool designed for marketers and to improve productivity.

In Pages, [when you publish a page](https://doc.sitecore.com/xmc/en/users/xm-cloud/publish-a-page.html), it is the current language version of the page and all related items that are published using the Smart publish process.

Depends on the project requirements, the information architecture and the publishing workflow you want to implement but, if required, it is possible to override the default publishing options and fully disable related item publishing by adding a patch file to turn off the setting `ExperienceEdge.ProcessRelatedItems`:

```
<configuration xmlns:role="http://www.sitecore.net/xmlconfig/role/" xmlns:patch="http://www.sitecore.net/xmlconfig/" >
  <sitecore role:require="Standalone or ContentManagement or XMCloud">
    <settings role:require="XMCloud">
      <setting name="ExperienceEdge.ProcessRelatedItems" value="false"/>
    </settings>
  </sitecore>
</configuration>
```

### Pay attention to how the ancestor items are managed

During single item publishing, ancestor items of local data source items are also published to Edge by default, which can slow down the publishing.

For example, let’s assume there is a page named `‘/sitecore/content/mycoll/my-site/home/page1'` that has a reference to `'/sitecore/content/mycoll/my-site/home/page2/Data/Text1’` (that is a data item of another page), then when page1 is published (with related items) also page2 will be published, just not only Text1.

You [can disable the collecting of ancestors](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003198) by [creating a patch file](https://doc.sitecore.com/xmc/en/developers/xm-cloud/use-a-patch-file-to-customize-the-sitecore-configuration.html#UUID-93caf810-0c58-7fe9-21bb-76461faca4c2_id__Create_a_patch) that sets the ExperienceEdge.IncludeDependencyAncestors setting to false. When you publish an item, the system queries Edge to find all other items that depend on that item, and adds them to the publishing pipeline, for this reason remember to republish the site with Smart Publish to remove existing dependencies.

### Smart Publish, Incremental and the role of the Web Content Publisher

**Smart publish** determines which item to publish before calculating dependencies . This allows it to skip items and their dependencies if nothing has changed.

Smart publish is needed when you have to remove existing dependencies in Edge and, in general, it is a good way to manage publishing in particular for single page or small sections. Comparing all items in the database makes this a time-consuming way of publishing your entire or even large sections of the website so, in specific conditions, it is better to re-publish the entire section other than publish it with the smart option.

A good compromise between smart and full publishing is the incremental option. **Incremental Publish** publishes only the items that were added to the publish queue in the master database in the last 30 days - (to be added to the publish queue, an item must have been created, saved, copied, cloned, deleted, or archived, and must have reached the last step of approval if workflows were implemented for the item).

Incremental Publish is only available at site level, for this reason, it might be worth defining the **Web Content Publisher** role that is responsible for the publication of the site and subsequent rollouts. This role, in agreement with marketers, will define the publication windows based on planned campaigns and updates. Using the incremental approach in a recurring way, updates will be linear and stress the whole system less. As already mentioned, to be effective, the contents must be managed by a publishing workflow, this to avoid incomplete content being inadvertently made public.

### Custom Contents Resolvers

Contents Resolvers are used with the Sitecore Layout Service to provide more complex data beyond the serialization of a component data source. A Contents Resolver gets executed when the page (layout) is rendered (in the GraphQL response it is the “rendered” property). This occurs in different contexts: in Experience Editor, in the Experience Preview. In these instances, the context is known because XM Cloud parses the request.

This is not possible in Experience Edge - Edge is able to execute “custom” code, so no Contents Resolvers can run on it. So it gets executed at publishing time when the runtime context (eg. from visitor’s browser interactions) is not known.

Due to this, Custom Content Resolvers are not supported in XM Cloud - XM Cloud resolvers such as the Navigation Contents Resolver, that should be utilized but custom Content Resolvers should not be created. If you are migrating from XM/XP, review these resolves and plan where best to transfer.

### Integrated GraphQL

Integrated GraphQL is used to modify the default layout data format returned for a specific component, it is applied to renderings and it is used by the Layout Service. This gives more control over the data the front-end receives.

An Integrated GraphQL query could use additional data sources that may reside in any location of the site, the publishing pipeline is not aware of what are the related items, it executes the query and builds the layout, this operation is done at publishing time and occurs on XM Cloud and the data items are picked up from the master database, not from the Experience Edge.

This process is different in the [new Connector architecture](https://developers.sitecore.com/changelog/xm-cloud/18042024/faster-publishing-in-xm-cloud). The new architecture resolves the query at request time on the Edge (then it is cached). For this reason, related items need to be there to have the expected result. For example, if the query uses a non-children data source like the following:

```
query MyComponentQuery($datasource: String!, $contextItem: String!, $language: String!) {
  ...omissis...
  extraFields: item(path: "/sitecore/content/mycoll/mysite/Home/About/Data/Text 1", language: "en") {
    name
    mFields: fields {
      name
      jsonValue
    }
  }
}
```

It is required to already have published - “/sitecore/content/mycoll/mysite/Home/About/Data/Text 1” . The connector is not aware about the relationships, so it cannot publish integrated GraphQL related items at publishing time.

The Integrated GraphQL' processing time depends on the query - if the query includes several data items, of course, it impacts on the publishing time; for these reasons it is recommended to use integrated GraphQL carefully and if the use case requires.

There are alternatives to Integrated GraphQL that do not impact on the Publishing performance like

* External (Connected) GraphQL, at front-end level against the Experience Edge.
* [Component-level data fetching](https://doc.sitecore.com/xmc/en/developers/jss/22/jss-xmc/component-level-data-fetching-in-jss-next-js-apps.html)

### How to debug publishing issues

You can enable debug level logging for the publishing log. This can be done by adding the following configuration patch file:

```
<configuration xmlns:role="http://www.sitecore.net/xmlconfig/role/" xmlns:patch="http://www.sitecore.net/xmlconfig/" >
  <sitecore role:require="Standalone or ContentManagement or XMCloud">
    <log4net>
      <logger name="Sitecore.Diagnostics.Publishing">
        <level>
          <patch:attribute name="value" value="DEBUG"/>
        </level>
      </logger>
    </log4net>
  </sitecore>
</configuration>
```

## Related Recipes

<Row columns={2}>
<Link title="Layout Routing" link="/learn/accelerate/xm-cloud/pre-development/project-architecture/layout-routing" />
<Link title="External Data Integration" link="/learn/accelerate/xm-cloud/implementation/external-data-integration" />
  <Link title="Workflow" link="/learn/accelerate/xm-cloud/implementation/information-architecture/workflow" />
  <Link title="Publishing optimization" link="/learn/accelerate/xm-cloud/optimization/publishing-optimization" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Publishing to Experience Edge" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html#the-publishing-pipeline" />
  <Link title="Headless Architecture" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-architecture-of-sitecore-experience-edge-for-xm.html" />
  <Link title="Admin API" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/admin-api.html" />
  <Link title="Enable retries to the Experience Edge Graphql Endpoint" link="https://doc.sitecore.com/xmc/en/developers/jss/216/jss-xmc/enable-retries-for-requests-to-the-xm-cloud-experience-edge-graphql-endpoint.html" />
  <Link title="Slowness during single item publishing to Experience Edge | Sitecore KB" link="https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003198" />
</Row>
