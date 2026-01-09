import { Changelog } from '@lib/changelog';
import { ChangelogEntry, ChangelogEntryList, Product } from '@lib/changelog/types';
import { getQueryValue } from '@/src/lib/utils/requests';
import { slugify } from '@/src/lib/utils/stringUtil';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<Array<ChangelogEntry>>>) => {
  const currentProduct: string = getQueryValue(req.query.product);
  const limit: string = getQueryValue(req.query.limit);
  const end = getQueryValue(req.query.end);

  // Use preview endpoint
  const changelog = new Changelog(getChangelogCredentials(), true);

  const allProducts = await changelog.getProducts().then((response: Array<Product>) => {
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
