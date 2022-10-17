---
title: 'Customization'
hasInPageNav: true
---

**Are clients able to customize the editorial experience?**  
The Content Management instance will be fully customizable in XM Cloud as it is today with a self-hosted implementation. You can change Sheer and SPEAK UIs of the Content Management role.  
Pages are the future of our XM Cloud authoring experience.

**Will it be possible to use custom identity providers?**  
The initial release of XM Cloud will not support custom identity providers. When support becomes available, authentication will be performed through the Sitecore Cloud Portal, with XM Cloud available as an application through the Sitecore Cloud Portal. We enable customer SSO integration with our Sitecore Cloud Portal.

**Extending pipelines and custom renderings, typically will be compiled .NET code are attached to something in Sitecore, are we allowing this still in XM Cloud?**  
Absolutely you can write your own custom pipelines and do all the customization you did before. You don’t do it against the web database but the way edge publishing works. Primarily edge publishing works as if you wrote a custom pipeline that changed some items or a new custom item resolver or changed content. The edge runs through those rendering pipelines, during the publishing process so to render the json over edge, we did some transformations, media urls.
We believe there no so much need for customization, most customizations you need will be out in the front end.

**Will partners still be able to customize pipelines and events on the CM? Are all pipelines going to be available to add to include publishing (like wanting to publish to a Solr index for consumption)**  
Events and pipelines can still be customized for the Content Management environment within the XM Cloud. There may be some limitations as to which pipelines can be customized, and we encourage new development to use out-of-process API-based integration as much as possible.

**How is that going to manage the sort of SaaS approach to a upgrades in level of customization?**  
With XM Cloud we wanted to make sure that we can hundle automatic updates. So with XM Cloud we are doing Semantic versioning at XM Cloud 1.0 within the major version, so if we update to 1.1 or any other version we are getting automatically the release following Windows Patch, updating everybody’s instances. Also we have automatic updates on re-deployments and if there was a new version we will get automatic updates for zero-day patches. The plan is to never have another major version unless is a breaking change. If you try to go back in a version this is not going to be covered.

**Will we have support for custom field types?**  
Yes, we support custom fields.

**Can we get these custom fields also in the GraphQL endpoint?**  
It is possible to extend the edge publishing to provide edge with the custom field values.

**There will be no more support for front-end search out of the box? IE, we have to either provision another Solr instance, or use Coveo?**  
XM Cloud is focused on a being a headless only and composable content management solution. We are working on a composable search offering for front end website searching.

**Can we summarize XM Cloud as XM running in Sitecore Managed Cloud without being able to add (code) customizations?**  
No, that is not accurate. XM Cloud supports customization with the use of our deployment tooling and services.

With Managed Cloud customers have complete flexibility to architect and deploy Sitecore solutions using whatever topology and approach they desire. Additionally with Managed Cloud there is joint responsibility on the platform and its updates.

XM Cloud is Headless XM only with publishing to Edge only. XM Cloud is fully managed by Sitecore, and XM Cloud includes automatic updating and we will include policies to ensure we are keeping CM instances to keep it up to date.

**How does XM Cloud support custom fields and custom fields at the GraphQL endpoint?**  
So the custom fields, the implementation for the Experience editor and Content editor. You can still render, you still deploy your code into your XM cloud instance. So that means that you can still provide those custom fields and you can still plug into the pipelines. So for the moment that should be supported. So they get published on the like as you add custom fields.

The way that we architected it was that it's gonna publish any fields that you add there over to edge, so it'll be available in the graph QL item.

So, particularly like a custom field renderers, should get called as part of the layout because essentially what we do is, when we're rendering the layout, it actually enters the layout pipeline and renders the Json into there, and ultimately that calls the field renders the entire json gets pushed out to come to edge, and then that is accessible from your headless front end.

Also want to add that on the Pages side to erupt actually working in to ways of making extensibility model for customer extensions. So you can actually visualize them on the Pages site later in later phases of the product as well.
