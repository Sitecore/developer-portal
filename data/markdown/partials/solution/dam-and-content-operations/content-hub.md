---
solution: ['dam-and-content-operations']
product: ['content-hub']
prettyName: 'Content Hub'
description: 'Centralize content strategy and operations for all delivery channels'
---

## Introduction

Sitecore Content Hub&trade; offers multiple modules. Here is a brief overview of these modules and their features.

| Module                                          | Description                                                                                      |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Sitecore Experience Edge&trade; for Content Hub | Manage and publish your content for multiple functions and audiences using numerous devices.     |
|                                                 | Have other applications consume and use your content according to their particular needs.        |
| Sitecore DAM&trade;                             | Centralize and categorize photos, layouts, artwork, video, 3D, source files, and more.           |
|                                                 | Manage metadata, digital rights management (DRM), security, and global distribution.             |
| Sitecore PCM&trade;                             | Manage access, real-time update and publication of your product-related content across channels. |
| Sitecore CMP&trade;                             | Plan, manage and collaborate effectively on your content strategies.                             |
| Sitecore MRM&trade;                             | Plan and schedule complex, multi-layered marketing activities.                                   |
| Sitecore Web-to-Print&trade;                    | Create and control central customizable templates.                                               |

## Getting Started

- [Getting Started](https://doc.sitecore.com/ch/en/users/latest/content-hub/started-get-started.html)
- [Navigate Content Hub](https://doc.sitecore.com/ch/en/users/latest/content-hub/log-in.html)
- [The different modules](https://doc.sitecore.com/ch/en/users/latest/content-hub/modules.html)
- [Sitecore Essentials (FREE eLearning)](https://learning.sitecore.com/pathway/sitecore-essentials) - Introduction to Content Hub

## User Documentation

- [Digital Asset Management (DAM)](https://doc.sitecore.com/ch/en/users/latest/content-hub/digital-assets.html)
- [Product Content Management (PCM)](https://doc.sitecore.com/ch/en/users/latest/content-hub/pcm.html)
- [Content Marketing Platform (CMP)](https://doc.sitecore.com/ch/en/users/latest/content-hub/manage-content.html)
- [Marketing Resource Management (MRM)](https://doc.sitecore.com/ch/en/users/latest/content-hub/manage-projects-and-jobs.html)
- [Content Publisher (a.k.a Web-to-print)](https://doc.sitecore.com/ch/en/users/latest/content-hub/publisher.html)

## Developer Documentation

- [Content Hub Security guide](https://doc.sitecore.com/ch/en/users/latest/content-hub/guide-intro.html)
- [Cloud development lifecycle](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/sdlc-introduction.html)
- [Cloud development Security](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/security-intro.html)
- [Cloud development Best Practices](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/integrations-best-practices-best-practices.html)
- [Architecture overview](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/architecture-index.html)
- [Use integrations to extend functionality](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/api-overview.html)
- [API Reference / SDKs](https://doc.sitecore.com/ch/en/developers/latest/api-reference/index-en.html)
-

## SDKs/ Tools for integration

The following tools allow users to integrate Sitecore Content Hub with external systems.

| Tool                                                                                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Triggers](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/triggers-overview.html)             | Triggers are a push mechanism in Sitecore Content Hub that executes certain actions if certain conditions are met after specific events occur. Triggers are defined by a set of triggering events (Objectives), a set of conditions, and a set of actions. <br/> <br/> Triggers can be used as a push mechanism towards external systems by making API calls (e.g. invoke an Azure Function) or by publishing messages to an Azure Service Bus queue or an Azure Event Hub. |
| [Actions](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/actions-overview.html)               | Actions are extensible objects that can be included in other page components (e.g. selection component) and that can execute a specific task like running a predefined script, making an external API call and publishing messages to an Azure Service Bus queue or an Azure Event Hub.                                                                                                                                                                                     |
| [Scripts](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/api-overview.html)                   | Sitecore Content Hub allows users to integrate custom scripts in their business logic. Scripts can be manually triggered by end-users or automatically triggered by the application (e.g. using Triggers) depending on the script type and the use case. Sitecore Content Hub offers different script types, with each type having different context properties.                                                                                                            |
| [CLI](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/cli-overview.html)                       | A command-line interface (CLI) processes commands to a computer program in the form of lines of text. The program which handles the interface is called a command-line interpreter or command-line processor. The CLI is used for communicating with Sitecore Content Hub&trade; instances through the REST API using the C# Web SDK.                                                                                                                                       |
| [Import/Export](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/import-export-package.html)    | Sitecore Content Hub offers an import/export package feature that allows users to migrate their structural changes between different instances of Sitecore Content Hub.                                                                                                                                                                                                                                                                                                     |
| [External components](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/component-overview.html) | External page components are extensible components that can be integrated into portal pages. They allow the integration of external libraries within Sitecore Content Hub pages. External components contain a code section that gets executed when the component is initialized, as well as a template section that contains an HTML markup that gets injected in the DOM when the component is initialized.                                                               |
| [C# Web SDK](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/web-sdk-index.html)               | The C# Web SDK is an external tool that makes it easier for C# developers to implement their own logic in manipulating the object resources.                                                                                                                                                                                                                                                                                                                                |
| [JavaScript SDK](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/javascript-sdk-index.html)    | The JavaScript SDK is an external tool that makes it easier for JavaScript developers to implement their own logic in manipulating the object resources.                                                                                                                                                                                                                                                                                                                    |
| [REST API](https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/about.html)                         | The REST API of Sitecore Content Hub is a Hypermedia API built on top of HTTP where all objects are modeled as resources. Each resource represents the state of the object at the time of the request. Standard HTTP requests and responses are used to query and manipulate the state of the objects.                                                                                                                                                                      |
