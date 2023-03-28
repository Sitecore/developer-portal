export async function fetchAPI(query: string, preview?: boolean) {
  // Default to delivery environment
  let endpoint: string = process.env.SITECORE_CHONE_ENDPOINT_DELIVERY as string;
  let token: string = process.env.SITECORE_CHONE_AUTH_TOKEN_DELIVERY as string;

  if (preview) {
    // Use preview environment
    endpoint = process.env.SITECORE_CHONE_ENDPOINT_PREVIEW as string;
    token = process.env.SITECORE_CHONE_AUTH_TOKEN_PREVIEW as string;
  }

  return fetch(endpoint as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-GQL-Token': token,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
}
