---
title: 'Sitecore AI Pathways'
---
**Sitecore AI Pathways** is an AI-powered toolset that assists in migrating your XM sites to XM Cloud. The tooling assists in mapping the designs of your current Sitecore XM sites to your new target site structure in XM Cloud.\
The toolset comprises a user interface that guides you through the steps. This UI is accessed from the App Studio on the Sitecore Cloud Portal.\
Please contact your Sitecore account representative to get started.

This particular downloads page hosts two specific packages that contribute to the overall toolset. The latest available versions of these tools are published here.

Resource | Description
--- | ---
[XMComponentExtraction.zip](https://scdp.blob.core.windows.net/downloads/Sitecore_AI_Pathways/XMComponentExtraction-1.0.0.zip) | Package containing the tooling for extracting page designs from your source XM sites. Data is extracted to JSON files, one for each page, and uploaded to storage. This package comprises: An `ExtractorHandler` that you install on your source XM instance, an `Extractor.App.Con.exe` .NET console app used to manage the extraction operation, and an instructions document.  
[Instructions_-_extract_source_XM_page_designs.md](https://scdp.blob.core.windows.net/downloads/Sitecore_AI_Pathways/Instructions_-_extract_source_XM_page_designs.md) | Instructions document for XMComponentExtraction. Same instructions document provided in the above package, available here also for convenience.
[export-structure.ps1](https://scdp.blob.core.windows.net/downloads/Sitecore_AI_Pathways/Placeholder.txt) | Script for generating the `structure.json` file describing the desired structure of your target XM Cloud site. The `structure.json` is used by the AI-powered tooling in the mapping of the source XM page designs to the target XM Cloud site structure. 
[Instructions_-_generate_target_XMC_structure.md](https://scdp.blob.core.windows.net/downloads/Sitecore_AI_Pathways/Instructions_-_generate_target_XMC_structure.md) | Instructions document for `export-structure.ps1`.

Return to [downloads page](/downloads)