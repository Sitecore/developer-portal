---
title: 'Multilingual content and localization'
description: 'Setting up XM Cloud and the Next.JS head application for multilingual and regional use cases'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2024-11-18'
---

## Context

Localization refers to the set of features and overall process of making an application accessible and consumable to a region or language. Localization needs to be thought of in distinct features, that may be applied together or separately to achieve the desired localization solution:

- Localized URLs
  - Language code slugs
  - Localized URLs and page names
  - Multi-domain routing
- Language fallback
- Dictionary phrases

## Execution

Keep in mind that with XM Cloud, for each of the above of features or configurations, localization happens across two platforms that must be kept in alignment for the correct end user experience:

- Configuration of the Sitecore XM Cloud instance
- Configuration of the Next.JS head application

### Adding a language to XM Clouds

Regardless of the feature being targeted, the XM Cloud instance must be setup so that the XM Cloud instance understands what is or is not a supported language.

To add a language to XM Cloud, open up the Content Editor and navigate to

```
/sitecore/system/Languages
```

<br /><br />
Right click the Languages item, choose Insert and then select Language. From there follow the wizard to add the desired language. [Alternatively, you can add a new language version directly in XM Cloud Portal Settings.](https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-languages-and-locales.html#enable-a-language-for-the-environment) After adding the language, perform a full site publish - consider the best practices needed for publishing, including setting up workflow. Review the Publishing to Edge recipe for more information.

### Adding language versions of Content in XM Cloud

Once the desired language has been setup [you can add new language versions of existing content. A feature of SXA is that you can use a built-in script to create a new language version of the entire website. All site items and field values are copied from the source language to the target language](https://doc.sitecore.com/xmc/en/developers/xm-cloud/add-a-language-version-to-an-sxa-site.html). Alternatively, you can create language versions of individual items manually. In both cases your alternate language versions of content will be subject to the same workflow as the default language (workflow should be set on standard values so that new items are subject to workflow on creation). Where auto publish is not part of the workflow [and items are subject to bulk publishing] it’s worth remembering that where multiple language versions are concerned, the publishing times for a full site publish could be much greater due to the additional language versions involved.

### Localized URLs

#### Language Code Slugs

Language code slugs refer to the part of the URL that indicate the requested language a page should be returned in. In the following URL **www.mywebsite.com/fr-ca/about-us** the first URL segment, **/fr-ca/** is the considered the language slug and indicates that the page should be returned to the end user in the "French Canadian" language.

### Localized page URLs and page names

Localized page URL’s and page names refers to when a page or route can be requested with a different name that differs from its canonical name and further implies the target or desired language the page should be returned in.

Using the following URL, www.mywebsite.com/about-us the canonical and implied language would be English. Following the steps below, you can configure both XM Cloud and the head application to resolve the following URL as the same page, but for the French language: www.mywebsite.com/qui-sommes-nous

Sitecore does not allow for different item names based off the language version, however we can achieve localized functionality by using the Display Namefield of each item and updating the URL managers to use the Display Name field instead of the item name itself.

### Patch Configuration for XM Cloud

The following patch configuration file should be added to the Visual Studio solution and deployed to XM Cloud. Be sure to check **/sitecore/admin/showconfig.aspx** to ensure the patch configuration has been appropriately applied:

```xml
<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/">
	<sitecore>
		<linkManager>
			<providers>
				<add name="localizedProvider">
					<patch:attribute name="useDisplayName">true</patch:attribute>
				</add>
			</providers>
		</linkManager>
		<links>
			<urlBuilder>
				<useDisplayName>true</useDisplayName>
			</urlBuilder>
		</links>
	</sitecore>
</configuration>
```

After the patch configuration has been applied, perform a full site publish to rebuild all routes.

### Configuring the Next.JS Application

In the Next.JS application, the following configuration property needs to be updated to including ALL languages that were configured in XM Cloud. The following configuration properties are located in next.config.js – typically at the root of the repository.

```javascript
i18n: {
// These are all the locales you want to support in your application.
// These should generally match (or at least be a subset of) those in Sitecore.
locales: ['en', 'fr-CA', 'es'],
// This is the locale that will be used when visiting a non-locale
// prefixed path e.g. `/styleguide`.
defaultLocale: jssConfig.defaultLanguage
}
This configuration step should be done AFTER configuring XM Cloud and publishing changes there. This configuration change to the next.config.js requires a redeployment.
```

### Review

After configuring both XM Cloud and Next.JS application, Experience Edge will resolve routes based off the display name of the item. You can continue to resolve routes based off explicit language parameters (language code URL slugs, for example) in combination with the canonical item name.

#### Multi-domain routing with Localization

Multi-domain routing refers to the concept of using different URL’s within the same head application to target different languages.

### Configuring the Next.JS application

Update the domains property in next.config.js and set a target language for each domain.

```javascript {.line-numbers}
i18n: {
locales: ['en', 'fr-CA'],
defaultLocale: jssConfig.defaultLanguage,
domains: [
{
domain: 'www.mywebsiteinfrench.com',
defaultLocale: 'fr-CA',
},],
},
```

<br /><br />
On lines 4-8, above, we have added a domain that will target the French Canadian language implicitly.

### Language Fallback

When requesting an item in a specific language, and the language version for that item or route is not found, XM Cloud (Experience Edge) will not resolve the item and return null or 404. You can configure XM Cloud to “fallback” to a default language when a requested language version is not found on for an item.

<Alert status="info">
  <AlertIcon />
   Always use the SXA site settings to configure language fallback in XM Cloud.
</Alert>
<br />
Set the "Enable item language fallback" field on the Site Grouping item, locally here: **/sitecore/content/$tenant/$site/Settings/Site Grouping/$siteGrouping**

![Language settings dialog](/images/learn/accelerate/xm-cloud/language-settings.png)

### Dictionary Phrases

Dictionary phrases are configured under the site (or in an SXA shared site) at the following path:

```
/sitecore/content/$tenantOrSiteCollection/$site/Dictionary
```

<br /><br />

To use a dictionary phrase in your head application, use the useI18n hook provided by the next-localization package.

```javascript

import { useI18n } from 'next-localization';
const MultilingualComponent = (): JSX.Element => {
const { t, locale } = useI18n();
return (
<div>
<p>Translated text: {t('dictionary-phrase')}</p>
<p>The current language is: {locale()}</p>
</div>
);
};
export default MultilingualComponent;
```

<br /><br />

The dictionary-factory-service in the foundation head repository will provide access to all dictionary phrases for a site. You can also directly query for dictionary phrases using the following GraphQL query:

```graphql
query DictionarySearch($rootItemId: String!, $language: String!, $templates: String!, $pageSize: Int = 10, $after: String) {
  search(where: { AND: [{ name: "_path", value: $rootItemId, operator: CONTAINS }, { name: "_language", value: $language }, { name: "_templates", value: $templates, operator: CONTAINS }] }, first: $pageSize, after: $after) {
    total
    pageInfo {
      endCursor
      hasNext
    }
    results {
      key: field(name: "Key") {
        value
      }
      phrase: field(name: "Phrase") {
        value
      }
    }
  }
}
```

## Related Recipes

<Row columns={2}>
  <Link title="Preparing for an XM Cloud Project" link="/learn/accelerate/xm-cloud/pre-development/project-planning/preparing-for-an-xm-cloud-project" />
</Row>

## Related Documentation

<Row columns={2}>
  <Link title="Manage languages and locales" link="https://doc.sitecore.com/xmc/en/users/xm-cloud/manage-languages-and-locales.html#enable-a-language-for-the-environment" />
  <Link title="Add a language version to an SXA site" link="https://doc.sitecore.com/xmc/en/developers/xm-cloud/add-a-language-version-to-an-sxa-site.html" />
</Row>
