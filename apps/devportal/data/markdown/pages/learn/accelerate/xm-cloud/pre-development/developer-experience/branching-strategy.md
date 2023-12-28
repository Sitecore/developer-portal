---
title: 'Branching Strategy'
description: ''
hasSubPageNav: true
hasInPageNav: false
area: ['accelerate']
---

## Problem

What is the recommended Branching strategy when setting up an XM Cloud project.

## Solution

### Work in progress

Go with a monorepo strategy and focus on trunk-based deployments rather than gitflow.

Deploy often, use feature toggles to prevent code going live before it should and don't try to work in isolation.

### Strategy

Use a monorepo for your XM Cloud backend code, the item serialization, the implementation of the rendering host, and other frontend projects that use JSS.

Any other head applications, like mobile apps can live in their own repositories.

### Branching

You have your main branch which auto-deploys to your lowest non-prod environment.

When starting on a new feature you create a new branch, create and sync all necessary Sitecore items and merge the branch back into main. After the auto-deployment all items are available in XM Cloud.

For working on your head application(s) you also create a branch and follow the CI / CD flow to continuously build, test and deploy your head application. E.g. if you use Vercel and Github, you can use the auto-deploy integration both tools offer: GitHub and Vercel Integration

When you are done with with the feature, you create a PR and let the team review your changes. Then merge back into main and auto-deploy to XM Cloud.

Feature branches should not live longer than a few days. Merge often and use feature flags if necessary.

### Deployment

Every commit to main should trigger a deployment to your first non-prod environment.

Every PR should trigger a deployment to a preview environment of your head application(s).

### Releases

If you decide to release, you promote the latest deployment to your next (non-)prod environment directly in the Deploy app.

Tag the commit you promoted in your repository.
