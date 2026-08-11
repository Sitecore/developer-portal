---
title: 'Audience and insights'
pageType: 'article'
description: 'Unify visitor data, resolve identities, and build audiences you can act on.'
hasSubPageNav: true
hasInPageNav: true
---

Audience and insights is the SitecoreAI capability that collects what visitors do on your site, joins those interactions into one profile per person, and turns that into audiences you can use for personalization, campaigns, and measurement.

Capture events in real time. Unify fragmented profiles through identity resolution. Analyze behaviour with affinities and predictive models. Activate audiences across personalization, segmentation, and AI agents. Measure what happened in performance dashboards.

> Audience and insights is in phased rollout, so your environment may not have it yet. And if you are running Sitecore CDP today, that product is still live and documented — see [If you are on Sitecore CDP](#if-you-are-on-sitecore-cdp) at the bottom of this page.

## Getting started

<Row columns={2}>
  <Article title="Overview" description="What Audience and insights does, how the capture-to-measure flow works, and how profile deletion is handled." link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/audience-and-insights.html" linkText="Read more" />
  <Article title="Identity resolution" description="Link anonymous and known visits into one profile across devices, channels, and sessions. Off by default — you opt in." link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/identity-resolution/identity-resolution.html" linkText="Read more" />
  <Article title="Identity rules" description="Define which identifier SitecoreAI matches on. Most environments use one rule, usually email address." link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/identity-resolution/identity-rules.html" linkText="Read more" />
  <Article title="Affinities" description="Score what visitors care about based on the pages they view. Scores sit on the profile and update in real time." link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/affinities.html" linkText="Read more" />
  <Article title="Profiles" description="Browse recent visitors, filter by profile type, search by identifier, and open individual sessions, events, and affinities." link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/profiles/profiles.html" linkText="Read more" />
  <Article title="Audiences" description="Build reusable groups from profile attributes, behaviour, events, sessions, and affinities using Audience builder." link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/audiences/audiences.html" linkText="Read more" />
</Row>


## Developer documentation

Data reaches Audience and insights through events sent from your site. For JSS Next.js and Angular apps connected to SitecoreAI, use the Sitecore Cloud SDK rather than the Engage SDK.

<Row columns={2}>
  <Link title="Sitecore Cloud SDK" link="https://doc.sitecore.com/sdk/en/developers/005/cloud-sdk/sitecore-cloud-sdk-for-javascript.html" />
  <Link title="Cloud SDK vs Engage SDK" link="https://doc.sitecore.com/sdk/en/developers/005/cloud-sdk/cloud-sdk-comparison-charts.html" />
  <Link title="Data lake export service" link="https://doc.sitecore.com/sai/en/developers/sitecoreai/data-lake-export-service/data-lake-export-service.html" />
  <Link title="SitecoreAI glossary" link="https://doc.sitecore.com/sai/en/developers/sitecoreai/sitecoreai-glossary.html" />
</Row>

## Working with the data

<Row columns={3}>
  <Link title="Get started with audiences" link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/audiences/get-started-with-audiences.html" />
  <Link title="Attributes for audience rules" link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/audiences/available-attributes-for-audience-rules.html" />
  <Link title="Audience rule comparators" link="https://doc.sitecore.com/sai/en/users/sitecoreai/audience-and-insights/audiences/audience-rule-comparators.html" />
</Row>

## If you are on Sitecore CDP

Sitecore CDP is a separate, still-supported product. If you landed here looking for guest profiles, batch segmentation, audience export, or the Developer Center, those live in the CDP documentation.

<Row columns={2}>
  <Article title="Sitecore CDP documentation" description="Guest profiles, batch segmentation, audience export, dashboards, and the Developer Center." link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/index-en.html" linkText="Read more" />
  <Article title="Accelerate for CDP and Personalize" description="Recipes for CDP and Personalize setup, discovery, identity strategy, and integration." link="/learn/accelerate/cdp-personalize" linkText="Read more" />
</Row>

<Row columns={2}>
  <Article title="Before you start sending data" link="https://doc.sitecore.com/cdp/en/developers/api/before-you-start-sending-data.html"  description="Before you start sending data, you must identify the type of API you want to use and ensure you model the data correctly for that API, and for the data model version"/>
  <Article title="Integrating with Sitecore CDP" link="https://doc.sitecore.com/cdp/en/developers/api/integrating-with-sitecore-cdp.html" description="To collect  data and send it to Sitecore CDP, you first have to integrate your app with Sitecore CDP." />
  <Article title="Stream API" link="https://doc.sitecore.com/cdp/en/developers/api/stream-api.html" description="The Stream API lets you send real-time behavioral and transactional data about the users of your application to Sitecore CDP"/>
  <Article title="Batch API" link="https://doc.sitecore.com/cdp/en/developers/api/batch-api.html" description="The Batch API lets you efficiently upload large amounts of data to Sitecore CDP."/>
  <Article title="Integrating Sitecore XM with CDP" description="Connect XM content delivery to CDP data capture." link="/learn/integrations/xm-smarthub-cdp" linkText="Read more" />
  <Article title="Integrating Commerce with CDP" description="Use customer data with Commerce for abandoned cart scenarios and commerce personalization." link="/learn/integrations/oc-cdp" linkText="Read more" />
</Row>

<hr/>
<Group columns="3">
  <GroupItem>
    ### Learning
    - [Sitecore Learning Portal](https://learning.sitecore.com)
    - [Sitecore Essentials](https://learning.sitecore.com/pathway/sitecore-essentials)
  </GroupItem>

  <GroupItem>
    ### Support
    - [Support Portal](https://support.sitecore.com)
    - [Cloud Status](https://status.sitecore.com)
    - [Knowledge Base](https://support.sitecore.com/kb)
  </GroupItem>

  <GroupItem>
    ### Community
    - [Sitecore Community](https://community.sitecore.com)
    - [Stack Exchange](https://sitecore.stackexchange.com)
    - [MVP Program](https://mvp.sitecore.com/)
  </GroupItem>
</Group>