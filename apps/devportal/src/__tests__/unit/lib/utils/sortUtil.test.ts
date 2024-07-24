import { describe, expect, it } from 'vitest';
import { SortUtil } from '../../../../lib/utils/sortUtil';

describe('SortUtil', () => {
  describe('sortByProperty', () => {
    it('should sort the array in ascending order based on the specified property', () => {
      const array = [
        { id: 3, name: 'C' },
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
      ];

      SortUtil.sortByProperty(array, 'name', 'ASC');

      expect(array).toEqual([
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
      ]);
    });

    it('should sort the array in descending order based on the specified property', () => {
      const array = [
        { id: 3, name: 'C' },
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
      ];

      SortUtil.sortByProperty(array, 'name', 'DESC');

      expect(array).toEqual([
        { id: 3, name: 'C' },
        { id: 2, name: 'B' },
        { id: 1, name: 'A' },
      ]);
    });

    it('should not modify the array if the property values are equal', () => {
      const array = [
        { id: 1, name: 'A' },
        { id: 2, name: 'A' },
        { id: 3, name: 'A' },
      ];

      SortUtil.sortByProperty(array, 'name', 'ASC');

      expect(array).toEqual([
        { id: 1, name: 'A' },
        { id: 2, name: 'A' },
        { id: 3, name: 'A' },
      ]);
    });
  });
});
