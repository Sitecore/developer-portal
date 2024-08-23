---
product: ['connect']
title: 'Licensing and Cost Structure'
hasInPageNav: true
cdpTags: ['connect']
---

### How to license Sitecore Connect?

Sitecore Connect is available as a set of different license tiers that bill clients based on the number of active connections to third-party systems. (i.e., non-Sitecore systems)

### How do you calculate the number of connections?

Only third-party product connections count towards billing and Sitecore connections are considered free when licensing Sitecore Connect. Each connection allows customers a fair usage limit to run up to 6 million tasks / year. Any overages count as an additional connection.

Note: Every time a recipe invokes an action provided by a connector counts as one task: https://docs.workato.com/Recipes/tasks.html

Example: if you connect Sitecore Send, CDP, and an external CRM system, you are only billed for one connection to the external system not three connections. If your consumption exceeds 6 million tasks, you will need additional connections.

### Is there a limit on the number of recipes, actions, triggers, or connections with Sitecore Connect subscription?

There is a limit in the number of connections based on your Sitecore Connect subscription tier. Each recipe can only have a single trigger. There is no (documented) limit to the number of actions in a recipe. There is no limitation to the number of recipes. There is no limitation in the number of tasks however consuming more than 6 million tasks times your connections limit will incur overages. See https://docs.workato.com/Recipes/tasks.html#tasks for more information on what is a task, how they are counted and how you can optimize their usage.

### Am I charged for Dev/Test/UAT integrations?

Dev/Test/UAT or named “non-production” environment of Sitecore Connect is limited to a low amount of tasks execution / month that has a hard cap (i.e., recipes will no longer run/execute once the limit is reached) to allow you to build and test recipes with any number of connections before evaluating and pushing it to your production Sitecore Connect environment.

Dev/Test/UAT integrations do not count against your Sitecore Connect license, only active production connections are counted.
