import axios from 'axios';
import axiosThrottle from 'axios-request-throttle';
import { ChangelogCredentials } from '../../types/changelog';

export async function fetchAPI(credentials: ChangelogCredentials, query: string, preview?: boolean) {
  // Default to delivery environment
  let endpoint: string = credentials.production.endpoint as string;
  let token: string = credentials.production.token as string;

  if (preview) {
    // Use preview environment
    endpoint = credentials.preview.endpoint as string;
    token = credentials.preview.token as string;
    axiosThrottle.use(axios, { requestsPerSecond: 15 });
  }

  if (endpoint === undefined || token === undefined) {
    console.warn('WARNING: Missing CH ONE endpoint or token');
    return null;
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
