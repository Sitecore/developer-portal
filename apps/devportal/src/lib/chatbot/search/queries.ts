import { SearchChangeLogQueryParams } from "./types";

export function buildSearchQuery({ path, uuid, term }: SearchChangeLogQueryParams) {
  const contextNode = buildContextNode({ path, uuid });
  return `
  {
    ${contextNode}
    ,
    "widget": {
      "items": [
        {
          "entity": "content",
          "rfk_id": "rfkid_7",
          "sources": [
              "813872"
          ],
          "search": {
            "content": {},
            "query": {
              "keyphrase": "${term}"
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