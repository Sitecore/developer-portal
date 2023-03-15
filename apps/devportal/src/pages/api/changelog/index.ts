// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { ChangelogEntriesPaginated } from 'sc-changelog/changelog';
import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { ChangelogEntry, ChangelogEntryList } from 'sc-changelog/types/changeLogEntry';

const getQueryValue = (query: string | string[] | undefined): string => {
  if (query == undefined) return '';

  return Array.isArray(query) ? query[0] : query;
};

const getQueryArray = (query: string | string[] | undefined): string[] => {
  if (query == undefined) return [];
  return Array.isArray(query) ? query : [query];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<ChangelogEntry[]>>) => {
  const products: string[] = getQueryArray(req.query.product);
  const changeTypes: string[] = getQueryArray(req.query.changeType);

  const productId: string[] = [];
  const changeTypeId: string[] = [];

  products.map((p) => {
    const currentProduct: ProductConfig | undefined = Products.find((x) => x.name == p);
    if (currentProduct?.entityId != undefined) productId.push(currentProduct?.entityId);
  });

  changeTypes.map((p) => {
    const currentChangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => x.name == p);
    if (currentChangeType?.entityId != undefined) changeTypeId.push(currentChangeType?.entityId);
  });

  const limit: string = getQueryValue(req.query.limit);
  const end = getQueryValue(req.query.end);

  ChangelogEntriesPaginated(limit, productId.join('|'), changeTypeId.join('|'), end).then((response) => {
    res.json(response);
  });
};

export default handler;
