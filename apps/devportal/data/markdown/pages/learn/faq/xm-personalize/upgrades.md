---
product: ['xm', 'personalize']
title: 'Migration'
hasInPageNav: true
hasSubPageNav: true
cdpTags: ['xm', 'personalize']
---

**Is there a 'better together story' with Experience Edge + Personalize here? If so, can we get the high-level positioning to simplify to clearly outline?**

Yes, since Personalize works client-side, it is a great option to use Edge and Personalize together.

**Can you provide a guideline for my upgrade/implementation on XM so it will be compatible with XM Cloud?**

## Current State Scenarios

The following represent a small set of likely scenarios that will be identified in the current state audit. For each scenario, we will outline the high-level roadmap to migrate the implementation to be ready for XM Cloud. For these scenarios, it is assumed that the previous steps have been taken to upgrade the code base to 10.2.

### Client has XP but does not use personalization

This is the simplest migration path

Migration Steps:

- Layer in Personalize to existing site to begin capturing data
- Select migration approach
- Full Rebuild
- Complete as a greenfield project
- Upgrade
- Upgrade code base to 10.2
- Full Front-End rebuild/Setup MVC Static Rendering
- Create a plan for Personalization and testing on the new Jamstack site

### Uses personalization, no requirement to maintain historical interaction data

The steps for those that are using Personalization or AB testing in Sitecore XP, but who are able to start fresh with Personalize data, are very similar to those with no personalization:

Migration Steps:

- Layer in Personalize to existing site to begin capturing data
- Based on the current state audit, create full stack or web experiences with decision models based on the personalization rules being used in XP as needed
- Create any AB testing web experiments required
- Select migration approach
- Full Rebuild
- Complete as greenfield project
- Upgrade
- Upgrade code base to 10.2
- Full Front-End rebuild/Setup MVC Static Rendering

For further information, you could check:
[https://vercel.com/features/edge-functions ](https://vercel.com/features/edge-functions%C2%A0)
