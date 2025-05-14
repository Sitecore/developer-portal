---
title: 'Self Service Nudge'
description: ' '
area: ['accelerate']
hasSubPageNav: true
hasInPageNav: true
lastUpdated: '2025-05-14'
created: '2025-05-14'
audience: ['Technical Implementers','Architects', 'Product Owner']
product: ['CDP', 'Personalize']
---

## Context
There are statistics to suggest that the majority of people would expect to have a self-service feature available, when they are shopping or perusing a website. Many people would prefer to solve an issue themselves, as opposed to having to email or phone a support service agent.

So, rather than customers depending on communication with your support team, providing them with the right tools and navigation can enable customers to assist themselves. By doing so it saves time for the customer and business, provides a 24/7 service thus increasing customer satisfaction and  can increase revenue.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.



## Execution

If creating this experience with Personalize only, it is possible to do a simple yet effective implementation. But if implemented with Sitecore Search, it opens the gate for more possibilities. For example, with Personalize only, this feature could be used to alert guests of new security updates, delays to payments due to bank holidays, fee increases. 

Each of these messages can be handled inside the decision model, to decide the next best action/message to display.

This experience can be set up as a web or interactive experience. Review the [Web vs Interactive Experiences](/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive) recipe for details on the best approach - for the purpose of this recipe, we will be using *Interactive Experiences*.

### Implementation Approach
#### 1. Create an Interactive Experience in Sitecore Personalize
Open the Personalize application, go to *“Experiences“* and create a new interactive experience. Provide a descriptive name for the experience, then click on *“Create“*.

#### 2. In the experience, navigate to the API Response and click 'Configure API Response'
Here, your experience will consume output from the decision model, and send the response data to the organizations website to display the offer or content on the web page. Depending on the decision model response and the sort of data you want to send, will determine the contents of the API Response. The API Response for this experience can be kept quite simple, but some information that could be added could include:
- Title
- Button text
- Description/Additional Content
- Deep link
- Message priority level

Here is an example of what this response template might look like:

```
<#assign validmessages = getDecisionModelResultNode("validMessages").outputs[0].validmessages> 
[ 
<#list validmessages?values as v> 
  { 
    "id": "${v.id}", 
    "title": "${v.title}", 
    "type": "${v.type}", 
    "priority": ${v.priority}, 
    <#if v.buttonText?? && v.buttonText?has_content> 
    "buttonText": "${v.buttonText}", 
    </#if>
    <#if v.additionalContent?? && v.additionalContent?has_content> 
    "additionalContent": "${v.additionalContent}", 
    </#if>
    <#if v.deeplink?? && v.deeplink?has_content> 
    "deeplink": "${v.deeplink}", 
    </#if>
  }<#sep>, </#sep> 
</#list>
```
<br/><br/>

#### 3. Add a Decision Model to the Experience
Create a decision model to implement the business rules for the experience (this can be configured before the API Response). For example, if your experience requires certain messaging and a deep link to be displayed to the guest, then this can be configured in a programmable in the decision model. 

In the code example below, the programmable takes a list of 2 campaign configurations and returns those where:
- campaign has not been dismissed yet by customer
- current date is within the start and end dates of the campaign / campaign is live
- campaign has been shown less than x amount of times to customer

```
function getCampaignConfig() {
    var liveConfigs = [];
    var campaignConfigs = [
        {
            "live": true,
            "id": "campaign_1",
            "title": "Campaign 1 Message",
			"type": "Awareness",
            "priority": 1,
            "deeplink": "/campaign-1-landing-page",
            "startDate": "2024-01-31",
            "endDate": "2025-12-31",
            "customAudience": "campaign1CustomAudience",
            "campaignDuration": 30,
            "buttonText": "Find out more",
            "additionalContent": ""
        },
        {
            "live": true,
            "id": "campaign_2",
            "title": "Campaign 2 Message",
			"type": "Awareness",
            "priority": 2,
            "deeplink": "/campaign-2-landing-page",
            "startDate": "2025-01-01",
            "endDate": "2030-12-31",
            "customAudience": "campaign2CustomAudience",
            "campaignDuration": 30,
            "buttonText": "Find out more",
            "additionalContent": ""
        }
    ];

    for (var i = 0; i < campaignConfigs.length; i++) {
        if (campaignConfigs[i].live) {
            liveConfigs.push(campaignConfigs[i]);
        }
    }
    return liveConfigs;
}

function getValidMessages() {
    var validMessages = [];
    var campaignList = getCampaignConfig();    
    var nextValidCampaign = getNextValidCampaign(campaignList)

    if (!campaignConfirmedRead(nextValidCampaign)) {
        validMessages.push(nextValidCampaign)
    }
    return validMessages;
}

getValidMessages();
```
<br/><br/>
The `getCampaignConfig()` function above creates and returns a list of live campaign configurations. It filters out campaigns that are not live. The `getValidMessages()` function returns a list of valid campaign messages to be shown to the guest. It gets the campaign configurations, finds the next valid campaign, and checks if it has been confirmed read.

