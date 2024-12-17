---
title: 'Scripts Guidance and Scenarios'
description: 'An overview of the steps and best practices for creating, managing, and implementing custom scripts within Sitecore Content Hub.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-12-13'
audience: 'Technical Implementers, Solution Architects, Product Owners/Business Stakeholders'
---


## Context
Sitecore Content Hub offers extensive internal scripting with an internal user-friendly IDE that allows multiple processes and workflows to be automated using a combination of scripts, actions and triggers.

The use of scripts requires a good understanding of their intended use, the triggers framework and action types. Non-performant scripts can slow down a Content Hub instance, particularly if they are triggered often on high traffic entities (e.g. on Asset modification), or if executed ‘in-process’. 

It is important to know and apply the above topics to maintaining Content Hub’s performance and usability.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
Implementation of scripts in Sitecore Content Hub requires care to ensure scripts are reliable, performant, and maintainable. Here we will discuss solutions and best practice on each of the points posed in the section above. The guide includes guidance on pre-scripting audits, data mapping for efficient automation, quality control practices, and post-implementation checks to ensure that scripts enhance content structure, searchability, and usability within Sitecore Content Hub. 

### <strong>1. Gain a deep understanding of the entity model</strong>
Sitecore Content Hub relies on a detailed entity model with interconnected asset types, metadata fields, and taxonomy structures. Understanding and correctly mapping this model is essential for effective scripting. 

When building a script:
<ol>
  <li>Begin with an analysis of the entity model, including asset types, metadata structures, and taxonomies. Consider which of these your customisation may touch or could leverage.</li>
  <li>Establish a clear mapping of these relationships to guide scripting and avoid errors.</li>
  <li>Consider which custom schema or members are required in order to create desired script outputs.</li>
  <li>Document this model to provide a reliable reference that can be used across different scripts, reducing the risk of inconsistencies and errors.</li>
</ol>

For example, suppose you’re automating asset ingestion, and you need to assign each asset to the correct category, and to set metadata based on its type (e.g., image, video, document). 

Before writing any script, document the entire asset structure and related entities — such as category taxonomies, required metadata fields, and parent-child relationships. This helps prevent misclassification and ensures the script respects Content Hub’s entity relationships, reducing the chance of improperly linking or tagging assets. 

It is also important to feed back to the project stakeholders with this documentation, as often edge cases are identified. These can be more difficult to correct later, especially if a bulk data update is required.

### <strong>2. Learn and Leverage Sitecore’s SDKs</strong>
Sitecore Content Hub scripting requires knowledge of the Content Hub SDKs and data structures.

Developers must understand best practice to ensure scripts are efficient and performant, especially when the Content Hub instance contains large volumes of assets or metadata.
<ol>
  <li>Familiarise the development team with the Sitecore Content Hub Scripting SDK by utilising Sitecore’s comprehensive documentation to ensure scripts that interact with assets and metadata are both correct and optimised. </li>
  <li>Although this recipe is focused on Scripts, it is also important to understand the different phases of an entity update (Pre-commit, Validation, Security, Audit, Post) and the special Script types Metadata Processing and User events. Phases have different context variables available to support development.</li>
  <li>For advanced Content Hub developers; Shared scripts may be an option for re-using commonly used code.</li>
</ol> 

### <strong>3. Implement error handling and logging</strong>
Errors may stem from various sources, including incorrect SDK calls, data mismatches, unintended changes in related content structures, or even changes to external services. It is important to implement error handling and logging processes within Scripts so any issues can be easily diagnosed and resolved.

<ol>
  <li>Incorporate robust error handling and detailed logging mechanisms within all scripts to improve troubleshooting exercises.</li>
  <li>By capturing specific errors and tracking data flow, teams can identify and address issues quickly. Implementing a structured approach to logging helps developers diagnose the root cause of issues, whether they stem from SDK errors, data mismatches, or platform constraints.</li>
  <li>Leverage the different log levels (debug, info, warning, error) to ensure you have full information when debugging is required or minimal resource use when in production.</li>
  <li>Scripts can be debugged using the ch-cli - see the documentation for full details.</li>
  <li>Use consistent naming, content and structure conventions, across your Script logs. </li>
  <li>It is important to be concise and to combine information into each log entry as only the last 50 messages can be viewed in the script logs.</li>
</ol>

### <strong>4. Optimise for performance and scalability</strong>

