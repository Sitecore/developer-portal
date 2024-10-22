---
title: 'Team Development for Sitecore'
description: 'Reduce deployment time, ensure team integration, and create an environment in which you can easily and quickly move code from your local environment all the way through your development workflow. Click here to learn more.'
origin: https://dev.sitecore.net/Downloads/Team_Development_for_Sitecore.aspx
---


## TDS 5.7.0.27
_January 15, 2019_

- Prevent reloading of the project from updating the reverences in the reference project
- Allow package references solutions to provide packaging assemblies during the build

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057027.zip)

## TDS 5.7.0.26
_January 02, 2019_

- Allow user to select \_\_Revision field in Field level deployment. This allows the new publishing service to pick up changed items.

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057026.zip)

## TDS 5.7.0.25
_December 14, 2018_

- Fix a deployment performance issue with SXA 1.8

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057025.zip)

## TDS 5.7.0.24
_October 23, 2018_

- Fixed issues with editing the global config causing TDS to forget about package bundle links.
- Added post deploy step to backup existing configuration files deploy the files in the update package automatically.
- Prevent generated code files from being re-generated when editing the TDSGlobal.config file and code generation is disabled.

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057024.zip)

## TDS 5.7.0.21
_August 27, 2018_

- Fixed an issue with shared fields in \_\_Standard Values not being reset properly when an update package is installed.

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057021.zip)

## TDS 5.7.0.20
_August 17, 2018_

- Fixed an issue with content file sync restarting when the option is changed
- Fixed an issue with .net core projects in TDS

[Click here to Download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057020.zip)

## TDS 5.7.0.19
_July 05, 2018_

- Fixed null pointer when renaming items under an aliased folder
- Added timestamps to startup messages in TDS Output Window

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057019.zip)

## TDS 5.7.0.18
_June 20, 2018_

- Added ability to use new .net Core class libraries as a source web project.
- Fixed an issue with changing the TDSGlobal files and solution in the solution explorer having items in the incorrect folders.
- Prevent content sync from copying .tmp files when saving files in VS 2015 and up.

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057018.zip)

## TDS 5.7.0.16
_May 01, 2018_

- Fixed an issue with Validation property page erasing shared validator settings
- Fixed an issue with references to a project not being removed when the project is removed from the solution

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057016.zip)

## TDS 5.7.0.15
_April 06, 2018_

- Fixed an issue where NuGet will delete items not in the package when updating/removing the package
- Fixed an issue with Visual Studio Dependencies not being restored correctly when reloading a project

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057015.zip)

## TDS 5.7.0.14
_March 21, 2018_

- Improved error handling at startup to prevent VS2015 crash
- Update post deploy action to log event time with more resolution
- Updated build scripts to log an error if file replacements and multiple source web project are used
- Allow "Esc" and "Enter" to close test window
- Added a close button in the NC area to the test dialog
- Improve user experience when access guid is not correctly set on a single project and sync all is chosen
- Fixed issues with blank lines being added to environment validation list
- Prevent .tmp files from being autocopied when saving in VS2017
- Allow Remove from Sitecore to delete items instead of putting in the recycle bin

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057014.zip)

## TDS 5.7.0.13
_February 05, 2018_

- Fixed issue with Autocopy and unloading/reloading project
- Fixed issue with Rocks sending multiple file change events for an item
- Fixed issue with Web project in the TDS project folder
- Fixed issue with language and version order causing lightning mode to see a change when there wasn't one

[Click here to download](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057013.zip)

## TDS 5.7.0.12
_January 12, 2018_

- Fixed an issue with File System Alias and children of folders with Sitecore special characters in the name

[Download TDS Classic 5.7.0.12](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057012.zip)

## TDS 5.7.0.11
_December 13, 2017_

- Fixed an issue with content sync and multiple source web projects not working correctly

[Download TDS Classic 5.7.0.11](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057011.zip)

## TDS 5.7.0.10
_November 16, 2017_

- Reduce the number of prompts for re-generate code in projects with lots of solutions
- Removed call to obsolete constructor in TDS post deploy steps.

[Download TDS Classic 5.7.0.10](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2057010.zip)

## TDS 5.7.0.9
_November 03, 2017_

- When projects are reloaded, wait until all projects are loaded before performing code generation. This fixes issues with getting the latest and/or switching branches with Git.

[Download TDS Classic 5.7.0.9](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205709.zip)

## TDS 5.7.0.8
_October 24, 2017_

- Remove item from cache after updatating standard values fields in post step
- Prevent failure with Transform task if a file is in the .csproj multiple times
- Add \_\_Created to default ignore field
- Make project selection UI elements alphabetical
- Added new validators to ensure check boxes and tristate boxes have valid values

[Download TDS Classic 5.7.0.8](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205708.zip)

## TDS 5.7.0.7
_October 10, 2017_

### Overview  

The theme of this release is to help users work with the Helix Architecture. We have been getting a lot of asks from the community to help make working with Helix (which has lots of projects, TDS included) quicker. This release will improve the efficiency of developers working with Helix. There are also some general improvements and bug fixes.

### Features  
- **Rebuild all code generation files at once** \- A right-click menu was added to the solution context menu to allow the developer to regenerate code on all TDS projects at once.
- **Add validators to Project validation for Helix** - Validators were created to ensure items in the the helix naming hierarchy don't make invalid references to other items in the helix hierarchy
- **Sync all TDS projects at the solution level** \- One of the complaints of developers using Helix is the need to go into each TDS project one by one to sync them. This feature allows developers to sync all TDS projects at the solution level with a single gesture.
- **Solution level Quick Push** \- The quick push feature introduced in TDS 5.6 has been added to the solution context menu, allowing users to quick push all TDS projects at once.
- **Create Code Gen Reference file** - TDS 5.7 now has the ability to create a file that can be referenced for code generation by other projects.
- **Multiple Source Web Projects** \- The general property page now allows the developer to specify multiple projects for the Source Web Project in the general property page.
- **“Lightning” Deploy mode** \- Performance improvements were made to the TDS deployment process, making it much quicker.
- **Clean the packages folder** \- Executing clean or rebuild on a TDS project will now clean out the packages folder as well as the bin folder.
- **Add Item Properties (Deployment prop, Code gen, etc.) to TDS reports** \- The item deployment properties of items in a project are available in the TDS project report.
- **Delta deployment use relative dates** - This gives user the ability to specify “Items changed in the last n weeks/days” for delta builds and deployments.
- **Improve performance of sync** - TDS will check for changes to items the revision ID's during the sync process much the same way Razl does. 

### Bug Fixes
- Checkbox for build configuration selection missing from validation screen.
- Upgrading the version of TDS when using NuGet packages is confusing. Messages were added to help the user understand what is happening.
- Package bundling in combination with multiple TDS projects pointing at the same Source Web Project no longer fails the build.
- Renaming a project no longer breaks Package bundling.
- Configuration files which are linked to a Web project from other projects in the solution now copy correctly to the TDS output folder on build.
- TDS Sync with History on the solution level now disregards the trailing slash in URLs.
- TDS for VS2017 now references the correct MS TextTemplating assembly.
- TDS Web Project Deploy now works for wildcards in referenced csproj file.

[Download TDS 5.7.0.7](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205707.zip)