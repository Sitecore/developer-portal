// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import GetProducts from 'sc-changelog/products';
import { Product } from 'sc-changelog/types';
import { getQueryValue } from 'sc-changelog/utils/requests';

const handler = async (req: NextApiRequest, res: NextApiResponse<Product[]>) => {
  const showAll: boolean = getQueryValue(req.query.all) == 'false' ? false : true;
  const isPreview = req.preview ? true : false;

  res.setHeader('Cache-Control', 'stale-while-revalidate');

  await GetProducts(isPreview).then((response: Product[]) => {
    if (showAll) {
      res.status(200).json(response);
    } else {
      res.status(200).json(response.filter((e) => e.hasEntries));
    }
  });
};

export default handler;
