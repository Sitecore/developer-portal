---
title: 'Team Development for Sitecore'
description: 'Reduce deployment time, ensure team integration, and create an environment in which you can easily and quickly move code from your local environment all the way through your development workflow. Click here to learn more.'
origin: https://dev.sitecore.net/Downloads/Team_Development_for_Sitecore.aspx
---

## TDS 5.6.0.15
_April 28, 2017_

- Fixed an issue with Null Pointer exceptions in code generation due to base templates containing a null value

[Download TDS Classic 5.6.0.15](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2056015.zip)

## TDS 5.6.0.14
_April 04, 2017_

- Fixed an issue with VS2017 and code generation failing due to improper references

[Download TDS Classic 5.6.0.14](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2056014.zip)

## TDS 5.6.0.13
_March 22, 2017_

- Fixed issues with including \<ExcludedItems>\ in the TDSGlobal.Config file

[Download TDS Classic 5.6.0.13](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2056013.zip)

## TDS 5.6.0.12
_March 10, 2017_

- Fixed an issue with stand alone VS2017 and config file transforms.

[Download TDS Classic 5.6.0.12](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2056012.zip)

## TDS 5.6.0.11
_March 08, 2017_

-  Fixed issues with Sync All Using History and projects with different Sitecore databases
-  Fixed issues with Sync All Using History and projects with regenerating code for added items
-  Added support for VS2017
-  Fixed issues with VS Powershell projects breaking TDS

[Download TDS Classic 5.6.0.11](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2056011.zip)

## TDS 5.6.0.8
_February 07, 2017_

### New Features:

- Quick Push: When working in a large team, it is sometimes necessary for a team member to push the latest items to their local Sitecore instance. TDS now has the ability to perform a “Quick Push” of items toSitecore.
- Project Item Report: Create a report/document of all items in the TDS project. This report has item specific output based on the location and/or item type.
- Pass custom variable to Code Generation: In some cases, project specific information needed to be passed to the Code Generation templates. TDS now allows the developer to create project specific properties in thecode generation property screen.
- Prevent deployment of incorrect Assemblies: When the TDS Assembly Version Check feature is enabled, TDS will check the version of every assembly before deploying to Sitecore. If the assembly version is differentthan the assembly in the Sitecore instance, |the build will fail before deploying any files.

### Bug Fixes:

- Improve project file parsing: TDS didn’t parse project file conditions and imports as well as expected when generating update packages. This has been resolved.
- Auto-Sync is disabled when attached to a Sitecore instance.
- Auto-Sync is now disabled when the debugger is attached to a process.

[Download TDS Classic 5.6.0.8](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205608.zip)

