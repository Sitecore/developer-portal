import { Err, Ok } from 'ts-results';
import { ALL_CHANGE_TYPE_QUERY } from '../graphQl/change-type-query';
import { ChangelogCredentials } from '../types/changelog';
import { fetchAPI } from './common/api';

export async function GetAllChangeTypes(credentials: ChangelogCredentials, preview: boolean) {
  const response = await fetchAPI(credentials, ALL_CHANGE_TYPE_QUERY, preview);

  if (!response) return new Err({ data: [] });

  return new Ok(response.data);
}
