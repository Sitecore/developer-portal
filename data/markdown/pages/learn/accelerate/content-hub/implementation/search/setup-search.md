---
title: 'Setting up Search pages'
description: 'Optimizing Search for Relevant and Efficient Results'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['All']
---

## Context
Setting up search pages in Sitecore Content Hub involves configuring various elements that influence how data is indexed, filtered, and displayed. This page will guide you through the necessary steps to configure search components, facets, and domain models, ensuring optimal search performance and accurate, usable results for your end-users. 

## Execution
Proper setup of searchable fields, facets, and search components will ensure efficient querying and meaningful results across multiple types of assets.

While building the domain model, make sure you define which fields are **Searchable**. In the [Schema page](https://doc.sitecore.com/ch/en/users/content-hub/configure-the-schema.html) find your relevant entity (e.g., M.Asset, M.Product) and identify fields that should be indexed for search. Only include fields that users will actively search or filter on, over-indexing will result in slow search performance. Make sure that non-searchable fields, including large text or sensitive information are excluded from indexing.

Choosing the right Search Components for Display based on the asset types will make a difference for the user experience - review the [Considering Search](/learn/accelerate/content-hub/implementation/search/considering-search) recipe for more detail on how to select the right Component.

### Configuring Facets for Filtering
In the Search component settings, configure facets to allow filtering by specific attributes. Only use facets for relevant fields. Avoid using date fields or large datasets as facets to preserve performance.

To set this up:
- Go to the Facet configuration section within your Search settings.
- Choose fields such as categories, tags, or other attributes for facet configuration.
- Set up facet intervals (e.g., Top 5, Top 10) to limit the results and make them more manageable for the user.
- Ensure that the "Include missing values" option is disabled unless it’s essential to show results with missing data.

<figure><img src="/images/learn/accelerate/content-hub/configure-facets-filtering.png" alt="Configuring Facets for Filtering"/><figcaption></figcaption></figure>

### Configuring Query Builder for Advanced Searching

In the Search component settings, configure the query builder to allow for advanced searching by specific attributes. Since not all fields are suitable for a facet but are useful for searching, adding fields to the query builder allow for searching on these additional fields.  It is recommended to list field in alphabetical order for ease of use.

To set this up:
- Go to the Query Builder configuration section within your Search settings.
- Choose fields such as filename, title, or other attributes for advanced search configuration.
<figure><img src="/images/learn/accelerate/content-hub/advanced-search.png" alt="Configuring Query Builder for Advanced Searching"/><figcaption></figcaption></figure>

### Setting Up Search Sorting
Sorting can be applied to both numerical and text-based fields. Ensure it’s set up on fields relevant to the user’s search needs.

Go to the **Sorting** section of your Search component, select sorting criteria for relevant fields (e.g., date, name, price) and choose the sorting order (ascending or descending) based on common user preferences.

<figure><img src="/images/learn/accelerate/content-hub/search-sorting.png" alt="Setting Up Search Sorting"/><figcaption></figcaption></figure>

### Search Performance Optimization
Minimize the number of indexed fields to avoid slow search performance. Review which fields are indexed regularly and adjust based on search performance and user needs.

Make sure that as part of your setup you are:
- Performing regular checks on the search configurations.
- Remove unnecessary fields from the index to speed up search results.
- Re-index periodically to ensure up-to-date data for users.

## Insights
A fast and efficient search experience begins with indexing only the most relevant fields that directly serve users' needs. 

- Avoid indexing large descriptive fields or binary data that do not contribute to meaningful search results. 
- Proper facet configuration is essential for intuitive filtering, allowing users to refine their searches based on relevant attributes such as categories or tags. However, excessive filtering options, like date fields with too many variations, can overcomplicate the experience. 
- Query builder configuration plays a crucial role in balancing search capabilities—while some fields may not be ideal for faceting, they can still enhance the search experience when used alongside facets for more advanced filtering.

Choosing the right search component view ensures that data is presented effectively; grid and list views work best for structured data, calendar views for time-based assets, and pivot tables for large datasets requiring summarization. Sorting options should align with user expectations, such as sorting by date for chronological content or alphabetically for name-based searches. 

Lastly, search performance should be continuously monitored and optimized. Overly complex configurations with too many indexed fields can slow down the system, so keeping the setup streamlined ensures a responsive and effective search experience.


## Related Recipes
<Row columns={2}>
  <Link title="Considering Search" link="/learn/accelerate/content-hub/implementation/search/considering-search" /> 
</Row>


## Related Documentation
<Row columns={2}>
  <Link title="Search, filter, and select" link="https://doc.sitecore.com/ch/en/users/content-hub/search,-filter,-and-select.html" />
  <Link title="Search" link="https://doc.sitecore.com/ch/en/users/content-hub/search.html" />
  <Link title="Configure the schema" link="https://doc.sitecore.com/ch/en/users/content-hub/configure-the-schema.html" />
</Row>
