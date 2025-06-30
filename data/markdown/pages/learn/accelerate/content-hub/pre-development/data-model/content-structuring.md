---
title: 'Content Structuring'
description: 'How to structure content and data in Content Hub for Assets and Product Content'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
created: '2025-06-08'
lastUpdated: '2025-06-08'
audience: ['Product Owner','System Administrator','Architect','User ']
---
## Context
The task of structuring your content can be simple but there are many factors to consider, therefore it is important to plan for the initial mapping of data to Content Hub’s structure. With a strong foundation in place, you will have an easily navigable structure to meet existing and future business requirements.


## Execution
Before moving data from your existing DAM systems to Sitecore Content Hub, you should be clear on how the data will be represented, stored and accessed. Many end users come from a folder-based file structure and are accustomed to visualizing data in such a way. Sitecore Content Hub on the other hand, has a flat structure and provides filters and other search-based options to retrieve data.

Common challenges you might face from users include the move away from traditional folder structures and operating system folder search. Often business stakeholders may expect to be able to replicate their existing databases or Windows folder structures, but typically a move away from such hierarchies will better leverage Sitecore Content Hub’s functionality.

### Invest time up-front on content structuring
We recommend investing time planning on this part in collaboration with a Sitecore. Time spent on this planning task pre-development and pre-migration will lead to less time-consuming changes in future. This because non-optimal decisions on content architecture can take some time to correct once the database has been fully populated. 

For example: if a field on the Asset schema was missed when doing the initial data import, then a bulk update would need to be performed to update every Asset entity to populate the field. On a large asset database, such updates can take a long time as the index and graph (an in-memory representation of data) may also need to be updated. Of course the decision could be made to make ad-hoc manual updates for old assets and just populate this field for new Assets going forward.

A more challenging case is where multiple related entities need to be changed. A deep-dive on existing content, mapping it and discussions on best practice on content structuring and potential pitfalls can save considerable developer and business analyst time.

The [Domain Modelling](/learn/accelerate/content-hub/pre-development/data-model/domain-modelling) recipe details sections on maintainability, best-practices for naming conventions and use of appropriate data types.

### Moving from a hierarchical to a flat structure
Often when coming from other systems, the migration to Content Hub’s more flat structure and search system can take some consideration and education for users. Typically this learning curve comes from where the previous DAM was more hierarchical and/or made a lot of use of deeply nested folder structures. 

Content Hub has a more flat structure, although hierarchical relations between entities are of course possible and recommended for storing more complex data or representing data coming from external systems. That said, making deep hierarchies is generally best avoided. 

More detailed examples and visual aids (e.g., diagrams) that illustrate good vs. poor schema design can be found in the [Domain modelling](/learn/accelerate/content-hub/pre-development/data-model/domain-modelling) recipe.

### Parent / child relationship considerations
Another point to note is the cardinality of relationships, it is important to understand which entities should be the parent and which should be the child and the impacts of this decision. A further consideration is where a relation should be a taxonomy. Review the [Domain modelling](/learn/accelerate/content-hub/pre-development/data-model/domain-modelling) recipe for further information, or seek advice from a Sitecore expert for further validation.

### From folders to metadata and faceting
Instead of folders, Content Hub works with metadata fields (e.g. title, description) and relations to other entities (e.g. asset type). In the case of the out of the box ‘Asset Type’ taxonomy, you can think of a taxonomy as a selection field (or option list) where you can choose from a list of Asset Types to assign your asset. This is how you can categorize and structure your data. 

It is generally better to consider your data as being ‘tagged’ via the above for retrieval via search filters, rather than being navigated to through a series of folders.

As a side-note: it is also possible to use ‘option lists’ (a predefined set of selectable options) rather than taxonomies, though these are ultimately resolve to a (structured) text field. Review the [Taxonomy vs Option List](learn/accelerate/content-hub/implementation/schema-management/taxonomy-vs-option-list) recipe for more detail.

### Search

#### Faceted search
To expand on the folder to taxonomy concept: ‘folders’ can be provided by faceting your data with taxonomies. This allows grouping your data in a similar way to folders, but with the flexibility of having multiple views on that same data (e.g. I wish to see my Assets, but only ones with a Asset Media type of ‘Videos’ or I wish to see ALL Assets that are in ‘Awaiting Review’).

<img src="/images/learn/accelerate/content-hub/faceted-search.png" alt="Faceted search"/>
<br/><br/>

This grouping can be done ad-hoc on a search page, or via the creation of specific pages or page components with preset configuration to match the requirement. E.g. as the previous example, an ‘All Assets Awaiting Review’ page. Or a dashboard page with multiple search components. This concept is known within Content Hub as ‘filtering’. 

#### Structuring for search
Full-text search within Content Hub is very powerful. Administrators can select which metadata fields are able to be searched on. 

Metadata tags can be as simple as a text property like ‘Title’ or ‘Description’. These properties can be added to the full-text index and immediately searched on.

