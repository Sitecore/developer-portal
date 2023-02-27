import { generateHTML } from '@tiptap/html';
import { GetProductByProductId } from '../constants/products';
import { richTextProfile } from '../lib/common/richTextConfiguration';
import Changelog from './changelog';
import ChangeType from './changeType';
import { Media } from './index';
import SitecoreProduct from './sitecoreProduct';
// eslint-disable-next-line @typescript-eslint/no-var-requires

type ChangelogEntry = {
  id: string;
  name: string;
  readMoreLink: string;
  title: string;
  description: string;
  breakingChange: boolean;
  sitecoreProduct: SitecoreProduct[];
  changeType: ChangeType[];
  version: string;
  releaseDate: string;
  image: Media[];
  imageId?: string;
};

export default ChangelogEntry;

export function ParseRawData(data: Changelog[]): ChangelogEntry[] {
  return data.map((item: Changelog) => {
    return parseChangeLogItem(item);
  });
}

function parseChangeLogItem(changelog: Changelog): ChangelogEntry {
  return {
    id: changelog.id,
    name: changelog.name,
    readMoreLink: changelog.readMoreLink,
    title: changelog.title,
    description: generateHTML(changelog.description, [richTextProfile]),
    breakingChange: changelog.breakingChange,
    sitecoreProduct: changelog.sitecoreProduct.results,
    changeType: changelog.changeType.results,
    version: changelog.version,
    releaseDate: new Date(changelog.releaseDate).toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' }),
    image: changelog.image.results,
    imageId: GetProductByProductId(changelog.sitecoreProduct.results[0].id)?.imageId,
  };
}
