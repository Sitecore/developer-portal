---
title: 'Distribution of Assets'
description: 'Streamline, manage, and distribute assets across multiple channels'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
created: '2025-01-31'
audience: ['Product Owners','Technical Implementers', 'Architects','System Administrators']
---

## Context
Sitecore Content Hub is designed to act as a centralized content management platform in a marketing company’s IT landscape. Its purpose is to streamline the production, management, and distribution of digital content across multiple channels. The most prominent type of such digital content are of course images and videos. They are assets. There are different type of assets in Content Hub, but in its core an asset is an enriched with metadata binary file.

## Execution
Distribution of binary files can be done with different purposes, and with Sitecore Content Hub being a very versatile tool - there are different ways to distribute assets.

### Public Links
The most obvious example, is when certain asset needs to be used by an "external" person or system. The definition of "external" in this context means somebody who has no access to the Content Hub environment itself, they cannot login there, has and should have no access. 

Marketing teams often need to collaborate with external stakeholders such as freelancers or agencies, partners, clients or event end-users who need to have access to certain marketing asset but do not need to receive access to the entire Content Hub.

Another very common example when public links are used, is systematic feed of marketing assets directly into external systems or even websites. For example embedding an image that is hosted in Content Hub directly into a public external website. Or perhaps a direct download link(s) could be embedded in largely distributed email campaigns.

Those use cases describe scenario's when lots of consumers need to have very quick access to the binary of the file without any authentication to Content Hub. For single use, public links can be created as described in in the [documentation](https://doc.sitecore.com/ch/en/users/content-hub/create-public-links.html). For more automated public links creation at scale to be consumed by a system, review the [Script Guidance and Scenarios](/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios) recipe.

