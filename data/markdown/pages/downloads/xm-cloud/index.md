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

This tool helps move content, media and user data from a source Sitecore Experience Manager (XM) instance to a target XM Cloud environment.
It is middleware that simplifies the task of entering and selecting data, and orchestrating the migration.
The tool is available in both a self-contained Graphical User Interface (GUI) tool, and a Command Line Interface (CLI) comprising operations that you can embed into your own tooling.

Version 2 is based on XM Cloud's Item Transfer technology:\
-Delivers fast data transfers built on Google's Protocol Buffers (Protobuf) format.\
-Supports migrations from Sitecore XM on-premises and PaaS versions 9.1 and later.

Enhancements over version 1 include:\
-Migration dependencies delivered via a Sitecore package.\
-Dependencies contained within a single folder for easier isolation.\
-Self-contained executables with no required prerequisites.\
-No longer depends on Sitecore CLI, Sitecore Content Serialization (SCS), Sitecore Managed Services (SMS).\
-Enhanced console usage by incorporating sub-commands.

| Releases/Options                                                                                                                                                                                                                                                                                  | Description                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [XM to XM Cloud Migration Tool 2.1.71](https://scdp.blob.core.windows.net/downloads/XM_to_XMCloud_Migration/Sitecore.XM.Migration.v2.1.71.zip) | Oct 2024 - initial Version 2 release.
| XM to XM Cloud Migration Tool 1.1.154 - [GUI option](https://scdp.blob.core.windows.net/downloads/XM_to_XMCloud_Migration/Sitecore.XM.Migration.GUI.v1.1.154.zip) , [CLI option](https://scdp.blob.core.windows.net/downloads/XM_to_XMCloud_Migration/Sitecore.XM.Migration.Console.v1.1.154.zip) | [Deprecated] Jun 2024 - minor version 1 fixes. |
| XM to XM Cloud Migration Tool 1.1.151 - [GUI option](https://scdp.blob.core.windows.net/downloads/XM_to_XMCloud_Migration/Sitecore.XM.Migration.GUI.v1.1.151.zip) , [CLI option](https://scdp.blob.core.windows.net/downloads/XM_to_XMCloud_Migration/Sitecore.XM.Migration.Console.v1.1.151.zip) | [Deprecated] Nov 20223 - initial tool release. Uses Sitecore CLI, SCS, SMS. Migrates from Sitecore XM 10.1+. |                                                                                                                                               |

  <Alert variant='warning' mb={4}>
    <AlertIcon />
    This tool focuses on back-end data; it does not migrate front-end site layouts/renderings.
  </Alert>

**Questions?** Contact us on the community Slack [#xm-cloud channel](https://sitecorechat.slack.com/archives/C03NXTAPKE3).
