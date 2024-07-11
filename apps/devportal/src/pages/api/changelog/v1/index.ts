import { getChangelogCredentials } from '@/src/lib/changelog/changelog';
import { Changelog } from '@scdp/changelog';
import { ChangelogEntry, ChangelogEntryList } from '@scdp/changelog/types';
import { getQueryArray, getQueryValue } from '@scdp/changelog/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangelogEntryList<ChangelogEntry[]>>) => {
  const products: string[] = getQueryArray(req.query.product);
  const changeTypes: string[] = getQueryArray(req.query.changeType);
  const isPreview = req.preview ? true : false;

  const limit = getQueryArray(req.query.limit);
  const end = getQueryValue(req.query.end);

  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog.getEntries({ productId: products.join('|'), changeTypeId: changeTypes.join('|'), pageSize: Number(limit), endCursor: end }).then((response) => {
    res.status(200).json(response);
  });
};

export default handler;
