---
title: 'Validating Guest Data'
description: 'Validating guest data in Sitecore CDP'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['All']
product: ['CDP']
---

## Context
You’ve started to collect customer data from your website with Sitecore CDP. How do you ensure that this data is accurate and of high quality? Being able to trust your data collected in Sitecore CDP is paramount for creating impactful personalization. 

## Execution
Data validation should be integrated in your processes - from spot checks to aggregate checks to ensure that customer data is applied to the correct profile for the correct number of customers. Whether collecting data through the [Stream API](https://doc.sitecore.com/cdp/en/developers/api/stream-api.html) or the [Cloud SDK](https://doc.sitecore.com/sdk/en/developers/005/cloud-sdk/sitecore-cloud-sdk-for-javascript.html), the following will walk through how to confirm that data. 

### Debug Mode

Turning debug mode on in Sitecore CDP is an easy way to assist with troubleshooting. Debug mode shows data in a table or in JSON format. Follow the [documentation](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/enable-features-in-sitecore-cdp.html) to enable the it.

<img src="/images/learn/accelerate/cdp-personalize/testing/manage features debug.png" alt="Debug mode"/>
<br/><br/>

On guest profiles, a gear icon will appear. Clicking on the gear icon will launch a window with tabular and JSON info on that current guest. You can see information like guest information, session data, triggered events and data extensions. Additional information can be found in the [Use debug mode](https://doc.sitecore.com/cdp/en/users/sitecore-cdp/use-debug-mode-in-sitecore-cdp.html) documentation.

### Individual Spot Checks

Data collection can come from numerous sources, like your website, mobile application and offline sources.  Spot checks should be performed to check if event data is collecting as it should and identity rules are match the correct profile. So if an event is assigned to the wrong profile, or the identity rules do not match, you can resolve these issues.  

#### User profile
1. Collect the browser ID(bid) after viewing a webpage
<img src="/images/learn/accelerate/cdp-personalize/testing/bid.png" alt="browser ID"/>
<br/><br/>
For the Sitecore Cloud SDK, the bid is available as the `sc_{SitecoreEdgeContextId}` cookie in the web browser.  You can also export the bid for testing purposes by using the Cloud SDK with the `getBrowserId` function to the console.
<img src="/images/learn/accelerate/cdp-personalize/testing/bid cloudsdk.png" alt="bid cloudsdk"/>
<br/><br/>
2. Retrieve customer profile
<img src="/images/learn/accelerate/cdp-personalize/testing/data browser.png" alt="data browser"/>
<br/><br/>
3. Examine guest profile. Debug mode can be used to check custom fields via table or JSON.
<img src="/images/learn/accelerate/cdp-personalize/testing/event viewer.png" alt="event viewer"/>
<img src="/images/learn/accelerate/cdp-personalize/testing/debug table.png" alt="debug table"/>
<br/><br/>
Do the events recorded in the session match your activity across the website?

If so, great! If you find that the customer is missing or events are not recorded, review that the required details for CDP integration are correct, including client key, Point of Sale and the Stream API target endpoint. 

#### Identity Rules

Identity rules match an identifier(a unique string) with a guest profile, like an email or a loyalty number. By verifying identity, guest data can be stored against the correct profile even across different browsing sessions and devices. When a guest logs in or signs up for a newsletter, identity information passed in can be used to verify identity. This spot check is it validate that identity rules are firing correctly and visitors to your website can be attributed to the correct guest. 

1. Collect the browser ID(bid). For the Cloud SDK, collect the `sc_{SitecoreEdgeContextId}` cookie value or use the `getBrowserId` function
2. Trigger the identity rule. For example, log into a website, or fill out a newsletter. 
3. Retrieve the guest profile
4. Examine the guest profile
<img src="/images/learn/accelerate/cdp-personalize/testing/events id.png" alt="events id"/>
<br/><br/>

Is the guest profile from the bid a customer profile? Does the session data match your visit to the website? Verify that enough guest data has been submitted and identity rules match the guest profile. Ensure that events are triggered and sent to Sitecore CDP. 

### Aggregate Spot Checks

In the individual spot check, we reviewed if data was being collected on the individual profile. The aggregate spot check is to validate that data across all profiles is being collected as expected. So if your organization uses emails as a way of identifying guests, checking the amount of available emails on guests profiles will validate that data collection happens as it should. There are a few ways to verify this like calculating the audience segment for whole numbers or using the data browser to explore your data. 

#### Batch Segments
1. Decide on a metric that you have the count for, ie., email addresses, account ID, page visits in the last 24 hours. In this example, completed email addresses will be used. 
2. Select the “Batch segments” on the navigation bar and select “Batch segments” from the dropdown menu that appears.
3. Click on the “Create segment” button and enter a name for your segment. 
4. The segment builder will open and choose the guest data for your rule. Add the rule to the segment.
<img src="/images/learn/accelerate/cdp-personalize/testing/segment builder.png" alt="segment builder"/>
<br/><br/>
5. Validate the segment by pressing the “Validate” button.
6. Once the segment has been validated, you can click the “Calculate audience” button. This should provide a count and percentage of the guests that meet your rule.
<img src="/images/learn/accelerate/cdp-personalize/testing/calculate audience.png" alt="calculate audience"/>
<br/><br/>

Expect to see the count of guests in the segment match what has been inputted into CDP so far.  Audience Export can be used to perform a record by record match when exporting the segment for comparison. This is especially useful when record values do not return what is expected. 

#### Data Browser
The data browser feature allows you to view your organization’s data. It will show fields and their values, so that you might see how much data is available. It will show how many guests have this value, what percentage of all guests that is, if it’s unique or how many nulls. This is a great way to check what data has been collected and if anything is missing.

1. Select the “Batch segments” on the navigation bar and select “Data browser” from the dropdown menu that appears.
2. Look through guests, sessions, events, orders and order items strategically to verify your data. 
<img src="/images/learn/accelerate/cdp-personalize/testing/data browser.png" alt="data browser"/>
<br/><br/>

#### Triggered Experiences
1. Check the Triggered Experience Execution’s History, make sure there are no errors. Open the experience, go to Operational Data, and click the 'Execution Report' button.
<img src="/images/learn/accelerate/cdp-personalize/testing/image-20250502-051340.png" alt="Triggered Experiences"/>
<br/><br/>
2. Click on “View Log” and check the requestPayload and responsePayload to ensure that you are sending the correct attributes and you are getting the data as expected.

## Insights
These are just some simple checks to help you trust your data collected by Sitecore CDP. Spot and aggregate checks should be performed periodically to continue to validate your data. Changes to identity rules or batch uploads might change guest data and it is important to validate after that.

Sitecore CDP also offers [data lake exports](https://doc.sitecore.com/cdp/en/developers/api/data-lake-export-service.html) so that you can further interrogate your data. This allows your organization to export a Parquet file and plug it into an application like Snowflake or Databricks to perform a deeper analysis, and build custom dashboards.

## Related Recipes

<Row columns={2}>
  <Link title="Segmentation" link="/learn/accelerate/cdp-personalize/pre-development/segmentation" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Use debug mode in Sitecore CDP" link="https://doc.sitecore.com/cdp/en/users/sitecore-cdp/use-debug-mode-in-sitecore-cdp.html"/>
  <Link title="Data lake export service" link="https://doc.sitecore.com/cdp/en/developers/api/data-lake-export-service.html"/>
</Row>
