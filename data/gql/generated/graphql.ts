/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  CustomDateTime: { input: Date; output: Date };
  JSON: { input: { [key: string]: any }; output: { [key: string]: any } };
  /** Datetime in UTC format */
  UTCDateTime: { input: any; output: any };
};

/** GraphQL filter for boolean fields. */
export type BooleanFilterInput = {
  /** Matches the specified value. */
  equals: InputMaybe<Scalars['Boolean']['input']>;
  /** Does not match the specified value. */
  notEquals: InputMaybe<Scalars['Boolean']['input']>;
};

/** Indicates whether a string comparison should be case-sensitive or case-insensitive. */
export enum CaseSensitive {
  /** Case-insensitive match. */
  Insensitive = 'INSENSITIVE',
  /** Case-sensitive match. */
  Sensitive = 'SENSITIVE',
}

export type Changelog = ContentItem & {
  /** Does this change include a breaking change? (does not apply to XM Cloud) */
  breakingChange: Maybe<Scalars['Boolean']['output']>;
  /** Please select a change type */
  changeType: Maybe<ContentItemList>;
  /** The text that will be rendered in the overview */
  description: Maybe<Scalars['JSON']['output']>;
  /** The content that will be visible on the detail page (not required) */
  fullArticle: Maybe<Scalars['JSON']['output']>;
  image: Maybe<ContentItemList>;
  /** Mentions the related issue number (if applicable) */
  issueNumber: Maybe<Scalars['String']['output']>;
  /** You can link to an external page where more information can be found */
  readMoreLink: Maybe<Scalars['String']['output']>;
  releaseDate: Maybe<Scalars['UTCDateTime']['output']>;
  /** Should this changelog item be considered as an announcement? */
  scheduled: Maybe<Scalars['Boolean']['output']>;
  /** Please select one product from the list */
  sitecoreProduct: Maybe<ContentItemList>;
  /** Please select a release status */
  status: Maybe<ContentItemList>;
  system: System;
  title: Maybe<Scalars['String']['output']>;
  /** Only use the version field if applicable */
  x_version: Maybe<Scalars['String']['output']>;
};

export type ChangelogChangeTypeArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Changelog_ChangeType_Relations>;
  minimumPageSize?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<ContentItemSortingOptions>;
};

export type ChangelogImageArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Changelog_Image_Relations>;
  minimumPageSize?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<ContentItemSortingOptions>;
};

export type ChangelogSitecoreProductArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Changelog_SitecoreProduct_Relations>;
  minimumPageSize?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<ContentItemSortingOptions>;
};

export type ChangelogStatusArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Changelog_Status_Relations>;
  minimumPageSize?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<ContentItemSortingOptions>;
};

/** Represents a list of content items. */
export type ChangelogList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<Changelog>>>;
};

/** Enum type used for sorting in QueryMany. */
export enum ChangelogSortingOptions {
  BreakingChangeAsc = 'BREAKING_CHANGE_ASC',
  BreakingChangeDesc = 'BREAKING_CHANGE_DESC',
  IssueNumberAsc = 'ISSUE_NUMBER_ASC',
  IssueNumberDesc = 'ISSUE_NUMBER_DESC',
  ReadMoreLinkAsc = 'READ_MORE_LINK_ASC',
  ReadMoreLinkDesc = 'READ_MORE_LINK_DESC',
  ReleaseDateAsc = 'RELEASE_DATE_ASC',
  ReleaseDateDesc = 'RELEASE_DATE_DESC',
  ScheduledAsc = 'SCHEDULED_ASC',
  ScheduledDesc = 'SCHEDULED_DESC',
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  SystemCreatedByAsc = 'SYSTEM_CREATED_BY_ASC',
  SystemCreatedByDesc = 'SYSTEM_CREATED_BY_DESC',
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  SystemIdAsc = 'SYSTEM_ID_ASC',
  SystemIdDesc = 'SYSTEM_ID_DESC',
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  SystemUpdatedByAsc = 'SYSTEM_UPDATED_BY_ASC',
  SystemUpdatedByDesc = 'SYSTEM_UPDATED_BY_DESC',
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  XVersionAsc = 'X_VERSION_ASC',
  XVersionDesc = 'X_VERSION_DESC',
}

/** GraphQL filter for content items. */
export type Changelog_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_Filter>>>;
  breakingChange: InputMaybe<BooleanFilterInput>;
  changeType: InputMaybe<ReferenceFilterInput>;
  image: InputMaybe<ReferenceFilterInput>;
  issueNumber: InputMaybe<StringFilterInput>;
  readMoreLink: InputMaybe<StringFilterInput>;
  releaseDate: InputMaybe<DateTimeFilterInput>;
  scheduled: InputMaybe<BooleanFilterInput>;
  sitecoreProduct: InputMaybe<ReferenceFilterInput>;
  status: InputMaybe<ReferenceFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
  title: InputMaybe<StringFilterInput>;
  x_version: InputMaybe<StringFilterInput>;
};

/** GraphQL root filter for content items references. */
export type Changelog_ChangeType_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_ChangeType_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_ChangeType_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
};

/** Represents the input type for filtering references in GraphQL. */
export type Changelog_ChangeType_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_ChangeType_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_ChangeType_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  changelog: InputMaybe<Changelog_Filter>;
  changetype: InputMaybe<Changetype_Filter>;
  ref: InputMaybe<Ref_Filter>;
  sampleArticle: InputMaybe<SampleArticle_Filter>;
  sitecoreCloud: InputMaybe<SitecoreCloud_Filter>;
  sitecoreProduct: InputMaybe<SitecoreProduct_Filter>;
  status: InputMaybe<Status_Filter>;
  system: InputMaybe<SystemTypeFilterInput>;
  upload: InputMaybe<Upload_Filter>;
  xMCMedia: InputMaybe<XmcMedia_Filter>;
};

/** GraphQL root filter for content items references. */
export type Changelog_Image_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_Image_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_Image_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
};

/** Represents the input type for filtering references in GraphQL. */
export type Changelog_Image_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_Image_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_Image_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  changelog: InputMaybe<Changelog_Filter>;
  changetype: InputMaybe<Changetype_Filter>;
  ref: InputMaybe<Ref_Filter>;
  sampleArticle: InputMaybe<SampleArticle_Filter>;
  sitecoreCloud: InputMaybe<SitecoreCloud_Filter>;
  sitecoreProduct: InputMaybe<SitecoreProduct_Filter>;
  status: InputMaybe<Status_Filter>;
  system: InputMaybe<SystemTypeFilterInput>;
  upload: InputMaybe<Upload_Filter>;
  xMCMedia: InputMaybe<XmcMedia_Filter>;
};

/** GraphQL root filter for content items references. */
export type Changelog_SitecoreProduct_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_SitecoreProduct_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_SitecoreProduct_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
};

/** Represents the input type for filtering references in GraphQL. */
export type Changelog_SitecoreProduct_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_SitecoreProduct_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_SitecoreProduct_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  changelog: InputMaybe<Changelog_Filter>;
  changetype: InputMaybe<Changetype_Filter>;
  ref: InputMaybe<Ref_Filter>;
  sampleArticle: InputMaybe<SampleArticle_Filter>;
  sitecoreCloud: InputMaybe<SitecoreCloud_Filter>;
  sitecoreProduct: InputMaybe<SitecoreProduct_Filter>;
  status: InputMaybe<Status_Filter>;
  system: InputMaybe<SystemTypeFilterInput>;
  upload: InputMaybe<Upload_Filter>;
  xMCMedia: InputMaybe<XmcMedia_Filter>;
};

/** GraphQL root filter for content items references. */
export type Changelog_Status_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_Status_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_Status_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
};

