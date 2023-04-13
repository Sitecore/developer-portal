import { ALL_CHANGE_TYPE_QUERY } from '../graphQl/change-type-query';
import { fetchAPI } from './common/api';

export async function GetAllChangeTypes() {
  const response = await fetchAPI(ALL_CHANGE_TYPE_QUERY);
  return response.data;
}
