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
  DateTime: { input: Date; output: Date };
  Json: { input: any; output: any };
  Long: { input: any; output: any };
  MultiplierPath: { input: any; output: any };
};

export type Changelog = {
  __sysCreatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysCreatedBy: Maybe<Scalars['String']['output']>;
  __sysUpdatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysUpdatedBy: Maybe<Scalars['String']['output']>;
  __sysVersion: Maybe<Scalars['String']['output']>;
  breakingChange: Maybe<Scalars['Boolean']['output']>;
  changeType: Changelog__ChangeType_Parent_Types_List;
  description: Maybe<Scalars['Json']['output']>;
  fullArticle: Maybe<Scalars['Json']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  image: MediaList;
  issueNumber: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  readMoreLink: Maybe<Scalars['String']['output']>;
  releaseDate: Maybe<Scalars['DateTime']['output']>;
  scheduled: Maybe<Scalars['Boolean']['output']>;
  sitecoreProduct: Changelog__SitecoreProduct_Parent_Types_List;
  status: StatusList;
  title: Maybe<Scalars['String']['output']>;
  version: Maybe<Scalars['String']['output']>;
};

export type ChangelogChangeTypeArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangelogImageArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<MediaSorts>>>;
  where: InputMaybe<MediaPredicate>;
};

export type ChangelogSitecoreProductArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangelogStatusArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<StatusSorts>>>;
  where: InputMaybe<StatusPredicate>;
};

export type ChangelogList = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<Changelog>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type ChangelogPredicate = {
  AND: InputMaybe<Array<ChangelogPredicate>>;
  OR: InputMaybe<Array<ChangelogPredicate>>;
  __sysCreatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysCreatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysUpdatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_contains: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_endswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_eq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_neq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_startswith: InputMaybe<Scalars['String']['input']>;
  breakingChange_eq: InputMaybe<Scalars['Boolean']['input']>;
  breakingChange_neq: InputMaybe<Scalars['Boolean']['input']>;
  changeType: InputMaybe<Changelog__ChangeTypePredicate>;
  id_anyOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_eq: InputMaybe<Scalars['ID']['input']>;
  id_neq: InputMaybe<Scalars['ID']['input']>;
  id_noneOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image: InputMaybe<Changelog__ImagePredicate>;
  issueNumber_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  issueNumber_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  issueNumber_contains: InputMaybe<Scalars['String']['input']>;
  issueNumber_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  issueNumber_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  issueNumber_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  issueNumber_endswith: InputMaybe<Scalars['String']['input']>;
  issueNumber_eq: InputMaybe<Scalars['String']['input']>;
  issueNumber_neq: InputMaybe<Scalars['String']['input']>;
  issueNumber_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  issueNumber_startswith: InputMaybe<Scalars['String']['input']>;
  name_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  name_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  name_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  name_endswith: InputMaybe<Scalars['String']['input']>;
  name_eq: InputMaybe<Scalars['String']['input']>;
  name_neq: InputMaybe<Scalars['String']['input']>;
  name_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_startswith: InputMaybe<Scalars['String']['input']>;
  readMoreLink_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  readMoreLink_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  readMoreLink_contains: InputMaybe<Scalars['String']['input']>;
  readMoreLink_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  readMoreLink_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  readMoreLink_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  readMoreLink_endswith: InputMaybe<Scalars['String']['input']>;
  readMoreLink_eq: InputMaybe<Scalars['String']['input']>;
  readMoreLink_neq: InputMaybe<Scalars['String']['input']>;
  readMoreLink_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  readMoreLink_startswith: InputMaybe<Scalars['String']['input']>;
  releaseDate_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  releaseDate_eq: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_gt: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_lt: InputMaybe<Scalars['DateTime']['input']>;
  releaseDate_neq: InputMaybe<Scalars['DateTime']['input']>;
  scheduled_eq: InputMaybe<Scalars['Boolean']['input']>;
  scheduled_neq: InputMaybe<Scalars['Boolean']['input']>;
  sitecoreProduct: InputMaybe<Changelog__SitecoreProductPredicate>;
  status: InputMaybe<Changelog__StatusPredicate>;
  title_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains: InputMaybe<Scalars['String']['input']>;
  title_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  title_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  title_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  title_endswith: InputMaybe<Scalars['String']['input']>;
  title_eq: InputMaybe<Scalars['String']['input']>;
  title_neq: InputMaybe<Scalars['String']['input']>;
  title_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_startswith: InputMaybe<Scalars['String']['input']>;
  version_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version_contains: InputMaybe<Scalars['String']['input']>;
  version_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  version_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  version_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  version_endswith: InputMaybe<Scalars['String']['input']>;
  version_eq: InputMaybe<Scalars['String']['input']>;
  version_neq: InputMaybe<Scalars['String']['input']>;
  version_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  version_startswith: InputMaybe<Scalars['String']['input']>;
};

export enum ChangelogSorts {
  BreakingchangeAsc = 'BREAKINGCHANGE_ASC',
  BreakingchangeDesc = 'BREAKINGCHANGE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IssuenumberAsc = 'ISSUENUMBER_ASC',
  IssuenumberDesc = 'ISSUENUMBER_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ReadmorelinkAsc = 'READMORELINK_ASC',
  ReadmorelinkDesc = 'READMORELINK_DESC',
  ReleasedateAsc = 'RELEASEDATE_ASC',
  ReleasedateDesc = 'RELEASEDATE_DESC',
  ScheduledAsc = 'SCHEDULED_ASC',
  ScheduledDesc = 'SCHEDULED_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  VersionAsc = 'VERSION_ASC',
  VersionDesc = 'VERSION_DESC',
  SyscreatedatAsc = '__SYSCREATEDAT_ASC',
  SyscreatedatDesc = '__SYSCREATEDAT_DESC',
  SyscreatedbyAsc = '__SYSCREATEDBY_ASC',
  SyscreatedbyDesc = '__SYSCREATEDBY_DESC',
  SysupdatedatAsc = '__SYSUPDATEDAT_ASC',
  SysupdatedatDesc = '__SYSUPDATEDAT_DESC',
  SysupdatedbyAsc = '__SYSUPDATEDBY_ASC',
  SysupdatedbyDesc = '__SYSUPDATEDBY_DESC',
  SysversionAsc = '__SYSVERSION_ASC',
  SysversionDesc = '__SYSVERSION_DESC',
}

export type Changelog__ChangeTypePredicate = {
  changelog_ids: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image: InputMaybe<Changelog__ImagePredicate>;
  sitecoreProduct: InputMaybe<Changelog__SitecoreProductPredicate>;
  status: InputMaybe<Changelog__StatusPredicate>;
};

