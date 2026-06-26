---
title: 'Performance-optimized page listing'
description: 'Performance-conscious implementation pattern for rendering page listings-such as navigation or child item components-in Sitecore XM Cloud'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-06-30'
created: '2025-06-30'
audience: ['Architect','Technical Implementers','Solution Architects']
---

## Context
Some implementation require page listings where a list of child items, such as navigation components are listing a set number of links of the list. Performance is a considerations that is required, as every time a new page is created, the website has to be republish which might impact productivity of authors. 

> Consider that this is limited for the use cases discussed here, for full search experiences with faceting and filtering, consider [Sitecore Search](https://developers.sitecore.com/learn/accelerate/xm-cloud/implementation/sitecore-search/integrating-sitecore-search).


## Execution
There are multiple ways to approach this based on the different use cases that align with [Snapshot publishing](https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html).

### Using Rendering Component with Child Content Resolver
This approach is useful when displaying direct children items in the parent page, such as gallery/ products listing. This runs during the publishing time of the page item to resolve the required items in the page layout and store it in Edge

#### Implementation
The children items that will be used in the rendering component should be under a single datasource item item used by the rendering in the page item. Configure the rendering component that will fetch children items as follow:
1. Choose ‘*Datasource Item Children Resolver*’ for ‘*Rendering Contents Resolver*’. This will help Layout Service to bring all the children items of the given datasource defined in the presentation details of the page.  
<img src="/images/learn/accelerate/xm-cloud/page-listing/Datasource Item Children Resolver.png" alt=""/>
<br/><br/>

2. Choose *‘Children’* for ‘*Content Dependencies*’.  This will help during the publishing when any child item of the datasource is changed and published, the page item using this rendering will be published as well.
<img src="/images/learn/accelerate/xm-cloud/page-listing/children.png" alt=""/>
<br/><br/>

In this case, Filtering and pagination are not supported; Layout Service will return all direct children of the datasource item. 

Any newly added child item after the page item has been published, page item must be manually republished again only once to reflect the changes into the page item layout.

### Using Rendering Component Integrated Graphql
This approach is useful when displaying direct children items in the parent page, such as gallery/ products listing similar to the Content Resolver with more control. This runs during the publishing time of the page item to resolve the required items in the page layout using the defined graphql query in the rendering component and store it in Edge.

#### Implementation
Configure the rendering component that will fetch children items as follow:

1. In rendering component graphql query, create your query to get all children pages under context page/datasource item.
2. Choose *‘Children’* for ‘*Content Dependencies*’. This will help during the publishing when any child item of the datasource is changed and published, the page item using this rendering will be published as well.
<img src="/images/learn/accelerate/xm-cloud/page-listing/children.png" alt=""/>
<br/><br/>

An advantage of this approach is that you can control the children returned based on a specific template, as well as determine which fields to return for each child item. However, there are limitations: advanced filtering and pagination are not supported, and the Layout Service will return all direct children of the datasource or context item. Additionally, if a new child item is added after the page item has been published, the page item must be manually republished once to reflect the change in its layout.

### Component Level Data Fetching
This approach is useful when displaying content of navigation component, or gallery/ products listing without any restriction in the location of the items to be returned. This runs during the build time of the head application using static site generation and refreshed during revalidation intervals to improve performance. It gets the response of the graphql query to inject it to the head component.

#### Implementation
Create graphql search query in the head app to call the edge and execute it in the build time in '`getStaticProps`'. Review the full detail in the [Getting Component Specific Data](/learn/accelerate/xm-cloud/implementation/external-data-integration/getting-component-specific-data) recipe.

This approach offers several advantages: you have full control over which items are returned, can specify the fields to include, and it supports filtering and pagination. Additionally, unlike the previous two solutions, there is no need to republish the page when child items are added or deleted. However, there are also limitations to consider: Poorly optimized search queries can negatively impact the build time of the head application and the page revalidation time. It’s also important to be mindful of Sitecore Edge’s rate limit on API calls per second.

### Selection the best option
Choosing the right method for retrieving child items depends on your implementation's scale, authoring expectations, content velocity, and required flexibility.

| Criteria                        | Child Content Resolver                                 | Integrated GraphQL in Rendering                        | Component-Level Fetching                              |
|--------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| **Description**                | Uses Layout Service resolver to return direct children from a datasource item | Embeds a GraphQL query into the rendering to fetch children | Executes a GraphQL query in the head app at build time |
| **Best For**                   | Static, direct child listings with fixed structure     | Filtered listings by template or field-level control   | Dynamic, decoupled listings (e.g., navigation, search) |
| **Content Structure**          | Strict hierarchy; children must be under the datasource | Structured hierarchy; can apply filters within scope   | Flexible; items can live anywhere in the content tree  |
| **Filtering & Pagination**     | Not supported                                          | Limited filtering, no pagination                       | Full support for filtering, sorting, and pagination    |
| **Developer Effort**           | Low – configuration only                              | Medium – requires query writing in rendering definition | High – requires head app query logic and integration   |
| **Authoring Experience**       | Manual republish of page after content changes         | Manual republish of page after content changes         | No republish needed; changes reflected automatically    |
| **Performance Impact**         | Fast but rigid; can bloat layout payload with many items | Moderate; depends on query complexity and scope        | Depends on query optimization and build/revalidation time |
| **Publishing Dependency**      | Page must be republished for child changes to appear   | Page must be republished for child changes to appear   | Not tied to publishing; follows ISR or rebuild logic   |
| **Snapshot Publishing Fit**    | Fully compatible                                       | Fully compatible                                       | Bypasses snapshot; uses Edge API via head app          |
| **Maintenance Needs**          | Low maintenance; but lacks flexibility                 | Moderate; requires upkeep of GraphQL query             | High; needs query tuning and monitoring                |
| **Use Case Examples**          | Blog listing under a parent, static gallery            | Campaign listings with template filter                 | Navigation menus, multi-source listings, search results |


## Insights
Each approach introduces different impacts to how content authors work that should be considered
- **Child Content Resolver** and **Integrated GraphQL** are tied to snapshot publishing. This means that when new child items are added or removed, the parent page must be republished to reflect those changes on the live site. This manual republish requirement can slow down authoring workflows and introduces a risk of stale or incomplete listings.
- **Component-Level Fetching**, by contrast, decouples page structure from content changes. As long as the content exists in the index, the head application will pick it up during the next static regeneration cycle. This eliminates the need for republishing the page and allows faster, more intuitive authoring.

It’s recommended that: 
- For resolver-based approaches, keep child items grouped under clear datasource folders to reduce dependency complexity.
- Communicate republish dependencies clearly to authors
- Consider adding automation to detect content changes and republish parent items when needed.

### Monitoring and Maintenance
To ensure performant implementations, it’s critical to monitor publishing behaviour and query performance across all three methods.
- For **Child Content Resolver** and **Integrated GraphQL**, monitor publishing queues and durations. Sudden increases in publish time may indicate that too many components depend on large content trees or that items are being republished unnecessarily.
- For **Component-Level Fetching**, review build logs for slow GraphQL responses or errors. Poorly written queries can significantly delay static builds and invalidate performance gains. Use Sitecore Edge monitoring tools to track API call frequency and latency, and avoid hitting rate limits during revalidation cycles.


## Related Recipes

<Row columns={2}>
  <Link title="Getting Component Specific Data" link="/learn/accelerate/xm-cloud/implementation/external-data-integration/getting-component-specific-data" />
  <Link title="Component Design Best Practices" link="/learn/accelerate/xm-cloud/pre-development/developer-considerations/component-design-best-practices" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Publishing to Experience Edge" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html" />
  <Link title="Experience Edge" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/experience-edge.html" />
</Row>
