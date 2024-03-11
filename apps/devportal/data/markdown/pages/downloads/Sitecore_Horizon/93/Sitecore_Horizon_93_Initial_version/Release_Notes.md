---
title: "Release Notes"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_Horizon/93/Sitecore_Horizon_93_Initial_version/Release_Notes
---

**December 2019 – released Sitecore Horizon 9.3.0.**

This is the initial release of Sitecore Horizon. This version is compatible with Sitecore Experience Platform 9.3.0.

## Highlights

Sitecore Horizon 9.3.0 has the following features:

**In the Horizon page editing environment, you can:**

-   Create a page based on page templates.
    
    This feature uses the Sitecore insert options to filter the templates that are relevant for the context item in the content tree.
    
-   Edit text fields, including single line text fields, multi-line text field and rich text fields.
    
    The rich text editor is updated to Quill.
    
-   Use the new image selection functionality to select images for image fields from the Sitecore Media library or to directly enter the field value.
    
    The functionality respects security permissions and the source settings of the images.
    
-   Autosave all the changes that you make to a page.
-   Undo and redo changes.
-   Move pages through the Sitecore workflows.
    
    All the associated content items are moved through the workflow together with the page item.
    
-   Publish pages.
    
    Publishing works at page level. All the associated content items are published with the page. Subitems are not published. The items are published to all the target databases.
    
-   Use different device types to edit the page as it is rendered on a mobile device.
    
    Desktop, tablets, and mobile phones are supported.
    
-   Delete pages.
-   Rename pages.
    
    Renaming a page changes the page display name, not the item name.
    
-   Navigate the site using the links on the page.
    
    If there is a link inside one of the Sitecore fields, a single click selects the field for editing and Ctrl+click opens the link target in the Horizon editing interface.
    
-   Use drag and drop to build pages.

**In the Horizon Simulator, you can:**

-   Preview the page as it is rendered on different types of device – desktop, tablet, and mobile phone.
-   Preview the page as it appears on different dates.

The timeline highlights the dates when the page was changed, making it easy to find the relevant updates.

**Horizon page-level insights give you an:**

-   Overview of page performance:
    -   Visits and value per visit for the last week
    -   Page conversion rate
    -   Time on page
    -   Bounce rates
-   Intelligent insights that detect atypical changes in bounce rate and the amount of time visitors spend on each page.

### Supported deployment options

Horizon 9.3.0 supports Sitecore Experience Platform 9.3.0

Horizon can be installed on the following topologies:

**On-premise deployment topologies:**

-   XM scaled
-   XP single instance
-   XP scaled

**Microsoft Azure PaaS deployment topologies:**

-   XM single
-   XM scaled
-   XP single
-   XP scaled

## Architectural notes and requirements

-   Horizon introduces a new site/application – the Authoring host.
    
    The Authoring host is a stand-alone web application and it is the main entry point for all authoring applications.
    
-   Horizon deploys an integration module to every CM instance that allows you to perform all the appropriate operations.
-   The Horizon client application is built with Angular 7.2 and utilizes Node.js for server-side rendering.
-   The client application uses a GraphQL-based backend API to communicate with the back-end.
-   In the Horizon Editor and the Horizon Simulator, the page rendering uses the modified edit and preview modes for compatibility reasons.
-   Sitecore Content Management instance must support HTTPS to communicate with the Authoring host.
    
    You must enable HTTPS on CM servers to use Horizon.
    
-   User authentication is handled by the Sitecore Identity service.

To use Horizon, you must be set up the Sitecore Identity service.

## Limitations:

**Browser limitations**

Horizon does not support the following browsers:

-   Internet Explorer
-   Safari on MacOs

**Sitecore technology support**

The Horizon editor is not currently compatible with all the Sitecore technologies and products.

-   **Sitecore Experience Accelerator**
    
    Horizon has limited support for SXA. In Horizon, you can open Web pages designed with SXA and edit text fields. You can also add some renderings to a page, but you must create the associated content items in the Content Editor. You cannot add composite renderings like carousels and tabs to the page. You cannot edit rendering properties in Horizon.
    
-   **JavaScript Services**
    
    Horizon has limited support for JSS sites. Although JSS sites can be opened in Horizon, the routing between pages can be broken. In this case, you cannot edit the fields on the pages.
    
-   **Sitecore Publishing Service.** Not currently supported by Horizon.