/** Represents the input type for filtering references in GraphQL. */
export type Changelog_Status_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_Status_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_Status_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  changelog: InputMaybe<Changelog_Filter>;
  changetype: InputMaybe<Changetype_Filter>;
  ref: InputMaybe<Ref_Filter>;
  sampleArticle: InputMaybe<SampleArticle_Filter>;
  sitecoreCloud: InputMaybe<SitecoreCloud_Filter>;
  sitecoreProduct: InputMaybe<SitecoreProduct_Filter>;
  status: InputMaybe<Status_Filter>;
  system: InputMaybe<SystemTypeFilterInput>;
  upload: InputMaybe<Upload_Filter>;
  xMCMedia: InputMaybe<XmcMedia_Filter>;
};

export type Changetype = ContentItem & {
  changeType: Maybe<Scalars['String']['output']>;
  system: System;
};

/** Represents a list of content items. */
export type ChangetypeList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<Changetype>>>;
};

/** Enum type used for sorting in QueryMany. */
export enum ChangetypeSortingOptions {
  ChangeTypeAsc = 'CHANGE_TYPE_ASC',
  ChangeTypeDesc = 'CHANGE_TYPE_DESC',
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  SystemCreatedByAsc = 'SYSTEM_CREATED_BY_ASC',
  SystemCreatedByDesc = 'SYSTEM_CREATED_BY_DESC',
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  SystemIdAsc = 'SYSTEM_ID_ASC',
  SystemIdDesc = 'SYSTEM_ID_DESC',
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  SystemUpdatedByAsc = 'SYSTEM_UPDATED_BY_ASC',
  SystemUpdatedByDesc = 'SYSTEM_UPDATED_BY_DESC',
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
}

/** GraphQL filter for content items. */
export type Changetype_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changetype_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changetype_Filter>>>;
  changeType: InputMaybe<StringFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
};

/** Represents common fields for all content types. */
export type ContentItem = {
  /** The system fields of the content item. */
  system: Maybe<System>;
};

/** Represents a list of content items. */
export type ContentItemList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<ContentItem>>>;
};

/** Enum type used for sorting in Reference fields. */
export enum ContentItemSortingOptions {
  /** Indicates sorting by CreatedAt system field ascending. */
  SystemCreatedatAsc = 'SYSTEM_CREATEDAT_ASC',
  /** Indicates sorting by CreatedAt system field descending. */
  SystemCreatedatDesc = 'SYSTEM_CREATEDAT_DESC',
  /** Indicates sorting by CreatedBy system field ascending. */
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  /** Indicates sorting by CreatedBy system field descending. */
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  /** Indicates sorting by ID ascending. */
  SystemIdAsc = 'SYSTEM_ID_ASC',
  /** Indicates sorting by ID descending. */
  SystemIdDesc = 'SYSTEM_ID_DESC',
  /** Indicates sorting by Locale ascending. */
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  /** Indicates sorting by Locale descending. */
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  /** Indicates sorting by Name descending. */
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  /** Sort by Name descending. */
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  /** Indicates sorting by PublishingStatus system field ascending. */
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  /** Indicates sorting by PublishingStatus system field descending. */
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  /** Indicates sorting by UpdatedAt system field ascending. */
  SystemUpdatedatAsc = 'SYSTEM_UPDATEDAT_ASC',
  /** Indicates sorting by UpdatedAt system field descending. */
  SystemUpdatedatDesc = 'SYSTEM_UPDATEDAT_DESC',
  /** Indicates sorting by UpdatedBy system field ascending. */
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  /** Indicates sorting by UpdatedBy system field ascending. */
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  /** Indicates sorting by Version ascending. */
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  /** Indicates sorting by Version descending. */
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
}

/** Represents common fields for all content types. */
export type ContentItemType = ContentItem & {
  system: System;
};

/** GraphQL filter for content items. */
export type ContentItem_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<ContentItem_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<ContentItem_Filter>>>;
  system: InputMaybe<SystemTypeFilterInput>;
};

/** Represents the GraphQL object type for ContentTypeSummary. */
export type ContentTypeSummary = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

/** Graphql filter for content type summaries. */
export type ContentTypeSummary_Filter = {
  id: InputMaybe<StringFilterInput>;
};

/** GraphQL filter for datetime ranges. */
export type DateRangeInput = {
  /** The start date. */
  from: Scalars['CustomDateTime']['input'];
  /** The end date. */
  to: Scalars['CustomDateTime']['input'];
};

/** GraphQL filter for DateTime fields. */
export type DateTimeFilterInput = {
  /** Matches the specified value. */
  equals: InputMaybe<Scalars['CustomDateTime']['input']>;
  /** Matches values greater than the specified value. */
  greaterThan: InputMaybe<Scalars['CustomDateTime']['input']>;
  /** Matches values within a specified range. */
  inRange: InputMaybe<DateRangeInput>;
  /** Matches values less than the specified value. */
  lessThan: InputMaybe<Scalars['CustomDateTime']['input']>;
  /** Does not match the specified value. */
  notEquals: InputMaybe<Scalars['CustomDateTime']['input']>;
  /** Excludes values within a specified range. */
  notInRange: InputMaybe<DateRangeInput>;
};

/** GraphQL filter for integer fields. */
export type DoubleFilterInput = {
  /** Matches the specified value. */
  equals: InputMaybe<Scalars['Float']['input']>;
  /** Matches values greater than the specified value. */
  greaterThan: InputMaybe<Scalars['Float']['input']>;
  /** Matches values within a specified range. */
  inRange: InputMaybe<DoubleRangeInput>;
  /** Matches values less than the specified value. */
  lessThan: InputMaybe<Scalars['Float']['input']>;
  /** Does not match the specified value. */
  notEquals: InputMaybe<Scalars['Float']['input']>;
  /** Excludes values within a specified range. */
  notInRange: InputMaybe<DoubleRangeInput>;
};

/** GraphQL filter for number ranges. */
export type DoubleRangeInput = {
  /** The lower boundary of the range. */
  from: Scalars['Float']['input'];
  /** The upper boundary of the range. */
  to: Scalars['Float']['input'];
};

/** Represents a language and regional setting. */
export type Locale = {
  system: Maybe<LocaleSystemTypeType>;
};

export type LocaleSystemTypeType = {
  createdAt: Scalars['UTCDateTime']['output'];
  createdBy: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  label: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['UTCDateTime']['output'];
  updatedBy: Scalars['String']['output'];
};

/** Represents common interface for all content types containing MediaLibraryFragment fragment. */
export type MediaLibraryFragment = {
  /** The size of the file. */
  media_fileSize: Maybe<Scalars['Float']['output']>;
  /** The public link to use for the media asset. This field may be automatically updated by publishing or archiving the media asset. */
  media_publicLink: Maybe<Scalars['String']['output']>;
  /** The thumbnail link to use for the media asset. */
  media_thumbnailLink: Maybe<Scalars['String']['output']>;
  /** The file type of the media asset. */
  media_type: Maybe<Array<Maybe<TaxonomyTerm>>>;
  /** The system fields of the content item. */
  system: Maybe<System>;
};

/** Represents an implementation for MediaLibraryFragment fragment interface. */
export type MediaLibraryFragmentImpl = ContentItem &
  MediaLibraryFragment & {
    /** The size of the file. */
    media_fileSize: Maybe<Scalars['Float']['output']>;
    /** The public link to use for the media asset. This field may be automatically updated by publishing or archiving the media asset. */
    media_publicLink: Maybe<Scalars['String']['output']>;
    /** The thumbnail link to use for the media asset. */
    media_thumbnailLink: Maybe<Scalars['String']['output']>;
    /** The file type of the media asset. */
    media_type: Maybe<Array<Maybe<TaxonomyTerm>>>;
    system: System;
  };

/** Represents a list of content items. */
export type MediaLibraryFragmentList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<MediaLibraryFragment>>>;
};

