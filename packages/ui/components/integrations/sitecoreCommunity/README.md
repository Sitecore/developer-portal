# Sitecore Community Integrations

## Configuration

The feeds can be configured via headmatter.

### Blog

| Key                       | Type           | Description                                                                     |
| ------------------------- | -------------- | ------------------------------------------------------------------------------- |
| sitecoreCommunityBlog     | boolean        | If true, will display blog posts.                                               |
| sitecoreCommunityBlog     | number         | Will display the number of results specified (max 5)                            |
| sitecoreCommunityBlogSort | `SortOption`   | Will sort the blog posts to the specified `SortOption`                          |
| sitecoreCommunityBlogSort | `SortOption`[] | Will show the sort select menu, default sort will be the first presented option |

**Example**

```md
---
title: 'My Page'
description: '...'
sitecoreCommunityBlog: true
---
```

### Questions

As of writing this, the questions component only exists on the homepage.

| Key                                | Type            | Description                                                                             |
| ---------------------------------- | --------------- | --------------------------------------------------------------------------------------- |
| sitecoreCommunityQuestions         | boolean         | If true, will display questions.                                                        |
| sitecoreCommunityQuestions         | number          | Will display the number of results specified (max 5)                                    |
| sitecoreCommunityQuestionsSort     | `SortOption`    | Will sort the questions posts to the specified `SortOption`                             |
| sitecoreCommunityQuestionsSort     | `SortOption`[]  | Will show the sort select menu, default sort will be the first presented option         |
| sitecoreCommunityQuestionsCategory | `ForumOption`   | Will filter the content by forum                                                        |
| sitecoreCommunityQuestionsCategory | `ForumOption`[] | Will show the category filter menu, default category will be the first presented option |

**ForumOption**

- events
- news
- experiencePlatform
- contentManagement
- orderManagement
- contentOperations
- customerDataManagement
- digitalAssetManagement
- marketingAutomation
- personalizationAndTesting
- searchAndMerchandizing
- storefrontsAndMarketplaces

**Example**

```md
---
title: 'My Page'
description: '...'
sitecoreCommunityQuestions: true
sitecoreCommunityQuesitonsCategory: ['experiencePlatform', 'contentOperations']
---
```

### Events

| Key                     | Type    | Description                  |
| ----------------------- | ------- | ---------------------------- |
| sitecoreCommunityEvents | boolean | If true, will display events |

**Example**

```md
---
title: 'My Page'
description: '...'
sitecoreCommunityEvents: true
---
```

### News

| Key                   | Type    | Description                                  |
| --------------------- | ------- | -------------------------------------------- |
| sitecoreCommunityNews | boolean | If true, will display news and announcements |

**Example**

```md
---
title: 'My Page'
description: '...'
sitecoreCommunityNews: true
---
```
