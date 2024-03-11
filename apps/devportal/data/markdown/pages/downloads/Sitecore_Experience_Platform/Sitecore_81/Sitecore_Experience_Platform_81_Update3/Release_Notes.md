---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/Sitecore_81/Sitecore_Experience_Platform_81_Update3/Release_Notes
---

**May 20, 2016 – released Sitecore 8.1 Update-3 (rev. 160519)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

For instructions on how to download and install this release, please visit the [Sitecore Developer Portal](/downloads/Sitecore_Experience_Platform/Sitecore_81/Sitecore_Experience_Platform_81_Update1).

## Highlights

The main highlights of this update:

-   Improved overall security – includes several potential security vulnerability fixes.
-   Numerous fixes in Search & Indexing functionality.
-   You can now change the default behavior so that anonymous contacts are not indexed.

## Resolved issues

The following issues have been fixed in this release:

### AntiCSRF

-   96364, 440984: The SitecoreAntiCsrfModule had a high memory footprint.

### API

-   98831: The private methods of the Sitecore.Data.MasterVariablesReplacer class were protected and now can be overridden or extended.
-   94426, 398331: The Sitecore.TemplateIDs class did not contain IDs for unversioned file templates.
-   96703, 450410: ItemsContext now implements the IDictionary interface.
-   97060, 456968: The number of Sitecore.Data.Versions instances created has been reduced.

### Configuration

-   105571: Sitecore did not set the FileSystemWatcherBufferSize property in accordance with the value of the Media.FileSystemWatcher.BufferSize setting.

### Content Editor

-   90418, 314409: The Sitecore.Data.Validators.BaseValidator.GetItem method had returned an item with the same value in all fields.
-   96708, 450554: Users must now lock an item to change its workflow state.
-   96977, 455474: New version of the branched item is created with empty tokens.

### DataProvider MSSQL

-   96169, 436811: BulkCopy did not work with an enabled retryer.

### Installation

-   99436: There was an unnecessary \Data\sitecore\shell\Override folder in Sitecore 8.1 U-1.

### Item Buckets Content Search

-   94978, 408894: The GetDatasourceDependencies processor does not work and throws an InvalidCastException
-   94979, 408898: Re-indexing dependencies had caused an infinite loop in the case of circular references.
-   95319, 419438: The Lock dialog and commands or XpathQuerySearcher did not work properly with the content search indexes.
-   96157, 436555: Too many jobs had been produced during indexing.
-   96450, 442933: There was an infinite loop while indexing files.
-   97803: The GetDatasourceDependencies processor had ignored the data sources from the final layout.
-   100329: Outdated item language fallback versions had sometimes appeared in the index when adding a new item version to the main language.
-   101698: ConvertDateTimeToUtc had logged a warning message in the Search.log file.
-   96453, 442973: ResolveFieldTypeByName could cause performance issues.
-   97052, 456880: UpdateIndexTimestampDirectHandler had caused null-reference exceptions.
-   94174, 393559: The markup was broken while displaying the search results.
-   94763, 404261: Truncating the search result data had broken the output of a search result.
-   95243, 416097: The search results were corrupted if link type fields were included in search.
-   95512, 424333: Field values were trimmed and not displayed in the search results in Content Editor.
-   96451, 442956: The Default view had not been respected by search tab.
-   95242, 416088: A comma had been added after link type field in search result
-   94168, 393325: The Bucket Default View had not worked.
-   97285, 440093: The "exclude/include templates" warning has been moved to index initialization.
-   95420, 421844: Items with no versions had been added to the wrong folder structure in a bucket.
-   93923, 389169: Lucene.NET may have thrown exceptions due to concurrency.
-   96527, 444448: Sitecore had hung in cases where it did not have access to search index folders.
-   93886, 388486: Index rebuilding had failed if an item name was longer than 128 characters.

### Language Fallback

-   106866: Language fallback did not work properly without language version 1 of the language that had extended to fallback.
-   108981: The index may have contained documents for non-existing item versions when item-level language fallback was enabled.
-   108982: The index may have contained incorrect field values for the dependent language when item-level language fallback was enabled.
-   109119: Sitecore had returned incorrect versions for the language where the first version did not exist in cases where item-level language fallback was enabled.

### Links

-   96503, 444066: Ensured that URLs are properly encoded and do not contain any curly braces.

### Login

-   97170: The ShellPage.GotoLoginPage page had sometimes raised an error regardless of redirects.

### Media

-   92707, 368505: Internet Explorer had frozen when a pdf file had partially downloaded.
-   91753, 343728: In the Media Browser, scrollbars did not appear in the Content Tree of the dialog.
-   93963, 389864: Dynamic resizing of animated .gif file had caused the "Could not run the 'getMediaStream' pipeline..." error in log files.

### Multibrowser fixes

-   96406, 441759: The Add and Remove buttons were not displayed in the Security Settings dialog. box
-   91708, 342814: In the Image Editor, it was not possible to crop images correctly.

### Miscellaneous

-   102240: A wildcard item could not be resolved properly when the display name was used.
-   105324: An item or wildcard item could not be resolved by display name with theEnabled\DeepScan ItemResolving.FindBestMatch setting.
-   93154, 375775: The wrong template had been used for the Check In item which caused errors in the logs when republishing.

### Package Designer

-   96440, 442714: An empty layout delta in the package had led to a broken presentation after installation.

### Publishing

-   100082: The Publish subitems and Publish related items checkboxes had been missing when only the Smart publish option was available.
-   95279, 417329: The publishing log had said Publishing Mode: Full after performing a smart publish.
-   97043, 456552: The Publish Subitems checkbox had not appeared in the Publish dialog.
-   97058, 456962: Preview publishing targets of every Workflow State should be sharable.

### Rich Text Editor

-   96750, 451341: The editor did not remove hostnames that contained HTTPS.

### Security API

-   93513, 382529: Sitecore had generated an empty email for an Anonymous user by default.

### SOLR

-   94649, 402162: Searching by the _fullpath field was case-sensitive for Solr, but not for Lucene.
-   95782, 429366: Equal had returned incorrect results for a term that did not have spaces for tokenized fields.
-   98247: The Content Tree Search did not ignore special symbols during search.
-   94650, 402164: Field values that were not enclosed by quotation marks should have been ignored.

### SPEAK Applications

-   99484: Paging to Kick users page has been added.

### Templates

-   90784, 321477: Fields containing the same name had caused ChangeTemplate to fail.
-   339540, 441850: Owner field was taking the value from template standard values item instead of the user who created the item.

### Update Installation Wizard

-   97037, 456432: A number of items have been removed from the PathAnalyzerDictionary.
-   101879: An update package containing templates with subitems under __Standard Values had not installed properly.

### Workbox

-   97046, 456711: The Make WorkboxForm.GetItems method has been made virtual.

### Workflows

-   95265, 416714: The GetItemsInWorkflowState API had failed in highly loaded solutions.

### Layouts

-   108405: Final Layout is empty after publishing a clone.