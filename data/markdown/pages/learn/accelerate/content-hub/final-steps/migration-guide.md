---
title: 'Migration Guide'
description: 'Ensuring a seamless and structured migration to Content Hub'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
created: '2024-12-13'
audience: ['All']
---


## Context
Migrating content into Content Hub is a multi-step process that involves moving vast amounts of data, assets, metadata, and associated workflows from legacy systems. 

This migration must be handled meticulously to avoid data loss, ensure data integrity, and maintain the intended structure and functionality of digital assets. Inadequate planning or testing can lead to significant challenges, including data corruption, metadata mismatches, broken links, and user access issues. 

## Execution
This is intended to provide a structured approach to ensure a seamless migration process, minimize risk, and align the migrated data and assets with the new  Content Hub environment. The objective is to ensure that all assets are successfully transferred, retain their original structure and metadata, and function as expected within Sitecore Content Hub, facilitating a smooth transition for users and supporting organizational goals.

Key phases include pre-migration preparation, data mapping, migration execution, and post-migration testing, all designed to streamline tasks, minimize errors, and maintain content quality and organization.

It also incorporates strategies for addressing unforeseen challenges during migration and establishes procedures to ensure ongoing data integrity and optimization in the Content Hub environment.

### <strong>1. Pre-Migration Assessment and Planning</strong>
<ol>
  <li>Conduct an inventory of assets, metadata, and associated workflows in the legacy system. Outline existing data sources, file types, how many files and versions, how much data in total?</li>
  <li>Determine which data will be brought to which environment. For examples many customers have a DEV and QA environment with a smaller subset of data in comparison to their production environments.</li>
  <li>Define migration scope, including data to be migrated and any non-essential items to be archived.</li>
  <li>Assess data quality and cleanliness in the legacy system to avoid migrating unnecessary or corrupted data.</li>
  <li>Identify source file location that includes individual file direct links. All files to be migrated need to be accessible via a direct link example: Azure Blob Storage.</li>
  <li>Clean up assets that don’t need to be migrated. </li>
  <li>Collect all file metadata. This should be collected in a spreadsheet that includes all filenames, direct links and any other metadata that should be migrated to Content Hub​.</li>
  <li>Establish a migration timeline, including key milestones and roles for the migration team. </li>
</ol>

### <strong>2. Data Mapping and Metadata Structure</strong>
<ol>
<li>Develop a data mapping plan to align legacy metadata fields with Sitecore Content Hub metadata fields.</li>
<li>Define data transformation requirements (e.g., format conversions, taxonomy updates).</li>
<li>Validate that metadata and tags are mapped accurately to support search functionality and asset discoverability.</li>
<li>Separators for multi-valued attributes​ i.e. EU | USA | APAC </li>
<li>List of values mapping to correct values​.</li>
<li>Hierarchies including the full path​.</li>
<li>We recommend creating the following properties to assist during migration:<ul><li>BatchID property to give your import batches numbers to assist with troubleshooting. </li><li>Create an additional property to store the ID of the previous DAM asset.</li></ul></li>
</ol>

### <strong>3. Content Migration Execution</strong>

<ol>
  <li> Select the appropriate migration tools or scripts, considering the complexity and volume of content. Many use an Excel file as the source of legacy data and leverage Content Hub import/export functionality. More detail can be found in Insights below. </li>
  <li>Set up a migration environment to test data transfer in a controlled setting.</li>
  <li>Ensure that permissions and role-based access control (RBAC) settings are properly configured in Content Hub. </li>
  <li>Conduct batch migration tests to identify and address potential issues before the full migration. </li>
  <li>Monitor timing in QA to be able to provide estimated duration for final migration on production. </li>
  <li> Monitor graph during migration.</li>
</ol>

### <strong>4. Migration Testing and Quality Assurance</strong>
<ol>
  <li>Implement quality assurance checks to validate data accuracy, completeness, and integrity post-migration.</li>
  <li>Test content accessibility, metadata accuracy, and file functionality (e.g., preview, download). </li>
  <li>Verify user roles and permissions to ensure only authorized personnel have access to relevant content.</li>
