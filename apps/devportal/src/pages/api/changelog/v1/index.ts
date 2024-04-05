import type { NextApiRequest, NextApiResponse } from 'next';
import { ChangelogEntriesPaginated } from '@scdp/changelog';
import { ChangelogEntry, ChangelogEntryList } from '@scdp/changelog/types';
import { getQueryArray, getQueryValue } from '@scdp/changelog/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<ChangelogEntry[]>>) => {
  const products: string[] = getQueryArray(req.query.product);
  const changeTypes: string[] = getQueryArray(req.query.changeType);
  const isPreview = req.preview ? true : false;

  const limit: string = getQueryValue(req.query.limit);
  const end = getQueryValue(req.query.end);

  await ChangelogEntriesPaginated(isPreview, limit, products.join('|'), changeTypes.join('|'), end).then((response) => {
    res.status(200).json(response);
  });
};

export default handler;
