---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Email_Experience_Manager/Email_Experience_Manager_32/Email_Experience_Manager_32_Initial_Release/Release_Notes
---

**October 2015 – released Sitecore Email Experience Manager 3.2 rev. 151020 (Initial version)**

This a feature release. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

For instructions on how to download and install this release, please visit the following download page.

## Compatibility

This version of the EXM module only runs on Sitecore 8.1 rev. 151003.

You can upgrade to this version from EXM 3.1 rev. 150811 (Update-1)

## Highlights

EXM 3.2 is a mid-lifecycle product release focused on increasing stability and improving quality in the user experience and back end code. It also includes a major reworking of the internal data and task management techniques, with a view to being utilised by new features in the upcoming releases.

The Email Experience Manager 3.2 includes:

-   All fixes from EXM 3.1 rev. 150811 (Update-1)
-   150+ legacy bugs and minor enhancements
-   UX: New designs for key sections message creation workflow
-   UX: Updates to list pages including better search
-   Significant code reworking in key areas of UX/UI
-   A/B testing removed from triggered messages
-   Better mobile support for embedded images
-   Separate logging for EXM now added

Scale recommendations have been increased from 2 million emails per month to 10 million emails per month. For sizing recommendations and information, please contact your regional office.

## Resolved issues

The Newsletter Root item of a message had remained Protected if the message was the duplicate of an already dispatched message. This has been fixed. (418236, 58670)

Dispatch had paused if the recipient’s e-mail address had contained a hyphen. This has been fixed. (426910, 58680)

Template creation had not worked correctly when the message is creating in the context of language other than English. This has been fixed. (430431, 62821)

The List recipients count had not updated correctly when the contact had subscribed using EXM API. This has been fixed. (435920, 58703)

External links could not be opened on a CM-CD environment. This has been fixed. (406646, 62782)

Changes made to EXM Message Types names had resulted in excessive publish operations. This has been fixed. (69090)

A bug had caused searching within a list page by Campaign name and Subject line to fail.. This has been fixed. (388967, 58606)

Unauthorized users had access to the sitecore modules and Applications\Modules\ directories. This directory has now been protected. (363599, 58556)

Incorrect search results were returned when using Solr. This has been fixed. (438472, 58714)

Embedded images had not displayed on mobile devices. This has been fixed. (436646, 58705)

EXM had not added baseURL to links in the background attribute. This has been fixed. (396831, 58644)

Out of the box subscription forms had not worked correctly. This has been fixed. (443499, 66428)

The MigrateTargetAudiences upgrade script could not assign any contacts to the contact list. This has been fixed. (418058, 58669)

Anchor links had not parsed correctly. This has been fixed. (408387, 58666)

The ResetTimeout setting had been calculated in minutes instead of seconds. This has been fixed. (432244, 58687)

When scheduling an A/B test message, you were able to remove variant messages. This should not have been possible and had caused stability issues in the message. This has been fixed. (389049, 58622)

In a scaled environment, the redirect link for the Unsubscribe page had been generated using the modules_website site context. This has been fixed. (408794, 62791)

EXM had returned a 404 error with Danish language characters and dash replacement in the URL. This has been fixed. (425203, 58677)

Excessive publishing jobs have been created during the message dispatch that may cause performance overhead. This has been fixed. (71005)

## Known Issues

The View contacts report shows incorrect user names and does not show email addresses.