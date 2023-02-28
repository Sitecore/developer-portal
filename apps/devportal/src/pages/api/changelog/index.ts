// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetLatestItemsByProductAndChangeType } from 'sc-changelog/changelog';
import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { ChangelogEntry } from 'sc-changelog/types/changeLogEntry';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntry[]>) => {
  //const maxResults = parseInt(getQueryValue(req.query.maxResults), 10);

  const currentChangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => x.name == req.query.changeType);
  const currentProduct: ProductConfig | undefined = Products.find((x) => x.name == req.query.product);
  const productId = currentProduct != null ? currentProduct.entityId : '';
  const changeTypeId = currentChangeType != null ? currentChangeType.entityId : '';

  GetLatestItemsByProductAndChangeType(productId, changeTypeId).then((response) => {
    res.json(response);
  });
};

export default handler;
