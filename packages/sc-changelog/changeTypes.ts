import { GetAllChangeTypes } from './lib/changeType';
import { ChangeType, ParseChangeType } from './types';

export default async function GetChangeTypes(isPreview: boolean): Promise<ChangeType[]> {
  const response = await GetAllChangeTypes(isPreview);
  return ParseChangeType(response.data);
}
