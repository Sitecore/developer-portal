---
title: 'Developing External Components'
description: 'Guide covering how to create a repository for Content Hub External Components'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2024-12-13'
audience: 'all'
---
## Context
External components in Content Hub allow custom react components to be injected into pages. The possibilities and use cases are endless, as anything that can be done in React, can be done with an external component.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution
Before starting development of external components, a repository should be created to store the code. This will also need to have a transpiler/build flow to package files for consumption in Content Hub. Details of how to create this are beyond the scope of this guide, but examples can be found [here](https://bitbucket.org/stylelabsdev/sitecore.ch.externalcomponents.examples/src).

Let's look at some use cases based on real-life examples. 

### <strong>Custom Button</strong>
A customer had a requirement for a button on a page, that when clicked called an api endpoint to perform an action. This can be easily achieved with the following code (note that it has been simplified for ease of reading) -

custom-button.jsx
```typescript
import ReactDOM from "react-dom";
import React from "react";
import Button from '@mui/material/Button';
import { RealtimeRequestByUsername } from "@sitecore/sc-contenthub-webclient-sdk/dist/models/notifications/realtime-request-by-username";

export default function createExternalRoot (container) {
    const clickHandler = async (url, client) => {
        // call the url
        const request = new RealtimeRequestByUsername();
        request.recipients.push("nvn@sitecore.net");
        request.setBody(`Endpoint ${url} successfully called`);
        await client.notifications.sendRealTimeNotificationAsync(request);
    }

    return {
        render(context) {
            if(!context.config.apiUrl)
                return;

            ReactDOM.render(
                <Button
                    variant="contained"
                    disableElevation
                    theme={context.theme}
                    onClick={() => clickHandler(context.config.apiUrl, context.client)}
                >
                    Custom Button
                </Button>,
                container
            );
        },
        unmount() {
            ReactDOM.unmountComponentAtNode(container);
        }
    }
}

```

<figure><img src="/images/learn/accelerate/content-hub/flavorful-external-component.png" alt="The configuration of the Custom Button external component"/><figcaption>The configuration of the Custom Button external component.</figcaption></figure>

There are two interesting concepts that have been applied here.
<ul>
<li>First is the context object that is passed to the render function. The config property, a JSON object that has the value of the configuration set in the external component, is being used to supply the url of the api endpoint to call. The context object also has a property called client which is a pre-authenticated Content Hub Javascript SDK client, and this is being used to supply a real-time notification to the user.</li>
<li>Second is the use of a Button component from the fantastic @material/mui library. This is interesting because, it's the same library that Content Hub uses internally, meaning we can produce components that match the look and feel of the rest of the application. Additionally, by setting the theme property, via the context object, the component will largely match the theme that the current user has set.</li>
</ul>

### <strong>Custom Form Control</strong>
This example is based on a requirement that a customer had for a dropdown menu to allow users to select the name of a member on an object. Here I'll simplify this to showing how to integrate a custom form control component. As an example, we're using the a [free API endpoint](http://api.zippopotam.us/GB/SW1) - which returns locations within a postcode area (in this case, SW1), to populate the dropdown menu. The simplified code is as follows:

custom-form-control.jsx
```typescript
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { MenuItem, TextField } from "@mui/material";

export default function createExternalRoot (container) {
    return {
        async render(context) {
            if(context?.options?.entityId == null || context?.config?.apiUrl == null)
                return;

            const entity = await context.client.entities.getAsync(context.options.entityId);

            const handleSelect = async value => {
                context.entity.setPropertyValue(context.config.propertyName, value);
                entity.setPropertyValue(context.config.propertyName, value);
                await context.client.entities.saveAsync(entity);
            };

            ReactDOM.render(
                <CustomFormControl
                    apiUrl={context.config.apiUrl}
                    label={context.config.propertyName}
                    theme={context.theme}
                    value={entity.getPropertyValue(context.config.propertyName)}
                    onSelect={handleSelect} />,
                container
            );
        },
        unmount() {
            ReactDOM.unmountComponentAtNode(container);
        }
    }
}

function CustomFormControl({ apiUrl, label, theme, value, onSelect })
{
    const [options, setOptions] = useState([]);
    useEffect(() => {
        async function getOptions() {
            const response = await fetch(apiUrl);
            if(response.ok)
            {
                const responseJson = await response.json();
                const options = responseJson.places.map(p => p['place name']);
                setOptions(options);
            }
        }
        if(!options.length)
            getOptions();
    }, [])

    const handleChange = event => {
        if(onSelect)
            onSelect(event.target.value);
    };

    return (
        <TextField
            select
            defaultValue={value}
            onChange={handleChange}
            label={label}
            theme={theme}
        >
            {options.map(option => (
                <MenuItem value={option}>{option}</MenuItem>
            ))}
        </TextField>
    )
}
```
<figure><img src="/images/learn/accelerate/content-hub/Custom-Form-Control-external-component.png" alt="The configuration of the Custom Form Control external component"/><figcaption>The configuration of the Custom Form Control external component.</figcaption></figure>

The Custom Form Control in place on a page. An entity details component has also been added to show the entity being updated, with persistence across page refreshes.

This component again adds two interesting concepts. The first, is that of using the [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to retrieve data from an api endpoint - whilst this may seem trivial, it is worth mentioning, because of the infinite possibilities that it opens for bringing data into a Content Hub component or page.

The second concept is probably the more interesting one, which is that of using the Javascript SDK to retrieve and save entities. In this case we are only modifying one property, but there is no reason a component could not change many properties, or even many entities!

### <strong>Custom Form Control</strong>
The client wanted a user to be able to easily enter translations for a product - being able to see the en-US version alongside the field that a translation could be entered. Sounds like a job for external components right? The simplified code is as follows:

entity-details-language-viewer.jsx
```typescript
import ReactDOM from "react-dom";
import React from "react";
import { MenuItem, TextField } from "@mui/material";

export default function createExternalRoot (container) {
    return {
        render(context) {
            if(context.entity == null)
                return;

            ReactDOM.render(
                <EntityDetailsLanguageViewer
                    client={context.client}
                    config={context.config}
                    culture={context.options.culture}
                    entity={context.entity}
                    theme={context.theme} />,
                container
            );
        },
        unmount() {
            ReactDOM.unmountComponentAtNode(container);
        }
    }
}

function EntityDetailsLanguageViewer({ client, config, culture, entity, theme })
{
    const [language, setLanguage] = React.useState(culture);

    return (
        <div>
            <LanguageSelector client={client} language={language} theme={theme} onLanguageSelect={setLanguage} />
            <EntityViewer client={client} config={config} entity={entity} language={language} />
        </div>
    )
}

function LanguageSelector({ client, language, theme, onLanguageSelect })
{
    const [languages, setLanguages] = React.useState([]);
    React.useEffect(() => {
        async function getLanguages() {
            const cultures = await client.cultures.getAllCulturesAsync();
            setLanguages(cultures);
        }
        if(!languages.length)
            getLanguages();
    }, [])

    const handleChange = event => {
        onLanguageSelect(event.target.value);
    };

    return (
        <TextField
            select
            value={language}
            size="small"
            theme={theme}
            onChange={handleChange}
        >
            {languages.map(language => (
                <MenuItem value={language}>{language}</MenuItem>
            ))}
        </TextField>

    )
}

function EntityViewer({ client, config, entity, language })
{
    const getPropertyLabel = (label, language) =>
    {
        return label[language] ?? (Object.values(label)[0] ?? "");
    }

    const getPropertyValue = (entity, propertyName, isMultiLanguage, language) =>
    {
        return entity.properties[propertyName][isMultiLanguage ? language : "Invariant"] ?? "-";
    }

    if(!language.length)
        return;

    const [propertyConfigurations, setPropertyConfigurations] = React.useState([]);
    React.useEffect(() => {
        async function getPropertyConfigurations() {
            const entityDefinition = await client.entityDefinitions.getAsync(config.entityDefinitionName);
            const propertyConfigs = entityDefinition.memberGroups
                .flatMap(mg => mg.memberDefinitions)
                .filter(m => config.properties.includes(m.name))
                .map(m => ({ name: m.name, labels: m.labels, multiLanguage: m.isMultiLanguage }));
            setPropertyConfigurations(propertyConfigs);
        }
        if(!propertyConfigurations.length)
            getPropertyConfigurations();
    });

    return (
        <div>
            {propertyConfigurations.map(propertyConfiguration => (
                <dl>
                    <dt>{getPropertyLabel(propertyConfiguration.labels, language)}</dt>
                    <dd>{getPropertyValue(entity, propertyConfiguration.name, propertyConfiguration.multiLanguage, language)}</dd>
                </dl>
            ))}
        </div>
    )
}
```

<figure><img src="/images/learn/accelerate/content-hub/configuration-of-Entity-Details-Language.png" alt="The configuration of the Entity Details Language Viewer external component"/><figcaption>The configuration of the Entity Details Language Viewer external component.</figcaption></figure>

A new page has been added to host the component, alongside a standard language selector and entity details component. This page is accessed from the products search page, via a new operation named “Translate”.

The video demonstration shows the component in use. The Entity Details Language Viewer is on the left side of the page and allows the user to view the values of the product in any language, separate from the entity details panel on the right, used for entering the translations.

One really interesting aspect of this for me, is that it is easy to see that by replacing the entity details component on the right with a new external component that uses an api to modify data (much like the Custom Form Control above) this page could be extended to provide auto translations, via an external service such as the [Google Translation API](https://cloud.google.com/translate/docs/reference/rest/).

## Related Documentation

<Row columns={2}>
  <Link title="External Components Examples" link="https://bitbucket.org/stylelabsdev/sitecore.ch.externalcomponents.examples/src/main/" />
  <Link title="External Page Components" link="https://doc.sitecore.com/ch/en/users/content-hub/external.html" />
</Row>