export type Changelog__ChangeType_Parent_Types = Changelog | Changetype | SitecoreCloud | SitecoreProduct | Status;

export type Changelog__ChangeType_Parent_Types_List = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<Changelog__ChangeType_Parent_Types>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type Changelog__ImagePredicate = {
  media_ids: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Changelog__SitecoreProductPredicate = {
  changeType: InputMaybe<Changelog__ChangeTypePredicate>;
  changelog_ids: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  image: InputMaybe<Changelog__ImagePredicate>;
  status: InputMaybe<Changelog__StatusPredicate>;
};

export type Changelog__SitecoreProduct_Parent_Types = Changelog | Changetype | SitecoreCloud | SitecoreProduct | Status;

export type Changelog__SitecoreProduct_Parent_Types_List = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<Changelog__SitecoreProduct_Parent_Types>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type Changelog__StatusPredicate = {
  status_ids: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type Changetype = {
  __sysCreatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysCreatedBy: Maybe<Scalars['String']['output']>;
  __sysUpdatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysUpdatedBy: Maybe<Scalars['String']['output']>;
  __sysVersion: Maybe<Scalars['String']['output']>;
  changeType: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type ChangetypeList = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<Changetype>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type ChangetypePredicate = {
  AND: InputMaybe<Array<ChangetypePredicate>>;
  OR: InputMaybe<Array<ChangetypePredicate>>;
  __sysCreatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysCreatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysUpdatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_contains: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_endswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_eq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_neq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_startswith: InputMaybe<Scalars['String']['input']>;
  changeType_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  changeType_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  changeType_contains: InputMaybe<Scalars['String']['input']>;
  changeType_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  changeType_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  changeType_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  changeType_endswith: InputMaybe<Scalars['String']['input']>;
  changeType_eq: InputMaybe<Scalars['String']['input']>;
  changeType_neq: InputMaybe<Scalars['String']['input']>;
  changeType_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  changeType_startswith: InputMaybe<Scalars['String']['input']>;
  id_anyOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_eq: InputMaybe<Scalars['ID']['input']>;
  id_neq: InputMaybe<Scalars['ID']['input']>;
  id_noneOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  name_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  name_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  name_endswith: InputMaybe<Scalars['String']['input']>;
  name_eq: InputMaybe<Scalars['String']['input']>;
  name_neq: InputMaybe<Scalars['String']['input']>;
  name_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_startswith: InputMaybe<Scalars['String']['input']>;
};

export enum ChangetypeSorts {
  ChangetypeAsc = 'CHANGETYPE_ASC',
  ChangetypeDesc = 'CHANGETYPE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SyscreatedatAsc = '__SYSCREATEDAT_ASC',
  SyscreatedatDesc = '__SYSCREATEDAT_DESC',
  SyscreatedbyAsc = '__SYSCREATEDBY_ASC',
  SyscreatedbyDesc = '__SYSCREATEDBY_DESC',
  SysupdatedatAsc = '__SYSUPDATEDAT_ASC',
  SysupdatedatDesc = '__SYSUPDATEDAT_DESC',
  SysupdatedbyAsc = '__SYSUPDATEDBY_ASC',
  SysupdatedbyDesc = '__SYSUPDATEDBY_DESC',
  SysversionAsc = '__SYSVERSION_ASC',
  SysversionDesc = '__SYSVERSION_DESC',
}

export type Media = {
  __sysCreatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysCreatedBy: Maybe<Scalars['String']['output']>;
  __sysUpdatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysUpdatedBy: Maybe<Scalars['String']['output']>;
  __sysVersion: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  fileHeight: Maybe<Scalars['Long']['output']>;
  fileId: Maybe<Scalars['String']['output']>;
  fileName: Maybe<Scalars['String']['output']>;
  fileSize: Maybe<Scalars['Long']['output']>;
  fileType: Maybe<Scalars['String']['output']>;
  fileUrl: Maybe<Scalars['String']['output']>;
  fileWidth: Maybe<Scalars['Long']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type MediaFileUrlArgs = {
  transform: InputMaybe<MediaUrlTransformInput>;
};

export type MediaList = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<Media>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type MediaPredicate = {
  AND: InputMaybe<Array<MediaPredicate>>;
  OR: InputMaybe<Array<MediaPredicate>>;
  __sysCreatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysCreatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysUpdatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_contains: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_endswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_eq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_neq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_startswith: InputMaybe<Scalars['String']['input']>;
  description_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  description_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  description_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  description_endswith: InputMaybe<Scalars['String']['input']>;
  description_eq: InputMaybe<Scalars['String']['input']>;
  description_neq: InputMaybe<Scalars['String']['input']>;
  description_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_startswith: InputMaybe<Scalars['String']['input']>;
  fileHeight_between: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  fileHeight_eq: InputMaybe<Scalars['Long']['input']>;
  fileHeight_gt: InputMaybe<Scalars['Long']['input']>;
  fileHeight_lt: InputMaybe<Scalars['Long']['input']>;
  fileHeight_neq: InputMaybe<Scalars['Long']['input']>;
  fileId_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileId_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileId_contains: InputMaybe<Scalars['String']['input']>;
  fileId_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  fileId_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  fileId_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  fileId_endswith: InputMaybe<Scalars['String']['input']>;
  fileId_eq: InputMaybe<Scalars['String']['input']>;
  fileId_neq: InputMaybe<Scalars['String']['input']>;
  fileId_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileId_startswith: InputMaybe<Scalars['String']['input']>;
  fileName_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_contains: InputMaybe<Scalars['String']['input']>;
  fileName_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  fileName_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  fileName_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  fileName_endswith: InputMaybe<Scalars['String']['input']>;
  fileName_eq: InputMaybe<Scalars['String']['input']>;
  fileName_neq: InputMaybe<Scalars['String']['input']>;
  fileName_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_startswith: InputMaybe<Scalars['String']['input']>;
  fileSize_between: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  fileSize_eq: InputMaybe<Scalars['Long']['input']>;
  fileSize_gt: InputMaybe<Scalars['Long']['input']>;
  fileSize_lt: InputMaybe<Scalars['Long']['input']>;
  fileSize_neq: InputMaybe<Scalars['Long']['input']>;
  fileType_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileType_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileType_contains: InputMaybe<Scalars['String']['input']>;
  fileType_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  fileType_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  fileType_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  fileType_endswith: InputMaybe<Scalars['String']['input']>;
  fileType_eq: InputMaybe<Scalars['String']['input']>;
  fileType_neq: InputMaybe<Scalars['String']['input']>;
  fileType_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileType_startswith: InputMaybe<Scalars['String']['input']>;
  fileUrl_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileUrl_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileUrl_contains: InputMaybe<Scalars['String']['input']>;
  fileUrl_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  fileUrl_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  fileUrl_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  fileUrl_endswith: InputMaybe<Scalars['String']['input']>;
  fileUrl_eq: InputMaybe<Scalars['String']['input']>;
  fileUrl_neq: InputMaybe<Scalars['String']['input']>;
  fileUrl_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileUrl_startswith: InputMaybe<Scalars['String']['input']>;
  fileWidth_between: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  fileWidth_eq: InputMaybe<Scalars['Long']['input']>;
  fileWidth_gt: InputMaybe<Scalars['Long']['input']>;
  fileWidth_lt: InputMaybe<Scalars['Long']['input']>;
  fileWidth_neq: InputMaybe<Scalars['Long']['input']>;
  id_anyOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_eq: InputMaybe<Scalars['ID']['input']>;
  id_neq: InputMaybe<Scalars['ID']['input']>;
  id_noneOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  name_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  name_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  name_endswith: InputMaybe<Scalars['String']['input']>;
  name_eq: InputMaybe<Scalars['String']['input']>;
  name_neq: InputMaybe<Scalars['String']['input']>;
  name_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_startswith: InputMaybe<Scalars['String']['input']>;
};

export enum MediaSorts {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  FileheightAsc = 'FILEHEIGHT_ASC',
  FileheightDesc = 'FILEHEIGHT_DESC',
  FileidAsc = 'FILEID_ASC',
  FileidDesc = 'FILEID_DESC',
  FilesizeAsc = 'FILESIZE_ASC',
  FilesizeDesc = 'FILESIZE_DESC',
  FiletypeAsc = 'FILETYPE_ASC',
  FiletypeDesc = 'FILETYPE_DESC',
  FileurlAsc = 'FILEURL_ASC',
  FileurlDesc = 'FILEURL_DESC',
  FilewidthAsc = 'FILEWIDTH_ASC',
  FilewidthDesc = 'FILEWIDTH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SyscreatedatAsc = '__SYSCREATEDAT_ASC',
  SyscreatedatDesc = '__SYSCREATEDAT_DESC',
  SyscreatedbyAsc = '__SYSCREATEDBY_ASC',
  SyscreatedbyDesc = '__SYSCREATEDBY_DESC',
  SysupdatedatAsc = '__SYSUPDATEDAT_ASC',
  SysupdatedatDesc = '__SYSUPDATEDAT_DESC',
  SysupdatedbyAsc = '__SYSUPDATEDBY_ASC',
  SysupdatedbyDesc = '__SYSUPDATEDBY_DESC',
  SysversionAsc = '__SYSVERSION_ASC',
  SysversionDesc = '__SYSVERSION_DESC',
}

export enum MediaTransformCompression {
  Fast = 'FAST',
}

export type MediaTransformCoordinatesInput = {
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export enum MediaTransformError {
  Redirect = 'REDIRECT',
}

export enum MediaTransformFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Crop = 'CROP',
  Pad = 'PAD',
  Scaledown = 'SCALEDOWN',
}

export enum MediaTransformFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Gif = 'GIF',
  Jpeg = 'JPEG',
  Json = 'JSON',
  Png = 'PNG',
  Svg = 'SVG',
  Webp = 'WEBP',
}

export enum MediaTransformGravitySide {
  Auto = 'AUTO',
  Bottom = 'BOTTOM',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP',
}

export type MediaTransformGravitySpecificationInput = {
  coordinates: InputMaybe<MediaTransformCoordinatesInput>;
  side: InputMaybe<MediaTransformGravitySide>;
};

export enum MediaTransformMetadata {
  Copyright = 'COPYRIGHT',
  Keep = 'KEEP',
  None = 'NONE',
}

export type MediaTransformRectangleInput = {
  bottom: InputMaybe<Scalars['Int']['input']>;
  left: InputMaybe<Scalars['Int']['input']>;
  right: InputMaybe<Scalars['Int']['input']>;
  top: InputMaybe<Scalars['Int']['input']>;
};

export type MediaUrlTransformInput = {
  anim: InputMaybe<Scalars['Boolean']['input']>;
  background: InputMaybe<Scalars['String']['input']>;
  blur: InputMaybe<Scalars['Int']['input']>;
  brightness: InputMaybe<Scalars['Float']['input']>;
  compression: InputMaybe<MediaTransformCompression>;
  contrast: InputMaybe<Scalars['Float']['input']>;
  dpr: InputMaybe<Scalars['Int']['input']>;
  fit: InputMaybe<MediaTransformFit>;
  format: InputMaybe<MediaTransformFormat>;
  gamma: InputMaybe<Scalars['Float']['input']>;
  gravity: InputMaybe<MediaTransformGravitySpecificationInput>;
  height: InputMaybe<Scalars['Int']['input']>;
  metadata: InputMaybe<MediaTransformMetadata>;
  onError: InputMaybe<MediaTransformError>;
  quality: InputMaybe<Scalars['Int']['input']>;
  rotate: InputMaybe<Scalars['Int']['input']>;
  sharpen: InputMaybe<Scalars['Float']['input']>;
  trim: InputMaybe<MediaTransformRectangleInput>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  endCursor: Maybe<Scalars['String']['output']>;
  hasNext: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  allChangelog: Maybe<ChangelogList>;
  allChangetype: Maybe<ChangetypeList>;
  allMedia: Maybe<MediaList>;
  allSitecoreCloud: Maybe<SitecoreCloudList>;
  allSitecoreProduct: Maybe<SitecoreProductList>;
  allStatus: Maybe<StatusList>;
  allTaxonomy_releaseStatus: Maybe<Taxonomy_ReleaseStatusList>;
  changelog: Maybe<Changelog>;
  changetype: Maybe<Changetype>;
  media: Maybe<Media>;
  sitecoreCloud: Maybe<SitecoreCloud>;
  sitecoreProduct: Maybe<SitecoreProduct>;
  status: Maybe<Status>;
  taxonomy_releaseStatus: Maybe<Taxonomy_ReleaseStatus>;
};

export type QueryAllChangelogArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ChangelogSorts>>>;
  where: InputMaybe<ChangelogPredicate>;
};

export type QueryAllChangetypeArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<ChangetypeSorts>>>;
  where: InputMaybe<ChangetypePredicate>;
};

export type QueryAllMediaArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<MediaSorts>>>;
  where: InputMaybe<MediaPredicate>;
};

export type QueryAllSitecoreCloudArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<SitecoreCloudSorts>>>;
  where: InputMaybe<SitecoreCloudPredicate>;
};

export type QueryAllSitecoreProductArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<SitecoreProductSorts>>>;
  where: InputMaybe<SitecoreProductPredicate>;
};

export type QueryAllStatusArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<StatusSorts>>>;
  where: InputMaybe<StatusPredicate>;
};

export type QueryAllTaxonomy_ReleaseStatusArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<Taxonomy_ReleaseStatusPredicate>;
};

export type QueryChangelogArgs = {
  id: Scalars['String']['input'];
};

export type QueryChangetypeArgs = {
  id: Scalars['String']['input'];
};

export type QueryMediaArgs = {
  id: Scalars['String']['input'];
};

export type QuerySitecoreCloudArgs = {
  id: Scalars['String']['input'];
};

export type QuerySitecoreProductArgs = {
  id: Scalars['String']['input'];
};

export type QueryStatusArgs = {
  id: Scalars['String']['input'];
};

export type QueryTaxonomy_ReleaseStatusArgs = {
  id: Scalars['String']['input'];
};

export type SitecoreCloud = {
  __sysCreatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysCreatedBy: Maybe<Scalars['String']['output']>;
  __sysUpdatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysUpdatedBy: Maybe<Scalars['String']['output']>;
  __sysVersion: Maybe<Scalars['String']['output']>;
  cloudName: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type SitecoreCloudList = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<SitecoreCloud>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type SitecoreCloudPredicate = {
  AND: InputMaybe<Array<SitecoreCloudPredicate>>;
  OR: InputMaybe<Array<SitecoreCloudPredicate>>;
  __sysCreatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysCreatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysUpdatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_contains: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_endswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_eq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_neq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_startswith: InputMaybe<Scalars['String']['input']>;
  cloudName_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudName_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudName_contains: InputMaybe<Scalars['String']['input']>;
  cloudName_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  cloudName_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  cloudName_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  cloudName_endswith: InputMaybe<Scalars['String']['input']>;
  cloudName_eq: InputMaybe<Scalars['String']['input']>;
  cloudName_neq: InputMaybe<Scalars['String']['input']>;
  cloudName_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudName_startswith: InputMaybe<Scalars['String']['input']>;
  id_anyOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_eq: InputMaybe<Scalars['ID']['input']>;
  id_neq: InputMaybe<Scalars['ID']['input']>;
  id_noneOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  name_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  name_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  name_endswith: InputMaybe<Scalars['String']['input']>;
  name_eq: InputMaybe<Scalars['String']['input']>;
  name_neq: InputMaybe<Scalars['String']['input']>;
  name_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_startswith: InputMaybe<Scalars['String']['input']>;
};

export enum SitecoreCloudSorts {
  CloudnameAsc = 'CLOUDNAME_ASC',
  CloudnameDesc = 'CLOUDNAME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SyscreatedatAsc = '__SYSCREATEDAT_ASC',
  SyscreatedatDesc = '__SYSCREATEDAT_DESC',
  SyscreatedbyAsc = '__SYSCREATEDBY_ASC',
  SyscreatedbyDesc = '__SYSCREATEDBY_DESC',
  SysupdatedatAsc = '__SYSUPDATEDAT_ASC',
  SysupdatedatDesc = '__SYSUPDATEDAT_DESC',
  SysupdatedbyAsc = '__SYSUPDATEDBY_ASC',
  SysupdatedbyDesc = '__SYSUPDATEDBY_DESC',
  SysversionAsc = '__SYSVERSION_ASC',
  SysversionDesc = '__SYSVERSION_DESC',
}

export type SitecoreProduct = {
  __sysCreatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysCreatedBy: Maybe<Scalars['String']['output']>;
  __sysUpdatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysUpdatedBy: Maybe<Scalars['String']['output']>;
  __sysVersion: Maybe<Scalars['String']['output']>;
  abbreviation: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  name: Maybe<Scalars['String']['output']>;
  productDescription: Maybe<Scalars['String']['output']>;
  productIcon: MediaList;
  productIconDark: Maybe<Scalars['String']['output']>;
  productIconLight: Maybe<Scalars['String']['output']>;
  productName: Maybe<Scalars['String']['output']>;
  sitecoreCloud: SitecoreProduct__SitecoreCloud_Parent_Types_List;
};

export type SitecoreProductProductIconArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<Array<InputMaybe<MediaSorts>>>;
  where: InputMaybe<MediaPredicate>;
};

export type SitecoreProductSitecoreCloudArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type SitecoreProductList = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<SitecoreProduct>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type SitecoreProductPredicate = {
  AND: InputMaybe<Array<SitecoreProductPredicate>>;
  OR: InputMaybe<Array<SitecoreProductPredicate>>;
  __sysCreatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysCreatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysUpdatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_contains: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_endswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_eq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_neq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_startswith: InputMaybe<Scalars['String']['input']>;
  abbreviation_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  abbreviation_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  abbreviation_contains: InputMaybe<Scalars['String']['input']>;
  abbreviation_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  abbreviation_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  abbreviation_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  abbreviation_endswith: InputMaybe<Scalars['String']['input']>;
  abbreviation_eq: InputMaybe<Scalars['String']['input']>;
  abbreviation_neq: InputMaybe<Scalars['String']['input']>;
  abbreviation_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  abbreviation_startswith: InputMaybe<Scalars['String']['input']>;
  id_anyOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_eq: InputMaybe<Scalars['ID']['input']>;
  id_neq: InputMaybe<Scalars['ID']['input']>;
  id_noneOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  name_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  name_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  name_endswith: InputMaybe<Scalars['String']['input']>;
  name_eq: InputMaybe<Scalars['String']['input']>;
  name_neq: InputMaybe<Scalars['String']['input']>;
  name_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_startswith: InputMaybe<Scalars['String']['input']>;
  productIcon: InputMaybe<SitecoreProduct__ProductIconPredicate>;
  productIconDark_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productIconDark_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productIconDark_contains: InputMaybe<Scalars['String']['input']>;
  productIconDark_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  productIconDark_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  productIconDark_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  productIconDark_endswith: InputMaybe<Scalars['String']['input']>;
  productIconDark_eq: InputMaybe<Scalars['String']['input']>;
  productIconDark_neq: InputMaybe<Scalars['String']['input']>;
  productIconDark_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productIconDark_startswith: InputMaybe<Scalars['String']['input']>;
  productIconLight_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productIconLight_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productIconLight_contains: InputMaybe<Scalars['String']['input']>;
  productIconLight_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  productIconLight_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  productIconLight_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  productIconLight_endswith: InputMaybe<Scalars['String']['input']>;
  productIconLight_eq: InputMaybe<Scalars['String']['input']>;
  productIconLight_neq: InputMaybe<Scalars['String']['input']>;
  productIconLight_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productIconLight_startswith: InputMaybe<Scalars['String']['input']>;
  productName_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productName_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productName_contains: InputMaybe<Scalars['String']['input']>;
  productName_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  productName_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  productName_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  productName_endswith: InputMaybe<Scalars['String']['input']>;
  productName_eq: InputMaybe<Scalars['String']['input']>;
  productName_neq: InputMaybe<Scalars['String']['input']>;
  productName_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productName_startswith: InputMaybe<Scalars['String']['input']>;
  sitecoreCloud: InputMaybe<SitecoreProduct__SitecoreCloudPredicate>;
};

