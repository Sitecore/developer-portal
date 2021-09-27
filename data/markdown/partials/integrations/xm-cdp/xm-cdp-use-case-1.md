---
product: ['xm', 'cdp']
area: ['integrations']
---

A CDP is an omni-channel customer data platform, tracking customer information across multiple channels. By doing so, we want to ensure that visitors interactions on our web channel are stored in the CDP.

## Key Concepts

We need to ensure that the actions performed by a user when interacting with the web channel are recorded correctly in the CDP, making sure that each session’s interactions are grouped accordingly.

## Developer Configuration

Developer configuration can be achieved in a few different ways. The first option is to integrate on the client side either via a direct JavaScript integration, or through Google Tag Manager. Alternatively, you have a third option which is to integrate on the server side.
There are pros and cons to each of these approaches, so you will need to decide which method best suits your requirements.

|                                     | Pros                                                  | Cons                                                                      |
| :---------------------------------- | :---------------------------------------------------- | :------------------------------------------------------------------------ |
| **Direct client-side integration**  | Easy installation                                     | Requires extra JS tag in markup, Can be blocked by AdBlockers             |
| **Client-side integration via GTM** | Easy installation, No need to add extra tag to markup | Implementation reliant on 3d party (Google), Can be blocked by AdBlockers |
| **Server-side integration**         | Can’t be blocked by AdBlockers                        | Increases server rendering time. More complex installation                |

### Method A – Direct JavaScript Integration

For those customers wanting to directly embed the CDP tracking tag into their web channel built using Sitecore XM, they can follow the Tagging Examples documentation to add JS tracking tag to your website: https://developer.boxever.com/reference/tagging-examples

The sequence diagram below shows data flow between the different systems to facilitate interaction data storage in Sitecore CDP.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore CDP when directly embedding the JS tracker in the page header.][1]


### Method B – Google Tag Manager Integration

For those customers wanting  to directly embed the CDP tracking tag into their web channel built using Sitecore XM, they can follow the Tagging Examples documentation to add JS tracking tag to your website by using Google Tag Manager: https://sitecore.cdpknowledgehub.com/docs/how-to-send-data-to-boxever-via-google-tag-manager 

The sequence diagram below shows data flow between the different systems to facilitate interaction data storage in Sitecore CDP.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore CDP when directly embedding the JS tracker via Google Tag Manager.][2]

### Method C – Server-side Integration

For those customers wanting to integrate with Sitecore CDP from the server-side, the best approach is to make use of the Stream API to send those requests. To start that process you will need to request and Browser ID and then ensure you send that ID with all future requests to ensure the session details are recorded correctly. This is the same approach that is used when integrating a Mobile App to the CDP, and is documented here: https://sitecore.cdpknowledgehub.com/docs/mobile-app-tagging-overview.


The sequence diagram below shows data flow between the different systems to facilitate the request of the Browser ID and subsequent event messages.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore CDP when integrating the tracker server-side.][3]


##	Marketer Usage
Once the tracking beacon is included on your web channel, it will start to send usage data back to Sitecore CDP. As a marketer there is no further configuration required, since, as your users interact with your web channel, you will automatically see the data making its way into Sitecore CDP.


[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/27c06a3a3ffd494b9d8100adb8a88a28?v=4a196839
[2]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/9969b8df76da45828f4bf4e84f9580c8?v=043d8a40
[3]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/0ac88cd472974986a56cd8d12c5f5b0c?v=2b968cdc
