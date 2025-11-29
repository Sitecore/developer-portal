import { GetAllChangetypesQuery } from '@data/gql/generated/graphql';
import { getStringValue, slugify } from '@lib/utils';

export type ChangeType = {
  id: string;
  name: string;
  changeType: string;
  type: string;
};

export function ParseChangeType(data: GetAllChangetypesQuery): Array<ChangeType> {
  if (!data.manyChangetype?.results) {
    return [];
  }

  return data.manyChangetype.results?.map((x) => ({
    name: getStringValue(x?.system.name),
    changeType: getStringValue(x?.changeType),
    id: getStringValue(x?.system.id),
    type: slugify(getStringValue(x?.system.name)),
  }));
}
