import { SearchChangeLogQueryParams } from "./types";

export function buildSearchQuery({ path, uuid, term, sources }: SearchChangeLogQueryParams) {
  const contextNode = buildContextNode({ path, uuid });
  return `
  {
    ${contextNode}
    ,
    "widget": {
      "items": [
        {
          "entity": "content",
          "rfk_id": "rfkid_chatbot",
          "sources": ${JSON.stringify(sources)},
          "search": {
            "content": {},
            "limit": 5,
            "sort": {
              "value": [
                  {
                      "name": "suggested"
                  }
              ]
            },
            "query": {
              "keyphrase": "${cleanTerm(term)}"
            }
          } 
        }
      ]
    }
  }
`;
}

function cleanTerm(term: string) {
  return term.replace(/[sS]itecore/g, '')
    .replace(/[sS][uU][gG][cC][oO][nN]/g, '');
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