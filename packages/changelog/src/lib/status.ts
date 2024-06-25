import { ALL_STATUS_QUERY } from '../graphQl/status.graphql';
import { ChangelogCredentials } from '../types/changelog';
import { fetchAPI } from './common/api';

export async function GetAllStatuses(credentials: ChangelogCredentials, preview: boolean) {
  const response = await fetchAPI(credentials, ALL_STATUS_QUERY, preview);
  return response.data;
}
