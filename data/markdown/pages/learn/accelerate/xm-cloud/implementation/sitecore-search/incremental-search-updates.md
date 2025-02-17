---
title: 'Incremental Search Updates'
description: 'Update Search indexes based on content updates in XM Cloud'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-02-14'
---

## Context
Content being crawled by Sitecore Search needs to be regularly updated - but commonly, we do not require indexes to be updated for all website content at the exact same time.  Sites are indexed periodically via crawlers and need to be incrementally updated when a content editor modifies that page, without the need to completely re-index the entire site. 

This article discusses how to integrate Sitecore Search with XM Cloud. If you need to integrate a different Search or Content provider, please consider these techniques when deciding if they can be applied to your scenario.

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
<br/><br/>
The <code>og:title</code> is populated by using the page <code>Title</code> while the <code>og:description</code> uses the page’s <code>Content</code> field . The property <code>og:idis</code> the page <code>item ID</code>, while <code>og:category</code> is a static value and depends on the website section - eg., the page _/our-products/men/t-shirt-abc_ could have the <code>og:category</code> value *Product*.

The site is indexed initially via a crawler, and from then on, once a page is modified it is to be indexed individually.

<figure><img src="/images/learn/accelerate/xm-cloud" alt="Incremental updates from XM Cloud to Search"/><figcaption></figcaption></figure>