export enum SitecoreProductSorts {
  AbbreviationAsc = 'ABBREVIATION_ASC',
  AbbreviationDesc = 'ABBREVIATION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ProducticondarkAsc = 'PRODUCTICONDARK_ASC',
  ProducticondarkDesc = 'PRODUCTICONDARK_DESC',
  ProducticonlightAsc = 'PRODUCTICONLIGHT_ASC',
  ProducticonlightDesc = 'PRODUCTICONLIGHT_DESC',
  ProductnameAsc = 'PRODUCTNAME_ASC',
  ProductnameDesc = 'PRODUCTNAME_DESC',
  SyscreatedatAsc = '__SYSCREATEDAT_ASC',
  SyscreatedatDesc = '__SYSCREATEDAT_DESC',
  SyscreatedbyAsc = '__SYSCREATEDBY_ASC',
  SyscreatedbyDesc = '__SYSCREATEDBY_DESC',
  SysupdatedatAsc = '__SYSUPDATEDAT_ASC',
  SysupdatedatDesc = '__SYSUPDATEDAT_DESC',
  SysupdatedbyAsc = '__SYSUPDATEDBY_ASC',
  SysupdatedbyDesc = '__SYSUPDATEDBY_DESC',
  SysversionAsc = '__SYSVERSION_ASC',
  SysversionDesc = '__SYSVERSION_DESC',
}

export type SitecoreProduct__ProductIconPredicate = {
  media_ids: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SitecoreProduct__SitecoreCloudPredicate = {
  productIcon: InputMaybe<SitecoreProduct__ProductIconPredicate>;
  sitecoreProduct_ids: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SitecoreProduct__SitecoreCloud_Parent_Types = Changelog | Changetype | SitecoreCloud | SitecoreProduct | Status;

export type SitecoreProduct__SitecoreCloud_Parent_Types_List = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<SitecoreProduct__SitecoreCloud_Parent_Types>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type Status = {
  __sysCreatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysCreatedBy: Maybe<Scalars['String']['output']>;
  __sysUpdatedAt: Maybe<Scalars['DateTime']['output']>;
  __sysUpdatedBy: Maybe<Scalars['String']['output']>;
  __sysVersion: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['ID']['output']>;
  identifier: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type StatusList = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<Status>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type StatusPredicate = {
  AND: InputMaybe<Array<StatusPredicate>>;
  OR: InputMaybe<Array<StatusPredicate>>;
  __sysCreatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysCreatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysCreatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysCreatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysCreatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedAt_between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  __sysUpdatedAt_eq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_gt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_lt: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedAt_neq: InputMaybe<Scalars['DateTime']['input']>;
  __sysUpdatedBy_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_contains: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_endswith: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_eq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_neq: InputMaybe<Scalars['String']['input']>;
  __sysUpdatedBy_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysUpdatedBy_startswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_contains: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_endswith: InputMaybe<Scalars['String']['input']>;
  __sysVersion_eq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_neq: InputMaybe<Scalars['String']['input']>;
  __sysVersion_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  __sysVersion_startswith: InputMaybe<Scalars['String']['input']>;
  description_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_contains: InputMaybe<Scalars['String']['input']>;
  description_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  description_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  description_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  description_endswith: InputMaybe<Scalars['String']['input']>;
  description_eq: InputMaybe<Scalars['String']['input']>;
  description_neq: InputMaybe<Scalars['String']['input']>;
  description_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_startswith: InputMaybe<Scalars['String']['input']>;
  id_anyOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_eq: InputMaybe<Scalars['ID']['input']>;
  id_neq: InputMaybe<Scalars['ID']['input']>;
  id_noneOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  identifier_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  identifier_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  identifier_contains: InputMaybe<Scalars['String']['input']>;
  identifier_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  identifier_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  identifier_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  identifier_endswith: InputMaybe<Scalars['String']['input']>;
  identifier_eq: InputMaybe<Scalars['String']['input']>;
  identifier_neq: InputMaybe<Scalars['String']['input']>;
  identifier_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  identifier_startswith: InputMaybe<Scalars['String']['input']>;
  name_allOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_anyOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_contains: InputMaybe<Scalars['String']['input']>;
  name_doesnotcontain: InputMaybe<Scalars['String']['input']>;
  name_doesnotendwith: InputMaybe<Scalars['String']['input']>;
  name_doesnotstartwith: InputMaybe<Scalars['String']['input']>;
  name_endswith: InputMaybe<Scalars['String']['input']>;
  name_eq: InputMaybe<Scalars['String']['input']>;
  name_neq: InputMaybe<Scalars['String']['input']>;
  name_noneOf: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_startswith: InputMaybe<Scalars['String']['input']>;
};

export enum StatusSorts {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdentifierAsc = 'IDENTIFIER_ASC',
  IdentifierDesc = 'IDENTIFIER_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  SyscreatedatAsc = '__SYSCREATEDAT_ASC',
  SyscreatedatDesc = '__SYSCREATEDAT_DESC',
  SyscreatedbyAsc = '__SYSCREATEDBY_ASC',
  SyscreatedbyDesc = '__SYSCREATEDBY_DESC',
  SysupdatedatAsc = '__SYSUPDATEDAT_ASC',
  SysupdatedatDesc = '__SYSUPDATEDAT_DESC',
  SysupdatedbyAsc = '__SYSUPDATEDBY_ASC',
  SysupdatedbyDesc = '__SYSUPDATEDBY_DESC',
  SysversionAsc = '__SYSVERSION_ASC',
  SysversionDesc = '__SYSVERSION_DESC',
}

export type Taxonomy_ReleaseStatus = {
  id: Maybe<Scalars['ID']['output']>;
};

export type Taxonomy_ReleaseStatusList = {
  pageInfo: Maybe<PageInfo>;
  results: Maybe<Array<Maybe<Taxonomy_ReleaseStatus>>>;
  total: Maybe<Scalars['Int']['output']>;
};

export type Taxonomy_ReleaseStatusPredicate = {
  AND: InputMaybe<Array<Taxonomy_ReleaseStatusPredicate>>;
  OR: InputMaybe<Array<Taxonomy_ReleaseStatusPredicate>>;
  id_anyOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id_eq: InputMaybe<Scalars['ID']['input']>;
  id_neq: InputMaybe<Scalars['ID']['input']>;
  id_noneOf: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ChangeTypeFragment = { id: string | null; name: string | null; changeType: string | null };

export type ChangelogEntryFragment = {
  id: string | null;
  name: string | null;
  title: string | null;
  description: any | null;
  fullArticle: any | null;
  readMoreLink: string | null;
  breakingChange: boolean | null;
  version: string | null;
  releaseDate: Date | null;
  scheduled: boolean | null;
  image: {
    total: number | null;
    results: Array<{
      id: string | null;
      name: string | null;
      fileName: string | null;
      fileUrl: string | null;
      description: string | null;
      fileWidth: any | null;
      fileHeight: any | null;
      fileId: string | null;
      fileSize: any | null;
      fileType: string | null;
    } | null> | null;
  };
  sitecoreProduct: { total: number | null; results: Array<{ id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null } | {} | null> | null };
  changeType: { total: number | null; results: Array<{ id: string | null; name: string | null; changeType: string | null } | {} | null> | null };
  status: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null };
};

export type ChangelogEntrySummaryFragment = {
  id: string | null;
  name: string | null;
  title: string | null;
  description: any | null;
  readMoreLink: string | null;
  breakingChange: boolean | null;
  version: string | null;
  releaseDate: Date | null;
  image: {
    total: number | null;
    results: Array<{
      id: string | null;
      name: string | null;
      fileName: string | null;
      fileUrl: string | null;
      description: string | null;
      fileWidth: any | null;
      fileHeight: any | null;
      fileId: string | null;
      fileSize: any | null;
      fileType: string | null;
    } | null> | null;
  };
  sitecoreProduct: { total: number | null; results: Array<{ id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null } | {} | null> | null };
  changeType: { total: number | null; results: Array<{ id: string | null; name: string | null; changeType: string | null } | {} | null> | null };
  status: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null };
};

export type MediaFragment = {
  id: string | null;
  name: string | null;
  fileName: string | null;
  fileUrl: string | null;
  description: string | null;
  fileWidth: any | null;
  fileHeight: any | null;
  fileId: string | null;
  fileSize: any | null;
  fileType: string | null;
};

export type ProductFragment = { id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null };

export type StatusFragment = { id: string | null; name: string | null; description: string | null; identifier: string | null };

export type GetAllChangetypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllChangetypesQuery = { allChangetype: { total: number | null; results: Array<{ id: string | null; name: string | null; changeType: string | null } | null> | null } | null };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProductsQuery = {
  allSitecoreProduct: { total: number | null; results: Array<{ id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null } | null> | null } | null;
};

export type GetAllStatusQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllStatusQuery = { allStatus: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null } | null };

export type GetLatestEntriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['DateTime']['input'];
}>;

