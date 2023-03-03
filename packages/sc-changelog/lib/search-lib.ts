import { CHANGELOG_QUERY, CHANGELOG_SUMMARY_QUERY } from '../graphQl/changelog-query';
import Changelog, { ChangelogBase, ChangelogList } from '../types/changelog';
import { fetchAPI } from './common/api';

export async function PaginatedSearch(pageSize: number, endCursor: string, productId?: string, changeTypeId?: string) {
  if (!pageSize) pageSize = 10;

  return Search(productId, changeTypeId, undefined, undefined, pageSize, endCursor);
}

export async function Search(productId?: string, changeTypeId?: string, summary?: boolean, searchTerm?: string, pageSize?: number, endCursor?: string) {
  const searchQuery = `
    { 
      data: allChangelog (
          orderBy: RELEASEDATE_DESC
          ${buildParameters(productId, changeTypeId, searchTerm, pageSize, endCursor)}
        ) {
          pageInfo {
            hasNext
            endCursor
          }
          total
          results{
            ${summary ? CHANGELOG_SUMMARY_QUERY : CHANGELOG_QUERY}
          }
        }
      }
  `;
  const response = await fetchAPI(searchQuery);
  return response.data;
}

function buildParameters(productId?: string, changeTypeId?: string, searchTerm?: string, pageSize?: number, endCursor?: string): string {
  let parameters = ``;

  if (pageSize) parameters += `first: ${pageSize} \n`;
  if (endCursor) parameters += `after: "${endCursor}" \n`;

  parameters += buildWhereClause(searchTerm, productId, changeTypeId);
  return parameters;
}

/*
  Building the complex WHERE clause based on parameters
*/
function buildWhereClause(searchTerm?: string, productId?: string, changeTypeId?: string) {
  if (!searchTerm && !productId && !changeTypeId) return '';

  let whereClause = `where: { AND: [`;
  whereClause += buildChangeTypeClause(changeTypeId);
  whereClause += buildProductIdClause(productId);
  whereClause += buildSearchTermClause(searchTerm);
  whereClause += `]}`;

  return whereClause;
}

/*
  Handle each parameter
*/

function buildSearchTermClause(searchTerm?: string): string {
  let whereClauseSearchTerm = '';

  if (!searchTerm) return whereClauseSearchTerm;

  // We want each word to match therefore grouping by AND operator
  whereClauseSearchTerm += `{ AND: [`;

  // Making sure to validate each word in case we have a phrase as search term
  const searchArray = searchTerm.split(' ');

  searchArray.forEach((term: string) => {
    whereClauseSearchTerm += `{title_contains: "${term}"}`;
  });

  whereClauseSearchTerm += `]}`;
  return whereClauseSearchTerm;
}

function buildChangeTypeClause(changeTypeId?: string): string {
  if (!changeTypeId || changeTypeId == undefined) return '';

  return `{changeType: { changelog_ids: "${changeTypeId}"}}`;
}

function buildProductIdClause(productId?: string): string {
  if (!productId || productId == undefined) return '';

  return `{sitecoreProduct: { changelog_ids: "${productId}"}}`;
}

/*
  Extracting the raw data into changelog items
*/

export function extractBasePosts({ data }: { data: ChangelogList }) {
  return data.results.map((post: ChangelogBase) => {
    return post;
  });
}
export function extractPosts({ data }: { data: ChangelogList }) {
  return data.results.map((post: Changelog) => {
    return post;
  });
}
