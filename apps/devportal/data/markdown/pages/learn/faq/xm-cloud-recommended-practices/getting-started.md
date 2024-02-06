---
product: ['xm-cloud']
title: 'Getting Started'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this article can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

What do devs need to know **before they get started** on a Sitecore XM Cloud project?

## Onboarding

> ✅ DO focus on “**just the essentials**” during dev onboarding.

Learn just a small subset of Sitecore technologies; don’t try to learn everything.

Front-end devs who are new to Sitecore are saying that the quantity of Sitecore-specific terminology and product names (XM Cloud, Edge, JSS, SXA) can feel overwhelming. This is normal.

First, it helps to recognize that all of these terms aren’t necessarily describing big new concepts that will require a lot of training in; in most cases they are simply Sitecore “codenames” for concepts that are common to the industry. For example, “Sitecore Edge” is a GraphQL endpoint, “JSS” (JavaScript SDK) is JavaScript middleware packages, and “SXA” (Sitecore Experience Accelerator) is a set of features that enables Content Authors to manage multisite environments through the UI rather than through code. These concepts are not unique to Sitecore, and as you get familiar with the language of Sitecore, you will realize that you already know it better than you thought.

And second, it helps to start with just the essentials - **don’t try to learn everything all at once**. The Sitecore stack has evolved into what it is today over the course of 20 years; a lot of different technologies and expertise have gone into making Sitecore as feature rich as it is. This makes the Sitecore platform both, powerful and complex. [If you’re a front-end dev, start by focusing in on just Edge](https://youtu.be/Kig3kWZ8FuQ) (the GraphQL endpoint that serves data needed to render the page) and JSS (the JavaScript library that provides middleware for interfacing with this endpoint and transforming incoming JSON data into objects that are usable by React components). [If you’re a back-end dev, you’ll also need to learn about running Sitecore in Docker containers.](https://youtu.be/sVLM1g3Xi-U)

**Recommended learning path for devs new to XM Cloud**: [XM Cloud Introduction](https://developers.sitecore.com/learn/getting-started/xm-cloud-introduction)

## Content Management System (CMS) concepts

> ✅ DO **master key Content Authoring concepts before starting work** in a Sitecore XM Cloud project

Many devs coming to the Sitecore world are used to building components for webpages. But Sitecore is a CMS for marketers, so in Sitecore you are not building for webpages directly; you are building for the authoring interface, and this requires extra considerations.

[Content authoring concepts for developers new to Sitecore](https://doc.sitecore.com/xmc/en/developers/xm-cloud/content-authoring-concepts-for-developers-new-to-sitecore.html) - It is critical to understand these key concepts before designing or building front-end components for a Sitecore XM Cloud backend.

> ✅ DO acquire access to your XM Cloud instance and **try out the authoring workflow yourself** before building components.

Don’t ignore the authoring interface and don’t hardcode the layout of the components. Many front-end devs are used to working with static websites, meaning that once the layout requirements are defined in the design, these requirements remain static. (For example, the number of columns). Even front-end devs who have experience working with other headless CMSs may be expecting that only the text or images change - the fact that Content Authors can edit the layout of the page and change how components are ordered or nested is a very significant and differentiating concept. Taking the time to learn the full extent of editing power that Content Authors have over pages (by trying it themselves) is the single best thing front-end devs can do to set themselves up for working on a Sitecore project.

> ✅ DO regularly **test components and functionality in the authoring interface** during development.

> ✅ DO keep Content Authors in control of page layout by **avoiding hardcoding layout** in code.

Teams who are not used to building for a CMS and who did not take the time to master these concepts struggled when it was time to hand the system over to Content Authors because they ignored the authoring interface during development and pushed off the task of testing their components in the authoring interface to the end of the project. Remember that **it doesn’t matter how great your components are if Content Authors can’t add them to pages** - all components must work in the authoring interface, so they must be tested in the authoring interface. If front-end devs are following our recommended workflow of building against an XM Cloud endpoint instead of running local Sitecore containers, then they must plan for a little extra testing time since they will not be able to test all authoring interfaces (e.g. Pages) locally.

## Sitecore’s JavaScript SDK (JSS)

> ✅ DO **use functions provided by JSS** to fetch data from Sitecore’s GraphQL API rather than using the API directly.

JSS is middleware for JavaScript components interfacing with the Sitecore API. Using JSS is not mandatory and it’s possible to work against the API directly, so front-end devs who are new to Sitecore wonder whether using JSS is worth it. Learning JSS takes time, and following the project structure that JSS dictates requires developers to give up control and work in a new way. However, even with this overhead in mind, it is still best to use JSS, as it provides many benefits and will save teams time in the long term. Building directly against the Sitecore API is not recommended, and teams who attempted to do this struggled.

JSS helpers abstract away the specifics of the API. This means that you won’t have to change your components as much if you change Sitecore or JSS versions. When your front-end and back-end communicate through an interface, they are abstracted from each other’s changes.

Additionally, using JSS helpers ensures that all content displayed in components is editable by Content Authors in the WYSIWYG authoring interface.

> ❌ DON’T define the nesting structure of components through code. Instead, use the Placeholder component provided by JSS.

> ❌ DON’T hardcode any text or images into components. Instead, use the Field components provided by JSS.

## Sitecore’s Headless Experience Accelerator (Headless SXA)

> ✅ DO **use features provided by Headless SXA** to deliver best authoring experiences but also save time on common reoccuring features.

SXA used to be an add-on to Sitecore and is now part of XM Cloud. It provides multisite and multitenancy features, improved page layouting concepts using page designs, partial designs and page branches and the capability to build components easily and in a flexible way utilizing rendering variants (UI variations of components) and rendering parameters (configurable UI variations). Additionally it provides a list of features that can be easily utilized such as sitemaps, robots.txt. Following the XM Cloud starter template headless SXA out of the box components provide great implementation examples. SXA reduces the amount of code a lot makes configuration much more accessible.

> ✅ Define Page- and Partial Designs using Headless SXA Components over creating static coded layouts.

> ✅ DO use Headless SXA together with JSS to utilize the benefits of both worlds.

**Recommended learning path for devs new to SXA**: [SXA Best Practices Guide](https://doc.sitecore.com/xmc/en/developers/xm-cloud/best-practices.html)

## Other 3rd Party Tools & Integrations

### GitHub

> ✅ DO **chose GitHub** for your source control needs to take advantage of the built-in integrations with XM Cloud.

Teams who use other source control tools say it’s not worth the effort.

### Content search

**Content search is not available on Edge**. Very complex search methodologies need to be reconsidered in a headless world / XM Cloud world.
