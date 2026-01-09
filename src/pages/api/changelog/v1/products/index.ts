// Interfaces
import { Changelog } from '@lib/changelog';
import { Product } from '@lib/changelog/types';
import { getQueryValue } from '@/src/lib/utils/requests';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

const handler = async (req: NextApiRequest, res: NextApiResponse<Array<Product>>) => {
  const showAll: boolean = getQueryValue(req.query.all) == 'false' ? false : true;
  const isPreview = req.preview ? true : false;

  res.setHeader('Cache-Control', 'stale-while-revalidate');

  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog.getProducts().then((response: Array<Product>) => {
    if (showAll) {
      res.status(200).json(response);
    } else {
      res.status(200).json(response.filter((e) => e.hasEntries));
    }
  });
};

export default handler;