To meet this requirement, we have to implement [Incremental Update](https://doc.sitecore.com/search/en/users/search-user-guide/enable-incremental-updates-for-a-crawler.html) indexing which implements a Search web crawler that is able to accept incremental updates via the Ingestion API. This process means the index is updated at the time when the content on Experience Edge has updated, rather than waiting for the next scheduled full-site crawl.

> Utilizing the following process adds an update operation to the Search index build queue. While that queue is being processed, updates may have a slight delay, however this is negligible compared to the wait for the next scheduled website crawl (e.g 24 hours). Therefore, index updates may not be ‘immediate', but they are ‘near-immediate’.

### XM Cloud and Search Setup
First we need to make sure that the meta data is added to the header in XM Cloud, for example:

```html
<meta property="og:title" content={title} />
<meta property="og:description" content={fields?.Content?.value?.toString() || title} />
<meta property="og:category" content="Product" />
<meta property="og:id" content={route?.itemId} />
```
<br/><br/>
The field <code>og:idis</code> used as <code>document id</code> in Search.

Create a web crawler in Search, the Document Extractor could be something like:

```javascript

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
<br/><br/>
It is important to enable <code>Incremental Updates</code> in the source.

<figure><img src="/images/learn/accelerate/xm-cloud" alt="Incremental Updates on Crawler"/><figcaption></figcaption></figure>


If the crawler is going to be scheduled, which is most of the cases, it is recommended to configure it as daily or weekly.

#### Middleware
Now that XMCloud and Search is setup, we need to move to the Middleware to setup the incremental update (in this recipe, we’ll focus on content updates to existing pages). The Middleware can be implemented in any technology of your preference. The main steps to implement are always the same:

<ol>
<li>*Receive the webhook notification from Experience Edge* - The webhook payload has a specific format; the cardinality of updates is equal to the number of items sent to Edge, for this reason a single massive publishing operation could generate more than one webhook notification like a chain. The chain is identified via the field <code>invocation_id</code> and terminated when the field <code>continues</code> assumes <code>false</code> as value.</li>
<li>Filter the <code>updates</code> array by selecting the ones with <code>entity_definition</code> equals to LayoutData.</li>
<li>It is important to remove the ‘-layout’ token from the <code>identifier</code> and format it as GUID otherwise the graphQL query may not work.</li>
<li>For each <code>identifier</code>, retrieve the <code>Title</code> and the <code>Content</code> from Experience Edge via graphQL query. <ul>  <li>It could be done in one single query, for example the query in [2.1] is able to retrieve more than one item in a single call. As showed in [2.1], one or more template ID(s) can be used to be sure to retrieve the expected contents.</li>  <li>If we are updating existing pages, the field related to the Category will not be retrieved because it is expected that it will not change as it is related to the section of the website.</li></ul></li>
<li>Loop on the GraphQL results [2.2] to patch Search one document at time - the GraphQL results could contain more items then expected, so it is important to compare the <code>id</code> in <code>results</code> [2.2] with the <code>identifier</code> in the webhook notification [1]. <ul><li>At the time of writing, batch updates are not supported in Search: a single request updates a single document.</li>  <li>The Search Ingestion API endpoint could be *geo specific*.</li>  <li>The URL has to contain the *documentID* that, in this case, is the <code>itemID</code> (<code>og:id</code>) in lowercase format.</li>  <li>The URL has to contain the *entityType* that, in this case, is <code>content</code> but it could be different if you are using a multi-entity tenant.</li>  <li>The URL has to contain the *locale* that, in this case, is <code>en_us</code> but it could be different if you are using a multi-locale source.</li></ul></li>

For example, to patch  **\{02818D14-7B0B-45FB-A91A-B5E94C6AF773\}**, the URL is:
```url
 /entities/content/documents/02818d14-7b0b-45fb-a91a-b5e94c6af773?locale=en_us
```
</ol>
<br/><br/>
#### Considerations
Setting this up for an end-to-end setup, there are other area’s that need to be considered based on your requirements:
<ul>
<li>Consider the creation of new pages in XM Cloud (documents in Search) in comparison to updates. It could be implemented by retrying a [create document](https://doc.sitecore.com/search/en/developers/search-developer-guide/creating-a-document-by-passing-attribute-values.html) if the patch operation returned 404. Another alternative is [updating the document](https://doc.sitecore.com/search/en/developers/search-developer-guide/updating-a-document.html) - the <code>PUT</code> (update) and <code>PATCH</code> (partially update) methods differ. <ul><li>Use PUT (update) to replace all fields with the values you pass and delete fields you do not pass. </li><li>Use PATCH to replace the fields you pass and leave other fields as-is. </li></ul> For this reason, in our case, if you implement PUT (update) then you need to pass the attributes name, description and category.</li>
<li>In this recipe, we use the meta data to index a page. Additionally, the page content could be indexed by retrieving the <code>renderedfield</code> in the GraphQL query.</li>
<li>Regarding the page locale, only <code>en</code> is used. The locale is part of the webhook notification, field <code>entity_culture</code>. You can leverage it to work with a multi-locale source in Search.</li>
<li>The Middleware needs to handle removing of existing pages. In this case you should receive a [notification](https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-objects.html#entityupdate) from Experience Edge with <code>operation: 'Delete'</code>, allowing you to follow the same pattern to implement a [delete operation](https://doc.sitecore.com/search/en/developers/search-developer-guide/deleting-a-document.html) for Search.</li>
<li>Web pages generated by the front-end application often use multiple, external datasources in addition to the content inside of XM Cloud, in which case you would need to retrieve this additional information from the middleware and update the documents in Search accordingly.</li>
<li>Updates are always coarse because it could be very complex to selectively identify from the source which attributes have been modified for each document. </li>
</ul>

## Insights
It makes sense to ask if and when to use the incremental approach. First of all we must consider that Sitecore Search’s ingestion API has an upper limit on daily requests. Furthermore, as mentioned, updates are not immediate, so this approach may not be ideal for cases when indexing large portions of the site or the entire site. It is seen as a good compromise to use it to update content promptly without necessarily having to re-index the entire site.

A basic solution is to define a new page property in XM Cloud, name it <code>Reindex</code> (boolean) [4.1]; when it is ‘true’ then the middleware will process the updates. This property could be 'false' by default and set to 'true' when needed [4.2]. The middleware could use the query in [4.3] to leverage on the Reindex attribute:
<ul>
  <li>If the item has this attribute to ‘true’ then the middleware sends the incremental update to Search.</li>
  <li>If it is ‘false’ then the middleware skips the item</li>
</ul>

Similarly, a more advanced middleware could manage an additional page property named <code>ReindexDescendants</code> that when ‘True’ causes Search to index its descendants if any identifier appears in any notifications.

Please consider that these page attributes do not change the way XM Cloud publishes, nor how Experience Edge notifies the middleware via webhook; they are just attributes like <code>Name</code> and <code>Desription</code>. <code>Reindex</code> and <code>ReindexDescendants</code> would be used by the middleware to make a decision on how to perform incremental update against Search.

### How to protect from large updates
The <code>Reindex</code> property is an option to control the incremental update but it could be not enough, for example, the user sets it to ‘true’ to all pages or misuse the <code>ReindexDescendants</code> property and then republish the site. In this case Search would be overwhelmed by individual operations.

A more clever middleware could instead observe a **stateful approach** and leverage on the [XM Cloud webhook notifications](https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-event-handler-configuration-fields.html#supported-events), in addition to Experience Edge notifications. The middleware could use the <code>publish:begin</code> event (XM Cloud notification) to understand if it is a full site publishing [5.2] or if it is not [5.1]. If it is a full site publish operation then the middleware will not update Search until an <code>OnEnd</code> [notification](https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-webhook-execution-modes.html) (Experience Edge notification) will come.

## Related Recipes

<Row columns={2}>
  <Link title="Integrating Sitecore Search" link="/learn/accelerate/xm-cloud/implementation/sitecore-search" />
  <Link title="Publishing to Edge" link="/learn/accelerate/xm-cloud/pre-development/information-architecture/publishing-to-edge" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Webhook event" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-event-handler-configuration-fields.html" />
  <Link title="Webhook objects" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhook-objects.html" />
  <Link title="Publishing to Experience Edge" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/publishing-to-experience-edge.html" />
  <Link title="Creating a document by passing attribute values" link="https://doc.sitecore.com/search/en/developers/search-developer-guide/creating-a-document-by-passing-attribute-values.html" />
  <Link title="Enable incremental updates for a crawler" link="https://doc.sitecore.com/search/en/users/search-user-guide/enable-incremental-updates-for-a-crawler.html" />

</Row>
