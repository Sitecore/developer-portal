---
title: 'Release Notes'
---
Publication history:<br/>
**2026-10-30:** Released Sitecore Experience Accelerator 10.5.0.


Sitecore Experience Accelerator (SXA) 10.5 includes improvements to performance, security, accessibility, installation, and the content authoring experience across on-premises and Sitecore XP deployments, with selected fixes for XM and headless scenarios.

- [Highlights](#highlights)
- [Security improvements](#security-improvements)
- [New features and improvements](#new-features-and-improvements)
- [Resolved issues](#resolved-issues)
- [Breaking changes](#breaking-changes)
- [Deprecated APIs](#deprecated-apis)

Return to the [Sitecore Experience Accelerator 10.5.0](/downloads/Sitecore_Experience_Accelerator/10x/Sitecore_Experience_Accelerator_1050) release page.

## Highlights

- Performance improvements reduce database lookups and request delays in targeted rendering, redirect, datasource, and URL-resolution scenarios.
- SXA installation templates now support Solr authentication in Sitecore 10.5 environments.
- Search and accessibility updates improve suggestion relevance, label associations, checklist selection, and invalid-result handling.
- Security updates address reported vulnerabilities in SXA dependencies, JSON deserialization, and reflected script injection.
- Authoring, rendering, publishing, and SEO fixes improve reliability across selected SXA scenarios.

## Security improvements

| Category | Description | Jira / ADO ID |
| --- | --- | --- |
| Security | Updated JavaScript dependencies used by SXA theme, Basic2, CELT, and Showcase assets to address reported vulnerabilities. | PDXP-32076, PDXP-32070, PDXP-32069, PDXP-32066, PDXP-32065, PDXP-32062, PDXP-31533, PDXP-31532, PDXP-31531, PDXP-31530, PDXP-31529, PDXP-31528, PDXP-31527, PDXP-31526, PDXP-31525 |
| Security | Updated the bundled Scriban dependency from version 5.7.0 to 7.2.5 to address reported vulnerabilities. | SXA-9190 |
| Security | Dictionary handling now uses safer JSON deserialization. | PDXP-30117 |
| Security | Facet Summary now safely handles facet data to prevent reflected script injection. | SXA-7665 |
| Security | Checklist filters now work with Content Security Policies that disable unsafe-eval. | SXA-8752ADO: 360200 |

## New features and improvements

| Category | Description | Jira / ADO ID |
| --- | --- | --- |
| Installation | Sitecore 10.5 uses Solr 10, and the SXA 10.5 SIF templates now include the Solr authentication parameters required for installation. Previously, SIA could fail to install SXA on XM1 or XP1 deployments because those parameters were missing. | SXA-9123, SXA-9301 |
| Performance | Saving an SXA site definition no longer waits for the site provider to reload. Previously, saving on instances with about 200 or more SXA sites blocked the request while the MVC route table was rebuilt. Reloading now runs in a background job. | SXA-9009 |
| Experience Editor | Control-marker placeholder exclusions are configurable through experienceAccelerator/editing/excludedPlaceholders/placeholder. The default exclusions remain head, sxa-metadata-partial-design, sxa-header, sxa-footer, sxa-main, body-top, and body-bottom. | SXA-7593 |
| Marketing Foundation | SXA canonical link tags now include a trailing slash. Previously, the output omitted it. | SXA-7408 |
| Experience Editor | The toolbox and Control Properties dialog use the updated SXA 10.5 visual design, including refreshed accordion styling, icons, borders, desktop/touch controls, and dialog tabs. | PDXP-29001, PDXP-29328 |
| Performance | Site information caches are isolated by database, reducing allocations and cross-database cache-invalidation coupling. Previously, SiteInfoResolver used shared cache entries with database-qualified keys. | SXA-7854ADO: 591143 |
| Compatibility | SXA 10.5 supports Node.js versions 22.x to 26.x. See the [SXA compatibility table](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB0180187#Notes) for details. |  |

## Resolved issues

| Category | Description | Jira / ADO ID |
| --- | --- | --- |
| Content Editor | The Insert Link dialog opens when item paths create a long query string in cloud environments. Previously, selecting a General Link target could generate an ro query string long enough for infrastructure limits, such as Azure Front Door, to reject the dialog request with HTTP 400. | SXA-9064 |
| Search | The Search Box sends the entered term when requesting suggestions. Previously, suggestion requests used an empty q parameter, so results could include items unrelated to the search term. | SXA-9040 |
| Search | Checklist filters retain all selected checkboxes when multiple selection is enabled. Previously, in the Wireframe theme, selecting multiple facet values with spaces in their names left only the last checkbox selected, even though results were returned for both. | SXA-8948 |
| Content Foundation | Redirect Map target URLs preserve hyphenated destination slugs when a resolved target contains $. Previously, token resolution's query-escaping processor wrapped the hyphenated path segment in #...#, producing malformed redirects—for example, /advisor/insights/#bluespring-acquires-$280-million-joule-financial#. Redirect Map target resolution now skips that query-escaping step; other token-resolution behavior is unchanged. | SXA-8927 |
| Accessibility | Search Box labels now reference the input by its id. Previously, the label referenced the input by its name, preventing the expected label association for accessibility tools. | SXA-8860 |
| Headless Services | Allowed Controls settings now apply to dynamic placeholders in SXA headless sites. Previously, allowed renderings were not restricted by placeholder settings after deployment or serialization for dynamic placeholders. | SXA-8782ADO: 584848 |
| Performance | Composite datasource lock propagation is disabled by default to avoid prolonged Experience Editor lock delays. Previously, locking a page with many composite components could stall for minutes while datasource items and their children were locked. XA.Feature.Composites.CompositeLockPropagation defaults to false; set it to true to opt back in to datasource lock propagation. | SXA-8728 |
| Performance | Content-token rendering caches unsuccessful lookups to reduce repeated database queries for JavaScript expressions in Rich Text fields. Previously, expressions such as $(document).ready(...) were treated as content tokens and queried the database. A cache miss still performs an initial lookup; the empty result is cached so later requests for the same language and token do not repeat it. | SXA-8684 |
| Content Foundation | Tailwind Grid rows render as expected with the Basic2 theme. Previously, adding a Splitter Row rendering to a partial design in a Basic2 Tailwind site displayed the rows incorrectly. | SXA-8575 |
| Content Foundation | The configured not found page returns HTTP 200 when requested directly. Previously, requesting the configured not found page returned HTTP 404 even when the page existed. | SXA-8425 |
| Performance | Component fields in rendering variants now honor the cacheability and variation options specified by the Caching rendering parameter. | SXA-8142 |
| Performance | Redirect Map resolution avoids repeated SQL lookups on Edge. Previously, resolving the Redirect Map in an on premises Edge environment triggered repeated database lookups, including more than 1,600 executions over about 26 hours. | SXA-8118ADO: 596838 |
| Content Foundation | SXA datasource parsing preserves platform handling for unsupported datasource formats. Previously, rendering a deeply nested item with a query datasource that required SXA support could increase SQL load and produce unresolved rendering warnings under load. | SXA-8024ADO: 626822 |
| Performance | Localizable URL resolution avoids repeated item lookups under high server load. Previously, LocalizableUrlItemResolver could repeat expensive GetItems operations when a lookup returned multiple items. | SXA-8001 |
| Content Foundation | Media links in rendering variants no longer include the /sitecore/login prefix. Previously, adding an href attribute that used a media link in a rendering variant could produce a URL with the /sitecore/login prefix. | SXA-7900 |
| Experience Editor | Snippet renderings stay out of presentation details when a placeholder is added to the snippet layout. Previously, adding a different placeholder to the snippet layout could add the snippet's renderings to presentation details for a nested snippet. | SXA-7711 |
| Publishing | Publishing handles items named $ and media filenames ending in (1) without an exception. Previously, smart publishing an item named $, or publishing a media item with a filename such as test (1).jpg, could cause an exception in the publish end handler. | SXA-7684ADO: 505094 |
| Publishing | Sitemap media items publish to the web database after the sitemap folder is removed. Previously, with the sitemap refresh threshold set to zero, publishing a new page after removing the sitemap folder could create the sitemap item in master without publishing it to web. | SXA-7680 |
| Headless Services | Rendering-host lookup handles a missing site-definition item without a NullReferenceException. If the site-definition path does not resolve in the selected database, SXA logs a descriptive configuration error and returns no rendering-host definition. | SXA-7652 |
| Localization | Japanese characters in OpenGraph meta attributes render without numeric entity encoding. Previously, Japanese text entered in the OpenGraphTitle field was output as numeric entities in the meta tag on Sitecore 10.4 with SXA 10.4. | SXA-7569 |
| Content Foundation | SXA requests no longer fail when the X-UA-Compatible header is configured. Previously, a request could throw an HttpException when the compatibility header was appended after the response headers had been sent. | SXA-7538 |
| Content Foundation | Experience Editor creates a Data folder under the matching page item. Previously, when a folder and page had the same name under a site root and the folder appeared first, adding a component created the Data folder under the folder instead of the page. | SXA-7533ADO: 620002 |
| Performance | Content token rendering reduces database load when pages use many content tokens. Previously, rendering items that used many content tokens generated high database load while resolving token values. | SXA-7374ADO: 616712 |
| Localization | The Select Media dialog displays uploaded images for Arabic site items without a region code. Previously, reopening the image browser for an Arabic site item with a blank Country/region code showed “No items found” after an image had been uploaded. | SXA-7373ADO: 534626, 539302 |
| Experience Editor | The Experience Editor toolbox appears after switching from Preview to Edit mode. Previously, when Preview.AsAnonymous was false, switching from Preview to Edit could leave the toolbox missing. | SXA-7321 |
| Experience Editor | Deleting a Splitter column no longer causes a NullReferenceException after the component is replaced. Previously, deleting a column after removing and readding a Splitter component could pass an outdated rendering identifier and throw an exception. | SXA-6563ADO: 614133 |
| Search | Associated media links in Search Results no longer include /sitecore/login. Previously, the generated document URL included /sitecore/login/ and opened a not found page. | SXA-6530ADO: 521591 |
| Performance | Layout XML registration avoids lock contention under concurrent request load. Previously, concurrent calls to LayoutXmlService.RegisterInjectedRenderings could contend on a lock and slow request processing. | SXA-6505ADO: 516880, 610838 |
| Experience Editor | Creative Exchange preserves separate column styles when importing a Splitter. Previously, importing an exported Splitter with different column styles applied the same style to both columns. | SXA-6358ADO: 614133 |
| Personalization | Personalization conditions work for renderings on a partial design in XM. Previously, an RTE rendering on a partial design showed only the default variant when personalization was configured. | SXA-6322 |
| Content Foundation | The Gallery information dialog stays open when its icon is tapped on Android devices. Previously, tapping the Gallery info icon on an Android device could cause the title dialog to disappear or not open. | SXA-6279ADO: 612543 |
| Headless Services | robots.txt is available when every SXA site uses a virtual folder. Previously, requesting robots.txt returned a not found page when all SXA sites had a virtual folder configured. | SXA-5990 |
| Search | Search results skip invalid items instead of failing while generating links. Previously, an invalid item in a search result list, such as a datasource item, could cause an ArgumentNullException when SXA generated result links. | SXA-8683 |
| Content Foundation | Rendering variants preserve placeholder identifiers during concurrent page renders. Previously, shared rendering variant field objects could allow one request to overwrite another page's placeholder identifier, causing content to disappear. | SXA-6310ADO: 613618 |
| Performance | Rendering variant cloning avoids excessive CPU usage and request delays in affected hotfix configurations. Previously, copying cached rendering variant fields could consume excessive CPU and leave other rendering requests waiting under load. | SXA-7383, SXA-7503 |
| Experience Editor | Datasource workflow actions handle circular datasource references without crashing the application. Previously, submitting items that referenced each other as datasources could repeatedly execute workflow actions until a StackOverflowException occurred. | SXA-7763 |
| Experience Editor | Local datasources advance through workflow when the page design has no partial designs. Previously, the Datasource Workflow Action could move the page to its next state without moving the local datasources used by components on that page. | SXA-2124 |
| Performance | Optimized asset cleanup uses content search when the SXA index is available. Previously, publishing a large content subtree could run an expensive database query to locate optimized assets, delaying event processing and indexing. | SXA-8453 |
| Performance | Bundled SXA assets include pre-optimized files to reduce optimized-file update traffic. Previously, regenerating optimized-min assets could produce an excessive number of item updates in the event queue on Content Delivery instances. | SXA-1782 |
| Performance | Site information resolution reduces lock contention under concurrent request load. Previously, concurrent calls to SiteInfoResolver could wait on shared cache locks and slow request processing. | SXA-7981ADO: 610861 |
| Performance | Rendering and text-encoding paths reduce repeated regular-expression work, lowering processing overhead and associated lock contention during concurrent requests. | SXA-7036, SXA-7037, SXA-8961 |
| Publishing | Experience Edge retains sitemap references during sitemap refresh and publishing. Previously, a sitemap refresh could temporarily clear the site's sitemap references, allowing a concurrent publish to remove the sitemap information from Edge. | SXA-8490 |
| Headless Services | SXA headless sites use the Layout Service configuration selected for the application. Previously, Preview Edge requests could ignore that selection and use the global XA.LayoutService.ConfigurationName value, preventing different configurations from being used per site. | SXA-8383 |
| Headless Services | Layout Service datasource paths update after an ancestor item is renamed and published. Previously, scaled CM and CD deployments could continue returning an outdated path for a datasource using the page:/ prefix. | SXA-8773 |
| Headless Services | Item links in Layout Service output honor the site's Language embedding setting. Previously, links could include a language segment even when Language embedding was unchecked, including when the site's language cookie was absent. | SXA-9131 |
| Content Editor | Page Branch insert-option rules allow authors to select the branch used by a rule action. Previously, clicking the specified branch in the rule editor did not open the selection dialog, preventing the action from being configured. | SXA-8574 |
| Experience Editor | Fields rendered through a VariantComponentField on a partial design are editable in Experience Editor. Previously, those fields could remain read-only when the page used the partial design, even though equivalent VariantField output was editable. | SXA-7401 |
| Experience Editor | Grid placeholder exclusions no longer prevent authors from adding renderings inside a Container. Previously, excluding a placeholder pattern such as container-\* from grid wrapping could leave the Container blank and prevent further components from being added. | SXA-7526 |
| Content Editor | The Home item remains selectable after all Page Design rules are removed. Previously, in affected hotfix configurations, leaving an empty \<ruleset /\> value in the Design rules field could cause a null-argument exception when selecting Home. | SXA-6642 |
| Content Foundation | Custom error pages use the requested language when a translated version is available. Previously, the configured 404 page was resolved only in the site's content language, even when the visitor requested another language. The content language remains the fallback when the requested version is unavailable. | SXA-7592 |
| Content Foundation | Configured SXA 404 pages are preserved in Azure Web Apps. Previously, the IIS httpErrors configuration could replace the SXA not found page with the web server's generic error response. | SXA-7506 |
| Content Foundation | Multiple Carousel components on the same page support slide transitions and controls. Previously, only the first Carousel component worked and additional carousels did not respond as expected. | SXA-8433 |
| Content Foundation | Each Carousel component loads its own images when multiple carousels share a page. Previously, adding a second Carousel could cause images from both components to be loaded together. | SXA-8457 |
| Search | Existing boosting rules continue to recognize supported string operators after an upgrade. Previously, rules using operators such as Contains could stop applying because older and newer operator items used different identifiers. | SXA-8815ADO: 342203, 400929 |
| Search | Aggregated search content initializes without unnecessary media-extractor configuration errors. Previously, SXA initialized MediaItemContentExtractor from AggregatedContent even though it was not used, logging errors that an object could not be created from the mediaIndexing configuration node. | SXA-7735 |
| Headless Services | Experience Edge resolves error-page paths and Redirect Maps using the configured SXA site context. Previously, these resolvers constructed site information from copied properties instead of retrieving the configured site definition. | SXA-8216ADO: 608805, 608856 |
| Performance | Redirect Map cache invalidation is skipped for shallow publishes rooted at unrelated content items. Previously, every publish cleared the cache. Deep publishes and publishes rooted at Redirect Map data still clear it, so the change avoids unnecessary invalidation for unrelated shallow publishes. | SXA-7433 |
| Performance | Layout XML and rendering variant caches are cleared only when required during publishing. Previously, publishing a site with many pages cleared these caches multiple times during a single publish. | SXA-7540 |
| Publishing | SXA can publish virtual media-folder children during a deep publish when the opt-in setting is enabled. Set XA.Foundation.Publishing.PublishVirtualMediaChildren.Enabled to true to enable this behavior; it defaults to false. Previously, deep publishing a site or virtual media folder did not include those virtual children. | SXA-6509ADO: 613710 |

## Breaking changes

Review these changes before upgrading custom SXA integrations or role configurations.

| Area | Change | Action required | Jira / ADO ID |
| --- | --- | --- | --- |
| Content Tokens | RenderContentToken.DictionaryCacheInstance is no longer exposed. ContentTokensCacheClearer no longer derives from CacheClearerBase . Its old OnItemDeleted(object, Item) and OnItemSaved(object, Item) overrides are replaced by non-virtual methods that accept EventArgs . | Use the protected, database-specific DictionaryCache property. Update custom subclasses and handlers that rely on the former base class or signatures. | SXA-7374ADO: 616712 |
| Site Metadata | GetExternalMediaUrl is no longer a member of IExternalLinkGenerator ; it is declared on IExternalMediaLinkGenerator instead. ExternalLinkGenerator still provides the method. | Update consumers that call it through IExternalLinkGenerator to use the new interface. | SXA-8485 |
| Upgrade service | GetUpgradeDatabaseName() was added to the IUpgradeService interface. | Custom classes that implement the interface directly must implement the new member; subclasses of the built-in UpgradeService inherit its virtual implementation. | SXA-9001 |
| Headless placeholder settings | GetAllowedRenderings now derives from Sitecore.ExperienceEditor.Pipelines.GetPlaceholderRenderings.GetAllowedRenderings , and its Process(GetPlaceholderRenderingsArgs) method is declared with new virtual rather than as an independent virtual method. | Review custom subclasses and calls through the platform base type because the inheritance and method-dispatch behavior changed. | SXA-8782ADO: 584848 |
| Experience Editor | Composite on-page editing is disabled by default; the shipped configuration enables it for Standalone and ContentManagement roles. Previously, it was enabled on all roles. | For custom authoring roles that need composite on-page editing, set XA.Feature.Composites.OnPageEditing to true. | SXA-7463 |

## Deprecated APIs

The following public members are obsolete in SXA 10.5 and are planned for removal after two consecutive releases. Review custom implementations that use them.

| Description | Jira / ADO ID |
| --- | --- |
| The Sitecore.XA.Foundation.Caching.DictionaryCacheValue.Properties property is obsolete since SXA 10.5. Use Sitecore.XA.Foundation.Caching.DictionaryCacheValue.ConcurrentProperties instead. | SXA-8042 |
| The Sitecore.XA.Foundation.Multisite.SiteInfoResolver.DictionaryCacheInstance and Sitecore.XA.Foundation.Multisite.SiteInfoResolver.DictionaryCache properties are obsolete since SXA 10.5. Custom subclasses should use the database-specific cache returned by \_dictionaryCacheInstance.GetCacheForDatabase(dbName) instead. | SXA-7854ADO: 591143 |
| The Sitecore.XA.Foundation.Multisite.Constants.LocalizedUrlPart field is obsolete since SXA 10.5. | SXA-7574 |
| The Sitecore.XA.Foundation.Multisite.Pipelines.HttpRequest.LocalizableUrlItemResolver is obsolete since SXA 10.5. Review custom request pipelines and subclasses that depend on this processor. | SXA-7574 |
| The Sitecore.XA.Foundation.Search.ComputedFields.AggregatedContent(XmlNode configurationNode) constructor is obsolete since SXA 10.5. Use the parameterless AggregatedContent() constructor instead. | SXA-7735 |
| The Sitecore.XA.Foundation.SitecoreExtensions.Pipelines.HttpRequestBegin.CultureResolver processor is obsolete since SXA 10.5. The stock processor now returns without setting the thread culture; review custom culture-resolution dependencies. | SXA-7836, SXA-7783 |
| The headless Sitecore.XA.JSS.Foundation.Multisite.Pipelines.ParseSiteItem.SetDefaultDatabase processor is obsolete since SXA 10.5. Review custom site-definition pipelines that depend on this processor. | SXA-8613 |
| The Sitecore.XA.JSS.Foundation.SiteMetadata.Pipelines.Sitemap.GenerateMediaItems.ClearMediaItems processor is obsolete since SXA 10.5. Review custom sitemap-generation pipelines that depend on this processor. | SXA-8490 |
| The Sitecore.XA.JSS.Foundation.SiteMetadata.Pipelines.Sitemap.GenerateMediaItems.StoreMediaItems.Process(GenerateMediaItemsArgs args) method in JSS Site Metadata is obsolete since SXA 10.5. Review custom sitemap processors and overrides that depend on this method. | SXA-8490 |