export type GetLatestEntriesQuery = {
  changelog: {
    total: number | null;
    pageInfo: { hasNext: boolean | null; endCursor: string | null } | null;
    results: Array<{
      id: string | null;
      name: string | null;
      title: string | null;
      description: any | null;
      fullArticle: any | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      version: string | null;
      releaseDate: Date | null;
      scheduled: boolean | null;
      image: {
        total: number | null;
        results: Array<{
          id: string | null;
          name: string | null;
          fileName: string | null;
          fileUrl: string | null;
          description: string | null;
          fileWidth: any | null;
          fileHeight: any | null;
          fileId: string | null;
          fileSize: any | null;
          fileType: string | null;
        } | null> | null;
      };
      sitecoreProduct: { total: number | null; results: Array<{ id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null } | {} | null> | null };
      changeType: { total: number | null; results: Array<{ id: string | null; name: string | null; changeType: string | null } | {} | null> | null };
      status: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null };
    } | null> | null;
  } | null;
};

export type GetNumberOfEntriesByProductQueryVariables = Exact<{
  productId: Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>;
}>;

export type GetNumberOfEntriesByProductQuery = { changelog: { total: number | null } | null };

export type GetStatusByIdentifierQueryVariables = Exact<{
  identifier: InputMaybe<Scalars['String']['input']>;
}>;

export type GetStatusByIdentifierQuery = { allStatus: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null } | null };

export type SearchByDateQueryVariables = Exact<{
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchByDateQuery = {
  changelog: {
    total: number | null;
    pageInfo: { hasNext: boolean | null; endCursor: string | null } | null;
    results: Array<{
      id: string | null;
      name: string | null;
      title: string | null;
      description: any | null;
      fullArticle: any | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      version: string | null;
      releaseDate: Date | null;
      scheduled: boolean | null;
      image: {
        total: number | null;
        results: Array<{
          id: string | null;
          name: string | null;
          fileName: string | null;
          fileUrl: string | null;
          description: string | null;
          fileWidth: any | null;
          fileHeight: any | null;
          fileId: string | null;
          fileSize: any | null;
          fileType: string | null;
        } | null> | null;
      };
      sitecoreProduct: { total: number | null; results: Array<{ id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null } | {} | null> | null };
      changeType: { total: number | null; results: Array<{ id: string | null; name: string | null; changeType: string | null } | {} | null> | null };
      status: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null };
    } | null> | null;
  } | null;
};

export type SearchByProductQueryVariables = Exact<{
  date: InputMaybe<Scalars['DateTime']['input']>;
  productId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
  changeTypeIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type SearchByProductQuery = {
  changelog: {
    total: number | null;
    pageInfo: { hasNext: boolean | null; endCursor: string | null } | null;
    results: Array<{
      id: string | null;
      name: string | null;
      title: string | null;
      description: any | null;
      fullArticle: any | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      version: string | null;
      releaseDate: Date | null;
      scheduled: boolean | null;
      image: {
        total: number | null;
        results: Array<{
          id: string | null;
          name: string | null;
          fileName: string | null;
          fileUrl: string | null;
          description: string | null;
          fileWidth: any | null;
          fileHeight: any | null;
          fileId: string | null;
          fileSize: any | null;
          fileType: string | null;
        } | null> | null;
      };
      sitecoreProduct: { total: number | null; results: Array<{ id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null } | {} | null> | null };
      changeType: { total: number | null; results: Array<{ id: string | null; name: string | null; changeType: string | null } | {} | null> | null };
      status: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null };
    } | null> | null;
  } | null;
};

