---
title: "Configuration options"
description: "Learn more on configuring pages"
hasInPageNav: false
---

## Configuration
Each page can store metadata (frontmatter) in head of the page. Required fields are title and description, but there are lots of other settings possible. A default page setup would look like this
```markdown
---
title: 'Page Title'
description: 'Description of the page'
---

# This is where the content would be

```

## Options
Besides the title and description there are various other options available:

### Core
These parameters affect core functionality of a page:

|Variable|Type|Purpose|
|-|-|-|
|PageType|string|Options to use a different pagetype (defaults to default)|
|hasInPageNav|boolean|Shows a menu that links to all H2 element on the current page|
|hasSubPageNav|boolean|Shows a menu that uses a manifest.json as datasource|
|heroImage|string|Override the current hero image with a custom image|
|openGraphImage|string|Override the OG image with a custom image|
|partials|string[]|Render the contents of the partials on this page (deprecated)|
|partialGroups|PagePartials[]|Render one or multiple groups with partials on this page ([example](https://github.com/Sitecore/developer-portal/blob/773a9f5783ad34293ed3959fc400c795f0fc9d8b/apps/devportal/data/markdown/pages/discover.md?plain=1#L7))|

### Integrations / Components
The configuration options enable and customize different components used on the pages

|Variable|Type|Purpose|
|-|-|-|
stackexchange|string | string[]|string or string array of tags (#tagname)|
twitter|string | string[]|String array of accounts or hashtags|
youtube|string|Playlist Id|
changelogProductId|string[]|array of productIds to include|
changelog|string|Number of entries to retrieve|
promoBefore|string[]|Name of .ts file within `apps\devportal\data\promos` folder (without file extension)|
promoAfter|string[]|Name of .ts file within `apps\devportal\data\promos` folder (without file extension)|

### Sitecore Community
These options can enable/disable Sitecore Community integrations on a page level

|Variable|Type|Purpose|
|-|-|-|
sitecoreCommunityBlog|number/boolean|[Read more here](content/community)|
sitecoreCommunityBlogSort|SortOption/SortOption[]|[Read more here](content/community)|
sitecoreCommunityEvents|boolean|[Read more here](content/community)|
sitecoreCommunityNews|boolean|[Read more here](content/community)|
sitecoreCommunityQuestions|number/boolean|[Read more here](content/community)|
sitecoreCommunityQuestionsSort|SortOption/SortOption[]|[Read more here](content/community)|
sitecoreCommunityQuestionsCategory|ForumOption/ForumOption[]|[Read more here](content/community)|