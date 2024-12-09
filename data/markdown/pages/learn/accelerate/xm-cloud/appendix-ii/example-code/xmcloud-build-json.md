---
title: 'Sample xmcloud.build.json'
description: 'Sample xmcloud.build.json file for Sitecore Content Serialization'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: false
lastUpdated: '2024-01-11'
---

**Sample template.module.json for Sitecore Content Serialization**

```json
{
  "deployItems": ["*.module.json"],
  "renderingHosts": {
    "xmcloudpreview": {
      "path": "./headapps/nextjs-starter",
      "nodeVersion": "16.15.1",
      "jssDeploymentSecret": "110F1C44A496B45478640DD36F80C18C9",
      "enabled": true,
      "type": "sxa",
      "lintCommand": "lint",
      "startCommand": "start:production",
      "buildCommand": "build",
      "runCommand": "next:start"
    }
  },
  "postActions": {
    "actions": {
      "warmUpCm": {
        "urls": ["/sitecore/shell", "/sitecore/shell/Applications/Content%20Editor.aspx?sc_bw=1", "/sitecore/client/Applications/Launchpad"]
      },
      "populateSchema": {
        "indexNames": []
      },
      "reindex": {
        "indexNames": []
      }
    }
  }
}
```
