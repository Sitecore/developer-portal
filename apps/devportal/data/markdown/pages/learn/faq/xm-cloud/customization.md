---
product: ['xm-cloud']
title: 'Customization'
hasInPageNav: true
cdpTags: ['xm-cloud']
---
<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## Are clients able to customize the editorial experience?

The Content Management instance will be fully customizable in XM Cloud as it is today with a self-hosted implementation. You can change Sheer and SPEAK UIs of the Content Management role. Note that Pages are the future of our XM Cloud authoring experience.

## Will it be possible to use custom identity providers?

XM Cloud now supports Single Sign On (SSO) to custom identity providers that use the OpenID Connect (OIDC) protocol. You can read more about how to configure SSO in the [Sitecore Cloud Portal documentation for SSO](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/single-sign-on--sso-.html).

## Extending pipelines and custom renderings, typically will be compiled .NET code attached to something in Sitecore, is this still allowed in XM Cloud?

Absolutely, you can write your own custom pipelines and do all the customization you did before. You don’t do it against the web database with the way Experience Edge publishing works. Primarily, Experience Edge publishing works as if you wrote a custom pipeline that changed some items or a new custom item resolver for changed content. The Experience Edge publishing process runs through those rendering pipelines to render the JSON over to Experience Edge. During this process, there are some transformations. Note that with Sitecore XM Cloud, there is not as much need for customization, as most customizations will be needed out in the front end application.

## Will partners still be able to customize pipelines and events on the CM? Are all pipelines going to be available to add to include publishing (like wanting to publish to a Solr index for consumption)

Events and pipelines can still be customized for the Content Management environment within the XM Cloud. There may be some limitations as to which pipelines can be customized, and Sitecore encourages new development to use out-of-process API-based integration as much as possible.

## How is Sitecore going to manage customizations with a SaaS approach to upgrades?

Sitecore XM Cloud is designed to handle automatic updates and backwards compatibility. XM Cloud uses Semantic versioning starting at XM Cloud 1.0 as the major version. If Sitecore updates XM Cloud to version 1.1, or any other minor version, Sitecore will automatically update all instances. XM Cloud also has automatic updates on re-deployments, if there was a new version available. Sitecore XM Cloud will also get automatic updates for zero-day patches. The plan is to avoid major version changes unless there is a breaking change.

## Does XM Cloud have support for custom field types?

Yes, Sitecore XM Cloud supports custom fields.

## Can custom fields be exposed in the GraphQL endpoint?

It is possible to extend the Experience Edge publishing to provide Experience Edge with the custom field values.

## How does XM Cloud support customizations in the authoring environment and at the GraphQL endpoint?

Sitecore XM Cloud still allows deploying your own code and fields to the XM Cloud instance. These are available in Experience Editor and Content Editor, as they were with Sitecore XM. You are still able to plug into the pipelines. These are published out to Experience Edge as custom fields and made available on the GraphQL item.

For customizations like custom field renders, these should be called as part of the layout. When rendering the layout, the layout pipeline renders Json and pushes this to Experience Edge. This makes it accessible to your headless front-end.

For Pages, Sitecore is still working on making an extensibility model for customer extensions. This will allow for visualizing customizations on the Pages site in the future.

## Is XM Cloud similar to Sitecore XM running in Sitecore Managed Cloud without being able to add (code) customizations?

No. XM Cloud supports customization with the use of our deployment tooling and services.

With Managed Cloud customers have complete flexibility to architect and deploy Sitecore solutions using whatever topology and approach they desire. Additionally, with Managed Cloud, there is joint responsibility on the platform and its updates.

XM Cloud only supports headless, API-first implementation, with publishing to Experience Edge. Sitecore XM Cloud is fully managed by Sitecore and includes automatic updating. Policies exist to ensure XM Cloud instances are kept up to date. The responsibility for the platform and updates belongs to Sitecore.
