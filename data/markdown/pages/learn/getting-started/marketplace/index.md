---
product: ['xm-marketplace']
title: 'Unlock Sitecore’s Potential: Introducing Sitecore Marketplace Custom Apps'
description: 'Discover how Sitecore Marketplace Custom Apps empower developers, architects, and marketers to extend Sitecore with modular, purpose-built solutions. This article introduces the concept of Custom Apps, explains their role in a composable architecture, and highlights how they unlock new capabilities across Sitecore products—without touching the core.'
promoAfter: ['learning-essentials']
openGraphImage: 'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/b20cc628bdaf4c3080bd586c98d4ee30?v=947ae0af'
---

# Unlock Sitecore’s Potential: Introducing Sitecore Marketplace Custom Apps
The Sitecore Marketplace has officially opened its doors to Custom Apps giving developers and architects the power to build, deploy, and share solutions that extend Sitecore’s capabilities with speed and precision. Whether you're streamlining workflows, integrating third-party services, or crafting agentic experiences, Marketplace Custom Apps are the way to create UI extensions.

## What is the Sitecore Marketplace?
The Sitecore Marketplace is your trusted hub for managing and discovering curated, ready-to-use extensions that enhance your Sitecore digital experience platform. Seamlessly integrate with preferred third-party services, extend platform capabilities, and maximize your investment. Build apps using provided SDKs to create both standard and custom solutions tailored to your business needs.

As a **developer**, either on the customer or partner side, you build Marketplace applications and authorize Sitecore organizations to install them.

As a Cloud Portal **organization admin** or owner, you manage (for example, install) the Marketplace apps that are available in your organization, so all team members can use them.  

As the Sitecore **product user**, such as a marketer or content author, you can use Marketplace apps to enhance your daily work with new capabilities tailored to your needs.

## What are Marketplace Custom Apps?
We divide Marketplace apps into **Custom Apps** (available now) and **Public Apps** (coming soon):

| Feature | Custom Apps |	Public Apps |
|---------------|--------------|--------------|
|Visibility	    |Private to a specific customer (Cloud Portal Organization).| Available to all Sitecore customers |
|Purpose	      |Tailored solution for unique business needs                |	Reusable tool for common use cases |
|Review Process |	Quality and Security is to be ensured with the implementer of the Marketplace App. Sitecore does not review. |	Sitecore will review public apps.|
|Hosting	     |Self-managed                                                |	Self-managed
|Availability	  | General Availability	                                    | Coming Soon |

Marketplace Custom Apps are modular, plug-and-play solutions built using Sitecore’s Marketplace SDKs and APIs. They’re designed to integrate into Sitecore environments using the Blok Design System enriching dashboards, pages, and workflows with tailored functionality.
From shoppable images powered by AI to dashboard widgets that surface Google Analytics data, these apps unlock new possibilities for personalization, automation, and extensibility

## Using the Apps
Marketplace Apps extend the out of the box functionality in several places called extension points.  Example of appearance in XM Cloud Page Builder: 

