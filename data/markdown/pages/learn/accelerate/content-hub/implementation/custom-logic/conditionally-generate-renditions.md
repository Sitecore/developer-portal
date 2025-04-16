---
title: 'Conditionally generate renditions'
description: 'How to conditionally generate a predefined set of renditions by attaching an additional Media Processing Matrix'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-12-13'
created: '2024-12-13'
audience: ['Technical Implementers', 'Architects']
---


## Context
Processing additional renditions results in additional consumption of Media storage and increases the time to process your Asset. Sometimes these additional renditions are only needed when certain conditions are met. 

As we want to save some storage space we will attach an additional <strong>Media Processing Matrix</strong> through the <strong>Trigger and Actions</strong> framework. This allows us to pre configure additional renditions and to conditionally generate these renditions for specific Assets.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
The following walks through the steps of pre-configuring additional redentions and generating them for specific Assets.

### <strong>Add a new Media Processing Matrix</strong>
This will allow us to pre-configure renditions that can be used for <strong>Social</strong> media. 
<ol>
  <li>Go to Manage > Media Processing as a Super User.</li>
  <li>Click the “New set” button and create a new set with the following details:<ul><li>Name: <em>Social</em></li><li>Auto-run: <em>disabled</em></li></ul><img src="/images/learn/accelerate/content-hub/social-new-set.png" alt="New Set on Media Processing"/></li>
  <li>Once your new set has been created, you can go ahead and configure your desired media processing flow.</li>
  <li>Next <strong>Save</strong> and <strong>Publish</strong> your newly created Media Matrix to make it available.<img src="/images/learn/accelerate/content-hub/media-matrix.png" alt="Media Matrix"/></li>
</ol>

### <strong>Create a Script & Action to attach the Matrix</strong>
Create a Script & Action that attaches your newly-created media matrix to a Target Asset. More detailed guidlines on Scripts can be found on the [Scripts Guidance and Scenarios recipe](/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios).

<ul>
  <li>Go to Manage > Script as a Super User.</li>
  <li>Create a new Script with the following details:<ul><li>Name: <em>PREFIX - Add Social Media Processing Matrix</em></li><li>Type: <em>Action</em></li></ul><img src="/images/learn/accelerate/content-hub/Social-Media-Processing-Matrix-Action.png" alt="New Script to attach to matrix"/></li>
  <li>Once created,create a script that retrieves the asset from the context against the new Media Matrix. Then <strong>Build</strong>, <strong>Publish</strong> and <strong>Enable</strong> the script. </li>
</ul>
```typescript
using System.Linq;

//Retrieve the asset from the Context
var asset = Context.Target as IEntity;

//Define the name of the MediaMatrix entity
string mediaMatrixSetName = "Social";

//Create the query to search for the MediaMatrix
var query = Query.CreateQuery(
    entities =>
        from 
            e in entities
        where
            e.DefinitionName == "M.MediaMatrix" &&
            e.Property("MediaMatrixName") == mediaMatrixSetName
        select e);

//Search for the MediaMatrix entity
IIdQueryResult queryResult = await MClient.Querying.QueryIdsAsync(query);

//If no result, throw exception
if(!(queryResult?.Items.Count > 0))
{
    var message = $"The MediaMatrix {mediaMatrixSetName} is not found.";
    MClient.Logger.Error(message);
    throw new Exception(message);
}

//Retrieve the entity from the result
var mediaMatrixID = queryResult.Items.First();

//Search for the relation between the MediaMatrix and the Asset
var mediaMatrixRelation = await asset.GetRelationAsync<IChildToManyParentsRelation>("MediaMatrixToAsset");

//Check if the asset is already linked to the specified Media Matrix
if(!mediaMatrixRelation.Parents.Contains(mediaMatrixID))
{
    mediaMatrixRelation.Parents.Add(mediaMatrixID);
    await MClient.Entities.SaveAsync(asset);
    MClient.Logger.Info($"{mediaMatrixSetName} set relation added for asset {asset.Id.Value}.");
}
else
{
    MClient.Logger.Info($"{mediaMatrixSetName} has been already added for asset {asset.Id.Value}.");
}
```

