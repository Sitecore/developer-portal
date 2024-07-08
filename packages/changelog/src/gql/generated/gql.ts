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
  'fragment changeType on Changetype {\n  id\n  name\n  changeType\n}': types.ChangeTypeFragmentDoc,
  'fragment changelogEntry on Changelog {\n  id\n  name\n  title\n  description\n  fullArticle\n  readMoreLink\n  breakingChange\n  version\n  releaseDate\n  image {\n    total\n    results {\n      ...media\n    }\n  }\n  sitecoreProduct {\n    total\n    results {\n      ...product\n    }\n  }\n  changeType {\n    total\n    results {\n      ...changeType\n    }\n  }\n  status {\n    total\n    results {\n      ...status\n    }\n  }\n}':
    types.ChangelogEntryFragmentDoc,
  'fragment changelogEntrySummary on Changelog {\n  id\n  name\n  title\n  description\n  readMoreLink\n  breakingChange\n  version\n  releaseDate\n  image {\n    total\n    results {\n      ...media\n    }\n  }\n  sitecoreProduct {\n    total\n    results {\n      ...product\n    }\n  }\n  changeType {\n    total\n    results {\n      ...changeType\n    }\n  }\n  status {\n    total\n    results {\n      ...status\n    }\n  }\n}':
    types.ChangelogEntrySummaryFragmentDoc,
  'fragment media on Media {\n  id\n  name\n  fileName\n  fileUrl\n  description\n  fileWidth\n  fileHeight\n  fileId\n  fileSize\n  fileType\n}': types.MediaFragmentDoc,
  'fragment product on SitecoreProduct {\n  id\n  name\n  productName\n  productDescription\n  darkIcon: productIconDark\n  lightIcon: productIconLight\n}': types.ProductFragmentDoc,
  'fragment status on Status {\n  id\n  name\n  description\n  identifier\n}': types.StatusFragmentDoc,
  'query GetAllChangetypes {\n  allChangetype {\n    total\n    results {\n      ...changeType\n    }\n  }\n}': types.GetAllChangetypesDocument,
  'query GetAllProducts {\n  allSitecoreProduct(first: 25) {\n    total\n    results {\n      ...product\n    }\n  }\n}': types.GetAllProductsDocument,
  'query GetAllStatus {\n  allStatus {\n    total\n    results {\n      ...status\n    }\n  }\n}': types.GetAllStatusDocument,
  'query GetLatestEntries($first: Int = 5, $after: String = "", $date: DateTime!) {\n  changelog: allChangelog(\n    orderBy: RELEASEDATE_DESC\n    first: $first\n    after: $after\n    where: {releaseDate_lt: $date}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}':
    types.GetLatestEntriesDocument,
  'query getNumberOfEntriesByProduct($productId: [ID]!) {\n  changelog: allChangelog(where: {sitecoreProduct: {changelog_ids: $productId}}) {\n    total\n  }\n}': types.GetNumberOfEntriesByProductDocument,
  'query GetStatusByIdentifier($identifier: String) {\n  allStatus(where: {identifier_eq: $identifier}) {\n    total\n    results {\n      ...status\n    }\n  }\n}': types.GetStatusByIdentifierDocument,
  'query SearchByDate($startDate: DateTime!, $endDate: DateTime!, $first: Int = 5, $after: String = "") {\n  changelog: allChangelog(\n    first: $first\n    after: $after\n    where: {releaseDate_between: [$startDate, $endDate]}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}':
    types.SearchByDateDocument,
  'query searchByProduct($date: DateTime, $productId: [ID], $changeTypeIds: [ID] = [], $first: Int = 5, $after: String = "") {\n  changelog: allChangelog(\n    orderBy: RELEASEDATE_DESC\n    first: $first\n    after: $after\n    where: {releaseDate_lt: $date, sitecoreProduct: {changelog_ids: $productId}, AND: {OR: [{changeType: {changelog_ids: $changeTypeIds}}]}}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}':
    types.SearchByProductDocument,
  'query searchByProductsAndChangeTypes($date: DateTime!, $productIds: [ID], $changeTypeIds: [ID], $first: Int = 5, $after: String = "") {\n  changelog: allChangelog(\n    orderBy: RELEASEDATE_DESC\n    first: $first\n    after: $after\n    where: {releaseDate_lt: $date, OR: [{sitecoreProduct: {changelog_ids: $productIds}}], AND: {OR: [{changeType: {changelog_ids: $changeTypeIds}}]}}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}':
    types.SearchByProductsAndChangeTypesDocument,
  'query searchByTitle($date: DateTime, $productId: [ID]) {\n  data: allChangelog(\n    first: 1\n    where: {releaseDate_lt: $date, sitecoreProduct: {changelog_ids: $productId}}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}':
    types.SearchByTitleDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'fragment changeType on Changetype {\n  id\n  name\n  changeType\n}'): typeof import('./graphql').ChangeTypeFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment changelogEntry on Changelog {\n  id\n  name\n  title\n  description\n  fullArticle\n  readMoreLink\n  breakingChange\n  version\n  releaseDate\n  image {\n    total\n    results {\n      ...media\n    }\n  }\n  sitecoreProduct {\n    total\n    results {\n      ...product\n    }\n  }\n  changeType {\n    total\n    results {\n      ...changeType\n    }\n  }\n  status {\n    total\n    results {\n      ...status\n    }\n  }\n}'
): typeof import('./graphql').ChangelogEntryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'fragment changelogEntrySummary on Changelog {\n  id\n  name\n  title\n  description\n  readMoreLink\n  breakingChange\n  version\n  releaseDate\n  image {\n    total\n    results {\n      ...media\n    }\n  }\n  sitecoreProduct {\n    total\n    results {\n      ...product\n    }\n  }\n  changeType {\n    total\n    results {\n      ...changeType\n    }\n  }\n  status {\n    total\n    results {\n      ...status\n    }\n  }\n}'
): typeof import('./graphql').ChangelogEntrySummaryFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'fragment media on Media {\n  id\n  name\n  fileName\n  fileUrl\n  description\n  fileWidth\n  fileHeight\n  fileId\n  fileSize\n  fileType\n}'): typeof import('./graphql').MediaFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'fragment product on SitecoreProduct {\n  id\n  name\n  productName\n  productDescription\n  darkIcon: productIconDark\n  lightIcon: productIconLight\n}'): typeof import('./graphql').ProductFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'fragment status on Status {\n  id\n  name\n  description\n  identifier\n}'): typeof import('./graphql').StatusFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'query GetAllChangetypes {\n  allChangetype {\n    total\n    results {\n      ...changeType\n    }\n  }\n}'): typeof import('./graphql').GetAllChangetypesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'query GetAllProducts {\n  allSitecoreProduct(first: 25) {\n    total\n    results {\n      ...product\n    }\n  }\n}'): typeof import('./graphql').GetAllProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: 'query GetAllStatus {\n  allStatus {\n    total\n    results {\n      ...status\n    }\n  }\n}'): typeof import('./graphql').GetAllStatusDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetLatestEntries($first: Int = 5, $after: String = "", $date: DateTime!) {\n  changelog: allChangelog(\n    orderBy: RELEASEDATE_DESC\n    first: $first\n    after: $after\n    where: {releaseDate_lt: $date}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}'
): typeof import('./graphql').GetLatestEntriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query getNumberOfEntriesByProduct($productId: [ID]!) {\n  changelog: allChangelog(where: {sitecoreProduct: {changelog_ids: $productId}}) {\n    total\n  }\n}'
): typeof import('./graphql').GetNumberOfEntriesByProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetStatusByIdentifier($identifier: String) {\n  allStatus(where: {identifier_eq: $identifier}) {\n    total\n    results {\n      ...status\n    }\n  }\n}'
): typeof import('./graphql').GetStatusByIdentifierDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query SearchByDate($startDate: DateTime!, $endDate: DateTime!, $first: Int = 5, $after: String = "") {\n  changelog: allChangelog(\n    first: $first\n    after: $after\n    where: {releaseDate_between: [$startDate, $endDate]}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}'
): typeof import('./graphql').SearchByDateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query searchByProduct($date: DateTime, $productId: [ID], $changeTypeIds: [ID] = [], $first: Int = 5, $after: String = "") {\n  changelog: allChangelog(\n    orderBy: RELEASEDATE_DESC\n    first: $first\n    after: $after\n    where: {releaseDate_lt: $date, sitecoreProduct: {changelog_ids: $productId}, AND: {OR: [{changeType: {changelog_ids: $changeTypeIds}}]}}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}'
): typeof import('./graphql').SearchByProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query searchByProductsAndChangeTypes($date: DateTime!, $productIds: [ID], $changeTypeIds: [ID], $first: Int = 5, $after: String = "") {\n  changelog: allChangelog(\n    orderBy: RELEASEDATE_DESC\n    first: $first\n    after: $after\n    where: {releaseDate_lt: $date, OR: [{sitecoreProduct: {changelog_ids: $productIds}}], AND: {OR: [{changeType: {changelog_ids: $changeTypeIds}}]}}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}'
): typeof import('./graphql').SearchByProductsAndChangeTypesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query searchByTitle($date: DateTime, $productId: [ID]) {\n  data: allChangelog(\n    first: 1\n    where: {releaseDate_lt: $date, sitecoreProduct: {changelog_ids: $productId}}\n  ) {\n    pageInfo {\n      hasNext\n      endCursor\n    }\n    total\n    results {\n      ...changelogEntry\n    }\n  }\n}'
): typeof import('./graphql').SearchByTitleDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
