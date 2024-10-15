---
title: 'Team Development for Sitecore'
description: 'Reduce deployment time, ensure team integration, and create an environment in which you can easily and quickly move code from your local environment all the way through your development workflow. Click here to learn more.'
---

## TDS 5.0.0.23
_November 09, 2014_

- The issue with TDS hanging still persisted, it should be resolved now.

[Download TDS Classic 5.0.0.23](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2050023.zip)

## TDS 5.0.0.22
_November 02, 2014_

- Fixed an issue where TDS would hang when loading a TDS project

[Download TDS Classic 5.0.0.22](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2050022.zip)

## TDS 5.0.0.20
_October 16, 2014_

- Improved stability from below bullets
- Corrected an issue with Sitecore 8 date formats
- Fixed a problem with blank parameters in a package
- Added a new error message to trap broken template IDs in a sync operation
- Fixed an issue where a package ReadMe text was too long
- Made popup messages modal

[Download TDS Classic 5.0.0.20](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2050020.zip)

## TDS 5.0.0.15
_September 30, 2014_

- Improved the speed of code generation
- Reduced the number of blank lines in the generated files
- Added minor bug fixes for sync window edge cases
- Ability to disable different parts of code generation

[Download TDS Classic 5.0.0.15](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2050015.zip)

## TDS 5.0.0.10
_July 29, 2014_

- Added a validator that checks for bad characters in .item files

[Download TDS Classic 5.0.0.10](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%2050010.zip)

## TDS 5.0.0.9
_July 27, 2014_

- Fewer code gen popups during  syncing
- Fixed an issue with Project References

[Download TDS Classic 5.0.0.9](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205009.zip)

## TDS 5.0.0.5
_July 06, 2014_

- Minor patch fix to TDS deployment

[Download TDS Classic 5.0.0.5](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205005.zip)

## TDS 5.0.0.4
_June 03, 2015_

- TDSGlobal.config not being found by build servers
- TDS Projects without source web project create random folder
- Multi Project Code Generation delete field causes exception to be thrown.
- Multi Project Code Generation not regenerating all projects correctly on delete

