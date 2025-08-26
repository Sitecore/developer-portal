---
title: 'UI Translation'
description: 'Multi-language content and portal UI translation in Sitecore Content Hub: manual vs automated approaches.'
hasSubPageNav: true
hasInPageNav: true
area: ['accelerate']
lastUpdated: '2025-07-30'
created: '2025-06-16'
audience: ['Architect', 'Technical Implementers', 'Solution Architects']
---

## Context

Delivering multilingual digital experiences is essential for global brands using Sitecore Content Hub. A well-localized solution ensures users across regions can interact with the platform in their preferred language—whether they’re navigating the portal UI or managing multilingual content.

The following focused on the UI translation - review the [Content Translation](/learn/accelerate/content-hub/implementation/languages/content-translation) recipe for content specific processes.

> The provided code is intended as a guideline and must be tailored to suit your specific implementation requirements. Please ensure thorough end-to-end testing is conducted to validate its functionality and performance in your environment.

## Execution

When requirements dictate a multi-language scenario in Content Hub you must first define the languages and cultures to be used. Available cultures for translations are configured in Manage > Settings > Localization > Cultures. Once cultures have been established, [languages can be added](https://doc.sitecore.com/ch/en/users/content-hub/manage-portal-languages.html#add-a-portal-language) via Manage > Portal languages.

Out of the box Content Hub comes with the language of English and the culture English (United States).

In order to allow for the general UI of Content Hub, which includes page names, definition names, buttons, links, system messages related to the UI in general, to be available in differing languages you must first add the culture and language (as noted above). Once you are satisfied with your list of cultures and languages you will need to add translations for the various fields- this can be done manually or automatically.

Once translations are imported back into Content Hub, you can view the differing languages by utilizing the culture drop down on the various pages, for example Assets search page.

### Manual translations of UI languages

1. [Export your languages](https://doc.sitecore.com/ch/en/users/content-hub/export-translations.html) and select all the languages you want available for translation.
2. Utilizing the output the export, an Excel workbook, you have options to add in missing translations. This can be done in many ways such as via a tool like Google Translate or an translation agency.

Example, we can see general UI translations in this first tab where the English has been added along with the Translated Spanish. Any fields that are not provided with a value will by default display the English, based on the `BaseTemplate` value.

<img src="/images/learn/accelerate/content-hub/language-manual-translation.png" alt=""/>
<br/><br/>

In any case, once translations are provided, they can be imported back into Content Hub via (Manage > Translations > Import).

### Automatic translations of UI languages

You can create translations using AI with this example [.NET Core Console application](https://github.com/Sitecore/accelerate-content-hub/tree/main/examples/Sitecore.ContentHub.TranslationGenerator)

1. Export your language as normal, making sure to select all the languages you want available for translation
2. Build and run the console application as per README instructions.
3. You will be asked for a target language - enter e.g. 'de-DE' for German
4. Input file: enter the path to your language export file from the preparation steps.
5. Output file: you may choose your own file or just press enter again to select the provided default file, e.g. inputfile (de-DE).xlsx.
6. Repeat steps for further translations.
7. Import your new translations into Content Hub.

Once translations are imported back into Content Hub, you can view the differing languages by utilizing the culture drop down on the various pages, for example Assets search page.

<img src="/images/learn/accelerate/content-hub/ui-automatic-translation.png" alt=""/>
<br/>

## Insights

We recommend minimizing the number of portal languages where possible. This is because when a page is requested from the API and loaded on the page, all translations for entity labels will be retrieved. This increases the request payload and therefore can negatively impact page load time:

<img src="/images/learn/accelerate/content-hub/translation-performance.png" alt=""/>
<br/><br/>

If a portal language is not being used, remove it altogether. Where a portal language is only used by a small number of users (check users' default language - this can be done programmatically / via the query API endpoint) then consider whether this additional language is worth keeping.

Note that a cleanup may be necessary to remove the deleted translations entirely, as removing a language does not automatically remove (for example) that language’s translation from entity labels.

Adding/removing a portal language or importing translations should not cause any graph server activity as these actions are UI-level operations and are isolated from the graph engine. The import process will take a similar amount of time as other import operations to complete, but will not tie up the graph server.

### Best Practices
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
- **Understand permissions** - Importing or exporting translations requires either Superuser access or appropriate permissions through user group policies. Ensure the right roles are in place before initiating translation workflows.
- **Test in a non-Production environment** - before going live, validate your translation setup in a non-production environment. Enable the culture switcher to simulate real-world scenarios and ensure all translations display and behave as expected across different languages.

## Related Recipes

<Row columns={2}>
  <Link title="Domain modelling" link="/learn/accelerate/content-hub/pre-development/data-model/domain-modelling" />
  <Link title="Content Structuring" link="/learn/accelerate/content-hub/pre-development/data-model/content-structuring" />  
</Row>

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
## Related Documentation

<Row columns={2}>
<Link title="Portal translation" link="https://doc.sitecore.com/ch/en/users/content-hub/portal-translation.html" />
<Link title="Export translations" link="https://doc.sitecore.com/ch/en/users/content-hub/export-translations.html" />
<Link title="Import translations" link="https://doc.sitecore.com/ch/en/users/content-hub/import-translations.html" />
</Row>
