import { CHANGELOG_QUERY, CHANGELOG_SUMMARY_QUERY } from '../graphQl/changelog-query';
import Changelog, { ChangelogBase, ChangelogList } from '../types/changelog';
import { fetchAPI } from './common/api';

export async function getSearchResultsChangelogs(searchTerm: string, changeTypeId: string, sitecoreProductid: string, summary?: boolean): Promise<Changelog[]> {
  let searchQuery = '';

  const whereClause = getChangelogSearchWhereClause(searchTerm, changeTypeId, sitecoreProductid);

  let query = CHANGELOG_QUERY;

  if (summary == true) {
    query = CHANGELOG_SUMMARY_QUERY;
  }

  searchQuery = `{ 
      data: allChangelog ${whereClause}
      {total
        results{
          ${query}
        }
      }
    }`;

  const data = await fetchAPI(searchQuery);
  return extractPosts(data.data);
}

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

function getChangelogSearchWhereClause(searchTerm: string, changeTypeId: string, sitecoreProductid: string) {
  //validate search Terms and build query accordingly.
  let whereClause = '';
  let whereClauseSearchTerm = '';

  let searchTermSet = false;
  let changeTypeFaceSet = false;
  let sitecoreProductFacetSet = false;

  //null-checks
  if (searchTerm != undefined && searchTerm != null) {
    searchTermSet = true;
  }
  if (changeTypeId != null && changeTypeId != '0') {
    changeTypeFaceSet = true;
  }
  if (sitecoreProductid != null && sitecoreProductid != '0') {
    sitecoreProductFacetSet = true;
  }
  if (searchTermSet) {
    if (searchTerm.split(' ').length == 0) {
      whereClauseSearchTerm = `{AND:[
        {name_contains: "${searchTerm}"}
        {title_contains: "${searchTerm}"}     				
      ]}`;
    } else {
      const searchArray = searchTerm.split(' ');
      const termClause: string[] = [];

      searchArray.forEach((term: string) => {
        termClause.push(`{name_contains: "${term}"}`);
      });
      searchArray.forEach((term: string) => {
        termClause.push(`{title_contains: "${term}"}`);
      });

      whereClauseSearchTerm = `{AND:[
        ${termClause.join()}
      ]}`;
    }
  }

  if (searchTermSet || changeTypeFaceSet || sitecoreProductFacetSet) {
    //build where clause if any is set
    whereClause = `(where:`;
    if (changeTypeFaceSet || sitecoreProductFacetSet) {
      whereClause = whereClause + `{AND: [`;

      if (changeTypeFaceSet) {
        whereClause = whereClause + `{changeType: { changelog_ids: "${changeTypeId}"}}`;
      }
      if (sitecoreProductFacetSet) {
        whereClause = whereClause + `{sitecoreProduct: {changelog_ids: "${sitecoreProductid}"}}`;
      }

      if (searchTermSet) {
        whereClause = whereClause + whereClauseSearchTerm;
      }

      whereClause = whereClause + `]}`;
    } else if (searchTermSet) {
      whereClause = whereClause + whereClauseSearchTerm;
    }

    whereClause = whereClause + `)`;
  }

  return whereClause;
}
