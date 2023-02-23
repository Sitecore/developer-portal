import { ChangeTypeConfig } from '../configuration';
import { ChangeType } from '../types';
import { getSlug } from '../utils/stringUtils';

const ChangeTypes: ChangeTypeConfig[] = [
  {
    type: ChangeType.Bugfix,
    name: 'Bugfix',
    entityId: 'entityId',
    entityName: 'entityName',
  },
  {
    type: ChangeType.Improvement,
    name: 'Improvement',
    entityId: 'entityId',
    entityName: 'entityName',
  },
  {
    type: ChangeType.NewFeature,
    name: 'New Feature',
    entityId: 'entityId',
    entityName: 'entityName',
  },
];

export default ChangeTypes;

export function GetChangeTypeBySlug(change: string): ChangeTypeConfig | undefined {
  //const _product = Product[productName as keyof typeof Product];
  const first = ChangeTypes.find((obj) => {
    return getSlug(obj.name) === change;
  });

  return first;
}