/** Enum type used for sorting in FragmentMany query. */
export enum MediaLibraryFragmentSortingOptions {
  MediaFileSizeAsc = 'MEDIA_FILE_SIZE_ASC',
  MediaFileSizeDesc = 'MEDIA_FILE_SIZE_DESC',
  MediaPublicLinkAsc = 'MEDIA_PUBLIC_LINK_ASC',
  MediaPublicLinkDesc = 'MEDIA_PUBLIC_LINK_DESC',
  MediaThumbnailLinkAsc = 'MEDIA_THUMBNAIL_LINK_ASC',
  MediaThumbnailLinkDesc = 'MEDIA_THUMBNAIL_LINK_DESC',
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  SystemCreatedByAsc = 'SYSTEM_CREATED_BY_ASC',
  SystemCreatedByDesc = 'SYSTEM_CREATED_BY_DESC',
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  SystemIdAsc = 'SYSTEM_ID_ASC',
  SystemIdDesc = 'SYSTEM_ID_DESC',
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  SystemUpdatedByAsc = 'SYSTEM_UPDATED_BY_ASC',
  SystemUpdatedByDesc = 'SYSTEM_UPDATED_BY_DESC',
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
}

/** GraphQL filter for fragments. */
export type MediaLibraryFragment_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<MediaLibraryFragment_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<MediaLibraryFragment_Filter>>>;
  media_fileSize: InputMaybe<DoubleFilterInput>;
  media_publicLink: InputMaybe<StringFilterInput>;
  media_thumbnailLink: InputMaybe<StringFilterInput>;
  media_type: InputMaybe<SelectFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
};

export enum PublishStatus {
  Preview = 'PREVIEW',
  Published = 'PUBLISHED',
}

export type Query = {
  changelog: Maybe<Changelog>;
  changetype: Maybe<Changetype>;
  contentItem: Maybe<ContentItem>;
  cost: Maybe<Scalars['Int']['output']>;
  locale: Maybe<Locale>;
  manyChangelog: Maybe<ChangelogList>;
  manyChangetype: Maybe<ChangetypeList>;
  manyContentItem: Maybe<ContentItemList>;
  manyLocale: Maybe<Array<Maybe<Locale>>>;
  manyMediaLibraryFragment: Maybe<MediaLibraryFragmentList>;
  manyRef: Maybe<RefList>;
  manySitecoreCloud: Maybe<SitecoreCloudList>;
  manySitecoreProduct: Maybe<SitecoreProductList>;
  manyStatus: Maybe<StatusList>;
  manyTaxonomy: Maybe<TaxonomyList>;
  manyUpload: Maybe<UploadList>;
  manyXMCMediaFragment: Maybe<XmcMediaFragmentList>;
  mediaLibraryFragment: Maybe<MediaLibraryFragment>;
  ref: Maybe<Ref>;
  sitecoreCloud: Maybe<SitecoreCloud>;
  sitecoreProduct: Maybe<SitecoreProduct>;
  status: Maybe<Status>;
  taxonomy: Maybe<Taxonomy>;
  upload: Maybe<Upload>;
  xMCMediaFragment: Maybe<XmcMediaFragment>;
};

export type QueryChangelogArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type QueryChangetypeArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type QueryContentItemArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type QueryLocaleArgs = {
  id: Scalars['ID']['input'];
};

export type QueryManyChangelogArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_Changelog>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<ChangelogSortingOptions>;
};

export type QueryManyChangetypeArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_Changetype>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<ChangetypeSortingOptions>;
};

export type QueryManyContentItemArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_ContentItem>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<ContentItemSortingOptions>;
};

export type QueryManyMediaLibraryFragmentArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_MediaLibraryFragment>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<MediaLibraryFragmentSortingOptions>;
};

export type QueryManyRefArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_Ref>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<RefSortingOptions>;
};

export type QueryManySitecoreCloudArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_SitecoreCloud>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<SitecoreCloudSortingOptions>;
};

export type QueryManySitecoreProductArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_SitecoreProduct>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<SitecoreProductSortingOptions>;
};

export type QueryManyStatusArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_Status>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<StatusSortingOptions>;
};

export type QueryManyTaxonomyArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  minimumPageSize?: Scalars['Int']['input'];
};

export type QueryManyUploadArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_Upload>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<UploadSortingOptions>;
};

export type QueryManyXmcMediaFragmentArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Root_XmcMediaFragment>;
  minimumPageSize?: Scalars['Int']['input'];
  orderBy: InputMaybe<XmcMediaFragmentSortingOptions>;
};

export type QueryMediaLibraryFragmentArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type QueryRefArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type QuerySitecoreCloudArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type QuerySitecoreProductArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type QueryStatusArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type QueryTaxonomyArgs = {
  id: Scalars['ID']['input'];
};

export type QueryUploadArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type QueryXMcMediaFragmentArgs = {
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
};

export type Ref = ContentItem & {
  reference: Maybe<ContentItemList>;
  system: System;
  title: Maybe<Scalars['String']['output']>;
};

export type RefReferenceArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<Ref_Reference_Relations>;
  minimumPageSize?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<ContentItemSortingOptions>;
};

/** Represents a list of content items. */
export type RefList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<Ref>>>;
};

/** Enum type used for sorting in QueryMany. */
export enum RefSortingOptions {
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  SystemCreatedByAsc = 'SYSTEM_CREATED_BY_ASC',
  SystemCreatedByDesc = 'SYSTEM_CREATED_BY_DESC',
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  SystemIdAsc = 'SYSTEM_ID_ASC',
  SystemIdDesc = 'SYSTEM_ID_DESC',
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  SystemUpdatedByAsc = 'SYSTEM_UPDATED_BY_ASC',
  SystemUpdatedByDesc = 'SYSTEM_UPDATED_BY_DESC',
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
}

/** GraphQL filter for content items. */
export type Ref_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Ref_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Ref_Filter>>>;
  reference: InputMaybe<ReferenceFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
  title: InputMaybe<StringFilterInput>;
};

/** GraphQL root filter for content items references. */
export type Ref_Reference_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Ref_Reference_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Ref_Reference_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
};

/** Represents the input type for filtering references in GraphQL. */
export type Ref_Reference_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Ref_Reference_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Ref_Reference_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  changelog: InputMaybe<Changelog_Filter>;
  changetype: InputMaybe<Changetype_Filter>;
  ref: InputMaybe<Ref_Filter>;
  sampleArticle: InputMaybe<SampleArticle_Filter>;
  sitecoreCloud: InputMaybe<SitecoreCloud_Filter>;
  sitecoreProduct: InputMaybe<SitecoreProduct_Filter>;
  status: InputMaybe<Status_Filter>;
  system: InputMaybe<SystemTypeFilterInput>;
  upload: InputMaybe<Upload_Filter>;
  xMCMedia: InputMaybe<XmcMedia_Filter>;
};

/** GraphQL filter for reference fields. */
export type ReferenceFilterInput = {
  /** Checks if the value contains the specified text. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value contains all of the specified texts. */
  containsAll: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value contains any of the specified texts. */
  containsAny: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value does not contain the specified text. */
  notContains: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value does not contain all of the specified texts. */
  notContainsAll: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value does not contain any of the specified texts. */
  notContainsAny: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Root filter for content items. */
export type Root_ContentItem = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<ContentItem_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<ContentItem_Filter>>>;
};

/** Root filter for fragments. */
export type Root_MediaLibraryFragment = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<MediaLibraryFragment_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<MediaLibraryFragment_Filter>>>;
};

/** Root filter for content types. */
export type Root_Upload = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Upload_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Upload_Filter>>>;
};

/** Root filter for fragments. */
export type Root_XmcMediaFragment = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<XmcMediaFragment_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<XmcMediaFragment_Filter>>>;
};

/** Root filter for content types. */
export type Root_Changelog = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changelog_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changelog_Filter>>>;
};

/** Root filter for content types. */
export type Root_Changetype = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Changetype_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Changetype_Filter>>>;
};

/** Root filter for content types. */
export type Root_Ref = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Ref_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Ref_Filter>>>;
};

/** Root filter for content types. */
export type Root_SitecoreCloud = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SitecoreCloud_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SitecoreCloud_Filter>>>;
};

/** Root filter for content types. */
export type Root_SitecoreProduct = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SitecoreProduct_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SitecoreProduct_Filter>>>;
};

