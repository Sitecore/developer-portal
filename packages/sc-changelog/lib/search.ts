import { CHANGELOG_QUERY, CHANGELOG_SUMMARY_QUERY } from '../graphQl/changelog-query';
import { Changelog, ChangelogBase, ChangelogList } from '../types/changelog';
import { fetchAPI } from './common/api';

export async function PaginatedSearch(isPreview: boolean, pageSize: number, endCursor: string, productId?: string, changeTypeId?: string) {
  if (!pageSize) pageSize = 10;

  return Search(isPreview, productId, changeTypeId, undefined, undefined, pageSize, endCursor);
}

export async function Search(isPreview: boolean, productId?: string, changeTypeId?: string, summary?: boolean, searchTerm?: string, pageSize?: number, endCursor?: string) {
  const searchQuery = `
    { 
      data: allChangelog (
          orderBy: RELEASEDATE_DESC
          ${buildParameters(productId, changeTypeId, searchTerm, pageSize, endCursor, isPreview)}
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

  const response = await fetchAPI(searchQuery, isPreview);
  if(!response) return {data: []};
  return response.data;
}

function buildParameters(productId?: string, changeTypeId?: string, searchTerm?: string, pageSize?: number, endCursor?: string, isPreview?: boolean): string {
  let parameters = ``;

  if (pageSize) parameters += `first: ${pageSize} \n`;
  if (endCursor) parameters += `after: "${endCursor}" \n`;

  parameters += buildWhereClause(searchTerm, productId, changeTypeId, isPreview);
  return parameters;
}

const openWHERE = `where: { releaseDate_lt: "${new Date().toISOString()}" `;
const openWHEREinPreview = `where: { `;
const openAND = ' AND: [';
const openCombinedANDOR = 'AND: { OR: [';
const closeCombinedANDOR = ']}';
const openOR = ' OR: [';
const closeANDOR = ']';
const closeWHERE = '}';

/*
  Building the complex WHERE clause based on parameters
*/
function buildWhereClause(searchTerm?: string, productId?: string, changeTypeId?: string, isPreview?: boolean) {
  if (!searchTerm && !productId && !changeTypeId) {
    if (isPreview) return '';
    return `where: { releaseDate_lt: "${new Date().toISOString()}" }`;
  }

  const pId = productId?.split('|');
  const multipleProducts = pId != undefined && pId.length > 1;

  const cId = changeTypeId?.split('|');
  const multipleChangeTypes = cId != undefined && cId.length > 1;

  let whereClause = isPreview ? openWHEREinPreview : openWHERE;

  // Check product(s)
  if (multipleProducts) {
    whereClause += buildProductsClause(pId);
  } else {
    whereClause += buildProductIdClause(productId);
  }

  // Check changetype(s)
  if (multipleChangeTypes) {
    whereClause += buildChangeTypesClause(cId, multipleProducts);
  } else {
    whereClause += buildChangeTypeClause(changeTypeId);
  }

  if (searchTerm) {
    whereClause += buildSearchTermClause(searchTerm);
  }

  // else {
  //whereClause += `{ releaseDate_lt: "${new Date().toISOString()}" }`;
  //}

  whereClause += closeWHERE;
  return whereClause;
}

/*
  Handle each parameter
*/

function buildSearchTermClause(searchTerm?: string): string {
  let whereClauseSearchTerm = '';

  if (!searchTerm) return whereClauseSearchTerm;

  // We want each word to match therefore grouping by AND operator
  whereClauseSearchTerm += `AND: [`;

  // Making sure to validate each word in case we have a phrase as search term
  if (searchTerm != undefined) {
    const searchArray = searchTerm.split('-');

    searchArray.forEach((term: string) => {
      whereClauseSearchTerm += `{title_contains: "${term}"}`;
    });
  }
  //whereClauseSearchTerm += `{ releaseDate_lt: "${new Date().toISOString()}" }`;

  whereClauseSearchTerm += `]`;
  return whereClauseSearchTerm;
}

// Match multiple changetype
function buildChangeTypesClause(changeTypeIds: string[], multipleProducts: boolean): string {
  let changeTypeClause: string = multipleProducts ? openCombinedANDOR : openOR;

  changeTypeIds.map((changeTypeId) => {
    changeTypeClause += `{changeType: { changelog_ids: "${changeTypeId}"}}`;
  });

  changeTypeClause += multipleProducts ? closeCombinedANDOR : closeANDOR;
  return changeTypeClause;
}

// Match single changetype
function buildChangeTypeClause(changeTypeId?: string): string {
  if (!changeTypeId || changeTypeId == undefined) return '';

  let changeTypeClause: string = openAND;
  changeTypeClause += `{changeType: { changelog_ids: "${changeTypeId}"}}`;
  changeTypeClause += closeANDOR;

  return changeTypeClause;
}

function buildProductsClause(productIds: string[]): string {
  let productsClause: string = openOR;

  productIds.map((productId) => {
    productsClause += `{sitecoreProduct: { changelog_ids: "${productId}"}}`;
  });

  productsClause += closeANDOR;
  return productsClause;
}

function buildProductIdClause(productId?: string): string {
  if (!productId || productId == undefined) return '';

  return ` sitecoreProduct: { changelog_ids: "${productId}"}`;
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
