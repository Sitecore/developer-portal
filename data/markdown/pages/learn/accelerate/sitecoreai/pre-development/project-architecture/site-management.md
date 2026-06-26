---
title: 'Site management'
description: 'Setting up the best approach for a global company with localized multi-sites'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
created: '2025-01-31'
audience: ['Architect','Product Owner', 'User']
---

## Context

Most companies these days have the need to host multiple websites and not all content can be delivered through one. With that comes a list of considerations that need to be taken.

Global companies face the challenge of maintaining a consistent brand image while providing localized content and services to its diverse customer base across their regions, including North America, Europe, and Asia. They needs an efficient way to manage and update content across its regional websites to ensure consistency, relevance, and engagement.

In this recipe, we will focus on a company requires a solution that allows for centralized content management with the flexibility to provide localized content, ensuring both consistency and relevance across all regional sites. This solution should enhance customer engagement, improve content management efficiency, and support the company's global expansion efforts.

## Execution

The solution is to implement a multi-site strategy with shared content using XM Cloud. This approach allows them to manage multiple regional websites efficiently while ensuring consistency in their brand messaging and content.

### Implementation

Before diving into the technical approach, there are a few questions that each implementation need to be answered before getting started.

#### Content Repository Structure

How do we want to structure the content that is shared vs localized?

1. **Shared Content**: Create a centralized content repository where core content such as company history, product descriptions, technical specifications, and corporate news is stored. This content is shared across all regional sites to maintain consistency.

2. **Localized Content**: Each regional site has the flexibility to add localized content, including region-specific news, events, promotions, and customer testimonials. This ensures that the content is relevant to the local audience.

It might be that a blended version of both is utilized, based on the requirements - and it’s not always a one size fits on approach.

#### Regional Sites

What are the requirements for a global website such as a .com, vs localized, domain & language specific. For most this consists of:

1. **Global site**: The global site includes content which remains consistent across all regions with no requirement for regional variations and can be made available in multiple languages for a diverse, multilingual audience.

2. **North America Site**: The North American site features shared content from the centralized repository, along with localized content such as U.S. and Canadian market-specific product offerings, local events, and customer success stories.

3. **Europe Site**: The European site includes shared content and localized content in multiple languages (e.g., English, French, German) to cater to different countries within the region. It also highlights European market trends and regional compliance information.

4. **Asia Site**: The Asian site features shared content and localized content in languages such as Chinese, Japanese, and Korean. It includes information on local partnerships, regional product adaptations, and market-specific promotions.

#### Consistent Branding and User Experience

This is not a content or domain only decision, branding and user experience needs to be considered across the board -

1. **Design and Layout**: All regional sites follow a consistent design and layout to ensure a unified brand experience. This includes the use of the company's logo, color scheme, and navigation structure.

2. **User Experience**: The user experience is tailored to each region, with localized language options, currency conversions, and region-specific customer support information.

#### Efficient Content Management

The setup of the authoring teams and other parts of the organization such as Marketing will effect how you structure with sites - with distinction between Local vs Global updates.

1. **Global Updates**: When core content needs to be updated (e.g., product specifications or corporate news), changes are made in the centralized repository and automatically propagated to all regional sites. This ensures that all sites have the most up-to-date information.

2. **Local Autonomy**: Regional teams have the autonomy to manage and update their localized content, allowing them to respond quickly to market changes and local customer needs.

Answering these sites, and setting up the right structure will ensures that the company's brand message and core information are consistent across all regional sites. Each regional site can provide content that is relevant and tailored to the local audience, enhancing customer engagement and satisfaction.

Centralized content management reduces duplication of effort and ensures that updates are efficiently propagated across all sites. The multi-site strategy allows to ability to easily expand into new regions by creating additional regional sites that leverage the shared content repository.

## Insights

