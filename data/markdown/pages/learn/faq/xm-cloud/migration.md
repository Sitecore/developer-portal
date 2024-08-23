---
product: ['xm-cloud']
title: 'Migration'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this FAQ can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## Do you have to be on Sitecore XM/XP 10.2 to move to XM Cloud?

It will depend on how a customer decides to upgrade. For example, customers who are on older versions of Sitecore when they go through an upgrade process, don't always choose to do the incremental upgrades (where the implementation team increments through every version of Sitecore to get to their end goal). Instead, the implementation team creates a new instance of Sitecore XM 10.2 for example, and then begins to migrate or move all of those assets into the new instance. If a team takes that approach, then you will not have the prerequisite of doing XM/XP 10.2 first. However, if you wanted to validate your solution and get it ready for XM Cloud, then upgrading to XM/XP 10.2 now is a good choice as well. You don't have to be on 10.2 prior to going to XM Cloud if part of your migration strategy is doing the upgrade with the move.

## Can SXA sites migrate to XM Cloud?

Sitecore XM Cloud comes with a website starter kit based on Headless SXA. Sitecore has also started converting SXA in Sitecore XM be headless first, with headless being the first class citizen.

As with any SXA implementation, teams are going to be able to add additional components really easily. In Sitecore XM Cloud, Headless SXA is included in the base XM Cloud image, out of the box,with all extensions that you would expect. It supports the same abstractions that were supported before, such as rendering variants, styles, and grids. Sitecore is focused on providing the full set of functionality to allow you to migrate and make that process as seamless as possible for customers.

## Is moving from Sitecore XM/XP to XM Cloud a rebuild?

One of the great things about XM Cloud is we're building on all of our existing technology. If customers are on Sitecore XM/XP 10.2 today, using our headless services technology, building a modern frontend, and possibly even using Experience Edge, they will be in a good spot to take that solution and move it to XM Cloud.

Essentially, there are two paths: **migrate** or **rebuild**.

For many of our customers the rebuild is likely the best path. This option leaves no technical debt, and no long painful steps to port things over from a previous implementation.

Another benefit of a rebuild is that customers on more traditional MVC or WebForms builds can achieve significant benefits through a Jamstack architecture: Fast site performance (Lighthouse scores) through increased use of static site generation, significantly improved scalability, increased resilience, and lower app hosting costs. All achieved through popular frontend development frameworks like Next.js, React, Vue.js, etc

Some implementations can quickly and easily move straight to XM Cloud because they're on modern technologies. They're headless. Some of them are already adopting Experience Edge or they preparing for it. Those implementations are really good candidates to quickly move to XM Cloud. There is a level of variance between how much they have to rebuild versus how much they can migrate and port. This type of solution is a good candidate for migration.

If the implementation is headless and on a slightly outdated version of headless services, or maybe they're using content delivery servers rather than Experience Edge for publishing, there may be a little bit more work to do for this scenario to migrate.

If the build is on an older implementation, from before Sitecore XM 10.x, and the implementation is using a lot of XP features in use and they have a lot of MVC code then the amount of work for a migration will be higher. This should be balanced against the effort for a rebuild in making the decision.

## Can you touch on the roadmap (or intent) for migrating SXA sites to XM Cloud?

To deploy existing solutions on XM Cloud, the following migration related activities include (but not limited to):

- Upgraded to Sitecore XM 10.3 (when available)
- Convert to a headless architecture
- Update publishing to Experience Edge
- Client app content retrieval from Experience Edge
- Removal of all XP dependencies
- Conversion of MVC to Headless Client application
