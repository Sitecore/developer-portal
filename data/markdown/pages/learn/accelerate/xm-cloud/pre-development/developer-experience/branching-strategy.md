---
title: 'Branching Strategy'
description: ''
hasSubPageNav: true
hasInPageNav: false
area: ['accelerate']
---

## Problem

What is the recommended Branching strategy when setting up an XM Cloud project?

## Solution

While most recipes are very prescriptive, setting up a good branching strategy needs to be more flexible due to some clients having very strict rules around the developer workflow. This recipe will guide you on the best practice for scaling a team implementing an XM Cloud project with a Next.js front end.

- A monorepo is the Accelerate recommended approach to store your XM Cloud backend code, item serialization files and front end application code (<a href="#monorepo-vs-polyrepo">See discussion point: Monorepo vs Polyrepo</a>). Other head applications, e.g. mobile apps, can live in their own repositories.
- A branching strategy that allows continuous integration (<a href="#branching-strategy">See discussion point: Branching Strategy</a>)

### Developer Workflow

- The git repository will contain a `main` branch
- To onboard, a developer will fork or clone the origin repository
- When starting a new section of work a developer will:
  - Checkout the `main` branch and pull the latest
  - Create a local feature branch, give it a short descriptive name, e.g. `add-promo-component`, `create-hero-banner` etc... This branch should be short lived (less than a working day)
    - Frequently, your feature branch should be rebased onto `main`, this will prevent complex merge conflicts.
    - Commits should be atomic with _good_ commit messages that follow the [7 rules of a great commit message](#commit-messages)
  - When the code is complete on your branch, complete a final rebase onto `main` and then push the branch to origin
  - Create a Pull Request from the feature branch on `origin` to the `main` branch on `origin`
  - Code will pass any required gates (Code reviews, Tests etc...) that are required by the project and then it is accepted into the `main` branch. The `origin` feature branch should be deleted as part of the PR completion.
- When a Pull Request is created, this should trigger any Continuous Integration automated tests
- The `main` branch should be locked down so that the only way to commit is via a Pull Request
- Every commit to the `main` branch should trigger Continuous Integration automated tests and then a deployment to the lowest environment on the platform (XM Cloud) and the head application hosting.
- This deployment can then be promoted through environments until it is ready for production.

### Releasing Features

With this approach, all code gets released to production once it is in the `main` branch. Most of the time this is ok, but there maybe new features or changes that are not ready for release, but due to project timelines, the code has been fully or partially written and committed.

In this case, we recommend the use of Feature Toggles/Feature flags. This will allow the feature or change to be deployed into production as soon as it is completed, but not released until the right time. There are a number of products that can help with feature toggles, here are a few suggestions:

- [Launch Darkly](https://launchdarkly.com/)
- [Split](https://www.split.io/)
- [PostHog](https://posthog.com/feature-flags)

It is up to the partner/client to decide if this is something that should be implemented and which product best fits the project requirements.

If feature toggles are not an option or if the client requires very structured versioned releases, then you should move from GitHub Flow to GitLab Flow. This allows for a `Production` or `Release` branch on top of `main`.

Reference: [GitLab Flow](https://docs.gitlab.cn/14.0/ee/topics/gitlab_flow.html)

## Discussion

### Monorepo vs Polyrepo

A monorepo is a single repository for all the code in an XM Cloud project. It would include the platform code, serialized files, and the front end applications. There are several advantages to a monorepo including:

- **Code Sharing and Collaboration:** With a monorepo, sharing code between projects is easy. It encourages collaboration and promotes code reuse.
- **Atomic Commits:** Monorepos allow for atomic commits and branches across multiple projects. This ensures that changes across projects are synchronized and reduces the risk of integration issues.
- **Single Source of Truth:** A monorepo provides a single source of truth, allowing a coherent view of the codebase at any time. This makes debugging easier.

A polyrepo or multirepo involves using multiple repositories for the backend and frontend applications. Sometimes, each head application can have its own repository. A polyrepo has some advantages such as, a finer-grained access control, independent development cycles, isolation of CI/CD pipelines.

A polyrepo can give you some challenges, e.g. sharing code between projects.

The Sitecore Accelerate program currently recommends a monorepo approach, at the time of writing, the XM Cloud Deploy app requires all the code to be in the same folder for upload via the CLI, the repo integration requires a monorepo.

Go with a monorepo strategy and focus on trunk-based deployments rather than gitflow.

Deploy often, use feature toggles to prevent code from going live before it should and don't try to work in isolation.

A final thing to note about the Monorepo approach is that currently in XM Cloud it is required for all heads contained within the Monorepo to be running the same version of Node if you want to use the inbuilt Editing Host functionality. If you want to use different Node versions for each head, then you will need to host your Editing Hosts externally by following this approach detailed in our Documentation Site: [Walkthrough: Configuring external editing hosts for XM Cloud instances](https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--configuring-external-editing-hosts-for-xm-cloud-instances.html)

### Branching vs Continuous Integration

Picking the right branching strategy can be a sensitive subject, many developers have very strong views on how branching should be done. In this recipe, we will offer a recommendation that will scale from small to large teams. If your client enforces a different branching strategy, the principles outlined here can still help your team streamline the process.

Ultimately, rather than talking about branching, we need to focus on the why - what do we use branching for? The end game is to control change within our application. A lot of common branching strategies (like GitFlow etc...) promote the use of long lived branches, this can cause problems when making changes because as a developer you are isolating your change away from everyone else's change and you don't have a picture of everything happening to the application. We need to _Embrace Change, don't Hide Change_.

The opposite of a feature branch heavy strategy is trunk based development, where every change happens directly on the `main` or `trunk` branch. This method clearly embraces change, but without very strong testing and DevOps practices, it can be very easy to introduce breaking changes that block other development activities.

Because of this, we recommend a hybrid approach, based on the [Github Flow](https://docs.github.com/en/get-started/quickstart/github-flow) or [Gitlab Flow](https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/) models.

### Atomic Commits

Each commit should contain an isolated, single, complete change. This makes it easy to revert your changes if you change your approach. The changes in a single commit should be able to be summed up in a single sentence.

The commit should be the smallest possible size that meets the above requirements.

### Commit Messages

> Good Commit Messages Matter

A well cared for git commit history is a beautiful and useful thing. The commit history should be an easy to read document on why changes have happened to the code. To help with this, developers on the Accelerate program should follow the Seven Rules of a Great Git Commit Message:

1. Separate subject from body with a blank line
1. Limit the subject line to 50 characters
1. Capitalize the subject line
1. Do not end the subject line with a period
1. Use the imperative mood in the subject line
1. Wrap the body at 72 characters
1. Use the body to explain what and why vs. how

Read the original post on why these rules are important and for more in depth detail on each rule: [The Seven Rules of a Great Commit Message](https://cbea.ms/git-commit/#seven-rules).

## Related Documentation

<Row columns={2}>
  <Link title="Continuous Integration vs Feature Branch Workflow" link="https://www.youtube.com/watch?v=v4Ijkq6Myfc&t=5s" />
  <Link title="The Seven Rules of a Great Git Commit Message" link="https://cbea.ms/git-commit/#seven-rules" />
  <Link title="Atomic Git Commits" link="https://dev.to/samuelfaure/how-atomic-git-commits-dramatically-increased-my-productivity-and-will-increase-yours-too-4a84" />
  <Link title="GitHub Flow" link="https://docs.github.com/en/get-started/quickstart/github-flow" />
  <Link title="GitLab Flow" link="https://docs.gitlab.cn/14.0/ee/topics/gitlab_flow.html"/>
</Row>