/** Root filter for content types. */
export type Root_Status = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Status_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Status_Filter>>>;
};

/** This is a sample Content Type representing an Article */
export type SampleArticle = ContentItem & {
  /** Main content of this article */
  body: Maybe<Scalars['JSON']['output']>;
  /** Specify if this article belongs to the news section */
  isNews: Maybe<Scalars['Boolean']['output']>;
  /** Target date of the Issue that this article will be included */
  issueDate: Maybe<Scalars['UTCDateTime']['output']>;
  /** Number of the Issue that this article will be included */
  issueNumber: Maybe<Scalars['Float']['output']>;
  /** Related Articles in the See Also section */
  relatedArticles: Maybe<ContentItemList>;
  /** Summary of this article */
  summary: Maybe<Scalars['String']['output']>;
  system: System;
  /** Title */
  title: Maybe<Scalars['String']['output']>;
};

/** This is a sample Content Type representing an Article */
export type SampleArticleRelatedArticlesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<SampleArticle_RelatedArticles_Relations>;
  minimumPageSize?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<ContentItemSortingOptions>;
};

/** Represents a list of content items. */
export type SampleArticleList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<SampleArticle>>>;
};

/** GraphQL filter for content items. */
export type SampleArticle_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SampleArticle_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SampleArticle_Filter>>>;
  isNews: InputMaybe<BooleanFilterInput>;
  issueDate: InputMaybe<DateTimeFilterInput>;
  issueNumber: InputMaybe<DoubleFilterInput>;
  relatedArticles: InputMaybe<ReferenceFilterInput>;
  summary: InputMaybe<StringFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
  title: InputMaybe<StringFilterInput>;
};

/** GraphQL root filter for content items references. */
export type SampleArticle_RelatedArticles_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SampleArticle_RelatedArticles_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SampleArticle_RelatedArticles_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
};

/** Represents the input type for filtering references in GraphQL. */
export type SampleArticle_RelatedArticles_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SampleArticle_RelatedArticles_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SampleArticle_RelatedArticles_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  changelog: InputMaybe<Changelog_Filter>;
  changetype: InputMaybe<Changetype_Filter>;
  ref: InputMaybe<Ref_Filter>;
  sampleArticle: InputMaybe<SampleArticle_Filter>;
  sitecoreCloud: InputMaybe<SitecoreCloud_Filter>;
  sitecoreProduct: InputMaybe<SitecoreProduct_Filter>;
  status: InputMaybe<Status_Filter>;
  system: InputMaybe<SystemTypeFilterInput>;
  upload: InputMaybe<Upload_Filter>;
  xMCMedia: InputMaybe<XmcMedia_Filter>;
};

/** This type allows specifying a search over a Select field. */
export type SelectFieldSearchInput = {
  /** Match if the ID is present in the list of selected terms. */
  id: InputMaybe<Scalars['String']['input']>;
};

/** GraphQL filter for select fields. */
export type SelectFilterInput = {
  /** Checks if the selection includes the specified value. */
  contains: InputMaybe<SelectFieldSearchInput>;
  /** Checks if the selection does not include the specified value. */
  notContains: InputMaybe<SelectFieldSearchInput>;
};

export type SitecoreCloud = ContentItem & {
  cloudName: Maybe<Scalars['String']['output']>;
  system: System;
};

/** Represents a list of content items. */
export type SitecoreCloudList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<SitecoreCloud>>>;
};

/** Enum type used for sorting in QueryMany. */
export enum SitecoreCloudSortingOptions {
  CloudNameAsc = 'CLOUD_NAME_ASC',
  CloudNameDesc = 'CLOUD_NAME_DESC',
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  SystemCreatedByAsc = 'SYSTEM_CREATED_BY_ASC',
  SystemCreatedByDesc = 'SYSTEM_CREATED_BY_DESC',
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  SystemIdAsc = 'SYSTEM_ID_ASC',
  SystemIdDesc = 'SYSTEM_ID_DESC',
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  SystemUpdatedByAsc = 'SYSTEM_UPDATED_BY_ASC',
  SystemUpdatedByDesc = 'SYSTEM_UPDATED_BY_DESC',
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
}

/** GraphQL filter for content items. */
export type SitecoreCloud_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SitecoreCloud_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SitecoreCloud_Filter>>>;
  cloudName: InputMaybe<StringFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
};

export type SitecoreProduct = ContentItem & {
  abbreviation: Maybe<Scalars['String']['output']>;
  productDescription: Maybe<Scalars['String']['output']>;
  productIcon: Maybe<ContentItemList>;
  /** Image URL to the dark product icon */
  productIconDark: Maybe<Scalars['String']['output']>;
  /** Image URL to the light product icon */
  productIconLight: Maybe<Scalars['String']['output']>;
  productName: Maybe<Scalars['String']['output']>;
  sitecoreCloud: Maybe<ContentItemList>;
  system: System;
};

export type SitecoreProductProductIconArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<SitecoreProduct_ProductIcon_Relations>;
  minimumPageSize?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<ContentItemSortingOptions>;
};

export type SitecoreProductSitecoreCloudArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<SitecoreProduct_SitecoreCloud_Relations>;
  minimumPageSize?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<ContentItemSortingOptions>;
};

/** Represents a list of content items. */
export type SitecoreProductList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<SitecoreProduct>>>;
};

/** Enum type used for sorting in QueryMany. */
export enum SitecoreProductSortingOptions {
  AbbreviationAsc = 'ABBREVIATION_ASC',
  AbbreviationDesc = 'ABBREVIATION_DESC',
  ProductDescriptionAsc = 'PRODUCT_DESCRIPTION_ASC',
  ProductDescriptionDesc = 'PRODUCT_DESCRIPTION_DESC',
  ProductIconDarkAsc = 'PRODUCT_ICON_DARK_ASC',
  ProductIconDarkDesc = 'PRODUCT_ICON_DARK_DESC',
  ProductIconLightAsc = 'PRODUCT_ICON_LIGHT_ASC',
  ProductIconLightDesc = 'PRODUCT_ICON_LIGHT_DESC',
  ProductNameAsc = 'PRODUCT_NAME_ASC',
  ProductNameDesc = 'PRODUCT_NAME_DESC',
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  SystemCreatedByAsc = 'SYSTEM_CREATED_BY_ASC',
  SystemCreatedByDesc = 'SYSTEM_CREATED_BY_DESC',
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  SystemIdAsc = 'SYSTEM_ID_ASC',
  SystemIdDesc = 'SYSTEM_ID_DESC',
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  SystemUpdatedByAsc = 'SYSTEM_UPDATED_BY_ASC',
  SystemUpdatedByDesc = 'SYSTEM_UPDATED_BY_DESC',
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
}

/** GraphQL filter for content items. */
export type SitecoreProduct_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SitecoreProduct_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SitecoreProduct_Filter>>>;
  abbreviation: InputMaybe<StringFilterInput>;
  productDescription: InputMaybe<StringFilterInput>;
  productIcon: InputMaybe<ReferenceFilterInput>;
  productIconDark: InputMaybe<StringFilterInput>;
  productIconLight: InputMaybe<StringFilterInput>;
  productName: InputMaybe<StringFilterInput>;
  sitecoreCloud: InputMaybe<ReferenceFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
};

/** GraphQL root filter for content items references. */
export type SitecoreProduct_ProductIcon_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SitecoreProduct_ProductIcon_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SitecoreProduct_ProductIcon_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
};

/** Represents the input type for filtering references in GraphQL. */
export type SitecoreProduct_ProductIcon_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SitecoreProduct_ProductIcon_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SitecoreProduct_ProductIcon_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  changelog: InputMaybe<Changelog_Filter>;
  changetype: InputMaybe<Changetype_Filter>;
  ref: InputMaybe<Ref_Filter>;
  sampleArticle: InputMaybe<SampleArticle_Filter>;
  sitecoreCloud: InputMaybe<SitecoreCloud_Filter>;
  sitecoreProduct: InputMaybe<SitecoreProduct_Filter>;
  status: InputMaybe<Status_Filter>;
  system: InputMaybe<SystemTypeFilterInput>;
  upload: InputMaybe<Upload_Filter>;
  xMCMedia: InputMaybe<XmcMedia_Filter>;
};

