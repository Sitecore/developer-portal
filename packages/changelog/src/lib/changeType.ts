import { ALL_CHANGE_TYPE_QUERY } from '../graphQl/change-type-query';
import { ChangelogCredentials } from '../types/changelog';
import { fetchAPI } from './common/api';

export async function GetAllChangeTypes(credentials: ChangelogCredentials, preview: boolean) {
  const response = await fetchAPI(credentials, ALL_CHANGE_TYPE_QUERY, preview);
  return response.data;
}
