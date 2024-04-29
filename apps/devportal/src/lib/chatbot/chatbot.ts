export type SearchQuery = {
  currentMessage: string;
};

export function querySearchApi(query: SearchQuery): any {
  const body = `
    {
      "context": {
          "page": {
              "uri": "/"
          }
          ,
      "locale": {
        "country": "us",
        "language": "en"
      }
      },
      "widget": {
          "items": [
              {
                  "entity": "content",
                  "rfk_id": "rfkid_7",
                  "search": {
                      "content": {},
                      "query": {
                          "keyphrase": "${query.currentMessage}"
                      }
                  },
                  "sources": [
                      "813872"
                  ]
              }
          ]
      }
    }
 `;
}