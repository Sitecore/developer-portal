---
product: ['xm-cloud']
title: 'Development'
hasInPageNav: true
cdpPersonaDefinition: { PagePattern: [{ 'ProfileKey': 'FrontendSkills', 'value': 6 }, { 'ProfileKey': 'BackendSkills', 'value': 6 }] }
cdpTags: ['xm-cloud']
---


<Alert status="info">
  <AlertIcon />
    The information in this article can be outdated. For the latest guidance on XM Cloud implementations visit the <a href="/learn/accelerate/xm-cloud">Sitecore Accelerate for XM Cloud</a> page
</Alert>

## Dev Workflow

[XM Cloud FAQ](https://developers.sitecore.com/learn/faq/xm-cloud/development) - Edge mode vs Fully local mode

> ✅ DO utilize “Edge Mode” if you’re a front-end dev.

> ✅ DO utilize “Fully Local Mode” if you’re a back-end dev.

Recommended workflow:
![Development Modes with XM Cloud](/images/learn/project-workflow.jpeg)

1. **Analyze designs to identify page types and components**

The Business Analyst or Product Owner analyze the website designs/wireframes and flush out authoring requirements. This information is discussed with the Sitecore architect or dev lead to identify the list of page types needed for the website and the list of components needed on each page type.

This step gets the business side and the technical side of the project into alignment. Content Authors get to see the types of pages they will be able to create, the components they will be able to add to pages, and the fields that will be editable in those components. This information needs to be explicitly communicated with both, back-end and front-end devs. For front-end devs, going through this process promotes “component driven design”, which encourages separation of concerns and improves the maintainability and scalability of the codebase.

2. **Back-end devs work from local containers**

The Sitecore architect or back-end dev kicks off implementation by building out the information architecture in Sitecore. This work is done in a local Docker container, then serialized into source control.

> ✅ DO use local Docker containers for **back-end Sitecore development**

Trying to use an on-prem version of Sitecore XM for local development in order to avoid learning containers is not a good idea. The on-prem version is different from the cloud version, so whatever behavior you would see on your local machine could change once your code is deployed to the cloud version.

> ✅ DO use local Docker containers for Sitecore **item serialization**

Using a local container is best when serializing Sitecore items (ie when you want to save whatever has been done in Sitecore to source control). Trying to serialize against a cloud instance can lead to trouble because it’s a shared environment, so people can override each other’s work.

There is an official template available to facilitate the original creation of the codebase - [GitHub - sitecorelabs/xmcloud-foundation-head](https://github.com/sitecorelabs/xmcloud-foundation-head). Using this template is recommended since it provides multisite capabilities, it comes with helpful scripts for managing local containers, and it is maintained and updated by Sitecore.

3. **Initialize cloud instance and begin front-end work**

Once the Sitecore templates have been serialized and added to source control, they can be deployed to the XM Cloud instance.

> ✅ DO use the remote XM Cloud Sitecore instance for front-end development

This enables front-end devs to begin work without having to set up any local Sitecore containers of their own - they can work against one of the cloud endpoints, ideally the CM GraphQL endpoint. The docker learning curve and setup can be heavy, so it’s not worth it if you’re only doing frontend work. Additionally, by using the real cloud endpoint (instead of a local endpoint tied to a local database), front-end devs are guaranteed to be hydrating their components with the same content data that will be used in the final product. So the “it works fine on my machine, but it looks weird in production” scenario can be avoided.

Front-end devs still develop and run the front-end (JavaScript) part of the project on their local machines (on a Node server running locally - this is called the “rendering host”). As they build out components, if any changes are needed to the data incoming from the API, they communicate these needs to the back-end devs. So, back-end devs jump in occasionally to tweak the information architecture and front-end devs still don’t need to bother with local Sitecore containers. This is the favorite approach, according to all the teams we interview.

Front-end devs like this workflow because they don’t have to learn containers, and Sitecore onboarding is minimal.

4. **Components are built & tested locally, but authoring is tested in the cloud**

Since front-end devs do not run Sitecore locally, they cannot test the authoring interface locally. This testing must be done in the cloud instance.

Front-end devs work on components locally (using the cloud endpoint as a Headless CMS) and continuously deploy their changes to the cloud instance, where they regularly verify that their component work and look as expected in the authoring interface. The authoring interface is expected to behave in “desktop” mode, so this is also a good time to plan for responsive layout and consider extra fields that may need to be added to components to allow authors to edit all the different versions on a component.

### Further reading

[Headless Frontend Development with XM Cloud](https://thetombomb.com/posts/frontend-development-xm-cloud) - This article explains what XM Cloud is and provides two common workflows for frontend developers, one simple and one more advanced.

## Code references

In addition to the official starter template, there are a couple of other public repos available to use as a development reference.

**Official starter foundation**

[GitHub - sitecorelabs/xmcloud-foundation-head](https://github.com/sitecorelabs/xmcloud-foundation-head)

- Best for new projects
- Utilizes headless SXA
- Has all SXA features (site management)
- Maintained by dev team and will get all new features as they are released

**MVP/SUGCON Sites**

[GitHub - Sitecore/XM-Cloud-Introduction](https://github.com/Sitecore/XM-Cloud-Introduction)

- Good reference for migration use case
- Shows different rendering hosts (JS & .NET Core) coexisting
- Custom build/deploy pipeline
- Multisite

**XM Cloud Play Summit**

[GitHub - sitecorelabs/Sitecore.Demo.XmCloud.PlaySummit](https://github.com/sitecorelabs/Sitecore.Demo.XmCloud.PlaySummit)

- Good reference for migration use case
- Good for demos/trial
- Multilingual
- Examples of custom components & advanced use cases

## Working with a shared cloud instance

> ✅ DO add new items like components and templates to the cloud instance through code deployments rather than adding them directly in the interface.

As devs work locally, they may be tempted to save time by testing out quick changes to the information architecture directly in the cloud instance, rather than going through the full process of committing the changes to source control and deploying them. This is risky since the cloud instance is a shared environment so any work done directly in the cloud instance (without going through source control) could interfere with other people’s work. For example, if you add a component that somebody else doesn't have the source to, that person will see errors on all pages that have this component.

> ✅ DO use local containers for managing serialization

It’s best to treat the shared environment as “read only” when it comes to data modeling and not do serialization off of an XM Cloud instance. Serialization in a shared environment can be a source of errors as devs risk wiping out each other’s work. Serialization in a local container environment is safe because the databases used in local containers are not shared.

## Containers

Based on our discussions with dev teams in the field, the most common source of local development challenges comes from working with Docker containers. Here is the advice and lessons learned that devs shared:

> ✅ DO utilize the powershell scripts provided in the official project template to manage your container

These scripts address common issues and handle error catching.

- Use [up.ps1](https://github.com/sitecorelabs/xmcloud-foundation-head/blob/main/up.ps1) to start your container
- Use [down.ps1](https://github.com/sitecorelabs/xmcloud-foundation-head/blob/main/down.ps1) to stop your container

Most of the time, the up script and down script are all you need. These scripts manage your container without touching your local databases (ie they won’t change items in Sitecore). However, sometimes it is useful to reset your databases to whatever is serialized in source control (if you are getting unexpected errors or if you are switching between branches). This can be achieved with the clean.ps1 script.

Tips for working with containers:

- The up script pulls the latest versions of the base images. Pulling latest images is recommended. But if you need to hold off from pulling the latest version (as an exceptional case), you can pin your base image to a specific version in the docker-compose file.

- If you’re seeing an error in XM Cloud that you cannot reproduce locally, you can use the CLI to inspect logs from the cloud environment (including logs from the editing rendering host). `dotnet sitecore cloud environment log list` and it will give you a list of all logs on your environment.
