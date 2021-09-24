---
solution: ['content-management']
product: ['content-hub']
prettyName: 'Content Hub'
description: 'Centralize content strategy and operations for all delivery channels'
---

## Introduction

Sitecore Content Hub&trade; offers multiple modules. Here is a brief overview of these modules and their features.

|Module|Description|
|---------|---------|
| Sitecore Experience Edge&trade; for Content Hub | Manage and publish your content for multiple functions and audiences using numerous devices.
| | Have other applications consume and use your content according to their particular needs.|
| Sitecore DAM&trade; | Centralize and categorize photos, layouts, artwork, video, 3D, source files, and more.
| | Manage metadata, digital rights management (DRM), security, and global distribution.
| Sitecore PCM&trade; | Manage access, real-time update and publication of your product-related content across channels.
| Sitecore CMP&trade; | Plan, manage and collaborate effectively on your content strategies.
| Sitecore MRM&trade; | Plan and schedule complex, multi-layered marketing activities.
| Sitecore Web-to-Print&trade; | Create and control central customizable templates.

## Get Started

- [Getting Started](https://docs.stylelabs.com/contenthub/4.0.x/content/user-documentation/get-started/get-started.html)
- [Navigate Content Hub](https://docs.stylelabs.com/content/4.0.x/user-documentation/get-started/content-hub/log-in.html)
- [The different modules](https://docs.stylelabs.com/content/4.0.x/user-documentation/get-started/content-hub/modules.html)
- [Terminology](https://docs.stylelabs.com/content/4.0.x/user-documentation/get-started/content-hub/glossary.html)

## User Documentation

- [DAM](https://docs.stylelabs.com/content/4.0.x/user-documentation/content-user-manual/intro.html)
- [PCM](https://docs.stylelabs.com/content/4.0.x/user-documentation/pcm/introduction.html)
- [CMP](https://docs.stylelabs.com/content/4.0.x/user-documentation/cmp/cmp-intro.html)
- [MRM](https://docs.stylelabs.com/content/4.0.x/user-documentation/marketing-resource-management/introduction.html)
- [Web-to-print](https://docs.stylelabs.com/content/4.0.x/user-documentation/web-to-print/chili-publisher.html)

## Developer Documentation

- [Content Hub Security guide](https://docs.stylelabs.com/contenthub/4.0.x/content/user-documentation/security/security-guide-intro.html)
- [Cloud development lifecycle](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/development-lifecycle/sdlc-introduction.html)
- [Cloud development Security](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/security/intro.html)
- [Cloud development Best Practices](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/best-practices/best-practices.html)
- [Architecture overview](https://docs.stylelabs.com/content/4.0.x/integrations/architecture/index.html)
- [Use integrations to extend functionality](https://docs.stylelabs.com/content/4.0.x/integrations/scripting-api/scripting-api-overview.html)
- [API Reference / SDKs](https://docs.stylelabs.com/content/4.0.x/api-reference/index.html)
- 
## SDKs/ Tools for integration

The following tools allow users to integrate Sitecore Content Hub with external systems.

|Tool|Description|
|---------|---------|
|[Triggers](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/integration-components/triggers/overview.html)|Triggers are a push mechanism in Sitecore Content Hub that executes certain actions if certain conditions are met after specific events occur. Triggers are defined by a set of triggering events (Objectives), a set of conditions, and a set of actions. <br/> <br/> Triggers can be used as a push mechanism towards external systems by making API calls (e.g. invoke an Azure Function) or by publishing messages to an Azure Service Bus queue or an Azure Event Hub. |
|[Actions](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/integration-components/actions/overview.html)|Actions are extensible objects that can be included in other page components (e.g. selection component) and that can execute a specific task like running a predefined script, making an external API call and publishing messages to an Azure Service Bus queue or an Azure Event Hub.|
|[Scripts](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/scripting-api/scripting-api-overview.html)|Sitecore Content Hub allows users to integrate custom scripts in their business logic. Scripts can be manually triggered by end-users or automatically triggered by the application (e.g. using Triggers) depending on the script type and the use case. Sitecore Content Hub offers different script types, with each type having different context properties.|
|[CLI](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/integration-tools/cli/overview.html)|A command-line interface (CLI) processes commands to a computer program in the form of lines of text. The program which handles the interface is called a command-line interpreter or command-line processor. The CLI is used for communicating with Sitecore Content Hub&trade; instances through the REST API using the C# Web SDK.|
|[Import/Export](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/integration-tools/import-export-package.html)|Sitecore Content Hub offers an import/export package feature that allows users to migrate their structural changes between different instances of Sitecore Content Hub.|
|[External components](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/integration-components/external-page-component/overview.html) | External page components are extensible components that can be integrated into portal pages. They allow the integration of external libraries within Sitecore Content Hub pages. External components contain a code section that gets executed when the component is initialized, as well as a template section that contains an HTML markup that gets injected in the DOM when the component is initialized.|
|[C# Web SDK](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/web-sdk/getting-started.html)|The C# Web SDK is an external tool that makes it easier for C# developers to implement their own logic in manipulating the object resources.|
|[JavaScript SDK](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/javascript-sdk/index.html)|The JavaScript SDK is an external tool that makes it easier for JavaScript developers to implement their own logic in manipulating the object resources.|
|[REST API](https://docs.stylelabs.com/contenthub/4.0.x/content/integrations/rest-api/about.html)|The REST API of Sitecore Content Hub is a Hypermedia API built on top of HTTP where all objects are modeled as resources. Each resource represents the state of the object at the time of the request. Standard HTTP requests and responses are used to query and manipulate the state of the objects.|