Text fields can also be boosted, giving them a higher ranking in search. This boost flag is set on the schema and places the field higher in results compared to those that have it turned off. 

Full-text search is not the only way of finding assets however, and should be used in combination with facets as mentioned in the metadata and faceting section.

Be aware that deep hierarchies can cause problems with full-text search, as full-text search on entity type ‘A' will not return ‘A’s child entities of type ‘B’ (although there are workarounds for this, such as copying ‘B’s 'title’ field and storing it as a string property on entity 'A’). Also, using a combination of faceted search filtering and full-text search can achieve the same.

####  Advanced search
Some filters can be performed via an ‘advanced search’, such as 'show me assets created between April and December 2020’ (created on date between 01/04/2020 and 31/12/2020):
<img src="/images/learn/accelerate/content-hub/advanced-search-dates.png" alt="Faceted search"/>
<br/><br/>

####  Saved searches
With regards to structuring: advanced searches can be saved for future use, and optionally shared with your team. Saved searches you have shared can be made private at any time. This could be considered as either a formal means of assisting users with their tasks or an ‘organic’ way of allowing users to help themselves and others find relevant assets quickly.

Saved searches are a powerful way of allowing end-users to build and share useful search filters without needing involvement from an administrator or developer.

### AI-assisted content structuring
Sitecore Content Hub has AI functionality to help you with your tasks - we will focus on the ones relevant to Content Structuring.

