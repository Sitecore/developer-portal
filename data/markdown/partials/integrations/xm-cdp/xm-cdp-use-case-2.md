---
product: ['xm', 'cdp']
area: ['integrations']
---

A CDP allows for experiences that leverage it to Identify the users interacting with them. This enables the user’s session details to be tied back to a known account in the CDP and facilitates sessions on different devices to be tied back to the same user, giving a true account of that user’s activities across all channels.

## Key Concepts
When a user enters a piece of identifying information on the web channel, for instance, logging in or completing a form with their details, we need to use the Identification functionality in the CDP to assign that data to the corresponding user.

The CDP identification process works on the concept of events, meaning that, to identify a user, the web channel needs to log an Event with the “IDENTITY” type.

## Developer Configuration 
Developer configuration can be achieved in a few different ways. The first option is to implement this event call into your site using either a direct JavaScript integration, or through embedding the JS code using Google Tag Manager. The other option is to perform this action on the server-side, making the same Event request from there instead. 

There are pros and cons to each of these approaches, so you will need to decide which method best suits your requirements.

|                              | Pros                               | Cons                                                                      |
| :--------------------------- | :--------------------------------- | :------------------------------------------------------------------------ |
| **Direct client-side call**  |                                    | Requires extra JS tag in markup, Can be blocked by AdBlockers             |
| **Client-side call via GTM** | No need to add extra tag to markup | Implementation reliant on 3d party (Google), Can be blocked by AdBlockers |
| **Server-side call**         | Can’t be blocked by AdBlockers     | Increases server rendering time.                                          |

### Method A – Method A – Direct JavaScript Integration.

For those customers wanting to directly embed JavaScript event call into their web channel built using Sitecore XM they will have to send the Event request built to match the following definition: https://developer.boxever.com/reference/identifying-a-guest 

The sequence diagram below shows the data flow between the different systems to facilitate the IDENTITY Event request when directly embedded into the JavaScript for the web channel.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore CDP when identifying users from a tracker directly embedded in the pages JS.][1]

### Method B – Google Tag Manager Integration
For those customers wanting  to embed JavaScript event call into their web channel built using Sitecore XM via Google Tag Manager, they will have to ensure that the injected JavaScript creates requests that built to match the following definition: https://developer.boxever.com/reference/identifying-a-guest 

The sequence diagram below shows data flow between the different systems to facilitate the IDENTITY Event request when Google Tag Manager is used to embed the JavaScript for the web channel.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore CDP when identifying users from a tracker directly embedded via Google Tag Manager.][2]

### Method C – Server-side Integration
When building your web channel experience in C# using MVC, SXA or the .NET Rendering Host, you can send the identify request on the server-side instead of client-side. In the same way as when working client-side, you will need to craft the request to match the specification here: https://developer.boxever.com/reference/identifying-a-guest 

The sequence diagram below shows data flow between the different systems to facilitate the IDENTITY Event request when being sent server-side.

![Sequence diagram showing the flow of data between Sitecore XM & Sitecore CDP when identifying users from a server-side request.][3]

## Marketer Usage
As your users interact with your web channel, they will at first appear as anonymous visitors. After your development team have implemented one of the methods described above, your users will change from visitors to customers. There is no further confirmation required by the marketer.

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/4ed686b087914e5392d80d4ca29f1a51?v=9b1c47a9
[2]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/ad031ffafb884a37b2151267e6702821?v=24266e3d
[3]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/61ec52a074a046d99a03517de5c27fd7?v=fab06e2d