Additional utility functions are used in the programmable to ensure only campaigns that satisfy all conditions are returned:

- `campaignConfirmedRead(campaign)` - This function checks if a campaign has been confirmed as read by the guest. It looks through the guest's segment memberships and sessions to find the `CAMPAIGN_VIEWED` events for the current campaign.

```
function campaignConfirmedRead(campaign) {
    for (var i = 0; i < guest.segmentMemberships.length; i++) {
        if (guest.segmentMemberships[i].name.indexOf("selfservice_feature") > -1) {
            return true;
        }
    }
    for (var i = 0; i < guest.sessions.length; i++) {
        var currentSession = guest.sessions[i];
        for (var j = 0; j < currentSession.events.length; j++) {
            var currentEvent = currentSession.events[j];
            if (currentEvent.type === "CAMPAIGN_VIEWED" && 
                currentEvent.arbitraryData &&
                currentEvent.arbitraryData.interactionID === campaign.id) {
                return true;
            }
        }
    }
    return false;
}
```

<br/><br/>

- `campaignShownLessThanFiveTimes(campaign)` - This function checks if a campaign has been shown less than five times to the guest. It counts the occurrences of the campaign being shown in the guest's sessions.

```
function campaignShownLessThanFiveTimes(campaign) {
    var campaignShownCount = 0;
    for (var i = 0; i < guest.sessions.length; i++) {
        var currentSession = guest.sessions[i];
        for (var j = 0; j < currentSession.events.length; j++) {
            var currentEvent = currentSession.events[j];
            if (currentEvent.type === "TRACKING" &&
                currentEvent.arbitraryData &&
                currentEvent.arbitraryData.flowExecution &&
                currentEvent.arbitraryData.flowExecution.status === "SUCCESS" &&
                currentEvent.arbitraryData.flowExecution.decision &&
                currentEvent.arbitraryData.flowExecution.decision.results &&
                currentEvent.arbitraryData.flowExecution.decision.results.length > 0 &&
                currentEvent.arbitraryData.flowExecution.flowFriendlyId === "selfservice_feature") {
                for (var k = 0; k < currentEvent.arbitraryData.flowExecution.decision.results.length; k++) {
                    if (currentEvent.arbitraryData.flowExecution.decision.results[k].length > 0) {
                        var decisionResult = JSON.parse(currentEvent.arbitraryData.flowExecution.decision.results[k]);
                        if (decisionResult.validmessages &&
                            decisionResult.validmessages['0'] &&
                            decisionResult.validmessages['0'].id &&
                            decisionResult.validmessages['0'].id === campaign.id) {
                            campaignShownCount++;
                            if (campaignShownCount >= 5) {
                                return false;
                            }
                        }
                    }
                }
            }
        }
    }
    return true;
}
```
<br/><br/>

- `campaignDismissed(campaign)` - This function checks if a campaign has been dismissed by the guest. It searches through the guest's sessions for `CAMPAIGN_DISMISSED` events for the current campaign.

```
function campaignDismissed(campaign) {
    for (var i = 0; i < guest.sessions.length; i++) {
        var currentSession = guest.sessions[i];
        for (var j = 0; j < currentSession.events.length; j++) {
            var currentEvent = currentSession.events[j];
            if (currentEvent.type === "CAMPAIGN_DISMISSED" &&
                currentEvent.arbitraryData &&
                currentEvent.arbitraryData.interactionID === campaign.id) {
                return true;
            }
        }
    }
    return false;
}
```
<br/><br/>

- `campaignShouldBeShown(campaign)`
This function determines if a campaign should be shown to the guest. It checks several conditions, including whether the campaign is dismissed, the custom audience criteria, if the campaign is live, and if it has been shown less than five times.

