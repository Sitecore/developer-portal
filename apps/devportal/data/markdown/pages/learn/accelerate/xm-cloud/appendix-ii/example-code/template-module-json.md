---
title: 'template.module.json'
description: 'Detailed breakdown of template.module.json'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: false
---

## Sample Template SCS Configuration File

Below is an example Sitecore Content Serialization (SCS) file that can be used when defining a site collection and site in XM Cloud. For a more detailed breakdown of the contents of this example file, refer to the next section labeled "Detailed Breakdown" below.

If you haven't already, refer to the guide on setting up Content Serialization and Creating a Site to learn more about where to find the values for `<SITE_COLLECTION_NAME>` and `<SITE_NAME>` used in the example below. It's important to note, that this template will require customization, especially if you have more than one site under a single site collection. Details on how to extend for multisite under a collection are detailed further below in the detailed breakdown section.

```json
{
  "$schema": "../.sitecore/schemas/ModuleFile.schema.json",
  "namespace": "Project.<SITE_COLLECTION_NAME>",
  "items": {
    "includes": [
      {
        "name": "templatesProject",
        "path": "/sitecore/templates/Project/<SITE_COLLECTION_NAME>",
        "allowedPushOperations": "CreateUpdateAndDelete"
      },
      {
        "name": "branchesProject",
        "path": "/sitecore/templates/Branches/Project/<SITE_COLLECTION_NAME>",
        "allowedPushOperations": "CreateUpdateAndDelete"
      },
      {
        "name": "projectMediaFolders",
        "path": "/sitecore/Media Library/Project/<SITE_COLLECTION_NAME>",
        "rules": [
          {
            "path": "/shared",
            "scope": "SingleItem",
            "allowedPushOperations": "CreateOnly"
          },
          {
            "path": "/<SITE_NAME>",
            "scope": "SingleItem",
            "allowedPushOperations": "CreateOnly"
          }
        ]
      },
      {
        "name": "layoutsProject",
        "path": "/sitecore/Layout/Layouts/Project/<SITE_COLLECTION_NAME>",
        "allowedPushOperations": "CreateUpdateAndDelete"
      },
      {
        "name": "projectRenderings",
        "path": "/sitecore/Layout/Renderings/Project/<SITE_COLLECTION_NAME>",
        "allowedPushOperations": "CreateUpdateAndDelete"
      },
      {
        "name": "projectPlaceholderSettings",
        "path": "/sitecore/Layout/Placeholder Settings/Project/<SITE_COLLECTION_NAME>",
        "allowedPushOperations": "CreateUpdateAndDelete"
      },
      {
        "name": "tenantRoot",
        "path": "/sitecore/content/<SITE_COLLECTION_NAME>",
        "scope": "SingleItem",
        "allowedPushOperations": "CreateAndUpdate"
      },
      {
        "name": "site",
        "path": "/sitecore/content/<SITE_COLLECTION_NAME>/<SITE_NAME>",
        "rules": [
          {
            "path": "/home",
            "scope": "SingleItem",
            "allowedPushOperations": "CreateOnly"
          },
          {
            "path": "/Media",
            "scope": "SingleItem",
            "allowedPushOperations": "CreateAndUpdate"
          },
          {
            "path": "/Data",
            "scope": "ItemAndChildren",
            "allowedPushOperations": "CreateAndUpdate"
          },
          {
            "path": "/Dictionary",
            "scope": "ItemAndDescendants",
            "allowedPushOperations": "CreateOnly"
          },
          {
            "path": "/Presentation",
            "scope": "ItemAndDescendants",
            "allowedPushOperations": "CreateUpdateAndDelete"
          },
          {
            "path": "/Settings/Site Grouping",
            "scope": "ItemAndDescendants",
            "allowedPushOperations": "CreateOnly"
          },
          {
            "path": "/Settings",
            "scope": "ItemAndChildren",
            "allowedPushOperations": "CreateAndUpdate"
          },
          {
            "path": "*",
            "scope": "Ignored"
          }
        ]
      }
    ]
  }
}
```

## Detailed Breakdown

In the above section, we provided an example template that can be used when defining a new site collection, however, we will now walk through and break down this file further.

### Basic File Configuration

```json
{
  "$schema": "../.sitecore/schemas/ModuleFile.schema.json",
  "namespace": "Project.<SITE_COLLECTION_NAME>",
  "items": {
    "includes": []
  }
}
```

This configuration will provide the basis to our Content Serialization strategy for the current site collection/site/feature that you are implementing. The `$schema` should reference your root schema and provides a blueprint to the structure of our JSON file (this file is provided as part of the foundation head repository). The `namespace` will provide a unique identifier when working with the CLI or when pushing or pulling the serialized items to your environment. Lastly, there is the `includes` element which will provide details on what items in Sitecore should be controlled by serialization (i.e. the file system). It's important that you only serialize items that should be controlled by the developer, such as templates that your code relies on or items representing folders where content editors will add there content. In the example file, we do not use excludes in this configuration file, however these could be useful as well, when there are specific folders you would like to ensure is not controlled by serialization.

