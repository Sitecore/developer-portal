---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/82/Sitecore_Experience_Platform_82_Update2/Release_Notes
---

**December 2016 – released Sitecore Experience Platform 8.2 Update-2 (rev. 161221)**

This is a product update. Sitecore recommends that you upgrade to this release if it includes fixes that meet the specific needs of your organization. If this release does not include new functionality or specific fixes that your organization requires, you may benefit from waiting to upgrade until Sitecore releases an update that is relevant for your organization. This is especially true in production environments.

## Important changes

#### Import batching

The List Manager used to use the Marketing Foundation BulkOperationManager to upload lists of contacts to xDB. The BulkOperationManager uploaded all the contacts as a single set. If the importation process was interrupted, for example if the server restarted, all of the contacts would not be uploaded and the list would be locked.

Contacts are now uploaded to xDB in batches.

The highlight of this new implementation are:

-   Default batch size is now 1000 contacts. You can configure this.
-   Memory consumption during the importation process has been significantly reduced.
-   Import speeds have been improved.
-   Import information is now logged.
-   You can review the progress of importation and indexing on the list task page.

#### Disabling the list locking mechanism

The list locking mechanism ensures that contact lists are uploaded, indexed, and completed before they are available for use, for example, as an email distribution list or as a source for another contact list. The list locking mechanism prevents concurrency issues by ensuring that only one user can edit a list at a time.

However, there are some scenarios where multiple changes must be made to a list within a short period. For example, during email dispatches, large numbers of list subscriptions and unsubscriptions can occur at the same time. In these cases, list locking is not appropriate.

We have therefore implemented the ability to disable list locking.

When you disable list locking, you must be aware that:

-   Disabling list locking can lead to inconsistencies in the number of contacts that are available in a contact list or in an EXM dispatch, versus the number of expected contacts.  
    This can occur because the contact list is not locked and another user can access the contact list while you are editing it.
-   A contact list can be used in EXM immediately after import, even if most of the contacts in the list have not been processed yet. This can result in an email being sent to a smaller audience than was intended. In these scenarios, to ensure that the list count is as expected before proceeding with an EXM dispatch, check the list count in the List Manager.
-   Incomplete contact lists are available for use as sources for other lists. This can result in incomplete child lists.  
    In these scenarios, to ensure that the list count is as expected before proceeding with a new list, check the list count of any source lists in the List Manager.
-   Multiple users can edit incomplete contact lists at the same time. If the list sources are edited while the contact associations are being written and indexed, the resulting lists may not match your expectations.  
    In these scenarios, ensure that your list management processes and user groups are aligned to take into account the potential impact of concurrent editing.

#### Setting the IdentificationLevel on imported contacts

When you import contacts, their `IdentificationLevel` is not always set to `known`. When users use a shared device, this can result in incorrect contact merges.

This only occurs when multiple users use the same device and multiple Sitecore user cookies are present in the same browser.

**Effect on data:**  

If two contacts, “A” and “B”, are imported into xDB with the List Manager and they then log in to the website from a shared device, these contacts will be merged in xDB. “A” becomes the successor contact to “B”, and “B” loses its contact data.

This issue is fixed in this update and the contact information about users on shared devices will no longer be merged by mistake.

## New features/improvements

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |
 | List Manager | ​Contacts are now uploaded from the List Manager to xDB in batches to improve performance and reduce memory consumption. | 114088 |   
 |
 | List Manager | An option has been added to disable the list locking mechanism if required. | 121177 |   
 |
 | List Manager | A contact's IdentificationLevel is set on import to prevent any incorrect contact merges when contacts use shared devices. |   
 | 84176 |
 | Marketing Foundation | You can now distinguish referrers that come from the same domain. For example, if a visitor to a web page is referred from the same domain as the web page, the "IsSelfReferrer" custom interaction's value is set to true and you can filter that data in reports. | 131171 |   
 |
 | Marketing Foundation | The IndexedContact.LatestVisitDate property is removed from the core analytics index. | 132631, 127650 |   
 |
 | Marketing Foundation | The performance of contact indexing and contact import has been improved when using the ContactBulkUpdateManager. | 132631, 127650 |   
 |
 | Marketing Foundation | ​Minor performance improvements for Interaction aggregation both live and historical.​ |   
 |   
 |
 | Marketing Foundation | Throttling of the indexing process for sitecore analytics index has been improved and enabled by default.​ | 132631, 127650 |   
 |
 | Marketing Foundation | ​The interval for the sitecore analytics index refresh strategy has been updated to 15 seconds (instead of 1 minute).​ |   
 | ​ |
 | Experience Profile | ​The Experience Profile dashboard now displays a list of top contacts sorted by value per visit instead of by latests visit time.​ | 128950 |   
 |

## Resolved issues

The following issues have been fixed:

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |

 | Miscellaneous | Sitecore crashes when there is an unexpected increase in session on SQL Server that is caused by the delete expired session data mechanism being implemented incorrectly.<br /><br />Note: This issue has been resolved for Sitecore's SQL Server and MongoDB session state providers but persists for Sitecore's Redis session state provider.<br /><br /> | 130338, 470110 | 98800  
 |
 | Miscellaneous | Setting the RequestValidationMode to 4.5 breaks the Content Editor and the Experience Editor. This setting is required when you use Single Sign On authentification via ADFS. | 473355 | 95457  
 |
 | Security | Some security vulnerability fixes |   
 |   
 |
 | Experience Profile | ​The activities and outcome details appear in the wrong position in the timeline. | 131743 |   
 |
 | Experience Profile | The Latest visit date field is removed from the Sitecore analytics index and the dashboard now displays the top contacts sorted by visit value instead of by latest visit date. | 128950 |   
 |

## Known issues/ Breaking changes

 | Context | Description | Customer ticket ID (or other) | TFS no. |
 | --- | --- | --- | --- |

 | Marketing Foundation | Default value of the /sitecore/system/Marketing Control Panel/Outcomes/Product Purchase outcome definition `Monetary Value Applicable` field is set to false by default. This affects applications that depend on the field, for example the Experience Profile. You can use the Marketing Control Panel or the Sitecore.Marketing.Operations API to change the field value after the installation. |   
 |   
 |
 | Marketing Foundation | Default value of the /sitecore/system/Marketing Control Panel/Outcomes/Contact Acquisition outcome definition `Ignore Additional Registrations` field is set to false by default. It changes how Contact Acquisition outcomes are registered by the Sitecore.Analytics API, that is `Contact Acquisition` outcomes can be registered multiple times. |   
 |   
 |