</ol>

More information available in the [Testing and Quality Assurance recipe](../final-steps/testing-and-qa)

### <strong>5. Workflow Validation and Asset Usability</strong>
<ol>
  <li>Test workflows and automation in Sitecore Content Hub to ensure they function correctly with migrated content.</li>
  <li>Validate that asset relationships (e.g., dependencies, collections) are maintained post-migration.</li>
  <li>Ensure that all assets and their associated workflows meet project goals and usability expectations.</li>
</ol>

### <strong>6. Post-Migration Monitoring and Optimization</strong>
<ol>
  <li>Set up post-migration monitoring to track system performance, identify potential issues, and resolve them promptly.</li>

  <li>Implement a feedback loop to gather user input on usability and functionality of migrated content.</li>

  <li>Develop an optimization plan to address any ongoing content organization, tagging, or workflow issues that emerge after migration.</li>
</ol>

## Insights
Importing and exporting in Sitecore Content Hub enables asset and asset metadata migration from a legacy system. An Microsoft Excel file is used as the source of legacy data. 

In order to successfully migrate data, specific rules must be followed to avoid technical errors that would stop the import. We will now examine those rules and how they affect the structure of the Excel file used to import legacy data into your Content Hub.

### <strong>Create an Excel Import File</strong>
There are a set of ground rules to follow when importing the Excel document into Sitecore Content Hub.
<ul>
  <li><strong>One entity definition per worksheet</strong>: Each entity definition being imported into a Sitecore Content Hub requires its own worksheet. A worksheet must contain data for only one entity definition. </li>
  <li><strong>The worksheet name is the name of the entity definition being imported</strong>: If M.Asset entities are being imported, then the worksheet will be named M.Asset. The import process uses the name of the worksheet to determine which types of entities to create and populate with data.</li>
  <li><strong>Identifiers to ID entities</strong>: Use identifiers to reference existing entities in the system.</li>
  <li><strong>Worksheets are imported in the order they appear in the Excel file</strong>: This is important when importing relations, as the referenced related item should already be imported and exist in Content Hub before attempting to import and relate a new entity to it.</li>
  <li><strong>Use the Metadata member’s name, not its label, as the Excel column header</strong>: The metadata field names, not the labels, are used for the Excel column headers. This is to avoid any doubt on which property or relation is being used, as the name is unique per entity definition. When working with a self-relation, you can add colon- Parent or colon-Child.</li>
  <li><strong>Multi values separate by “|”</strong>: When multiple values are possible, as with option lists, taxonomies, or relations, you can separate the values by using the pipe character.</li>
  <li><strong>Multilingual = multiple columns with <code>propertyname#culture.</code></strong>: Multilingual properties have a column-per-portal language that is enabled. The property name is extended with the culture.</li>
  <li><strong>M.Asset definition requires the “File” column to import your media files</strong>: The File column must be present as the first column in the worksheet for the M.Asset definition. It must contain the URL of either a public or authorized link. The import process will use the URL to run a fetch job that will copy the media file into the Content Hub cloud-based blob storage. When this fetch job is complete, a corresponding processing job will begin; its purpose is to assign the metadata stored in the Excel row into the newly created asset and persist it.</li>
</ul>

<figure><img src="/images/learn/accelerate/content-hub/data-migration-sample-file.png" alt="Data Migration - Sample File"/><figcaption>Data Migration - Sample File</figcaption></figure>

<ul>
  <li><strong>Assign a unique meaningful, user-determined identifiers</strong>: ny default, if no identifier value is set, the system will create a GUID value and assign it as default identifier.</li>
  <li>In Column D, the multilingual description is given in English.</li>
  <li><strong>The AssetTypeToAsset relation is set by giving an asset type identifier</strong>: the asset types are loaded in the previous worksheet to make sure they are present in Sitecore Content Hub and can be linked to the new entity being created.</li>
  <li>The File column will be used to run a fetch job with the given URL, with either a public or authorized link</li>
</ul>

