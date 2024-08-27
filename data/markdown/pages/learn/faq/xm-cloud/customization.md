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

## Am I able to deploy custom code to the XM Cloud CMS environment?

While currently, it is technically possible to write custom pipelines and events in XM Cloud, **it is strongly discouraged**.

The XM Cloud platform is designed to be a headless platform, and it is not designed to support customization of the CMS. Instead, you should use the out-of-process APIs to extend the platform.

## Are clients able to customize the editorial experience?

XM Cloud currently offers some of the same tools from traditional on-premises XM (Content Editor, Experience Editor) but it is not recommended to deploy customizations to the editorial experience into the XM Cloud CMS environment itself.

Instead, complex use cases should be extended via web hooks with headless applications connecting to the APIs. Simpler editing experiences should be embedded in your component code so that Pages can take full advantage of your custom experience.

Sitecore will publish an Accelerate recipe regarding this topic in the future to provide more details.

## Will it be possible to use custom identity providers?

XM Cloud now supports Single Sign On (SSO) to custom identity providers that use the OpenID Connect (OIDC) protocol. You can read more about how to configure SSO in the [Sitecore Cloud Portal documentation for SSO](https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/single-sign-on--sso-.html).

## Extending pipelines and custom renderings, typically will be compiled .NET code attached to something in Sitecore, is this still allowed in XM Cloud?

While currently, it is technically possible to write custom pipelines in XM Cloud, it is strongly discouraged.

In XM Cloud, renderings are not deployed to the Content Management environment. Instead, renderings are part of the front-end application.

## Will partners still be able to customize pipelines and events on the CM? Are all pipelines going to be available to add to include publishing (like wanting to publish to a Solr index for consumption)

While currently, it is technically possible to write custom pipelines and events in XM Cloud, it is strongly discouraged.

Events are now available via webhooks in XM Cloud. You can read more about webhooks in the [Sitecore XM Cloud documentation for webhooks with workflow](https://doc.sitecore.com/xp/en/xmc/en/developers/xm-cloud/webhooks.html)

## How is Sitecore going to manage customizations with a SaaS approach to upgrades?

Sitecore XM Cloud is designed to handle automatic updates and backwards compatibility. XM Cloud uses Semantic versioning starting at XM Cloud 1.0 as the major version. If Sitecore updates XM Cloud to version 1.1, or any other minor version, Sitecore will automatically update all instances. XM Cloud also has automatic updates on re-deployments, if there was a new version available. Sitecore XM Cloud will also get automatic updates for zero-day patches. The plan is to avoid major version changes unless there is a breaking change.

## Does XM Cloud have support for custom field types?

No, Sitecore XM Cloud does not support custom field types.

## Is XM Cloud similar to Sitecore XM running in Sitecore Managed Cloud without being able to add (code) customizations?

No. XM Cloud is a SaaS platform that has a different architecture and approach to Sitecore XM running in Sitecore Managed Cloud.

XM Cloud only supports headless, API-first implementations, with content being published to Experience Edge. Sitecore XM Cloud is a fully managed headless CMS platform operated by Sitecore and includes automatic updating. Policies exist to ensure XM Cloud instances are kept up to date. The responsibility for the platform and updates belongs to Sitecore. The web application is not hosted by Sitecore and remains the responsibility of the client or partner.

With Managed Cloud customers have complete flexibility to architect and deploy Sitecore solutions using whatever topology and approach they desire. Additionally, with Managed Cloud, there is joint responsibility on the platform and its updates.
