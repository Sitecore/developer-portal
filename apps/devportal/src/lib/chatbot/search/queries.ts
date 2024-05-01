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
            "813854",
            "813856",
            "813862",
            "813864",
            "813866",
            "813870",
            "813872",
            "819952",
            "823430",
            "848150",
            "925876",
            "856095",
            "878961",
            "848618"
          ],
          "search": {
            "content": {},
            "limit": 5,
            "sort": {
              "value": [
                  {
                      "name": "created_at_desc"
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