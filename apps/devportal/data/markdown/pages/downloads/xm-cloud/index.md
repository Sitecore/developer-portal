---
solution: ['content-management']
product: ['xm-cloud']
title: 'XM Cloud Tools and Resources'
productLogo: 'XMCloud'
description: 'Tools and resources specific to XM Cloud development'
twitter: ['#XMCloud']
hasInPageNav: true
---

# XM Cloud Tools and Resources

This page will provide you with the downloads of new and updated resources to help with your XM Cloud journey. If you are looking for faqs, best practices, docs, videos, and other resources please see our XM Cloud product page:

<Promo
  title="XM Cloud"
  description="Sitecore XM Cloud is a hybrid headless CMS that supports both marketing and technology teams and has been built on a history of meeting the needs of the Enterprise."
  imageSource="https://sitecorecontenthub.stylelabs.cloud/api/public/content/c612f3d1efbe4e0cb946ab96d0b4aea1?v=0cca3868"
  linkText="Find more XM Cloud resources"
  linkHref="/content-management/xm-cloud" isImageLeft={false}
/>

## XM to XM Cloud Content Migration tool

Use the XM to XM Cloud Content Migration tool to help move content, media and user data from a source XM on-premises instance to a target XM Cloud environment. This tool acts as middleware that simplifies the task of entering and selecting data, and orchestrating the migration. Our first version is based on the underlying Sitecore CLI and Sitecore Content Serialization (SCS) technologies.

- **Supported versions**: Sitecore platform on-premise releases **10.1 and later**.

- **What can be migrated?** This tool migrates content, media, and user data. It is not intended for migrating or converting site layouts/renderings, xDB data, commerce data, or other data items that are not found in Sitecore XM.

- **Is this compatible with XP/XC?** If you have installed XP or XC, the tool will work but it only targets the content portion from XM.

- **Questions?** Contact us on the community Slack [#xm-cloud channel](https://sitecorechat.slack.com/archives/C03NXTAPKE3).

There are two options for running the application: a graphical user interface (GUI) and a command line interface (CLI). Download the one that works best for you and your team!

<Row columns="2">
<Article title="Graphical User Interface (GUI)" description="" link="https://sitecoresdn.blob.core.windows.net/downloads/Sitecore.XM.Migration.GUI.v1.1.151.zip" maxWidth="sm" linktext="Download" />
<Article title="Command Line Interface (CLI)" description="" link="https://sitecoresdn.blob.core.windows.net/downloads/Sitecore.XM.Migration.Console.v1.1.151.zip" maxWidth="sm" linktext="Download"  />
</Row>

## Open Source resources

<Row columns={3}>
<Repository framework="Nextjs" name="Headless SXA Starter Kit" description="This solution is designed to help developers learn and get started quickly with XM Cloud + SXA." repositoryUrl="https://github.com/sitecorelabs/xmcloud-foundation-head" />
<Repository framework="Nextjs" name="Sitecore PlaySummit Demo" description="The official Sitecore demo used to demo Sitecore DXP including Content Hub and JSS" repositoryUrl="https://github.com/Sitecore/Sitecore.Demo.XmCloud.PlaySummit" />
<Repository framework="Nextjs|DotNET" name="Example implementation" description="This repository contains the codebase for a series of sites managed by the developer relations at Sitecore" repositoryUrl="https://github.com/Sitecore/XM-Cloud-Introduction" />
</Row>