/** GraphQL root filter for content items references. */
export type SitecoreProduct_SitecoreCloud_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SitecoreProduct_SitecoreCloud_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SitecoreProduct_SitecoreCloud_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
};

/** Represents the input type for filtering references in GraphQL. */
export type SitecoreProduct_SitecoreCloud_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<SitecoreProduct_SitecoreCloud_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<SitecoreProduct_SitecoreCloud_SampleArticle__Upload__XmcMedia__Ref__SitecoreCloud__Changetype__Status__SitecoreProduct__Changelog_Relations>>>;
  changelog: InputMaybe<Changelog_Filter>;
  changetype: InputMaybe<Changetype_Filter>;
  ref: InputMaybe<Ref_Filter>;
  sampleArticle: InputMaybe<SampleArticle_Filter>;
  sitecoreCloud: InputMaybe<SitecoreCloud_Filter>;
  sitecoreProduct: InputMaybe<SitecoreProduct_Filter>;
  status: InputMaybe<Status_Filter>;
  system: InputMaybe<SystemTypeFilterInput>;
  upload: InputMaybe<Upload_Filter>;
  xMCMedia: InputMaybe<XmcMedia_Filter>;
};

export type Status = ContentItem & {
  description: Maybe<Scalars['String']['output']>;
  /** Identifier used in code */
  identifier: Maybe<Scalars['String']['output']>;
  system: System;
};

/** Represents a list of content items. */
export type StatusList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<Status>>>;
};

/** Enum type used for sorting in QueryMany. */
export enum StatusSortingOptions {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdentifierAsc = 'IDENTIFIER_ASC',
  IdentifierDesc = 'IDENTIFIER_DESC',
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  SystemCreatedByAsc = 'SYSTEM_CREATED_BY_ASC',
  SystemCreatedByDesc = 'SYSTEM_CREATED_BY_DESC',
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  SystemIdAsc = 'SYSTEM_ID_ASC',
  SystemIdDesc = 'SYSTEM_ID_DESC',
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  SystemUpdatedByAsc = 'SYSTEM_UPDATED_BY_ASC',
  SystemUpdatedByDesc = 'SYSTEM_UPDATED_BY_DESC',
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
}

/** GraphQL filter for content items. */
export type Status_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Status_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Status_Filter>>>;
  description: InputMaybe<StringFilterInput>;
  identifier: InputMaybe<StringFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
};

/** GraphQL filter for string fields. */
export type StringFilterInput = {
  /** Specifies whether the string comparison should be case-sensitive or not. */
  case: InputMaybe<CaseSensitive>;
  /** Checks if the value contains the specified text. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value contains all of the specified texts. */
  containsAll: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value contains any of the specified texts. */
  containsAny: InputMaybe<Array<Scalars['String']['input']>>;
  /** Matches values that end with the specified text. */
  endsWith: InputMaybe<Scalars['String']['input']>;
  /** Matches the specified value. */
  equals: InputMaybe<Scalars['String']['input']>;
  /** Matches any of the specified values. */
  equalsAny: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value does not contain the specified text. */
  notContains: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value does not contain all of the specified texts. */
  notContainsAll: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value does not contain any of the specified texts. */
  notContainsAny: InputMaybe<Array<Scalars['String']['input']>>;
  /** Excludes values that end with the specified text. */
  notEndsWith: InputMaybe<Scalars['String']['input']>;
  /** Does not match the specified value. */
  notEquals: InputMaybe<Scalars['String']['input']>;
  /** Does not match any of the specified values. */
  notEqualsAny: InputMaybe<Array<Scalars['String']['input']>>;
  /** Excludes values that start with the specified text. */
  notStartsWith: InputMaybe<Scalars['String']['input']>;
  /** Matches values that start with the specified text. */
  startsWith: InputMaybe<Scalars['String']['input']>;
};

/** GraphQL filter for string list fields. */
export type StringListFilterInput = {
  /** Checks if the list contains the specified value. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** Checks if the list contains all of the specified values. */
  containsAll: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the list contains any of the specified values. */
  containsAny: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the list does not contain the specified value. */
  notContains: InputMaybe<Scalars['String']['input']>;
  /** Checks if the list does not contain all of the specified values. */
  notContainsAll: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the list does not contain any of the specified values. */
  notContainsAny: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Represents system properties. */
export type System = SystemItem & {
  contentType: ContentTypeSummary;
  createdAt: Scalars['UTCDateTime']['output'];
  createdBy: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  label: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  publishStatus: PublishStatus;
  updatedAt: Scalars['UTCDateTime']['output'];
  updatedBy: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

/** Represents common system fields for content types. */
export type SystemItem = {
  /** The content type information of this content item. */
  contentType: ContentTypeSummary;
  /** The timestamp when the content item was created. */
  createdAt: Scalars['UTCDateTime']['output'];
  /** The user who created the content item. */
  createdBy: Scalars['String']['output'];
  /** The ID of the content item. */
  id: Scalars['ID']['output'];
  /** The locale of the content item. */
  locale: Scalars['String']['output'];
  /** The name of the content item. */
  name: Scalars['String']['output'];
  /** The publishing status of the content item. */
  publishStatus: PublishStatus;
  /** The timestamp when the content item was last updated. */
  updatedAt: Scalars['UTCDateTime']['output'];
  /** The user who last updated the content item. */
  updatedBy: Scalars['String']['output'];
  /** The version of the content item. */
  version: Scalars['Int']['output'];
};

/** GraphQL filter for system types. */
export type SystemTypeFilterInput = {
  contentType: InputMaybe<ContentTypeSummary_Filter>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  createdBy: InputMaybe<StringFilterInput>;
  id: InputMaybe<StringFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  name: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  updatedBy: InputMaybe<StringFilterInput>;
  version: InputMaybe<DoubleFilterInput>;
  versionTags: InputMaybe<StringListFilterInput>;
};

/** Represents a taxonomy. */
export type Taxonomy = {
  system: Maybe<TaxonomySystemTypeType>;
  /** The terms in the taxonomy. */
  terms: Maybe<TaxonomyTermList>;
};

/** Represents a taxonomy. */
export type TaxonomyTermsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  minimumPageSize?: Scalars['Int']['input'];
};

/** Represents a list of taxonomies. */
export type TaxonomyList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of taxonomies. */
  results: Maybe<Array<Maybe<Taxonomy>>>;
};

export type TaxonomySystemTypeType = {
  createdAt: Scalars['UTCDateTime']['output'];
  createdBy: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  label: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  publishStatus: PublishStatus;
  updatedAt: Scalars['UTCDateTime']['output'];
  updatedBy: Scalars['String']['output'];
  version: Scalars['Int']['output'];
};

/** Represents a single taxonomy term. */
export type TaxonomyTerm = {
  /** The ID of the taxonomy term. */
  id: Scalars['ID']['output'];
  /** The label of the taxonomy term. */
  label: Maybe<Scalars['String']['output']>;
  /** The name of the taxonomy term. */
  name: Scalars['String']['output'];
};

/** Represents a list of taxonomy terms. */
export type TaxonomyTermList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of taxonomy terms. */
  results: Maybe<Array<Maybe<TaxonomyTerm>>>;
};

/** Content type for uploading Media via the Worksets API */
export type Upload = ContentItem &
  XmcMediaFragment & {
    /** The relative path for creation of the public link. */
    mms_relativePath: Maybe<Scalars['String']['output']>;
    system: System;
    /** A content type that has a media fragment associated with it. */
    target_content_type_id: Maybe<Scalars['String']['output']>;
  };

/** Represents a list of content items. */
export type UploadList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<Upload>>>;
};

