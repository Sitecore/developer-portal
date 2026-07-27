---
title: 'Decision Model usage optimization'
description: 'This article is a quick guide to optimizing usage of Decision Models by using Decision Tables, Templates, JS Modules, and Connections.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-07-25'
created: '2025-07-25'
audience: ['Technical Implementers','Architects', 'Product Owner']
features: ['CDP', 'Personalize']
---

# Context

Improving how we build and manage decision logic in our Decision Models helps to get more personalization done quicker and with less effort. There are multiple wayts to optimized usage from AI Code Assistant to reusable templates. Together, these tools help teams streamline development, reduce redundancy, and maintain consistency across decision models.

# Execution
Regularly reviewing and optimizing Decision Models is essential to ensure they stay aligned with evolving business goals, deliver fast and accurate personalization, and avoid performance bottlenecks. Over time, logic can drift, data dependencies can change, and technical debt can build up, all of which can quietly degrade results. Optimization helps maintain model efficiency, reduce duplication, improve customer targeting, and support auditability. In short, it's how you keep personalization effective, scalable, and trustworthy.

### Using the AI Code Assistant

The [Code Assistant](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/code-assistant.html)  can help speed up and simplify the creation of Conditions and Programmables by generating JavaScript suggestions in response to natural language prompts. The assistant automatically incorporates the current data schema on the tenant and any existing code in the editor.

The assistant focuses solely on producing code, without offering explanations or conversational feedback, and includes built-in privacy safeguards to ensure that user data remains secure and is not used for training AI models. This is a great way to get a jump start in fetching data to be used in Decision Tables.

### Implementing Decision Tables

Decision Tables are a powerful way to define business rules without writing code. They allow you to map inputs to outputs in a structured format, making logic easy to understand and maintain.

Note: Decision Tables do not have direct access to nested data structures on the Guest Context, such as Sessions, Events, and Orders. For this reason, it is often useful to prepare data elements using templates or programmable nodes and apply business rules in the Decision Table. This allows business rules to remain easy to change once the underlying data dependencies are in place.

### Creating reusable Templates

Templates are designed to encapsulate frequently used logic or data access patterns, making them reusable across multiple decision models. Think of them as modular building blocks that simplify the construction of complex decision flows.

Templates are especially useful when you need to pull data from user profiles or apply business logic that recurs in different contexts. By creating a template once and reusing it wherever needed, you reduce duplication and ensure consistency in your decision logic.

### Leveraging JS Modules

JavaScript Modules serve a similar purpose to templates but are geared toward developers. They are ideal for storing utility functions that are used across multiple decision models. These modules can be imported into programmables, allowing you to maintain a single source of truth for common logic.

Once a JS Module is published, it cannot be edited directly. To make changes, you must duplicate the module and create a new version. This helps maintain stability in production environments.

### External Connections

Connections are used to integrate external data sources or services into your decision models. For teams working at scale, Sitecore provides REST API endpoints that allow you to manage these configurations programmatically.

This is especially helpful for automating updates or maintaining large numbers of connections across environments. For detailed information on which integrations are best suited to Connections, see the [Personalize Integrations to External Systems](/learn/accelerate/cdp-personalize/implementation/integrations/personalize-integrations) recipe.

## Insights

### Decision Model Performance

The performance of your Decision Model can impact the speed at which personalization is delivered to the end user. This may be more critical in some use cases than others.

For example, a 1-2 second delay in delivering an email is likely acceptable, but a delay of the same length when loading a web page can negatively impact the user experience.

Guidelines for improving performance can be found in the [Decision model performance guidelines](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/decision-model-performance-guidelines.html) documentation.

### Client Side vs Server Side JavaScript

JavaScript scripts used in Decision Models and Conditions execute on the server side within the Personalize execution environment. This determines which contextual information is available:

- Available: Guest data, Order data, and outputs of prior execution steps.
- Not always available: Browser context, URL parameters, or data layer fields.

More info can be found in the [Using server-side JavaScript in Sitecore Personalize](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/using-server-side-javascript-in-sitecore-personalize.html) documentation.

### Using Custom Template Forms

When building templates, we can improve their usability by exposing configurable values to the user through template forms instead of hard coding them.

For example, the following snippet allows the user to configure which Order Item type should be searched for, making the template reusable across scenarios:

```javascript
(function() {
    var returnValue = null;
    var orders = guest.orders;
    if (orders && orders.length > 0) {
        for (var i = 0; i < orders.length; i++) {
            var orderItems = orders[i].orderItems;
            if (orderItems && orderItems.length > 0) {
                for (var j = 0; j < orderItems.length; j++) {
                    if (orderItems[j].name === `[[ Item | enum(BURGER,FRIES,DRINK) | BURGER ]]`) {
                        returnValue = orders[i].price;
                        break;
                    }
                }
            }
            if (returnValue !== null) {
                break;
            }
        }
    }
    return returnValue;
})();
```
<br/><br/>
More information about template forms can be found in the [Create a form for a decision template](https://doc.sitecore.com/personalize/en/users/sitecore-personalize/create-a-form-for-a-decision-template.html) documentation.

## Related Recipes

<Row columns={2}>
 <Link title="Personalize Integrations to External Systems" link="/learn/accelerate/cdp-personalize/implementation/integrations/personalize-integrations" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Decisioning in Sitecore Personalize" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-decisioning-in-sitecore-personalize.html" />
  <Link title="Code Assistant" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/code-assistant.html" />
  <Link title="Decision tables in Sitecore Personalize" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/managing-decision-tables-in-sitecore-personalize.html" />
  <Link title="Decision templates" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/decision-templates.html" />
  <Link title="JS Modules" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/js-modules.html" />
  <Link title="Connecting Sitecore Personalize to an external system" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/connecting-sitecore-personalize-to-an-external-system.html" />
</Row>
