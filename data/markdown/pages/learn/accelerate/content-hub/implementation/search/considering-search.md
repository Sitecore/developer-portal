---
title: 'Considering Search pages'
description: 'Optimizing Search for Relevant and Efficient Results'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-03-31'
created: '2025-03-31'
audience: ['All']
---

## Context
Search is one of the most powerful features in Sitecore Content Hub, enabling users to quickly find assets, products, and other entities. However, configuring search effectively requires careful consideration of factors such as domain models, searchability, facets, and component selection to ensure both performance and usability.

Assets often have a variety of metadata, relations, and classifications, making it essential to optimize search settings to balance precision and efficiency.

## Execution
Search needs to be considered from the beginning, when designing the domain model. For each entity, evaluate which properties need to be searchable and which should be used for filtering or sorting. Avoid making every field searchable; this can negatively impact performance and return too many irrelevant results.

For example File names, descriptions, and tags might be relevant for *full-text search*, while file types and creation dates are better suited for *facets or filters*.

### Searchability vs. Free Text Search
Searchable fields allow exact queries, meaning they can be filtered or sorted efficiently. Free text search performs a broader lookup, analyzing content across multiple fields but at the cost of precision.

Prioritize asset name, description, tags, and key metadata fields for free text search. Exclude technical fields (e.g., internal IDs, workflow statuses) from search queries.

For example, a user searching for "summer campaign" should get results where the *campaign name* or *keywords match*, rather than returning every asset that merely contains those words in unrelated metadata.

Full text search works very differently than facets and advanced search. While facets and advanced search look at the specific metadata property field (e.g. Brand, Asset Type, Created On), the free text search looks at ANY metadata field within the asset where the priority within M.Asset (for example) has been configured to be included in the search.  

