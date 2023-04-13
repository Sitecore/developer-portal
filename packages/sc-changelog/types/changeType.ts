import { slugify } from '../utils/stringUtils';

type ChangeType = {
  id: string;
  name: string;
  changeType: string;
  type: string;
};
export default ChangeType;

export type ChangeTypeResults = {
  total: string;
  results: ChangeType[];
};

export function ParseChangeType(data: ChangeTypeResults): ChangeType[] {
  return data.results.map((x) => {
    return {
      name: x.name,
      changeType: x.changeType,
      id: x.id,
      type: slugify(x.name),
    };
  });
}