<ul>
  <li>Next navigate to Actions (Manage > Actions).</li>
  <li>Create a New Action by Hitting the “New Action” button with the following details:<ul><li>Name: <em>PREFIX - Add Social Media Processing Matrix</em></li><li>Type: <em>Action Script</em></li><li>Script: <em>PREFIX - Add Social Media Processing Matrix (this is your previously created Script)</em></li></ul><img src="/images/learn/accelerate/content-hub/New-Action.png" alt="New Action to attach to matrix"/></li>
</ul>

### <strong>Create a Trigger for specific Conditions</strong>
Create a trigger that will be executed when specific conditions are met.
<ul>
  <li>Navigate to Manage > Triggers as a Super User</li>
   <li>Create a new trigger by clicking the New Trigger button.</li>
   <ul>
      <li><strong>General</strong> - Fill in the General tab with the following details:<ul><li>Name: <em>PREFIX - Add Social Media Processing Matrix</em></li><li>Objective: <em>Entity Creation, Entity Modification</em>. The Objective in combinations with the Conditions allows us to define when the trigger will be executed.</li><li>Execution type: <em>In Background</em>. Use ‘In Background’ where possible as ‘In Process’ blocks the entity save process.</li></ul></li>
      <img src="/images/learn/accelerate/content-hub/trigger-save-media-matrix.png" alt="New Trigger based on condition"/>
      <li><strong>Conditions</strong> - Fill in the Conditions tab with the following details:<ul><li>Add the “M.Asset” target definition as we want to run the trigger for Assets.</li>
        <li>We will first define to which conditions the asset need to apply in order to run the Action (the current state of the Asset):<ul><li>Add Content Repository and Final Lifecycle conditions first as a good practice:<ul><li>Final Lifecycle: <em>Created, Under Review, Approved</em></li><li>Content Repository: <em>Standard</em></li></ul></li><li>Add an additional condition to filter on Asset Type <em>Social</em>.</li><li>Finally we will also check if the Social media processing matrix isn’t attached to our Asset Yet by adding a filter for <strong>Media Matrix</strong>.</li></ul></li>
        <li>The second part of the Condition is a good place to reserve for identifying what has changed on the entity (we are only interested in relevant changes). Add an additional filter on the <strong>Asset Type</strong> relation changes. <img src="/images/learn/accelerate/content-hub/filter-on-asset-type-relation.png" alt="Additional filter on the Asset Type relation changes"/> 
        As a good practice, try to put as many conditions as possible that fit the situation on the trigger so we  avoid any unnecessary executions of our script. In the above example we split up 1) Conditions that indicate the current state of the entity (top), and 2) Conditions that checks any relevant changes made on the entity (bottom).</li></ul></li>
      <li><strong>Actions</strong> - As we are using an "In Background” execution style trigger we can only configure “Post Actions”. To finish the trigger setup, point the Post action towards the <em>PREFIX - Add Social Media Processing Matrix</em> script that we have created.<img src="/images/learn/accelerate/content-hub/post-action-media-matrix.png" alt="Point the Post action towards the script created"/></li>
   </ul>
</ul>

When adding the Social Taxonomy to your asset, the Facebook and Instagram renditions are now automatically generated.

#### Debugging 

<ul>
  <li><strong>Actions Auditing</strong> - we can check and verify that the trigger has run from the Actions Auditing screen. Go to Manage > Actions as a Super User and on the <strong>Audting</strong> tab we can see any trigger execution. <img src="/images/learn/accelerate/content-hub/trigger-execution-log.png" alt="Trigger Execution logs"/></li>

  <li><strong>Script Logging</strong> - as there might be something wrong with your script, you can also check script logging. Navigate to your script and hit the “view logs” button.<img src="/images/learn/accelerate/content-hub/script-logs.png" alt="Script Execution logs"/></li>

</ul>

## Related Recipes

<Row columns={2}>
  <Link title="Scripts Guidance and Scenarios" link="/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Create processing flows" link="https://doc.sitecore.com/ch/en/users/content-hub/create-processing-flows.html" />
  <Link title="Create media processing sets" link="https://doc.sitecore.com/ch/en/users/content-hub/create-media-processing-sets.html" />
  <Link title="Work with scripts" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/work-with-scripts.html" />
  <Link title="Create a trigger" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/create-a-trigger.html" />
  <Link title="Create an action" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/create-an-action.html" />
  <Link title="Media processing use cases" link="https://doc.sitecore.com/ch/en/users/content-hub/media-processing-use-cases.html" />
</Row>