The following [site management](https://doc.sitecore.com/xmc/en/developers/xm-cloud/using-sxa-for-xm-cloud-development.html) features are available in XM Cloud to help you with rolling out and managing multiple sites.

### Site templates and site duplication

[Site templates](/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site#site-templates) provide a standardized framework for creating new regional sites. These templates include predefined layouts, design elements, and core content structures that align with the company's brand guidelines. By using site templates, organizations can ensure that all regional sites maintain a consistent look and feel, enhancing brand recognition and user experience.

See the [creating a site recipe](/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site) for more information on creating sites and site duplication. Site duplication allows organizations to create copies of existing sites, which can then be customized for specific regions. This approach leverages the content and structure of the original site, ensuring consistency while allowing for localized modifications.

### Sites and site collections

[Site collections](https://doc.sitecore.com/xmc/en/developers/xm-cloud/site-collections.html) are groups of related [sites](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sites.html) organized to facilitate management and content sharing. For example, a site collection might include multiple sites for different brands, languages, or regions under a single organization. Using XM Cloud, site collections ensure consistency in design and content standards while allowing for localization to enhance relevance for local audiences. They enable content reusability and centralized management, making it easier to update and distribute content across multiple sites. Overall, site collections provide scalability, efficiency, and flexibility, allowing organizations to manage and roll out sites quickly and effectively as they grow or expand into new markets.

### XM Cloud sites

[XM Cloud Sites](https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html) serves as the primary hub for marketers and technologists to collaborate on experiences. In large-scale environments, you can easily locate sites using the search function. From this platform, you can create and manage your sites and directly navigate to the XM Cloud Pages Editor. Additionally, you can enable the shared site feature to start sharing content among sites within your site collection.

<img src="/images/learn/accelerate/xm-cloud/site-management-1.png" alt="XM Cloud Sites interface" />

### Site configuration (sites and items)

You can maintain and administer site configuration from XM Cloud Sites or Content Editor with access to the Hostname, Homepage, Rendering host, Language etc. More information on managing site configuration can be found [here](https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html).

<img src="/images/learn/accelerate/xm-cloud/site-management-2.png" alt="XM Cloud Site configuration" />

<br/>

More information on managing site configuration can be found [here](https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html).

### Multisite management

Multisite management simplifies the process of creating and managing multiple sites within a single Sitecore instance, supporting multitenancy for different brands, languages, or regions. It organizes sites into collections, enabling shared content, components, and layout elements among sites within a collection.

See the [multisite recipe](/learn/accelerate/xm-cloud/pre-development/project-architecture/multisite) for more detail of how to configure the application architecture.

### Shared sites

You can create [shared content](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sharing-content.html) centrally for use across all regional sites, such as company history, product descriptions, technical specifications, and corporate news. This greatly simplifies content management, as changes made to the shared content are automatically applied wherever it is used. XM Cloud allows you to mark a site as shared, enabling the use of this content across different sites, ensuring consistency and efficiency in content management.

<img src="/images/learn/accelerate/xm-cloud/site-management-3.png" alt="XM Cloud Site configuration shared site" />

<br/>

The following content and configuration items can be shared across sites within a site collection.

| Share content                                 | Share configuration items                     |
| ----------------------------------------------| ----------------------------------------------|
| Share content as a delegated area             | Variants                                      |
| Data source items (links, images, text, etc.) | Page and partial designs                      |
|                                               | Styles                                        |
|                                               | Available renderings                          |
|                                               | Page branches                                 |
|                                               | Placeholder settings                          |
|                                               | Redirect maps                                 |
|                                               | Page templates                                |

### Cross-site linking

When setting up multiple regional sites you will need to create links across these sites. This can always be done via absolute links, but when a page moves, that absolute link is no longer valid.

This is where [cross-site linking](https://doc.sitecore.com/xmc/en/developers/xm-cloud/adjust-link-settings-to-enable-cross-site-linking.html) helps and within XM Cloud you can link across sites keeping the relative information and transferring that later into an absolute URL automatically.

In XM Cloud you can mark sites as Linkable, so they potentially become visible for other sites as targets to be linked to.

And per site you can select if you want to see:

- Only own pages
- Pages within site collection (marked as linkable)
- All sites (marked as linkable)

<br/>

<img src="/images/learn/accelerate/xm-cloud/site-management-4.png" alt="XM Cloud cross site link settings" />

### Site manager

When you create multiple sites you need a way to efficiently manage these sites within your XM Cloud instance. The [Site Manager](https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-multiple-sites-with-the-sxa-site-manager.html) is a powerful tool that helps you manage multiple sites efficiently. It provides a comprehensive overview of all sites on your Sitecore instance, displaying a list of these sites along with icons indicating their accessibility status. If a site cannot be accessed, the "Hidden domains" column explains what is blocking the site, such as conflicts with host names or virtual folders.

<img src="/images/learn/accelerate/xm-cloud/site-management-5.png" alt="XM Cloud cross SXA site manager" />

### Modules

[Modules](https://doc.sitecore.com/xmc/en/developers/xm-cloud/modules.html) in XM Cloud are predefined sets of configurations, templates, and components that can be used to build and customize sites. They include elements such as renderings, data folders, headless variants, and more. Modules ensure that all necessary scaffolding is in place when a new site is created, making the development process more efficient.

By using modules with site templates in XM Cloud, organizations can efficiently create, manage, and customize multiple sites, ensuring consistency, scalability, and ease of maintenance.

<img src="/images/learn/accelerate/xm-cloud/site-management-6.png" alt="XM Cloud cross SXA site manager" />

### Roles and rights management

In XM Cloud, roles and rights management is essential for controlling access to functionality and content. XM Cloud allows you to create standard roles that grant access to specific sites. You can later fine-tune these roles or create entirely custom roles tailored to your specific needs. More information can be found [here](https://doc.sitecore.com/xmc/en/developers/xm-cloud/security.html) on setting up SXA security roles and setting up security for a site collection and site.

<img src="/images/learn/accelerate/xm-cloud/site-management-7.png" alt="XM Cloud SXA site security roles" />

## Related Recipes

<Row columns={2}>
    <Link title="Creating a site" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site" />
    <Link title="Multisite" link="/learn/accelerate/xm-cloud/pre-development/project-architecture/multisite" />
    <Link title="Localization" link="/learn/accelerate/xm-cloud/implementation/information-architecture/localization" />
    <Link title="Site templates" link="/learn/accelerate/xm-cloud/pre-development/sprint-zero/creating-a-site#site-templates" />
</Row>

## Related Documentation

<Row columns={2}>
    <Link title="Sites" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/sites.html" />
    <Link title="Manage sites" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-sites.html" />
    <Link title="Manage multiple sites with the SXA Site Manager" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/manage-multiple-sites-with-the-sxa-site-manager.html" />
    <Link title="Security" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/security.html" />
    <Link title="Site collections" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/site-collections.html" />
    <Link title="Sharing content" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sharing-content.html" />
    <Link title="Adjust link settings to enable cross-site linking" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/adjust-link-settings-to-enable-cross-site-linking.html" />
    <Link title="Modules" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/modules.html" />
</Row>
