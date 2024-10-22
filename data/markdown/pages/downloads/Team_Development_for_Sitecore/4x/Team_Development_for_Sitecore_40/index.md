---
title: 'Team Development for Sitecore'
description: 'Reduce deployment time, ensure team integration, and create an environment in which you can easily and quickly move code from your local environment all the way through your development workflow. Click here to learn more.'
---

## TDS 4.0.0.44
_October 22, 2013_

*   Added support for Visual Studio 2013

[Download TDS 4.0.0.44](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/4x/TDS%2040044.zip)

## TDS 4.0.0.42
_June 05, 2013_

*   Full compatibility with Sitecore 7
*   Allow TDS builds to run with a blank deploy folder location
*   Fixed a problem where new version dialog box is too small
*   Fixed build fails to get key problem that occurred when app pool was not recycled

[Download TDS 4.0.0.42](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/4x/TDS%2040042.zip)

## TDS 4.0.0.39
_May 02, 2013_

*   Fixed a build failure with the Package Builder that occurred during the start of packaging.

## TDS 4.0.0.37
_April 15, 2013_

*   Resolved issue with "Deploy Once" not being recognized

[Download TDS 4.0.0.37](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/4x/TDS%2040037.zip)

## TDS 4.0.0.36
_April 14, 2013_

*   Significant performance enhancements with Sitecore 6.6 deployments

## TDS 4.0.0.25
_March 05, 2013_

*   Fixed a problem with Direct Descendants
*   Prevent TDS from popping a dialog when downloading icons
*   Removed obsolete icon logic
*   Fixed a problem with TDS and Test Explorer in Visual Studio 2012

## TDS 4.0.0.23
_December 16, 2012_

*   Added timeout checking to TDS when it gets to item icons. TDS will now more efficiently handle a missing Sitecore server.
*   Increased performance on vast projects.
*   Added function to clean up the Sitecore Web Url field before saving occurs.
*   TDS will now raise an error if the Sitecore Deploy Folder is blank and the user tries to install the connector

[Download TDS 4.0.0.23](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/4x/TDS%2040023.zip)

## TDS 4.0.0.17
_November 11, 2012_

*   Added timeout checking to TDS when it gets the icons. TDS will now handle a missing Sitecore server much better.
*   Fixed a problem with TDS and Rocks when the template was missing from the TDS project and Rocks saved the template.
*   Make TDS work better with multiple TDS projects pointing at a single Sitecore and editing with Rocks.
*   Update cache item header parser to read more information. This resolves a problem with parsing items.

[Download TDS 4.0.0.17](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/4x/TDS%2040017.zip)

## TDS 4.0.0.13
_October 01, 2012_

*   Full integration possibilities of Code Generation
*   The ability to use the Visual Studio .config transforms
*   Allowed for Item Merging capabilities and added a Merge window
*   Added ability to control the DLL's excluded from Code deploy and Package
*   Added ability to "show hidden files" and Include/Exclude in project
*   Updated Sync action and added funtionality to the sync window
*   New functionality to sync just one item
*   Allow for item to be deployed even if parent is excluded
*   Included an F1 help option in the main tabs of TDS
*   New right click menu for items already in the project
*   Resolved issue with projects that have a "." in the name
*   Added exception handling to menu actions
*   Fixed issue where “All Configurations” wasn’t working on the File Replacements tab
*   Allow for override of project settings from MSBuild
*   Resolved an issue that was found when deleting old content from the TDS Build Folder
*   Fixed package building when there isn't a source web project
*   Makes sure Visual Studio never forgets what project is referenced by TDS, which happened occasionally
*   Resolved the issue that occurs while sync. If you sync then close the window the sync seemed to pause
*   Made it possible to “Duplicate” an item in Rocks and add it to the TDS project
*   Fixed an issue with URI and dragging and dropping within Rocks
*   Added ability to "Open in Explorer"
*   Added Web Application Special Characters to build process