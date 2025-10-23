---
title: 'Release Notes'
---
**Sitecore 10.4.2 rev. 012675 PRE**, released **October 14, 2025**

#### Released after 10.4 Update-1 (10.4.1 rev. 012149)

Ref. | Description
--- | ---
PDXP-9109, PDXP-7922, PDXP-7886 | Security enhancements
PDXP-15311 | Image field where a DAM public link is inserted is modified when using the edit frame in Experience Editor
PDXP-12763 | Editing a component in Experience Editor using the WebEdit button resets values of the Date and DateTime fields
PDXP-14365 | The previous Image-as-Resource feature caused a performance degredation the `CompositeDataProvider` logic when resolving the item path, caused by a change in what gets cached
PDXP-5587 | Introduced a lightweight, secure tracking script to help us better understand how Sitecore’s management UIs are used. This will help us ensure future enhancements are guided by real-world usage patterns. No content, website data, or website visitor information is tracked. Tracking respects privacy settings and licensing controls.
PDXP-4583 | After removing a broken link pertaining to a field on an item, a new version of the item for the English language gets created
PDXP-11604 | Incorrect link returned from LinkManager causes problems with static error pages generator
PDXP-11391 | The installation of security patch `Sitecore.Support.10.0-10.4.zip` from Sitecore [Security Bulletin SC2025-003](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB1003667) can fail to initialize, with an uncaught exception. MembershipPasswordException: The user account has been locked out
PDXP-11064 | Language embedding on site definitions does not work in SXA 10.4
PDXP-7564 | AccessViolationException in FiftyOne.DeviceDetection.Hash.Engine.OnPremise.Native
PDXP-7556 | Rich text fields with internal links break XHTML validation in Experience Editor
PDXP-7316 | English versions are created when drag and dropping media files with fallback enabled
PDXP-876/624270 | StackOverflowException if a predefined rule references itself
623800 | High memory usage during index rebuild caused by SolrFullBatchUpdateContext
618843 | Exhausting threads available for DeviceDetection crashes the instance

#### Released after 10.4 Initial (10.4.0 rev. 010422), up to and including 10.4 Update-1 (10.4.1 rev. 012149)

Ref. | Description
--- | ---
PDXP-7590/PDXP-1052/624115, PDXP-7180, PDXP-5517/629358, 628372, 624693, 619349 | Security enhancements
PDXP-4621/613683 | MediaUrlBuilder does not include a leading slash in the URL when AlwaysExcludeVirtualFolder is set to true
PDXP-3405/PDPX-858/622654/619652 | After an item with publishing restrictions is opened in the Experience Editor, the wrong version is displayed in the Content Editor in the upper-right pane; in Edit mode the resolved item version may be incorrectly stored as the latest in the "Item" cache
606303 | Database.GetItem returns null in Sitecore.Links.UrlBuilders.Helpers.ItemPathBuilder.GetRelativePath when enforceVersionPresence is true
96426 | Publish inconsistency caused by processing order
627465 | Sitecore XP 10.4.0 NuGet packages missing third party dependencies. Ref: KB1003598
624954 | Log folder is created with Thai culture in Azure Web App
624767 | StripLanguage processor creates languages as case-sensitive
598738 | Added optional automation to simplify installing SXP 10.4.1 PRE builds; includes automated application of binding redirects and patching of config files where applicable; see Documentation/Optional deploy automation/readme.md in the SXP 10.4.1 PRE build package
624315 | Inserting an internal link for an image allows selecting media items only for non-admin users
623096 | HTML tags are getting html encoded in Experience Editor after text change in Single-Line and Multi-Line Text
356688 | `Sitecore.XConnect.Segmentation.SegmentationEngine.PerformSearch` lock statement blocks threads if the xConnect search response time is high
622482 | Accented characters is encoded when edited using *'Field Editor Button'* in Experience Editor
613745 | For deployments using EXM, update `ChilkatDotNet48` to the latest version
95996 | Collapsing sections in Reset Fields dialog throws an exception
625976 | Publishing an item may cause exceptions on remote instances: "Could not find configuration node: databases/database[@id='master']"
621268 | Added the ability to optionally enable a Connection String in Microsoft's Azure Monitor - Application Insights feature, in response to Microsoft declaring end of support for Instrumentation Key Ingestion as of March 31, 2025; ref: KB1003554
624167 | Pages disappeared after publishing [CFW-5772]
624166 | Item path is not resolved correctly in live mode [CFW-5342]
609020 | Item fallback version provided in processor argument is not respected
621666 | Changing the template of a media item with a single language and language version from Shared/Unversioned to Versioned is not account the item`s versions and language
624749 | Device simulator shown TypeError on console and blinking
619328 | Content in the simulator keeps flashing and eventually the page shows Error code: `STATUS_STACK_OVERFLOW`
618639 | MediaRequestHandler ignores value of `MediaResponse.Cacheability` setting
614821 | Performance degradation when resolving Standard Values token value for a fallback version of a cloned item