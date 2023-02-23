import { Product } from './types';
import { ChangeType } from './types/index';

export function getReleaseNotes() {
  return 'HelloWorld!';
}

export function getReleaseNotesByProduct(product: Product): string {
  return `Hello ${product}`;
}

export function getReleaseNotesByProductAndChangeType(
  product: Product,
  changeType: ChangeType
): string {
  return `Hello ${product} - filter by ${changeType}`;
}