### <strong>Setup Data Export in Content Hub</strong>
You will create different export profiles to retrieve the information you are interested in, then enable the export for users directly on the search. When exporting data out of Content Hub with the Excel export feature, you can make use of the export profiles to define which metadata you want to export (e.g., <strong>Name</strong>, <strong>Definition</strong>, <strong>IsDefault</strong>, and <strong>Setting</strong>).

<figure><img src="/images/learn/accelerate/content-hub/metadata-to-export
.png" alt="Meta Data to Export"/></figure>
 
For the properties, only the name needs to be included. The property type will be taken into account and exported in the appropriate format. The “relations” are a combination of the relation names and properties for export-related entities and profiles.

For assets, you can add an additional setting to control the export of public links as a URL. You can define whether you want to receive all public links from the asset or from the master file.

```typescript
"publicLinks": {
    "asset": true,
    "masterfile": false
}
```


When exporting, you have some additional options to select. The Filename is the name of the file that you will be able to download. The <strong>User-friendly column</strong> headers switch determines whether the property and relation names or labels are displayed in the exported file. User-friendly values mean that the field’s label (rather than its name) is used as a column header. User-friendly cell values means that the label value in the field will display without its full identifier showing up.

Example:

```typescript
{
 "properties": [
  "Title",
  "Description",
  "FileName"
 ],
"relations": {
 "AssetTypeToAsset": {
 "exportRelatedEntities": false
 },
 "FinalLifeCycleStatusToAsset": {
 "exportRelatedEntities": false
},
 "ContentRepositoryToAsset": {
"exportRelatedEntities": false
}
},
 "includeSystemProperties": true,
"publicLinks": {
"asset": true,
 "masterfile": false
 },
 "version": "1.1"
}
```
Note that exports with user-friendly column headers cannot be re-imported directly.

### <strong>Performance and Monitoring</strong>
#### Script / Trigger optimisation

For some clients it may make sense to temporarily move ‘InProcess’ scripts to ‘Background’, or to disable them completely. During migration as the metadata is already accurate, some triggers and scripts could be unnecessary, while in other instances your scripts may be needed.

It is worth reviewing to see if it’s worthwhile to temporarily disable triggers as this can provide large import performance increases. 

> Remember to restore to InProcess, and/or re-enable triggers and scripts after migration is complete.

#### API Queries for monitoring
The provided sample is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

<strong>Assets in system </strong>

 ```typescript
  https://{baseURL}/api/entities/query?Query=definition.name=='M.Asset'&take=0
  
  ```
<br/><br/>

<strong>Assets that have been processed by media processing (default renditions)</strong>

 ```typescript
https://{baseURL}/api/entities/query?query=definition.name=='M.Asset' AND EXISTS('AssetMediaToAsset')&take=0
  ```
<br/><br/>

<strong>Assets still needing to be processed</strong>
 ```typescript
https://{baseURL}/api/entities/query?query=definition.name=='M.Asset' AND MISSING('AssetMediaToAsset')&take=0
  ```
<br/><br/>

<strong>Metadata Complete</strong>
```typescript
https://{baseURL}/api/entities/query?query=definition.name=='M.Asset' AND EXISTS('BrandToAsset')&take=0
 ```
<br/><br/>

Replace <code>BrandToAsset</code> with the name of a relation that is populated by one of your custom metadata scripts.



## Related Recipes

<Row columns={2}>
  <Link title="Testing and Quality Assurance" link="/learn/accelerate/content-hub/final-steps/testing-and-qa" />
  <Link title="Requirements Gathering" link="/learn/accelerate/content-hub/pre-development/discovery/requirements-gathering" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Data migration" link="https://doc.sitecore.com/ch/en/users/40/content-hub/best-practices--data-migration.html" />
  <Link title="Importing and exporting data" link="https://doc.sitecore.com/ch/en/users/content-hub/importing-and-exporting-data.html" />
    <Link title="Import and export Excel data" link="https://doc.sitecore.com/ch/en/users/content-hub/import-and-export-excel-data.html" />
</Row>