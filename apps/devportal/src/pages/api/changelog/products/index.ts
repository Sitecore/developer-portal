// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetProducts } from 'sc-changelog/changelog';
import Product from 'sc-changelog/types/product';

const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';

  return Array.isArray(query) ? query[0] : query;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Product[]>) => {
  const showAll: boolean = getQueryValue(req.query.all) == 'false' ? false : true;
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');

  await GetProducts().then((response: Product[]) => {
    if (showAll) {
      res.status(200).json(response);
    } else {
      res.status(200).json(response.filter((e) => e.hasEntries));
    }
  });
};

export default handler;
