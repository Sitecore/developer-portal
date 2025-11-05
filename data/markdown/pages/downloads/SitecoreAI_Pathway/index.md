---
title: 'SitecoreAI Pathway'
---
**SitecoreAI Pathway** is an AI-powered toolset that assists in migrating the pages of your XM sites to the target structure of your new *CMS* site (formerly called *XM Cloud*). The toolset comprises a user interface that guides you through the steps. The UI app is accessed from the App Studio on the Sitecore Cloud Portal.

Please contact your Sitecore account representative to get started.

This page hosts a package for XM and script for CMS that contribute as pre-requisites to running the **SitecoreAI Pathway** toolset. The latest available versions of these pre-requisite tools are published here.

Resource | Description
--- | ---
[XMComponentExtraction.zip](https://scdp.blob.core.windows.net/downloads/SitecoreAI_Pathway/XMComponentExtraction-1.0.0.zip) | Package containing the tooling for extracting page content from your source XM sites. Includes an `ExtractorHandler` that you install on your source XM instance, an `Extractor.App.Con.exe` .NET console app used to manage the extraction operation, and instructions.  
[cms-structure.ps1](https://scdp.blob.core.windows.net/downloads/SitecoreAI_Pathway/Placeholder.txt) | Script for generating the `structure.json` file describing the desired structure of your target CMS site. The `structure.json` is used by the AI-powered tooling in the mapping of the source XM page designs to the target XM Cloud site structure. 
[Generate_CMS_structure_-_instructions.md](https://scdp.blob.core.windows.net/downloads/SitecoreAI_Pathway/Generate_CMS_structure_-_instructions.md) | Instructions document for the `cms-structure.ps1` script.

Return to [downloads page](/downloads)