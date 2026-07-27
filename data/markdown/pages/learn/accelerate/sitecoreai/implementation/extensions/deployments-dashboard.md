---
title: 'Deployments Dashboard'
description: 'Learn how to build a Deployments Dashboard in XM Cloud to monitor and trigger redeploys directly from the platform.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']  
lastUpdated: '2025-08-22'
created: '2025-08-22'
audience: ['Architect','Technical Implementer']
---

## Context
XM Cloud requires to host your front-end website on a serverless hosting provider such as Vercel and Netlify. Outside of [XM Cloud Deploy](https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html), visibility into deployments often requires direct access to the these hosting providers which always brings up queries such as who needs access and troubleshooting needs.

> Other hosting providers such as Netlify can be approached, but in this example we’ll be focusing on Vercel. The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.


## Execution
Marketplace allows us to build a Deployment Dashboard directly accessible from XM Cloud to monitor and create new deployments.  The [Vercel Deployments Dashboard](https://github.com/dogabenli/xmc-vercel-deloyments-dashboard) provides a Next.js utility app that surfaces deployments and allows controlled redeploys through the [Vercel API](https://vercel.com/docs/rest-api/reference). 

This app uses the [Full screen extension mode](https://doc.sitecore.com/mp/en/developers/marketplace/extension-points.html#standalone) in XM Cloud. This will make it available through the navigation header > Apps. This keeps the deployments in context of this XM Cloud instance.

<video src="/images/learn/accelerate/xm-cloud/deployment-dashboard/vercel-deployments-marketplace.mp4" controls></video>
<br/><br/>

You can find the code to setup, or extend on GitHub - [Vercel Deployments Dashboard](https://github.com/dogabenli/xmc-vercel-deloyments-dashboard).

<img src="/images/learn/accelerate/xm-cloud/deployment-dashboard/marketplace-vercel-deployments-2.png" alt="deployments dashboard"/>
<br/><br/>


## Insights
There’s plenty of ways this can be extended such as integrate with XM Cloud publish events to trigger redeploys automatically, but guard against build floods. Keep in mind:

- To ever distribute broad-scope Vercel tokens. Limit to project-level if possible and store secrets in your org’s secret manager.
- Explicitly configure `VERCEL_GIT_BRANCH` and `VERCEL_TARGET` to “accidental deploys” to the wrong environment.
- Hosting the dashboard on Vercel with SSO is the best balance between visibility and control. Local-only use is fine for developer troubleshooting but doesn’t scale for other audiences.


## Related Recipes
<Row columns={2}>
   <Link title="Hosting the Web Application" link="/learn/accelerate/xm-cloud/pre-development/hosting-applications/hosting-web-application" />
</Row>

## Related Documentation
<Row columns={2}>
  <Link title="XM Cloud Deploy" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-deploy-app.html" />
  <Link title="Extension points" link="https://doc.sitecore.com/mp/en/developers/marketplace/extension-points.html#standalone"/>
  <Link title="Marketplace Getting Started" link="https://developers.sitecore.com/learn/getting-started/marketplace" />
</Row>


