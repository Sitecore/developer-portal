---
title: "Release notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Campaign_Creator_module/10/Sitecore_Campaign_Creator_module/Release_Notes
---

## Campaign Creator

The Sitecore Campaign Creator provides a simple and effective way for marketers to create new campaign activities and apply taxonomy in order classify campaign activities into larger campaign groups. You can:

-   Create new campaign activities and generate campaign tracking codes.
-   Apply taxonomy facets for classification purposes.
-   Search for campaigns by facet, date and name.
-   Link to Experience Analytics for single campaign activity performance view
-   Export lists of campaign activities.

### Campaign Creator overview

-   Campaign Creator is available as an optional module to provide a user friendly interface to create, classify and search for campaigns, building on functionality currently found in the Marketing Control Panel.
-   Campaign Creator also acts as an entry point to specific campaign activities in Experience Analytics, providing granular single campaign activity performance view. This replaces the Reports tab that was found in campaign items prior to Sitecore 8.0.
-   Taxonomy that is defined in the Marketing Control can be used in Campaign Creator to organize campaign activities by facets, in line with the customer’s overall marketing strategy.
-   Campaign Creator provides easy access to campaign codes so that marketers can differentiate and track all elements of their marketing mix to any desired degree of detail.

### Campaign Creator features

-   The Campaign Creator generates campaign tracking codes that can be used to track external interactions, such as email campaigns or traffic coming from an external web source. This enables marketers to gather more detailed information about how effective various channels and campaign activities are at generating traffic and engagement value.
-   The application provides a complete overview of campaign activities and is available from the Sitecore Launchpad.
-   Users create and manage campaigns using the Campaign Creator without needing access to the Marketing Control Panel or the Content Editor.
-   Campaign activities can be tagged with taxonomy facets for ease of access and organization.
-   User can specify date and time that campaign activities are valid, plus provision for open ended campaign activities.
-   User can select Engagement Plans for campaign activities.
-   Facets and other attributes can be edited by the user when needed, even if campaign activity is active.
-   Smart Panel provides a quick overview of campaign activity attributes and link to Experience Analytics.
-   User can export lists of campaign activities in order to review usage of campaign groups, facets and campaign codes.
-   Campaign Creator home page provides a single view of all campaign activities, with filters to provide a customized view in line with user needs.
    -   Filter by any combination of taxonomy facet (as defined in the Marketing Control Panel).
    -   Additional filtering by campaign activity name and validity dates.
-   Campaign activities are automatically published upon creation.
-   Campaign activities are automatically unpublished upon deletion.

### Known Issues

-   The module release of Campaign Creator is in anticipation of its integration in the Sitecore Experience Platform in version 8.1. As such, developers should be aware that APIs used in the module will change, in line with upcoming improvements in the Marketing Foundation.
-   When using Internet Explorer 10, a dialog may appear when selecting an Engagement Plan that allows the user to close the browser tab. User should select No to avoid tab closure, or use a different browser. (48238)