---
title: 'Sample template.module.json | Sitecore Accelerate for partners'
description: 'Sample template.module.json file for Sitecore Content Serialization'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: false
---

**Sample template.module.json for Sitecore Content Serialization**

```json
{
  "$schema": "../.sitecore/schemas/ModuleFile.schema.json",
  "namespace": "Project.HeadlessSxaExample",
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
            "allowedPushOperations": "Create"
          },
          {
            "path": "/Presentation",
            "scope": "ItemAndDescendants",
            "allowedPushOperations": "CreateUpdateAndDelete"
          },
          {
            "path": "/Settings",
            "scope": "ItemAndChildren",
            "allowedPushOperations": "CreateAndUpdate"
          },
          {
            "path": "/Settings/Site Grouping",
            "scope": "ItemAndDescendants",
            "allowedPushOperations": "CreateOnly"
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
