import { getReleaseNotesByProduct } from 'sc-changelog/getReleaseNotes';
import { Product } from 'sc-changelog/types';

export default function Web() {
  return (
    <div>
      <h1 className="testmva">Release Notes</h1>

      {getReleaseNotesByProduct(Product.ContentHubOne)}
    </div>
  );
}