### Includes Configuration

#### Tenant Root

```json
{
  "name": "tenantRoot",
  "path": "/sitecore/content/<SITE_COLLECTION_NAME>",
  "scope": "SingleItem",
  "allowedPushOperations": "CreateAndUpdate"
}
```

This configuration node of the example file will provide a tenant root definition for the Site Collection. This provides a containing folder for the Sites collection items which will typically be their sites and the folders within those sites (which we define in the `Site` Content definition further in the configuration file). As such, the scope `SingleItem` will serialize and only deploy the `/sitecore/content/<SITE_COLLECTION_NAME>` item, while the push operation will only deploy this item if it doesn't already exist in the environment, or if the item in the file system has changed.

#### Placeholder Settings

```json
{
  "name": "projectPlaceholderSettings",
  "path": "/sitecore/Layout/Placeholder Settings/Project/<SITE_COLLECTION_NAME>",
  "allowedPushOperations": "CreateUpdateAndDelete"
}
```

The placeholder configuration node provides a place for the Site Collection placeholder settings to be placed. The configuration is set without a scope or additional rules which means all descendants of the current path will be tracked by the file system in each environment. The push operations with the setting of `CreateUpdateAndDelete` will provide complete control by the file system in your current environments content tree. This means whatever is present in the file system, or not present (such as the item existed but was later removed) will have control over what is in your content tree.

It's important to note that all your Placeholder settings will be in `/Project/<SITE_COLLECTION_NAME>` and should not appear anywhere else.

#### Layouts

```json
{
  "name": "layoutsProject",
  "path": "/sitecore/Layout/Layouts/Project/<SITE_COLLECTION_NAME>",
  "allowedPushOperations": "CreateUpdateAndDelete"
}
```

The layouts configuration node is similar to the placeholder settings, in which it will provide a folder in which you can provide your layout definitions. This configuration does not include a scope or any rules, so it means anything underneath `/Project/<SITE_COLLECTION_NAME>` will be tracked by serialization. This means that you should not place layouts outside of this path. The push operations with the setting of `CreateUpdateAndDelete` will provide complete control by the file system in your current environments content tree. The means whatever is present in the file system, or not present (such as the item existed but was later removed) will have control over what is in your content tree.

#### Renderings

```json
{
  "name": "projectRenderings",
  "path": "/sitecore/Layout/Renderings/Project/<SITE_COLLECTION_NAME>",
  "allowedPushOperations": "CreateUpdateAndDelete"
}
```

The renderings configuration node is where you'll place renderings for XM Cloud. The above configuration is similar to the `Layouts` and `Placeholder` Settings, because it doesn't define any additional scope or rules, so therefore will serialize in the file system anything underneath `/Project/<SITE_COLLECTION_NAME>` which should be the only place you'll place your renderings. The `allowedPushOperations` with the value of `CreateUpdateAndDelete` will mean that the file system will have complete control over what's in your environments content tree. This means whatever is present in the file system, or not present (such as the item existed but was later removed) will have control over what is in your content tree.

#### Branches

```json
{
  "name": "branchesProject",
  "path": "/sitecore/templates/Branches/Project/<SITE_COLLECTION_NAME>",
  "allowedPushOperations": "CreateUpdateAndDelete"
}
```

The branches configuration node is similar to other nodes in this configuration file, in which it will provide a folder in which you can place your branch configuration. This configuration does not include a scope or any rules, so it means anything under `/Project/<SITE_COLLECTION_NAME>` will be serialized to the file system. It's important that this is the only place that you place your branches. The `allowedPushOperations` with the value of `CreateUpdateAndDelete` will mean that the file system will have complete control over what's in your environments content tree. The means whatever is present in the file system, or not present (such as the item existed but was later removed) will have control over what is in your content tree.

#### Templates

```json
{
  "name": "templatesProject",
  "path": "/sitecore/templates/Project/<SITE_COLLECTION_NAME>",
  "allowedPushOperations": "CreateUpdateAndDelete"
}
```

This will add the root Site Collection template folder item to serialization. We have set this to `CreateUpdateAndDelete`. Because this is an include without any extra rules, it will by default include all descendants of the specified path. This means all your templates will be included automatically in your serialized items because the `Project/<SITE_COLLECTION_NAME>` folder is the only location where templates should be created.

### Project Media Folders

```json
{
  "name": "projectMediaFolders",
  "path": "/sitecore/Media Library/Project/<SITE_COLLECTION_NAME>",
  "rules": [
    {
      "path": "/shared",
      "scope": "SingleItem",
      "allowedPushOperations": "CreateOnly"
    },
    {
      "path": "/<SITE_NAME>",
      "scope": "SingleItem",
      "allowedPushOperations": "CreateOnly"
    }
  ]
}
```

