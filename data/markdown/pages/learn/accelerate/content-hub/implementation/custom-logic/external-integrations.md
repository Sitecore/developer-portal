---
title: 'External Integrations'
description: 'Guidlines for script-based integration for external systems and third-party APIs to integrate with Sitecore Content Hub.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
created: '2024-12-13'
audience: ['Product Owners','Technical Implementers', 'Architects','System Administrators']
---


## Context
 Sitecore offers strong [internal scripting capabilities](/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios), supported with its [Actions](https://doc.sitecore.com/ch/en/developers/cloud-dev/actions.html) and [Triggers](https://doc.sitecore.com/ch/en/developers/cloud-dev/triggers.html) framework, however there are certain use-cases which are more appropriate to implement via external scripting.

Use-cases include bulk tasks, scheduled tasks and integrations with other platforms where data might be read from or sent to Content Hub. This is important as internal scripts are not intended for long-running operations. 

Please note that there are specific libraries approved for use in internal scripts to ensure security and compliance. For more information on these guidelines, refer to the [Script guidelines](https://doc.sitecore.com/ch/en/developers/cloud-dev/script-restriction.html) on our documentation site.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.


## Execution
Sitecore Content Hub supports external scripting through its REST API, WebClient SDK, Fluent SDK, and JavaScript SDK. These enable automation, data synchronisation, and integration with third-party systems.

Other ways to interact with Content Hub externally are via the Preview / Delivery API (GraphQL) and the Content Hub CLI. GraphQL is for read-only querying; the CLI is a command-line driven method of interacting with Content Hub (mainly for deployment-related tasks, but can also run custom code via plugins).

Tasks these APIs and SDKs can be used to automate include:
<ul>
  <li>Fetching or Pushing Content: Automate retrieval or updates of digital assets and metadata.</li>
  <li>Processing Data: Perform transformations or validation on entities.</li>
  <li>Integration: Synchronise Sitecore Content Hub data with external systems or services.</li>
</ul>

The following is a summary of of External Integration options.


### <strong>REST API</strong>

| Language / Platform | Overview | Use Cases |
| ----------- | ----------- |----------- |
| Any capable of making HTTP requests | The Sitecore Content Hub REST API provides a hypermedia-driven way to interact with Content Hub resources through standard HTTP methods like GET, POST, PUT, and DELETE, representing and transferring resource data as JSON.  | Cross-platform, language-agnostic integrations.<br/><br/>Integration with 3rd party platforms to seamlessly exchange data.<br/><br/>Using the 3rd party’s HTTP connector, the REST API can be accessed to retrieve or manipulate content assets, update metadata, or automate workflows. | 


Read more on [REST API Documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/rest-api.html)

### <strong>WebClient SDK</strong>

| Language / Platform | Overview | Use Cases |
| ----------- | ----------- |----------- |
|C# (.NET)| C# .NET-based library, optimised for .NET applications. Simplifies interactions with the Content Hub REST API. <br/><br/> Suitable for server-less applications like Azure Functions and Durable Functions.| Our recommended choice for external implementations.<br/><br/>Automation of tasks not suited or possible with internal scripting (reporting or scheduled tasks, e.g. bulk updating expired assets).<br/><br/>Creating standalone console apps to perform one-off bulk updates. |


Read more on [WebClient SDK Documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/web-client-sdk.html)

### <strong>Fluent SDK</strong>
| Language / Platform | Overview | Use Cases |
| ----------- | ----------- |----------- |
|C# (.NET)|An alternative to the WebClient SDK by streamlining repetitive API calls in .NET with a chainable interface. |Scenarios involving intricate operations or multiple sequential calls, enhancing developer productivity by reducing code verbosity.|

Read more on [Fluent SDK Documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/fluent-sdk.html)

### <strong>JavaScript SDK</strong>
| Language / Platform | Overview | Use Cases |
| ----------- | ----------- |----------- |
|JavaScript|Designed for browser-based and client-side applications to interact with Sitecore Content Hub's REST API. <br/><br/>
Enables real-time content updates or asset retrieval in web apps.|Single-page applications (SPAs) or progressive web apps (PWAs) requiring Sitecore Content Hub data. <br/><br/> Portals or other web apps, to consume data from Sitecore Content Hub or update data.|

Read more on [JavaScript SDK Documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/javascript-sdk.html)

### <strong>Preview / Delivery APIs</strong>
| Language / Platform | Overview | Use Cases |
| ----------- | ----------- |----------- |
|GraphQL|Execute GraphQL queries using a type system you define for your data. <br/><br/>Similar to the REST API but read-only and optimised for speed.<br/><br/>Multiple queries can be batched into a single HTTP request which reduces network traffic.<br/><br/>A query editor with inbuilt code completion is also available on the API endpoints|Distributing content across multiple channels (web, mobile, print, etc.) by retrieving and adapting content from Content Hub.<br/><br/>Personalising web pages or applications by dynamically pulling relevant content based on user preferences, geolocation, or behaviour.|

Read more on [Delivery / Preview APIs (GraphQL)](https://doc.sitecore.com/ch/en/developers/cloud-dev/graphql.html)


### <strong>Cloud CLI</strong>
| Language / Platform | Overview | Use Cases |
| ----------- | ----------- |----------- |
| Command Line, PowerShell, Bash, C# (for plugins)
| A command-line interface and wrapper around the Web Client SDK. <br/><br/>The CLI is compatible with Linux, Windows and MacOS. <br/><br/>It also has a plugin system in which custom commands can be written using the same methods as the Web Client SDK.|Automation of Sitecore Content Hub processes such as package import / export.<br/><br/>Serializing and de-serializing content for sharing between developers.<br/><br/>Performing 'diffs' against entities in two environments to check for inconsistencies.|


Read more on [Content Hub CLI](https://doc.sitecore.com/ch/en/developers/cloud-dev/content-hub-command-line-interface--cli-.html)

## Insights

### <strong>Internal vs external integrations</strong>
Internal scripts are great for short-running atomic operations or for immediate validation feedback. 

For long-running operations, external integrations should be used. Internal scripts are not suitable for long running operations, as after 12 minutes, the script worker considers the internal script stuck and starts a new worker to relaunch it. This can cause resource starvation and data inconsistency.

To cater for the varying load your Content Hub instance may be under, make sure none of your internal scripts have a run time over 10 minutes. Script analytics can be found within the script page in the manage area.

### <strong>Which API or SDK for my use-case?</strong>
For most non-trivial implementation use-cases (e.g. scheduled bulk update tasks), we recommend the WebClient SDK or Fluent SDK. .NET is a proven technology and is understood widely by Sitecore. This is also true of the other APIs, however .NET provides a structured platform, whether running in a serverless environment or as a traditional program, e.g. Azure Functions or a console app.

For read-only data access, using the GraphQL APIs is the recommended approach.

The Content Hub CLI is great for automation of deployments or serialization of entities to share between environments.

Overall, most implementations that we see from Sitecore customers and partners are using the WebClient SDK. Otherwise we see implementations leveraging the REST API or GraphQL endpoints via 3rd party platforms.

### REST API Insights

Developers can navigate and manipulate resources using hyperlinks rather than hard-coding URLs. Example uses include retrieving assets (GET requests), creating new entities (POST), or updating resource properties (PUT / POST). 

Access is through HTTPS endpoints, and - unlike the other SDKs - throttling must be managed in code (i.e. via HTTP 429 error management). For full usage examples and best practices, refer to the documentation.

Authentication is required to secure these API calls.

#### REST API Example

The following example fetches assets from the Content Hub using Postman for debugging and exploration.


<strong>1. Setup a GET Request</strong>

| Key | Value |
| ----------- | ----------- |
|URL|https://your-content-hub-instance/api/entities/query?query=Definition.Name=='M.Asset'|
|Method| <code>GET</code> |
|Headers - Authorization| <code>Bearer your-access-token</code> |
|Headers - Content-Type| <code>application/json</code> |

<strong>2. Run the Request</strong>
Open Postman, create a new request, and paste the URL. Add headers for authentication and content type. We recommend using an OAuth token for authentication - review the [documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/oauth-tokens.html) for more information.

<strong>3. View Response</strong>
You’ll see JSON data for assets returned by the API.

#### REST API Example using JavaScript

```typescript

const apiUrl = "https://your-content-hub-instance/api/entities/query?query=Definition.Name=='M.Asset'";
const apiKey = "your-api-key";

fetch(`${apiUrl}?query=Definition.Name=='M.Asset'`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => {
    console.log("Assets:", data);
  })
  .catch(error => console.error("Error fetching assets:", error));


```
> Note your authentication key should not be stored in plain text, this is simply an example for local testing.

### Webclient SDK Insights
The WebClient SDK can be considered Sitecore Content Hub’s first-class, typical first choice for non-trivial external implementations. Robust authentication and built-in capabilities streamline cloud-based operations, reducing boilerplate code and improving reliability.

Another interesting use case with the WebClient SDK is creating standalone console apps to perform bulk updates. Often when adding a new member onto an entity there will be a requirement to populate that member for historic entities. 

The WebClient SDK can also make use of parallelisation libraries to perform multi-threaded execution - improving bulk task execution times.

#### Getting Started

Add the following NuGet feed to your Visual Studio package sources to pull in the required packages  - https://nuget.sitecore.com/resources/v3/index.json

Then create a new project in Visual Studio. The project can be either a console application or an Azure Function App. Refer to the documentation on how to [authenticate your Webclient SDK](https://doc.sitecore.com/ch/en/developers/cloud-dev/authentication-1286040.html) with your Content Hub instance.

#### Example Webclient SDK

In this example we use <code>EntityLoadConfiguration.Full</code> - in a real world scenario it is best practice to load a minimal entity configuration set. Refer to the [EntityLoadConfiguration documentation](https://doc.sitecore.com/ch/en/developers/api-reference/sdk--stylelabs.m.framework.essentials.loadconfigurations.entityloadconfiguration.html) for details.

```typescript

using Stylelabs.M.Sdk;
using Stylelabs.M.Sdk.WebClient.Querying;

public async Task FetchAssetsAsync()
{
    var client = MClientFactory.CreateMClient(new MClientOptions
    {
        ClientId = "your-client-id",
        ClientSecret = "your-client-secret",
        Endpoint = new Uri("https://your-instance-id.contenthub.azure.com/")
    });

    var query = Query.CreateQuery(entities => entities
        .Where(entity => entity.DefinitionName == "Asset"));

    var assets = await client.Querying.QueryAsync(query);

    if (assets.Items.Any())
    {
        foreach (var assetEntity in assets.Items)
        {
            var asset = await client.Entities.GetAsync(assetEntity.Id.Value, EntityLoadConfiguration.Full);
            Console.WriteLine($"Asset ID: {asset.Id}, Asset Title: {asset.GetPropertyValue<string>("Title")}");
        }
    }
}

```

### Fluent SDK Insights
In comparison with the WebClient SDK - they are both C# .NET libraries for interacting with the Sitecore Content Hub, but they serve slightly different purposes:

<ol>
  <li>The WebClient SDK focuses on simplifying basic API calls. It is suited for developers who need structured, out-of-the-box functionality to perform standard operations, such as CRUD (Create, Read, Update, Delete) tasks, without requiring deep customization.</li>
  <li>The Fluent SDK offers a more intuitive, chainable syntax that streamlines complex or repetitive workflows. It is ideal for scenarios involving intricate operations or multiple sequential calls.</li>
</ol>

#### Using the Fluent SDK to fetch assets

```typescript

using Stylelabs.M.Sdk.Fluent;

public async Task FetchAssetsUsingFluentSdk()
{
    var fluentClient = new FluentClient(MClient);

    var result = fluentClient.Entities.GetMany(new long[] { 6, 7 });

    foreach(var item in result)
    {
        if (item.Id.HasValue && item.Id.Value > default(long))
        {
            MClient.Logger.Info("Item" + item.Id.Value);
        }
    }
}


```

### JavaScript SDK Insights
Further ideas for use-cases for the JavaScript SDK include:
<ol>
  <li>Dynamic UI Interactions: Enable real-time content updates or asset retrieval in web apps.</li>
  <li>Lightweight Applications: Ideal for front-end apps requiring Sitecore Content Hub data.</li>
</ol>

#### Using the JavaScript SDK to create an asset

```typescript

const endpoint = "https://yourch.sitecoresandbox.cloud";

const oauth = new OAuthPasswordGrant(
    "client_id",
    "client_secret",
    "username",
    "password"
);

const client = new ContentHubClient(endpoint, oauth);
var isAuthenticated = await client.internalClient.authenticateAsync();

if (isAuthenticated == false) {
  console.log("Authentication issue, please check your config.);
  return;
} 

let loadConfig = {
  cultureLoadOption: CultureLoadOption.Default,
  propertyLoadOption: new PropertyLoadOption([
    "Title",
    "FileName"
  ])
};

var entity: IEntity = await client.entityFactory.createAsync("M.Asset", EntityLoadConfiguration);
entity.setPropertyValue("Title", "Asset Updated from JavaScript SDK");

var assetId: number = await client.entities.saveAsync(entity);
console.log("Updated asset with ID: " + assetId);

```

### JavaScript SDK Insights
The GraphQL type system knows about Sitecore templates so that you can create and validate strongly typed queries against real fields. Template changes are updated in real-time and mapped to GraphQL types.

#### Using the GraphQL API to get assets
<strong>Query</strong>

```typescript
query getAssets(first: 10)
{
  m_Asset() {
    id
    filename
    description
  }
}
```

<strong>Response</strong>

```typescript
query getAssets(first: 10)
{
  m_Asset() {
    id
    filename
    description
  }
}
```

### Content Hub CLI Insights
The CLI has a plugin system in which custom commands can be written using the same methods as the Web Client SDK. These plugins are easily sharable with other developers and deployable on build environments.

#### Pulling Assets with the Content Hub CLI
```typescript
ch-cli serialization pull entity --definition "M.Asset"
```

## Related Recipes

<Row columns={2}>
<Link title="Scripts Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />
<Link title="Webclient SDK Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/webclient-sdk-scenarios" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Internal script guidance" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/script-restriction.html" />
  <Link title="SDK / API Oveview" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/external-integration.html " />
  <Link title="REST API" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/rest-api.html" />
  <Link title="OAuth Tokens" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/oauth-tokens.html" />
  <Link title="Authentication" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/authentication-1286040.html" />
  <Link title="Fluent SDK" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/fluent-sdk.html" />
  <Link title="Delivery / Preview APIs (GraphQL)" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/graphql.html" />
  <Link title="Content Hub CLI" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/content-hub-command-line-interface--cli-.html" />
</Row>

