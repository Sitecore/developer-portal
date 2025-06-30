---
title: 'Migrating Assets to Content Hub'
description: 'A practical guide to moving assets and metadata into Sitecore Content Hub, covering schema preparation, file import options, and metadata mapping strategies for a seamless migration.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-06-30'
created: '2025-06-30'
audience: ['Architect','Technical Implementers','Solution Architects']
---

## Context
Whether you’re moving to Content Hub as part of an initial implementation or undertaking a later-phase migration, you’ll need to migrate a large number of assets and their associated metadata. A well-structured approach is essential to maintain data integrity and ensure a smooth transition. 

Before diving into the process, it’s worth reviewing the [Importing and exporting data best practice guidance](https://doc.sitecore.com/ch/en/users/content-hub/importing-and-exporting-data.html) in Documentation.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
A successful migration involves more than simply uploading files - this should align to your migration goals and success metrics. Deciding what asset to keep or archive will be key to your migration, review the [Migration Guide](https://developers.sitecore.com/learn/accelerate/content-hub/final-steps/migration-guide) recipe for details planning your migration.

The following phased approach helps ensure that assets and metadata are migrated accurately and efficiently:

### 1. Schema Definition
Begin by reviewing the metadata that needs to be retained or mapped across from your current system. Content Hub’s default asset schema (`M.Asset`) includes fields such as *Title*, *Description*, and *Brand*, but you may need to add custom fields or relationships to meet your requirements. This is your opportunity to define a clean and purposeful schema that reflects your content model.

### 2. Metadata Mapping
Once the schema is in place, define how each piece of metadata from the source system maps to Content Hub fields. This step is critical, especially if you’re consolidating from multiple systems or standardising inconsistent metadata.

### 3. File Import
With your schema and mappings ready, you can begin importing files into Content Hub. Options include:
| Import Method             | Description                                                                                                                                                                                                 |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|**Manual upload via the UI** | Regular [upload](https://doc.sitecore.com/ch/en/users/content-hub/upload.html) features, suitable for small-scale imports or testing.                                                                                                                                                               |
| **Excel-based import**        | If your assets are publicly accessible, you can provide public URLs in an Excel sheet for Content Hub to retrieve. This process is documented in the [Import assets with Excel](https://doc.sitecore.com/ch/en/users/content-hub/import-assets-with-excel.html) documentation.             |
| **Automated import**          | For private or bulk assets, an integration service is recommended. A reference implementation is available via the [Asset Importer](https://github.com/Sitecore/accelerate-content-hub/tree/main/integrations/Sitecore.ContentHub.Integration.AssetImporter) in the GitHub repository. Supports ingestion from Azure Blob Storage. |


## Insights
Asset migration is more than a file transfer, it’s a foundation for how content is structured, discovered, and used across your digital ecosystem. Thoughtful planning will reduce rework and increase long-term value, so make sure that as part of your migration:
- Normalise values and eliminate duplicates before import. Duplicate or inconsistent values (e.g. “UK” vs “United Kingdom”) can lead to difficulties later on.
- Before executing a full migration, test with a small representative dataset. This helps validate schema design, metadata mappings, and import mechanics without putting large volumes at risk.
- Decide upfront how you’ll uniquely identify assets. Filenames (including directory structure) are a practical match key, but using a GUID or external reference ID can offer more stability in long-term integrations.
- For large asset libraries, building or adapting an automated pipeline—such as the reference Asset Importer—can save significant time and ensure repeatability, particularly when coordinating with content freezes or migration windows.
- After import, validate both asset integrity and metadata completeness. Sampling and search-based QA can quickly identify issues before the assets are used in production..

## Related Recipes

<Row columns={2}>
  <Link title="Requirements Gathering" link="/learn/accelerate/content-hub/pre-development/discovery/requirements-gathering" />
  <Link title="Domain modelling" link="/learn/accelerate/content-hub/pre-development/data-model/domain-modelling" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Importing and exporting data" link="https://doc.sitecore.com/ch/en/users/content-hub/importing-and-exporting-data.html" />
    <Link title="Import assets with Excel" link="https://doc.sitecore.com/ch/en/users/content-hub/import-assets-with-excel.html" />
</Row>

