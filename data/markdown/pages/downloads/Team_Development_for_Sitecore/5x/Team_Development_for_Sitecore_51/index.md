---
title: 'Team Development for Sitecore'
description: 'Reduce deployment time, ensure team integration, and create an environment in which you can easily and quickly move code from your local environment all the way through your development workflow. Click here to learn more.'
origin: https://dev.sitecore.net/Downloads/Team_Development_for_Sitecore.aspx
---

## TDS 5.1.0.25 
_January 11, 2016_

- Added support for Enforce Version Presence in Sitecore 8.1

[Download TDS Classic 5.1.0.25](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051025.zip)

## TDS 5.1.0.24
_December 14, 2015_

- Fixed an issue with the Additional Properties list not scrolling correctly in the Validations property page.

[Download TDS Classic 5.1.0.24](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051024.zip)

## TDS 5.1.0.23
_December 01, 2015_

- Resolved issue with projects not being unloaded correctly when dependent includes change.
- Patched minor issue with items in workflow being filtered in Sitecore. 

[Download TDS Classic 5.1.0.23](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051023.zip)

## TDS 5.1.0.20
_October 07, 2015_

- Minor bug fixes

[Download TDS Classic 5.1.0.20](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051020.zip)

## TDS 5.1.0.17
_August 18, 2015_

- Fixed issues with NuGet packages and items with '$' in the name
- Fixed issue in .targets file with a dependancy on an old version of a dll
- Fixed issie with TDS prompting to regenerate code on every nuget file remove

[Download TDS Classic 5.1.0.17](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051017.zip)

## TDS 5.1.0.16
_August 12, 2015_

- Additional integration improvements for Visual Studio 2015.

[Download TDS Classic 5.1.0.16](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051016.zip)

## TDS 5.1.0.15
_August 03, 2015_

- Included full support for Visual Studio 2015.

[Download TDS Classic 5.1.0.15](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051015.zip)

## TDS 5.1.0.14
_July 27, 2015_

- Updated version number to reflect VS 2015 Beta changes.

[Download TDS Classic 5.1.0.14](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051014.zip)

## TDS 5.1.0.13
_July 20, 2015_

- Updated version number to match VS2015 Beta to enable side-by-side development

[Download TDS Classic 5.1.0.13](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051013.zip)

## TDS 5.1.0.11
_June 29, 2015_

- Minor updates to error messages and error logging

[Download TDS Classic 5.1.0.11](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051011.zip)

## TDS 5.1.0.9
_May 20, 2015_

- Updated to be capable with package building in Sitecore 8 Update 3

## TDS 5.1.0.8
_April 16, 2015_

- Fix installer edge case 

[Download TDS Classic 5.1.0.8](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205108.zip)

## TDS 5.1.0.6
_March 26, 2015_

- Fixed a problem with Code Generation running too often when removing items in the Sync Window.
- Solved an issue with spaces in project names.

## TDS 5.1.0.4
_March 22, 2015_

- Fixed a problem with Code Generation in the History Sync Window.
- Added the ability to double-click on an item in the history window.
- Prevent TDS options from being enabled when items are multi-selected in the Solution Explorer.
- Improved error handling on long paths.

## TDS 5.1
_December 15, 2014_

### MAJOR FUNCTIONALITY

- Added the ability to manage Sitecore Roles within a TDS project. 
- Introduced the ability to sync items using Sitecore's History engine. 
- Item level merging to handle merge conflicts at check-in.

### MINOR FUNCTIONALITY

- Added a field level deployment indicator link to the Deployment Property Manager.
- Fixed the tool tips on the Sync Window
- New ability to disable TDS features while debugging
- Allow users to now copy field values when in the sync window
- Allow syncing to continue after finding a duplicate item 
- Improve performance of the icon caching

### BUG FIXES

- When a value is in the TDS .user file and the TDSGlobal.config file, the build properties window didn't work correctly.
- If an item was locked and the deployment wanted to delete it, the deployment would fail.
- Stop code regeneration as each file is pulled down from Source Control.
- TDS Code Gen Errors now no longer appear when the solution is not open.
- Restyle the license update text box.
- Code generation would include fields when they were not in the TDS project, it is now prevented from doing that.
- Fixed the issue TDS & Rocks was having with \_Standard Values.
- If you have a solution with folders in it and the source web project is in a folder, something went wrong in the process of hooking TDS to the project. This issue has been resolved.

[Download TDS Classic 5.1](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2051.zip)
