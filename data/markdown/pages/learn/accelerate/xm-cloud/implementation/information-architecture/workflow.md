---
title: 'Workflows'
description: 'Setting up workflow on a Page and Components level'
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-01-31'
---

## Context

XM Cloud comes with a sample workflow that should not be used as an actual configuration but as an example of a simple workflow. Workflow helps customers prevent unplanned content from making it to their website without the proper approvals. It also helps maintain consistent quality across all content. Each step in the editing process—such as fact-checking, style alignment, tone consistency, and further reviews—ensures that the content meets specific standards.

## Execution

### Workflow Planning

It's recommended to establish a workflow for all content items. This prevents premature publishing to your production environment, whether done automatically or manually. While the sample workflow is provided, it should only be used as an example or template for designing a workflow that fits your business needs. Maintain simplicity in your workflow. Overcomplicating it with numerous states and review levels can slow the process, resulting in a less effective workflow.

### Migration Considerations

If you are currently on XP/XM and migrating to XM Cloud these are some specific considerations that you should consider when making this transition.  Two specific focuses that should be considered are any .NET customizations that have been made to affect items controlled by workflow as well as the introduction of webhooks which can allow for new ways to implement workflow.  In addition to those considerations, there are existing implementations that should be reviewed and changed based on the information below:

Email Actions should be implement with a Webhook Submit Action as detailed further down.

### Configure Page Workflows

