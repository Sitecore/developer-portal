---
title: 'Enhancing search with documents'
description: 'Enhance your website search by making documents easily discoverable and searchable.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-04-30'
created: '2025-04-30'

audience: ['Architect','Technical Implementer', 'System Administrator', 'User']
---

## Context
Content surfaced on sites might not always necessarily exist in your CMS. Product manuals, sales brochures, and technical documentation are good examples of assets that users may need to find but are not directly rendered as webpages. 

By integrating your DAM such as Sitecore Content Hub with your search provider such as Sitecore Search, we can ensure these types of assets are indexed and discoverable without relying on conventional crawling methods.

> The following scenario will focus on Sitecore products, but similar approaches can be utilized with other products. Other approaches of integrating data into your website are available, that are detailed in [Custom Editing UX for 3rd Party Integrations](/learn/accelerate/xm-cloud/implementation/external-data-integration/custom-editing-ux-3rd-party-integrations) recipe.


## Execution
Sitecore Search typically discovers and indexes content by crawling websites. However, in a multichannel world, content is often stored in various systems beyond a website, making traditional crawling less effective. Instead of pulling content from its source, we can push it directly from the source—ensuring more accurate, timely, and structured indexing.

Content Hub is often the central source of assets within an organisation. However, when integrating it with Sitecore Search, different content types need to be handled in different ways. These can usually be categorise into four groups:
- **Media**: Includes assets such as images and videos.
- **Documents**: Covers product manuals, brochures, and publications—typically PDFs, though the approach applies to other formats as well.
- **Content**: Encompasses written material such as blogs, news articles, and white papers.
- **Structured Data**: Includes technical content and specifications- usually product data.

Media assets are generally not included in search results, so Sitecore Search does not need to be aware of them. Documents, on the other hand, often contain important information that users need to find, so they must be made discoverable.

Before documents can be indexed, you need to determine which assets should be pushed to Sitecore Search. This could be based on the [asset type](https://doc.sitecore.com/ch/en/users/content-hub/asset-media-types.html), it being part of a [collection](https://doc.sitecore.com/ch/en/users/content-hub/collections.html), a stateflow state, a custom `shouldPublish` property, or something else.

Once the criteria are defined, a connector is required to transfer relevant documents to Sitecore Search. When publishing a document, the connector must ensure that a public link exists. If necessary, it generates one before sending the asset’s metadata and link to Sitecore Search for indexing. When unpublishing a document, the connector removes it from Sitecore Search. It is recommended to write the connector as a servlerless function, with Azure functions being our preference.

The connector will need to focus on two specific areas:

**1. Event Hook & Trigger Configuration**
- Set up a [trigger and action](https://doc.sitecore.com/ch/en/users/content-hub/example---create-a-trigger.html) is configured in Content Hub to call the connector when assets either move into or out of the criteria.
- Configure Content Hub to trigger these webhooks or events for every relevant content update.
- Configure Search Push API according to the [API documentation](https://doc.sitecore.com/search/en/users/search-user-guide/configure-api-push.html).

**2. Data Preparation & Transformation**
- Define what fields and metadata should be indexed by Search for each content type.
- For large documents (e.g., PDFs), implement logic within the Content Hub event handler to extract and trim text content to a Search size limit (currently 250Kb). Strategies to consider:
  - Extract only the first N characters/words or relevant summary.
  - Strip images and unneeded binary content.
  - Consider running OCR or text summarization if necessary.
- Log and handle scenarios where content size still exceeds limits after trimming.



Content Hub’s [Media Processing](https://doc.sitecore.com/ch/en/users/content-hub/media-processing.html) configuration automatically generates a `downloadExtractedContent` rendition for certain file types, including `.doc`, `.docx`, `.pdf`, `.pptx`, `.txt`, and `.xlsx`. This rendition is a plain text file containing the document's extracted text, which can be sent to Sitecore Search to improve ingestion and searchability.

Since Sitecore Search has a 256KB payload limit, larger documents must be processed before submission. To avoid errors, it's best to strip unnecessary whitespace and truncate the text. A practical limit is 200KB, allowing room for metadata and other required fields.

## Insights
The process of integrating content and structured data into Sitecore Search follows the same principles as for documents, with one key difference: **public links are not required**.

### Content

Like documents, content items need clear publishing criteria. The best approach is to use [Sitecore Experience Edge](https://doc.sitecore.com/ch/en/users/content-hub/experience-edge-for-content-hub.html), where content conditions are defined, and the connector is triggered when the ``PublishState`` changes. If Experience Edge is not in use, the `FinalLifecycleStatus` of the content can be used instead.

Once the connector is triggered, it will either add or remove content from Sitecore Search. Since Sitecore Search enforces a 256KB payload limit, it’s often practical to send only an abstract or summary rather than the full content. The full article or page can then be retrieved via a Sitecore Search crawler from its published web location, ensuring a balance between search performance and content depth.

### Structured Data

Structured data - such as product information, technical specifications, or other metadata - is typically not displayed in full within websites or mobile applications, but it is critical for search and filtering. As with content and documents, a clear publishing workflow must be defined, with ``FinalLifecycleStatus`` being the most appropriate trigger for determining when structured data should be pushed to or removed from Sitecore Search.

### Overall Approach

Content from Sitecore Content Hub can be made searchable in Sitecore Search by pushing data via a connector rather than relying on crawling. This ensures that updates are reflected promptly and accurately.

Within Content Hub, an action is configured to call the connector whenever an asset enters or exits the defined publishing criteria. This action is linked to two triggers:
<ol>
<li>One for publishing, ensuring relevant content is indexed.</li>
<li>One for unpublishing, ensuring outdated or removed content is no longer searchable.</li>
</ol>

## Related Recipies

<Row columns={2}>
  <Link title="Incrementally updating Search" link="/learn/accelerate/xm-cloud/implementation/sitecore-search/search-incremental-updates" />
  <Link title="Content Hub Cookbook" link="/learn/accelerate/content-hub" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Asset types" link="https://doc.sitecore.com/ch/en/users/content-hub/asset-media-types.html" />
  <Link title="Collections" link="https://doc.sitecore.com/ch/en/users/content-hub/collections.html" />
  <Link title="State flows" link="https://doc.sitecore.com/ch/en/users/content-hub/state-flows.html" />
  <Link title="Create a trigger" link="https://doc.sitecore.com/ch/en/users/content-hub/example---create-a-trigger.html" />
  <Link title="Media processing" link="https://doc.sitecore.com/ch/en/users/content-hub/media-processing.html" />
  <Link title="Creating and updating index documents" link="https://doc.sitecore.com/search/en/developers/search-developer-guide/walkthrough--creating-and-updating-index-documents-in-two-locales-using-the-ingestion-api.html" />

</Row>
