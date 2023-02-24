export async function fetchAPI(query: string) {
  return fetch(process.env.SITECORE_ENDPOINT_URL as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-GQL-Token": process.env.SITECORE_DEV_AUTH_TOKEN as string,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
}