All pages and the templates that drive those pages should be configured with workflow, you can refer to [documentation](https://doc.sitecore.com/xmc/en/developers/xm-cloud/workflow-cookbook.html) or use the steps below to configure workflow for your pages.

<ol>
<li>First, make sure you have created a workflow and defined your states.</li>
<li>Assign it using Standard Values to the page template - Make sure you have View > Standard Fields enabled in the Content Editor. Go to the <code>Workflow</code> tab and set both <code>Workflow</code> and <code>Default Workflow</code>to the workflow that you created in step 1.</li>
</ol>

<figure>
<img src="/images/learn/accelerate/xm-cloud/StandardValuesPageWorkflow.jpg" alt="Standard Values for Workflow"/>
<figcaption>Standard Values for Workflow</figcaption>
</figure>

### Configure Datasource Workflows
It is important to not only configure workflow for your pages, but also the separate data source component items on a given page, so that these changes do not make it into your published website prematurely.  To do this, you will need to configure workflow on each individual component, however due to the nature of SXA, you’ll do that using the steps below:
<ol>
<li>Make sure you have <code>Standard Values</code> module installed for your website.</li>
<li>In your website navigate to the Content Editor and ensure your components are defined under the <code>Standard Values</code> item in the SXA website settings folder. If it isn’t, right click on <code>Standard Values</code> and click on <code>Insert</code> and select <code>Standard Values</code> which will present a dialog</li>
<li>Select the<code>Datasource Templates</code> tab in the dialog and select any templates that you have not configured yet and click okay.</li>
<li>Under the <code>Standard Values</code> item, you should see a folder for data sources that contains an item for each of the data source components. Click on each and configure the workflow the same as you would for a page.</li>
</ol>

<figure>
<img src="/images/learn/accelerate/xm-cloud/ComponentDatasourceWorkflow.jpg" alt="Standard Values for Datasource"/>
<figcaption>Standard Values for Datasource</figcaption>
</figure>

If you have followed the [Creating New Components](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components) recipe and have created a new component by cloning one of the existing OOTB XM Cloud components then all of the necesary configuration should already be in place including base templates.

Note that only templates that have the <code>_PerSiteStandardValues</code> base template assigned to them appear in the dialog box. You can find the base template here: */sitecore/Templates/Foundation/Experience Accelerator/StandardValues/*. If for some reason your component does not appear in the dialog box when trying to add standard values this would be the first thing to check. Detailed steps are available in [Defining standard values](https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--defining-standard-values-for-your-sites.html#add-standard-values-under-individual-sites) in the documentation.

If you have followed the [Creating New Components](/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components) recipe and have created a new component by cloning one of the existing OOTB XM Cloud components then all of the necessary configuration should already be in place including base templates.

Note that only templates that have the **_PerSiteStandardValues** base template assigned to them appear in the dialog box. You can find the base template here: */sitecore/Templates/Foundation/Experience Accelerator/StandardValues/*. If for some reason your component does not appear in the dialog box when trying to add standard values this would be the first thing to check. More information available [here](https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--defining-standard-values-for-your-sites.html#add-standard-values-under-individual-sites) on the docs site.

### Configuration of Users/Roles

For each state of workflow that requires a specific set of users to manage items in that state of workflow, you should create a Sitecore role that represents the commands and states that this type of user should be able to manage. Configuring permissions to an individual user is not recommended, but rather these roles should be assigned to users based on their needs to manage specific states in workflow.

Let’s take the Sample Workflow as example here. And let’s use two roles <strong>“Editor”</strong> and <strong>“Super Editor”</strong>. The Editor should be able to push an item from Draft to Awaiting Approval. The Super Editor then should be able to either way approve or Reject the Item. We can easily create those roles in the Role Manager in the Sitecore Backend and then open the Security Editor to apply security settings.

<figure>
<img src="/images/learn/accelerate/xm-cloud/workflows3.png" alt="Example Rights for Editor"/>
<figcaption>Example Rights for Editor</figcaption>
</figure>

<figure>
<img src="/images/learn/accelerate/xm-cloud/workflows4.png" alt="Access Viewer for Editor"/>
<figcaption>Access Viewer for Editor</figcaption>
</figure>


As you can see, the “Editor” gets workflow execute rights for the Sample workflow. In addition we specifically deny the Approve and Reject, so users with the Editor Role are not permitted to execute that. 

<figure>
<img src="/images/learn/accelerate/xm-cloud/workflows5.png" alt="Example rights for Super Editor"/>
<figcaption>Example rights for Super Editor</figcaption>
</figure>

<figure>
<img src="/images/learn/accelerate/xm-cloud/workflows6.png" alt="Access Viewer for Super Editor"/>
<figcaption>Access Viewer for Super Editor</figcaption>
</figure>

On the other side we just allow the whole workflow to be executed by the <strong>“Super Editor”</strong> with no restrictions. 

Based on the following rights, if an editor tries to push an item through the workflow it will end up in Awaiting Approval with no further rights to push the item further 

<figure>
<img src="/images/learn/accelerate/xm-cloud/workflows7.png" alt="No further workflow options for Editor"/>
<figcaption>No further workflow options for Editor</figcaption>
</figure>

Now, if we have a look at a user, which has the Super Editor Role, we see, that there are more options available now.

<figure>
<img src="/images/learn/accelerate/xm-cloud/workflows8.png" alt="Further workflow options for Super Editor"/>
<figcaption>Further workflow options for Super Editor</figcaption>
</figure>

It is also advised not to assign the administrator role to anyone working with Content. This is because administrators can override workflow states and often interfere with its normal operation.

## Insights
### Using Webhooks to Send Notifications
If your requirements on workflow state the need of sending email notifications - these cab be done using a Webhook to trigger when an item reaches a specific state in a workflow. To configure this type of flow, you can follow some of the helpful information/steps below.

> Although the below is for email notifications, other types of integrations can be done as required on your scope.

1. Create a new Webhook Submit Action under a specific state or command, depending on your desired needs. For example we can create this Webhook Submit Action under the <code>Approved</code> state, which will then send the following payload to the endpoint that we specify in this item.


    ```json
    {
      "ActionID": "2f00a4eb-9b5a-4d15-a541-dd4e1bad73dc",
      "ActionName": "Name",
      "Comments": [],
      "DataItem": {
        "Language": "en",
        "Version": 4,
        "Id": "f0b5226d-14ce-4dad-9b7b-37539d45ed7c",
        "Name": "Home",
        "ParentId": "43bd6a7c-b8a8-4c07-8935-123fe1d0d2a1",
        "TemplateId": "4d4931c1-2ecf-4a27-a5ce-edbe6237e0d0",
        "TemplateName": "Page",
        "MasterId": "45cf9f42-b3ac-4412-aab9-f8441c7e448e",
        "SharedFields": [],
        "UnversionedFields": [],
        "VersionedFields": []
      },
      "Message": "",
      "NextState": null,
      "PreviousState": {
        "DisplayName": "Draft",
        "FinalState": false,
        "Icon": "Software/16x16/jar.png",
        "StateID": "{721CD32A-7489-475E-9C7A-24C8C7DE1DE5}",
        "PreviewPublishingTargets": []
      },
      "UserName": "sitecore\\john.doe@example.com",
      "WorkflowName": "Simple Page Workflow",
      "WebhookItemId": "2f00a4eb-9b5a-4d15-a541-dd4e1bad73dc",
      "WebhookItemName": "Name"
    }
    ```

2. The webhook will send a POST request to the URL that you provided.
3. Within the Webhook Submit Action you will configure the URL and Authorization details for the url that you are specifying.  If your endpoint requires additional authorization steps before sending the request, use the [Walkthrough to configure authorization](https://doc.sitecore.com/xp/en/developers/103/sitecore-experience-manager/walkthrough--using-an-authorization-item.html) to configure this item before completing the configuration of the Webhook Submit Action.


## Related Recipes

<Row columns={2}>
  <Link title="Creating New Components" link="/learn/accelerate/xm-cloud/implementation/developer-experience/creating-new-components" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Workflow" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/workflow.html" />
  <Link title="Workflow Cookbook" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/workflow-cookbook.html" />
  <Link title="Workflow Webhooks" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--using-an-authorization-item.html" />
  <Link title="Assign a data source workflow action in SXA " link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/assign-a-data-source-workflow-action-in-sxa.html" />
  <Link title="Add standard values under individual sites" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--defining-standard-values-for-your-sites.html#add-standard-values-under-individual-sites" />
  <Link title="Using an authorization item" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--using-an-authorization-item.html" />
  <Link title="Defining standard values for your sites" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/walkthrough--defining-standard-values-for-your-sites.html" />
</Row>
