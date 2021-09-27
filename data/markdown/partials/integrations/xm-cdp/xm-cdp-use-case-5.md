---
product: ['xm', 'cdp']
area: ['integrations']
---

Sitecore CDP allows you to personalize experiences, ensuring that each customer and visitor has the correct content displayed and at the appropriate time. Integrating Sitecore XM with Sitecore CDP allows you to deliver personalized experiences on your web channel.

## Key Concepts
We want to change the content being displayed to visitors to our web channel to ensure they are receiving the most relevant content to them, based on their current and historical browsing behavior combined with business context.

## Developer Configuration
Developer configuration can be achieved in a couple of different ways. The first option is to build out the experience on the client-side using “Web Experiences” while the second option is to integrate the experience on the server-side using “Full Stack Experiences” created in the CDP. 

There are pros and cons to each the options as demonstrated in the table below. You just need to choose which method is the best fit for your requirements.

|                                       | Pros                                                  | Cons                                                             |
| :-------------------------------------| :---------------------------------------------------- | :--------------------------------------------------------------- |
| **Web Experience**                    | Loads asynchronously so won’t affect page load speed. | Can be blocked by AdBlockers                                     |
| **Full Stack Experiences in the CDP** | Can’t be blocked by AdBlockers.                       | Processing happens server-side which can affect page load speed. |

### Personalizing the web channel using “Web Experiences”.

When personalizing the web channel by using “Web Experiences”, the DOM is changed via JavaScript after being rendered. You need to be careful when using this method to ensure that the DOM changes occur either “below the fold” or are masked with other UX techniques like transparent overlays or loading images. You can get an introduction on how to implement Web Experiences by following the guide here: https://documentation.boxever.com/docs/webexperiences 

The sequence diagram below shows data flow between the different systems to facilitate the personalization of the web channel, when using “Web Experiences”.

![Sequence diagram showing the DOM being personalized with Web Experiences.][1]

### Personalizing the web channel using “Full Stack Experiences” in Sitecore CDP.

When personalizing the web channel by using “Full Stack Experiences”, the DOM is changed on the server and is sent to the client with the personalization changes already applied. This removes the need to mask the DOM changes from the user as they have already been processed on the server and full built HTML is returned to the client. This is achieved this by using the Stream API provided by Sitecore CDP, You can get an introduction on how to interact with the Stream API on our documentation site here: https://doc.sitecore.com/cdp/en/developers/sitecore-customer-data-platform--data-model-2-0/overview-of-sitecore-cdp-stream-apis.html 

The sequence diagram below shows data flow between the different systems to facilitate the personalization of the web channel, when using “Full Stack Experiences”.

![Sequence diagram showing the DOM being personalized with Web Experiences.][2]

## Marketer Usage

Once your experience has been built out by your developer, you can then begin to apply it to the pages on your website. The developer will have defined the fields of the template you need to populate for each instance of the experience you wish to run. You can read more about how to apply the different types of experiences on the documentation site here: https://documentation.boxever.com/docs/webexperiences.

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/4b17c298a1d3477daf3ea6291dc66b8f?v=d6fe3e46
[2]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/4a5e9b213c2f4fd1b6ec50c3f2004408?v=a8792598