[Download TDS Classic 5.0.0.4](https://scdp.blob.core.windows.net/downloads/Team%20Development%20for%20Sitecore/5x/TDS%205004.zip)

## TDS 5.0.0.3
_May 11, 2014_

- Fixed bug reported on the Test button in the Build tab
- Updated error messages shown during code generation issues
- Visual cues were updated in the Sync window

## TDS 5.0.0.2
_April 29, 2014_

- Fixed bug that caused TDS build to fail when .dll that is not a .net assembly is included in the /bin folder of a deployment
- Fixed bug that caused a TDS build that was started from the command line to fail due to Validators being enabled

## TDS 5.0.0.1
__April 17, 2014__

### New Features
- Ability to Reference Other TDS Projects- Setup dependencies between projects for code generation and bundling of projects when a build occurs. Code Generation can now reference classes generated in other TDS projectsfor base class inheritance. Bundling support allows multiple TDS projects to be combined into a single update package. 
- Improved TDS / Sitecore Rocks Integration - Items can be added to different TDS projects directly from the Sitecore Rocks interfaces. Items can also be synced through the Sitecore Rocks interface.
- TDS Project Wizard - A new Visual Studio project template has been added that will start a TDS connection wizard. The connection wizard will take the developer through the process of setting up their first connection
- Merging Large Fields - When merging large fields an additional button will display in the merge screen and also in the sync items window. Clicking this button will allow the user to see the entire field contents sideby side.
- Exclude Fields From Checks When Syncing - The developer can specify fields that TDS will ignore when performing a sync and checking for differences between the items on disk and the items within Sitecore. 
- Keyboard Shortcuts- Keyboard shortcuts have been added to the Deployment Property Manager, Sync Window and Merge Windows. 
- License Screen - A license screen has been added that can be accessed from the Help menu. It allows the user to find out their own license information and update this information if they need to. 
- Disable File Deployment - A check box that indicated that TDS should not deploy files from the target Web Application to the folder specified in the Sitecore Deploy Folder field. 
- Install folder Checks - An additional test button has been added to the Build tab that allows a developer to test that the Sitecore Web Url and Sitecore Deploy Folder fields both point to the same location. 
- Transform XML files - TDS can now transform any XML files not just web.config. TDS will transform them based on the build configuration being run, this is achieved by specifying transforms in the same manner as WebConfig transforms.
- Control Package Names - The name of the Sitecore update package (.update file) generated by TDS can now be controlled from the Update Package Settings tab. 
- Assembly Exclude List can now be an Include List - The Exclude Assembly list on the project General tab can now be used to create a white list of files to include in deployment. 
- Plain T4 Templates - A plain T4 template can now be added to the solution for code generation. 
- Global Config File - Developers can create a Global config file to contain common settings used across all TDS projects. When a setting is overridden TDS will place a symbol next to the field in the property tab anddisable the field.| 
- Help Link from Error Messages - Additional help links have been added to certain error messages in TDS to make it easier to understand and solve issues. 
- Project Validations - Project validations check the integrity of a TDS project when the project is built. TDS now contains several out of the box validators, for example the ability to ensure that certain items areset to deploy once |or that template items contain the correct field section then field structure. Custom validators can be created.

### Improvements
- Code Generation Cache Freshness - Improved the code generation item cache expiry to ensure that new items pulled in from source control are included in the code generation. 
- Moved Item Parsing to Background Thread - When a project configuration changes items will be re-parsed on a background thread to improve performance. 
- Regenerate Code Generation When Custom Data Changes - Code will automatically be regenerated when an items custom data or namespace changes. 
- Special Characters in Names - Better support for special characters in Sitecore item names with warnings when the user tries to import an item that may not work with the Sitecore update packager. 
- Item Path Lengths - Improved messaging when an items path length exceeds that which can be handled by the file system. 
- Loop Detection When Items are Deployed - Added loop detection when items are deployed to avoid TDS being caught in an infinite loop. 
- Clean Build Folders - Improvement to the process that cleans the build folders, including removing all file replacements. 
- Default Build Output Path - The default build output used to be directly beneath the solution e.g. \\debug, this has been moved to beneath the bin folder e.g. \\bin\\debug. 
- Error Loading TDS Project Notification - TDS will not show a dialog if there is a problem opening a project file, previously this would just be reported to the output window and maybe missed by a developer. 
- Removing a TT File - Removing a TT (code generation template) file will now remove references to it in the item tree where it has been set as the Code Generation Template for individual items. This avoids anexception being throw |when deleting TT files. 
- TDS Pane in Output Window - The Output window now contains a pane for TDS, this can be accessed by click on "Show output from:" and selecting "Team Development for Sitecore". TDS will log information to this pane. 
- Improved Performance in the Deployment Property Manager - Improved how the Deployment Property Manager handles thousands of items to avoid it hanging Visual Studio. 
- Caching Item Sort Order - Caching the item sort order to increase the speed at which a project loads. 
- Cleaning the Build Folder After File Replacements Changed - When the file replacements list is changed the build folder is cleaned. This avoids the situation where file replacement would be left behind. 
- Icon Paths - Icon paths are no longer included in the project file to make it easier to manage the project file when performing a merge. 
- Sitecore Rocks Diagram Plugin - Update the diagram plugin to support Sitecore Rocks 1.0. 
- Copy and Paste TT Files - It is now possible to copy and paste TT files within a project. 
- Template Code Regeneration when Parent Template Changes - When a template is inherited by another template, the child templates can be set to regenerate code when the parent template is changed. 
- Improved Property Page Field Validation - Improved the reporting of mistakes within fields in the TDS project property tabs. Validation error messages are now clear and additional checks have been added. 
- TDS Project File Associates to Visual Studio - Double clicking on a TDS project file in Windows Explorer will now open the project in Visual Studio. 
- Autosave TDS Project - The TDS project will now autosave after a sync or get items operations. This avoids the issue of users performing these operations and committing the item files but forgetting to save andcommit the project file |to source control. 
- Removing Sitecore.\*.dll from the Excluded Assembly List - Some users experience problems removing the Sitecore.\*.dll entry from the Excluded Assembly list, the line would be removed but would the reappear when theproject was opened again, this have been fixed.
- TemplateId is a Field Level Deployment Field - The TemplateId field is now a field level deployment field, this allows a developer to deploy just this field separate from the rest of the item information. This isuseful for items that are set to "Deploy Once" |but then have had their template changed. 
- Icon Indicating Missing .item Files - If the .item file for an item is missing on disk TDS will now display a different icon to highlight the issue to the developer. 
- Improved Messaging when TDS Fails to Communicate to Sitecore - Improved messaging when TDS tries to communicate with Sitecore making it easier to diagnose and fix connection issues. 
- Skip Duplicate Items - TDS will now prompt when it finds a duplicate item when performing a sync and will allow the developer to skip the item and continue syncing.

### Bugs
- Ability to merge \_\_Hide and \_\_Lock fields - Fixed issue where an exception would be thrown when trying to merge either the \_\_Hide or \_\_Lock fields. 
- Incorrectly Removing Child when Syncing Items - Fixed bug where child items would be removed if an items name didn't match rather than its Id. The id will now be used for comparison. 
- Projects in Solution folders - Projects that were nested within to levels of solutions folders were sometimes not found by TDS, this issue has been fixed. 
- Re-adding Items to TDS - Adding an item to TDS after deleting it resulted in a duplicate key error. 
- Merging an Item with a Null Value - When merging a TDS item with a null value this could cause an exception to be thrown. 
- Removed Registry Entries on Uninstall - Not all registry entries were being removed when uninstalling TDS. 
- Template Diagrammer Error in VS 2013 - Fixed bug that caused VS2013 to throw the error "Exception Catastrophic Failure" when using the Template Diagrammer. 
- Code Generation Required Connection Strings - Code Generation required connections strings to a Sitecore website to run, this is no longer required. 
- Save All Button - Clicking the Save All button will now save the TDS project. 
- The Project Build Order Was Not Being Enforced When Run from the Command Line - When running a build from the command line the projects were being build based on the order they appear in the solution file and notbased on the order of the project dependencies.