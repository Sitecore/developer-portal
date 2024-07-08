import { GetAllChangetypesQuery } from '../gql/generated/graphql';
import { getStringValue, slugify } from '../utils/stringUtils';

export type ChangeType = {
  id: string;
  name: string;
  changeType: string;
  type: string;
};

export function ParseChangeType(data: GetAllChangetypesQuery): ChangeType[] {
  if (!data.allChangetype?.results) {
    return [];
  }

  return data.allChangetype.results?.map((x) => ({
    name: getStringValue(x?.name),
    changeType: getStringValue(x?.changeType),
    id: getStringValue(x?.id),
    type: slugify(getStringValue(x?.name)),
  }));
}
