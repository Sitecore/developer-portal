import { ChangeTypeConfig } from '../configuration';
import { ChangeType } from '../types';
import { getSlug } from '../utils/stringUtils';

const ChangeTypes: ChangeTypeConfig[] = [
  {
    type: ChangeType.Bugfix,
    name: 'Bugfix',
    entityId: 'jNZQWrssyEaU7gwlIYpJnQ',
    entityName: 'Bugfix',
  },
  {
    type: ChangeType.Improvement,
    name: 'Improvement',
    entityId: 'UKvjuaa7QEC3ipciF1O_ag',
    entityName: 'Improvement',
  },
  {
    type: ChangeType.NewFeature,
    name: 'New Feature',
    entityId: 'bPCLEiNA4kmJspgn4lmizA',
    entityName: 'New Feature',
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
