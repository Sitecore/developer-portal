import { ChangeLogSearchFacet, SearchChangeLogQueryParams } from "./types";

export function buildSearchQuery({ path, limit = 10, offset = 0, uuid, facets }: SearchChangeLogQueryParams) {
  const contextNode = buildContextNode({ path, uuid });
  const facetNode = buildFacetQuery({ facets });
  return `
  {
    ${contextNode}
    ,
    "widget": {
      "items": [
        {
          "entity": "content",
          "rfk_id": "rfk_changelog",
          "search": {
            "content": {},
            "limit": ${limit},
            "offset": ${offset},
            ${facetNode}
            "sort": {
              "value":
              [
                {
                  "name": "release_date_desc"
                }
              ]
            }
          }
        },
        {
          "entity": "content",
          "rfk_id": "rfk_changelogbymonth",
          "search": {
            "content": {},
            "limit": 50,
            "offset": 0,
            ${facetNode}
            "sort": {
              "value":
              [
                {
                  "name": "release_date_desc"
                }
              ]
            }
          }
        }
      ]
    }
  }
`;
}

export function buildContextNode({ path, uuid }: { path: string, uuid: string | undefined }) {
  const uuidNode = uuid ? `
      ,
      "user": {
        "uuid": "${uuid}"
      }  
  `: '';
  const contextNode = `
    "context": {
      "page": {
        "uri": "${path}"
      }
      ${uuidNode}
    }
  `;
  return contextNode;
}

export function buildFacetQuery({ facets }: { facets: ChangeLogSearchFacet[] }) {
  return `
    "facet": {
      "all": false,
      "types": [
        {
          "name": "changeTypeName",
          "sort": {
              "name": "text",
              "order": "asc"
          }
          ${buildFacetSelection('changeTypeName', facets)}
        },
        {
          "name": "product_names",
          "sort": {
              "name": "text",
              "order": "asc"
          }
          ${buildFacetSelection('product_names', facets)}
        }
      ]
    },
  `;
}

export function buildFacetSelection(facetName: string, facets: ChangeLogSearchFacet[]) {
  for (let i = 0; i < facets.length; i++) {
    const facet = facets[i];
    // console.log(facet.name, facetName, facet.name === facetName);
    if (facet.name === facetName && facet.value.some((v: { selected: boolean; }) => v.selected)) {
      return `
      ,"filter": {
        "type": "or",
        "values": [
          ${facet.value.filter((v: { selected: boolean; }) => v.selected).map((v: { id: string; }) => `"${v.id}"`).join(',')}
        ]
      }
    `;
    }
  }
  return '';
}