Scripts that manage extensive datasets or complex workflows can impact Content Hub’s performance. Ensuring scripts are optimised to handle complex processing tasks without slowing down the system is critical, particularly for high-traffic environments or content-heavy implementations. 

In most cases, scripts are not the correct approach for doing bulk updates, rather they are intended for atomic operations.

<ol>
  <li>Ensure you use the async versions of method calls where possible to reduce blocking calls on the system.</li>
  <li>Review Script Telemetry reports to see which scripts are using the most processing time or are called most often. These are candidates for optimisation.</li>
  <li>Testing script performance in a development or staging environment with sample datasets can identify potential performance issues before deployment, reducing the risk of system slowdowns when managing large content volumes.</li>
  <li>If a script is performing bulk operations it may be more appropriate to use an External Implementation as Scripts are not intended to run for long periods.</li>
  <li>Use the correct Script Execution Type: There are two script execution types:<ul><li><em>In Process</em> - executing a script in process interrupts the ongoing process until the script has finished. This type of script runs immediately and should only be used when immediate feedback is required from the user interface. </li><li><em>In Background</em> - this type of script runs behind the scenes, without causing interruption. For performance reasons, always favour this script execution type.</li></ul></li>
</ol>

### <strong>5. Work within platform boundaries</strong>
Sitecore Content Hub enforces thresholds on internal scripts, such as execution limits, permissions and excluded libraries. External API calls are not possible. 
<ol>
  <li>Avoid doing bulk or long running operations with scripts. Sitecore recommend keeping the total script run time below 10 minutes. After 12 minutes, the script worker considers the script stuck and starts a new worker to relaunch it. This can cause resource starvation and data inconsistency.</li>
  <li>It is not possible to make REST API calls from a script. If this is required then another approach than Scripting should be used, e.g. via an via a connector or an external integration.</li>
  <li>Understand which libraries and attributes are restricted when building your solution. Certain .NET libraries are not allowed to be used in a script. See the documentation for full details.</li>
</ol>

### <strong>6. Documentation and version control</strong>
Scripting documentation must be thorough and accessible, as each script may need to be updated or repurposed over time. 
<ol>
  <li>Define a naming convention for Scripts. Try and include which schema are source and targets in the name (e.g. <code>Company Name</code> - Asset copy Campaign data to related Campaign Entity). Benefits include:<ul><li>Easier searching and finding of Scripts within the Manage → Scripts page. </li><li>Easier trail on which Trigger Events on which Entities are calling which Scripts.</li></ul></li>
  <li>Document each script’s purpose, affected entities, and dependencies to simplify future maintenance and updates. Document details of the script’s triggers as appropriate.</li>
  <li>Using a version control system allows tracking of script changes over time, making it easier to roll-back if needed and to manage script updates in line with platform changes or new requirements.</li>
  <li>This version control could be extended into an automated deployment process using the Content Hub CLI (see documentation below) or other API hooks. </li>
</ol>

### <strong>7. Testing and Monitoring</strong>
Comprehensive testing is essential to ensure scripts perform consistently and adapt to Content Hub updates or changes in organisational requirements.
<ol>
  <li>Implement a rigorous testing process that simulates real-world conditions, ensuring scripts work as expected under various scenarios. </li>
  <li>Regular monitoring and audits of script performance post-deployment allow teams to detect issues proactively and optimise scripts as the data model and system demands evolve.</li>
  <li>Build a suite of ideally automated (UI and / or API driven) tests to cover as many scenarios as possible. We recommend running these on a daily basis on a development environment to detect problems early.</li>
  <li>Regular testing is particularly important when developing new scripts - as these may conflict or have unintended effects. E.g. if the script triggers a save on a related entity, more scripts may be triggered that run on modification of that entity. </li>
  <li>Consider the impacts from scripts being triggered when entities or members are created, updated or deleted. It may make sense to consolidate multiple scripts into a single script (for performance reasons as well as avoiding race conditions or unexpected results)</li>
  <li>Due to Content Hub’s powerful extensibility, the platform likely be having new metadata or schema / schema relations added in order to meet new custom business requirements. An automated suite of tests will be a necessity in this case.</li>
</ol>

By following these solutions, teams can build and maintain scripts that enhance Sitecore Content Hub’s functionality, streamline asset and metadata management, and ensure content integrity, usability, and efficiency in the long term.

## Insights
The following are code examples to demonstrate some common use-cases for Content Hub scripting. Note that most scripts depend on custom schema in order to do anything meaningful, so they may require some changes to your Content Hub schema. 