/** Enum type used for sorting in QueryMany. */
export enum UploadSortingOptions {
  MmsRelativePathAsc = 'MMS_RELATIVE_PATH_ASC',
  MmsRelativePathDesc = 'MMS_RELATIVE_PATH_DESC',
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  SystemCreatedByAsc = 'SYSTEM_CREATED_BY_ASC',
  SystemCreatedByDesc = 'SYSTEM_CREATED_BY_DESC',
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  SystemIdAsc = 'SYSTEM_ID_ASC',
  SystemIdDesc = 'SYSTEM_ID_DESC',
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  SystemUpdatedByAsc = 'SYSTEM_UPDATED_BY_ASC',
  SystemUpdatedByDesc = 'SYSTEM_UPDATED_BY_DESC',
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
  TargetContentTypeIdAsc = 'TARGET_CONTENT_TYPE_ID_ASC',
  TargetContentTypeIdDesc = 'TARGET_CONTENT_TYPE_ID_DESC',
}

/** GraphQL filter for content items. */
export type Upload_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<Upload_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<Upload_Filter>>>;
  mms_relativePath: InputMaybe<StringFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
  target_content_type_id: InputMaybe<StringFilterInput>;
};

/** Media content type to create media items. */
export type XmcMedia = ContentItem &
  MediaLibraryFragment &
  XmcMediaFragment & {
    /** The size of the file. */
    media_fileSize: Maybe<Scalars['Float']['output']>;
    /** The public link to use for the media asset. This field may be automatically updated by publishing or archiving the media asset. */
    media_publicLink: Maybe<Scalars['String']['output']>;
    /** The thumbnail link to use for the media asset. */
    media_thumbnailLink: Maybe<Scalars['String']['output']>;
    /** The file type of the media asset. */
    media_type: Maybe<Array<Maybe<TaxonomyTerm>>>;
    /** The relative path for creation of the public link. */
    mms_relativePath: Maybe<Scalars['String']['output']>;
    system: System;
  };

/** Represents common interface for all content types containing XMCMediaFragment fragment. */
export type XmcMediaFragment = {
  /** The relative path for creation of the public link. */
  mms_relativePath: Maybe<Scalars['String']['output']>;
  /** The system fields of the content item. */
  system: Maybe<System>;
};

/** Represents an implementation for XMCMediaFragment fragment interface. */
export type XmcMediaFragmentImpl = ContentItem &
  XmcMediaFragment & {
    /** The relative path for creation of the public link. */
    mms_relativePath: Maybe<Scalars['String']['output']>;
    system: System;
  };

/** Represents a list of content items. */
export type XmcMediaFragmentList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<XmcMediaFragment>>>;
};

/** Enum type used for sorting in FragmentMany query. */
export enum XmcMediaFragmentSortingOptions {
  MmsRelativePathAsc = 'MMS_RELATIVE_PATH_ASC',
  MmsRelativePathDesc = 'MMS_RELATIVE_PATH_DESC',
  SystemCreatedAsc = 'SYSTEM_CREATED_ASC',
  SystemCreatedByAsc = 'SYSTEM_CREATED_BY_ASC',
  SystemCreatedByDesc = 'SYSTEM_CREATED_BY_DESC',
  SystemCreatedDesc = 'SYSTEM_CREATED_DESC',
  SystemIdAsc = 'SYSTEM_ID_ASC',
  SystemIdDesc = 'SYSTEM_ID_DESC',
  SystemLocaleAsc = 'SYSTEM_LOCALE_ASC',
  SystemLocaleDesc = 'SYSTEM_LOCALE_DESC',
  SystemNameAsc = 'SYSTEM_NAME_ASC',
  SystemNameDesc = 'SYSTEM_NAME_DESC',
  SystemStatusAsc = 'SYSTEM_STATUS_ASC',
  SystemStatusDesc = 'SYSTEM_STATUS_DESC',
  SystemUpdatedAsc = 'SYSTEM_UPDATED_ASC',
  SystemUpdatedByAsc = 'SYSTEM_UPDATED_BY_ASC',
  SystemUpdatedByDesc = 'SYSTEM_UPDATED_BY_DESC',
  SystemUpdatedDesc = 'SYSTEM_UPDATED_DESC',
  SystemVersionAsc = 'SYSTEM_VERSION_ASC',
  SystemVersionDesc = 'SYSTEM_VERSION_DESC',
}

/** GraphQL filter for fragments. */
export type XmcMediaFragment_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<XmcMediaFragment_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<XmcMediaFragment_Filter>>>;
  mms_relativePath: InputMaybe<StringFilterInput>;
  system: InputMaybe<SystemTypeFilterInput>;
};

/** Represents a list of content items. */
export type XmcMediaList = {
  /** The pagination cursor. */
  cursor: Maybe<Scalars['String']['output']>;
  /** Indicates whether more items are available. */
  hasMore: Maybe<Scalars['Boolean']['output']>;
  /** The minimum page size. */
  minimumPageSize: Scalars['Int']['output'];
  /** The list of content items. */
  results: Maybe<Array<Maybe<XmcMedia>>>;
};

/** GraphQL filter for content items. */
export type XmcMedia_Filter = {
  /** Combines multiple filter conditions. */
  AND: InputMaybe<Array<InputMaybe<XmcMedia_Filter>>>;
  /** Combines multiple filter conditions. */
  OR: InputMaybe<Array<InputMaybe<XmcMedia_Filter>>>;
  system: InputMaybe<SystemTypeFilterInput>;
};

export type ChangeTypeFragment = { changeType: string | null; system: { id: string; name: string } };

