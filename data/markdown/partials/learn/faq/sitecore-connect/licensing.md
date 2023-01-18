---
title: 'Licensing and Cost Structure'
hasInPageNav: true
---

### How to license Sitecore Connect?

Sitecore Connect is available in as a set of different license tiers that bill clients based on the number of active connections to 3rdParty. (i.e., non-Sitecore systems)

### How do you calculate the number of Connections?

Only 3rdParty products connections count towards billing and Sitecore Connections are considered free when licensing Sitecore Connect. Each connection allows customers a fair usage limit to run up to 6 million tasks / Year. any overages count as an additional Connection.

Note: Every time a Recipe invokes an action provided by a connector counts as one task: https://docs.workato.com/Recipes/tasks.html

Example: if you connect Sitecore Send, CDP, and an external CRM system, you are only billed for one connection to the external system not three connections. If your consumption exceeds 6 million tasks, you will need additional connections.

### Is there a limit on the number of Recipes, actions, triggers, or connections with Sitecore Connect subscription?

There is a limit in the number of Connections based on your Sitecore Connect Subscription Tier. Each Recipe can only have a single trigger. There is no (documented) limit to the number of Actions in a Recipe. There is no limitation to the number of Recipes. There is no limitation in the number of Tasks however consuming more than 6 million tasks times your Connections limit will incur overages. See https://docs.workato.com/Recipes/tasks.html#tasks for more information on what is a Task, how they are counted and how you can optimize their usage.

### Am I charged for Dev/Test/UAT integrations?

Dev/Test/UAT or named “non-production” environment of Sitecore Connect is limited to a low amount of Tasks execution / month that has a hard cap (i.e., Recipes will no longer run/execute once the limit is reached) to allow you to build and test Recipes with any number of Connections before evaluating and pushing it to your Production Sitecore Connect Environment.

Dev/Test/UAT integrations do not count against your Sitecore Connect license, only active production connections are counted.
