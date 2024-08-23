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

This page provides downloads to help with your XM Cloud journey. For FAQs, best practices, docs, videos, and other resources please see our XM Cloud product page:

<Promo
  title="XM Cloud"
  description="Sitecore XM Cloud is a hybrid headless CMS that supports both marketing and technology teams and has been built on a history of meeting the needs of the Enterprise."
  imageSource="https://sitecorecontenthub.stylelabs.cloud/api/public/content/c612f3d1efbe4e0cb946ab96d0b4aea1?v=0cca3868"
  linkText="Find more XM Cloud resources"
  linkHref="/content-management/xm-cloud" isImageLeft={false}
/>

## XM to XM Cloud Migration tool

This tool helps move content, media and user data from a source XM on-premises instance to a target XM Cloud environment. It is middleware that simplifies the task of entering and selecting data, and orchestrating the migration.

  <Alert variant='warning' mb={4}>
    <AlertIcon />
    This tool focuses on back-end data; it does not migrate front-end site layouts/renderings.
  </Alert>

**Version 1** is based on underlying Sitecore CLI and Sitecore Content Serialization (SCS) tools. It supports migration from source XM releases **10.1 and later**.

 | Releases/Options | Description |
 | --- | --- |
 | XM to XM Cloud Migration Tool 1.1.154 - [GUI option](https://scdp.blob.core.windows.net/downloads/XM_to_XMCloud_Migration/Sitecore.XM.Migration.GUI.v1.1.154.zip) , [CLI option](https://scdp.blob.core.windows.net/downloads/XM_to_XMCloud_Migration/Sitecore.XM.Migration.Console.v1.1.154.zip) | Jun 2024 - Fixed blocking issues: **616476** - Sitecore replaced its products downloads page which broke the tool's retrieval of Sitecore CLI. **615822** - Tool installs a config file on the source XM's Identity Server, but Identity Server does not restart in some user scenarios. |
 | XM to XM Cloud Migration Tool 1.1.151 - [GUI option](https://scdp.blob.core.windows.net/downloads/XM_to_XMCloud_Migration/Sitecore.XM.Migration.GUI.v1.1.151.zip) , [CLI option](https://scdp.blob.core.windows.net/downloads/XM_to_XMCloud_Migration/Sitecore.XM.Migration.Console.v1.1.151.zip) | Nov 2023 - Initial tool release. The tool is provided in two variants: a Graphical User Interface and a Command Line Interface console. |


**Version 2** is in development. It will replace Sitecore CLI and SCS with new native XM Cloud technologies built on Google's Protocol Buffers format. This will enable: migrating from source XM 9 and 10 releases, a significant performance boost, and simplification. Version 2 will also add migrations from PaaS deployments. 

**Questions?** Contact us on the community Slack [#xm-cloud channel](https://sitecorechat.slack.com/archives/C03NXTAPKE3).

