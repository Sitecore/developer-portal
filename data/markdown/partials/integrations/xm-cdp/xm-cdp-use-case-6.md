---
product: ['xm', 'cdp']
area: ['integrations']
---

Sitecore CDP allows you to optimize experiences, giving you the ability to run A/B & multivariant experiments to help improvement conversion on your channels. Integrating Sitecore XM with Sitecore CDP gives you the ability to deliver and run these tests on your web channel.

## Key Concepts
Sitecore CDP is used to create and run your tests, allowing you to provide a different experience to different groups of your end users, track which version drove the highest level of conversion and then make that version the default one for all customers.

## Developer Configuration
There are two methods used to create experiments: you can either create a “Web experiment” where the experiment is powered by JavaScript on the client, or a “Full stack experiment” where this is completed on the server and the HTML returned to the client already has the experiment baked in. 

There are pros and cons to each of these approaches, so you will need to decide which method best suits your requirements.

|                                       | Pros                                                | Cons                                                  |
| :-------------------------------------| :-------------------------------------------------- | :---------------------------------------------------- |
| **Web Experience**                    | Runs asynchronously so won’t affect page load time. | Can be blocked by AdBlockers                          |
| **Full Stack Experiences in the CDP** | Can’t be blocked by AdBlockers.                     | Is executed server-side so can affect page load time. |

### Creating Web Experiments

When personalizing the web channel by using “Web Experiments”, the DOM is changed via JavaScript after being rendered. You need to be careful when using this method so as to ensure that the DOM changes occur either “below the fold” or are masked with other UX techniques like transparent overlays or loading images. You can get an introduction on how to implement Web Experiments by following the guide here: https://documentation.boxever.com/docs/creating-a-web-experiment 

The sequence diagram below shows data flow between the different systems to facilitate the personalization of the web channel, when using “Web Experiences”.

![Sequence diagram showing how the Sitecore XM & Sitecore CDP interact when creating Web Experiments.][1]

### Creating Full Stack Experiments

When personalizing the web channel by using “Full Stack Experiments”, the DOM is changed server side before being served to the browser. This means you no longer need to be concerned about experiments occurring “below the fold”. You can get an introduction on how to implement Web Experiments by following the guide here: https://documentation.boxever.com/docs/creating-a-full-stack-experiment 

The sequence diagram below shows data flow between the different systems to facilitate the personalization of the web channel, when using “Full Stack Experiences”.

![Sequence diagram showing how the Sitecore XM & Sitecore CDP interact when creating Full Stack Experiments.][2]

## Marketer Usage
As a marketer you can apply the different types of Experiments to the pages in your web channel. Experiments are closely linked to Experiences, as Experiments are effectively an A/B Test between two Experiences. You can read about how you can apply the different types of experiments as a marketer here: https://documentation.boxever.com/docs/abtesting

[1]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/ec92f7b8b139456aa74409b8c6fc69d7?v=e99ed3f6
[2]: https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/eed79a3c9c574a71b78576d38db81ab5?v=600b95f3