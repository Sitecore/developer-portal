import { GetAllChangetypesQuery } from '@data/gql/generated/graphql';
import { getStringValue, slugify } from '@lib/utils';

export type ChangeType = {
  id: string;
  name: string;
  changeType: string;
  type: string;
};

/**
 * Parse a single ChangeType from raw GraphQL data
 */
export function parseChangeTypeItem(rawItem: any): ChangeType {
  return {
    name: getStringValue(rawItem?.changeType),
    changeType: getStringValue(rawItem?.changeType),
    id: getStringValue(rawItem?.system?.id),
    type: slugify(getStringValue(rawItem?.system?.name)),
  };
}

/**
 * Parse multiple ChangeTypes from a GraphQL query result
 */
export function ParseChangeType(data: GetAllChangetypesQuery): Array<ChangeType> {
  if (!data.manyChangetype?.results) {
    return [];
  }

  return data.manyChangetype.results?.map((x) => parseChangeTypeItem(x));
}
