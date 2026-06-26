---
title: 'Sample xmcloud.build.json'
description: 'Sample xmcloud.build.json file for Sitecore Content Serialization'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: false
lastUpdated: '2025-09-26'
---
Sample template.module.json for Sitecore Content Serialization below - an example is also available for [xmcloud-starter.js](https://github.com/Sitecore/xmcloud-starter-js/blob/main/xmcloud.build.json).

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

```json
{
  "deployItems": {
    "modules": [
      "Foundation.*",
      "Feature.*",
      "Project.*"
    ]
  }
  "renderingHosts": {
    "xmcloudpreview": {
      "path": "./src/sxastarter",
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
