---
product: ['xm-cloud']
title: 'Project Structure'
hasInPageNav: true
cdpTags: ['xm-cloud']
---

<Alert status="info">
  <AlertIcon />
    The information in this article can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

Separate repos for frontend & backend? Separate repos for each head? Based on feedback from teams in the field, monorepos are good idea because

- no need to worry about version compatibility, so it’s easier to scale over time.

- monorepos more accurately represent the nature of an XM Cloud environment (Sitecore is not multi-tenant as far as the code base is concerned. There is no code or application isolation unless you have multiple instances.)

Tips from devs:

> Any time I have seen a project where they try to have multiple teams working in separate projects and all deploying to the same Sitecore instance, it goes horribly wrong. They should stick to a single code base and single deploy. Deploy often, use feature toggles to prevent code going live before it should and don't try to work in isolation.

> If your solution requires multiple “heads” (front-ends) and the different heads are being worked on my different teams, you may want separate repos so that each team can work independently. With separate repos, each head could be deployed independently. While this would make the dev workflow for the teams easier, keep in mind that the Sitecore instance is still single tenant. So whenever each team deploys, their code has the potential to effect the other heads. This could be mitigated through QA processes.

## Monorepo considerations

A Sitecore XM Cloud solution is likely to consist of multiple projects (codebases) and dev teams wonder whether choosing a particular source control strategy (monorepo or broken up across multiple repositories) is important to the success of their team. Based on feedback from dev teams in the field, there is no single best approach for all cases. There are tradeoffs to both sides, and whether or not a particular XM Cloud solution should use a monorepo really varies from team to team. XM Cloud works the same for both approaches, and ultimately the answer to this question comes down to personal preference rather than technical requirement.

### Managing dependencies

In most cases, there is no special benefit to using a monorepo. The main case where monorepos shine is when there are multiple dependencies across projects (for example, if there is a project for shared components that is imported by more than one of the other projects).

### Dev workflow

Organizing projects into a monorepo does not limit how devs work - each dev is still free to use the tools that he or she is most comfortable with on their local machine.

### Team structure

The structure of the dev team needs to be considered. Unless the frontend and backend devs are part of a single, unified team (ie they work for the same company and all use the same communication processes, they all talk daily for updates, they are all involved in the same planning & scoping meetings), separate repos would likely be the more beneficial approach because it would provide the 2 sides with autonomy.

Frontend devs prefer to work “disconnected” from Sitecore. A repo structure that does not force them to setup & manage containers is best.

### CI/CD

When projects are divided up into separate codebases, they can have separate publishing/deployment processes and schedules. This could be helpful if different teams are working on different projects, and they need independent processes.

On the other hand, if one team is maintaining all of the projects, then the overhead of setting up multiple different CI/CD pipelines might not provide much value. We’ve also seen teams run into trouble with separate deployment processes when separate front-end projects were deploying to the same Sitecore cloud instance

### Debugging

Debugging across projects in easier in a monorepo. Similarly, testing bug fixes is easier when the entire dependency tree in container in the same codebase.

### Serialization

You need to consider that components need to be serialized. So if there are 2 projects, where will the serialized items go?

### Migration vs “green field” project

Customers migrating to XM Cloud from older versions (ex. .NET MVC solutions) could utilize a multirepo approach to do the migration gradually, over time (thereby avoiding having to do the entire migration work up front before being able to start using XM Cloud). In this approach, a new repo is created for front-end next.js work, and renderings are refactored to the new approach one by one. Since Sitecore supports having multiple rendering hosts, the new solution can process refactored renderings while the legacy solution can continue to be used for anything that has not been refactored yet.

Dev Gotchya - doing a project from the starter template vs migrating to XM Cloud from a non-Cloud project (ie a JSS project that was created before XM Cloud existed). The older JSS project will be missing the multi-site features & configuration that was added with XM Cloud

### Multisite projects

Questions to consider: Do you wanna share content? Share templates? Share components?

You need to consider that components need to be serialized. So if there are 2 projects, where will the serialized items go? That needs to be considered.

Separate repos = heads can evolve separately from each other.

### Further reading

[Monorepos – Vercel](https://vercel.com/blog/monorepos) - Vercel likes monorepos

[A 2021 guide about structuring your Next.js project in a flexible and efficient way](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472)

## Helix

“Helix” is a set of project structure and dependency management principles that was very helpful when Sitecore implementations were done entirely in back-end code. Helix is less useful in front-end projects built with JavaScript frameworks.

> ❌ Don't try and force Helix into your front-end JavaScript application.

If you know Helix and you love it and you wanna use it, that's fine. But if you don't know it, learning it is not critical for new XM Cloud projects. Front-end projects are better off following the project structure best practices published by the front-end framework authors.

If your front-end project uses .NET Core, then Helix is still very useful (since most development is done in Visual Studio).

## Component design

> ✅ DO make sure that the appearance and functionality of components **does not depend on components being nested/structured any particular way**.

Components need to be built in a way that keeps them independent, modular, and interchangeable, so that Content Authors remain free to move components around on a page however they want.

> ✅ DO **align on component naming conventions** that parallel how components are structured in Sitecore

If you know where a component is in Sitecore, it should be easy to find the source for that component in the code. For example, if in Sitecore there is a “Products” folder that houses component specific to the Product Details Page, then it would be helpful to use the same convention in code. The specific naming convention doesn't matter - having a naming convention and keeping it consistent is the critical piece.

Having the JavaScript components match the Sitecore components makes it easier to onboard new devs to the project - they learn their way around the codebase faster. However, sometimes it makes sense to get more granular in the code in order to avoid code duplication.

For example, there could be a “Promo” component and a “Modal” component in Sitecore, and both of these could have buttons. The front-end dev may wish to encapsulate the Button into it’s own component, even if that’s too granular for the authoring interface. This is possible - JavaScript components don’t have to map 1:1 to Content Author components. Front-end devs can make components as granular as they wish in the code, as long as the list of components that’s exported to the Component Factory matches what the Content Author expects to see.

> ✅ Create as many JavaScript components in code as you wish, but only export the components that are intended to be used by Content Authors.
