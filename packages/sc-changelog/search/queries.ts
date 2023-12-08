import { SearchChangeLogQueryParams } from "./types";

export function buildSearchQuery({ path, limit = 10, offset = 0, uuid }: SearchChangeLogQueryParams) {
  const contextNode = buildContextNode({ path, uuid });
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
            "facet": {
              "all": false,
              "types": [
                {
                  "name": "changeTypeName",
                  "sort": {
                      "name": "text",
                      "order": "asc"
                  }
                },
                {
                  "name": "product_names",
                  "sort": {
                      "name": "text",
                      "order": "asc"
                  }
                }
              ]
            },
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