---
title: 'Team Development for Sitecore'
description: 'Reduce deployment time, ensure team integration, and create an environment in which you can easily and quickly move code from your local environment all the way through your development workflow. Click here to learn more.'
origin: https://dev.sitecore.net/Downloads/Team_Development_for_Sitecore.aspx
---

## TDS 5.5.0.20
_September 20, 2016_

- Created a new NuGet package for latest Sitecore Rocks
- Fixed null pointer exception when there isn't a local .item file and the user clicks on the "..." button in the Sync window lower pane.  
      
[Download TDS Classic 5.5.0.20](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2055020.zip)

## TDS 5.5.0.19
_August 10, 2016_

- Fixed issue with package builder truncating very long fields when using field level deployment
- Fixed an issue with editing the .user file and breaking the tree in the solution explorer
- Fixed an issue with AutoCopy not restarting after project reload

[Download TDS Classic 5.5.0.19](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2055019.zip)

## TDS 5.5.0.15
_June 13, 2016_

- Fixed issue with package builder failing if the project OutputDir doesn't exist

[Download TDS Classic 5.5.0.15](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2055015.zip)

## TDS 5.5.0.14
_June 03, 2016_

- Fixed issue with Sitecore 8 update 3 "created" property in the .item file

[Download TDS Classic 5.5.0.14](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2055014.zip)

## TDS 5.5.0.13
_May 24, 2016_

- Fixed null pointer issue when changing SourceWebProject
- Fixed an issue with config transforms not occuring in update packages
- Fixed an issue where editing the .user file causes duplicate items in the solution window
- Fixed an issue with build order and package bundling
- Added post steps to files update package

[Download TDS Classic 5.5.0.13](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2055013.zip)

## TDS 5.5.0.11
_May 02, 2016_

- Fixed issue with Packages.Config not being a relative path
- Prevent error popups when generating code and a warning is thrown by the T4 Engine
- Allow unattended installs
- Fix a crash in Deployment Property Manager

[Download TDS Classic 5.5.0.11](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2055011.zip)

## TDS 5.5.0.9
_April 19, 2016_

- Fixed issues with \<choice>\ elements in the project file
- Fixed a problem with "All Configurations" and Post Deploy steps
- Fixed an issue with Code Gen crashing "Get Sitecore Items" in a large project
- Minor speed improvements with Code Gen

[Download TDS Classic 5.5.0.9](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205509.zip)

## TDS 5.5.0.6
_April 07, 2016_

- Fixed an issue with Serializaton and Language fallback in Sitecore 8.1
- Added an option to stop warning about Git issue
- Fixed problems with Package Builder and multiple TDS project pointing at the same web project

[Download TDS Classic 5.5.0.6](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205506.zip)

## TDS 5.5.0.4
_April 01, 2016_

- Prevent duplicate ID's when getting Sitecore items
- Added ability to order post build steps
- Fixed issue with relative paths in Sitecore deploy folder and content sync

[Download TDS Classic 5.5.0.4](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205504.zip)

## TDS 5.5
__March 22, 2016__

### New Features
- Delta Builds and Packages by changed date.
- Only include items in deployment/package if they are changed after the specified date. This is activated in the "General" TDS property tab.
- Auto Deploy content files as they're edited.
- Reduce the app pool recycles while developing. When a content file in the Source Web Project changes, it will be automatically pushed to the correct location in theSitecore Deploy folder without requiring a |build. This is activated by an option in the TDSOptions page (Tools ->Options)
- Sync multiple projects.
- To improve workflow in solutions with a large number of TDS projects, in 5.5 the user is now able to use Sync Using History across multiple projects in a single Sync operation. This isactivated by right-clicking |on the solution and Choosing "Sync all TDS projects using History"
- AutoSync.
- Automatically picks up changes from Sitecore and syncs the project. This is enabled in the TDSOptions dialog. Once TDS communicates with a project, all changes should be picked up.
- Only update connector if it is different.
- Check access Guid and versions to see if the connector needs updating. This should prevent the connector from being installed during the build if there are multiple TDSprojects in the build itself.|
- Prevent build from running if there is a difference between IDE and Build tasks.  - This will validate that the TDS components were installed correctly and ensure TDS version mismatches will be caught during thebuild.
- Post deployment steps.  - This allows custom steps to be executed after deployment and package install. Added post deployment steps which can be configured on the "Deploy Property" page.
- TDS Cloud Builds.
- TDS now allows the user to add the TDS build components using a NuGet package. This allows for easily building TDS projects on cloud build servers. It's as simple as installing a new TDS NuGetpackage supplied in |the .zip into a private NuGet package source.
- Improved error handling on Sync.
- The Sync window had issues when there were LOTS of duplicate items. This feature prevents the user from being over-prompted when there are multiple duplicates.
- Added validator for Standard Values.
- Deploy Once isn’t supported for Standard values in Sitecore update packages. Accordingly, a validator was added to catch these.
- Sitecore Package Validation.
- Determine if a .zip package is installed in Sitecore; fail/install the package if it isn’t. This option has its own property page.
- Alert user to blocked template.
- When downloading T4 templates from GitHub, the .zip file may be blocked. This causes odd errors and problems creating the generated code. TDS now alerts users to blocked codegeneration templates.
- Check if Git is correctly configured for TDS.
- There are a few things Git users need to do to get the most out of TDS. To facilitate this, TDS will now check to make sure Git is configured correctly.
- Hide ignored fields from the Sync Window.
- If this option is selected, TDS will now only show non-ignored fields that are different in the sync windows.
- Ignore changes in certain languages in the Sync Window.
- The user can exclude certain languages from being compared for changes in the Sync process; this option is located in the TDS Options page.
- Allow Code Generation after a project change to be disabled.
- For very large projects, it may take too long to re-generate code every time the project changes.
- Allow link files as Code Gen templates.
- In a large project, it is difficult to manage multiple versions of the Code Gen files. This allows all projects to link back to a single version of the Code Gen file; usethe Add Existing dialog to add a link |just like any other file.
- Search NuGet Package folder for Sitecore assemblies during the package build process.
- The Package Builder requires Sitecore assemblies to work correctly. NuGet manages the location of these files in the /packagefolder. The location of these assemblies can vary over the lifetime of a project, so |the package builder will now look for a /package folder in the solution directory and then look for the required assemblies under that folder. Remove the Sitecore Assembly path from the Update Package Property page to get this to work.
- New and Improved Deployment Property Manager.
- The deployment property manager has a new UI, making it easier to understand what deployment properties are set on the various items. If it causes problems, this canbe disabled in the TDS Options.

### Bug Fixes: 
- Clean up error handling in GetSitecoreItems. There were problems when adding duplicate items. Errors on the Sitecore server were not properly reported.
- Fix issues with styling in Package Builder Read Me. Styles did not work correctly.
- Made code generated fields Language/Version aware. Fields were not picking up the various languages/versions. Added new property to prevent breaking existing code.
- Control-C and Control-V were not correctly supported in text boxes. Fixed support for Control-C & Control-V
- Minor performance improvements with CodeGen. Getting properties during Code Generation was clearing an internal cache.
- Prevent Sync from failing on very large content. If an item is too large to sync, it now shows up as “Broken”

[Download TDS Classic 5.5](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205500.zip)