Public links are served from a CDN  - this means that every single image from a public links does not generate additional unnecessary load on the environment. Keep in mind that Content Hub also provides a possibility to configure a [custom CDN](https://doc.sitecore.com/ch/en/users/content-hub/set-up-a-custom-cdn.html) if needed.

Since public links are static, and once shared, will be available in different places that might not be of your reach - therefore the URL, cannot change. This understanding is important because it means that public links in a production environment should only be created after the fact of establishing the correct domain name for the tenant. Otherwise, the public links would need to be updated on all the consumers, from something like this:

```typescript
https://test.sitecorecontenthub-staging.cloud/api/public/content/my_public_link
```
<br/><br/>
to the final domain name variant, like this:
```typescript
https://media.mywebsite.com/api/public/content/my_public_link
```
<br/>as this update would break all the parties that started to rely on the link.

Public links are essentially entities, and they can be retrieved via Experience Edge, either as entities or as actual urls of entities. More detail can be found on the [Public links](https://doc.sitecore.com/ch/en/developers/cloud-dev/public-links.html) documentation.

### Gateway Links
While public links are providing anonymous access to a particular rendition of an asset, which comes at the cost of unable to control by whom and how frequent a file is being consumed. A more restricted version of those link that provides such possibility are gateway links.

Gateway links are serving the image directly from Content Hub rather than from a CDN, and for this reason in order to work they require you to have an authenticated open session to Content Hub, they need an [OAuth token](https://doc.sitecore.com/ch/en/users/content-hub/create-an-oauth-client.html) to authenticate. As this enables to control the access to the information within Content Hub, the consumption of the gateway links can be tracked. This enabled Content Hub to have a dedicated reporting event <code>gatewaydownload.completed</code> being published to audit log when a gateway link is downloaded, see all documented [reporting events](https://doc.sitecore.com/ch/en/users/content-hub/reporting-events.html). 

Unlike public links, gateway links do not require any “generation“. Gateway links ere not implementing any expiration mechanism, neither do they distribute the binary file to a CDN. Those are links that represent a “fixed” way of getting certain rendition of a certain asset. They are constructed out of the following parts:

```typescript
/api/gateway/identifier/IDENTIFIER OF ASSET/NAME OF RENDITION
```
<br/><br/>
As authentication is required, Content Hub is able to associate certain permissions with that user account and this leads to a granular control of gateway links consumption. Even though everybody is able to construct a gateway link, the user itself needs to have the permission to use that asset.

All this combined makes gateway links perfect for being consumed by integration systems, that authenticate to content hub. One such integration is the [CI Hub](https://doc.sitecore.com/ch/en/users/content-hub/sitecore-content-hub-digital-apps-connector.html), but those could be other integration systems or even an intranet site. Most importantly to understand is that gateway links are served from Content Hub directly, not from a CDN. Therefore, under heavy load they could impact Content Hub web pods performance. 

Gateway links are not retrievable via Experience Edge.

### Delivery Links
The most restrictive, but also the ones with the most controlled from the security perspective are the delivery links. They are generated on the fly by Content Hub for every entity request, either through UI or API. If an entity contains a rendition where the user has download permissions for, then on the fly Content Hub generates a signed and timestampted. As those links have a signature, only Content Hub can generate those. Those links can of course be shared, but once the timestamp expires they will not work anymore, and the typical expiration is 20 minutes.

The purpose of those links is to be used inside Content Hub itself, either in UI and in API. So they are used in all to represent entities, including the [public collection](https://doc.sitecore.com/ch/en/developers/cloud-dev/public-collection-links.html).

Those links being internal to Content Hub itself, and not relate to a CDN, they cannot be retrieved via Experience Edge.

### Public collection
A Public collection is a public link for a combined set of assets. The generated link is then leading to a page where all the assets in the collection are visible. As with public link for an asset, the public collection link can be generated with expiration, it can be generated for certain renditions of assets in the collection and most importantly, this allows anonymous access. 

Also, as with regular public link, this also leads to unability to track of who accesses the content of the collection. 

Public collections can be retrieved from Experience Edge, but unlike public links, they can only be retrieved as entities - not as constructed public links to those public collections. The Experience Edge would contain the <code>path: "7669f6482b094911b2942cb4d41be3"</code> attribute for the entity, but it would not return the constructed shared url for that public <code>collection: https://contenthub.cloud/collections/7669f6482b094911b2942cb4d41be3</code> as this would need to be done manually.

## Insights

It’s important to understand that the links can only be created for [renditions](https://doc.sitecore.com/ch/en/users/content-hub/default-renditions.html). Rendition is the source, the binary file that will be used for the link to point at.

Renditions are generated and stored as file keys at the entity level. Therefore, they need to be re-usable for different purposes, either on Content Hub itself, or on integration level. If a particular non-standard sized version of the image is needed only one time for a particular asset, then it would be discouraged to create this as a rendition. Renditions are generated by a media matrix that is applied for a range of asset, and if that very special rendition is only needed on 1 asset, then it makes more sense to create an [asset-specific rendition](https://doc.sitecore.com/ch/en/users/35/content-hub/content-user-manual--asset-specific-renditions.html). Renditions need to be re-usable across different application. 

Keep in mind that modifying the size and re-calculating a rendition offers flexibility but also involves some processing overhead. This includes both the processing effort required and the re-processing of the public links associated with that rendition. Because public links are actually caching the image on CDN, the rendition size needs to be carefully chosen before creating high magnitudes of public links for it on a production environment. 

However, in contrast to the other types of links, the public links allow [on-the-fly transformation](https://doc.sitecore.com/ch/en/users/content-hub/add-or-edit-transformations.html). Transformations can only be applied on public links, in case certain consumer wants a specific size of file dimensions, however we don’t want to generate this size for all existing assets in Content Hub due to poor re-usability of this particular dimension. As transformation are applied on-the-fly, they have a slight overhead at the moment of cold hit (before caching) but prevent storage overconsumption of redundant different size variations of the same image in content hub.

When it comes to choosing the Right Link Type based on  your requirements, consider:
<ul>
  <li>If you’re connecting to a CMS: Use a public link.</li>
  <li>If you need to share on Social Media: Use a public link with transformation for optimized display.</li>
  <li>If you need to distribute Assets to Agencies for Marketing Campaigns: Use a public collection for easy access and organization.</li>
  <li>If you need to Integrating with another system or Intranet Site: Use gateway links for seamless connectivity.</li>
</ul>

## Related Recipes

<Row columns={2}>
  <Link title="Scripts Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />
    <Link title="Functional Security" link="/learn/accelerate/content-hub/implementation/functional-security" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Create public links" link="https://doc.sitecore.com/ch/en/users/content-hub/create-public-links.html" />
  <Link title="Public links APIs" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/public-links.html" />
  <Link title="Delivery and gateway links" link="https://doc.sitecore.com/ch/en/users/content-hub/delivery-and-gateway-links.html" />
  <Link title="Reporting events" link="https://doc.sitecore.com/ch/en/users/content-hub/reporting-events.html"/>
  <Link title="Public collection links" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/public-collection-links.html" />
  <Link title="Renditions" link="https://doc.sitecore.com/ch/en/users/content-hub/default-renditions.html" />
</Row>


