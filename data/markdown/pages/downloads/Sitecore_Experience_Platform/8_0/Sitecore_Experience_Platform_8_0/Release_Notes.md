---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/8_0/Sitecore_Experience_Platform_8_0/Release_Notes
---

This a feature release. Sitecore recommends that you upgrade to this release if the included features meet the specific needs of your organization. This release contains significant new feature functionality, and we encourage you to evaluate it.

For instructions on how to download and install this release, please visit the followin[g](http://dev.sitecore.net/) [`Sitecore Developer Portal`](http://dev.sitecore.net/)[](http://dev.sitecore.net/)

## Highlights

The Sitecore® Experience Platform™ 8 includes:

-   A new cross-platform visual design for the Sitecore client interfaces, applications, and modules
    
-   A redesigned Sitecore login screen
    
-   A redesigned Launchpad which is now available to all users
    
-   New Marketing Foundation features
    
-   A new way of centrally managing marketing taxonomies and classifying marketing definitions
    
-   A fully integrated Federated Experience Manager (FXM)
    
-   List Management as an integrated part of the platform
    
-   New SPEAK components within a new SPEAK theme
    
-   Enhanced Experience Analytics
    
-   Enhanced Experience Profile features
    
-   Automatic content testing and optimization reporting
    
-   A new Path Analyzer component
    
-   Full UTC support across the complete platform
    
-   Versioned layouts – a different presentation set on different versions of different languages for the same item
    

**Documentation**

For all Sitecore Experience Platform 8 documentation, please visit the ne[w](http://doc.sitecore.net/) [`Sitecore Documentation Site`](http://doc.sitecore.net/)[](http://doc.sitecore.net/)

### New features & Improvements

#### Platform

##### Visual design

-   A new visual design has been applied to all screens, dialogs, apps, and modules – providing a consistent look and feel throughout the whole platform
    
-   Standardized and consistent navigation and logout applied across the platform
    

##### Login

-   New simplified design
    
-   Associated pages refreshed with the new visual design (Forgot Password, Kick User)
    
-   Change Password and UI language selection removed (now available from the Control Panel)
    
-   Configurable option to display browser and license information on the Login screen
    

##### Launchpad

-   New SPEAK-based Launchpad available to all users after login:
    
-   Presenting relevant options based on user role
    
-   Options grouped by business function (Marketing, Content related, Development)
    
-   Including two personalized (and configurable) panes showing real-time analytics data
    

##### Other general changes

-   The Marketing Center has been renamed to Marketing Control Panel and is available from the Launchpad
-   New SPEAK-based Control Panel, incorporating options based on user role
-   The Preferences group has been renamed to My Settings
-   The Globalization group has been renamed to Localization
-   The Desktop has been refreshed with the new visual design
-   Quick Actions have been deprecated

##### Time zones and UTC

-   Sitecore content management and content delivery instances that are spread across an enterprise in different time zones had problems with synchronization when date and time values were stored in local time. This has been fixed by converting all date/time values to UTC format before saving them to the database and converting them back to server time when displaying them in the UI.(358679, 338489, 361446, 386258)
    
-   A new ServerTimeZone setting has been introduced in the Web.config file to specify the server time zone that the instance uses to convert between UTC time and local time, for example "GMT Standard Time". The value must be parsable to a valid time zone ID. Se[e](http://msdn.microsoft.com/en-us/library/gg154758) [`http://msdn.microsoft.com/en`](http://msdn.microsoft.com/en-us/library/gg154758)[`-`](http://msdn.microsoft.com/en-us/library/gg154758)[`us/library/gg154758.aspx`](http://msdn.microsoft.com/en-us/library/gg154758) [](http://msdn.microsoft.com/en-us/library/gg154758)if left blank, Sitecore uses the time zone of the operating system.
    
-   A new Analytics.Reports.DisplayDatesInUtc setting has been introduced in the App_Config\Include\Sitecore.Analytics.config file to control whether dates and times are displayed in UTC or the local server time zone in the Experience Analytics reports. By default, dates and time are displayed in the time zone of the local server. (350872)
    
-   New helper methods (ToUniversalTime and ToServerTime) have been added to Sitecore.DateUtil class. These methods should be used for all date/time conversion operations.
    

##### Experience Editor (formerly the Page Editor)

-   The ribbon has been redesigned and implemented in SPEAK
    
-   The web application cache (Html5 feature) has been applied to the new ribbon to improve performance  You can now rename items
    
-   You can now assign goals and attributes
    
-   You can now set publishing restrictions
    
-   You can now create and manage URL aliases
    
-   You can now navigate using tree view
    
-   The new Explore mode available from the editor lets you simulate the visitor experience and test marketing automation without publishing sites
    
-   Several page extenders have been added to the `<pageextenders>` section of the
    
-   Sitecore.ExperienceEditor.config file to facilitate switching between the old and the new ribbons
    

##### Versioned layouts

-   Sitecore Experience Platform 8 introduces support for versioned layouts and renderings so that you can configure different presentation sets on different versions of different languages for the same item. This is in addition to still supporting shared presentation details that are used for all languages and versions.
    
-   A new tab called Final Layout has been added to the Layout Details dialog to let you configure versioned presentation details for the current version of the item.
    
-   The versioned presentation details are stored in a new versioned field named __Final Renderings, which has been added to Layout section. When viewing this field in the Content Editor, it displays the final combination of shared and versioned presentation details for the current version of the item.
    
-   When Sitecore resolves the final presentation details for an item, it uses the following order when applying layout deltas: the presentation details of the __Final Renderings field are applied on top of the shared __Renderings field, which in turn are combined with the template standard values (both the versioned __Final Renderings field and the shared __Renderings field).
    
-   The Reset Layout dialog has been reworked to let you reset shared and versioned layouts.
    

##### Sitecore.ContentSearch API

-   When you used the Sitecore. ContentSearch API and searched for data in the index, a NullReferenceException error occurred if the index was configured to use the Sitecore item crawler with a nonexistent item as root. This has been changed so that the root item of the database is now used as the root item for the crawler in this situation. The Index that contains such crawler will not index any data and return empty search result. (419422)
    
-   All date and time field values are now indexed in UTC format. The DateTime properties in POCO objects are returned in UTC value by default. For example, to automatically convert the value to a different format, you can use the DateTimeFormatterAttribute attribute [DateTimeFormatter(DateTimeFormatterAttribute.DateTimeKind.ServerTime)]. (409457)
    
-   ISearchIndex is now disposable.
    

##### Link Manager

-   The default value of the addAspxExtension attribute in the Link Manager configuration has been changed to false so that Sitecore does not add an aspx extension to the generated links. (416365)
    

##### Performance improvements

-   The default size for all caches has been increased by a factor of five. (416368)
    
-   The threshold value for the MemoryMonitorHook processor has been changed to 2GB. (416368)
    
-   The ContentSearch indexing engine has been optimized to use cache rather than constantly opening and closing the index writer for every document that is being indexed. User.IsDisabled property has been optimized not to make a separate call to the database but reuse cached profile data. (421860)
    
-   The configuration of Sitecore.AntiSCRF module has been reworked to minimize the usage of regular expressions and use standard string operations instead. This change has improved module filtering engine performance (421870)
    

##### Database schema changes

-   The Link Database API did not support items from database with a long name. The names were limited to 50 characters. This has been fixed so that now the limit is 150 characters. (417250)
    

##### Media Library

-   The geolocation metadata fields (Latitude, Longitude, LocationDescription, CountryCode, ZipCode) have been moved from the Jpeg templates to the File templates. This means that all templates that are based on the File template now inherit these fields. (409925)
    
-   The Latitude and Longitude fields are now populated when you upload JPEG images that contain geolocation metadata. (410658)
    

##### Miscellaneous

-   A new LinkProviderSwitcher class is available. The code inside the switcher block is now executed using the specified LinkProvider instead of the default one. (420501)
    
-   A new SiteProviderSwitcher class is available. The code inside the switcher block is now executed using the specified SiteProvider instead of the default one. (420503)
    
-   A new SitecoreSiteProvider has been implemented. This provider aggregates and returns data from all referenced site providers. The provider is now used as the default site provider and aggregates data from the ConfigSiteProvider. This makes it easier to extend the system with additional site providers. (420503)
    
-   A new pipeline-based item provider has been implemented. New empty pipelines for all public API of the standard ItemProvider have been added to configuration file. The Standard ItemProvider is used as a fallback provider by default. (422315)
    
-   The following third-party DLLs have been updated to a newer version. You might have to update and recompile your code if you are referencing any of these DLLs from your code: The Newtonsoft.Json.dll has been updated from 6.0.3 to 6.0.5. (409728)
    

##### New include files in the /App_Config/Include folder

-   The `SwitchMasterToWeb.config.example` file simplifies the setup of Sitecore Content Delivery instances by removing any references to the Master database from Sitecore configuration files. Note: This include file should only be used on CD instances. The file is mentioned in the Scaling Guide documentation and was previously available as a separate download. (377769, 389679, 402515, 413986)
    

#### SPEAK

##### SPEAK Framework

-   Various performance improvements have been introduced.
    
-   An InitializePage pipeline that SPEAK executes when generating a page has been added.
    
-   A Bundling Mode option has been added to the PageCode component’s AssetsLoadingType parameter to specify that SPEAK should bundle asset files.
    
-   MVC views are precompiled when SPEAK is started.
    

##### SPEAK Business Component Library

-   All components have undergone visual-design and user-experience enhancements.
    
-   Multiple components now save their state for the current user, unless the IsStateDiscarded property is set to True.
    
-   The Accordion component has been renamed to AdvancedExpander. This is not a breaking change. Pages that previously included the Accordion automatically reference the AdvancedExpander. The AdvancedExpander adds the IsCollapsible property, which determines whether the collapse/expand icon appears for users.
    
-   The ActionControl can now be bound to a ListControl, so that selecting an item in the ListControl enables the ActionControl and actions can automatically influence the selected item.
    

-   The Data property has been added to the ActionControl.
    
-   The HasSelectedItem property has been added to the ListControl.
    

-   The ActionControl groups favorites based on whether they display an icon or a label.
    
-   The AdvancedComboBox component has been added. This component provides a drop-down list control that supports grouping and end-user filtering.
    
-   The Border component now supports a Width property.
    
-   The Border and RowPanel components now support a PaddingType property.
    
-   The ContextSwitcher component has been added. This component provides a drop-down list control for changing the application context.
    
-   The DatePicker component now enables the developers to limit the set of available dates.
    
-   The DialogWindow component now contains the MessageSpecific option in the Size property.
    
-   The ListControl component now supports TileView mode.
    
-   The ListControl now supports infinite scrolling.
    
-   The Menu component has been replaced with a new, more sophisticated Menu component, which provides the application navigation component used in Sitecore applications.
    
-   The Popover component has been added. It provides a generic container that users display by clicking on or hovering over another component on the same page.
    
-   The ProgressBar component has been added. It displays a horizontal bar with a colored area that fills from 0% to 100% of the horizontal space available in the bar. Applications typically use the progress bar to show the status of processes that require time to complete.
    
-   The SheerUI component has been added. It enables developers to call dialogs implemented in SheerUI from SPEAK pages.
    
-   The Slider control provides support for more label types.
    
-   The TabControl now supports showing and hiding tabs.
    
-   The TimePicker component has been added. It provides an interface for users to specify a time and can be bound to a DatePicker component to allow users to set both a date and time into a single DateTime value.
    
-   The TimeLine component has been added. It displays interactive timelines and is used in Sitecore’s reporting applications.
    
-   The TreeView component was renamed to ItemTreeView, to indicate that the component only supports the hierarchical display of items, as opposed to generic information. The ItemTreeView component supports additional filtering options.
    

#### Marketing Foundation

The Marketing platform (formerly known as DMS) has been enhanced to cater for ‘Customer Experience Management’ – focusing on the contact entity, the platform is capable of working in a multichannel environment.

-   Channel tracking on interactions enables the tracking of online or offline channels for interactions.
    
-   Outcome tracking enables a brand to track the results of a series of interactions that have a meaningful monetary value. The brand can then act on (personalize, analyze, report) these outcomes.
    
-   The new Unified Contact Model enables the querying of centralized information about a contact – this ensures consistent behavior when interacting with a contact.
    
-   The new Bulk Contact Update API enables the import and update of large numbers of contacts at a time. This is useful for importing contacts from your CRM or user-profile systems.
    
-   The new Interaction Registry API enables the registration of external interactions collected outside Sitecore.
    

##### Channel support

-   Interactions and pipelines have been extended to track channels (one channel per interaction).
    
-   The Taxonomy node has been added to the Marketing Control Panel to enable the management of channels.
    
-   The ChannelId field has been added to the interaction collection.
    

##### External interaction tracking

An external interaction is an interaction between a contact and a ‘company’ that takes place outside the context of Sitecore. External interactions can include a visit to an ordinary website not running on Sitecore, a phone call to the support center, the use of a mobile application, a visit to a branch, or anything else that can be seen as an interaction between a contact and a brand.

-   The Interaction Registry service can now be used to register external interactions with the system.
    
-   The Interaction Registry service can now register an interaction without a Sitecore session.
    
-   The Interaction Registry service can now create an interaction from within an existing Sitecore session.
    
-   The Interaction Registry is only available in the web role since it has a direct dependency on the tracking subsystem of the Sitecore Experience Database.
    

##### Outcome tracking

The introduction of outcome tracking provides the ability to track the results of interactions and assign them a monetary value. Realization of an outcome associates the outcome definition with a contact

Outcomes can influence the content displayed for a given visitor through Sitecore's standard personalization conditions. Content editors can personalize content on any outcome realized for a contact - regardless of the source (external system, web session or otherwise).

-   Outcome definitions are managed in the Marketing Control Panel.
    
-   Outcomes can be registered during an interaction.
    
-   Registered outcomes are displayed on the Experience Profile.
    

##### Unified Contact Model

Additional facets have been added to Contacts:

-   The IContactCommunicationProfile facet called "Communication Profile" has been added:
    
    -   CommunicationRevoked – indicates that the contact should not be contacted For example, the Email Experience Manager uses this facet to check whether emails should be sent.
        
    -   ConsentRevoked – indicates that the contact has revoked their consent to be contacted
        
-   The IContactPreferences facet with name "Preferences" has been added.
    

-   Language – indicates the preferred language for the contact (in the form of a language code). For example, this value is used by the Email Experience Manager to determine the language for emails.
    

##### Schema changes

-   The ChannelId field has been added as a part of the Interaction Channel implementation.
    
-   The new “Outcome” collection has been added as a part of Outcome Tracking.
    

#### Marketing Taxonomy API

##### Overview

The Sitecore Marketing Taxonomy API introduces a new API for centrally managing marketing taxonomies by classifying marketing activities and collateral. The API makes it possible to associate campaigns, goals, and media items with definable classifications to facilitate powerful reporting and orchestrated multichannel campaigns.

The API was designed to ensure backwards compatibility with existing products. This means that previous methods of interacting with marketing definition data will be marked as obsolete. However, please note that these previous methods will continue to be supported in Sitecore 8.

Version 1 of the API introduces a single read-only entry point for accessing marketing data – running on a contentauthoring server or in the Sitecore Cloud.

Changes resulting from the Sitecore Marketing Taxonomy API are designed to be as seamless as possible. Therefore, all APIs involving the tracker and master data content found under the Marketing Control Panel still work as in previous versions.

**`Note:` For products that create and deploy campaigns or goals, existing APIs will continue to work for Sitecore 8.0. These methods must be continued to be used even if marked obsolete.**

##### Details

-   A hiearchical marketing taxonomy (Sitecore.Marketing.Taxonomy) which enables API classification of marketing operations has been introduced
    
-   The DefinitionManagerFactory assembly has been introduced which can be used to get an instance to definition managers.
    
-   A JsonConverter which stores ID data using the Json format has been added to the Sitecore kernel ? The following Sitecore.Analytics code is obsolete:
    
    -   Tracker.DefinitionItems.CampaignCategories
    -   Tracker.DefinitionItems.Campaigns
    -   Tracker.DefinitionItems.Goals
-   Changes to the Sitecore.Analytics template
-   The Executive Insight Dashboard has been deprecated.

-   A new base template has been added to classify campaigns using the taxonomy:
    

/sitecore/templates/System/Analytics/Marketing Taxonomy/Base/Classification/Campaign Classification.

-   A base template has been added for goals: /sitecore/templates/System/Analytics/Marketing

Taxonomy/Base/Classification/Goal Classification o A file (versioned and unversioned) has been added: /sitecore/templates/System/Analytics/Marketing Taxonomy/Base/Classification/Media Classification.

-   Changes to the Content Editor and Database o A Deploy button has been added to the Media tab for media items.
    
    -   Added Templates under master/system/analytics/marketing taxonomy.
        
    -   A base "Classification" template has been added to the following:
        
        -   Campaign
            
        -   Goals
            
        -   Outcome
            
        -   Unversioned/file
            
        -   Versioned/file
            
-   In the Marketing Control Panel, the Taxonomies node has been added to host content for the Sitecore.Marketing.Taxonomy API.
    
-   OutcomeDefinitionManager has been moved to Sitecore.Marketing.Definitions.Outcome
    
-   Changes to Sitecore.Analytics.OmniChannel o The default channels have **all** been changed and have new IDs. o The default channels have been moved to marketing control panel/taxonomies/channels.
    
    -   ChannelDefinitionManager has been removed. Instead, you can use ChannelTaxonomyManager. You can retrieve an instance by calling TaxonomyManager.Provider.GetChannelManager().
        
    -   The Asset channel type has been removed.
        
    -   The IDs for all out-of-the-box channels have changed.
        
    -   The concept of subchannels has been removed. You now only have: channel types, channel groups, and channels.
        
    -   Only a channel id can be added to an interaction
        
-   Changes to the reporting database o The following new tables have been added to host taxonomy and definitions. These should not be read directly. Please use Marketing Definition API.
    
    -   CampaignActivityDefinitions
        
    -   GoalDefinitions
        
    -   MarketingAssetDefinitions
        
    -   OutcomeDefinitions
        
    -   OutcomeDefinitionTypes
        
    -   Taxonomy_TaxonFieldDefinition
        
    -   Taxonomy_Taxon
        
    -   Taxonomy_TaxonFieldValue o You can still see campaigns and page event tables in the reporting database. These have been kept for backwards compatibility.
        

#### Email Experience Manager (EXM) – formerly Email Campaign Manager (ECM)

EXM 3.0 is built on the new SPEAK framework.

-   The List Manager is now integrated and uses contact lists and segmented lists to send emails.
    
-   User-defined opt-in and opt-out lists for messages have been added to give better control on subscriptions.
    
-   The ability to set a global opt-out list per root manager has been introduced. This gives better flexibility to manage the global opt-out list and allows more control over opt-out list for global business scenarios.
    
-   The Recurring dispatches feature has been added, allowing new business use cases and a number of new email marketing scenarios. For example, birthday campaigns that are sent out to a segmented list on their birthday, or a renewal campaign that is sent out to all customers when their subscription is about to expire.
    
-   Offers the ability to select a list and instruct EXM to remove bounces or unsubscribers from it, helping to deliver better conformance to subscription requirements.
    
-   All dates are now stored in UTC and displayed in local client time.
    
-   Dispatching and personalization now use a unified recipient model instead of a specific source.
    
-   A new Create menu has been introduced for improved usability.
    
-   Message tasks now use lazy loading to load the content of the message data. This results in faster message loading and helps users be more productive.
    
-   Users can now set the recipient list for triggered messages instead of automatic creation.
    
-   When emails are generated, the Email channel is now automatically added to the trackable email links.
    
-   The following pipelines have been introduced for a better and flexible recipient model: getSitecoreUserRecipient o getXdbContactRecipient o updateContactInfo o handleUndeliveredMessage.
    

#### Web Forms for Marketers

The Web forms for Marketers module (WFFM) has been updated to the new SPEAK framework.

-   The new Update Contact Details save action automatically updates the contact details with data entered in a form.
    
-   To provide better integration with email campaigns, the new Add to Contact List save action enables you to assign a visitor to a predefined contact list that is used as a recipient list in the Email Experience Manager.
    
-   To make it easier to create forms, the Form Designer application is now available from the Start menu in the Sitecore Desktop.
    
-   An Insert Form button is now available in the Forms group of the ribbon in the Content Editor and the Experience Editor.
    

##### Reporting

-   The Form Reports application is now available from the Start menu in the Sitecore Desktop ? Marketers can now view form-related reports from the Content Editor and the Experience Editor.
    
-   The Form Reports application is now based on SPEAK.
    

#### Federated Experience Manager

The Sitecore Federated Experience Manager (FXM) provides a simple and consistent way to track and personalize a user’s experience across multiple (federated) websites, including non-Sitecore websites.

##### FXM overview

-   All functionality to track visits or personalize content externally is deployed through a single JavaScript tag.
    
-   All visits can be enriched and personalized through Sitecore marketing attributes (goals, events, profiles, and campaigns).
    
-   FXM captures and delivers all external site visitor information into the Sitecore Experience Database (xDB).
    
-   A dedicated SPEAK application lets you easily create the FXM JavaScript tag for an external website.
    
-   Integrates into existing marketing capabilities (including goals, events, profiles, campaigns and engagement automation) available in the Sitecore platform.
    
-   All external site visits are tracked and available in the Experience Analytics dashboard.
    
-   Integration with the Sitecore Experience Editor lets you visually manage the external website pages that you are tracking and the specific elements on a page that you wish to apply Sitecore marketing attributes to.
    
-   The FXM has a dedicated API that can be extended by developers to meet the specific tracking and personalization requirements of the business.
    

##### FXM features

-   Single JavaScript tag that can be deployed to the external site o The JavaScript tag acts as a beacon that is registered by the Beacon handler on the Sitecore platform, which handles all requests from the external site.
    
    -   The script can monitor all page events on the external site
        
    -   Script can be deployed to all pages of an external site without degrading peformance
        
-   Tracking works with first-party domain cookies (third-party cookies will be supported in a future release)
    
-   The dedicated FXM Web API captures external visitor information and writes information back into the xDB o Can scale to millions of external site pages
    
    -   The Web API can be extended by developers to meet the specific requirements for their custom solution
        
-   The JavaScript API integrates with the standard Sitecore marketing functions.
    
-   FXM in Sitecore 8.0 uses the Sitecore Rules Engine as its primary mechanism to define which external websites should be tracked.
    
    -   An external site domain is matched through a ‘domain matcher’ rule, so that only visits to that specific website are tracked in the xDB.
        

For example, to track an external website with the domain “[`www.external`](http://www.external-demo.com/)[`-`](http://www.external-demo.com/)[`demo.com`](http://www.external-demo.com/)[”](http://www.external-demo.com/), a Domain matcher rule would be setup in FXM to match only visits to [“](http://www.external-demo.com/)[`www.external`](http://www.external-demo.com/)[`-`](http://www.external-demo.com/)[`demo.com`](http://www.external-demo.com/)[”](http://www.external-demo.com/).

-   All subsequent FXM features are derived from the domain matcher rule
    

-   FXM supports (through the Sitecore rules engine) matching against any of the following conditions: o Page or Pages (through standard regular expressions) o External actions, such as:
    
    -   Capture Click – when a user clicks on any element during their visit to an external site
        
    -   Fragments – when a user interacts with a DOM fragment
        
    -   Submit Matcher – when a user submits a form on an external site, such as a sign-up form.
        
    -   Placeholder Replacer – replacing content on an external site through a standard Sitecore placeholder
        
-   FXM supports multiple languages through specific rules created against the externally tracked domain.
    
-   All FXM features are available in the Content Editor o The Marketing Control Panel features a new node called Federated Experience Manager. o Rules can be defined via the standard item hierarchy.
    

##### Managing FXM

-   FXM is managed using the dedicated FXM application which is available from the Launchpad.
    
-   It is easy to set up an external website to be tracked. o The application automatically creates a domain matcher rule based on your external site domain.
    
    -   The application provides you with the JavaScript code that the webmaster of the external website should deploy to enable FXM to track the site.
        
    -   FXM is designed to track all pages by default.
        
    -   Automatically integrates into Sitecore Experience Analytics.
        
-   Administrator features
    
    -   View a list of all external sites that are tracked. o Edit external domain information.
        
    -   Open the external domain in the Experience Editor for FXM.
        
-   The list of external websites displays the status of each domain, including: o Status – Published or Not Published
    
    -   Date Modified
        
    -   Overall number of visits to the external site
        
-   Individual sites can be managed from within the FXM application. o View and manage any FXM functions associated with the external website.
    
-   The dedicated FXM Experience Editor ribbon lets a developer: o Browse the external site (through a dedicated web browser proxy). o Add a new page filter to track specific pages (selecting by browsing the site).
    
    -   Add capture click actions to trigger an action when the user clicks any HTML element on the external site. o Add Sitecore placeholders to replace elements on the external site.
        
-   The dedicated FXM Experience Editor ribbon lets a marketer:
    
    -   View any external webpage elements that have been assigned FXM functions.
        
    -   Assign any Sitecore marketing attributes to these functions.
        
-   All FXM functions are created as items in Sitecore. o For capture click actions, marketing attributes can be assigned to the definition items as per standard Sitecore marketing functionality.
    
    -   For placeholders, these can be personalized using standard Sitecore personalization controls.
        

#### List Manager

The Sitecore List Manager provides a simple and effective way for marketers to build lists in order to curate audiences for use in email communications via Email Experience Manager (EXM). You can:

-   Import new contacts into the Experience Database (xDB).
    
-   Create new lists from imported contacts, or from segmentation queries based on selectable data sources.
    
-   Build lists using multiple existing lists to include and exclude specific contacts according to the marketer’s desired audience.
    
-   Utilize lists in EXM for complete email campaign management.
    

##### List Manager overview

-   List Manager is available as an integrated part of the platform to allow marketers direct access to lists and list building workflows.
    
-   List Manager is also integrated with EXM to provide a seamless experience when you are composing email messages and organizing dispatches.
    
-   List Manager is integrated with the Sitecore Experience Profile to provide an individual view of contacts in a list.
    
-   List Manager accommodates two different types of lists to support key audience segmentation scenarios: Contact Lists and Segmented Lists.
    
-   It provides tools to manipulate and combine contact groups in line with marketers’ needs.
    
-   It enables you to use different data sources for different list types.
    
-   It extends the Sitecore rules engine for the segmentation of contacts.
    
-   Lists are based on the xDB (instead of the security providers) to increase scalability and performance.
    
-   segmentation is performed using the existing rules engine interface.
    
-   Lists are seamlessly integrated in the EXM workflow
    

##### List Manager features

-   > The extensible API handles list management (resolving lists, contacts, and so on) through standard Sitecore pipelines.
    
-   > The API enables developers to write easily understandable queries.
    
-   > The List Manager application is available from the Launchpad, as well as from EXM.
    
-   > The application provides a complete overview of marketing lists.
    
-   > Users create and manage lists using the List Manager and EXM without needing access to the Marketing Control Panel or the Content Editor.
    
-   > New contacts are easy to import using: o Flexible mapping to Experience Database contact fields (requires customization) o Automatic indexing upon import
    
    -   Ability to import contacts with or without creating lists
        
    -   Create contact identifiers according to users own de-duplication policy  List Manager supports (through the Sitecore rules engine) segmentation of: o Contact facets (names, addresses, location, age, gender)
        
    -   Online behavior (such as campaign interactions, visitor value, engagement states)
        
-   > Lists can be organized into folders for ease of access and organization.
    
-   > Ownership of lists can be assigned to specific users.
    
-   > Two different types of lists are supported:
    
    -   Contact Lists
        
        -   Represents a static list of contacts.
            
        -   Stores list membership directly on the contact level.
            
        -   Can be created from CSV imports, other contact lists, or converted segmented lists.
            
        -   Can be used as a source for segmented lists.
            
    -   Segmented Lists
        
        -   Represents a dynamic list of contacts that meet the segmentation criteria at the time of query.
            
        -   Stores the list data source and segmentation criteria for the list.
            
        -   Can use the entire xDB as the list data source.
            
        -   Can be converted into a contact list, creating a static snapshot of all contacts in the segmented list at the time of conversion.
            
-   > Flexible list sources enable users to easily add and subtract contacts from lists. For example: o Empty lists for adding future contacts to (for example, from a Web Forms for Marketers sign-up form) o Multiple existing contact lists o Converted segmented lists o Entire xDB (segmented lists only)
    
-   > List Manager provides a preview of contacts at list level
    
-   > You can directly access individual Experience Profiles to get a complete view of your contacts
    
-   > You can export contacts in a list
    
-   > List Manager provides a number of different list views to facilitate easy access and use: o Dashboard view – displays recently created lists and user-created lists (“My Lists”) o “My Lists” page – filters user-created lists and displays them in a folder structure o “Contact Lists” page – filters contact lists and displays them in a folder structure o “Segmented Lists” page – filters segmented lists and displays them in a folder structure o “Recently Created Lists” page – displays recently created lists  List-locking features: o Lists are locked when being built or indexed to ensure that incomplete lists are not used or edited:  List cannot be edited
    
    -   List cannot be used
        
    -   Contacts cannot be viewed o Lists are set as In Use when being used (for example, by EXM), or when a list is being converted or exported, ensuring that list-dependent processes are not disrupted:
        
    -   List cannot be edited
        
    -   List can be used
        
    -   Contacts can be viewed
        
-   > Contacts with duplicate emails are removed from lists while still keeping the actual contacts intact.
    

#### Experience Analytics

Sitecore Experience Platform 8 introduces Experience Analytics (formerly part of DMS and referred to as Engagement Analytics) as an integrated part of the platform.

##### Experience Analytics highlights

-   > 50+ out-of-the-box reports that provide you with fast insights using visual dashboards and reports.
    
-   > A wide selection of dimensions, segmentations, and metrics makes it possible to analyze websites from several different perspectives.
    
-   > Create custom reports for Experience Analytics using Sitecore Rocks.
    

##### Out-of-the-box reporting

-   Out-of-the-box reports on audience, acquisitions, behavior, and conversions, including detailed reports on:
    
    -   Pattern matches
    -   Campaigns and channels
    -   Internal and external searches
    
    Selection of dimensions that can be used for customized reporting, such as: o Exit/entry pages
    
    -   GeoIP data on cities, regions, and countries
    -   Goals and conversions
    
    Segmentation using rules including:
    
    -   Where the number of assets downloads was
    -   Where the number of engagement value points was
    -   Where the Channel type was
    
    Advanced analysis using various metrics, such as:
    
    -   Bounce rate
    -   Page views
    -   Average time on site
-   > Providing data visualizations through:
    
    -   Line charts
    -   Area charts
    -   Bar charts
-   > Experience Analytics is fully integrated with FXM, and lets you analyze your external sites using the same reporting interface.
    
-   > Lists with a drill-down option enable you to move from a general view to a detailed view on specific items.
    
-   > A date picker that lets you select period and resolution, as well as a site filter to filter by the sites that are configured in Sitecore.
    

##### Extending and customizing reports

-   > You can customize reports for Experience Analytics using Sitecore Rocks, using all the included reporting tools or add your own custom rules where needed.
    
-   > An extended reporting API enables developers to extract reporting data.
    

#### Experience optimization

Sitecore Experience Platform 8 introduces experience optimization in the form of content testing and optimization reporting as an integrated part of the platform.

##### Experience optimization highlights

-   > Automatically test content changes, personalization rules, and test variables on components through the publishing workflow.
    
-   > You can test significant layout changes using a step-by-step flow to set up tests that compare two or more pages.
    
-   > Improved reporting: o Experiences can be sorted by engagement value or a specific goal. o Each experience included in a test can be displayed in a detailed view.
    
-           You can view gamification and management reporting through Experience Optimization app, providing a quick overview of optimization through leaderboards and performance reports.
    

##### Set up tests

-   > After you make changes to the content of a page item, when you add new personalization rules and when you add test variables on a component, the system can automatically test it when you move the item through the publishing workflow.
    
-   > New workflow actions are provided in the Sample workflow for an easy setup:
    
    -   Approve with test o Approve without test
        
    -   Using the Task page in the Experience Optimization app, you can set up page tests to test pages against new or older versions, or other pages.
        
-   > New test settings o Users that are members of the new Advanced Testing role can adjust traffic allocation, confidence level, test duration, and set a goal as an objective.
    

##### Test reporting

-   > You can view reports for each test from within the Experience Editor.
    
-   > The Test Result report provides an overview of the test effect and confidence, and lets you easily sort the tested experiences based on either engagement value or a specific goal.
    

> For each experience you can get a detailed view of the engagement value collected for the visit after it was exposed to the test, as well as lists with the most triggered goals, most clicked links, and usage metrics for the site, such as bounce rate and duration on page.

-   > You can use the Optimization View report when you want to investigate the performance of each component in a test.
    

The report displays detailed on-page analytics, where you can see how each variable in the test has performed.

-   > The Personalization dialog now gives you a quick overview of the personalization rules on a page. All personalized experiences on the page are listed by the effect that they provide to the engagement value. Each personalization rule has a detailed view where you can see the value that it provides compared to the nonpersonalized experience
    
-   > In a test, the winning experience is selected by either engagement value or a selected goal, using the Pearson Chi Squared statistical method to verify it.
    
-   > Email notifications: When a winner has been found, an email is sent to the creator of the test with a suggested winner of the test.
    
-           When the duration of the test has been reached, an email is sent to the creator of the test to ask if the test should continue or be stopped.
    

-   > You can view lists of active and historical tests. The reports are available from the Experience Editor ribbon and in the Experience Optimization application.
    

##### Continuous testing

-   > To help you find recommended pages to test, you can view a list of suggested tests in the Experience Optimization application based on a calculation of potential and impact.
    
-   > When a test has ended, the system generates a test summary with further suggested tests. The suggested tests are based on machine learning, which can predict if you should add personalization rules for specific segments, for example, “visitors during the weekend.”
    

##### Reporting on optimization efforts

-   The Optimization Experience application provides an overview of the optimization activities on a website for both testers and management.
    
-   Four new KPIs provide a greater overview:
    

-   Score – an overall view on the testing
    
-   Activity – are more tests being started?
    
-   Guessing – what is the user’s accuracy in predicting the test outcome?
    
-   Effect – is the effect of each test increasing?
    

-   Users that are members of the new Management Reporting role can view leaderboards of the best-performing testers and an overall view of optimization based on the KPIs.
    
-   Users that are not members of the Management Reporting role can view how they have improved in terms of the same KPIs.
    
-   Performance reports and leaderboards can be viewed:
    

-   Monthly
    
-   Quarterly
    
-   Half-yearly
    
-   Yearly
    

#### Experience profile

The Experience Profile is the single customer view in Sitecore, where the marketer, analyst or sales person can view all the data stored on a given contact.

-   The Journey component has been added to the Experience Profile, which shows the contacts’ behavior on a timeline, making it simple to understand the intensity and recency of the behavior of the contact.
    
-   The structure has been changed so that all the data related to the behavior of the contact are found under “Activity”.
    
-   The social media tab has been added to the Experience Profile containing all the contact’s information from Facebook, Twitter, Google+, and LinkedIn if the contact has given their consent to sharing this information.
    
-   Channel and outcome activity have been added to the Experience Profile.
    

#### Path Analyzer

Sitecore Experience Platform 8 introduces the Path Analyzer, which provides a path analysis on every item. The path analysis lets you understand how people arrive at an item, where they went, and the effectiveness of the paths that they took.

-   Automated, dynamic path maps are based on data in the experience database.
    
-   Individuals who follow a particular path can be identified.
    
-   You can view the paths that make up an experience funnel based on visitor behavior.
    
-   The Path Analyzer introduces these different map types:
    

-   Path oriented
    
-   Goal oriented
    
-   Assets
    
-   Campaigns
    

-   You can filter the paths by date, conversions, audience segments, campaigns, and so on.
    
-   You can analyze the efficiency of the different paths that visitors take on your website.
    
-   You can see optimization recommendations.
    
-   The extensible API lets developers perform a sequence analysis of any type of data in the xDB.
    

#### Social Connected

The Social Connected functionality (which was previously available as a standalone module) is now an integrated part of the Sitecore Experience Platform.

-   You can display and categorize Twitter, Google+, LinkedIn, and Facebook data collected from the social connector on the social tab of the Experience Profile.
    
-   You can display latest user posts from Twitter and Google+ in the Experience Profile.
    
-   Interactions from Facebook, LinkedIn, YouTube, Twitter, Google+ are tracked as Online channel types, Social Media Community channels, Facebook posts, LinkedIn posts, YouTube posts, Twitter posts or G+ posts.
    
-   The website/bin/social folder contains a Ninject.dll file for setting up an IoC container specifically for the Social Connected feature.
    

## Breaking changes

### Platform

-   Sitecore.Kernel and Sitecore.Client assemblies contain a number of breaking changes related to moving Experience Editor logic to a separate assembly.
    
-   Sitecore.Kernel assembly contains a number of breaking changes related to Workflow functionality. The most important changes are done in the IWorkflow interface and HistoryStore abstract class.
    
-   There are a lot of changes in Sitecore assemblies related to multivariate testing of the API. The API has been reworked as part of the automatic content testing feature.
    
-   The Sitecore.ContentSearch assemblies contain a number of breaking changes related to the changes required by the new experience data search index.
    

### CMS API

-   There are a large number of changes in Sitecore.Shell.Applications.WebEdit namespace. Part of the API has been moved to the Sitecore.ExperienceEditor.dll assembly. To continue using this API, you must reference the new assembly.
    

**SPEAK**

-   The NumericFormatting code has been removed from the ListControl.
    

### ECM/EXM

The Campaign category in Messages have no effect on Analytics reporting, due to the new changes in how Analytics works with campaigns and campaigns categories. Repositories and data sources on which old SPEAK controls and components were based, have been renamed, reworked, and moved to a new assembly: Sitecore.EmailCampaign.Statistics.

## Deprecated and removed functionality

### Platform

-   The Executive Insight Dashboard has been removed
    
-   The following options have been removed from the Start menu in the Sitecore Desktop:
    

-   Carousel
    
-   File Explorer
    

-   The SaveEngagementPlan processor has been deprecated and removed from the deployDefinition pipeline
    

### ECM/EXM

-   The following assemblies have been removed:
    

-   Sitecore.EmailCampaign.Data.dll
    
-   Sitecore.EmailCampaign.Domain.dll
    
-   Sitecore.EmailCampaign.Presentation.UI.dll
    
-   Sitecore.EmailCampaign.Presentation.dll
    
-   EmailCampaign.App.dll
    

-   Support has been discontinued for Target audience lists and the entire Target audience API because this functionality has been replaced by the List Management component (Contact and Segmented lists).
    
-   Support has been discontinued for the old SPEAK framework which the previous version of ECM was based on.
    

## Resolved issues

### Platform

-   When you installed a Sitecore package, the Sitecore log would sometimes contain errors with the following message: "The specified path, file name, or both are too long." This has been fixed. (409177, 409326)
    
-   The Control Properties dialog showed fields from the Rendering Settings Data template in the default language and did not respect the context. This has been fixed. (421238)
    
-   CSRF protection was not applied to the pages if the configuration for Sitecore.AntiSCRF module contained several rules. This has been fixed. (422769)
    
-   When using .NET Framework 4.5 and changing Sitecore configuration to use "Forms" authentication mode instead of "None", Sitecore was not be able to properly log in users to the Sitecore Client. When a user tried to log in with valid credentials, the login page was refreshed and the user was not logged in. This issue has been fixed in previous Sitecore 6.6 updates but reintroduced in Sitecore 7.5 Initial release. (422172, 374264)
    

**SPEAK UI Framework**

-   The QueryDataSource did not support formatting. This has been fixed.
    

### SPEAK Business Component Library

-   ColumnPanel: the pull-right CSS class was not working properly. This has been fixed.
    
-   DropDownButton: the drop area of the button disappeared when the user attempted to manipulate an embedded control. This has been fixed.
    
-   TextBox: the component did not generate the type="text" HTML attribute. This has been fixed.
    
-   Charting components: the components did not always raise the segmetentedClick event properly. This has been fixed.
    

### Social Connected

-   The Social Share buttons did not trigger non-default goals. This has been fixed.
    
-   Exceptions errors were not properly handled and logged for social personalization rules, which were based on the user’s gender and interests. This has been fixed.
    
-   The LinkedIn Share button did not trigger the associated goal. This has been fixed.
    

### Engagement Analytics

-   A rendering based on the condition of a triggering goal in the current visit was not rendered if the goal had been triggered. This has been fixed. (423908
    

### Media Library

-   Fields for storing GeoIP data (Latitude, Longitude, LocationDescription, CountryCode, ZipCode) were not shared for unversioned media templates. The only LocationDescription field that should be versioned is to support localized descriptions. This has been fixed. (410077)
    
-   In the previous Sitecore versions, the Latitude and Longitude fields were not populated when you uploaded JPEG images that contained GeoIP data. This has been fixed. (410658)
    

### Multibrowser fixes

-   [IE]Starting from Sitecore 7.1, the Internet Explorer Compatibility View mode is no longer supported. However, to support the common case of Internet Explorer being configured to use compatibility mode for intranet sites, a special meta tag has been added to all Sitecore pages that force Internet Explorer not to use compatibility mode. (417690)
    
-   [Chrome][Firefox]When information provided on the Change Password page was invalid, the validation message sometimes was displayed outside the form. This has been fixed. (422143)
    
-   [IE11]Most of the buttons for working with rich text edit fields were hidden in editing mode in the Experience Editor. This has been fixed. ( 422872)
    
-   [IE]Sitecore WebDAV drag-and-drop window could not be opened from the Sitecore media library and you would see the ArgumentOutOfRangeException exception in the Sitecore log file. This has been fixed. (421681)
    

### Performance

-   The performance of the indexing operation when parallel indexing is enabled has been improved. (416550)
    
-   Page event registration API from PageContent has been updated to work entity IDs instead of names. The new API is backward compatible. (424366)
    

**Potential security vulnerabilities**

-   A potential JavaScript injection and CSRF vulnerability has been fixed in the TreeListEx control. (401208)
    

### Publishing

-   When performing incremental publishing operation, items that should not be updated in target database were not removed from PublishQueue. This has been fixed. (418132)
    

### Security API

-   A user might be accidentally logged out from the Sitecore backend when the system was under heavy load. This happened due to raising conditions during updating user authentication information. This has been fixed. (416668)
    

### Sitecore.ContentSearch API

-   The ArgumentException was thrown on processing "indexing:end:remote" and "indexing:committed:remote" remote events for the index not registered on the current instance. This has been fixed so that now events for nonexistent indexes are ignored. (424174, 423875)
    
-   When you used a "sort:" expression in the search field and your search was based on the "integer" or "number" field type, the order of the data in search results would sometimes not be correct. This has been fixed. (421958)
    
-   When you used StartsWith in Linq expression for searching with Solr provider and search string started from slash (‘/’) the search would sometimes return a wrong result. This was related to the fact the Solr provider treats strings with leading slash as a regular expression. This has been fixed by escaping leading slash. (410794)
    

### Security applications

-   In the User Manager, when you were creating a new user and clicked the Cancel button, the wizard was not closed. This has been fixed. (414138)
    

### Using the Sitecore clients with out-of-process session state modes

-   A number of dialogs could not be opened on Content Management servers with an out-of-process session-state configured. This happened because the pipeline arguments were not serialized correctly. This has been fixed. (423920, 424008)
    

### Workbox

-   When the LinkProvider was configured not to add .aspx extensions to generated URLs, design of Workflow application opened from Sitecore Desktop was broken. This has been fixed. (424647)