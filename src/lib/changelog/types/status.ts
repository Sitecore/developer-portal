import { GetAllStatusQuery } from '@data/gql/generated/graphql';
import { getStringValue } from '@lib/utils';

export type Status = {
  id: string;
  name: string;
  identifier: string;
  description: string;
};

export type StatusResults = {
  total: string;
  results: Array<Status>;
};

export const DefaultStatus: Status = {
  id: 'pNOVO2dhtESFOSwd4Va84w',
  name: 'Available',
  identifier: 'available',
  description: '',
};

export function ParseStatus(data: GetAllStatusQuery): Array<Status> {
  if (!data.manyStatus?.results) {
    return [];
  }

  return data.manyStatus?.results.map((x) => {
    return {
      name: getStringValue(x?.system.name),
      id: getStringValue(x?.system.id),
      identifier: getStringValue(x?.identifier),
      description: getStringValue(x?.description),
    };
  });
}
