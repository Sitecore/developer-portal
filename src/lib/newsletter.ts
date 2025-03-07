import fs from 'fs';
import path from 'path';

import { ManifestConfig } from './interfaces/manifest';

export const getLatestNewsletter = async () => {
  const dataDirectory = path.join(process.cwd(), 'data/markdown');
  const pagesDirectory = path.join(dataDirectory, 'pages', 'newsletter');
  const manifest: ManifestConfig = JSON.parse(fs.readFileSync(path.join(pagesDirectory, 'manifest.json'), 'utf-8'));

  const redirectUrl = '/newsletter/' + manifest.routes[0].children[0].path;

  return redirectUrl;
};