The examples are designed to show the classes, methods, parameters and general approaches taken to solve a development challenge, rather than to be end-to-end solutions. Please refer to the Content Hub Scripting documentation for full details of the Scripting APIs and further examples.

When experimenting with these, always do so in a sandbox or development environment.

### <strong>Add User to default UserGroup on first login</strong>
| Script Type | Trigger Event |
| ----------- | ----------- |
| User post-registration | User post-registration |

```typescript
using System.Linq;

if (Context.ExternalUserInfo?.Provider != "SAML") 
{
    MClient.Logger.Info("Provider is not SAML");
    return;
}

var query = Query.CreateQuery(entities =>
    from e in entities
    where e.DefinitionName == "Usergroup" && e.Property("GroupName") == "FS.UserType.SSODefault"
    select e);

var defaultGroupId = await MClient.Querying.SingleIdAsync(query);
if (!defaultGroupId.HasValue) throw new InvalidOperationException("Default usergroup for SSO login not found.");

var relation = await Context.User.GetRelationAsync<IChildToManyParentsRelation>("UserGroupToUser");
relation.Parents.Add(defaultGroupId.Value);
MClient.Logger.Info("User added to UserGroup");
await MClient.Entities.SaveAsync(Context.User);
```

### <strong>Create Public Links for X Assets</strong>
| Script Type | Trigger Event |
| ----------- | ----------- |
| Action Script | Asset Change |

```typescript
using System.Linq;
using System.Threading.Tasks;

const string Constants_Rendition_Resource = "web_png_1_1";

var assetId = Context.TargetId;

// Check if public links don't exist yet
var query = Query.CreateQuery(entities => from e in entities
                                            where e.DefinitionName == "M.PublicLink"
                                            && e.Parent("AssetToPublicLink") == assetId.Value
                                            && e.Property("Resource") == Constants_Rendition_Resource
                                            && e.Property("IsDisabled") == false
                                            select e);
query.Take = 0;

var result = await MClient.Querying.QueryIdsAsync(query);
if (result.TotalNumberOfResults > 0)
{
    MClient.Logger.Info($"Public links already exist for asset with id '{assetId}' of resource '{Constants_Rendition_Resource}'");
    return;
}

// Create public links
await CreateForRendition(Constants_Rendition_Resource, assetId.Value);
MClient.Logger.Info($"Created public link for asset with id '{assetId}' of resource '{Constants_Rendition_Resource}'");

async Task CreateForRendition(string rendition, long assetId)
{
    var publicLink = await MClient.EntityFactory.CreateAsync("M.PublicLink");

    if (publicLink.CanDoLazyLoading())
    {
        await publicLink.LoadMembersAsync(new PropertyLoadOption("Resource"), new RelationLoadOption("AssetToPublicLink"));
    }

    publicLink.SetPropertyValue("Resource", rendition);

    var relation = publicLink.GetRelation<IChildToManyParentsRelation>("AssetToPublicLink");
    if (relation == null)
    {
        MClient.Logger.Error("Unable to create public link: no AssetToPublicLink relation found.");
        return;
    }

    relation.Parents.Add(assetId);

    await MClient.Entities.SaveAsync(publicLink);
    return;
}
```
### <strong>Keep a tally of related entity updates (Asset to Product)</strong>
This script shows how to capture audit information, look up related entities and store values. The ‘Product’ entity used here is a custom entity definition.

| Script Type | Trigger Event |
| ----------- | ----------- |
| Action Script | When Product.ProductToAsset or Asset.ProductToAsset has changed, or PreCommit on Asset.ProductToAsset |