export type SearchByProductsAndChangeTypesQueryVariables = Exact<{
  date: Scalars['DateTime']['input'];
  productIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
  changeTypeIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  breaking?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type SearchByProductsAndChangeTypesQuery = {
  changelog: {
    total: number | null;
    pageInfo: { hasNext: boolean | null; endCursor: string | null } | null;
    results: Array<{
      id: string | null;
      name: string | null;
      title: string | null;
      description: any | null;
      fullArticle: any | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      version: string | null;
      releaseDate: Date | null;
      scheduled: boolean | null;
      image: {
        total: number | null;
        results: Array<{
          id: string | null;
          name: string | null;
          fileName: string | null;
          fileUrl: string | null;
          description: string | null;
          fileWidth: any | null;
          fileHeight: any | null;
          fileId: string | null;
          fileSize: any | null;
          fileType: string | null;
        } | null> | null;
      };
      sitecoreProduct: { total: number | null; results: Array<{ id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null } | {} | null> | null };
      changeType: { total: number | null; results: Array<{ id: string | null; name: string | null; changeType: string | null } | {} | null> | null };
      status: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null };
    } | null> | null;
  } | null;
};

export type SearchByTitleQueryVariables = Exact<{
  date: InputMaybe<Scalars['DateTime']['input']>;
  productId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>>;
}>;

