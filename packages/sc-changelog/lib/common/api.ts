import axios from 'axios';
import axiosThrottle from 'axios-request-throttle';

export async function fetchAPI(query: string, preview?: boolean) {
  // Default to delivery environment
  let endpoint: string = process.env.SITECORE_CHONE_ENDPOINT_DELIVERY as string;
  let token: string = process.env.SITECORE_CHONE_AUTH_TOKEN_DELIVERY as string;

  if (preview) {
    // Use preview environment
    endpoint = process.env.SITECORE_CHONE_ENDPOINT_PREVIEW as string;
    token = process.env.SITECORE_CHONE_AUTH_TOKEN_PREVIEW as string;
    axiosThrottle.use(axios, { requestsPerSecond: 15 });
  }

  return axios
    .post(endpoint as string, JSON.stringify({ query }), {
      headers: {
        'Content-Type': 'application/json',
        'X-GQL-Token': token,
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));

  //return fetch(endpoint as string, {
  //  method: 'POST',
  //  headers: {
  //    'Content-Type': 'application/json',
  //    'X-GQL-Token': token,
  //  },
  //  body: JSON.stringify({ query }),
  //}).then((response) => response.json());
}
