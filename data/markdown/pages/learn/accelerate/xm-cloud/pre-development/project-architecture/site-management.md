---
title: 'Site management'
description: '	
Headless SXA site management features support multisite features in XM Cloud.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-02'
---

## Problem

Without Headless SXA site management features in XM Cloud, you may face increased development time, complex site management, lack of standardization, limited reusability, and challenges with your headless implementations.

## Solution

The following Headless SXA site management features are available in XM Cloud to help you with rolling out and managing multiple sites.

- Site templates and site duplication
- Sites and Site Collections
- XM Cloud sites
- Site configuration (sites and items)
- Multisite management (create sites and manage)
- Shared sites
- Cross-site linking
- Site manager
- Modules
- Roles and rights management

### Site templates and site duplication

See the [creating a site recipe](/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site) for more information on creating sites, site templates and duplication.

### Sites and site collections

Site collections are groups of related sites, organized to facilitate management and content sharing. For example, a site collection might include multiple sites for different brands, languages, or regions under a single organization.

### XM Cloud sites

XM Cloud Sites serves as the primary hub for marketers and technologists to collaborate on experiences. In large-scale environments, you can easily locate sites using the search function. From this platform, you can create and manage your sites and directly navigate to the XM Cloud Pages Editor. Additionally, you can enable the shared site feature to start sharing content among sites within your site collection.

<img src="/images/learn/accelerate/xm-cloud/site-management-1.png" alt="XM Cloud Sites interface" />

### Site configuration (sites and items)

You can maintain and administer site configuration from XM Cloud Sites or Content Editor:

- Hostname
- Homepage
- Rendering host
- Linkable site
- Default language
- Language handling

<img src="/images/learn/accelerate/xm-cloud/site-management-2.png" alt="XM Cloud Site configuration" />

<br/>

More information on managing site configuration can be found [here](https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html).

### Multisite management (create sites and manage)

SXA multisite management simplifies the process of creating and managing multiple sites within a single Sitecore instance, supporting multitenancy for different brands, languages, or regions. It organizes sites into collections, enabling shared content, components, and layout elements among sites within a collection.

### Shared sites

Within a site context, you can create content centrally for use within a single site. This greatly simplifies content management, as changes made to the content are automatically applied wherever it is used.

However, some content, such as global marketing materials or terms and conditions, may need to be used across multiple sites. XM Cloud allows you to mark a site as shared, enabling the use of this content across different sites.

<img src="/images/learn/accelerate/xm-cloud/site-management-3.png" alt="XM Cloud Site configuration shared site" />

<br/>

The following content and configuration items can be shared across sites within a site collection.

| Share content                                 | Share configuration items                     |
| ----------------------------------------------| ----------------------------------------------|
| Data source items (links, images, text, etc.) | Variants                                      |
|                                               | Page and partial designs                      |
|                                               | Styles                                        |
|                                               | Available renderings                          |
|                                               | Page branches                                 |
|                                               | Placeholder settings                          |
|                                               | Redirect maps                                 |
|                                               | Page templates                                |

### Cross-site linking

Sometimes you need to link across sites. This can always be done via absolute links, but when a page moves, that absolute link is no longer valid.

With XM Cloud you link across sites keeping the relative information and transferring that later into an absolute URL automatically.

In XM Cloud you can mark sites as Linkable, so they potentially become visible for other sites as targets to be linked to.

And per site you can select if you want to see:

- Only own pages
- Pages within site collection (marked as linkable)
- All sites (marked as linkable)

<br/>

<img src="/images/learn/accelerate/xm-cloud/site-management-4.png" alt="XM Cloud cross site link settings" />

### Site manager

Within the Desktop app of XM Cloud under PowerShell Toolbox you can find the Site Manager. More information can be found [here](https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-multiple-sites-with-the-sxa-site-manager.html) about managing multiple sites with the SXA Site Manager.

This Admin Tool helps you get an overview about the routing using different domains, subdomains or virtual folders.

Using the traffic light icons the Site Manager indicates whether a site can be accessed through the configured routing.

You can resolve the conflicts by configuring proper hosts, virtual folders or just moving sites up and down in the list.

<img src="/images/learn/accelerate/xm-cloud/site-management-5.png" alt="XM Cloud cross SXA site manager" />

### Modules

When developing new features that include various configuration items such as templates, renderings, media library items, and more, you can bundle them into modules.

Modules can be installed on one or multiple sites. During site setup, you can choose which modules to install.

This approach decouples the deployment of a feature from its activation within a site or site collection.

Module installation can be managed either from the site or module perspective, ensuring that only items not yet installed are displayed.

<img src="/images/learn/accelerate/xm-cloud/site-management-6.png" alt="XM Cloud cross SXA site manager" />

### Roles and rights management

XM Cloud allows you to create standard roles that grant access to specific sites. You can later fine-tune these roles or create entirely custom roles tailored to your specific needs. More information can be found here on setting up SXA security roles and setting up security for a site collection and site.

<img src="/images/learn/accelerate/xm-cloud/site-management-7.png" alt="XM Cloud SXA site security roles" />

## Related Recipes

<Row colums={2}>
    <Link title="Creating a site" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site" />
</Row>

## Related Documentation

<Row columns={2}>
<Link title="Sites" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html" />
<Link title="Manage sites" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-sites.html" />
<Link title="Manage multiple sites with the SXA Site Manager" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-multiple-sites-with-the-sxa-site-manager.html" />
<Link title="Security" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/security.html" />
</Row>