export type SearchByTitleQuery = {
  data: {
    total: number | null;
    pageInfo: { hasNext: boolean | null; endCursor: string | null } | null;
    results: Array<{
      id: string | null;
      name: string | null;
      title: string | null;
      description: any | null;
      fullArticle: any | null;
      readMoreLink: string | null;
      breakingChange: boolean | null;
      version: string | null;
      releaseDate: Date | null;
      scheduled: boolean | null;
      image: {
        total: number | null;
        results: Array<{
          id: string | null;
          name: string | null;
          fileName: string | null;
          fileUrl: string | null;
          description: string | null;
          fileWidth: any | null;
          fileHeight: any | null;
          fileId: string | null;
          fileSize: any | null;
          fileType: string | null;
        } | null> | null;
      };
      sitecoreProduct: { total: number | null; results: Array<{ id: string | null; name: string | null; productName: string | null; productDescription: string | null; darkIcon: string | null; lightIcon: string | null } | {} | null> | null };
      changeType: { total: number | null; results: Array<{ id: string | null; name: string | null; changeType: string | null } | {} | null> | null };
      status: { total: number | null; results: Array<{ id: string | null; name: string | null; description: string | null; identifier: string | null } | null> | null };
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
    fragment media on Media {
  id
  name
  fileName
  fileUrl
  description
  fileWidth
  fileHeight
  fileId
  fileSize
  fileType
}
    `,
  { fragmentName: 'media' }
) as unknown as TypedDocumentString<MediaFragment, unknown>;
export const ProductFragmentDoc = new TypedDocumentString(
  `
    fragment product on SitecoreProduct {
  id
  name
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
  id
  name
  changeType
}
    `,
  { fragmentName: 'changeType' }
) as unknown as TypedDocumentString<ChangeTypeFragment, unknown>;
export const StatusFragmentDoc = new TypedDocumentString(
  `
    fragment status on Status {
  id
  name
  description
  identifier
}
    `,
  { fragmentName: 'status' }
) as unknown as TypedDocumentString<StatusFragment, unknown>;
export const ChangelogEntryFragmentDoc = new TypedDocumentString(
  `
    fragment changelogEntry on Changelog {
  id
  name
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  version
  releaseDate
  scheduled
  image {
    total
    results {
      ...media
    }
  }
  sitecoreProduct {
    total
    results {
      ...product
    }
  }
  changeType {
    total
    results {
      ...changeType
    }
  }
  status {
    total
    results {
      ...status
    }
  }
}
    fragment changeType on Changetype {
  id
  name
  changeType
}
fragment media on Media {
  id
  name
  fileName
  fileUrl
  description
  fileWidth
  fileHeight
  fileId
  fileSize
  fileType
}
fragment product on SitecoreProduct {
  id
  name
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  id
  name
  description
  identifier
}`,
  { fragmentName: 'changelogEntry' }
) as unknown as TypedDocumentString<ChangelogEntryFragment, unknown>;
export const ChangelogEntrySummaryFragmentDoc = new TypedDocumentString(
  `
    fragment changelogEntrySummary on Changelog {
  id
  name
  title
  description
  readMoreLink
  breakingChange
  version
  releaseDate
  image {
    total
    results {
      ...media
    }
  }
  sitecoreProduct {
    total
    results {
      ...product
    }
  }
  changeType {
    total
    results {
      ...changeType
    }
  }
  status {
    total
    results {
      ...status
    }
  }
}
    fragment changeType on Changetype {
  id
  name
  changeType
}
fragment media on Media {
  id
  name
  fileName
  fileUrl
  description
  fileWidth
  fileHeight
  fileId
  fileSize
  fileType
}
fragment product on SitecoreProduct {
  id
  name
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  id
  name
  description
  identifier
}`,
  { fragmentName: 'changelogEntrySummary' }
) as unknown as TypedDocumentString<ChangelogEntrySummaryFragment, unknown>;
export const GetAllChangetypesDocument = new TypedDocumentString(`
    query GetAllChangetypes {
  allChangetype {
    total
    results {
      ...changeType
    }
  }
}
    fragment changeType on Changetype {
  id
  name
  changeType
}`) as unknown as TypedDocumentString<GetAllChangetypesQuery, GetAllChangetypesQueryVariables>;
export const GetAllProductsDocument = new TypedDocumentString(`
    query GetAllProducts {
  allSitecoreProduct(first: 25) {
    total
    results {
      ...product
    }
  }
}
    fragment product on SitecoreProduct {
  id
  name
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}`) as unknown as TypedDocumentString<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetAllStatusDocument = new TypedDocumentString(`
    query GetAllStatus {
  allStatus {
    total
    results {
      ...status
    }
  }
}
    fragment status on Status {
  id
  name
  description
  identifier
}`) as unknown as TypedDocumentString<GetAllStatusQuery, GetAllStatusQueryVariables>;
export const GetLatestEntriesDocument = new TypedDocumentString(`
    query GetLatestEntries($first: Int = 5, $after: String = "", $date: DateTime!) {
  changelog: allChangelog(
    orderBy: RELEASEDATE_DESC
    first: $first
    after: $after
    where: {releaseDate_lt: $date}
  ) {
    pageInfo {
      hasNext
      endCursor
    }
    total
    results {
      ...changelogEntry
    }
  }
}
    fragment changeType on Changetype {
  id
  name
  changeType
}
fragment changelogEntry on Changelog {
  id
  name
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  version
  releaseDate
  scheduled
  image {
    total
    results {
      ...media
    }
  }
  sitecoreProduct {
    total
    results {
      ...product
    }
  }
  changeType {
    total
    results {
      ...changeType
    }
  }
  status {
    total
    results {
      ...status
    }
  }
}
fragment media on Media {
  id
  name
  fileName
  fileUrl
  description
  fileWidth
  fileHeight
  fileId
  fileSize
  fileType
}
fragment product on SitecoreProduct {
  id
  name
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  id
  name
  description
  identifier
}`) as unknown as TypedDocumentString<GetLatestEntriesQuery, GetLatestEntriesQueryVariables>;
export const GetNumberOfEntriesByProductDocument = new TypedDocumentString(`
    query getNumberOfEntriesByProduct($productId: [ID]!) {
  changelog: allChangelog(where: {sitecoreProduct: {changelog_ids: $productId}}) {
    total
  }
}
    `) as unknown as TypedDocumentString<GetNumberOfEntriesByProductQuery, GetNumberOfEntriesByProductQueryVariables>;
export const GetStatusByIdentifierDocument = new TypedDocumentString(`
    query GetStatusByIdentifier($identifier: String) {
  allStatus(where: {identifier_eq: $identifier}) {
    total
    results {
      ...status
    }
  }
}
    fragment status on Status {
  id
  name
  description
  identifier
}`) as unknown as TypedDocumentString<GetStatusByIdentifierQuery, GetStatusByIdentifierQueryVariables>;
export const SearchByDateDocument = new TypedDocumentString(`
    query SearchByDate($startDate: DateTime!, $endDate: DateTime!, $first: Int = 5, $after: String = "") {
  changelog: allChangelog(
    first: $first
    after: $after
    where: {releaseDate_between: [$startDate, $endDate]}
  ) {
    pageInfo {
      hasNext
      endCursor
    }
    total
    results {
      ...changelogEntry
    }
  }
}
    fragment changeType on Changetype {
  id
  name
  changeType
}
fragment changelogEntry on Changelog {
  id
  name
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  version
  releaseDate
  scheduled
  image {
    total
    results {
      ...media
    }
  }
  sitecoreProduct {
    total
    results {
      ...product
    }
  }
  changeType {
    total
    results {
      ...changeType
    }
  }
  status {
    total
    results {
      ...status
    }
  }
}
fragment media on Media {
  id
  name
  fileName
  fileUrl
  description
  fileWidth
  fileHeight
  fileId
  fileSize
  fileType
}
fragment product on SitecoreProduct {
  id
  name
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  id
  name
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByDateQuery, SearchByDateQueryVariables>;
export const SearchByProductDocument = new TypedDocumentString(`
    query searchByProduct($date: DateTime, $productId: [ID], $changeTypeIds: [ID] = [], $first: Int = 5, $after: String = "") {
  changelog: allChangelog(
    orderBy: RELEASEDATE_DESC
    first: $first
    after: $after
    where: {releaseDate_lt: $date, sitecoreProduct: {changelog_ids: $productId}, AND: {OR: [{changeType: {changelog_ids: $changeTypeIds}}]}}
  ) {
    pageInfo {
      hasNext
      endCursor
    }
    total
    results {
      ...changelogEntry
    }
  }
}
    fragment changeType on Changetype {
  id
  name
  changeType
}
fragment changelogEntry on Changelog {
  id
  name
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  version
  releaseDate
  scheduled
  image {
    total
    results {
      ...media
    }
  }
  sitecoreProduct {
    total
    results {
      ...product
    }
  }
  changeType {
    total
    results {
      ...changeType
    }
  }
  status {
    total
    results {
      ...status
    }
  }
}
fragment media on Media {
  id
  name
  fileName
  fileUrl
  description
  fileWidth
  fileHeight
  fileId
  fileSize
  fileType
}
fragment product on SitecoreProduct {
  id
  name
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  id
  name
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByProductQuery, SearchByProductQueryVariables>;
export const SearchByProductsAndChangeTypesDocument = new TypedDocumentString(`
    query searchByProductsAndChangeTypes($date: DateTime!, $productIds: [ID], $changeTypeIds: [ID], $first: Int = 5, $after: String = "", $breaking: Boolean = false) {
  changelog: allChangelog(
    orderBy: RELEASEDATE_DESC
    first: $first
    after: $after
    where: {releaseDate_lt: $date, breakingChange_eq: $breaking, OR: [{sitecoreProduct: {changelog_ids: $productIds}}], AND: {OR: [{changeType: {changelog_ids: $changeTypeIds}}]}}
  ) {
    pageInfo {
      hasNext
      endCursor
    }
    total
    results {
      ...changelogEntry
    }
  }
}
    fragment changeType on Changetype {
  id
  name
  changeType
}
fragment changelogEntry on Changelog {
  id
  name
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  version
  releaseDate
  scheduled
  image {
    total
    results {
      ...media
    }
  }
  sitecoreProduct {
    total
    results {
      ...product
    }
  }
  changeType {
    total
    results {
      ...changeType
    }
  }
  status {
    total
    results {
      ...status
    }
  }
}
fragment media on Media {
  id
  name
  fileName
  fileUrl
  description
  fileWidth
  fileHeight
  fileId
  fileSize
  fileType
}
fragment product on SitecoreProduct {
  id
  name
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  id
  name
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByProductsAndChangeTypesQuery, SearchByProductsAndChangeTypesQueryVariables>;
export const SearchByTitleDocument = new TypedDocumentString(`
    query searchByTitle($date: DateTime, $productId: [ID]) {
  data: allChangelog(
    first: 1
    where: {releaseDate_lt: $date, sitecoreProduct: {changelog_ids: $productId}}
  ) {
    pageInfo {
      hasNext
      endCursor
    }
    total
    results {
      ...changelogEntry
    }
  }
}
    fragment changeType on Changetype {
  id
  name
  changeType
}
fragment changelogEntry on Changelog {
  id
  name
  title
  description
  fullArticle
  readMoreLink
  breakingChange
  version
  releaseDate
  scheduled
  image {
    total
    results {
      ...media
    }
  }
  sitecoreProduct {
    total
    results {
      ...product
    }
  }
  changeType {
    total
    results {
      ...changeType
    }
  }
  status {
    total
    results {
      ...status
    }
  }
}
fragment media on Media {
  id
  name
  fileName
  fileUrl
  description
  fileWidth
  fileHeight
  fileId
  fileSize
  fileType
}
fragment product on SitecoreProduct {
  id
  name
  productName
  productDescription
  darkIcon: productIconDark
  lightIcon: productIconLight
}
fragment status on Status {
  id
  name
  description
  identifier
}`) as unknown as TypedDocumentString<SearchByTitleQuery, SearchByTitleQueryVariables>;
