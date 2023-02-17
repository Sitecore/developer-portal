import { Product } from './types';

export function getReleaseNotes() {
  return 'HelloWorld!';
}

export function getReleaseNotesByProduct(product: Product) {
  if (product == Product.CDP) {
    return 'Hello CDP';
  }

  return 'HelloWorld!';
}
