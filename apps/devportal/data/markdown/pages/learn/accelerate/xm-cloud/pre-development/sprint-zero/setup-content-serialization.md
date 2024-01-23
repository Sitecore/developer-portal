---
title: 'Setup Sitecore Content Serialization | Sitecore Accelerate for partners'
description: 'In this recipe you will learn how to setup Sitecore Content Serialization (SCS) for XM Cloud'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: false
---

## Problem

Everything in XM Cloud is an item. Content, Configuration, Customizations, … Some of those items are tightly coupled to functionality provided by Developers. So, we need to ensure that items our code depends on are deployed along with the code.

## Solution

Items are persisted into source code repository by using Sitecore Content Serialization. Sitecore Content Serialization is able to connect to XM Cloud via the Content Management API and pull items from XM Cloud to our local in yml format, but also push the item representation we have in our local filesystem to an XM Cloud instance. This enables you to push the same set of items to different environments.

The Items that are considered for synchronization can be configured.

### Sitecore CLI

Sitecore Content Serialization can be achieved using the Sitecore CLI. You can find a detailed description on how to install the Sitecore CLI and how to use it in the documentation ([Sitecore Content Serialization | Sitecore Documentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-content-serialization.html)).

### Configuration

The configuration for Sitecore Content Serialization consists of two main files.

The `sitecore.json` and files ending with `*.module.json`

The `sitecore.json` file is located in the root folder of the solution. It comes with the XM Cloud Foundation Head starter kit. In here we can configure what `*.module.json` files should be considered for serialization configuration, the plugins with it's particular versions and some general settings for the serialization.

```json
{
  "$schema": "./.sitecore/schemas/RootConfigurationFile.schema.json",
  "modules": ["src/*/*.module.json"]
}
```

Under `modules`, we can see that all files located in the src folder ending with `.module.json` are considered to check what items should be serialized and what to be excluded.

In the starter kit there is already a file called `renderinghost.module.json` located in `src` folder of the foundation head repository.

In here, we can find a configuration what items shall be serialized. You can have multiple of these `module.json` files. Just make sure that the namespace field is unique.

The items object shows an array of includes. Each include defines what item path in XM Cloud should be considered. In the name field we define the name of the folder the item or items should be stored within our filesystem. The path field is the actual path in XM Cloud to the item. The scope field defines if we just want to serialize a single item (`SingleItem`); `ItemAndChildren` meaning its direct first level subitems; `ItemAndDescendants` meaning all subitems underneath a certain item; or `DescendantsOnly` which excludes the item specified in the path. To ignore a path, set the scope to `Ignored`. ([SCS Configuration Reference](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-content-serialization-configuration-reference.html))

### What items should be serialized

Items are required to be serialized when they are created by developers and the code depends on them. Out of the box items provided by the base XM Cloud installation should not be serialized. In XM Cloud, the following items require serialization:

- **Templates** from project folder that have been created during site collection creation: `/sitecore/templates/Project/<site collection name>`
- **Branch Templates** from project folder: `/sitecore/templates/Branches/Project/<site collection name>`
- **Media Library Folder** with the shared and `<site name>` related folder only, not including media assets: `/sitecore/media library/Project/<site collection name>`
- **Layouts** in case there are any custom ones: `/sitecore/layout/Layouts/Project/<site collection name>`
- **Rendering Items** from Project folder: `/sitecore/layout/Renderings/Project/<site collection name>`
- **Placeholder settings** from Project folder. A Folder for our custom Placeholder settings has been created already with the tenant creation: `/sitecore/layout/Placeholder Settings/Project/<site collection name>`
- The **site collection** root item: `/sitecore/content/<site collection name>`
- The **site root** item (incl. the automatically created items like): `/sitecore/content/<site collection name>/<site name>`
  - Home Item: `/sitecore/content/<site collection name>/<site name>/Home`
  - The Media Item: `/sitecore/content/<site collection name>/<site name>/Media`
  - The Data item with it’s direct children for the different data source folders: `/sitecore/content/<site collection name>/<site name>/Data`
  - Dictionary item incl. all subitems: `/sitecore/content/<site collection name>/<site name>/Dictionary`
  - The Presentation section incl. all subitems: `/sitecore/content/<site collection name>/<site name>/Presentation`
  - The Settings sections incl. all subitems: `/sitecore/content/<site collection name>/<site name>/Settings`

### Setup

Please check [`template.module.json`](/learn/accelerate/xm-cloud/appendix-ii/example-code/template-module-json)

Replace the placeholders marked with `<>` with your own data.

- `<SITE_COLLECTION_NAME>` = your Site Collection Name
- `<SITE_NAME>` = your Site name

You can include several sites and site collections as needed.

### Multisite and Multicollection

In a Multisite approach you configure one module per Site Collection, as templates are created per Site Collection and content items can be shared within Site Collections.

## Discussion

### How items are deployed to XM Cloud

Items that are deployed using Sitecore Content Serialization are stored on the target file system instead of the database. Items deployed that way are not meant to be edited from the CM instance. Those are only maintained by developers and shipped by deployments.

If items get edited in a deployed environment, the change is persisted to the DB and is handled prior to the underlying file, meaning that source code changes to that same item/field would never be visible. The item would need to be deleted.

You can configure items to be pushed to the database instead of file system using `postActions` in `xmcloud.build.json`. In that section, you can configure dedicated modules to be used for `postActions`.

Split modules the following way:

- Content related items will be pushed using postActions
  - Home Item
- Developer owned items will be deployed as “Items as Resources”.
  - Templates
  - Branch Templates
  - Media Library Folder
  - Layouts
  - Renderings
  - Placeholder Settings
  - Site collection
  - The site root item
    - The Media Item (under site item)
    - The Data item with it’s direct children for the different data source folders
    - Dictionary item with direct children
    - The Presentation Section incl. all subitem
    - The Settings sections incl. all subitems

### Related Recipes

<Row columns={2}>
  <Link title="Sample template.module.json" link="/learn/accelerate/xm-cloud/appendix-ii/example-code/template-module-json" />
  <Link title="Sample xmcloud.build.json" link="/learn/accelerate/xm-cloud/appendix-ii/example-code/xmcloud-build-json" />
</Row>

### Related Documentation

<Row columns={2}>
  <Link title="Sitecore Content Serialization | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-content-serialization.html" />
  <Link title="Sitecore Content Serialization Reference | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-content-serialization-configuration-reference.html" />
  <Link title="Install Sitecore Command Line Interface | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/install-sitecore-command-line-interface.html" />
  <Link title="The XM Cloud build configuration | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-xm-cloud-build-configuration.html" />
  <Link title="Github - sitecorelabd/xmcloud-foundation-head" link="https://github.com/sitecorelabs/xmcloud-foundation-head" />
  <Link title="The CLI itemres command | Sitecore Documentation" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-cli-itemres-command.html" />
  <Link title="XM Cloud Tutorials - Seralization #5" link="https://www.youtube.com/watch?v=BuErZU0wwKM" />
</Row>
