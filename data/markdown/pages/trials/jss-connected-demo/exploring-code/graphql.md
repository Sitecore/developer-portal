---
product: ['xm', 'xp', 'jss']
title: GraphQL
---

GraphQL is a powerful and flexible query language that empowers developers by enabling them to request exactly the data they need in exactly the format they want.

In this exercise, you will build a GraphQL query to fetch data from the remote Sitecore instance and output a list of events for a given location.

### Explore where the data lives in the Sitecore Content Editor

![Launchpad with Content Editor highlighted](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/21146ed88f734ef288e84eaef434465e?v=06492652)

From the Sitecore desktop, click on **Content Editor**.

The **Content Editor** is an editing tool that you can use to manage and edit all the content on your website. It is designed for more experienced content authors who are familiar with Sitecore and the functionality that it contains. The Content Editor's appearance and functionality vary depending on the user's roles, the local security settings, and the customizations that have been implemented on the Sitecore installation.

In the content tree down here, under **content > Home**, expand the Events node.

![Content tree](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/4e94cebf6818490e880940517b5fc421?v=386ad00b)

The folders are arranged by region. Keep expanding until you find a base event page node that contains the data for the query.

Click on _Canada > Alberta > Banff > Banff 3 on 3 Basketball Challenge_. You can review the content details in the pane on the right.

Now that you know where the data lives, it's time to create a query.

The Graph Browser
In your browser, navigate to `<Sitecore hostname>/sitecore/api/graph/items/master/ui` to bring up the Sitecore Experience Graph Browser.

![The Graph Browser](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/21e76cb6f23f4e5ba81b0210f7940971?v=ca097335)

This tool gives users a place to write and test custom queries. The left pane allows for query input. The right pane will display return results.

![Root Types](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/185c129d031d4a88a131437344a1d09a?v=8513963b)

In the right sidebar is the Documentation Explorer, where you can browse through various schemas to see what form the data takes.

There are three Root Types: Query, Mutation, and Subscription.

Click on **Query**. You can now view the assorted queries defined in the schema.

![GraphQL Search query](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/329f9588f93f4e3c979717b1ccafb537?v=d699972e)

Explore the schema for **search**.

![Results fields](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/c3afff74529e401f93d00c0040571310?v=5223dff2)

This query returns a **ContentSearchResults** object. Click on that and you will see it has the following fields.

You will see a results object of the type **ContentSearchResultConnection**.

![Result object](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/d0f435f53c9f4db4b33a2025b3c0ce99?v=5d7adfe5)

Click on that to find a number of pertinent fields.

The field of note is the **items** array. This will contain the items the search query will pull back.

Now that you have gathered most of the pertinent info, it's time to put together a query.

Start by calling search, passing in a `fieldsEqual` parameter. This will be an array of name : value pairs indicating which fields to specifically query on, and what you want those values to be. If you pass in multiple objects, the query will AND them together.

```graphql
{
  search(fieldsEqual: [{ name: "_fullpath", value: "/sitecore/content/lighthousefitness/home/events*" }]) {
    results {
      items {
        name
      }
    }
  }
}
```

For this exercise, find all the items under the Events node, so specify a `_fullpath` value that contains that full path, appended with a wildcard so as to get the node's children.

Now specify how the return results should be formatted. After looking at the schema for **ContentSearchResults**, you will see a results object of the type **ContentSearchResultConnection**. That object will in turn have an `items` array. Items have a `name` property, so just return that for now.

Execute the query. You should get the following result.

![Query results](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/9899722557384349b93c16d1000249f8?v=780acb08)

This pulls back every item under the Events node. This isn't helpful yet, though, as it's pulling back every node.

Refine the search by searching only for those Event Page nodes that contain the data you want.

Return to the Content Editor and view the _Canada > Alberta > Banff > Banff 3 on 3 Basketball Challenge_ node, and verify in “Quick Info” that its template type is event-page.

![Item quick info](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/d77fad32848a4e96a1adbc42f9291d85?v=bc309306)

Return to the query, and add another object to the `fieldsEqual` array.

This time, specify that you need these items to also have a `_templatename` property equal to `"event-page"`.

```graphql
{
  search(fieldsEqual: [{ name: "_fullpath", value: "/sitecore/content/lighthousefitness/home/events*" }, { name: "_templatename", value: "event-page" }]) {
    results {
      items {
        name
      }
    }
  }
}
```