```typescript
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

const string PropertyBagNameAffectedArticleIDs = "affectedArticleIDs";
const string PropertyBagNameAffectedProductIDs = "affectedProductIDs";

var entityId = Context.TargetId;
MClient.Logger.Info($"Script - Update Product Assets Count - Started - {Context.ExecutionEvent}");
MClient.Logger.Info($"Context - {Context}");

var entity = await MClient.Entities.GetAsync(entityId.Value).ConfigureAwait(false);

if(entity == null)
{
    MClient.Logger.Warn($"Cannot get entity by id: {entityId}. The entity may have been deleted.");
    return;
}

if(Context.ExecutionEvent == ExecutionEvent.OnSave)
{
    if(entity.DefinitionName == "M.Asset")
    {
        var productRelationChange = Context.ChangeTracker.GetChangeSet().RelationChanges.FirstOrDefault(i => i.Name == "FS.ProductToAsset");

        if(productRelationChange != null)
        {
            var removedProductIDs = productRelationChange.RemovedValues;
            MClient.Logger.Info($"removed Product IDs:{string.Join("|", removedProductIDs)}");
            Context.PropertyBag.Add(PropertyBagNameAffectedProductIDs, string.Join("|", removedProductIDs));
        }
    }

    return;
}

if(entity.DefinitionName == "M.Asset")
{
    MClient.Logger.Info($"Triggered by Asset change");

    if (entity.CanDoLazyLoading())
    {
        await entity.LoadMembersAsync(null, new RelationLoadOption("FS.ProductToAsset"));
    }

    var productRelation = entity.GetRelation<IChildToManyParentsRelation>("FS.ProductToAsset");

    MClient.Logger.Info($"Products Count:{productRelation.Parents.Count}");

    var affectedProductIDs = "";
    Context.PropertyBag.TryGetValue(PropertyBagNameAffectedProductIDs, out affectedProductIDs);

    var productLoadConfiguration = new EntityLoadConfiguration(
        CultureLoadOption.None,
        new PropertyLoadOption("FS.AssetsCount"), 
        new RelationLoadOption("FS.ProductToAsset"));

    if(!string.IsNullOrEmpty(affectedProductIDs))
    {
        foreach(var productIdRaw in affectedProductIDs.Split("|"))
        {
            long productId;
            if(!long.TryParse(productIdRaw, out productId))
            {
                MClient.Logger.Error($"Can not parse product id: {productIdRaw}");
            }

            IEntity productEntity = await MClient.Entities.GetAsync(productId, productLoadConfiguration);

            var assetRelation = productEntity.GetRelation<IParentToManyChildrenRelation>("FS.ProductToAsset");

            var assetsCount = assetRelation.Children.Count;

            MClient.Logger.Info($"assetsCount:{assetsCount}");

            productEntity.SetPropertyValue("FS.AssetsCount", assetsCount);

            await MClient.Entities.SaveAsync(productEntity);
        }
    }
    {
        foreach(var productId in productRelation.Parents)
        {
            IEntity productEntity = await MClient.Entities.GetAsync(productId, productLoadConfiguration);

            var assetRelation = productEntity.GetRelation<IParentToManyChildrenRelation>("FS.ProductToAsset");

            var assetsCount = assetRelation.Children.Count;

            MClient.Logger.Info($"assetsCount:{assetsCount}");

            productEntity.SetPropertyValue("FS.AssetsCount", assetsCount);

            await MClient.Entities.SaveAsync(productEntity);
        }
    }


    MClient.Logger.Info($"Affected Product IDs:{affectedProductIDs}");
}
else if(entity.DefinitionName == "FS.Product")
{
    MClient.Logger.Info($"Triggered by FS.Product change");

    var productEntity = entity;

    if (entity.CanDoLazyLoading())
    {
        await productEntity.LoadMembersAsync(new PropertyLoadOption("FS.AssetsCount"), new RelationLoadOption("FS.ProductToAsset"));
    }

    var assetRelation = productEntity.GetRelation<IParentToManyChildrenRelation>("FS.ProductToAsset");

    var assetsCount = assetRelation.Children.Count;

    MClient.Logger.Info($"assetsCount:{assetsCount}");

    productEntity.SetPropertyValue("FS.AssetsCount", assetsCount);

    await MClient.Entities.SaveAsync(productEntity);
}
else
{
    MClient.Logger.Info($"Triggered by {entity.DefinitionName} chnage, ignore");
}
```



## Related Recipes

<Row columns={2}>
  <Link title="Discovery Phase" link="/learn/accelerate/content-hub/pre-development/discovery/discovery-phase" />
  <Link title="External Integrations" link="/learn/accelerate/content-hub/implementation/custom-logic/external-integrations" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Scripts" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/scripts.html" />
  <Link title="Script types" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/script-types.html" />
  <Link title="Script restirctions" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/script-restriction.html#permitted-libraries" />
  <Link title="Debug a script using Visual Studio Code
" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/debug-a-script-using-visual-studio-code.html" />
  <Link title="Content Hub command line interface" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/content-hub-command-line-interface--cli-.html" />
  <Link title="Impersonation" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/impersonation.html" />
</Row>


