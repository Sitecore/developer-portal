import { ALL_CHANGE_TYPE_QUERY } from '../graphQl/change-type-query';
import { fetchAPI } from './common/api';

export async function GetAllChangeTypes(preview: boolean) {
  const response = await fetchAPI(ALL_CHANGE_TYPE_QUERY, preview);
  return response.data;
}
