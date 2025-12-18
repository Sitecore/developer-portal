/* eslint-disable */
import * as types from './graphql';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  'fragment changeType on Changetype {\n  system {\n    id\n    name\n  }\n  changeType\n}': types.ChangeTypeFragmentDoc,
  'fragment changelogEntry on Changelog {\n  system {\n    id\n    name\n  }\n  title\n  description\n  fullArticle\n  readMoreLink\n  breakingChange\n  x_version\n  releaseDate\n  scheduled\n  image {\n    hasMore\n    cursor\n    results {\n      ...media\n    }\n  }\n  sitecoreProduct {\n    results {\n      ...product\n    }\n  }\n  changeType {\n    results {\n      ...changeType\n    }\n  }\n  status {\n    results {\n      ...status\n    }\n  }\n}':
    types.ChangelogEntryFragmentDoc,
  'fragment media on XMCMedia {\n  system {\n    id\n    name\n  }\n  ... on XMCMedia {\n    media_publicLink\n    media_type {\n      name\n    }\n  }\n}': types.MediaFragmentDoc,
  'fragment product on SitecoreProduct {\n  system {\n    id\n    name\n  }\n  productName\n  productDescription\n  darkIcon: productIconDark\n  lightIcon: productIconLight\n}': types.ProductFragmentDoc,
  'fragment status on Status {\n  system {\n    id\n    name\n    label\n  }\n  description\n  identifier\n}': types.StatusFragmentDoc,
  'query GetAllChangetypes {\n  manyChangetype {\n    hasMore\n    cursor\n    results {\n      ...changeType\n    }\n  }\n}': types.GetAllChangetypesDocument,
  'query GetAllProducts {\n  manySitecoreProduct(minimumPageSize: 25) {\n    hasMore\n    cursor\n    results {\n      ...product\n    }\n  }\n}': types.GetAllProductsDocument,
  'query GetAllStatus {\n  manyStatus {\n    hasMore\n    cursor\n    results {\n      ...status\n    }\n  }\n}': types.GetAllStatusDocument,
  'query getNumberOfEntriesByProduct($productId: [String!]!) {\n  changelog: manyChangelog(\n    minimumPageSize: 200\n    filter: {AND: [{sitecoreProduct: {containsAny: $productId}}]}\n  ) {\n    hasMore\n    results {\n      system {\n        id\n      }\n    }\n  }\n}':
    types.GetNumberOfEntriesByProductDocument,
  'query search($date: CustomDateTime, $first: Int = 5, $after: String = "", $breaking: Boolean) {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {breakingChange: {equals: $breaking}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}':
    types.SearchDocument,
  'query searchByChangeTypes($date: CustomDateTime, $changeTypeIds: [String!] = [], $first: Int = 5, $after: String = "", $breaking: Boolean) {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {changeType: {containsAny: $changeTypeIds}}, {breakingChange: {equals: $breaking}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}':
    types.SearchByChangeTypesDocument,
  'query SearchByDate($startDate: CustomDateTime!, $endDate: CustomDateTime!, $first: Int = 5, $after: String = "") {\n  changelog: manyChangelog(\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $endDate}}, {releaseDate: {greaterThan: $startDate}}]}\n  ) {\n    hasMore\n    cursor\n    results {\n      ...changelogEntry\n    }\n  }\n}':
    types.SearchByDateDocument,
  'query searchByProduct($date: CustomDateTime, $productId: [String!], $first: Int = 5, $after: String = "", $breaking: Boolean) {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productId}}, {breakingChange: {equals: $breaking}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}':
    types.SearchByProductDocument,
  'query searchByProductsAndChangeTypes($date: CustomDateTime, $productIds: [String!], $changeTypeIds: [String!] = [], $entryTitle: [String!], $first: Int = 5, $after: String = "") {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productIds}}, {changeType: {containsAny: $changeTypeIds}}, {title: {containsAll: $entryTitle, case: INSENSITIVE}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}':
    types.SearchByProductsAndChangeTypesDocument,
  'query searchByProductsAndChangeTypesAndBreakingChange($date: CustomDateTime, $productIds: [String!], $changeTypeIds: [String!] = [], $first: Int = 5, $after: String = "", $breaking: Boolean) {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productIds}}, {changeType: {containsAny: $changeTypeIds}}, {breakingChange: {equals: $breaking}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}':
    types.SearchByProductsAndChangeTypesAndBreakingChangeDocument,
  'query searchByTitle($date: CustomDateTime, $productId: [String!], $entryTitle: [String!]) {\n  data: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: 1\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productId}}, {title: {containsAll: $entryTitle, case: INSENSITIVE}}]}\n  ) {\n    hasMore\n    cursor\n    results {\n      ...changelogEntry\n    }\n  }\n}':
    types.SearchByTitleDocument,
  'query searchByTitleAndDate($startDate: CustomDateTime!, $endDate: CustomDateTime!, $productId: String!, $entryTitle: [String!]) {\n  data: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: 1\n    filter: {AND: [{releaseDate: {inRange: {from: $startDate, to: $endDate}}}, {sitecoreProduct: {contains: $productId}}, {title: {containsAll: $entryTitle, case: INSENSITIVE}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}':
    types.SearchByTitleAndDateDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'fragment changeType on Changetype {\n  system {\n    id\n    name\n  }\n  changeType\n}'): typeof import('./graphql').ChangeTypeFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment changelogEntry on Changelog {\n  system {\n    id\n    name\n  }\n  title\n  description\n  fullArticle\n  readMoreLink\n  breakingChange\n  x_version\n  releaseDate\n  scheduled\n  image {\n    hasMore\n    cursor\n    results {\n      ...media\n    }\n  }\n  sitecoreProduct {\n    results {\n      ...product\n    }\n  }\n  changeType {\n    results {\n      ...changeType\n    }\n  }\n  status {\n    results {\n      ...status\n    }\n  }\n}'
): typeof import('./graphql').ChangelogEntryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'fragment media on XMCMedia {\n  system {\n    id\n    name\n  }\n  ... on XMCMedia {\n    media_publicLink\n    media_type {\n      name\n    }\n  }\n}'): typeof import('./graphql').MediaFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment product on SitecoreProduct {\n  system {\n    id\n    name\n  }\n  productName\n  productDescription\n  darkIcon: productIconDark\n  lightIcon: productIconLight\n}'
): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'fragment status on Status {\n  system {\n    id\n    name\n    label\n  }\n  description\n  identifier\n}'): typeof import('./graphql').StatusFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'query GetAllChangetypes {\n  manyChangetype {\n    hasMore\n    cursor\n    results {\n      ...changeType\n    }\n  }\n}'): typeof import('./graphql').GetAllChangetypesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'query GetAllProducts {\n  manySitecoreProduct(minimumPageSize: 25) {\n    hasMore\n    cursor\n    results {\n      ...product\n    }\n  }\n}'): typeof import('./graphql').GetAllProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'query GetAllStatus {\n  manyStatus {\n    hasMore\n    cursor\n    results {\n      ...status\n    }\n  }\n}'): typeof import('./graphql').GetAllStatusDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getNumberOfEntriesByProduct($productId: [String!]!) {\n  changelog: manyChangelog(\n    minimumPageSize: 200\n    filter: {AND: [{sitecoreProduct: {containsAny: $productId}}]}\n  ) {\n    hasMore\n    results {\n      system {\n        id\n      }\n    }\n  }\n}'
): typeof import('./graphql').GetNumberOfEntriesByProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query search($date: CustomDateTime, $first: Int = 5, $after: String = "", $breaking: Boolean) {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {breakingChange: {equals: $breaking}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}'
): typeof import('./graphql').SearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query searchByChangeTypes($date: CustomDateTime, $changeTypeIds: [String!] = [], $first: Int = 5, $after: String = "", $breaking: Boolean) {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {changeType: {containsAny: $changeTypeIds}}, {breakingChange: {equals: $breaking}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}'
): typeof import('./graphql').SearchByChangeTypesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query SearchByDate($startDate: CustomDateTime!, $endDate: CustomDateTime!, $first: Int = 5, $after: String = "") {\n  changelog: manyChangelog(\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $endDate}}, {releaseDate: {greaterThan: $startDate}}]}\n  ) {\n    hasMore\n    cursor\n    results {\n      ...changelogEntry\n    }\n  }\n}'
): typeof import('./graphql').SearchByDateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query searchByProduct($date: CustomDateTime, $productId: [String!], $first: Int = 5, $after: String = "", $breaking: Boolean) {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productId}}, {breakingChange: {equals: $breaking}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}'
): typeof import('./graphql').SearchByProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query searchByProductsAndChangeTypes($date: CustomDateTime, $productIds: [String!], $changeTypeIds: [String!] = [], $entryTitle: [String!], $first: Int = 5, $after: String = "") {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productIds}}, {changeType: {containsAny: $changeTypeIds}}, {title: {containsAll: $entryTitle, case: INSENSITIVE}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}'
): typeof import('./graphql').SearchByProductsAndChangeTypesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query searchByProductsAndChangeTypesAndBreakingChange($date: CustomDateTime, $productIds: [String!], $changeTypeIds: [String!] = [], $first: Int = 5, $after: String = "", $breaking: Boolean) {\n  changelog: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: $first\n    after: $after\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productIds}}, {changeType: {containsAny: $changeTypeIds}}, {breakingChange: {equals: $breaking}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}'
): typeof import('./graphql').SearchByProductsAndChangeTypesAndBreakingChangeDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query searchByTitle($date: CustomDateTime, $productId: [String!], $entryTitle: [String!]) {\n  data: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: 1\n    filter: {AND: [{releaseDate: {lessThan: $date}}, {sitecoreProduct: {containsAny: $productId}}, {title: {containsAll: $entryTitle, case: INSENSITIVE}}]}\n  ) {\n    hasMore\n    cursor\n    results {\n      ...changelogEntry\n    }\n  }\n}'
): typeof import('./graphql').SearchByTitleDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query searchByTitleAndDate($startDate: CustomDateTime!, $endDate: CustomDateTime!, $productId: String!, $entryTitle: [String!]) {\n  data: manyChangelog(\n    orderBy: RELEASE_DATE_DESC\n    minimumPageSize: 1\n    filter: {AND: [{releaseDate: {inRange: {from: $startDate, to: $endDate}}}, {sitecoreProduct: {contains: $productId}}, {title: {containsAll: $entryTitle, case: INSENSITIVE}}]}\n  ) {\n    results {\n      ...changelogEntry\n    }\n    hasMore\n    cursor\n  }\n}'
): typeof import('./graphql').SearchByTitleAndDateDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