If a user wants to search for assets related to a brand, "*Fruitful*": 
- If the user would facet on the field Brand, value "*Fruitful*" the results returned will only be assets that have a value of Brand = *Fruitful*.
- If the user were to enter *“Fruitful”* into the search bar and press enter, the search results will return all of the assets where any metadata field in M.Asset that is set to be included in search (via "Include in content”/“content copied” toggle) contains the word *“fruitful*.” 
- Similarly, if we added on the search term *“logo”* in the same way, we will get additional results where the word *“logo”* is also contained, i.e. the results look for both terms to be present. For example, the Asset Type may not be "*Logo*" but as an example it could be listed as a term in the searchable field "*Description*", for example, "The Fruitful logo on a can of refreshing juice."

<Alert status="info">
  <AlertIcon />
When performing a text search with multiple terms, by default the separate terms will be treated as an “AND” operation.  We can see that the results above, explicitly using “AND” returns the same set of items as if we added both terms separately.  
</Alert>
 
### Adjusting Free Text Search Behavior 
The behavior of the full text search can be modified based on three main settings: StartsWith, Contains, and Match. Review the [Full-text search bahavior](https://doc.sitecore.com/ch/en/users/content-hub/full-text-search-behavior.html  ) documentation for more detail.   

To make adjustments go to Manage > Settings > Restrictions configuration and adjust the field "wildcard_mode": 

<figure><img src="/images/learn/accelerate/content-hub/search-wildcard-mode.png" alt="Changing the restictions configuration to adjust the wildcard_mode field"/><figcaption></figcaption></figure>

### Using Facets and Advanced Search Effectively
Facets refine search results based on structured metadata (e.g., asset type, license type, or owner). Not every field should be a facet—avoid using date fields as facets since they generate too many unique values.  For fields that are useful in searching and filtering but not best suited for faceting, those can be added into the Advanced Search (also known as [Query Builder](https://doc.sitecore.com/ch/en/users/content-hub/query-builder.html) in the configuration settings).

When configuring facets in a Sitecore Content Hub search component, administrators should decide whether to place each facet as **left vertical** or **top horizontal** based on its purpose and usability.

- **Left vertical** facets work best for long lists, hierarchical filters, or multi-select options. Since they appear in a dedicated sidebar, they allow users to browse and refine search results with multiple filters without cluttering the main content area. These are ideal for categories like "*Asset Type*," "*Brand*," or "*Tags*," where users may want to apply several filters at once.
- **Top horizontal** facets are more effective for high-priority, frequently used, or mutually exclusive filters. Positioned above the search results, they provide quick, visible access to key filters without taking up too much screen space. These are well-suited for facets like "*Status*" (e.g., Published/Draft) or "*DRM Restricted*," where users typically select only one option at a time.

When adding facets to a search component, consider placing broad, commonly used filters horizontally for visibility and detailed, multi-select filters vertically for better usability. A mix of both can provide an optimal balance between accessibility and clarity.

Ideally limit facets to 5-7 key categories to enhance usability and consider [super facets](https://doc.sitecore.com/ch/en/users/content-hub/super-facets.html) for hierarchical filtering (e.g., filtering by "Brand > Campaign > Asset Type").

A super facet in Sitecore Content Hub is a grouping of multiple related facets under a single category, making it easier for users to filter and navigate content. For example, a "*Brand*" super facet could encompass facets like "*Fruitful*," "*Healthful*," and "*Powerful*," allowing users to refine searches more efficiently. When a facet within a super facet is selected, relevant details like descriptions and associated assets appear above the search box.

Super facets are useful when dealing with large datasets that require structured filtering, such as managing product catalogs, content types, or multiple brands. They enhance user experience by consolidating filtering options, reducing complexity, and improving search efficiency.

<figure><img src="/images/learn/accelerate/content-hub/SuperFacets.webp" alt="Changing the restictions configuration to adjust the wildcard_mode field"/><figcaption></figcaption></figure>

#### Recommended Facets for Asset Search
- File Type: Filter by image, video, document, etc.
- Category: Group assets into predefined categories (e.g., Marketing, Product, Event).
- Usage Rights: Indicate if the asset is public, internal, or restricted.
- Status: Show only "approved" assets to prevent using outdated files.

Facets should not be used with:
- Date Fields: Dates work better as range filters rather than facets.
- High-variability fields: Fields with too many unique values (e.g., asset title) don’t make good facets.

### Choosing the Right Search Component
Sitecore Content Hub provides several ways to present search results, depending on the type of content. For example, when creating an asset search page, a grid view with facets for file type, category, and status provides a quick and intuitive way for users to refine their results.
 
1. **Grid view** - best for visual assets (images, videos), shows thumbnails, making it easy to browse.
<figure><img src="/images/learn/accelerate/content-hub/search-grid-view.png" alt="Search grid view"/><figcaption></figcaption></figure>

2. **List view** - best for text-heavy assets (documents, PDFs), displays asset names and metadata for quick scanning.
<figure><img src="/images/learn/accelerate/content-hub/search-list-view.png" alt="Search list view"/><figcaption></figcaption></figure>

3. **Calendar view** - useful for time-based assets (event photos, scheduled content), shows assets by upload or event date.
<figure><img src="/images/learn/accelerate/content-hub/search-calendar-view.png" alt="Search calendar view"/><figcaption></figcaption></figure>

4. **Pivot tables** - more relevant for reporting rather than direct asset search.
<figure><img src="/images/learn/accelerate/content-hub/search-pivot-view.webp" alt="Search pivot view"/><figcaption></figcaption></figure>


## Insights

A well-structured search page improves efficiency, helping users locate the right assets faster and with greater accuracy.
- Overuse of searchable fields can degrade performance—be intentional with what gets indexed.
- Facets should enhance, not overwhelm—limit them to relevant, structured metadata.
- Different content types require different search views—choosing the right one ensures better usability.
- Including visual guides and screenshots helps users understand search behavior and customization options.
- Clarifying empty searches and troubleshooting search behavior is crucial. If a search returns no results (e.g., searching for "Logo" but no logos appear), check whether:
  - The "*Include in Content*" setting is enabled for relevant properties.
  - The "*Content Copied*" setting is enabled for necessary relations.
  - Metadata is correctly applied to assets to ensure accurate indexing.

If a search returns too many irrelevant results, review which fields are indexed to refine search accuracy. When performing a full-text search (rather than using facets), all properties and relations that have "*Include in Content*" or "*Content Copied*" enabled will be used in the search. If too many unrelated assets appear, review which fields and relations are included in content search and adjust them accordingly to ensure relevant results.


## Related Recipes
<Row columns={2}>
<Link title="Setup Search Pages" link="/learn/accelerate/content-hub/implementation/search/setup-search" />

</Row>


## Related Documentation
<Row columns={2}>
  <Link title="Search, filter, and select" link="https://doc.sitecore.com/ch/en/users/content-hub/search,-filter,-and-select.html" />
  <Link title="Full-text search behavior" link="https://doc.sitecore.com/ch/en/users/content-hub/full-text-search-behavior.html" />
  <Link title="Query builder" link="https://doc.sitecore.com/ch/en/users/content-hub/query-builder.html" />
  <Link title="Super facets" link="https://doc.sitecore.com/ch/en/users/content-hub/super-facets.html" />

  
  
</Row>
