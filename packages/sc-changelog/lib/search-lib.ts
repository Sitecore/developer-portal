import { CHANGELOG_QUERY } from "../graphQl/changelog-query";
import Changelog, { ChangelogList } from "../types/changelog";
import { fetchAPI } from "./common/api";

export async function getSearchResultsChangelogs(searchTerm: any, changeTypeFacet: any, sitecoreProductFacet: any): Promise<Changelog[]> {
  var searchQuery = '';
  
  const whereClause = getChangelogSearchWhereClause(searchTerm,changeTypeFacet,sitecoreProductFacet);

    searchQuery =  `{ 
      data: allChangelog ${whereClause}
      {total
        results{
          ${CHANGELOG_QUERY}
        }
      }
    }`;

    //console.log(searchQuery);

    const data = await fetchAPI(searchQuery);    
    return extractPosts(data.data);
}

function extractPosts({ data }: { data: ChangelogList }) {
    return data.results.map((post: Changelog) => {
      return post;
    });
}

function getChangelogSearchWhereClause(searchTerm: any, changeTypeFacet: any, sitecoreProductFacet: any)  {
  //validate search Terms and build query accordingly.
  var whereClause = '';
  var whereClauseSearchTerm = '';
  
  var searchTermSet = false;
  var changeTypeFaceSet = false;
  var sitecoreProductFacetSet = false; 

  //null-checks
  if (searchTerm != undefined && searchTerm != null) {searchTermSet = true;}
  if (changeTypeFacet != null && changeTypeFacet != 0) {changeTypeFaceSet = true;}
  if (sitecoreProductFacet != null && sitecoreProductFacet != 0 ) {sitecoreProductFacetSet = true;}

  if (searchTermSet) {
    whereClauseSearchTerm = `{OR:[
      {name_contains: "${searchTerm}"}
      {title_contains: "${searchTerm}"}     				
    ]}`;
  }

  if (searchTermSet || changeTypeFaceSet || sitecoreProductFacetSet) {
    //build where clause if any is set
    whereClause = `(where:`;
    if (changeTypeFaceSet || sitecoreProductFacetSet) {
      whereClause = whereClause + `{AND: [`;

      if (changeTypeFaceSet) {
        whereClause = whereClause + `{changeType: { releaseNote_ids: "${changeTypeFacet}"}}`;
      }
      if (sitecoreProductFacetSet) {
        whereClause = whereClause + `{sitecoreProduct: {releaseNote_ids: "${sitecoreProductFacet}"}}`;
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