```
function campaignShouldBeShown(campaign) {
    var campaignCustomAudience = true;
    if (campaign.customAudience.length > 0) {
        try {
            campaignCustomAudience = windowcampaign.customAudience;
        } catch (error) {
            print("Error evaluating custom audience function:" + error);
            campaignCustomAudience = false;
        }
    }
    var isCampaignDismissed = campaignDismissed(campaign);
    var isCampaignShownLessThanFiveTimes = campaignShownLessThanFiveTimes(campaign);
    var isCampaignConfirmed = campaignConfirmedRead(campaign);

    return !isCampaignDismissed && campaignCustomAudience && campaign.live && isCampaignShownLessThanFiveTimes;
}
```
<br/><br/>
- `getAllSeenCampaigns()`
This function returns a list of all campaigns that have been seen by the guest. It searches through the guest's sessions for tracking events related to campaigns.

```
function getAllSeenCampaigns() {
    var seenCampaigns = [];
    for (var i = 0; i < guest.sessions.length; i++) {
        var currentSession = guest.sessions[i];
        for (var j = 0; j < currentSession.events.length; j++) {
            var currentEvent = currentSession.events[j];
            if (currentEvent.type === "TRACKING" &&
                currentEvent.arbitraryData &&
                currentEvent.arbitraryData.flowExecution &&
                currentEvent.arbitraryData.flowExecution.status === "SUCCESS" &&
                currentEvent.arbitraryData.flowExecution.decision &&
                currentEvent.arbitraryData.flowExecution.decision.results &&
                currentEvent.arbitraryData.flowExecution.decision.results.length > 0 &&
                currentEvent.arbitraryData.flowExecution.flowFriendlyId === "selfservice_feature") {
                for (var k = 0; k < currentEvent.arbitraryData.flowExecution.decision.results.length; k++) {
                    if (currentEvent.arbitraryData.flowExecution.decision.results[k].length > 0) {
                        var decisionResult = JSON.parse(currentEvent.arbitraryData.flowExecution.decision.results[k]);
                        if (decisionResult.validmessages &&
                            decisionResult.validmessages['0'] &&
                            decisionResult.validmessages['0'].id &&
                            seenCampaigns.indexOf(decisionResult.validmessages['0'].id) === -1) {
                            seenCampaigns.push(decisionResult.validmessages['0'].id);
                        }
                    }
                }
            }
        }
    }
    return seenCampaigns;
}
```
- `getNextValidCampaign(campaignList)`
This function finds the next valid campaign to be shown to the guest from a list of campaigns. It checks if the campaign has been seen and if it should be shown.

```
function getNextValidCampaign(campaignList) {
    var seenCampaigns = getAllSeenCampaigns();
    for (var i = 0; i < campaignList.length; i++) {
        if (seenCampaigns.indexOf(campaignList[i].id) === -1 &&
            campaignShouldBeShown(campaignList[i])) {
            return campaignList[i];
        }
    }
    return {};
}
```
<br/><br/>
#### 4. Tracking Goals

There are many reasons why a customer might need to use a self-service feature. When setting up goals, tracking custom events might be most appropriate:
- Track sessions where the banner is Opened/Clicked
- Track sessions where the message is Confirmed
- Track sessions where the banner is dismissed
- Track sessions where the Message is opened without a click​



## Insights
### Target Audience

The information you want to show to customers will determine the target audience. If the message is for all customers, then there is no need to configure a condition for a target audience. However, if you just want to display the message to customers who, for example, need to update certain personal information for security reasons, then this can be done using custom conditions. 

### Feedback and Providing Information

Ensure the knowledge base is easily found and provides enough information that it can answer almost any question the customer might have, or points them in the right direction. When configuring your experience, include a 'feedback' option so that you are continuously improving your services and optimizing your knowledge base offering.

When creating your variant, it is considered best practice to include an 'escalation option', so that your customers know they have the option for human interaction when needed. The main purpose of a self-service features is to enable customer autonomy, and give support agents more control over their work. Self-service features are not implemented so that support agents can interact less, it is so they can interact when needed.


## Related Recipes

<Row columns={2}>
  <Link title="Web vs Interactive Experiences" link="/learn/accelerate/cdp-personalize/pre-development/web-vs-interactive" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Interactive experiences" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/introduction-to-interactive-experiences.html"/>
  <Link title="Decision models" link="https://doc.sitecore.com/personalize/en/users/sitecore-personalize/managing-decision-models-in-sitecore-personalize.html" />
</Row>
