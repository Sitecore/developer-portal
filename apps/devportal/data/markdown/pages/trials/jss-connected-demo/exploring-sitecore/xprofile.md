---
product: ['xm', 'xp', 'jss']
title: Data Generation for xProfile
---

### Interact with the app to generate data for xProfile

1. From the front-end on your local connected app (http://localhost:3000/), select the "Personalize" item from the upper right corner drop-down menu.

   ![Lighthouse Fitness menu to personalize the experience](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/2789dadbc33b44a2a9096b7a5db0f71b?v=d273ead7)

   NOTE: if you see any errors when opening your connected app, it may be because the cookies from the Sitecore instance are interfering. If you are logged into Sitecore in the same browser, then it's best to open the local app in an incognito instance.

2. Select "Basketball".

   ![Sports screen selecting basketball](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/3506dea2d3f14b648c3446ef4c4f4ce9?v=33fe3f1d)

3. Move the Skill Level slider to "Expert" and click the "Continue" button.

   ![Sports screen selecting expert level](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/5133390d5fd24c6bbb59f5049b26e162?v=153ef5bc)

4. In the "Demographics" screen, enter whatever you'd like and click the "Continue" button.

   ![Demographics screen](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/97c7822847b44b40ab02ee29830eec5b?v=3e32ed59)

5. In the "Personal" screen, enter a sample email and name and click the "Continue" button.

   ![Personal screen](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/f0812faff5e04e70ac4a0e438b6121f5?v=f051268a)

   NOTE: This does not have to be a real email address, it only needs to be something you can remember so that you can locate it in the Experience Profile later on.

6. In the "Finish" screen, click the "Home" button. It will provide you with an experience personalized to your stated interest in basketball.

   ![Finish screen](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/063471f3d6e94c40ada14f0199385ca3?v=2e7604ff)

7. Favorite a few of the events by clicking into the event and then clicking on the heart button in the upper right corner. Be sure to favorite and then unfavorite at least one.

   ![Favoriting an event](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/758858a85ed240e48a58bcdc7fec4c9b?v=4842bfad)

   NOTE: These are Sitecore Goals being triggered behind the scenes.

   NOTE: The Google Maps will not work on the local application because the Google Maps API keys are not set.

8. Register for an event by clicking on the "Sign Up" button.

9. Confirm the registration by clicking on the checkmark button.

   ![Confirming registration to an event](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/0312117f6f8146cf818a05b3bb3bcfa8?v=42a78e1e)

10. Once you have signed up, click on the bell button to register for notifications.

    ![Registering for event notifications](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/e3f723af50204ece89589c1b3a585d6b?v=c6f51222)

    NOTE: These are Sitecore Goals being triggered behind the scenes.

11. The browser will ask you to show notifications. Click the "Allow" button.

    ![Browser prompt for allowing notifications](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/21b9e2128061485b975d81a6976f6fc3?v=8758615f)

    NOTE: The notifications will not work on the local application because the Firebase API keys are not set.

12. Feel free to explore the app. Once you are done with your independent exploring, go back to the home page.

13. Use the upper right drop-down menu and click on the "End Current Session" item.

    ![Lighthouse Fitness menu to end the current session](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/6e5b74ca46a94bb78663b2d54be8392b?v=ba21f7a0)

    NOTE: This sends all the data you have generated into xDB so that you can view said data in Sitecore.

    **Next: [Launch Experience Profile](http://localhost:3000/trials/jss-connected-demo/exploring-sitecore/launch-xprofile)**