export type ChangelogEntryFragment = {
  title: string | null;
  description: { [key: string]: any } | null;
  fullArticle: { [key: string]: any } | null;
  readMoreLink: string | null;
  breakingChange: boolean | null;
  x_version: string | null;
  releaseDate: any | null;
  scheduled: boolean | null;
  system: { id: string; name: string };
  image: { hasMore: boolean | null; cursor: string | null; results: Array<{ media_publicLink: string | null; media_type: Array<{ name: string } | null> | null; system: { id: string; name: string } } | {} | null> | null } | null;
  sitecoreProduct: { results: Array<{ productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
  changeType: { results: Array<{ changeType: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
  status: { results: Array<{ description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } } | {} | null> | null } | null;
};

export type MediaFragment = { media_publicLink: string | null; media_type: Array<{ name: string } | null> | null; system: { id: string; name: string } };

export type ProductFragment = { productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null; system: { id: string; name: string } };

export type StatusFragment = { description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } };

export type GetAllChangetypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllChangetypesQuery = { manyChangetype: { hasMore: boolean | null; cursor: string | null; results: Array<{ changeType: string | null; system: { id: string; name: string } } | null> | null } | null };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProductsQuery = {
  manySitecoreProduct: {
    hasMore: boolean | null;
    cursor: string | null;
    results: Array<{ productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null; system: { id: string; name: string } } | null> | null;
  } | null;
};

export type GetAllStatusQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllStatusQuery = {
  manyStatus: { hasMore: boolean | null; cursor: string | null; results: Array<{ description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } } | null> | null } | null;
};

export type GetLatestEntriesQueryVariables = Exact<{
  first?: Scalars['Int']['input'];
  after?: Scalars['String']['input'];
  date: Scalars['CustomDateTime']['input'];
}>;

export type GetLatestEntriesQuery = {
  changelog: {
    hasMore: boolean | null;
    cursor: string | null;
    results: Array<{
      title: string | null;
      description: { [key: string]: any } | null;
      fullArticle: { [key: string]: any } | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      x_version: string | null;
      releaseDate: any | null;
      scheduled: boolean | null;
      system: { id: string; name: string };
      image: { hasMore: boolean | null; cursor: string | null; results: Array<{ media_publicLink: string | null; media_type: Array<{ name: string } | null> | null; system: { id: string; name: string } } | {} | null> | null } | null;
      sitecoreProduct: { results: Array<{ productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      changeType: { results: Array<{ changeType: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      status: { results: Array<{ description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } } | {} | null> | null } | null;
    } | null> | null;
  } | null;
};

export type GetNumberOfEntriesByProductQueryVariables = Exact<{
  productId: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type GetNumberOfEntriesByProductQuery = { changelog: { hasMore: boolean | null; results: Array<{ system: { id: string } } | null> | null } | null };

export type GetStatusByIdentifierQueryVariables = Exact<{
  identifier: Scalars['ID']['input'];
}>;

export type GetStatusByIdentifierQuery = { status: { description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } } | null };

export type SearchByDateQueryVariables = Exact<{
  startDate: Scalars['CustomDateTime']['input'];
  endDate: Scalars['CustomDateTime']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchByDateQuery = {
  changelog: {
    hasMore: boolean | null;
    cursor: string | null;
    results: Array<{
      title: string | null;
      description: { [key: string]: any } | null;
      fullArticle: { [key: string]: any } | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      x_version: string | null;
      releaseDate: any | null;
      scheduled: boolean | null;
      system: { id: string; name: string };
      image: { hasMore: boolean | null; cursor: string | null; results: Array<{ media_publicLink: string | null; media_type: Array<{ name: string } | null> | null; system: { id: string; name: string } } | {} | null> | null } | null;
      sitecoreProduct: { results: Array<{ productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      changeType: { results: Array<{ changeType: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      status: { results: Array<{ description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } } | {} | null> | null } | null;
    } | null> | null;
  } | null;
};

export type SearchByProductQueryVariables = Exact<{
  date: InputMaybe<Scalars['CustomDateTime']['input']>;
  productId: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  changeTypeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchByProductQuery = {
  changelog: {
    hasMore: boolean | null;
    cursor: string | null;
    results: Array<{
      title: string | null;
      description: { [key: string]: any } | null;
      fullArticle: { [key: string]: any } | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      x_version: string | null;
      releaseDate: any | null;
      scheduled: boolean | null;
      system: { id: string; name: string };
      image: { hasMore: boolean | null; cursor: string | null; results: Array<{ media_publicLink: string | null; media_type: Array<{ name: string } | null> | null; system: { id: string; name: string } } | {} | null> | null } | null;
      sitecoreProduct: { results: Array<{ productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      changeType: { results: Array<{ changeType: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      status: { results: Array<{ description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } } | {} | null> | null } | null;
    } | null> | null;
  } | null;
};

export type SearchByProductsAndChangeTypesQueryVariables = Exact<{
  date: InputMaybe<Scalars['CustomDateTime']['input']>;
  productIds: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  changeTypeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchByProductsAndChangeTypesQuery = {
  changelog: {
    hasMore: boolean | null;
    cursor: string | null;
    results: Array<{
      title: string | null;
      description: { [key: string]: any } | null;
      fullArticle: { [key: string]: any } | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      x_version: string | null;
      releaseDate: any | null;
      scheduled: boolean | null;
      system: { id: string; name: string };
      image: { hasMore: boolean | null; cursor: string | null; results: Array<{ media_publicLink: string | null; media_type: Array<{ name: string } | null> | null; system: { id: string; name: string } } | {} | null> | null } | null;
      sitecoreProduct: { results: Array<{ productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      changeType: { results: Array<{ changeType: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      status: { results: Array<{ description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } } | {} | null> | null } | null;
    } | null> | null;
  } | null;
};

export type SearchByProductsAndChangeTypesAndBreakingChangeQueryVariables = Exact<{
  date: InputMaybe<Scalars['CustomDateTime']['input']>;
  productIds: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  changeTypeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  breaking: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type SearchByProductsAndChangeTypesAndBreakingChangeQuery = {
  changelog: {
    hasMore: boolean | null;
    cursor: string | null;
    results: Array<{
      title: string | null;
      description: { [key: string]: any } | null;
      fullArticle: { [key: string]: any } | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      x_version: string | null;
      releaseDate: any | null;
      scheduled: boolean | null;
      system: { id: string; name: string };
      image: { hasMore: boolean | null; cursor: string | null; results: Array<{ media_publicLink: string | null; media_type: Array<{ name: string } | null> | null; system: { id: string; name: string } } | {} | null> | null } | null;
      sitecoreProduct: { results: Array<{ productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      changeType: { results: Array<{ changeType: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      status: { results: Array<{ description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } } | {} | null> | null } | null;
    } | null> | null;
  } | null;
};

export type SearchByTitleQueryVariables = Exact<{
  date: InputMaybe<Scalars['CustomDateTime']['input']>;
  productId: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type SearchByTitleQuery = {
  data: {
    hasMore: boolean | null;
    cursor: string | null;
    results: Array<{
      title: string | null;
      description: { [key: string]: any } | null;
      fullArticle: { [key: string]: any } | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      x_version: string | null;
      releaseDate: any | null;
      scheduled: boolean | null;
      system: { id: string; name: string };
      image: { hasMore: boolean | null; cursor: string | null; results: Array<{ media_publicLink: string | null; media_type: Array<{ name: string } | null> | null; system: { id: string; name: string } } | {} | null> | null } | null;
      sitecoreProduct: { results: Array<{ productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      changeType: { results: Array<{ changeType: string | null; system: { id: string; name: string } } | {} | null> | null } | null;
      status: { results: Array<{ description: string | null; identifier: string | null; system: { id: string; name: string; label: string | null } } | {} | null> | null } | null;
    } | null> | null;
  } | null;
};

export class TypedDocumentString<TResult, TVariables> extends String implements DocumentTypeDecoration<TResult, TVariables> {
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(
    private value: string,
    public __meta__?: Record<string, any>
  ) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const MediaFragmentDoc = new TypedDocumentString(
  `
    fragment media on XMCMedia {
  system {
    id
    name
  }
  ... on XMCMedia {
    media_publicLink
    media_type {
      name
    }
  }
}
    `,
  { fragmentName: 'media' }
) as unknown as TypedDocumentString<MediaFragment, unknown>;
export const ProductFragmentDoc = new TypedDocumentString(
  `
    fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
    `,
  { fragmentName: 'product' }
) as unknown as TypedDocumentString<ProductFragment, unknown>;
export const ChangeTypeFragmentDoc = new TypedDocumentString(
  `
    fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}
    `,
  { fragmentName: 'changeType' }
) as unknown as TypedDocumentString<ChangeTypeFragment, unknown>;
export const StatusFragmentDoc = new TypedDocumentString(
  `
    fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}
    `,
  { fragmentName: 'status' }
) as unknown as TypedDocumentString<StatusFragment, unknown>;
export const ChangelogEntryFragmentDoc = new TypedDocumentString(
  `
    fragment changelogEntry on Changelog {
  system {
    id
    name
  }
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  x_version
  releaseDate
  scheduled
  image {
    hasMore
    cursor
    results {
      ...media
    }
  }
  sitecoreProduct {
    results {
      ...product
    }
  }
  changeType {
    results {
      ...changeType
    }
  }
  status {
    results {
      ...status
    }
  }
}
    fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}
fragment media on XMCMedia {
  system {
    id
    name
  }
  ... on XMCMedia {
    media_publicLink
    media_type {
      name
    }
  }
}
fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}`,
  { fragmentName: 'changelogEntry' }
) as unknown as TypedDocumentString<ChangelogEntryFragment, unknown>;
export const GetAllChangetypesDocument = new TypedDocumentString(`
    query GetAllChangetypes {
  manyChangetype {
    hasMore
    cursor
    results {
      ...changeType
    }
  }
}
    fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}`) as unknown as TypedDocumentString<GetAllChangetypesQuery, GetAllChangetypesQueryVariables>;
export const GetAllProductsDocument = new TypedDocumentString(`
    query GetAllProducts {
  manySitecoreProduct(minimumPageSize: 25) {
    hasMore
    cursor
    results {
      ...product
    }
  }
}
    fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}`) as unknown as TypedDocumentString<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetAllStatusDocument = new TypedDocumentString(`
    query GetAllStatus {
  manyStatus {
    hasMore
    cursor
    results {
      ...status
    }
  }
}
    fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}`) as unknown as TypedDocumentString<GetAllStatusQuery, GetAllStatusQueryVariables>;
export const GetLatestEntriesDocument = new TypedDocumentString(`
    query GetLatestEntries($first: Int! = 5, $after: String! = "", $date: CustomDateTime!) {
  changelog: manyChangelog(
    orderBy: SYSTEM_UPDATED_DESC
    minimumPageSize: $first
    after: $after
    filter: {AND: [{releaseDate: {lessThan: $date}}]}
  ) {
    hasMore
    cursor
    results {
      ...changelogEntry
    }
  }
}
    fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}
fragment changelogEntry on Changelog {
  system {
    id
    name
  }
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  x_version
  releaseDate
  scheduled
  image {
    hasMore
    cursor
    results {
      ...media
    }
  }
  sitecoreProduct {
    results {
      ...product
    }
  }
  changeType {
    results {
      ...changeType
    }
  }
  status {
    results {
      ...status
    }
  }
}
fragment media on XMCMedia {
  system {
    id
    name
  }
  ... on XMCMedia {
    media_publicLink
    media_type {
      name
    }
  }
}
fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}`) as unknown as TypedDocumentString<GetLatestEntriesQuery, GetLatestEntriesQueryVariables>;
export const GetNumberOfEntriesByProductDocument = new TypedDocumentString(`
    query getNumberOfEntriesByProduct($productId: [String!]!) {
  changelog: manyChangelog(
    minimumPageSize: 200
    filter: {AND: [{sitecoreProduct: {containsAny: $productId}}]}
  ) {
    hasMore
    results {
      system {
        id
      }
    }
  }
}
    `) as unknown as TypedDocumentString<GetNumberOfEntriesByProductQuery, GetNumberOfEntriesByProductQueryVariables>;
export const GetStatusByIdentifierDocument = new TypedDocumentString(`
    query GetStatusByIdentifier($identifier: ID!) {
  status(id: $identifier, locale: "") {
    ...status
  }
}
    fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}`) as unknown as TypedDocumentString<GetStatusByIdentifierQuery, GetStatusByIdentifierQueryVariables>;
export const SearchByDateDocument = new TypedDocumentString(`
    query SearchByDate($startDate: CustomDateTime!, $endDate: CustomDateTime!, $first: Int = 5, $after: String = "") {
  changelog: manyChangelog(
    minimumPageSize: $first
    after: $after
    filter: {AND: [{releaseDate: {lessThan: $endDate}}, {releaseDate: {greaterThan: $startDate}}]}
  ) {
    hasMore
    cursor
    results {
      ...changelogEntry
    }
  }
}
    fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}
fragment changelogEntry on Changelog {
  system {
    id
    name
  }
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  x_version
  releaseDate
  scheduled
  image {
    hasMore
    cursor
    results {
      ...media
    }
  }
  sitecoreProduct {
    results {
      ...product
    }
  }
  changeType {
    results {
      ...changeType
    }
  }
  status {
    results {
      ...status
    }
  }
}
fragment media on XMCMedia {
  system {
    id
    name
  }
  ... on XMCMedia {
    media_publicLink
    media_type {
      name
    }
  }
}
fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByDateQuery, SearchByDateQueryVariables>;
export const SearchByProductDocument = new TypedDocumentString(`
    query searchByProduct($date: CustomDateTime, $productId: [String!], $changeTypeIds: [String!] = [], $first: Int = 5, $after: String = "") {
  changelog: manyChangelog(
    orderBy: RELEASE_DATE_DESC
    minimumPageSize: $first
    after: $after
    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productId}}, {changeType: {containsAny: $changeTypeIds}}]}
  ) {
    results {
      ...changelogEntry
    }
    hasMore
    cursor
  }
}
    fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}
fragment changelogEntry on Changelog {
  system {
    id
    name
  }
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  x_version
  releaseDate
  scheduled
  image {
    hasMore
    cursor
    results {
      ...media
    }
  }
  sitecoreProduct {
    results {
      ...product
    }
  }
  changeType {
    results {
      ...changeType
    }
  }
  status {
    results {
      ...status
    }
  }
}
fragment media on XMCMedia {
  system {
    id
    name
  }
  ... on XMCMedia {
    media_publicLink
    media_type {
      name
    }
  }
}
fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByProductQuery, SearchByProductQueryVariables>;
export const SearchByProductsAndChangeTypesDocument = new TypedDocumentString(`
    query searchByProductsAndChangeTypes($date: CustomDateTime, $productIds: [String!], $changeTypeIds: [String!] = [], $first: Int = 5, $after: String = "") {
  changelog: manyChangelog(
    orderBy: RELEASE_DATE_DESC
    minimumPageSize: $first
    after: $after
    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productIds}}, {changeType: {containsAny: $changeTypeIds}}]}
  ) {
    results {
      ...changelogEntry
    }
    hasMore
    cursor
  }
}
    fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}
fragment changelogEntry on Changelog {
  system {
    id
    name
  }
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  x_version
  releaseDate
  scheduled
  image {
    hasMore
    cursor
    results {
      ...media
    }
  }
  sitecoreProduct {
    results {
      ...product
    }
  }
  changeType {
    results {
      ...changeType
    }
  }
  status {
    results {
      ...status
    }
  }
}
fragment media on XMCMedia {
  system {
    id
    name
  }
  ... on XMCMedia {
    media_publicLink
    media_type {
      name
    }
  }
}
fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables>;
export const SearchByProductsAndChangeTypesAndBreakingChangeDocument = new TypedDocumentString(`
    query searchByProductsAndChangeTypesAndBreakingChange($date: CustomDateTime, $productIds: [String!], $changeTypeIds: [String!] = [], $first: Int = 5, $after: String = "", $breaking: Boolean) {
  changelog: manyChangelog(
    orderBy: RELEASE_DATE_DESC
    minimumPageSize: $first
    after: $after
    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productIds}}, {changeType: {containsAny: $changeTypeIds}}, {breakingChange: {equals: $breaking}}]}
  ) {
    results {
      ...changelogEntry
    }
    hasMore
    cursor
  }
}
    fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}
fragment changelogEntry on Changelog {
  system {
    id
    name
  }
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  x_version
  releaseDate
  scheduled
  image {
    hasMore
    cursor
    results {
      ...media
    }
  }
  sitecoreProduct {
    results {
      ...product
    }
  }
  changeType {
    results {
      ...changeType
    }
  }
  status {
    results {
      ...status
    }
  }
}
fragment media on XMCMedia {
  system {
    id
    name
  }
  ... on XMCMedia {
    media_publicLink
    media_type {
      name
    }
  }
}
fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByProductsAndChangeTypesAndBreakingChangeQuery, SearchByProductsAndChangeTypesAndBreakingChangeQueryVariables>;
export const SearchByTitleDocument = new TypedDocumentString(`
    query searchByTitle($date: CustomDateTime, $productId: [String!]) {
  data: manyChangelog(
    orderBy: RELEASE_DATE_DESC
    minimumPageSize: 1
    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productId}}]}
  ) {
    results {
      ...changelogEntry
    }
    hasMore
    cursor
  }
}
    fragment changeType on Changetype {
  system {
    id
    name
  }
  changeType
}
fragment changelogEntry on Changelog {
  system {
    id
    name
  }
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  x_version
  releaseDate
  scheduled
  image {
    hasMore
    cursor
    results {
      ...media
    }
  }
  sitecoreProduct {
    results {
      ...product
    }
  }
  changeType {
    results {
      ...changeType
    }
  }
  status {
    results {
      ...status
    }
  }
}
fragment media on XMCMedia {
  system {
    id
    name
  }
  ... on XMCMedia {
    media_publicLink
    media_type {
      name
    }
  }
}
fragment product on SitecoreProduct {
  system {
    id
    name
  }
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  system {
    id
    name
    label
  }
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByTitleQuery, SearchByTitleQueryVariables>;
