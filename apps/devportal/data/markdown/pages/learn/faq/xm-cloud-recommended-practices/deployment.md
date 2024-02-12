---
product: ['xm-cloud']
title: 'Deployment & Publishing'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this article can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

What do developers need to keep in mind when **deploying their code** or **publishing sites**?

## Tips

Publishing to Edge can be an expensive operation, a good amount of the time is spent making the connection to Edge though. For this reason you should preference publishing larger batches on items, instead of lots of smaller item publishes as it will perform better.

There can also be a short delay between the Publishing Dialog indicating that the publish has completed, and the content changes being returned from Edge as its caches are cleared. When this is combined with ISR timeouts when running in NextJs, this can lead to a delay before content changes are displayed on your end site.

## Customization

> ✅ DO utilize the XM Cloud deploy app rather than using your own CI/CD tool

It’s better to use the OOTB GitOps functionality provided by XM Cloud where possible as it will save you development time setting up your own pipelines. Alongside that, as the GitOps functionality is improved, you’ll automatically get any new updates that are created.

However, there are some scenarios where it might be preferable to roll your own CI/CD pipelines. Here you can utilize the CLI performing all of the interactions with your XM Cloud instance.Some examples of this are:

- If you’re not using GitHub as your Source Control Provider, other providers aren’t currently supported, so you must use your own CI/CD in that instance.

- If you have already made an investment in CI/CD setups for other parts of your system and want to leverage the same technologies, keeping all your deployment pipelines in one place.

- If you have complexity in the types of sites you’re deploying, maybe you have a large number of sites run out of a single XM Cloud instance (multi-site setup), or you’re deploying to multiple cloud hosting providers for your different heads (multi-cloud setup).

- If you have a large number of Non-Production & Production environments and you want to automate the flow of changes between these environments.

You can find an example of a custom CI/CD configuration using the XM Cloud CLI here: [XM Cloud Introduction Repository](https://github.com/Sitecore/XM-Cloud-Introduction)

## Git Workflow

- Using git flow model is the old, obsolete way. In this old model, release branches are used. The build that happens on the dev branch and the build that happens on the release branch are different. Since the builds are not identical, it’s possible to see issues from a prod deployment that weren’t present in a dev build (which is where QA happened)

- The recommended approach is to use continuous deployments, which means that every commit is instantly deployed out to the first environment, and every build, every commit I make, or every pull request I do has integration tests and things run against it.

- With the ‘deploy once’ model, you can promote any single build to different environments via the XM Cloud deploy app.

- Differences in configs across environment should be handled with environment variables (or like SXA handles it - configuration through Sitecore items)
