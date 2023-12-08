export type SearchChangeLogQueryParams = {
  path: string;
  limit?: number;
  offset?: number;
}

export function buildSearchQuery({ path, limit = 10, offset = 0 }: SearchChangeLogQueryParams) {
  return `
  {
    "context": {
      "page": {
        "uri": "${path}"
      }
    },
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
                  "name": "changeTypeName"
                },
                {
                  "name": "product_names"
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