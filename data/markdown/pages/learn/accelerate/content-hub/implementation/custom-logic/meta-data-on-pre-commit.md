---
title: 'Automatically set meta data on your entitity on pre-commit'
description: 'How a pre-commit script can be setup to adjust a to be saved entity before it actually is committed to the database.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-09'
created: '2025-05-09'
audience: ['All']
---

## Context
Some business want to apply custom business logic on the data that will be saved on the Asset. In this example I do have a taxonomy called Region with values EU, US and GLOBAL. As EU and US are falling under GLOBAL, I want that if GLOBAL is one of the selected values for Region on my Asset, then the list should be restricted to GLOBAL only and any additional selected values need to be removed.

In order to make this happen, we will implement a PRE-COMMIT script that adjusts the Global relation based on our defined business logic. 

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.



## Execution
To gather this requirement we will need to setup a trigger, an action and a script. It is important to setup this action on the pre-commit phase of your trigger so that the meta data will be adjusted before we commit the data into the database. Any changes made will then also automatically be reflected on your detail page after your save action.

Be aware that there is a performance penalty on using pre-commit scripts as it is blocking the save process. Therefore, make sure that the logic being used is minimalistic and performant. Whenever it is required to do more complex logic on automatically setting meta data on an entity you should setup your trigger to run in background instead.

### Create an Action Script

Navigate to the Scripts page as a super user (Manage > Scripts) and create a new Script with the following properties
- Name: CUST - Adjust Region
- Type: Action

The following code can be used as guidance needed for the script. Please note we **DO NOT** explicitly save the entity in this script, as this is a pre-commit phase script the changes will still be committed automatically by Content Hub.

```
using Stylelabs.M.Framework.Essentials.LoadOptions;
using System.Collections.Generic;
using System.Linq;

const string regionRelationName = "CUSTRegionToMAsset";
const string globalRegionIdentifier = "CUST.Region.Global";

//get the target entity and relation
IEntity target = Context.Target as IEntity;
var regionRelation = target.GetRelation(regionRelationName);
var assignedIds = regionRelation.GetIds();

var targetID = 0L;
if(target.Id != null){
    targetID = target.Id.Value;
}

MClient.Logger.Info($"{targetID}: Running Region adjustment, regions: {string.Join(",", assignedIds.ToArray())}");

//fetch global entity
var globalEntity = await MClient.Entities.GetAsync(globalRegionIdentifier, EntityLoadConfiguration.Minimal).ConfigureAwait(false);

//If user selected ‘Global’ region in combination with any other region, only ‘Global’ region should be saved.
if (assignedIds.Contains(globalEntity.Id.Value))
{
    MClient.Logger.Info($"{targetID}: Global detected, defaulting to only Global region");
    assignedIds = new List<long> { globalEntity.Id.Value };
}

MClient.Logger.Info($"{targetID}: Updating regions relation");
//update region relation with new values
regionRelation.SetIds(assignedIds);
```
<br/><br/>
`CUSTRegionToMAsset` is a custom taxonomy relation as per schema setup - amend this to your setup.
As always, Build Publish and Enable the script

### Create an Action

Go to the Actions Admin page as a super user (Manage > Actions), and create an action with the following details
- Name: CUST - Adjust Region
- Type: Action Script
- Script: CUST - Adjust Region

<img src="/images/learn/accelerate/content-hub/pre-commit/image-20241213-124946.png" alt="Region"/>
<br/>

If your script doesn’t show up, please make sure you have build published and enabled your script

### Trigger setup
Go to the Triggers Admin page as a super user  (Manage>Triggers)
- Create a new Trigger, on the “General” Tab, configure the trigger with the following details
    - Name: CUST - Adjust Region
    - Description: Provide a desciption
    - Objective: Entity Modification
    - Execution Type: In Process
- On the “Conditions” tab
    - Add “M.Asset” definition
    - Add a condition where “Region” “has changed”
- On the Actions tab
    - Configure “CUST - Adjust Region” as a Pre-commit Action

<img src="/images/learn/accelerate/content-hub/pre-commit/image-20241213-125634.png" alt="Region"/>
<br/>

Pre-commit actions are only possible when selecting in process execution type.
<img src="/images/learn/accelerate/content-hub/pre-commit/image-20241213-125658.png" alt="Region"/>
<br/>
We only want to run our logic when the Region relation has changed.
<img src="/images/learn/accelerate/content-hub/pre-commit/image-20241213-125725.png" alt="Region"/>
<br/>

If you now select multiple regions on your asset and one of the Regions is Global, then the regions list will be defaulted to Global only. Please note this is immediately reflected in the interface upon save.

<video controls>
  <source src="/images/learn/accelerate/content-hub/pre-commit/video_1280.mp4" type="video/mp4"/>
</video>

## Insights
A pre-commit action is a good candidate to automatically set meta data on your entity. This will avoid multiple saves of the same entity and the result of your custom logic will be visible immediately in the interface. 

Be aware of performance implications however. If the logic you are implementing is to complex and/or compute intensive, then you should revert to a background action that happens after the initial save process. Recursive functions and queries on the database for instance are to be considered as red flags to be used in pre-commit actions.

Another powerful feature of pre-commit phase action script is the ability to get hold on what has been changed on your entity through the **ChangeTracker** property on the Context object of your script. Review the [Script properties](https://doc.sitecore.com/ch/en/developers/cloud-dev/script-properties.html#action-scripts) documentation for further insight.

## Related Recipes

<Row columns={2}>
  <Link title="Scripts Guidance and Scenarios" link="https://developers.sitecore.com/learn/accelerate/content-hub/implementation/custom-logic/scripting-guidance-and-scenarios" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Script properties" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/script-properties.html#action-scripts"/>
  <Link title="Script types" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/script-types.html#action" />  
  <Link title="Create an action" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/create-an-action.html" />  
  <Link title="Create a trigger" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/create-a-trigger.html" />  
</Row>