This will add the Site collection media folder and include the shared folder and the `<SITE_NAME>` media folders. These folders must exist with the same GUID in every environment. The shared rule is defined to create a shared location for any number of sites inside the site collection. This rule should only ever be defined once.

For each of the following nodes, it defines additional paths per Site name, and you should define one per each site that you have created in your site collection. So if you have two sites in this collection, you would have three rules defined, one for the shared folder, and then two for each of the sites in this collection.

```json
{
  "path": "/<SITE_NAME>",
  "scope": "SingleItem",
  "allowedPushOperations": "CreateOnly"
}
```

It's important to never define the same node twice, since this will lead to clashes when pushing or pulling items from Sitecore. Each of these configuration are scoped with `SingleItem` and `CreateOnly`, so that once they are created in your environment, any updates to those items will not be updated in your environment. Also any changes within those paths, will also not be tracked by serialization, because the data within these folders are non-developer content, managed by content editors.

#### Site Content

```json
{
  "name": "<SITE_NAME>",
  "path": "/sitecore/content/<SITE_COLLECTION_NAME>/<SITE_NAME>",
  "rules": [
    {
      "path": "/home",
      "scope": "SingleItem",
      "allowedPushOperations": "CreateOnly"
    },
    {
      "path": "/Media",
      "scope": "SingleItem",
      "allowedPushOperations": "CreateAndUpdate"
    },
    {
      "path": "/Data",
      "scope": "ItemAndChildren",
      "allowedPushOperations": "CreateAndUpdate"
    },
    {
      "path": "/Dictionary",
      "scope": "ItemAndDescendants",
      "allowedPushOperations": "CreateOnly"
    },
    {
      "path": "/Presentation",
      "scope": "ItemAndDescendants",
      "allowedPushOperations": "CreateUpdateAndDelete"
    },
    {
      "path": "/Settings/Site Grouping",
      "scope": "ItemAndDescendants",
      "allowedPushOperations": "CreateOnly"
    },
    {
      "path": "/Settings",
      "scope": "ItemAndChildren",
      "allowedPushOperations": "CreateAndUpdate"
    },
    {
      "path": "*",
      "scope": "Ignored"
    }
  ]
}
```

This section of the example file, will sync initial items between your file system and the environment you are working with, within the path `/sitecore/content/<SITE_COLLECTION_NAME>/<SITE_NAME>`, for the current site. This is important because this creates the initial shell of our headless application. Within this element, there are different rules defined that control this item's children items, which are broken down below. If you have more than one site per site collection, you will define this block per site. In other words, if you had a Site Collection called SUGCON and had two sites in that site collection, then you would define this whole section twice in your `template.module.json`, one for each of the file.

The `/<SITE_COLLECTION_NAME>/<SITE_NAME>/home` item is marked as a `SingleItem` with the push restrictions of CreateOnly. This means that only this item, and not its children or descendants will be serialized in the file system. It’s also important to note that the push restriction of CreateOnly will keep any changes after the initial deployment of this item to an environment will not make changes to that item. This is important because, if a content editor makes a change to the layout of the home item, as long as that home item exists in the environment, those changes to the home item will not be overwritten.

The `/Media` item is similarly marked with `SingleItem` which also mentions it will not keep track of any children/descendant items, but it is different from the home item because its push operation is set to `CreateAndUpdate` which means that changes to the item in the file system/source control, will make changes to the item on the environment.

The `/Data` and `/Settings` items are marked with `ItemAndChildren` which means it will serialize the current item and any direct children of that folder (ie. /Settings/Redirects). This rule is also configured with the push operation of `CreateAndUpdate` which will create and/or update the items that are serialized and also exist in the environment. Or if the current serialized items

The `/Dictionary` rule has a scope of `ItemAndDescendants` defined, which will keep track of any level of items underneath this path. However with the push operations configured with just `Create` it means that it will only ever create these dictionary items in environments where the items do not currently exist, but exist in the file system.

The `/Presentation` rule has a scope of `ItemAndDescendants` defined, which will keep track of any level of items underneath this path. It also defines a `allowedPushOperations` with a value of `CreateUpdateAndDelete` which will give full control of what exists in your environments content tree, based on what is present or not present (if an item existed but was later removed) in serialization in the file system.

The `/Settings/Site Grouping` rule has a scope of `ItemAndDescendants` defined, which will keep track of any level of items underneath this path. It also defines an `allowedPushOperations` with a value of `CreateOnly` which means that the file system will only ever create items if they do not exist in the content tree in your environment. This is configured like this, so that content editors can apply changes to items within this path, and serialized items in the file system, will not overwrite these items. It will however create a new item, if for some reason the `/Settings/Site Grouping` item is removed.

The last rule with path `*` and a scope of `Ignored` will prevent any other folders or items from being tracked by this configuration. This means for example, if you have an item at the path of `/sitecore/content/<SITE_COLLECTION_NAME>/<SITE_NAME>/Overview` that it would be ignored and not get added to a serialized item when you run dotnet ser pull and will also never get overwritten in the environment that you are deploying these serialized items to.
