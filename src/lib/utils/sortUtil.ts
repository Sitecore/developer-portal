export class SortUtil {
  static sortByProperty<T>(array: T[], propName: keyof T, order: 'ASC' | 'DESC'): void {
    array.sort((a, b) => {
      if (a[propName] < b[propName]) {
        return -1;
      }

      if (a[propName] > b[propName]) {
        return 1;
      }
      return 0;
    });

    if (order === 'DESC') {
      array.reverse();
    }
  }
}
