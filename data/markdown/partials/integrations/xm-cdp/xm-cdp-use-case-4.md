---
product: ['xm', 'cdp']
area: ['integrations']
---

A CDP allows for experiences that leverage it to register custom goals and actions as users interact with them. This gives the ability to track specific metrics that are important to your business, while also allowing for reporting regarding conversion and for the ability to create web and full stack experiences designed to increase the level of conversion over time.

##	Key Concepts
A marketing user should be able to define custom goals that can later be triggered as users perform actions on the web channel, like triggering a goal when users interact with a certain piece of content or complete a form. The developer should be able to integrate these different events into the web channel, enabling the marketer to track conversions over time.


##	Developer Configuration 
When integrating Sitecore XM with Sitecore CDP you will need to send custom events into the CDP to track user engagement. You can read the documentation covering the contents of the message required here: https://developer.boxever.com/reference/sending-an-event 

You can achieve this by sending the event either from the client-side or the server-side. You can choose your preferred option depending on your requirements. 

|                       | Pros                                                    | Cons                             |
| :---------------------| :------------------------------------------------------ | :------------------------------- |
| **Client-side event** | Happens asynchronously so won’t affect page load speed. | Can be blocked by AdBlockers     |
| **Server-side event** | Can’t be blocked by AdBlockers                          | Increases server rendering time. |

### Client-side events

For customers who want to directly embed the JavaScript event call into their web channel built using Sitecore XM, they will have to send the Event request built to match the following definition: https://developer.boxever.com/reference/sending-an-event

This sequence diagram shows how the different systems and the user’s browser will interact when events are sent in this way.

![Sequence diagram showing passing an event message from Sitecore XM to Sitecore CDP from the client-side.][1]

### Server-side events

For those customers wanting to handle event messages on their web channel built using Sitecore XM by sending them from the server-side, they will have to craft the event request to match the following definition: https://developer.boxever.com/reference/sending-an-event

This sequence diagram shows how the different systems and the user’s browser will interact when events messages are sent in this way.

![Sequence diagram showing passing an event message from Sitecore XM to Sitecore CDP from the server-side.][2]

## Marketer Usage
You will need to work with your developer to define which events are to be sent from the web channel, depending on the actions that your users perform. There are a series of events you can choose from in order to help map your users’ actions to your business processes. You can see a list of the supported events here:  https://developer.boxever.com/reference/sending-custom-events.

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/603516f3dacd4422b7383082199511db?v=38923efa
[2]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/c098d2031ab74549bacc03286eb842ac?v=346436bb
