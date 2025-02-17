---
title: 'Distribution of Content'
description: 'Manage, localize and distribute content across channels such as websites, mobile apps, and social media.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-02-10'
audience: "All"
---

## Context
Using Sitecore Content Hub, you can manage campaigns as well as plan, author, collaborate, curate, localize, and distribute various types of content (such as blog posts, white papers, emails, social media posts, and recipes). This content can be intended for multi-channel use, with the most common channel being a website. This is the use case we will cover in this guide, but the principles apply equally to other channels, such as a mobile app, or a social media integration platform.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.


## Execution

There are three primary ways in which content from Content Hub can be distributed:
<strong>
<ul>
  <li>Publishing (Experience Edge)</li>
  <li>Push</li>
  <li>Pull</li>
</ul>
</strong>
The recommended approach for distributing content is the publishing method, as this makes use of the content filters within Content Hub, and the CDN capabilities of Sitecore Experience Edge.

For content which is intended for display within components in XM Cloud or an XM/XP instance, it is possible to make use of the Sitecore Connect for Content Hub - CMP connector ([XM/XP documentation](https://doc.sitecore.com/xp/en/developers/connect-for-ch/40/connect-for-content-hub/sitecore-connect-for-content-hub---cmp.html), [XM Cloud documentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-connect-for-content-hub.html)). The connector will create items within XM/XP/XM Cloud which are synchronized with the entities in Content Hub. This approach, however, is only recommended in the situation where the approval workflow for the content is managed entirely within the XM/XP/XMC Cloud environment. For all other use cases, the recommended approach is to have the components retrieve the data directly from Content Hub using the publishing approach.

We will be focusing on copy content within the “Content” entity definition, but the approaches covered are equally applicable for other content types, such as Product data, reports or documentation.

### Publishing setup

#### Delivery Configuration

The publishing method for distributing content uses Sitecore Experience Edge. First, let’s check that publishing is enabled in Content Hub by checking that the publishing enabled setting is enabled. You can do this by going to Manage > Settings and then opening Publishing > PublishingSettings. If the checkbox is not enabled, then enable it and click Save.

Now there should be a new item on the Manage page called “Delivery platform”. This page is used to configure what items are published to Experience Edge and when. For the purpose of this guide, we are going to use the “Content” definition, as used by the Content Management functionality of Content Hub, but the steps are the same as for any other definition, just swap out the references to “Content”.

Find the “Content” definition in the list and click the cloud icon next to it. Ensure that the <code>Enable in delivery platform</code> option is enabled. 

#### Publishing conditions

In the absence of any other configuration, the above setup would mean that every Content entity would be published to Experience Edge. Typically, however, we only want items to be published once they have gone through a creation and approval workflow. To do this we need to add some publishing conditions.

Under the “Publishing conditions” section we can define some filters which mean that entities are only published when they meet certain conditions. Typically, this would be something like <code>Status</code> equals Approved (or Final), and <code>IsDraft</code> is false, but you should create the appropriate configuration for your use case. If the entity doesn’t have a stateflow attached to it, this may be a good time to think about whether one is now required.

Additionally, the “Scheduled delivery” section allows for entities to be held back from publishing until a certain date has passed. You could, for example, use this to define a release date for some specific content.

#### Publishable fields

Now that we’ve defined when an entity should be published, we next need to think about which fields within the entity should be published. Close the publishing settings dialog, and then use the “Add members” button to add the members which are relevant to the published content. For our Content example, let’s make sure that <code>title</code>, <code>body</code> and <code>publicationDate</code> are included.

Once this is done click “save and publish”. This will save the content and also analyze the current entities, and, if applicable, publish them to experience edge.

### Data Querying

#### GraphQL setup
Now that we have Content Hub set up to correctly publish our content to Experience Edge, we should think about how to retrieve and use that content. Experience Edge makes this easy with the use of GraphQL.

The first step is to create an API Key, which can be done on the API Keys page (Manage > API Keys). For this example we are going to use the Delivery endpoint, so select Delivery when creating the key.

> The Preview endpoint is intended to be used for draft content in a non-production setting. The publish conditions are effectively bypassed within the preview endpoint, allowing entities that are being drafted to be accessed. This is typically used to provide a “preview” of the content on a staging website before being published.

The second step is to check what our delivery URL is. This can be done by going to Manage > Settings and then selecting the Publishing > Publishing Settings setting. There is a button at the top called “Delivery API data” which will open a popup displaying the delivery URL - it is likely to be <code>https://edge.sitecorecloud.io</code> , or <code>https://edge-beta.sitecorecloud.io</code> for a sandbox.

#### JavaScript query example
Using Experience Edge, querying data from Content Hub using GraphQL is as simple as this:

```javscript
async function getData(query) {
    const response = await fetch(`${contentHubQueryUrl}/api/graphql/preview/v1`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "X-GQL-Token": contentHubGQLToken,
        },
        body: JSON.stringify({query})
      })

      const responseObj = await response.json();
      return responseObj.data;
}

```

Now we can use this method to make GraphQL queries to Experience Edge to retrieve our published entities. 

<strong>Example 1 - Retrieve blogs and display a list of their titles</strong>

```javscript
import getData from "@/lib/data"

export default async function Page() {
  const query = "{ blogs:allM_Content_Blog(orderBy:CREATEDON_DESC) { results { id, date:content_PublicationDate, title:blog_Title } } }"
  const data = await getData(query);
  const blogs = data.blogs.results;
  return (
    <ul>
      {blogs.map((blog) => (
        <li key={blog.id}>{blog.title} </li>
      ))}
    </ul>
  )
}
```
<br/><br/>
<strong>Example 2 - Displaying an individual blog page</strong>

```javscript
import getData from "@/lib/data"

 
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const query = `{ blog:m_Content_Blog(id:"${id}") { id date:content_PublicationDate title:blog_Title body:blog_Body } }`
  const data = await getData(query);
  const blog = data.blog;
 
  return (
    <article>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </article>
  )
}
```

## Insights

### Pushing content
Instead of Publishing, content can be *pushed* from Content Hub using the Triggers and Actions framework. This approach is typically used to synchronize data with external systems such as Sitecore Search. An action is created to push data about an entity change either to an API endpoint or a message queue. Then a trigger is configured to define the circumstances under which this action is called: this could be on entity creation, approval, deletion, or some other advanced condition.

#### Push configuration - Action
To configure this, first create an action by going to Manage > Actions. You will then also need to provide details of the endpoint, or queue that the message should be sent to. For testing purposes, you could make use of Webhook.site as a request target, ensuring that the HTTP Verb is set to POST.

<figure><img src="/images/learn/accelerate/content-hub/push-configuration-action.png" alt="Push configuration - Action"/><figcaption></figcaption></figure>

#### Push configuration - Trigger
Next, create a trigger by going to Manage > Triggers. For our content example we want the action to be executed when a content item becomes approved (status = final). For this we will set the objective to “Entity modification”, and the Execution type to “In background” (as it doesn’t need to run synchronously). On the Conditions tab, click “Add definition” and select “Content”. Now add four conditions:
<ul>
  <li>Status, has changed</li>
  <li>Status, current value, contains, all, Final</li>
  <li>OR <ul><li>Is draft, current value, equals, false</li><li>Is draft, current value, is empty</li></ul></li>
</ul>


Then, on the Actions tab, click “Add action” and select the action you created earlier. Activate the trigger on save and we’re good to go.

Now, whenever a content entity is moved into the approved status, a message will be sent to the API endpoint or queue specified on the action. For example:

```json
{
  "saveEntityMessage": {
    "EventType": "EntityUpdated",
    "TimeStamp": "2025-02-06T09:02:41.129Z",
    "IsNew": false,
    "TargetDefinition": "M.Content",
    "TargetId": 30176,
    "TargetIdentifier": "Content.PhysicalFitness",
    "CreatedOn": "2020-10-26T13:38:40.6346681Z",
    "UserId": 37114,
    "Version": 11,
    "ChangeSet": {
      "PropertyChanges": [],
      "Cultures": [
        "(Default)"
      ],
      "RelationChanges": [
        {
          "Relation": "ContentLifeCycleToContent",
          "Role": 1,
          "Cardinality": 0,
          "NewValues": [
            9796
          ],
          "RemovedValues": [
            9795
          ],
          "inherits_security_original": true,
          "inherits_security": true
        },
        {
          "Relation": "MContentToAvailableRoute",
          "Role": 0,
          "Cardinality": 1,
          "NewValues": [
            10629,
            10628
          ],
          "RemovedValues": [
            10627,
            10626
          ],
          "inherits_security_original": true,
          "inherits_security": true
        },
        {
          "Relation": "MContentToActiveState",
          "Role": 0,
          "Cardinality": 1,
          "NewValues": [
            10622
          ],
          "RemovedValues": [
            10621
          ],
          "inherits_security_original": true,
          "inherits_security": true
        },
        {
          "Relation": "AssignedUserGroupToMContent",
          "Role": 1,
          "Cardinality": 1,
          "NewValues": [
            728
          ],
          "RemovedValues": [
            712
          ],
          "inherits_security_original": true,
          "inherits_security": true
        }
      ],
      "inherits_security_original": true,
      "inherits_security": true,
      "is_root_taxonomy_item_original": false,
      "is_root_taxonomy_item": false,
      "is_path_root_original": false,
      "is_path_root": false,
      "is_system_owned_original": false,
      "is_system_owned": false
    }
  },
  "context": {}
}
```
<br/><br/>
If further details about the entity are required, they can be retrieved via the REST API, or SDKs using the <code>TargetId</code> from the message body.

### Pull Content
Content can be retrieved from Content Hub using the APIs, either directly or using the SDKs. Details on this approach are covered in the [External Integrations](/learn/accelerate/content-hub/implementation/custom-logic/external-integrations) recipe.

## Related Recipes

<Row columns={2}>
  <Link title="Scripts Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />
    <Link title="External Integrations" link="/learn/accelerate/content-hub/implementation/custom-logic/external-integrations" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Content Types" link="https://doc.sitecore.com/ch/en/users/content-hub/content-types.html"/>
  <Link title="Triggers" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/triggers.html"/>
  <Link title="Actions" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/actions.html" />
   <Link title="Sitecore Connect for Content Hub - CMP" link="https://doc.sitecore.com/xp/en/developers/connect-for-ch/50/connect-for-content-hub/sitecore-connect-for-content-hub---cmp.html" />
  <Link title="Sitecore Connect for Content Hub - XM Cloud" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-connect-for-content-hub.html" />
  <Link title="Sitecore Connect for Content Hub - XM/XP" link="https://doc.sitecore.com/xp/en/developers/connect-for-ch/40/connect-for-content-hub/sitecore-connect-for-content-hub---cmp.html" />

</Row>


