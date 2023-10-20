---
product: ['xm', 'xp', 'jss']
title: Updating a component
---

We can make changes to a component in our local application, then see those changes refreshed in the browser immediately.

1. In your preferred editor, open the EventListItem component file, located in the following location:

   ```shell
   \fitness\app\src\components\EventListItem\index.js
   ```

2. Find the `<NavLink>` tag that wraps the `<Text>` field for our event items name. (should be somewhere around line 60).
   ![NavLink that wraps the Text field](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/aded737d47da4e768c9c128e12737401?v=2a95298f)

3. Change the order of the `<NavLink>` and `<DateField>` tags so that `<DateField>` appears first.
   ![Change the order of the NavLink and DateField tags](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/8fb518aaa59445d99c558f4e4a241d64?v=5a1995b9)

4. Save your changes. Since hot reloading is enabled, the browser will automatically refresh to reflect the changes.
   ![Final result of the changes](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/f500234f284b40faa49753991a79fbb1?v=19500036)

### Developer Trial Limitations

If this were a normal development workflow, once you completed testing your code locally, the next step would be to deploy your changes to the server that hosts the remote Sitecore instance. This step is not supported for the Developer Trial. Because of this limitation, you can edit existing components freely in Connected Mode, but you are unable to create new components and add them to the page.

**Next: [GraphQL](/trials/jss-connected-demo/exploring-code/graphql)**