Execute the query and see that the result set has been refined.

![Refined search results](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/5d2bfa8b999d4a18a66a966f7870a9b6?v=5da4d609)

Now that you are getting the nodes you need, start pulling the event data for these items.

![Result fields](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/364f844cd41c4849bd7db4e3ffcdb827?v=037de670)

To find these in the schema, go back to the Documentation Explorer and drill down to _Query > ContentSearchResults > ContentSearchResultConnection_, then click on the items type, **ContentSearchResult**.

![ContentSearchResult documentation](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/b8ab23fb9ee74f8eb0f5a84c18b2e16c?v=88c0c4f1)

This will show the **ContentSearchResult** schema.

The property you will need is `fields`, an array of _name : value_ pairs associated with this item. Add it to the query return to see what is available.

```graphql
{
  search(fieldsEqual: [{ name: "_fullpath", value: "/sitecore/content/lighthousefitness/home/events*" }, { name: "_templatename", value: "event-page" }]) {
    results {
      items {
        name
        fields {
          name
          value
        }
      }
    }
  }
}
```

Execute the query and see that each node is pulling back a lot of useful information.

![Results filtered by path](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/cbd1f82cab7c4ddfa251fc77ad8597e7?v=df287cd5)

Too much information, actually, and not in a format that an application can easily reference without iterating through an array every time it needs to retrieve one of these values.

Clean this up by adding your properties to the result object, and using the `field()` function to retrieve the field values you want.

Start by setting the items' name to the event's `name` field. (for clarity, comment out the `fields` property)

```graphql
{
  search(fieldsEqual: [{ name: "_fullpath", value: "/sitecore/content/lighthousefitness/home/events*" }, { name: "_templatename", value: "event-page" }]) {
    results {
      items {
        name: field(name: "name")
        #fields{
        #name
        #value
        #}
      }
    }
  }
}
```

Execute the query and get the following.

![Changed result object](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/fb1642a86f404115b5a0ebd11d75624c?v=5e42873f)

Now add a few more fields that you will need, like description, date, image, latitude, longitude, etc. Then set this array of items to a property named events.

```graphql
{
  search(fieldsEqual: [{ name: "_fullpath", value: "/sitecore/content/lighthousefitness/home/events*" }, { name: "_templatename", value: "event-page" }]) {
    results {
      events: items {
        name: field(name: "name")
        description: field(name: "description")
        date: field(name: "date")
        image: field(name: "image")
        latitude: field(name: "latitude")
        longitude: field(name: "longitude")
      }
    }
  }
}
```

Execute the query once again and get a nicely formatted result set that looks like this.

![Expanding result object with more fields](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/7482ca6ae17245e8981f32f383880808?v=2c5b1815)

Excellent! That looks like some usable data!

However, having the image name alone isn't particularly useful. What is needed to display an image are the src and alt properties. These can be found by accessing the `Item` object and its `fields: [ItemFields]` array.

Write a small fragment below the query named ImageQuery. It will cast the incoming ItemField as an ImageField, returning its `alt` and `src` values.

```graphql
fragment ImageQuery on ImageField {
  alt
  src
}
```

Now add an 'item' property that retrieves a field named `image`. Have it reference our ImageQuery fragment.

```
{
  firstSearch: search(fieldsEqual: [
    {name:"_fullpath", value:"/sitecore/content/lighthousefitness/home/events*"},
    {name:"_templatename", value:"event-page" }
  ]){
    results{
      items {
        name: field(name: "name")
        description: field(name: "description")
        date: field(name: "date")
        latitude: field(name: "latitude")
        longitude: field(name: "longitude")
        item{
          image: field(name: "image"){
            ...ImageQuery
          }
        }
      }
    }
  }
}

fragment ImageQuery on ImageField {
  alt
  src
}
```

Now run the query to see the following:

![Final results](https://mss-p-006-delivery.sitecorecontenthub.cloud/api/public/content/cd305d1865dc42b59489c44a476ad42c?v=cc934e4e)

Now the image `alt` and `src` data is available to display the image in a component. Excellent!

From here, you might want to add facets to the search; For instance, what if you wanted to look for only items associated with a given language? You might also want to narrow the search to a specific province.

There is much you can do, and GraphQL provides plenty of tools with which to modify and refine queries.
