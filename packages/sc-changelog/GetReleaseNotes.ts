import { Product } from './types';

export function GetReleaseNotes() {
  return 'HelloWorld!';
}

export function GetReleaseNotesByProduct(product: Product) {
  if (product == Product.CDP) {
    return 'Hello CDP';
  }

  return 'HelloWorld!';
}
