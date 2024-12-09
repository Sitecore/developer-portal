---
title: 'Sitecore Accelerate for XM Cloud'
description: 'This Cookbook provides a set of recipes to help implementing XM Cloud through setup, configuration and implemenation.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
---

## External Data Integration

Integrating external data is a cornerstone of building dynamic and personalized digital experiences with XM Cloud. This section delves into techniques for seamless interactions between your head application and external systems.

By leveraging these integration strategies, you can deliver tailored content and functionality while providing editors with an intuitive, efficient interface for managing third-party data. A strong focus on external data integration ensures your XM Cloud implementation is both powerful and adaptable to evolving business needs.

### General Guidance on Integrations with XM Cloud as a SaaS CMS

| ❌ Don't    | ✅ Do | 🤔 Rationale |
| - | - | - |
| Create Sitecore items for external content unless you absolutely need to such as being able to edit and enrich it as marketing content | Integrate external data directly with the head application or a custom middlware and [create a UX component to be able to edit it directly](/learn/accelerate/xm-cloud/implementation/external-data-integration/custom-editing-ux-3rd-party-integrations) | The CMS is not an appropriate place to act as a unified data store for all possible data for a digital channel, instead the CMS is likely one of several (or many) back-end systems. If you can avoid it, it is best to not pass data through the CMS as an intermediary and instead integrate with the external source directly in the head application. If you are delivering experinces to multiple channels (e.g. website, logged in portal, mobile app, etc) you may want to consider building or buying a data orchestration layer or middleware as the intermediary which can consume the CMS content and other data sources and deliver it to the head.|
| Execute custom scheduled tasks (e.g. to create/import items into the tree) or long-running PowerShell Extensions scripts on the CM | Leverage an external tool or scheduling agent application (e.g. serverless functions, logic apps, iPaaS, etc.) to interact with Management APIs to create items if you need to (see point above) | Executing tasks directly on the CM like this can create performance issues that may compromise the CM and our SaaS SLAs, but using the Management APIs handles throttling against the CM in the event you absolutely need to create content items in Sitecore via code.|
| Override field types or deploy custom fields, ribbons, buttons, etc for the Content Editor | Create a head application component that can serve this role via the Pages interface. In the future you will be able to make more native customizations using the Sitecore Marketplace. | XM Cloud is hosted as a SaaS CMS with SLAs provided to customers. Making low-level changes to the underlying CMS may introduce bugs or performance issues that may compromise the SLAs. Additonally, Sitecore updates the underlying CMS since it is provided as SaaS, so customizations may break due to updates. |