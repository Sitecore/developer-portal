---
solution: ['dam-and-content-operations']
product: ['content-hub']
prettyName: 'Content Hub'
description: 'Centralize content strategy and operations for all delivery channels'
---

## Introduction

Sitecore Content Hub&trade; offers multiple modules. Here is a brief overview of these modules and their features.

<Row columns={2}>

<Article title="Sitecore Experience Edge&trade; for Content Hub" description="Manage and publish your content for multiple functions and audiences using numerous devices." />
<Article title="Sitecore DAM&trade;" description="Centralize and categorize photos, layouts, artwork, video, 3D, source files, and more." />
<Article title="Sitecore PCM&trade;" description="Manage access, real-time update and publication of your product-related content across channels." />
<Article title="Sitecore CMP&trade;" description="Plan, manage and collaborate effectively on your content strategies." />
<Article title="Sitecore MRM&trade;" description="Plan and schedule complex, multi-layered marketing activities." />                        
<Article title="Sitecore Web-to-Print&trade;" description="Create and control central customizable templates." />
</Row>
## Getting Started

<Row columns={2}>
<Link title="Getting Started" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/started-get-started.html" />
<Link title="Navigate Content Hub" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/log-in.html" />
<Link title="The different modules" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/modules.html" />
<Link title="Sitecore Essentials (FREE eLearning)" link="https://learning.sitecore.com/pathway/sitecore-essentials" />
</Row>

## User Documentation

<Row columns={3}>
<Link title="Digital Asset Management (DAM)" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/digital-assets.html" />
<Link title="Product Content Management (PCM)" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/pcm.html" />
<Link title="Content Marketing Platform (CMP)" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/manage-content.html" />
<Link title="Marketing Resource Management (MRM)" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/manage-projects-and-jobs.html" />
<Link title="Content Publisher (a.k.a Web-to-print)" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/publisher.html" />
</Row>
## Developer Documentation

<Row columns={2}>
<Link title="Content Hub Security guide" link="https://doc.sitecore.com/ch/en/users/latest/content-hub/guide-intro.html" />
<Link title="Cloud development lifecycle" link="https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/sdlc-introduction.html" />
<Link title="Cloud development Security" link="https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/security-intro.html" />
<Link title="Cloud development Best Practices" link="https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/integrations-best-practices-best-practices.html" />
<Link title="Architecture overview" link="https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/architecture-index.html" />
<Link title="Use integrations to extend functionality" link="https://doc.sitecore.com/ch/en/developers/latest/cloud-dev/api-overview.html" />
<Link title="API Reference / SDKs" link="https://doc.sitecore.com/ch/en/developers/latest/api-reference/index-en.html" />
</Row>

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
