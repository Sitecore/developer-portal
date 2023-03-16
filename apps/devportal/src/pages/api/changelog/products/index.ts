// Interfaces
import { GetProducts } from '@/../../packages/sc-changelog/changelog';
import Product from '@/../../packages/sc-changelog/types/product';
import type { NextApiRequest, NextApiResponse } from 'next';

const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';

  return Array.isArray(query) ? query[0] : query;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Product[]>) => {
  const showAll: boolean = getQueryValue(req.query.all) == 'false' ? false : true;

  GetProducts().then((response: Product[]) => {
    if (showAll) res.json(response);

    res.json(response.filter((e) => e.hasEntries));
  });
};

export default handler;
