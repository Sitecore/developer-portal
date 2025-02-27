---
title: 'Incrementally updating Search'
description: 'Update Search indexes based on content updates in XM Cloud'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
created: '2025-02-27'
lastUpdated: '2025-02-27'
audience: ['Architect','Technical Implementer', 'System Administrator', 'User']
---

## Context
Content being crawled by [Sitecore Search](https://doc.sitecore.com/search) needs to be regularly updated - but commonly, we do not require indexes to be updated for all website content at the exact same time.  Sites are indexed periodically via crawlers and need to be incrementally updated when a content editor modifies that page, without the need to completely re-index the entire site. 

This article discusses how to integrate Sitecore Search with XM Cloud. If you need to integrate a different search or content provider, please consider these techniques when deciding if they can be applied to your scenario.

Any functionality that depends on incremental updates, including the following, must have [Snapshot Publishing](https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html) configured in XM Cloud.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.


## Execution
Let’s consider that the website pages are indexed by using the following meta data: 

```html
<meta property="og:title" 
  content="this field contains the page title, eg. product name, service name">
<meta property="og:id" 
  content="unique identifier, eg. ee5c9a43-1afd-446b-a048-b1ee3686e774">
<meta property="og:description" 
  content="this field contains a summary of the page contents">
<meta property="og:category" 
  content="it contains the content type, e.g. Product, Service">
```

The `og:title` is populated by using the page `Title` while the `og:description` uses the page’s `Content` field. The property `og:idis` the page `item ID`, while `og:category` is a static value and depends on the website section - for example the page /our-products/men/t-shirt-abc could have the `og:category` value _Product_.

The site is indexed initially via a crawler, and from then on, once a page is modified it is to be indexed individually.

<figure><img src="/images/learn/accelerate/xm-cloud/xmcloud-search-high-level.png" alt="High Level Architecture, Sitecore products and a middleware"/><figcaption>High Level Architecture, Sitecore products and a middleware</figcaption></figure>

To meet the requirement of indexing the page as soon as it’s modified, we have to implement an [Incremental Update](https://doc.sitecore.com/search/en/users/search-user-guide/enable-incremental-updates-for-a-crawler.html) indexing. That is a Search’s web crawler able to accept incremental updates: the single page is not crawled (to be updated) while it is updated via the API PUT or PATCH and re-indexed in the next available batch.

Utilizing the following process adds an update operation to the Search index build queue. While that queue is being processed, updates may have a slight delay, however this is negligible compared to the wait for the next scheduled website crawl (e.g 24 hours). Therefore, index updates may not be ‘immediate', but they are ‘near-immediate’.

### XM Cloud & Search setup

First we need to make sure that the meta data is added to the header in XM Cloud, for example:

```html
<meta property="og:title" content={title} />
<meta property="og:description" content={fields?.Content?.value?.toString() || title} />
<meta property="og:category" content="Product" />
<meta property="og:id" content={route?.itemId} />
```
The field `og:idis` used as document id in Search.

Create a [web crawler in Search](https://doc.sitecore.com/search/en/users/search-user-guide/configure-a-web-crawler.html), the _Document Extractor_ could be something like:

```javacript
function extract(request, response) {
    $ = response.body;
    let url = request.url.toLowerCase();
    let category = 'Others';
    if (url.includes('/products')) {
        category = 'Products';
    } else if (url.includes('/services')) {
        category = 'Services';
    } else if (url.includes('/people')) {
        category = 'People';
    }
    let id = $('meta[property="og:id"]').attr('content') || url.replaceAll('/', '_').replaceAll(':', '_').replaceAll('.', '_');
    let name = $('meta[property="og:title"]').attr('content') ||  url.split("/").pop();
    let description = $('meta[property="og:description"]').attr('content') || name;
    return [{
        'id': id,
        'name': name,
        'description': description,
        'type': category,
        'url': url    
    }];
}
```

It is important to enable _Incremental Updates_ in the source:

<figure><img src="/images/learn/accelerate/xm-cloud/incremental-updates.png" alt="Incremental Updates in Sitecore Search Crawler"/><figcaption>Incremental Updates in Sitecore Search Crawler</figcaption></figure>

If the crawler is going to be scheduled, which is most of the cases, it is recommended to configure it as daily or weekly.

### Middleware
Now that XMCloud and Search is setup, we need to move to the Middleware to setup the incremental update - in this recipe, we’ll focus on content updates to existing pages, see [Insights](#insights) for more information on Create/Delete and handling large updates. The Middleware can be implemented in any technology of your preference. The main steps to implement are always the same:

1. Receive the [webhook notification](https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhooks.html) from Experience Edge - The webhook payload has a JSON format like the snippet below named “Webhook notification format”, where the cardinality of the itemupdates is equal to the number of items that XM Cloud sends to Edge, for this reason a single massive publishing operation could generate more than one webhook notification like a chain. The chain is identified via the field invocation_idand terminated when the field continuesassumes false as value. 

```json
{
  invocation_id: '7002805d-9bee-4b74-b53c-ac877d79384c',
  updates: [
    {
      identifier: '02818D147B0B45FBA91AB5E94C6AF773-layout',
      entity_definition: 'LayoutData',
      operation: 'Update',
      entity_culture: 'en'
    },
    {
      identifier: 'BCBA520F3FA844F2A8FF5B4065CAB566-layout',
      entity_definition: 'LayoutData',
      operation: 'Update',
      entity_culture: 'en'
    },
    ...omissis...
    {
      identifier: '02818D147B0B45FBA91AB5E94C6AF773',
      entity_definition: 'Item',
      operation: 'Update',
      entity_culture: 'en'
    },
    {
      identifier: '3F9810D242804DE7ADEE6C40616A077B-layout',
      entity_definition: 'LayoutData',
      operation: 'Update',
      entity_culture: 'en'
    }
  ],
  continues: false,
  op: 'OnUpdate'
}
```

2. Filter the `updates` array by selecting the ones with `entity_definition` equals to `LayoutData`.
3. It is important to remove the ‘-layout’ token from the `identifier` and format it as GUID otherwise the graphQL query may not work.
4. For each identifier, retrieve the `Title` and the `Content` from Experience Edge via graphQL query.
  <ul>
  <li>It could be done in one single query, for example the query below is able to retrieve more than one item in a single call. As you can see, one or more template ID(s) can be used to be sure to retrieve the expected contents.</li>
  <li>If we are updating existing pages, the field related to the Category will not be retrieved because it is expected that it will not change as it is related to the section of the website.</li>
  </ul>
  ```json
  query{
    search(first: 10,
      where: {
        AND: [{
            name: "_templates"
            value: "${templateId}"
            operator: CONTAINS
            }
            { OR:
                [
                {name: "_path", value: "{02818D14-7B0B-45FB-A91A-B5E94C6AF773}", operator: CONTAINS }
                {name: "_path", value: "{BCBA520F-3FA8-44F2-A8FF-5B4065CAB566}", operator: CONTAINS }
                {name: "_path", value: "{3F9810D2-4280-4DE7-ADEE-6C40616A077B}", operator: CONTAINS }
                ]
            }
            { name: "_language", value: "en" }
            { name: "_hasLayout", value: "true" }
        ]
    }) {
            total
            results {
                id
                name
                path
                language{ name }
                Name: field (name:"Title"){ jsonValue }
                Description: field (name:"Content"){ jsonValue }
            }
        }
}
  ```
5. The GraphQL results is a JSON as the snippet below  loop on it to patch Search one document at time - the GraphQL results could contain more items then expected, so it is important to compare the `id` in `results`with the `identifier` in the webhook notification.

  ```json
  {
    "search": {
      "total": 100,
      "results": [
        {
          "id": "02818D147B0B45FBA91AB5E94C6AF773",
          "name": "Product ABC",
          "path": "/sitecore/content/mycoll/my-site/Home/Product/ABC",
          "language": {
            "name": "en"
          },
          "Name": {
            "name": "Title",
            "jsonValue": {
              "value": "Product ABC NewLine"
            }
          },
          "Description": {
            "name": "Content",
            "jsonValue": {
              "value": "This is our best ....omissis..."
            }
          }
        },
        ...omissis...
      ]
    }
  }
  ```

6. At the time of writing, batch updates are not supported in Search: a single request updates a single document. Pay attention to the following when generating the PATCH operation:
<ul>
<li>The Search Ingestion API endpoint could be *geo specific*,</li>
<li>The URL has to contain the *documentID* that, in this case, is the `itemID` (`og:id`) in *lowercase* format,</li>
<li>The URL has to contain the *entityType* that, in this case, is `content` but it could be different if you are using a multi-entity tenant,</li>
<li>The URL has to contain the *locale* that, in this case, is `en_us` but it could be different if you are using a multi-locale source,</li>
</ul>

For example, to patch `{02818D14-7B0B-45FB-A91A-B5E94C6AF773}`, the URL is as follows - where _1234567890_ is the `domain ID` and _09876543_ is the `source ID`:

```url
https://discover.sitecorecloud.io/ingestion/v1/domains/1234567890/sources/09876543/entities/content/documents/02818d14-7b0b-45fb-a91a-b5e94c6af773?locale=en_us
```

An example of PATCH operation is the following snippet: 
```html
const response = await fetch(`https://${REGION}.sitecorecloud.io/ingestion/v1/domains/${DOMAIN_ID}/sources/${SOURCE_ID}/entities/content/documents/${item.id}?locale=${item.locale}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': API_KEY as string
    },
    body: JSON.stringify({
        document: {
            id: item.id,
            fields: {
                name: item.name,
                description: item.description
            }
        }
    })
});
```

### Experience Edge
Once the Middleware is setup, it needs to be registered via [webhook](https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-objects.html) as _OnUpdate_:

```typescript
curl https://edge.sitecorecloud.io/api/admin/v1/webhooks -i -X POST /
-H "Content-Type: application/json;" /
-H "Authorization: Bearer ..." /
-d @- << EOF
{
  "label": "OnUpdate EDGE webhook to my mw",
  "uri": "https://my-mw/route",
  "method": "POST",
  "headers": {
    "x-header": "EDGE Webhook OnUpdate"
  },
  "bodyInclude": "{\"op\":\"OnUpdate\"}",
  "createdBy": "myself",
  "executionMode": "OnUpdate"
}
EOF
```

### Considerations
Setting this up for an end-to-end setup, there are other area’s that need to be considered based on your requirements: 

<ol>
<li>Consider the creation of new pages in XM Cloud (documents in Search) in comparison to updates. It could be implemented by executing a [create document](https://doc.sitecore.com/search/en/developers/search-developer-guide/creating-a-document-by-passing-attribute-values.html) if the patch operation returned 404. Another alternative is using [update](https://doc.sitecore.com/search/en/developers/search-developer-guide/updating-a-document.html) - the PUT (update) and PATCH (partially update) methods differ: <ul><li>Use `PUT` (update) to replace all fields with the values you pass and delete fields you do not pass. If the document does not exist, the'PUT' operation returns 200 and creates the document.</li><li>Use `PATCH` to replace the fields you pass and leave other fields as-is. If the document does not exist, the `PATCH` operation returns 404.</li></ul>For this reason, in our case, if you implement `PUT` (update) then you need to pass the attributes `name`, `description` and `category`.</li>
<li>In this recipe, we use the meta data to index a page - the page content could be indexed by retrieving the `rendered` field in the GraphQL query. </li>
<li>Regarding the page locale, only `en` is used. The locale is part of the webhook notification, field `entity_culture`. You can leverage it to work with a multi-locale source in Search. </li>
<li>The Middleware needs to handle removing of existing pages. In this case you should receive a [notification](https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-objects.html#webhookedit) from Experience Edge with `operation: 'Delete'`, allowing you to follow the same pattern to implement a [delete](https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-objects.html#webhookedit) operation for Search. </li>
<li>Web pages generated by the front-end application often use multiple, external datasources in addition to the content inside of XM Cloud, in which case you would need to retrieve this additional information from the middleware and update the documents in Search accordingly. </li>
<li>Updates are always coarse because it could be very complex to selectively identify from the source which attributes have been modified for each document. </li>
</ol>

## Insights
It makes sense to ask if and when to use the incremental approach. First of all we must consider that Sitecore Search’s ingestion API has an upper limit on daily requests. Furthermore, as mentioned, updates are not immediate, so this approach may not be ideal for cases when indexing large portions of the site or the entire site. It is seen as a good compromise to use it to update content promptly without necessarily having to re-index the entire site.

A basic solution is to define a new page property in XM Cloud, name it `Reindex` (boolean): 

<figure><img src="/images/learn/accelerate/xm-cloud/re-index-property.png" alt="Reindex property in the Page template"/><figcaption>Reindex property in the Page template</figcaption></figure>

when it is ‘true’ then the middleware will process the updates. This property could be 'false' by default and set to 'true' when needed: 

<figure><img src="/images/learn/accelerate/xm-cloud/re-index-explorer.png" alt="The Reindex property ediable in Explorer"/><figcaption>The Reindex property ediable in Explorer</figcaption></figure>



The middleware could use the query like the following to leverage on the `Reindex` attribute:

```typescript
query{
    search(first: 100,
      where: {
        AND: [{
            name: "_templates"
            value: "${templateId}"
            operator: CONTAINS
            }
            { OR:
                [
                {name: "_path", value: "{505D9B3D-D96E-41DE-9F39-CBB64482841A}", operator: CONTAINS }
                {name: "_path", value: "{0156223F-AAC2-45CF-AC90-5E43ED88DB02}", operator: CONTAINS }
                {name: "_path", value: "{3F9810D2-4280-4DE7-ADEE-6C40616A077B}", operator: CONTAINS }
                ]
            }
            { name: "_language", value: "en" }
          	{ name: "_hasLayout", value: "true" }
            { name: "Reindex", value: "1" }

        ]
    }) {
            total
            results {
                id
                name
                path
                language{ name }
                Name: field (name:"Title"){ jsonValue }
                Description: field (name:"Content"){ jsonValue }
              	Reindex: field(name:"Reindex"){ jsonValue }
            }
        }
```
If the item has the `Reindex` as ‘true’ then the middleware sends the incremental update to Search. If it is ‘false’ then the middleware skips the item

Similarly, a more advanced middleware could manage an additional page property named `ReindexDescendants` that when ‘true’ causes Search to index its descendants if any identifier appears in any notifications.

Consider that these page attributes do not change the way XM Cloud publishes, nor how Experience Edge notifies the middleware via webhook; they are just attributes like `name` and `description`. `Reindex` and `ReindexDescendants `could be used by the middleware to make a decision on how to perform incremental update against Search.

### How to protect from large updates
The `Reindex` property is an option to control the incremental update but it could be not enough, for example, the user sets it to ‘true’ to all pages or misuse the `ReindexDescendants` property and then republish the site. In this case Search would be overwhelmed by individual operations.

A more clever middleware could instead observe a *stateful approach* and leverage on the XM Cloud [webhook notifications](https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-event-handler-configuration-fields.html#supported-events) in addition to Experience Edge notifications. The middleware could use the `publish:begin` event (XM Cloud notification) to understand if it is a full site publishing:

<figure><img src="/images/learn/accelerate/xm-cloud/full-publish-event.png" alt="Full publish event"/><figcaption>Full Publish event</figcaption></figure>

or if it is not:

<figure><img src="/images/learn/accelerate/xm-cloud/single-item-publish-event.png" alt="Single publish event"/><figcaption>Single Publish event</figcaption></figure>

If it is a full site publish operation then the middleware will not update Search until an `OnEnd` notification (Experience Edge notification) will come.



## Related Recipes

<Row columns={2}>
  <Link title="Integrating Sitecore Search" link="/learn/accelerate/xm-cloud/implementation/sitecore-search/integrating-sitecore-search" />
  <Link title="Publishing to Experience Edge" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Publishing to Experience Edge" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html" />
  <Link title="Enable incremental updates for a crawler" link="https://doc.sitecore.com/search/en/users/search-user-guide/enable-incremental-updates-for-a-crawler.html" />
  <Link title="Webhook objects" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-objects.html" />
  <Link title="Creating a document by passing attribute values" link="https://doc.sitecore.com/search/en/developers/search-developer-guide/creating-a-document-by-passing-attribute-values.html" />
    <Link title="Webhook event handler configuration fields" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-event-handler-configuration-fields.html#supported-events" />
</Row>