![Sample of the Marketplace extension point in Sitecore's XM Cloud Page Builder](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/3f9341ae80464e6ab36ae6ecdacaff43?v=39e046d1)

## The different Extension Points
Currently there are 5 extension points available. 1 in the Cloud Portal and 4 in XM Cloud. These extension points empower developers to create apps that feel native to Sitecore, while offering flexibility in how and where users engage with them.

More extension points across other Sitecore products are planned.

Let us know about you feedback: https://forms.office.com/e/cEndu1JLQc 

**ToDo:** Link Submit Feedback Form here

### 1. Standalone - Cloud Portal Homepage
Your app can be launched directly from the Cloud Portal homepage, opening in a new tab. This can be used for general information like health checks, environment overarching information or activities like information transfers.

![Annimation showing the Standalone extension point of Sitecore Marketplace](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/fc318ee499064483a0d6276f20f7e412?v=e0d09f38)

### 2. Full Screen – XMC – Portfolio (Sites)
Triggered from the top bar navigation in XM Cloud Portfolio (Sites), this extension point is ideal for apps that deal with that particular environment context. These integrations might cover cross-site analytics and data analysis, or centralized redirect and workflow management spanning multiple sites.

![Annimation showing the Full Screen extension point of Sitecore Marketplace](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/8f1a0691b54649eab4c3be404c9994a6?v=c7c37a48)

### 3. Pages Context Panel – XMC Page Builder
Apps appear in a left-side panel within the Page Builder, perfect for page-contextual tools like translation, page related analytics or SEO helpers.

These apps can be expanded to get a better overview. 
![Annimation showing the Page context panel extension point of Sitecore Marketplace](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/c89b87e998a1459da0e021c276fb55e1?v=aa8ce64f)

### 4. Custom Field – XMC Page Builder
In XM Cloud Page Builder, enhance content templates (content models) with custom field types  e.g. icon pickers, data sources, or input options. Those can appear with the page template on the left panel or within a component context on the right side. This is ideal for personalization and content enrichment.

![Annimation showing the custom field extension point of Sitecore Marketplace](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/44e335e62cae4b62b23b6671e2045f39?v=88c98fee)

As custom fields belong to the data templates (content modeling) they can also appear in context of a component on the right side.

![Custom field extension on right hand panel of Sitecore's XM Cloud Page Builder](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/901a6af71e7a4ab28250f64fca641a52?v=76b63e17)

![Opened Marketplace App from custom fields extension point](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/b20cc628bdaf4c3080bd586c98d4ee30?v=947ae0af)

Adding a custom field requires also adding a field on the type Marketplace Types -> Plugin. Readmore: https://doc.sitecore.com/mp/en/developers/marketplace/enable-a-custom-field-in-the-xm-cloud-page-builder.html  

### 5. Dashboard Widgets – XMC Dashboard
Add widgets to the dashboard in XM Cloud, such as Google Analytics or SEO data integrations, turning it into a central hub for insights. This extension point is ideal for displaying site-wide performance metrics from a third-party analytics provider. For example, a chart for visualizing bounce rates, channels, a list of popular pages, and more.

![Annimation showing the Dashboard Widget extension point of Sitecore Marketplace](https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/051af5b4a0b248c9b8c734d4c06e1868?v=9d76cf80)

## Marketplace SDK

### Client package
When building a Marketplace app, one of the first things you’ll install is the Marketplace SDK Client Package. This isn’t just a utility—it’s the backbone of how your app securely communicates with Sitecore.

#### What it does

The Client Package enables secure, bidirectional communication between your Marketplace app (the client) and Sitecore (the host). Your app runs inside a sandboxed iframe, and thanks to the browser’s postMessage API, it can safely exchange data with Sitecore—without compromising security or performance.

This package empowers your app to:

- Make Queries: Retrieve one-off data or subscribe to live updates. You can access the host’s state, environment, and app context.
- Make Mutations: Trigger state changes or perform HTTP requests directly in Sitecore.
- Interact with Sitecore APIs: Execute actions based on the resource access granted during installation.

Inspired by GraphQL and React Query, the SDK’s query/mutation API handles internal state, loading indicators, and error management—so you can focus on building, not boilerplate.

#### Why it matters: 
This package is what makes your app feel native. It’s how your app knows where it’s running, who’s using it, and what it should do next.

Read more about the Client package: https://www.npmjs.com/package/@sitecore-marketplace-sdk/client

### XMC package
Once your Marketplace app is wired up with the Client SDK, the next step is unlocking the full power of XM Cloud. That’s where the Marketplace SDK XMC package comes in.

This package extends the Client SDK and gives your app type-safe access to key Sitecore APIs, so you can build smarter, faster, and with confidence.

#### What it does
The XMC package connects your app to the following Sitecore APIs:

- [Authoring and Management GraphQL API](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-authoring-and-management-graphql-api.html) 
Manage Sitecore content using GraphQL queries and mutations. Ideal for apps that create, update, or retrieve content in real time.

- [XM Apps REST API](https://api-docs.sitecore.com/xmc/xm-apps-api)
Interact with sites, site collections, pages, and languages. Perfect for apps that help manage multi-site environments or streamline localization workflows.

- [Experience Edge Token API](https://doc.sitecore.com/xmc/en/developers/xm-cloud/token-api.html)
Manage API keys for the Delivery API. Use this to securely access published content via Experience Edge.

- [Experience Edge Admin API](https://doc.sitecore.com/xmc/en/developers/xm-cloud/admin-api.html)
Administer your Edge tenant. Great for apps that monitor usage, manage configurations, or automate Edge-related tasks.

#### Why it matters
The XMC package turns your app into a true XM Cloud citizen—capable of reading, writing, and orchestrating content and configuration across the platform.

Read more about the XMC package: https://www.npmjs.com/package/@sitecore-marketplace-sdk/xmc

## Resources:
| Resource | Link |
|----------|------|
| Marketplace SDK - XM Cloud package: | https://www.npmjs.com/package/@sitecore-marketplace-sdk/xmc |
| Marketplace SDK - Client package | https://www.npmjs.com/package/@sitecore-marketplace-sdk/client |
| Starter Kits: Clone-ready templates for each extension point.| https://github.com/Sitecore/marketplace-starter |
| Documentation:|  https://doc.sitecore.com/mp/en/developers/marketplace/introduction-to-sitecore-marketplace.html |
| Quick Start guide: | https://doc.sitecore.com/mp/en/developers/sdk/0/sitecore-marketplace-sdk/quick-start.html |
|Documentation: Adding Custom fields to the template (Content Model)|https://doc.sitecore.com/mp/en/developers/marketplace/enable-a-custom-field-in-the-xm-cloud-page-builder.html |
|Feedback Form | https://forms.office.com/e/cEndu1JLQc |



## FAQ
| Question | Answer|
|----------|-------|
| Does the Marketplace cover Sitecore XM Cloud only? | 	Currently the marketplace SDK handles Cloud Portal and XM Cloud. More integrations with other Sitecore products are planned. | 
|What Frontend Frameworks are supported? | The Marketplace SDK supports React and Next.Js apps. |
| What is the difference between public and custom apps?| **Public apps** are available for any Sitecore customer to avail of. Public apps are self served and deployed/enabled by the user. **Custom-built apps** or agents are private, specifically built for one customer or an identified group of specific customers. Custom Apps are deployed/enabled by the vendor. Both can be built by the customer or a partner. 
| Where do I host Marketplace Custom Apps?  | Currently Sitecore doesn’t offer hosting for Marketplace apps, therefore teams building apps will be required to arrange/manage hosting e.g. using Vecel, Netlify, Azure, or others. |
| Who supports Custom Apps?| Support agreements can be individually agreed between implementer and consumer/customer. If not agreed differently, the Implementer, e.g. the Partner that implemented it, is responsible for the support. |
| Is there a review process for custom apps?| The quality of a custom app in terms of security, usability, accessibility has to be ensured by the implementer based on the requirements of the customer.  |
| What tools are available for developers?| Marketplace SDK (v1) helps apps talk securely with Sitecore, making it easier to use different Sitecore APIs (like for XM Apps, Authoring, and Experience Edge) in a structured way with Sitecore handling authentication. Developers can build and test locally by connecting to an XM Cloud environment. (MCPs will be available in future) |
| How do I manage several Marketplace apps?   | Should that be independent Repos or independent apps? Or just different Routes? |
| How do I prevent others from seeing my locally running app that I registered in Cloud Portal?| Ideally you only register local running apps on non-prod environments. |

## Read more
<Article 
  title="From Zero to Deployed: Building with the Sitecore Marketplace Starter Kit" 
  description="Explore the Sitecore Marketplace — your hub for discovering and building ready-to-use extensions that amplify your digital experience platform. Join our Early Access Program to get started with the Marketplace SDK." 
  link="/learn/getting-started/marketplace/marketplace-starter-kit-nextjs-app-router" 
  maxWidth="sm" />
<Article 
  title="Configure and Install a custom marketplace app" 
  description="Learn how to take your custom Marketplace app from development to deployment. This guide walks you through the final steps—registering your app in the Sitecore Cloud Portal, selecting extension points, configuring API access, and making it available to your organization." 
  link="/learn/getting-started/marketplace/marketplace-register-app" 
  maxWidth="sm" />