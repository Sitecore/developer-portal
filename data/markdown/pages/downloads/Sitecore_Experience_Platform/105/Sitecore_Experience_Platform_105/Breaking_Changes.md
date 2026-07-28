---
title: 'Breaking Changes'
---

Return to the [Sitecore Experience Platform 10.5](/downloads/Sitecore_Experience_Platform/105/Sitecore_Experience_Platform_105) release page.

This release includes new features and improvements made in Sitecore Experience Platform (SXP) 10.5. Sitecore recommends that you upgrade to this release if it aligns with the specific needs of your organization. This release contains significant improvements in functionality worth evaluating.

- [Solr 10 Upgrade](#solr-10-upgrade)
- [Telerik UI for ASP.NET AJAX Upgrade](#telerik-ui-for-aspnet-ajax-upgrade)
- [BinaryFormatter Replacement](#binaryformatter-replacement)
- [GraphQL Playground Removal](#graphql-playground-removal)
- [Package Installer & Designer Disabled by Default](#package-installer-designer-disabled-by-default)
- [Identity Server 9](#identity-server-9)
- [Identity Server Contrib Membership 9 Library](#identity-server-contrib-membership-9-library)
- [Context Site and Security State for Computed Index Fields](#context-site-and-security-state-for-computed-index-fields)
- [Item Service Search API](#item-service-search-api)
- [Toggle Checking of Duplicate Name on Publish](#toggle-checking-of-duplicate-name-on-publish)
- [Sitecore Framework on .NET 10](#sitecore-framework-on-net-10)
- [Device Detection Default Performance Profile](#device-detection-default-performance-profile)
- [MVC Rendering Profiling and Statistics](#mvc-rendering-profiling-and-statistics)
- [Security Database Schema changes related to Identity Server 8](#security-database-schema-changes-related-to-identity-server-8)
- [Removal of SQL Server 2019 Support](#removal-of-sql-server-2019-support)
- [Legacy JavaScript and CSS Library Files Removed from the Sitecore CM Shell](#legacy-javascript-and-css-library-files-removed-from-the-sitecore-cm-shell)

# Solr 10 Upgrade

## Third-Party Component Changes

Sitecore XP 10.5 supports Solr 10 only. Support for Solr 8 and Solr 9 has been removed.

Because of that, the version-specific schema populate helpers SolrV8SchemaPopulate and SolrV9SchemaPopulate are no longer present. A single default schema populate helper, SchemaPopulateHelper, is used instead, and it is specific to Solr 10. The schema populate pipeline still resolves the Solr version at run time, but only to select a named schema, of which default is currently the only one. Solutions running Sitecore XP 10.5 must be pointed at a Solr 10 instance. Pointing them at Solr 8 or Solr 9 is neither supported nor tested.

### Solr version support

| Context | Description | Ref |
| --- | --- | --- |
| Deployment | Sitecore XP 10.5 supports Solr 10 only. Solr 8 and Solr 9 are no longer supported. Unlike the Solr 9.8 upgrade in Sitecore XP 10.4.1, no backward compatibility path is provided: the version-specific populate helpers `SolrV8SchemaPopulate` and `SolrV9SchemaPopulate` have been removed, and the schema that Sitecore populates uses field types that older Solr versions do not accept. Upgrade your Solr instance to Solr 10 before upgrading Sitecore. Affects: all solutions using the Solr search provider. | PDXP-26340 |
| Deployment | The managed schema file shipped in the Sitecore webroot `bin` folder has been renamed from `managed-schema` to `managed-schema.xml`, matching the Solr 9+ convention. If your deployment scripts copy this file into a Solr core's `conf` folder, update both the source and destination filenames. Affects: solutions with custom Solr core provisioning or deployment scripts that reference `managed-schema` by name. | PDXP-26340 |
| Deployment | The Solr schema is now retrieved through the configured response parser rather than being parsed directly as XML (`DefaultSolrBasicServer.GetSchema`). Affects: solutions that replace `ISolrGeneralResponseParser<XDocument>` in the SolrNet container. | PDXP-26340 |

## Schema Changes

Multiple field types in Sitecore's Solr schema were switched from the `solr.TextField` class to the `solr.SortableTextField` class because field types based on `solr.TextField` no longer support sorting in Solr 9.8 and later.

This change was introduced in **Sitecore XP 10.4.1** for Solr 9.8 and is carried forward unchanged in **Sitecore XP 10.5**.

`solr.SortableTextField` enables `docValues` by default, and `docValues` on this field type store the **original, unanalyzed** field value (truncated at `maxCharsForDocValues`, which defaults to 1024 characters) rather than the analyzed token stream.

As a result, **faceting** and **sorting** may observe different values than they

### Field type changes

| Context | Description | Ref |
| --- | --- | --- |
| Solr Schema | A new field type `lowercase_sort` (class `solr.SortableTextField`, cloned from `lowercase`) has been added, and the following built-in fields were repointed at it: `__database`, `__datasource`, `__creator`, `__editor`, `__template`, `__templatename`, `__icon`, `__links`, `__tags`, `__indexname`, `__fullpath`. The dynamic fields `*_ls` and `*_lsm` were also repointed from `lowercase` to `lowercase_sort`. Affects: solutions that facet or sort on these fields, or that query them with values that assume the previous analyzed (lowercased) form. | PDXP-26340 |
| Solr Schema | A new field type `text_gen_sort` (class `solr.SortableTextField`) is used for `__name`, `__displayname`, and the dynamic fields `*_t` and `*_txm`, which previously used `text_general` (class `solr.TextField`). Faceting on these fields previously returned individual analyzed tokens. It now returns the whole raw field value as a single facet entry, truncated at 1024 characters. Affects: solutions that facet on `*_t` or `*_txm` dynamic fields, or on `__name` / `__displayname`. | PDXP-26340 |
| Solr Schema | `SchemaPopulateHelper.GetReplaceFieldTypes` now rewrites the class of every language text field type in the schema (any field type named `text_*`, excluding `text_ws` and `text_general*`, whose class is `solr.TextField` or `solr.SortableTextField`) to `solr.SortableTextField`. The previous implementation replaced only the `text_general` field type definition. This runs on every Schema Populate. Affects: solutions with custom `text_*` field types in the managed schema that must remain `solr.TextField`. Rename such field types so they do not match the `text_*` prefix, or supply a custom populate helper. | PDXP-26340 |
| Solr Schema / Custom fields | If your solution defines custom fields based on `solr.TextField` and requires sorting or faceting on them, switch those fields to a field type based on `solr.SortableTextField`, for example from `<field name="_name" type="text_general" .../>` to `<field name="_name" type="text_gen_sort" .../>`, or from `<field name="_database" type="lowercase" .../>` to `<field name="_database" type="lowercase_sort" .../>`. If sorting and faceting are not needed, you can continue using `solr.TextField`. Affects: solutions that define custom Solr fields. | PDXP-26340 |

#### Known issue: pivot faceting on SortableTextField

| Context | Description | Ref |
| --- | --- | --- |
| Faceting | Pivot faceting on fields that use the `solr.SortableTextField` field type may return incorrect, partial, or missing facet results. This is an Apache Solr issue ([SOLR-16139](https://issues.apache.org/jira/browse/SOLR-16139)), not a Sitecore defect, and it affects pivot facets only. Flat (single-level) facets are unaffected. Sitecore emits `facet.pivot` when a facet is defined over more than one field, so multi-field facets defined before the upgrade can stop returning results after it, while newly created single-field facets continue to work. To work around this, set the new `ContentSearch.Solr.UseEnumFacetMethod` setting to `true`, which appends `facet.method=enum` to facet queries and forces term-based faceting instead of the `docValues` path. Affects: solutions that use multi-field (pivot) facets, including item bucket facets, over fields whose type is now `solr.SortableTextField`. | PDXP-26340 |

## Configuration Changes

| Context | Description | Ref |
| --- | --- | --- |
| Configuration | A new processor, `Sitecore.ContentSearch.SolrProvider.Pipelines.PopulateSolrSchema.ResolveSchemaName`, has been added to the `contentSearch.PopulateSolrSchema` pipeline, between `ResolveCoreNames` and `PopulateFields`. It resolves the Solr version from the Solr admin `SystemInfo` endpoint and translates it to a schema name, which it writes to the new `PopulateManagedSchemaArgs.SchemaName` property. If the Solr version cannot be resolved, the processor throws `InvalidOperationException` and Schema Populate fails. The processor accepts an optional `schemaName` constructor parameter that bypasses version resolution. Affects: solutions that patch the `contentSearch.PopulateSolrSchema` pipeline, or that run Schema Populate against a Solr instance whose admin endpoint is not reachable. | PDXP-26340 |
| Configuration | A new setting, `ContentSearch.Solr.

## API Changes

The following public APIs have been changed, deprecated, or removed as part of the Solr 10 upgrade. Each entry is listed separately.

### Sitecore.ContentSearch.SolrProvider.Pipelines.PopulateSolrSchema.SchemaPopulateHelper

| Context | Description | Ref |
| --- | --- | --- |
| API | `SchemaPopulateHelper` no longer implements `ISchemaPopulateHelper` directly. It now derives from the new abstract class `Sitecore.ContentSearch.SolrProvider.Pipelines.PopulateSolrSchema.BaseSolrSchemaPopulateHelper`, which implements the interface. The schema-building methods that were previously `private` (`GetAddFields`, `GetAddFieldTypes`, `GetRemoveFields`) are now `protected abstract` or `protected virtual` on the base class, and the private `GetReplaceFields()` has been replaced by `protected abstract IEnumerable<XElement> GetReplaceFieldTypes()`. `GetAllFields()` and `GetAllFieldTypes()` remain `public virtual` with unchanged signatures. Custom populate helpers must derive from `SchemaPopulateHelper` (or from `BaseSolrSchemaPopulateHelper` and implement the three abstract members). In Sitecore XP 10.4.1 custom helpers were required to derive from `SolrV9SchemaPopulate`, which no longer exists. Affects: solutions that subclass `SchemaPopulateHelper` or implement `ISchemaPopulateHelper`. Search your codebase for `SchemaPopulateHelper`, `SolrV8SchemaPopulate`, and `SolrV9SchemaPopulate`. | PDXP-26340 |
| API | `CreateDynamicFieldWithFallbackFieldType(string fieldName, string fieldType, string fallbackFieldType = "text_general")` has moved to `BaseSolrSchemaPopulateHelper` as an `internal` method, and the `fallbackFieldType` parameter no longer has a default value. `SchemaPopulateHelper` passes `text_gen_sort` as the fallback. Affects: solutions that subclass `SchemaPopulateHelper` and call this method. It is no longer accessible from customer code. | PDXP-26340 |
| API | The private `solrSchema` field has been replaced by a `public SolrSchema SolrSchema` property on `BaseSolrSchemaPopulateHelper`, and field type lookup is now served by an `internal SolrFieldType FindSolrFieldTypeByName(string)` method backed by a lazily built dictionary. `protected virtual bool TypeExists(string)` is unchanged and remains overridable. Affects: solutions that subclass `SchemaPopulateHelper`. | PDXP-26340 |

### Sitecore.ContentSearch.SolrProvider.Factories.DefaultPopulateHelperFactory

| Context | Description | Ref |
| --- | --- | --- |
| API | `DefaultPopulateHelperFactory` has been deprecated. Schema populate helper resolution now goes through the new `Sitecore.ContentSearch.SolrProvider.Schema.INamedSchemaPopulateHelperFactory`, which selects a helper by schema name rather than by Solr version. `PopulateFields` detects when the factory configured in `Sitecore.ContentSearch.Solr.DefaultIndexConfiguration.config` is exactly `DefaultPopulateHelperFactory` and silently substitutes the named factory instead. A custom `IPopulateHelperFactory` continues to be honoured. The `<param type="...DefaultPopulateHelperFactory" />` element in the shipped config is retained for compatibility and can be removed. To supply a custom helper, implement `IPopulateHelperFactory` (still supported) or `INamedSchemaPopulateHelperFactory` (preferred). Affects: solutions that reference `DefaultPopulateHelperFactory` directly or subclass it. A reference produces obsolescence warning `CS0618`. | PDXP-26340 |

### Sitecore.ContentSearch.SolrProvider.Pipelines.PopulateSolrSchema.PopulateFields

| Context | Description | Ref |
| --- | --- | --- |
| API | `PopulateFields` is now a `partial` class and has gained a public parameterless constructor. The existing `PopulateFields(IPopulateHelperFactory)` constructor keeps its signature, but the argument is now optional. The `Assert.ArgumentNotNull` guard on it has been removed and `null` is accepted, in which case the default named factory is used. The processor now reads `PopulateManagedSchemaArgs.SchemaName`, which is set by the new `ResolveSchemaName` processor. If `ResolveSchemaName` is not in the pipeline, `SchemaName` is `null` and the default schema is used. Affects: solutions that subclass `PopulateFields` or construct it directly. | PDXP-26340 |

### Sitecore.ContentSearch.Linq.Solr.Parsing.BaseTokenizableValueSolrTextQueryTranslator

| Context | Description | Ref |
| --- | --- | --- |
| API | The public property `ICollection<string> UntokenizedSolrTypes` has been removed. The set of non-tokenizable Solr field types is now owned by the new `Sitecore.ContentSearch.Linq.Solr.Parsing.ITokenizableSolrFieldTypeResolver` service, resolved from the Sitecore DI container, and `protected virtual bool ShouldTokenize(TextQueryTranslatorContext)` now delegates to `ITokenizableSolrFieldTypeResolver.IsTokenizable(string)`. The default implementation treats `string`, `lowercase`, and the new `lowercase_sort` as non-tokenizable. The `protected BaseTokenizableValueSolrTextQueryTranslator(BaseSolrTokenizer)` constructor keeps its signature but now requires `ITokenizableSolrFieldTypeResolver` to be registered in the container. Constructing a translator outside an initialized Sitecore DI context will now throw. To change which field types are tokenized, register your own `ITokenizableSolrFieldTypeResolver` instead of mutating `UntokenizedSolrTypes`. Affects: solutions that subclass any Solr text query translator, that read or mutate `UntokenizedSolrTypes

# Telerik UI for ASP.NET AJAX Upgrade

## Third-Party Component Changes

Telerik UI for ASP.NET AJAX Upgrade has been upgraded from `2020.3.1021.45` to `2025.2.528`. As part of this upgrade the NuGet packages that Sitecore consumes have been renamed by Telerik, and Telerik has introduced a license key requirement.

The Telerik assembly name (`Telerik.Web.UI.dll`) and its public namespaces are unchanged. Solutions that reference Telerik types by name continue to compile against the new version. Solutions that reference the Telerik NuGet packages by their old package IDs, or that compile their own code against Telerik, must take action.

#### Telerik NuGet package rename

| Context | Description | Ref |
|----------|-------------|-----|
| Build / NuGet | The Telerik NuGet packages consumed by Sitecore have been renamed: `Telerik.Web.UI` is replaced by `Telerik.UI.for.AspNet.Ajax.Net462`, and `Telerik.Web.UI.Client` is replaced by `Telerik.UI.Client`, both at version `2025.2.528`. The produced assembly is still named `Telerik.Web.UI.dll`, so no binding redirects or `using` statements need to change. If your solution declares its own `PackageReference` to the old package IDs, update them to avoid resolving two different versions of `Telerik.Web.UI.dll`. Affects: solutions that reference the Telerik NuGet packages directly. | PDXP-11112 |

### Telerik NuGet package rename

| Context | Description | Ref |
| --- | --- | --- |
| Build / NuGet | The Telerik NuGet packages consumed by Sitecore have been renamed: `Telerik.Web.UI` is replaced by `Telerik.UI.for.AspNet.Ajax.Net462`, and `Telerik.Web.UI.Client` is replaced by `Telerik.UI.Client`, both at version `2025.2.528`. The produced assembly is still named `Telerik.Web.UI.dll`, so no binding redirects or `using` statements need to change. If your solution declares its own `PackageReference` to the old package IDs, update them to avoid resolving two different versions of `Telerik.Web.UI.dll`. Affects: solutions that reference the Telerik NuGet packages directly. | PDXP-11112 |

### Telerik licensing

Since the 2025 Q1 release, Telerik UI for ASP.NET AJAX Upgrade [requires activation through a license key]("https://www.telerik.com/products/aspnet-ajax/documentation/licensing/license-key#web-applications-using-nuget"). Sitecore's own license key is resolved and embedded into the Sitecore assemblies when Sitecore is built, so the pre-built assemblies shipped with Sitecore XP 10.5 are fully licensed. No license key or license file is required on a standard Sitecore installation.

| Context | Description | Ref |
| --- | --- | --- |
| Deployment | A new assembly, `Telerik.Licensing.Runtime.dll`, is now deployed to the Sitecore webroot `bin` folder. It is contributed by the `Telerik.Licensing` package, which Sitecore references as a private build-time dependency, and it performs Telerik's run-time license validation. No configuration is required. Affects: solutions that maintain an explicit allow-list of assemblies in `bin`, that perform assembly scanning at startup, or that compare `bin` contents between Sitecore versions as part of a deployment check. | PDXP-11112 |
| Build | If your solution compiles its own code against the Telerik NuGet packages (for example a custom Sitecore module that references `Telerik.Web.UI` to build custom controls), that build now requires your own Telerik license key, because the key is embedded per-assembly at compile time and Sitecore's key does not cover assemblies you build. Download the key from the License Keys page of your Telerik account and place `telerik-license.txt` in `%AppData%\\Telerik\\` or in your project or solution root. Without it, your build emits licensing warnings and the Telerik controls your assemblies render display watermarks and banners. Affects: solutions that compile against the Telerik NuGet packages. Solutions that only consume Sitecore's pre-built assemblies are not affected. | PDXP-11112 |

## API Changes

The following public APIs have changed as part of the Telerik upgrade. Each entry is listed separately.

### Sitecore.Kernel: Telerik dependency removed

| Context | Description | Ref |
| --- | --- | --- |
| API / Dependencies | `Sitecore.Kernel` no longer references `Telerik.Web.UI`. The Telerik-backed implementations have been moved out of the Kernel and are now resolved through dependency injection: HTML-to-XHTML conversion in `Sitecore.Layouts.XHtml` is delegated to `Sitecore.Layouts.BaseHtmlToXHtmlConverter`, and spell checking in `Sitecore.Data.Validators.FieldValidators.SpellcheckValidator` is delegated to `Sitecore.Data.Validators.BaseSpellChecker`. The concrete Telerik implementations (`TelerikHtmlToXHtmlConverter`, `TelerikSpellChecker`) now live in `Sitecore.CMS.Core` and are registered via `Sitecore.Client.Services.config`. If your solution referenced `Sitecore.Kernel` and relied on Telerik types being available transitively, add an explicit reference to the Telerik package. Affects: solutions that depend on `Sitecore.Kernel` bringing in `Telerik.Web.UI` transitively. Search your codebase for `Telerik.Web.UI` usages in projects that only reference `Sitecore.Kernel`. | PDXP-11112 |

### Sitecore.Data.Validators.FieldValidators.SpellcheckValidator

| Context | Description | Ref |
| --- | --- | --- |
| API | `SpellcheckValidator` no longer constructs a Telerik `SpellChecker` directly. It now resolves `Sitecore.Data.Validators.BaseSpellChecker` from the service provider and delegates validation to it. The parameterless constructor and the `(SerializationInfo, StreamingContext)` constructor both require `BaseSpellChecker` to be registered in the container. Constructing a `SpellcheckValidator` outside of a Sitecore context where DI is initialized will now throw. To replace the spell-checking implementation, register your own `BaseSpellChecker` instead of subclassing the validator. Affects: solutions that subclass `SpellcheckValidator`, or that instantiate it directly in unit tests or outside the Sitecore DI container. Search your codebase for `SpellcheckValidator`. | PDXP-11112 |

### Sitecore.Layouts.XHtml

| Context | Description | Ref |
| --- | --- | --- |
| API | `Sitecore.Layouts.XHtml` no longer constructs a Telerik `RadEditor` directly to perform HTML-to-XHTML conversion. Conversion is now delegated to `Sitecore.Layouts.BaseHtmlToXHtmlConverter`, resolved from the service provider. The public signature of `XHtml` is unchanged, but the type now requires `BaseHtmlToXHtmlConverter` to be registered in the container. To customize conversion behaviour, register your own `BaseHtmlToXHtmlConverter` implementation. Affects: solutions that call `XHtml` outside an initialized Sitecore DI container, or that relied on the `Settings.HtmlEditor.*` settings being applied by the internal `RadEditor` instance. Search your codebase for `Sitecore.Layouts.XHtml`. | PDXP-11112 |

# BinaryFormatter Replacement

## Data Format Changes

The serialization mechanism used internally by Sitecore has been replaced in the data stores listed below. `BinaryFormatter`, which was previously used, has been removed due to [known deserialization vulnerabilities identified by Microsoft](https://learn.microsoft.com/en-us/dotnet/standard/serialization/binaryformatter-security-guide). Data is now serialized using a JSON-based format.

Backward compatibility is provided: data generated by earlier Sitecore versions can still be read by Sitecore XP 10.5. However, data generated by Sitecore XP 10.5 cannot be read by earlier versions.

Accounts already in the membership database are not affected by these format changes; no action is required on standard upgrade.

### Sitecore packages containing user accounts

| Context | Description | Ref |
| --- | --- | --- |
| Security / Packages | User account data inside Sitecore packages (under `package.zip\\security\\users\\`) is now serialized in JSON format instead of the previous binary format. Existing packages created on earlier Sitecore versions can still be installed on Sitecore XP 10.5 without modification. However, if you use Package Designer on Sitecore XP 10.5 to regenerate a package, the new package can no longer be installed on earlier Sitecore versions. No action is required on upgrade unless you need to maintain backward compatibility with earlier Sitecore versions. Affects: solutions that create Sitecore packages containing user accounts and share them across Sitecore instances of different versions. | PDXP-11093 |

### Serialized user files

| Context | Description | Ref |
| --- | --- | --- |
| Security / User Serialization | Serialized user files in `\\App_Data\\serialization\\security\\sitecore\\Users` are now written in a JSON-based format instead of the previous binary format. Existing serialized user files from earlier Sitecore versions can still be read, but importing them into Sitecore XP 10.5 requires the following steps: (1) Copy the files to `\\App_Data\\serialization\\security\\sitecore\\Users` on the Sitecore XP 10.5 instance. (2) For each file to import, create a new user in User Manager whose username matches the filename. (3) Select the users in User Manager and click "Revert User" (or use "Revert all users"). (4) Verify that user fields are populated with the expected data. Once serialized user files are overwritten by Sitecore XP 10.5, they can no longer be read by earlier Sitecore versions. Affects: solutions that use User Manager's serialize/revert functionality to transfer user data between Sitecore instances. | PDXP-11093 |

### ClientData table

| Context | Description | Ref |
| --- | --- | --- |
| Client Data | Data stored in the `[ClientData]` database table is now serialized in JSON format instead of the previous binary format. Existing binary-format data is automatically read and converted on access; no manual migration is required. By default, data in this table is short-lived and cleaned up by `CompactClientDataAgent`. If your solution extends the lifetime of this data or reads the `[ClientData]` table directly (bypassing Sitecore APIs), verify that your code can handle the new JSON format. Affects: solutions that query the `[ClientData]` table directly via SQL, or that customize `ClientDataStore` to extend data lifetime beyond the default. | PDXP-11093 |

## API Changes

The following public APIs have been deprecated or their behavior has changed as part of the `BinaryFormatter` replacement. Each entry is listed separately.

### Sitecore.Convert

| Context | Description | Ref |
| --- | --- | --- |
| API | The `Sitecore.Convert` class has been deprecated. All methods (`Base64ToObject`, `ObjectToBase64`, `Base64ToHashtable`, `HashtableToBase64`) now return `null` because they relied on `BinaryFormatter`, which has been removed for security reasons. No public replacement API has been introduced. If your solution calls these methods, remove or replace the usage with your own serialization approach. Affects: solutions that call any `Sitecore.Convert` method. Search your codebase for `Sitecore.Convert.` to determine whether you are affected. | PDXP-11093 |

### Sitecore.IO.FileUtil — serialization methods

| Context | Description | Ref |
| --- | --- | --- |
| API | The following methods on `Sitecore.IO.FileUtil` have been deprecated and now return `null` or exit silently: `LoadObject(string)`, `SaveObject(string, object)`, `LoadHashtable(string)`, `SaveHashtable(string, Hashtable)`. These methods relied on `BinaryFormatter`, which has been removed for security reasons. No public replacement API has been introduced. If your solution calls these methods, remove or replace the usage with your own serialization approach. Affects: solutions that call any of these `FileUtil` methods. Search your codebase for `Sitecore.IO.FileUtil.LoadObject`, `Sitecore.IO.FileUtil.SaveObject`, `Sitecore.IO.FileUtil.LoadHashtable`, or `Sitecore.IO.FileUtil.SaveHashtable` to determine whether you are affected. | PDXP-11093 |

### Sitecore.Data.Archiving.ArchivedItemVersionList

| Context | Description | Ref |
| --- | --- | --- |
| API | The `Serialize()` and `Deserialize(string)` methods on `Sitecore.Data.Archiving.ArchivedItemVersionList` have been deprecated. They now return `null` because they relied on `BinaryFormatter`, which has been removed for security reasons. No replacement has been introduced. If your solution calls these methods, remove the calls. No action is required if your solution does not use them. Affects: solutions that call `ArchivedItemVersionList.Serialize()` or `ArchivedItemVersionList.Deserialize()` directly. Search your codebase for `ArchivedItemVersionList.Serialize` or `ArchivedItemVersionList.Deserialize` to determine whether you are affected. | PDXP-11093 |

### Sitecore.Configuration.ClientDataStore, FileDataStore, SqlServerClientDataStore

| Context | Description | Ref |
| --- | --- | --- |
| API | `Sitecore.Configuration.ClientDataStore`, `Sitecore.Configuration.FileDataStore`, and `Sitecore.Data.SqlServer.SqlServerClientDataStore` no longer use `Hashtable` internally. The following `protected virtual` methods have been deprecated and are no longer called by the base class: `GetSize(Hashtable)`, `LoadData()` (parameterless), `SaveData(Hashtable)`, `AddDataToCache(string, Hashtable, long)`, `GetDataFromCache(string)` returning `Hashtable`, and the constructor `ClientDataStore(TimeSpan, IEventQueue, BaseEventManager)`. They have been replaced by `IDictionary<string, string>`-based equivalents: `GetDataSize(IDictionary<string, string>)`, `SaveClientData(IDictionary<string, string>)`, `AddClientDataToCache(string, IDictionary<string, string>, long)`, `GetClientDataFromCache(string)`, and constructor `ClientDataStore(TimeSpan, bool, IEventQueue, BaseEventManager)`. If your solution subclasses any of these classes and overrides any of the deprecated methods, those overrides are silently no longer invoked. Migrate overrides to the new method signatures. Affects: solutions that subclass `ClientDataStore`, `FileDataStore`, or `SqlServerClientDataStore` and override protected methods. Search your codebase for classes that inherit from these types. | PDXP-11093 |

### Sitecore.Data.Serialization.Yaml.YamlUserSerializer

| Context | Description | Ref |
| --- | --- | --- |
| API | The following `protected` methods on `Sitecore.Data.Serialization.Yaml.YamlUserSerializer` have been deprecated and are no longer invoked internally: `ReadPropertyValueObject(string, string, string)`, `SerializePrimitiveProfileValue(SyncProfileProperty)`, and `SerializeSerializableProfileValue(SyncProfileProperty)`. The serialization logic has been consolidated into `Sitecore.Security.Serialization.ObjectModel.SyncProfileProperty`. If your solution subclasses `YamlUserSerializer` and overrides any of these methods, those overrides are silently no longer invoked. Remove or refactor overrides that depended on the deprecated methods. No direct replacement methods exist; the new serialization path is not designed for override. Affects: solutions that subclass `YamlUserSerializer` and override any of the listed methods. Search your codebase for classes that inherit from `YamlUserSerializer`. | PDXP-11093 |

### Sitecore.Globalization.DefaultTranslate and DefaultTranslateWithDictionary

| Context | Description | Ref |
| --- | --- | --- |
| API | `Sitecore.Globalization.DefaultTranslate` has been deprecated and its replacement, `Sitecore.Globalization.DefaultTranslateWithDictionary`, is now `internal` because these types were not intended for direct use in customer code. Customer code can no longer reference `DefaultTranslateWithDictionary` directly. Use `Sitecore.Abstractions.BaseTranslate` obtained via dependency injection instead. Affects: solutions that reference `DefaultTranslate` or `DefaultTranslateWithDictionary` directly. A reference to `DefaultTranslateWithDictionary` will produce a compilation error (`CS0122`). Search your codebase for `DefaultTranslate` and `DefaultTranslateWithDictionary` to determine whether you are affected. | PDXP-11093 |

### Sitecore.Install.Utils.StatusFile and StatusFile.StatusInfo

| Context | Description | Ref |
| --- | --- | --- |
| API | Several methods on `Sitecore.Install.Utils.StatusFile` and the nested `StatusFile.StatusInfo` class have been changed as part of the `BinaryFormatter` replacement. The `WriteWorking(string, params object[])`, `WriteFinished(string, params object[])`, and `ReportError(Exception, params object[])` overloads are deprecated; use the single-parameter overloads instead (the `params object[]` arguments are silently discarded). The `StatusInfo.Data` property is no longer persisted. The `StatusInfo(Status, Exception)` constructor is replaced by `StatusInfo(Status, ExceptionInfo)`. The `StatusInfo.Exception` property is replaced by `StatusInfo.ExceptionInfo`; when deserialized from the status file, the exception is represented as `StatusInfoException` rather than the original exception type. Affects: solutions that subclass `StatusFile`, construct `StatusInfo` instances directly, or read the `StatusInfo.Exception` or `StatusInfo.Data` properties. Search your codebase for `StatusFile` and `StatusInfo` to determine whether you are affected. | PDXP-11093 |

# GraphQL Playground Removal

The GraphQL Playground (Banana Cake Pop IDE) has been removed from Sitecore.GraphQL. The `HotChocolate.AspNetClassic.Playground` NuGet package, all associated pipeline processors, OWIN middleware, and Sitecore configuration settings have been deleted with no replacement. Users who need an IDE to explore the GraphQL API should use a third-party tool such as [GraphiQL](https://github.com/graphql/graphiql), [Insomnia](https://insomnia.rest/), or [Postman](https://www.postman.com/) pointed at the existing GraphQL endpoint.

## Package Changes

| Context | Description | Ref |
| --- | --- | --- |
| Packages / Dependencies | The `HotChocolate.AspNetClassic.Playground` (v10.5.5) NuGet package reference has been removed from `Packages.props` and `Sitecore.GraphQL.NetFxHost.csproj`. No replacement package is introduced. Affects: any project or custom code that references `HotChocolate.AspNetClassic.Playground` directly. Remove the reference. | PDXP-23055 |

## API Changes

| Context | Description | Ref |
| --- | --- | --- |
| API | The `bool ExposePlayground { get; }` property has been removed from the `Sitecore.GraphQL.Core.IGraphQlCoreSettings` interface and its implementation `GraphQlSettings`. Code that reads `IGraphQlCoreSettings.ExposePlayground` will no longer compile. Affects: solutions that implement or consume `IGraphQlCoreSettings` and reference the `ExposePlayground` property. Remove any code that reads or depends on this property. | PDXP-23055 |
| API | The public constants `Sitecore.GraphQL.NetFxHost.Constants.PlaygroundEndpoint` (`/sitecore/api/authoring/graphql/ide`) and `Constants.ObsoletedPlaygroundEndpoint` (`/sitecore/api/authoring/graphql/playground`) have been deleted. Code that references either constant will no longer compile. Affects: solutions that reference `Constants.PlaygroundEndpoint` or `Constants.ObsoletedPlaygroundEndpoint`. Remove or replace those references. | PDXP-23055 |
| API / Behavior | `Sitecore.GraphQL.NetFxHost.Constants.MaxQueryExecutionDepth` has been changed from `13` to `15`. This increases the maximum allowed GraphQL query nesting depth, allowing deeper queries that were previously rejected to now succeed. Affects: solutions that rely on the previous limit of 13 to block complex queries, or that reference this constant directly. Verify that your authorization and validation logic is not dependent on the old depth limit. | PDXP-23055 |

## Pipeline Changes

| Context | Description | Ref |
| --- | --- | --- |
| Pipeline / `owin.initialize` | The `Sitecore.GraphQL.NetFxHost.Pipelines.Initialize.RegisterPlayground` processor has been deleted and its registration removed from `Sitecore.GraphQL.config`. The processor was responsible for conditionally mounting the Playground OWIN middleware when `GraphQL.ExposePlayground` was `true`. No replacement processor is registered. Affects: solutions that patch the `owin.initialize` pipeline relative to `RegisterPlayground` (e.g., `patch:before` or `patch:after` referencing this type). Update those patches to reference a different anchor processor. | PDXP-23055 |

## Middleware Changes

| Context | Description | Ref |
| --- | --- | --- |
| Middleware / OWIN | The `Sitecore.GraphQL.NetFxHost.Core.Initialization.Playground.ApplicationBuilderExtensions` class (and its `UseCustomPlayground(IAppBuilder, PlaygroundOptions)` extension method) has been deleted. Any code that calls `UseCustomPlayground` will no longer compile. No replacement is provided. Affects: custom OWIN startup code that calls `UseCustomPlayground`. Remove those calls. | PDXP-23055 |
| Middleware / OWIN | The `Sitecore.GraphQL.NetFxHost.Core.Initialization.Playground.PlaygroundUrlRedirectMiddleware` class (and its `ApplyPlaygroundRedirect(IAppBuilder)` extension method) has been deleted. This middleware previously redirected requests from the obsoleted `/sitecore/api/authoring/graphql/playground` URL to `/sitecore/api/authoring/graphql/ide`. Both URLs are no longer served. Affects: solutions that call `ApplyPlaygroundRedirect` or that relied on the automatic redirect between the two playground URLs. Remove those calls. | PDXP-23055 |
| Middleware / OWIN | The `Sitecore.GraphQL.NetFxHost.Core.Initialization.Playground.SettingsMiddleware` class has been deleted. It served a `settings.js` JavaScript file at `<playground-path>/settings.js` containing the GraphQL endpoint URLs used by the Banana Cake Pop IDE. The `/settings.js` endpoint is no longer available. Affects: solutions that read the `settings.js` endpoint directly (e.g., for configuration discovery). Remove any dependency on that URL. | PDXP-23055 |

## Configuration Changes

| Context | Description | Ref |
| --- | --- | --- |
| Configuration | The `GraphQL.ExposePlayground` Sitecore setting (default `false`) has been removed from `Sitecore.GraphQL.config`. The playground can no longer be enabled via configuration. Affects: solutions that set `<setting name="GraphQL.ExposePlayground" value="true" />` in a patch config (including the e2e test `Demo.config`). The setting is silently ignored on versions that no longer ship the playground; remove it to keep configuration clean. | PDXP-23055 |

# Package Installer & Designer Disabled by Default

The Sitecore Package Installer and Package Designer are now disabled by default in Sitecore XP. A new configuration setting controls this behaviour. Environments that require package installation must explicitly opt in by enabling the setting via the supplied patch config file.

## Configuration Changes

### Sitecore.Packages.Disabled setting

| Context | Description | Ref |
| --- | --- | --- |
| Configuration / Packages | A new setting `Sitecore.Packages.Disabled` has been introduced in `Sitecore.config`. In Sitecore XP the default value is `true`, meaning the Package Installer and Package Designer are disabled out of the box. On earlier Sitecore versions the default value is `false` (no change in behaviour on upgrade). To re-enable packages on Sitecore XP, deploy the supplied patch file `App_Config/Include/zSitecore.InstallPackage.Enable.config` which overrides the setting back to `false`. Affects: all Sitecore XP deployments that rely on the Package Installer or Package Designer at runtime. | PDXP-19553 |

## API Changes

The following public and protected APIs have changed or had new guard behaviour introduced as part of this feature. Each entry is listed separately.

### Sitecore.Shell.Applications.Install.Designer — constructor

| Context | Description | Ref |
| --- | --- | --- |
| API / DI | The `Designer` class constructor has been refactored. The public default constructor `Designer()` now delegates to a new `internal Designer(CoreSettings settings)` overload, which receives `CoreSettings` via `ServiceLocator`. If your solution subclasses `Designer` and calls `base()`, the base constructor now requires `CoreSettings` to be registered in the DI container. An `ArgumentNullException` is thrown if `CoreSettings` cannot be resolved. Affects: solutions that subclass `Designer`. Verify that `CoreSettings` is registered in the DI container before upgrading. | PDXP-19553 |

### Sitecore.Shell.Applications.Install.Designer — HandleMessage

| Context | Description | Ref |
| --- | --- | --- |
| API | `Designer.HandleMessage(Message)` now throws `InvalidOperationException` when `Sitecore.Packages.Disabled` is `true`. The exception message is: `"Handling the event '{message.Name}' is not allowed."` No message events are processed when packages are disabled. Affects: solutions that programmatically post messages to the Designer application, or that call `HandleMessage` directly. Guard calls with a check of `CoreSettings.DisableSitecorePackages` or catch `InvalidOperationException` where appropriate. | PDXP-19553 |

### Sitecore.Shell.Applications.Install.Dialogs.InstallPackage.InstallPackageForm — constructor

| Context | Description | Ref |
| --- | --- | --- |
| API / DI | The `InstallPackageForm` class constructor has been refactored in the same manner as `Designer`. The public default constructor `InstallPackageForm()` now delegates to a new `internal InstallPackageForm(CoreSettings settings)` overload via `ServiceLocator`. Affects: solutions that subclass `InstallPackageForm`. Verify that `CoreSettings` is registered in the DI container before upgrading. | PDXP-19553 |

### Sitecore.Shell.Applications.Install.Dialogs.InstallPackage.InstallPackageForm — HandleMessage

| Context | Description | Ref |
| --- | --- | --- |
| API | `InstallPackageForm.HandleMessage(Message)` is now overridden and throws `InvalidOperationException` when `Sitecore.Packages.Disabled` is `true`, unless the message is a Cancel button click (identified by `__EVENTTARGET == "CancelButton"`). The Cancel button remains functional so that users can dismiss the dialog. All other events are blocked. Affects: solutions that post messages to the Install Package dialog or that call `HandleMessage` directly. | PDXP-19553 |

### Sitecore.Shell.Applications.Install.Dialogs.InstallPackage.InstallPackageForm.Result — new enum value

| Context | Description | Ref |
| --- | --- | --- |
| API | A new value `Disabled` has been added to the `Result` enum (nested type inside `InstallPackageForm`). This value is used when the wizard reaches its last page because packages are disabled. If your solution contains a `switch` statement that exhaustively handles all `Result` values without a `default` case, the code will produce a compiler warning (CS8524) or behave incorrectly at runtime. Add a `case Result.Disabled:` branch or a `default:` branch to any exhaustive switch. Affects: solutions that switch on `InstallPackageForm.Result` values. | PDXP-19553 |

# Context Site and Security State for Computed Index Fields

## Behavioral Changes

This change is required because custom computed index fields that read `Sitecore.Context.Site` and `SecurityDisabler.CurrentValue` during a parallel index rebuild previously saw a null site context and unconditionally disabled security in each worker thread, producing incorrect indexed values. The parallel indexing execution model has been updated to propagate the calling thread's security state and site context into each parallel worker thread. Previously `ParallelDisabledSecurityProxy` applied a `SecurityDisabler` unconditionally to each thread without carrying over the calling context. The replacement `ParallelContextPreservingForEachExecutor`, captures the caller's `SecurityState` and `Context.Site` before dispatching parallel work and restores them in each thread for the duration of the iteration.

### Parallel computed index field execution

| Context | Description | Ref |
| --- | --- | --- |
| Indexing / Computed Fields | Computed index fields that execute in parallel (when parallel computed field indexing is enabled) now run with the calling thread's `SecurityState` and `Context.Site` preserved in each worker thread. Previously, each thread ran without a site context and with security unconditionally disabled via `SecurityDisabler`. After this change, if the indexing thread has an active site context, that context is propagated into the parallel workers. Custom `IComputedIndexField` implementations that make site-context-sensitive decisions (for example, reading site-specific configuration, resolving site-scoped URLs, or branching on `Context.Site`) may produce different results compared to earlier versions. No action is required if your computed fields do not inspect `Context.Site`. Affects: solutions that implement `IComputedIndexField` and rely on `Context.Site` being `null` or on a specific security state during parallel indexing. Search your codebase for classes that implement `IComputedIndexField` to determine whether you are affected. | PDXP-707 |

## API Changes

The following protected APIs have been deprecated as part of this change. Each is listed separately.

### Sitecore.ContentSearch.Utilities.ParallelDisabledSecurityProxy

| Context | Description | Ref |
| --- | --- | --- |
| API | The `Sitecore.ContentSearch.Utilities.ParallelDisabledSecurityProxy` class has been deprecated and marked `[Obsolete]`. It has been replaced by `ParallelContextPreservingForEachExecutor`, which preserves both security state and site context across parallel threads. The class will be removed in a future version. If your solution references `ParallelDisabledSecurityProxy` directly, replace its usage with the new `ExecuteInParallel` override point on `AbstractDocumentBuilder<T>`, `AbstractSearchIndex`, or your own parallelism mechanism. Affects: solutions that reference `ParallelDisabledSecurityProxy` directly. Search your codebase for `ParallelDisabledSecurityProxy` to determine whether you are affected. | PDXP-707 |

### Sitecore.ContentSearch.AbstractDocumentBuilder<T> — ParallelForeachProxy

| Context | Description | Ref |
| --- | --- | --- |
| API | The `protected virtual ParallelDisabledSecurityProxy ParallelForeachProxy` property on `Sitecore.ContentSearch.AbstractDocumentBuilder<T>` has been deprecated and marked `[Obsolete("The property is not used and will be removed in the future.")]`. It is no longer called internally; parallel execution is now routed through the new `protected virtual void ExecuteInParallel<TSource>(IEnumerable<TSource>, Action<TSource, ParallelLoopState>)` method. If your solution subclasses `AbstractDocumentBuilder<T>` and overrides `ParallelForeachProxy` to customize parallel behavior, that override is silently no longer invoked. Migrate the override to `ExecuteInParallel<TSource>` instead. The property will be removed in a future version. Affects: solutions that subclass `AbstractDocumentBuilder<T>` and override `ParallelForeachProxy`. Search your codebase for classes that inherit from `AbstractDocumentBuilder` and override this property. | PDXP-707 |

### Sitecore.ContentSearch.AbstractSearchIndex — ParallelForeachProxy

| Context | Description | Ref |
| --- | --- | --- |
| API | The `protected virtual ParallelDisabledSecurityProxy ParallelForeachProxy` property on `Sitecore.ContentSearch.AbstractSearchIndex` has been deprecated and marked `[Obsolete("The property is not used and will be removed in the future.")]`. It is no longer called internally; parallel execution is now routed through the new `protected virtual void ExecuteInParallel<TSource>(IEnumerable<TSource>, ParallelOptions, Action<TSource, ParallelLoopState>)` method. If your solution subclasses `AbstractSearchIndex` and overrides `ParallelForeachProxy`, that override is silently no longer invoked. Migrate the override to `ExecuteInParallel<TSource>` instead. The property will be removed in a future version. Affects: solutions that subclass `AbstractSearchIndex` and override `ParallelForeachProxy`. Search your codebase for classes that inherit from `AbstractSearchIndex` and override this property. | PDXP-707 |

### Sitecore.ContentSearch.Crawler<T> — ParallelForeachProxy

| Context | Description | Ref |
| --- | --- | --- |
| API | The `protected virtual ParallelDisabledSecurityProxy ParallelForeachProxy` property on `Sitecore.ContentSearch.Crawler<T>` has been deprecated and marked `[Obsolete("The property is not used and will be removed in the future.")]`. The property will be removed in a future version. If your solution subclasses `Crawler<T>` and overrides `ParallelForeachProxy`, remove the override as it is no longer invoked. Affects: solutions that subclass `Crawler<T>` and override `ParallelForeachProxy`. Search your codebase for classes that inherit from `Crawler` and override this property. | PDXP-707 |

# Item Service Search API

## Configuration Changes

| Context | Description | Ref |
| --- | --- | --- |
| Configuration / Item Service | The default fallback value for the `Sitecore.Services.AnonymousUser` setting in `ConfigurationReader` has changed from an empty string (`""`) to `"sitecore\\ServicesAPI"`, because the anonymous user must resolve to an actual Sitecore account for the new per-endpoint anonymous access controls to function correctly. If your deployment does not explicitly configure this setting in a patch file, the anonymous user will now resolve to `sitecore\\ServicesAPI` instead of an empty string. Verify that this account exists and has the intended permissions, or add an explicit `<setting name="Sitecore.Services.AnonymousUser" value="..." />` override to your patch configuration. Affects: all deployments that rely on the default (unconfigured) value of `Sitecore.Services.AnonymousUser`. | PDXP-11460 |

## Pipeline and Filter Changes

| Context | Description | Ref |
| --- | --- | --- |
| Configuration / Pipelines / Item Service | A new authorization filter, `Sitecore.Services.Infrastructure.Web.Http.Filters.SearchAnonymousUserFilter`, has been inserted into the `<filters>` list in `Sitecore.Services.Client.config` (between `AnonymousUserFilter` and `SecurityPolicyAuthorizationFilter`). This filter blocks anonymous users from accessing the Item Service Search and SearchViaItem endpoints unless both `Sitecore.Services.AllowItemServiceAnonymousUser` and the new `Sitecore.Services.AllowSearchServiceAnonymousUser` setting are set to `true`. The new `AllowSearchServiceAnonymousUser` setting defaults to `false`. Existing deployments that permit anonymous access to Item Service (i.e., `AllowItemServiceAnonymousUser = true`) will now receive `403 Forbidden` on search endpoints after upgrading, because the second guard is not enabled. To restore the previous behaviour, add `<setting name="Sitecore.Services.AllowSearchServiceAnonymousUser" value="true" />` to your patch configuration. Affects: deployments where `Sitecore.Services.AllowItemServiceAnonymousUser` is `true` and anonymous users are expected to call the Item Search or SearchViaItem endpoints. | PDXP-11460 |

## API / Behavioral Changes

| Context | Description | Ref |
| --- | --- | --- |
| API / Item Service / Search | The internal search context creation in `Sitecore.Services.Infrastructure.Sitecore.Data.ItemSearch.Search()` has changed. Previously the method always called `index.CreateSearchContext()` with no security options, meaning search results were not filtered by the requesting user's content permissions. After this change, `ISearchIndex.CreateSearchContext(SearchSecurityOptions.EnableSecurityCheck)` is used by default, because content security must be enforced consistently with the rest of the Item Service. This is controlled by the new `Sitecore.Services.EnableSearchSecurity` setting (default: `true`). Search results will now be silently filtered based on the context user's Sitecore security permissions; users without read access to an item will no longer see it in search results. If you need to disable security filtering to restore the previous behaviour, add `<setting name="Sitecore.Services.EnableSearchSecurity" value="false" />` to your patch configuration. Affects: all deployments using the Item Service Search or SearchViaItem endpoints where users have restricted content permissions, and any solution that calls `ItemSearch.Search()` directly. | PDXP-11460 |

# Toggle Checking of Duplicate Name on Publish

Publishing can now optionally validate duplicate item names before writing to the target database. A new setting controls this behaviour. In Sitecore XP 10.5 the default is enabled, which changes publish outcomes for items that would create a duplicate name on the same level in the target database.

On earlier Sitecore versions / hotfixes that introduce the same setting, the recommended default is false so existing publish behaviour is preserved. Sitecore XP 10.5 intentionally defaults to `true`.

## Configuration Changes

| Context | Description | Ref |
| --- | --- | --- |
| Configuration / Publishing | A new setting `Publishing.CheckDuplicateNameOnPublish` has been introduced in `Sitecore.config`. In Sitecore XP 10.5 the default value is `true`, meaning publishing validates item names and skips items that would create a duplicate name on the same level, logging a warning. When set to `false`, duplicate name checking is bypassed during publishing (previous allow-through behaviour via `SetPropertyValue`). Affects: solutions where publish previously wrote renamed or conflicting items into the Web database even when a sibling with the same name already existed. To restore the previous behaviour, set `Publishing.CheckDuplicateNameOnPublish` to `false`. | PDXP-19267 |

## Behavioural Changes

The following runtime behaviour has changed as part of the duplicate-name-on-publish toggle. Public API surface is largely unchanged; impact is on publish results.

| Context | Description | Ref |
| --- | --- | --- |
| Configuration / Publishing | Publishing now skips any item whose name would create a duplicate sibling in the target database. When a skip occurs, the item's publish result is `PublishOperation.Skipped` and a `WARN` entry is written to the publishing log. To locate affected items after upgrade, search the log for `"Publish: Duplicate item name"` or `"Item skipped due to duplicate name validation."`. The full warning includes the item ID, language, and path of the skipped item, and instructs how to disable the check. The behaviour is controlled by the new `Publishing.CheckDuplicateNameOnPublish` setting in `Sitecore.config` (default: `true`). Set the value to `false` to restore pre-upgrade behaviour and bypass the check entirely. Affects: all publish operations on Sitecore XP after upgrade. | PDXP-19267 |

## API Changes

No public methods were removed. The following API-related notes apply.

| Context | Description | Ref |
| --- | --- | --- |
| API / DI | The two public `PublishHelper` constructors (`PublishHelper(PublishOptions)` and `PublishHelper(PublishOptions, BaseItemManager)`) now resolve `BaseSettings` from the Sitecore DI container via `ServiceLocator` in their initialiser chains. The constructor signatures are unchanged, but construction will throw at runtime with `InvalidOperationException` if `BaseSettings` is not registered in the container. Affects: any code that constructs `PublishHelper` directly — including unit tests, integration tests, custom entry points, and upgrade scripts — where the Sitecore DI container is not fully initialised. To avoid the failure, either ensure `BaseSettings` is registered before constructing `PublishHelper`, or switch to the `internal PublishHelper(PublishOptions, BaseItemManager, BaseSettings)` overload in tests by injecting a `BaseSettings` substitute directly. | PDXP-19267 |

# Sitecore Framework on .NET 10

## Dependency Changes

Sitecore XP 10.5 consumes the Sitecore Framework (SF) libraries built on .NET 10 GA. The Sitecore XM and XP components, including Sitecore Identity Server, were moved onto this Framework so that the whole platform builds and runs against a single, current Framework baseline.

Sitecore XP itself continues to run on .NET Framework 4.8.1. The change is to the Sitecore Framework libraries that the platform consumes and to the managed dependency stack those libraries bring with them, which moves to the .NET 10 servicing line. As part of this move, the Sitecore Framework NuGet package family has been upgraded across the platform, together with the transitive framework dependencies that are aligned to it. Several of these are major-version increases. The versions are managed centrally in the platform build and are applied consistently to every component that references them.

The upgrades are transparent on a standard upgrade. Action is only required for solutions that reference these packages directly, that pin their versions, or that maintain assembly binding redirects for them. Because several packages cross a major version, solutions that build against them should recompile and re-test rather than relying on binding redirects alone.

### Sitecore.Framework package family

| Context | Description | Ref |
| --- | --- | --- |
| Dependency | The Sitecore Framework package family has been raised to its latest servicing versions. The representative changes are `Sitecore.Framework.Common` from `6.0.0` to `8.0.1`, `Sitecore.Framework.Configuration` from `7.0.0` to `9.0.3`, `Sitecore.Framework.Conditions` to `8.0.1`, `Sitecore.Framework.Rules` from `6.0.0` to `8.0.2`, `Sitecore.Framework.Messaging` to `8.0.5`, `Sitecore.Framework.TransientFaultHandling` from `4.0.0` to `6.0.3`, and `Sitecore.Framework.Data.Blobs` from `3.0.1` to `3.1.0`. The exact starting version varies by component and by referencing assembly. The major-version increases (Common, Configuration, Rules, and TransientFaultHandling) may include API or behaviour changes in those libraries, so solutions that consume them directly should review their usage and recompile. Affects: solutions that reference any `Sitecore.Framework.*` package directly or extend types from it. Search your project files for `Sitecore.Framework.` package references. | PDXP-10632, PDXP-16490 |

### Aligned transitive dependencies

| Dependency | The Sitecore Framework upgrade raises a number of transitive framework dependencies so that the whole platform resolves to a single, consistent set. This includes the `Microsoft.Extensions.*` family (configuration, dependency injection, logging, options, and primitives) moving from the `8.x` line to the `10.x` line, `System.Text.Json` and `System.Text.Encodings.Web` moving from `8.0.6` to `10.0.1`, `Newtonsoft.Json` to `13.0.4`, the `Rebus` messaging packages to their `8.x` and `10.x` lines, and the Azure SDK packages (`Azure.Core`, `Azure.Identity`, `Azure.Messaging.ServiceBus`) to their current versions. These versions are governed centrally by the platform build and are expected to match across all Sitecore components. Solutions should not pin their own versions of these packages below the platform baseline, and any existing binding redirects for them should be reviewed after the upgrade. Affects: solutions that reference these framework or messaging packages directly, or that maintain binding redirects for them. | PDXP-10632, PDXP-16490 |

# Device Detection Default Performance Profile

Sitecore XP 10.5 changes the default performance profile of the Device Detection component from `LowMemory` to `Balanced`. The performance profile controls how the 51Degrees device detection data is loaded and cached. Under `LowMemory`, data is always streamed from disk on demand, which keeps memory usage low at the cost of slower lookups. Under Balanced, data is accessed through caches that retain the most commonly accessed items in memory, so disk access becomes relatively uncommon on a typical web server workload.

This change enables the performance profile capability (introduced under PDXP-7564) by default, so device detection now favours lookup performance over minimal memory usage out of the box. As a result, the Device Detection component uses more memory than in previous versions. Solutions that require the previous low-memory behaviour, for example on memory-constrained servers, must set the profile back to `LowMemory` explicitly.

## Configuration changes

| Context | Description | Ref |
| --- | --- | --- |
| Configuration | The default value of the `DeviceDetection.PerformanceProfile` setting in `Sitecore.CES.DeviceDetection.config` has changed from `LowMemory` to `Balanced`. The code fallback used when the setting is absent (`DeviceDetectionSettings.PerformanceProfile`) was changed to match, so device detection now resolves to `Balanced` both from the shipped configuration and when the setting is not present. On a clean installation, or when the updated configuration file is taken during upgrade, device detection runs on the `Balanced` profile and consumes more memory than the previous `LowMemory` default. To keep the previous behaviour, set `DeviceDetection.PerformanceProfile` to `LowMemory`. The available values are `MaxPerformance`, `HighPerformance`, `Balanced`, and `LowMemory`. Affects: solutions that use the Device Detection component and rely on the default performance profile, particularly memory-constrained environments. | PDXP-22949 |

# MVC Rendering Profiling and Statistics

The pipeline processors responsible for MVC rendering profiling and statistics recording have been restricted to run only when the Sitecore instance is configured for the Profiling environment. On all other environments — including standard CM and CD instances — these processors are now silently skipped on every request. This is to eliminate unnecessary performance overhead in production environment.

Previously, all four processors ran unconditionally regardless of environment. Solutions that collected rendering timing data or rendering statistics outside of a dedicated profiling instance will stop receiving that data after upgrading to Sitecore XP 10.5.

## Configuration Changes

| Context | Description | Ref |
| --- | --- | --- |
| Configuration / Pipelines | The `env:require="Profiling"` attribute has been added to four processors in `App_Config/Sitecore/Mvc/Sitecore.Mvc.config`, and the `xmlns:env` XML namespace declaration has been added to the file's root element. The affected processors are: `Sitecore.Mvc.Pipelines.Response.RenderPlaceholder.InitializeProfiling` in the `mvc.renderPlaceholder` pipeline; and `Sitecore.Mvc.Pipelines.Response.RenderRendering.InitializeProfiling`, `Sitecore.Mvc.Pipelines.Response.RenderRendering.StartStatisticRecording`, and `Sitecore.Mvc.Pipelines.Response.RenderRendering.RecordStatistic` in the `mvc.renderRendering` pipeline. These processors are now skipped on any Sitecore instance where `env:define` in `Sitecore.config` does not include `Profiling`, because profiling and statistics processing impose a per-request overhead that should not run in non-profiling environments. On upgrade, rendering profiling data and rendering statistics will silently stop being collected on all instances that do not have `Profiling` in their `env:define`. To restore the previous behavior, either: (1) add `Profiling` to the `env:define` attribute of `Sitecore.config` on instances that require rendering statistics, after reviewing the associated performance overhead; or (2) add a config patch that re-declares the affected processors without the `env:require` attribute. If your solution does not use MVC rendering profiling or statistics, no action is required. Affects: deployments that collect MVC rendering profiling data or rendering statistics outside a dedicated Sitecore Profiling environment, including custom monitoring tools, diagnostics dashboards, or CD scenarios that consumed rendering statistics by default. | 347848 |

# Security Database Schema changes related to Identity Server 8

The `PersistedGrants` table in the `Sitecore.Core` security database was restructured as part of upgrading Sitecore Identity Server from version 7 to version 8. IS8 is built on Duende IdentityServer, whose data model replaces the original string-based primary key (`[Key] nvarchar(200) NOT NULL`) with a `bigint` auto-increment surrogate key (`[Id] bigint NOT NULL IDENTITY`). Existing tables created by earlier Identity Server versions have a different schema and must be migrated using the provided upgrade script before IS8 can operate correctly.

## Database Schema Changes

| Context | Description | Ref |
| --- | --- | --- |
| Deployment | If upgrading to Sitecore Identity Server 8.0, it introduces a database schema change, which requires running an Identity Server database upgrade script. Refer to the Upgrade Installation Guide for Sitecore XP 10.5.0 for details. Affects: all deployments upgrading Sitecore Identity Server to version 8.0 from a previous version. | PDXP-1657 |

# Removal of SQL Server 2019 Support

Sitecore XP 10.5 adds support for SQL Server 2025 and removes support for SQL Server 2019. To enable compatibility with SQL Server 2022 and SQL Server 2025, the SQL Server deployment prerequisites required for on-premises installation via Web Deploy packages (msdeploy) have been updated; the previously documented prerequisites are based on SQL Server 2016 SP3-era tooling and do not work against SQL Server 2022 or SQL Server 2025.

These two changes are independent: the SQL Server version removal affects infrastructure and operations teams, while the prerequisite update affects anyone who installs or upgrades SXP using Web Deploy packages.

## Supported SQL Server Versions

| Context | Description | Ref |
| --- | --- | --- |
| SQL Server | SQL Server 2019 is no longer a supported SQL Server version in Sitecore XP 10.5. Sitecore XP 10.5 supports SQL Server 2022 and SQL Server 2025. SQL Server 2019 reached end of mainstream support in July 2024 and is no longer a supported SQL Server version for Sitecore XP. Upgrade your SQL Server instance to SQL Server 2022 or SQL Server 2025 before upgrading to SXP 10.5. Refer to the [Sitecore compatibility table for Sitecore XP 9.0 and later](https://support.sitecore.com/kb?id=kb_article_view&sysparm_article=KB0087164) for the full supported infrastructure matrix. Affects: all deployments where any Sitecore database — including Master, Web, Core, or xConnect collection, reporting, or processing databases — is hosted on SQL Server 2019. | PDXP-16497 |

## Deployment Prerequisites

| Context | Description | Ref |
| --- | --- | --- |
| Deployment | The minimum required versions of three SQL Server tooling prerequisites used with Web Deploy packages (msdeploy) have changed for Sitecore XP 10.5 on-premises installations. The previously documented prerequisites — Microsoft® SQL Server® Data-Tier Application Framework (DacFx) v15.0.4384.2, Microsoft SQLSysCLRTypes v15.0.2000.5, and SharedManagementObjects v13.0.6300.2 (from the SQL Server 2016 SP3 Feature Pack) — do not support SQL Server 2022 or SQL Server 2025 and have been replaced. Running msdeploy with the old prerequisites against SQL Server 2022 or SQL Server 2025 fails with the error `ERROR_SQLCLRTYPES_NEEDED_FOR_SQL_PROVIDER: The SQL provider cannot run because of a missing dependency`. Before deploying SXP 10.5, update all three prerequisites on your deployment agent or machine to versions compatible with SQL Server 2022 and SQL Server 2025. Refer to the Installation Guide for Sitecore XP 10.5.0 for the required versions and download links. Affects: on-premises deployments that install or upgrade SXP 10.5 using Web Deploy Package (WDP) files via msdeploy, including automated deployment pipelines that reference the previously listed prerequisite installers. | PDXP-22358 |

# Legacy JavaScript and CSS Library Files Removed from the Sitecore CM Shell

A large set of JavaScript and CSS library files previously deployed under `\\sitecore\\shell\\Controls\\` and `\\sitecore\\shell\\Feeds\\` have been removed. The removed files include multiple legacy jQuery versions, as well as additional shell control scripts and third-party libraries.

Custom CM shell extensions — such as custom ribbon commands, shell dialogs, or SPEAK components — that reference any of these file paths directly will fail silently after upgrading to Sitecore XP 10.5. No server error is logged; the browser receives a 404 response for each missing file and affected UI functionality stops working without any visible error.

## Deployment Changes

| Context | Description | Ref |
| --- | --- | --- |
| Deployment | The following files have been removed from the Sitecore CM web application as part of a cleanup of legacy and superseded client-side assets: `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery-1.6.4.min.js`, `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery-1.10.0.min.js`, `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery-1.10.2.min.js`, `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery-1.12.4.min.js`, `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery-3.6.1.js`, `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery-3.6.1.min.js`, `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery.js`, `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery-ui.min.js`, `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery.dialogextended-2.0.3.js`, the `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jQueryUI\\1.9.2\\` and `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jQueryUI\\1.10.3\\` theme folders (including all CSS, JS, and image sprite assets), `\\sitecore\\shell\\Controls\\Lib\\Chosen\\chosen.jquery.js` and related Chosen files, `\\sitecore\\shell\\Controls\\Lib\\iso8601\\iso8601.js`, `\\sitecore\\shell\\Controls\\Lib\\jsnlog\\jsnlog.js`, `\\sitecore\\shell\\Controls\\Lib\\JSON\\JSON2.min.js`, `\\sitecore\\shell\\Controls\\Lib\\Scriptaculous\\sound.js`, `\\sitecore\\shell\\Controls\\Lib\\Scriptaculous\\unittest.js`, `\\sitecore\\shell\\Controls\\SitecoreHtmlEditor.js`, `\\sitecore\\shell\\Controls\\SitecoreModalWindow.js`, `\\sitecore\\shell\\Controls\\SitecoreTreeview.js`, `\\sitecore\\shell\\Controls\\Testing\\CombinationsGrid\\CombinationsGrid.js`, `\\sitecore\\shell\\Controls\\Testing\\CombinationsGrid\\CombinationsGrid.css`, and `\\sitecore\\shell\\Feeds\\workflow.js`. These files were removed to eliminate legacy and superseded client-side assets. On upgrade, any custom CM shell code that loads these files by their server path (for example, via `<script src="...">` or `<link href="...">` in a custom XML shell layout, `.aspx` page, or SPEAK component) will fail silently — the server starts normally and no error is logged, but the affected scripts or styles will not load. Search your custom CM shell code for references to any of the file paths listed above and remove or replace them using the following guidance. If you referenced any jQuery 1.x file or `jquery-3.6.1.js`/`jquery-3.6.1.min.js`, update to `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery-3.6.3.min.js`. If you referenced `jquery-ui.min.js` or any file under the `jQueryUI\\1.9.2\\` or `jQueryUI\\1.10.3\\` folders, update to `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jQueryUI\\1.13.2\\jquery-ui.min.js`. If you referenced `jquery.dialogextended-2.0.3.js`, update to `\\sitecore\\shell\\Controls\\Lib\\jQuery\\jquery.dialogextend-2.0.4.js`. If you referenced `jsnlog.js`, update to `\\sitecore\\shell\\Controls\\Lib\\jsnlog\\jsnlog.min.js`. For all other removed files — including `SitecoreHtmlEditor.js`, `SitecoreModalWindow.js`, `SitecoreTreeview.js`, `workflow.js`, and the Scriptaculous, Chosen, iso8601, and JSON2 files — no Sitecore-provided replacement is available; review your usage and remove or reimplement the dependency within your own solution. If your solution does not include custom CM shell extensions that reference these paths directly, no action is required. Affects: deployments with custom Sitecore CM shell extensions — including custom ribbon commands, shell dialogs, XML shell layouts, and SPEAK components — that explicitly reference any of the removed file paths. | PDXP-16510 |
