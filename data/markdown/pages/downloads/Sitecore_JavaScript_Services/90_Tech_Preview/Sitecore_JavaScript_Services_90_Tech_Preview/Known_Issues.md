---
title: "Known Issues"
description: ""
origin: https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services/90_Tech_Preview/Sitecore_JavaScript_Services_90_Tech_Preview/Known_Issues
---

The list of known issues which are present in the current version of Sitecore JavaScript Services:

-   Support React.js only.
-   Package deployment via CLI is not supported yet. Users are advised to use Update Installation Wizard for app package deployment.
-   Headless mode doesn't support authentication against Sitecore or SSO.
-   The `npm run setup` won't work in automated build environment because of an interactive prompt. Please use `npm install` and either create `scjssconfig.json` file manually under `.\internals` or invoke scripts in `.\internals` manually.
-   Changing an item's Display Name does not trigger workflow in Sitecore, and thus does not push JSS route items into [Content Mode](#/dev-workflows?id=content-workflow-and-developer-overwrite). This could result in a changed Display Name being overwritten on the next import. When changing a route's Display Name without any other content changes, manually push the route into Content Mode using the `To Content Mode` workflow command in the `Review` ribbon.
-   Links in multi-site (multi-app) environment may not be resolved properly in Experience Editor if you log in using a host name that is not configured for the current application. This issue is not specific to JSS. Please make sure to login to Experience Editor using the host name configured for your JSS app. (Issue #187).

See more on known issues [here](https://jss.sitecore.net/#/release-notes?id=known-issues).