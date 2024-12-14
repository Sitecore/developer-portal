---
title: 'External Integrations'
description: 'Guidlines for script-based integration for external systems and third-party APIs to integrate with Sitecore Content Hub.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-12-13'
audience: 'Technical Implementers, Solution Architects, Product Owners/Business Stakeholders'
---


## Context
While Sitecore offers strong [internal scripting capabilities](/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios), supported with its [Actions](https://doc.sitecore.com/ch/en/developers/cloud-dev/actions.html) and [Triggers](https://doc.sitecore.com/ch/en/developers/cloud-dev/triggers.html) framework, there are certain use-cases which are more appropriate to implement via external scripting.

Use-cases include bulk tasks, scheduled tasks and integrations with other platforms where data might be read from or sent to Content Hub. Internal scripts are not intended for long-running operations.

## Execution
Sitecore Content Hub supports external scripting through its REST API, WebClient SDK, Fluent SDK, and JavaScript SDK. These tools enable automation, data synchronisation, and integration with third-party systems.

### <strong>REST API</strong>
Ideal for cross-platform, language-agnostic integrations, the Sitecore REST API provides a hypermedia-driven way to interact with Content Hub resources through standard HTTP methods like GET, POST, PUT, and DELETE, representing and transferring resource data as JSON. 

Developers can navigate and manipulate resources using hyperlinks rather than hardcoding URLs. Example uses include retrieving assets (GET requests), creating new entities (POST), or updating resource properties (PUT). Access is through HTTPS endpoints, and throttling must be managed in code - (i.e. via HTTP 429 error management). For full usage examples and best practices, refer to the documentation.

The Sitecore REST API can be integrated with 3rd party platforms to enable seamless data exchange with Sitecore Content Hub. Using the 3rd party’s HTTP connector, Sitecore endpoints can be accessed to retrieve or manipulate content assets, update metadata, or automate workflows. Authentication is required to secure these API calls.

Read more on [REST API Documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/rest-api.html)

### <strong>WebClient SDK</strong>
Optimised for .NET applications, the Sitecore WebClient SDK is a .NET-based library that simplifies interactions with the Content Hub REST API, making it suitable for serverless applications like Azure Functions and Durable Functions. In these environments, the SDK can be use to:

<ul>
  <li><strong>Fetch or Push Content</strong> - Automate retrieval or updates of digital assets and metadata.</li>
  <li><strong>Process Data</strong> - Perform transformations or validation on entities.</li>
  <li><strong>Integrate</strong> - Synchronise Content Hub data with external systems or services.</li>
</ul>

Its robust authentication and built-in capabilities streamline cloud-based operations, reducing boilerplate code and improving reliability.

Another interesting use case is creating standalone console apps to perform bulk updates. Often when adding a new member onto an entity there will be a requirement to populate that member for historic entities.

Read more on [WebClient SDK Documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/web-client-sdk.html)

### <strong>Fluent SDK</strong>
Streamlines repetitive API calls in .NET with a chainable interface, the Fluent SDK offers a more intuitive, chainable syntax that streamlines complex or repetitive workflows. It is ideal for scenarios involving intricate operations or multiple sequential calls, enhancing developer productivity by reducing code verbosity.

In comparison with the WebClient SDK - they are both .NET libraries for interacting with the Sitecore Content Hub, but they serve slightly different purposes:

<ul>
  <li><strong>The WebClient SDK</strong> focuses on simplifying basic API calls. It is suited for developers who need structured, out-of-the-box functionality to perform standard operations, such as CRUD (Create, Read, Update, Delete) tasks, without requiring deep customization.</li>

<li><strong>The Fluent SDK</strong> offers a more intuitive, chainable syntax that streamlines complex or repetitive workflows. It is ideal for scenarios involving intricate operations or multiple sequential calls, enhancing productivity by reducing code verbosity.</li>
</ul>

Read more on [Fluent SDK Documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/fluent-sdk.html)

### <strong>JavaScript SDK</strong>
Enables browser-based applications to interact with Content Hub, the JavaScript SDK is designed for browser-based and client-side applications to interact with Sitecore Content Hub's REST API. It simplifies asynchronous operations, such as:
<ul>
  <li><strong>Dynamic UI Interactions</strong> - Enable real-time content updates or asset retrieval in web apps.</li>
  <li><strong>Lightweight Applications</strong> - Ideal for front-end apps requiring Content Hub data.</li>
  <li><strong>Custom Portals</strong> - Build custom experiences that extend Sitecore's functionality.</li>
</ul>
Its native JavaScript environment makes it suited for single-page applications (SPAs) or progressive web apps (PWAs), ensuring a seamless user experience without server dependencies.

Read more on [JavaScript SDK Documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/javascript-sdk.html)

## Insights
For most use cases we recommend the WebClient SDK or Fluent SDK for implementations. .NET is a proven technology and is understood widely by the Sitecore ecosystem. This is also true of the REST API, however .NET provides a platform, whether running in a serverless environment or as a traditional program, e.g. Azure Functions or a console app.

### REST API Example
This approach fetches assets from the Content Hub using Postman for debugging and exploration.

#### 1.Setup a GET Request

| Key | Value |
| ----------- | ----------- |
|URL|https://your-content-hub-instance/api/entities/query?query=Definition.Name=='M.Asset'|
|Method| <code>GET</code> |
|Headers - Authorization| <code>Bearer your-access-token</code> |
|Headers - Content-Type| <code>application/json</code> |

#### 2. Run the Request
Open Postman, create a new request, and paste the URL. Add headers for authentication and content type. We recommend using an OAuth token for authentication - review ][documentation](https://doc.sitecore.com/ch/en/developers/cloud-dev/oauth-tokens.html) for more information.

#### 3. View Response
You’ll see JSON data for assets returned by the API.

### REST API Example using JavaScript

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

### Webclient SDK Examples
Add the following NuGet feed to your Visual Studio package sources to pull in the required packages  - https://nuget.sitecore.com/resources/v3/index.json

Create a new project in Visual Studio - the project can be either a console application or an Azure Function App.

Refer to the documentation on how to [authenticate your Webclient SDK](https://doc.sitecore.com/ch/en/developers/cloud-dev/authentication-1286040.html) with your Content Hub instance.

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

### Fluent SDK Examples
Using the Fluent SDK to fetch assets - 

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

## Related Recipes

<Row columns={2}>
<Link title="Scripts Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Actions" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/actions.html" />
  <Link title="Triggers" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/triggers.html" />
  <Link title="REST API" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/rest-api.html" />
  <Link title="OAuth Tokens" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/oauth-tokens.html" />
  <Link title="Authentication" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/authentication-1286040.html" />
  <Link title="Fluent SDK" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/fluent-sdk.html" />
</Row>

