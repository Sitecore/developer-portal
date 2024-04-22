---
title: "Komfo Connector 1.0 – Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Komfo_Connector/10/Komfo_Connector_10/Release_Notes
---

**January 2016 – release compatible with Sitecore Experience Platform 8.1**

This a module release for Sitecore and Komfo customers. Sitecore recommends that you upgrade to this release if it includes features that meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

## Highlights

Komfo Connector provides a simple and effective way to create custom audiences using Sitecore xDB data that can be used for advertising on social networks. The tool also provides quick access to the Komfo platform and gives an analytics overview of the social channel, therefore allowing social media marketers to bring the power of Sitecore’s xDB segmentation, list management and campaign creation together with Komfo’s media management tools. It is possible to:

-   Create new custom audiences using existing Sitecore contact and segmented lists
-   Send custom audiences to Komfo
-   Apply automatic synchronization so that custom audiences are kept up to date with relevant contacts
-   Match custom audiences by email address, telephone number or Facebook ID to maximize match rates and potential audience reach
-   Apply Sitecore campaigns to custom audiences for tracking purposes
-   Link to Experience Analytics for single campaign activity performance view

## Documentation

For all Sitecore Experience Platform 8.0 documentation, please visit the new [Sitecore Documentation Site](http://doc.sitecore.net).

## System requirements

Before installing the Komfo Connector, ensure that the following is installed:

-   Sitecore XP 8.1  
    
-   SQL Server – for optimal performance, you should use SQL Server Enterprise Edition.

To be able to work with Komfo Connector, the following is required:

-   Facebook Ad account
-   Komfo account

## New features & improvements

Komfo Connector is an optional module that provides a user friendly interface to create custom audiences, building on functionality currently found in List Manager, Campaign Creator, and the segmentation capabilities of xDB. Komfo Connector is a hub for social channel management, giving you easy access to the Komfo platform and Experience Analytics.

This module facilitates a seamless connection between the Sitecore and Komfo platforms in order to utilize Sitecore audience segments and contact lists in Komfo social campaigns, for example, Facebook retargeted advertising. You can associate custom audiences with new Sitecore campaigns in order to track the results of specific marketing activities, or you can simply associate the audiences to existing campaigns.

Features include:

-   Dedicated Komfo Connector app accessible from the Sitecore Launchpad
-   Social channel Experience Analytics view
-   Analytics filtering by date range and site
-   Komfo platform fully integrated with Sitecore XP to allow easy cross-platform access
-   Set up wizard to create new Komfo client accounts that enable access to Komfo from Sitecore
-   Contains the ability to create custom audiences from Sitecore xDB contacts that can be passed to Komfo and subsequently matched by social networks such as Facebook to facilitate targeted and relevant advertising campaigns
-   Custom audience campaigns are tagged with a Sitecore campaign URL string in order to track how campaigns using the custom audiences perform in terms of traffic and visitor value.
-   Provides an overview of all custom audiences, including the ability to search for specific custom audiences
-   Supports multiple Komfo client accounts, so that different custom audiences can be sent to different accounts using the same interface
-   Select the fields to be matched in order to maximize the likelihood of contacts being matched by the social network
-   Choose how often a custom audience list is synchronized, to ensure that custom audiences are kept up to date in accordance with the needs of the advertising campaign
-   Synchronization can be pushed, paused and restarted in order to allow marketers maximum control over their custom audiences.
-   See at a glance exactly how up to date your advertising audiences are from feedback on custom audience synchronization and posting statuses
-   Get feedback on approximately how many contacts are currently matched by the social network to assess the impact your custom audiences campaigns have
-   Failsafe delete mechanism ensure that custom audiences are not deleted if they are active in current Komfo advertising activities.
-   Select either dynamic Segmented Lists or static Contact Lists to be used in custom audiences, in line with marketing needs
-   Seamless integration with the Campaign Creator application allows for the creation of on-the-fly new campaigns to be associated with a custom audience.
-   Tag campaign activities with taxonomy facets for ease of access and organization
-   Link to Experience Analytics for a specific, in-depth campaign view
-   Specify the dates and times that campaign activities are valid or provision for open ended campaign activities
-   Associate custom audiences with existing campaigns to simplify campaign reporting
-   Komfo login credentials are stored encrypted for maximum security.
-   Contact details communicated across platforms securely
-   Matched contacts are kept anonymous in order to maintain data protection standards

## KomfoSharp for developers

As part of the Komfo Connector release, KomfoSharp is provided as a development tool for Komfo customers. KomfoSharp is an API wrapper that is used to make calls to the Komfo REST API with the simple "Client Credentials Grant" protocol.

The following actions may be performed using KomfoSharp:

-   Authenticate and authorize with the API
-   Access the stream and user profile metrics for the fans of Twitter channels
-   Manage Custom Audiences by creating a custom audience and add or remove users to it
-   Automatically handle the Komfo API rate limits
-   Automatically handle the access token expiration
-   Available at: [https://github.com/Sitecore/KomfoSharp](https://github.com/Sitecore/KomfoSharp)

## Known issues

-   Matching custom audiences by Facebook ID requires a custom xDB index that is not yet available. As a result, Facebook ID matches will take longer than other matching fields. The new index is expected in the next available Sitecore XP update. (77763)