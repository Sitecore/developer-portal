---
title: 'Environment Specific Settings'
description: 'Creating settings specific per environment in Content Hub'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
audience: "All"
---
## Context
Some Content Hub implementations require the need to store some values that are specific to a particular environment, such as integration URLs, or feature flags. The ideal place for these is an environment specific setting; they aren't particularly well known but are super useful and are exactly what we need here. When exporting settings from the Content Hub environment, settings marked as being environment specific are excluded during the package import, meaning you can safely deploy between environments without fear that these values will be overwritten.

## Execution
A clear use case for this is as described in the [Single-Sign On](m/learn/accelerate/content-hub/implementation/functional-security/sso-on-content-hub) recipe, where based on the environment in use (DEV, UAT, PROD), a different AD group mapping might be required.

### Create a Setting Entity
As environment specific settings cannot be created using the UI, we can instead use the API. To do this create a HTTP POST request to <code>/api/entities</code> with the following body:

create-setting.json
```typescript
{
    "identifier": "",
    "entitydefinition": {
        "href": "{{host}}/api/entitydefinitions/M.Setting"
    },
    "relations": {
        "SettingCategoryToSettings": {
            "parent": {
                "href": "{{host}}/api/entities/{{SettingCategoryId}}"
            }
        }
    },
    "properties": {
        "M.Setting.Name": "{{SettingName}}",
        "M.Setting.Label": {
            "en-US": "{{SettingLabel}}"
        },
        "M.Setting.Value": {},
        "M.Setting.EnvironmentSpecific": true
    }
}

```

Setting the <code>M.Setting.EnvironmentSpecific</code> property to <code>true</code> is crutial. This, as mentioned earlier, is not exposed through the UI and can only be set on creation (I.E. it cannot be updated later). Once created though, the setting can be managed in the same way as any others in the Manage > Settings section.

You will of course need to replace the tokens with your own specific values, and either choose an existing Setting Category or create a new one.

### Create a Setting Entity
Creating a new Setting Category is very similar to creating a Setting. Simply create a HTTP POST request to <code>/api/entities</code>, this time with the following body:

create-setting-category.json
```typescript
{
    "entitydefinition": {
        "href": "{{host}}/api/entitydefinitions/M.SettingCategory"
    },
    "properties": {
        "M.SettingCategory.Name": "{{SettingCategoryName}}",
        "M.SettingCategory.Label": {
            "en-US": "{{SettingCategoryLabel}}"
        }
    }
}
```
You will need to replace the tokens with your own desired values. The API will respond with a JSON payload containing the id and identifier of your newly created Setting Category which you can use to create a Setting.


## Insights
So now we know how to create environment specific settings in Content Hub, there's a few use cases where this can be used.

### External Components
Where you have external components which connect to external systems, there may be a need to connect to a relevant instance of that external system depending on the Content Hub environment. For example, the production instance of Content Hub should call <code>api.someservice.com</code>, but the dev instance of Content Hub should call <code>dev.api.someservice.com</code>. In this case the url should be stored in an environment specific variable, which is fetched within the external component.

```typescript
import { useEffect, useMemo, useState } from "react";

export default ({ createClient }) => {
  const [apiResponse, setApiResponse] = useState<string>("Waiting...");
  const client = useMemo(createClient, [createClient]);

  useEffect(() => {
    (async () => {
      if (client) {
        const setting = await client.settings.getSettingValueAndSchemaAsync([SettingCategoryName], [SettingName]);
        const apiUrl = JSON.parse(setting?.value ?? "")?.url;
        if (apiUrl) {
          const apiResponse = await fetch(apiUrl);
          setApiResponse(apiResponse.status.toString());
        } else setApiResponse("Could not load api url");
      }
    })();
  }, [client]);

  return <div>Api response is: {apiResponse}</div>;
};
```

### Scripts
There may also be cases where scripts should operate differently based on the environment. For example, you may have a script which automatically creates public links for assets. In production, it should create the public link, but in non-production environments should simply create a log.

```typescript
using System.Threading.Tasks;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;

const string SETTING_Category = "{SettingCategoryName}";
const string SETTING_Name = "{SettingName}";

const string SETTING_Property_Value = "M.Setting.Value";
const string SETTING_Property_Value_simulatePublicLinks = "{properyName}";

const string PUBLICLINK_DefinitionName = "M.PublicLink";
const string PUBLICLINK_Property_RelativeUrl = "RelativeUrl";
const string PUBLICLINK_Property_Resource = "Resource";
const string PUBLICLINK_Relation_ToAsset = "AssetToPublicLink";

var targetEntity = Context.Target as IEntity;

MClient.Logger.Info($"Script called for {Context.TargetId}");

var isSimulated = await GetIsSimulateSetting();

await CreatePublicLinkAsync(targetEntity.Identifier + "-original", "downloadOriginal", targetEntity.Id.Value, isSimulated);
await CreatePublicLinkAsync(targetEntity.Identifier + "-preview", "preview", targetEntity.Id.Value, isSimulated);

async Task<long?> CreatePublicLinkAsync(string relativeUrl, string renditionName, long assetId, bool isSimulated)
{
    var newPublicLinkEntity = await MClient.EntityFactory.CreateAsync(PUBLICLINK_DefinitionName);
    newPublicLinkEntity.SetPropertyValue(PUBLICLINK_Property_RelativeUrl, relativeUrl);
    newPublicLinkEntity.SetPropertyValue(PUBLICLINK_Property_Resource, renditionName);

    var assetRelation = await newPublicLinkEntity.GetRelationAsync(PUBLICLINK_Relation_ToAsset);
    assetRelation.SetIds(new List<long> { assetId });

    if(isSimulated)
    {
        MClient.Logger.Info($"Simulation enabled. Would created {newPublicLinkEntity}");   
        return null;
    }
    else
        return await MClient.Entities.SaveAsync(newPublicLinkEntity);
}

async Task<bool> GetIsSimulateSetting()
{
    var settingEntity = await MClient.Settings.GetSettingAsync(SETTING_Category, SETTING_Name);
    return settingEntity.GetPropertyValue<JToken>(SETTING_Property_Value).Value<bool>(SETTING_Property_Value_simulatePublicLinks);
}
```

### Post Deployment
A common use case of environment variables in a script is to update various entities such as actions and external components with environment specific values after a deployment. Further detail can be found in the [Multi Environments Deployment](/learn/accelerate/content-hub/pre-development/sprint-zero/multi-environments-deployment) recipe.


## Related Recipes

<Row columns={2}>
  <Link title="Single-Sign On in Content Hub" link="/learn/accelerate/content-hub/implementation/functional-security/sso-on-content-hub" />
  <Link title="Multi Environments Deployment" link="/learn/accelerate/content-hub/pre-development/sprint-zero/multi-environments-deployment" />
</Row>

## Related Documentation
<Row columns={2}>
  <Link title="Settings" link="https://doc.sitecore.com/ch/en/users/content-hub/settings.html" />
</Row>