import { getReleaseNotesByProduct } from 'sc-changelog/getReleaseNotes';
import { Product } from 'sc-changelog/types';
import { Button } from 'ui';

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      {getReleaseNotesByProduct(Product.CDP)}
    </div>
  );
}
