---
title: 'Setup Sitecore Content Serialization'
description: 'Learn how to setup Sitecore Content Serialization (SCS) for XM Cloud'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-05-30'
---

## Context

Everything in XM Cloud is an item. Content, Configuration, Customizations, … Some of those items are tightly coupled to functionality provided by Developers. So, we need to ensure that items our code depends on are deployed along with the code.

## Execution

Items are persisted into source code repository by using Sitecore Content Serialization. Sitecore Content Serialization is able to connect to XM Cloud via the Content Management API and pull items from XM Cloud to our local in yml format, but also push the item representation we have in our local filesystem to an XM Cloud instance. This enables you to push the same set of items to different environments.

The Items that are considered for synchronization can be configured.

### Sitecore CLI

Sitecore Content Serialization can be achieved using the Sitecore CLI. You can find a detailed description on how to install the Sitecore CLI and how to use it in the documentation ([Sitecore Content Serialization](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-content-serialization.html)).

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

- **Modules** from the `/sitecore/system/settings/project` folder, each site collection must have a corresponding headless module created
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

## Insights

### How items are deployed to XM Cloud

There are two distinct methods for deploying items to XM Cloud with Sitecore Content Serialization, each catering to different requirements as detailed below.

<Alert status="info" mb={4}><AlertIcon />If items get edited in a deployed environment, the change is persisted in the database and is handled prior to the underlying file (IAR), meaning that source code changes to that same item/field would never be applied. The item must be deleted for the file system (IAR) to regain precedence.</Alert>

#### Deploying Items to the File System using Items as Resources (IAR)

This pertains to items intended for developer control and should not be modified within the Content Management environment, except when potential impacts have been duly considered. For configuring which items are deployed this way, you would adjust the [`xmcloud.build.json`](/learn/accelerate/xm-cloud/appendix-ii/example-code/xmcloud-build-json) file located at the root of your solution. To configure the items that will be deployed to the file system (IAR), refer to the example below:

```json
{
	"deployItems: {
		"modules": [ "Multisite", "Localization", ... ]
	},
	...
}
```

<br /><br />
In the given code example, we use `deployItems` to define which module definitions (like `Multisite.module.json`) from our solution will be deployed as Items as Resources (IAR) onto the XM Cloud file system. It is important to remember that you can use wildcards, to simplify the configuration of items.

Here are some examples of items that developers should configure and deploy on the file system:

- Modules
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
  - The Presentation Section incl. all subitems
  - The Settings sections incl. all subitems

<Alert status="info" mb={4}><AlertIcon />Never use this method to serialize and synchronize individual media items - only use it for the parent media item folder. Using this method for individual media items can lead to performance issues. If you need to synchronize media items, utilize the Post Deploy Action. This will efficiently store your media items in Azure Blob Storage.</Alert>

#### Deploying Items to the Database using Post Deploy Actions

This refers to items that are typically managed by a content author within the Content Management system. These items, such as the `Home` item, are beneficial for content authors to have when they start creating content.

To set up items for the Content Management database, you will need to modify the [`xmcloud.build.json`](/learn/accelerate/xm-cloud/appendix-ii/example-code/xmcloud-build-json) file located at the root of your solution. This involves configuring the Post Deploy Actions section as follows:

```json
{
	...,
	"postActions": {
		"actions": {
			"scsModules": {
				"modules": [ ... ]
			}
		}
	}
}
```

<br /><br />
In the provided code, you're defining a post-deploy action known as scsModules. This action uses the same modules definition as you would use with deployActions. For clarity, you should create and configure specific modules that define the items needed for your database deployments in XM Cloud.

## Related Recipes

<Row columns={2}>
  <Link title="Sample template.module.json" link="/learn/accelerate/xm-cloud/appendix-ii/example-code/template-module-json" />
  <Link title="Sample xmcloud.build.json" link="/learn/accelerate/xm-cloud/appendix-ii/example-code/xmcloud-build-json" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Sitecore Content Serialization" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-content-serialization.html" />
  <Link title="Sitecore Content Serialization Reference" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-content-serialization-configuration-reference.html" />
  <Link title="Install Sitecore Command Line Interface" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/install-sitecore-command-line-interface.html" />
  <Link title="The XM Cloud build configuration" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-xm-cloud-build-configuration.html" />
  <Link title="Github - sitecorelabd/xmcloud-foundation-head" link="https://github.com/sitecorelabs/xmcloud-foundation-head" />
  <Link title="The CLI itemres command" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-cli-itemres-command.html" />
  <Link title="XM Cloud Tutorials - Seralization #5" link="https://www.youtube.com/watch?v=BuErZU0wwKM" />
</Row>