> If you currently do not have access to [Sitecore Stream](https://www.sitecore.com/products/sitecore-stream), please contact your customer representative.

#### AI assisted image tagging
A powerful part of Sitecore Content Hub’s asset structuring tooling is its automatic tagging features. 

**- Image Analysis (Sitecore AI)**
<img src="/images/learn/accelerate/content-hub/ai-assisted-image-tagging.jpeg" alt="AI assisted image tagging"/>
<br/><br/>

Image analysis uses AI to tag, describe, and extract colors from images. Video analysis is handled via the Video Analysis flow. Assets can be ‘keyword tagged’ - a minimum confidence level can be set in the Media Matrix to prevent ‘false positives’ (e.g. a shampoo bottle could be tagged with ‘drink’ at a low confidence level, which would not be desirable). The default level is 0.5.

<img src="/images/learn/accelerate/content-hub/ai-assisted-image-tagging-confidence.png" alt="AI assisted image tagging"/>
<br/><br/>

**- Grounded AI Tagging**

This can be performed via Sitecore’s AI features or by a "[bring your own](https://developers.sitecore.com/changelog/content-hub/21032025/integrate-your-own-ai-with-content-hub)" choice of AI integration. 

<img src="/images/learn/accelerate/content-hub/tag-with-ai.jpeg" alt="AI assisted image tagging"/>
<br/><br/>

**- AI assisted visual search**
While not strictly related to content structuring, AI-assisted visual search allows you to find image assets based on color, text descriptions, and other visual cues. You can upload any image to Content Hub and use visual search to find similar images in the repository, supporting .jpg, .jpeg, .png, and 3D archives with preview images.

## Insights

### Product Content (PCM) Case Study
The below diagram shows an example of structuring Products in Sitecore Content Hub. In this specific case it was for a motor vehicle manufacturer's dealerships.

<img src="/images/learn/accelerate/content-hub/Product-Domain-ER-model.png" alt="pcm-content-model"/>
<br/><br/>

At the base level we have Motor Vehicle *Dealers* and *Products*. Each *Product* drives a hierarchy of *Car* and *Motorcycle* models. The *Dealers* define a *Location* (address) and a *PMA* (primary market area) and have links to which *Cars* and/or *Motorcycles* they trade. 

This is a clean PCM model with minimal overlap between entity schema. There are of course many metadata fields on each of these entities, but we have omitted them for clarity and to focus on the relationships. 

You could imagine that each entity would have a *Name* text field, and the *Car/Motorcycle Model* entities would have foundational fields like *description*, *year* and *model* code.*Car Model* may have body type and number of doors fields (while the *Motorcycle Model* would not). At the *Car / Motorcycle Variant* level we could have specifics around variations on the models like *number of seats*, *fuel type*, etc. On the *Car/Motorcycle Subvariant* level we might cover *color*, *price* and *trim levels*. *Specifications* and *Features* are to cover detailed options on the Variants. Finally, *Accessories* are intended for ‘upgrade’ items - these would need a *part number*, *price* and various des*criptions.  

These fields would need to be determined via discovery as to whether they are driven by drop downs, taxonomies, rich text or just simple text or boolean fields. 

For business reasons it was necessary to separate out the car-related entities from the motorcycle related entities. Sometimes customers recreate their PIM with complex hierarchies of entities, but in this case we see minimal hierarchy, only the Car and Motorbike having more than one level of complexity.

### Example structure 
An Excel file with the structure and mapping of different components for PCM entities should be made. It contains the structure and mapping of different components, such as model, model name, year of purchase, tires, variant, and software. Each component was broken down and mapped to PCM entities. The following table is an example of what should be created:

| Segment     | Example Data   | Data Type                 | Shared or Unique | Mandatory / Optional |
|------------------|----------------|---------------------------|------------------|----------------------|
| Category          |                | Multi-choice option list  | Shared           |                      |
|                   | SUV            | Option choice             | Unique           | Mandatory            |
|                   | Hatch          | Option choice             |                  |                      |
|                   | Sedan          | Option choice             |                  |                      |
|                   | Family         | Option choice             |                  |                      |
| Model Name        |                | Single-choice option list |                  |                      |
|                   | Car Brand 0    | Option choice             |                  |                      |
|                   | Car Brand 1    | Option choice             |                  |                      |
|                   | Car Brand 2    | Option choice             |                  |                      |
|                   | Car Brand 3    | Option choice             |                  |                      |
|                   | Car Brand 4    | Option choice             |                  |                      |
|                   | Car Brand 5    | Option choice             |                  |                      |
| Model Brochure    |                | PDF                        | Unique           | Mandatory            |
| Number of doors   |                          | Single-choice option list | Unique           | Mandatory            |
|                   | 5                        | Option choice             |                  |                      |
|                   | 4                        | Option choice             |                  |                      |
| Year of production|                          | Single-choice option list | Unique           | Mandatory            |
|                   | 2020                     | Option choice             |                  |                      |
|                   | 2019                     | Option choice             |                  |                      |
| Accessories       | Model                    | Accessory name            | Rich text        | Optional             |
| Variant           | Price            | Numerical                 |                  |                      |
| Title             | Disclaimers              | Rich text                 |                  | Optional             |
| Status            | Status - Archive         | Rich text                 |                  | Optional             |


For all but the simplest implementations we strongly recommend a workshop in order to tease out all the detail and considerations that may not always be obvious.

In order to make the most out of the content structuring workshops, as a prerequisite we recommend preparation. 

#### Pre-workshop checklist
<ul>
  <li>Stakeholder education and getting your decision makers trained is key for any project.</li>
  <li>Current data examples from existing systems details (if applicable) and clear understanding of how product data is currently set-up, fields, organization, data types.</li>
  <li>Data migration overview details (if applicable) - Source system, # of assets (files), total capacity (#GB), type of assets (doc, image, video, audio)</li>
  <li>Data model ideation for Content Hub usage - what data is important to have in the new system; what fields and information are being carried over, what are the relations between the data.</li>
  <li>List of stakeholders who will use the system - who is using the system and what information is important to them; where are they located.</li>
</ul>

Content Hub Foundation training is available on [Sitecore Learning](https://learning.sitecore.com/pages/107/content-hub-for-business-users) as a self-paced e-learning with training coaches available.


### Performance considerations
It should be noted that the full-text search bar should not be overused as it can put strain on the system if many users are running searches at the same item. Ideally Advanced Search capabilities should be utilized where possible as these are more efficient.

Performance can also be impacted when using deep hierarchies, especially if child entities also relate to other entities that are also related to the parent entity. In a case of a misconfigured domain model, this can result in circular references. While Content Hub can handle this - it can cause a lot of strain on the system (especially on the graph and indexing services).

There are several flags that can be set on the Advanced tab when creating an entity. Note that some can only be set at initial creation. If in any doubt, again we recommend seeking advice from a Sitecore expert. This subject is covered in more detail in the [Domain modelling](/learn/accelerate/content-hub/pre-development/data-model/domain-modelling) recipe, including a look at the inheritance flags.

## Related Recipes

<Row columns={2}>
  <Link title="Domain modelling" link="/learn/accelerate/content-hub/pre-development/data-model/domain-modelling" />
  <Link title="Taxonomy vs Option List" link="/learn/accelerate/content-hub/implementation/schema-management/taxonomy-vs-option-list" />
  <Link title="Setting up Search pages" link="/learn/accelerate/content-hub/implementation/search/setup-search" />
  <Link title="Considering Search pages" link="/learn/accelerate/content-hub/implementation/search/considering-search" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Get started with product content" link="https://doc.sitecore.com/ch/en/users/content-hub/get-started-with-product-content.html" />
  <Link title="Taxonomies and option lists" link="https://doc.sitecore.com/ch/en/users/content-hub/taxonomies-and-option-lists.html" />
  <Link title="Schema changes, inheritance, and the graph server" link="https://doc.sitecore.com/ch/en/users/content-hub/schema-changes,-inheritance,-and-the-graph-server.html" />
  <Link title="Image analysis" link="https://doc.sitecore.com/ch/en/users/content-hub/image-analysis.html" />
  <Link title="AI-assisted grounded image tagging" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/ai-assisted-grounded-image-tagging.html" />
  <Link title="AI-assisted visual search" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/ai-assisted-visual-search.html" />
</Row>