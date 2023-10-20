---
product: ['xm', 'xp', 'jss']
title: Connecting to Sitecore
---

### Connecting the local repository to the remote Sitecore instance

Open a terminal/console window in the `<repo root>\fitness\app` folder of your project. Run the following command:

```shell
jss start:connected
```

The first time you run this command, you will see the following prompts. Respond as indicated below:

```shell
No Sitecore connection has been configured (missing scjssconfig.json)
This command requires a Sitecore connection. Would you like to configure the connection? [y/n]:
y

Is your Sitecore instance on this machine or accessible via network share? [y/n]:
n

Sitecore hostname (e.g. http://myapp.local.siteco.re; see /sitecore/config; ensure added to hosts):
https://<your instance id here>-app-cd.sitecoredemo.com

Sitecore import service URL [https://<your instance id here>-app-cd.sitecoredemo.com/sitecore/api/jss/import]:
(Leave Blank – Just hit enter)

Sitecore API Key (ID of API key item):
{EBF6D5C1-EB80-4B15-91AB-DD3845797774}

Please enter your deployment secret (32+ random chars; or press enter to generate one):
(Leave Blank – Just hit enter)

...

Is the config deployed? [y/n]:
y
```

![Lighthouse Fitness](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/f575d7259d1b48248a38898517478fd1?v=159ee4e3)

When you have completed the series of prompts, the information provided will be stored in a scjssconfig.json file in the root of your app.

A browser window should launch pointed to the local application, which is now connected to your remote Sitecore Instance!

### Browse the front-end of the connected app

If it does not launch automatically, go to http://localhost:3000/

The app lists different types of events. Lighthouse Fitness

![Lighthouse Fitness Two](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/ba40a6c9ee204a7fb188ffc376a11013?v=e65e0076)

You can use the menu at the top to personalize what your preferred types of events are. After you go through the personalization dialogs, you will only see the events that match your preferences. Lighthouse Fitness menu

![Lighthouse Fitness Three](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/1004e5b172604ea8821f8a45a435f3e0?v=ca3cf9ce)

You can also use the header menu to view events that you've favorites and register for events (More on this later on in the tutorial).

### Summary

So the cool thing about all this is that the app that you're browsing locally is being hydrated with data from a remote Sitecore instance. And this data is being dynamically personalized and appended with extra promotional content based on rules that Sitecore content administrators have configured.

Use the menu in the left nav to continue exploring Connected Mode and learn more about how all this works.

**Next: [Experience Editor](/trials/jss-connected-demo/exploring-sitecore/experience-editor)**
