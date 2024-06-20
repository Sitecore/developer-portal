import { getChangelogCredentials } from '@/src/lib/changelog/changelog';
import { Changelog } from '@scdp/changelog';
import { ChangelogEntry, ChangelogEntryList, Product } from '@scdp/changelog/types';
import { getQueryValue, slugify } from '@scdp/changelog/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<ChangelogEntry[]>>) => {
  const currentProduct: string = getQueryValue(req.query.product);
  const limit: string = getQueryValue(req.query.limit);
  const end = getQueryValue(req.query.end);

  // Use preview endpoint
  const changelog = new Changelog(getChangelogCredentials(), true);

  const allProducts = await changelog.getProducts().then((response: Product[]) => {
    return response;
  });

  const product: Product | undefined = allProducts.find((p) => slugify(p.name) == currentProduct);

  if (product == undefined) {
    res.status(404);
    res.end();
  } else {
    await changelog.getEntriesPaginated(limit, product.id, '', end).then((response) => {
      res.status(200).json(response);
    });
  }
};

export default handler;
