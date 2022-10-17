---
title: 'Migration'
hasInPageNav: true
---

**Do you have to be on 10.2 to move to XM Cloud?**  
It will depend on how a customer decides to upgrade. For example, customers who are on older versions of Sitecore when they go through an upgrade process, don't choose to do the incremental upgrades where they increment through every version of Sitecore to get to their end goal, instead, they create a new instance of Sitecore 10.2 for example, and then start to migrate or move all of those assets into the new instance. If you take that approach, then you don't have the prerequisite of doing 10.2 first. However, if you wanted to validate your solution and get it ready for XM Cloud, then upgrading to 10.2 now is a good choice as well. You don't have to be on 10.2 prior to going to XM Cloud if part of your migration strategy is doing the upgrade with the move.

**Can we migrate SXA sites to XM Cloud?**  
XM cloud is the website with starter Kit is based on SXA headless. We've also started converting SXA to be headless first and headless, being the first class citizen.  
But like with any SXA, you're going to be able to add additional components really easily. We will continue also to enhance Horizon. With all of the SXA extensions that you would expect, SXA is out of the box in the base image and as you would expect, it supports the same abstractions that we did before things like rendering variance which they are slightly differently structured and keep the sense of the feature, things like styles and grids are still in there. We are focused on providing the full set of functionality to allow you to migrate and make that process as seamless for you.

**Is moving from XM/XP to XM Cloud a rebuild?**   
One of the great things about XM Cloud is we're building on all of our existing technology. And if customers today are on Sitecore 10.2, they're using our headless services technology. They're building a modern frontend, and even if they're using Edge; to take that solution and move it to XM Cloud will be very simple.

Basically, there are two paths: migrate or rebuild. For many of our customers the rebuild is likely the best path... no tech debt, no long painful steps to port things over.

Another benefit of a rebuild is that customers can achieve significant benefits through a Jamstack architecture: Fast site performance (Lighthouse scores) through increased use of static site generation, significantly improved scalability, increased resilience, and lower app hosting costs. All achieved through popular frontend development frameworks like Next.js, React, Vue.js, etc

If they're headless and on a little bit of an outdated version of headless services or maybe they're using content delivery servers rather than Edge for publishing, there will be a little more work to do.

If they're on an older implementation, pre-10x and they have a lot of XP features and they have a lot of MVC code then the amount of work goes up.

Some implementations can quickly and easily move straight to XM Cloud because they're on modern technologies. They're headless. Some of them are already adopting Edge and they're getting ready for it. So those customers are really good candidates to quickly move. There is a level of variance between how much they have to rebuild versus how much they can migrate and port.

Customers who have built a .NET MVC web experience will need to plan a rewrite of their frontend experience when moving to XM Cloud. They will need to move to a Jamstack frontend architecture which will query for content and layout through the GraphQL API provided through Sitecore Experience Edge. Customers will be able to migrate their current structured content, files, roles and permissions, settings and configurations to XM Cloud through Sitecore Content Serialization, but the frontend will need to be rewritten.

**Can you touch on the roadmap (or intent) for migrating SXA sites to XM Cloud?**  
To deploy existing solutions on XM Cloud, the following migration related activities include (but not limited to):

- Upgraded to 10.3
- Convert to a headless architecture
- Publishing to Edge
- Client app content retrieval from Edge
- Removal of all XP dependencies
- Conversion of MVC to Headless Client application
