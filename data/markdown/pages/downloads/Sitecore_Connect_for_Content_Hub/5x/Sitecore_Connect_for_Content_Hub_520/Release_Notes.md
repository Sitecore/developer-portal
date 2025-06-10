---
title: 'Release Notes'
description: ''
---
Publication history:<br/>
**2025-06-10:** Updated release note entry 588808 (below); changed it from a new improvement to a breaking change.<br/>
**2024-05-24:** Released Sitecore Connect for Content Hub 5.2.0.

Return to the [Sitecore Connect for Content Hub 5.2](/downloads/Sitecore_Connect_for_Content_Hub/5x/Sitecore_Connect_for_Content_Hub_520) release page.

## New features/improvements
| Description | Ref. |
| --- | --- | 
| ​​Added support for Sitecore XP. 10.4. | |
| (DAM) Added SXA query resolver. | 567514 |
| (DAM) Added multivalue support to DAM attribute Mapping. | 573216 |
| (DAM) Added DAM attribute mapping for Rich Text Editor. | 533266 |
| (DAM) Added Image field Batch Sync for the DAM connector in Sitecore Connect for Content Hub. | 506972 |
| (DAM) Added support of Content Hub transformations to public links. | 518659 |
| (DAM) Added "Browse Sitecore DAM" link for File field type. | 579093 |
| (DAM) Added General Link Batch Sync for the DAM connector. | 597104 |
| (DAM) Add the "Insert from Sitecore DAM" command to all Rich Text profiles by default. | 595648 |
| (DAM) Allow copy paste public url to image field and generate XML. | 612067 |
| (DAM) Changed Image field thumbnail source to public link url for image and video type. | 612067 |
| (DAM) Included custom attributes when using the `html.Sitecore().Field()` helper. | 531252 |
| (DAM) Added `isRendering` option to include/exclude attribute for rendering. | 531252 |
| (CMP) Added Self Reference role option. | 554476 |
| (CMP) Enabled `StringPropertyValueConverter` to handle string array. | 547074 |
| (CMP) Added Reflect entity deletion in Content Hub to Sitecore XP through connector. | 573637 |
| (CMP) Added HubOut disable when the `CMP.ServiceBusEntityPathOut` connection string is empty. | 592312 |
| (CMP) Migrated to `Azure.Messaging.ServiceBus`. | 593444 |
| (CMP) Added Azure Service Bus Client Reauthentication when refresh token expire (due to Content Hub instance restart). | 609679, 611389, 613195 |
| (CMP) Updated Content Variants used as Variants trigger Localization behaviour. | 557754 |

## Breaking Change
| Description | Ref. |
| --- | --- | 
| Replaced two mapping attributes: `stylelabs-content-id` was replaced with `dam-id`, and `stylelabs-content-type` was replaced with `dam-content-type`. Update your code if it depends on these attributes. The existing synchronization will continue to recognize the former values, but will not automatically replace them.  | 588808 |

## Resolved issues
| Description | Ref. |
| --- | --- | 
| (DAM) Incorrect description of the `DAM_ContentHub` environment variable. | 532114 |
| (DAM) Exception due to multilingual field when inserting asset into image field. | 492001 |
| (DAM) Videos and PDFs not rendered in GraphQL responses. | 586455 |
| (CMP) Exception when mapping a multi-language fields on product entity. | 465914 |
