import { ChangeLogSearchFacet, ChangelogFilter, SearchChangeLogQueryParams } from "./types";

export function buildSearchQuery({ path, limit = 10, offset = 0, uuid, facets, enabledFacets, filters }: SearchChangeLogQueryParams) {
  const contextNode = buildContextNode({ path, uuid });
  const filterNode = buildFilterNode({ filters });
  const facetNode = buildFacetQuery({ facets, enabledFacets });
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
            ${filterNode}
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
            ${filterNode}
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

export function buildFilterNode({ filters }: { filters?: ChangelogFilter[] }) {
  if (filters && filters.length > 0) {
    return `
      "filter": {
        "type": "and",
        "filters": [
          ${filters.map(f => `
            {
              "name": "${f.name}",
              "type": "${f.type}",
              "value": "${f.value}"
            }
          `).join(',')}
        ]
      },
    `;
  }
  return '';
}

export function buildFacetQuery({ facets, enabledFacets }: { facets: ChangeLogSearchFacet[], enabledFacets: string[] }) {
  return `
    "facet": {
      "all": false,
      "types": [
        ${buildFacetTypes({ facets, enabledFacets })}
      ]
    },
  `;
}

export function buildFacetTypes({ facets, enabledFacets }: { facets: ChangeLogSearchFacet[], enabledFacets: string[] }) {
  let facetTypes = '';

  if (enabledFacets.includes('changeTypeName'))
    facetTypes += buildFacetType({ facets, facetName: 'changeTypeName' });

  if (enabledFacets.length > 1)
    facetTypes += ',';

  if (enabledFacets.includes('product_names'))
    facetTypes += buildFacetType({ facets, facetName: 'product_names' });

  return facetTypes
}

export function buildFacetType({ facets, facetName }: { facets: ChangeLogSearchFacet[], facetName: string }) {
  return `
    {
      "name": "${facetName}",
      "sort": {
          "name": "text",
          "order": "asc"
      }
      ${buildFacetSelection(facetName, facets)}
    } 
  `;
}

export function buildFacetSelection(facetName: string, facets: ChangeLogSearchFacet[]) {
  for (let i = 0; i < facets.length; i++) {
    const facet = facets[i];
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