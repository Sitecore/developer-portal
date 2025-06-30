---
title: 'Reporting in Content Hub'
description: 'Options for creating basic reports within Content Hub as well as methods to utilize data from Content Hub externally within more robust reporting tools.'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-06-16'
created: '2025-06-16'
audience: ['Product Owners','Technical Implementers', 'Architects']
---


## Context
Within Content Hub there exists a plethora of data which can be leveraged for various types of reporting.  Some data can be easily visualized in Content Hub with the use of some basic reporting features.  Sometimes there is a requirement for more advanced reporting, which would need to occur outside of Content hub using a third party tool. 

## Execution
OOTB in Content Hub there are two main methods for creating visual charts to display data, via a [Search component](https://doc.sitecore.com/ch/en/users/content-hub/search.html) or through a [Chart component](https://doc.sitecore.com/ch/en/users/content-hub/chart.html).  

- Search components are best suited for visualizing filtered and sorted data based on a single entity definition based on the present time.  For example, a search component can be configured to show how many assets exist in the system per asset type.  
- A Chart component is best used to visualize event based data in a timeframe.  For example, a chart component can be configured to show how many login events occurred in the last year.

When deciding which type of chart to display, consider if the data is based on events logged in Content Hub or if the data is based on an entities metadata.

### Search component 
Within a search component we must always first configure the filter, which defines the scope of the data we will be working with.  Typically search components are configured to display details around a specific entity (usually M.Asset) where of the output is displayed as a grid or list view in conjunction with faceting and filters.  For simple data sets based on a single entity definition, the chart output can be used to visualize the data collected within the search component.  As noted, the data is based on the present (the value at this point in time) the data is not available OOTB over a time period.

#### Use case
Imagine that the client is looking for a visualization depicting which brand has the greatest and fewest number of approved assets in Content Hub.  Since the focus is on a single entity, M.Asset, and we have a metadata field within M.Asset that determines the brand it belongs to, we can utilize a search component with a chart output to display this data.
1. Add an HTML component to the page and configure it to be used as the title for our chart.
2. Add a search component to the page and configure it to be filtered based on the entity definition M.Asset with the relation of M.Final.LifeCycle.Status equals Approved.
3. Within the Output section of the search component enable the Chart option and set Brand as the principal dimension and chart type of Column .
4. Configure other settings within Chart output as needed, e.g. grouping, sorting type, sorting order, chart type.

The result will be a bar/column chart showing all of the approved assets in the system per brand at this point in time.

<img src="/images/learn/accelerate/content-hub/report-chart.png" alt=""/>

<br/><br/>

For more details on configuring the chart view in a search component, refer to the [Output tab](https://doc.sitecore.com/ch/en/users/content-hub/output-tab.html#chart) and [Chart view](https://doc.sitecore.com/ch/en/users/content-hub/chart-view.html) documentation.


### Chart component 
As noted earlier, a chart component is best used to visualize event based data within the system.  Unlike the search component chart output, the chat component (paired with a chart filter component) presents data as points over time. 

Some examples of events used for reporting include:  asset download completed, block (project) finished,  task completed, user login success.  For a full list of events, refer to the [Reporting events](https://doc.sitecore.com/ch/en/users/content-hub/reporting-events.html) documentation.

#### Use case
Let’s say we have a client who would like to know details about assets uploaded into the system over time.  For example, they want to answer the question *“who has been uploading the most assets since last month?”*.  Likewise, the client may want to know, “what region has uploaded the greatest number of assets in the last year?”.  In both cases the data is related to uploads, which is an event.  When it comes to data around events over a period of time, chart components are the best option to display this data.

The following are steps to build a report using a chart component to generate a result that can answer *“who has been uploading the most assets since last month?”*.
1. Add a chart filter component to the page as well as a chart component.
2. Within the Historical section of the chart component add a filter for uploaded assets by selecting Asset conversion - completed from the list of Events.
3. Set the Principal dimension based on the User definition.
4. Set the interval to be Day.
5. Configure the Chart type as Line chart in the Chart properties, and any other properties as needed.

Using the chart filter select a timeframe of “Last year”.  The result will be a line graph showing all of the users who have uploaded assets over the past year, providing values per day of upload.

<img src="/images/learn/accelerate/content-hub/report-graph.png" alt=""/>

<br/><br/>

For more details on configuring the chart component and details on the chart filter component, refer to the [Chart](https://doc.sitecore.com/ch/en/users/content-hub/chart.html) and [Chart filter](https://doc.sitecore.com/ch/en/users/content-hub/chart-filter.html#add-a-chart-filter) documentation.

#### Custom events
Events are mainly focused on actions around assets, projects, tasks, public links, fragments, and user accounts.  In some cases the available OOTB events tracked in Content Hub do not cover the use case of the client.  For example, if the client wanted to know something like *“how often are new products created in the DAM?”*.  Creating a product is not an event that is tracked OOTB, however, we can extend the functionality to allow for custom event tracking.

In this case we can extend the event logging by adding a custom event.  Once the custom event starts to log data, reports can be created based on this information. 

Steps to add a custom event are noted below:
- Go to Manage > Actions and create an action.  For example, “Product created”.
- Next on the Triggers page, create a trigger, in this case, to align with an entity creation action.  For this example, choose the “Product created” action and add conditions are the Product entity.
- Finally, for the action to appear in our list of available reporting events, go to Manage > Settings.  Under the Reporting section add an entry under [PredefinedEventTypes](https://doc.sitecore.com/ch/en/users/content-hub/settings.html#configurable-settings) for our new Product created event.

Once set-up, when a new product is created an event will be logged in the reporting events.  Once triggered can view the event via the [Reporting logs](https://doc.sitecore.com/ch/en/users/content-hub/reporting-logs.html#view-the-reporting-logs) and now reports can be created based on this new event data.

For more details refer to the [Actions](https://doc.sitecore.com/ch/en/developers/cloud-dev/actions.html), [Triggers](https://doc.sitecore.com/ch/en/developers/cloud-dev/triggers.html) and [Event listening](https://doc.sitecore.com/ch/en/developers/cloud-dev/event-listening.html) documentation.

### Reporting outside of Content Hub
When reporting needs are more complex than single entity data or logged events it is recommended to utilize an external third party tool that specializes in reporting.  In this case data can be exported from Content Hub for ingesting in to an external tool.

This can be accomplished using a manual export of data, i.e. [selecting data](https://doc.sitecore.com/ch/en/users/content-hub/selection.html#configure-the-selection-component) in a search component and then using the [Export to Excel operation](https://doc.sitecore.com/ch/en/users/content-hub/create-an-export-profile.html).  Alternatively, the Content Hub’s [REST API](https://doc.sitecore.com/ch/en/developers/cloud-dev/rest-api.html) can be leveraged to pull targeted data , i.e. writing a command to call the API and query the data programmatically.

Review the [Reporting](/learn/accelerate/content-hub/optimization/reporting) recipies if you are looking for analytics reporting in Google Analytics.



## Insights
Use this table to determine the most suitable reporting method in Sitecore Content Hub based on your data type and analytics needs. Each option supports different scenarios—from simple metadata queries to complex event-based tracking and external analysis.

| Type                   | Best for                                                        | Use when                                                                                   | Notes                                                                                                                                                                               |
|------------------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Search Component**   | Visualizing current state data based on metadata of a single entity (e.g., M.Asset). | Simple, present-time reporting (not over time). <br/><br/>You want to show filtered/sorted data like “number of approved assets per brand.”<br/>The data is not event-based and doesn’t require a time dimension.|**Example:** Displaying a bar chart of approved assets grouped by brand using metadata from M.Asset. |
| **Chart Component**    | Visualizing event-based data over time. |Tracking trends, user activity, or system events.<br/><br/>You need to answer questions like “who uploaded the most assets last month?”<br/>The data is tied to system events (e.g., asset uploads, logins, task completions).|**Example:** A line chart showing daily asset uploads by user over the past year.             |
| **Custom Events**      | Tracking actions not covered by default Content Hub events.|You need to report on something like “how often are new products created?” which isn’t tracked out of the box. | **How to:** Create a custom action and trigger, then register it under `PredefinedEventTypes` in Reporting settings.                                                               |
| **External Reporting Tools** | Complex reporting needs that go beyond single-entity or event-based data. | You need to combine multiple data sources or perform advanced analytics.                   | **Options:**<br/>– Manual export via “Export to Excel” from a search component.<br/>– Automated data extraction using the Content Hub REST API.                                      |


## Related Recipies

<Row columns={2}>
  <Link title="Custom Reporting" link="/learn/accelerate/content-hub/optimization/reporting" />
  <Link title="Requirements Gathering" link="/learn/accelerate/content-hub/pre-development/discovery/requirements-gathering" />  
</Row>

## Related Documentation

<Row columns={2}>
<Link title="Output Tab" link="https://doc.sitecore.com/ch/en/users/content-hub/output-tab.html#chart" />
<Link title="Chart View" link="https://doc.sitecore.com/ch/en/users/content-hub/chart-view.html" />
<Link title="Reporting Events" link="https://doc.sitecore.com/ch/en/users/content-hub/reporting-events.html" />
<Link title="Chart" link="https://doc.sitecore.com/ch/en/users/content-hub/chart.html" />
<Link title="Chart Filter" link="https://doc.sitecore.com/ch/en/users/content-hub/chart-filter.html#add-a-chart-filter" />
<Link title="Configurable Settings" link="https://doc.sitecore.com/ch/en/users/content-hub/settings.html#configurable-settings" />
<Link title="Reporting Logs" link="https://doc.sitecore.com/ch/en/users/content-hub/reporting-logs.html#view-the-reporting-logs" />
<Link title="Actions" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/actions.html" />
<Link title="Triggers" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/triggers.html" />
<Link title="Event Listening" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/event-listening.html" />
<Link title="Selection Component" link="https://doc.sitecore.com/ch/en/users/content-hub/selection.html#configure-the-selection-component" />
<Link title="Export Profile" link="https://doc.sitecore.com/ch/en/users/content-hub/create-an-export-profile.html" />
<Link title="REST API" link="https://doc.sitecore.com/ch/en/developers/cloud-dev/rest-api.html" />

</Row>




  <Link title="" link="" />