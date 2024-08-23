import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';
import { Changelog } from '@lib/changelog';
import { ChangelogEntry, ChangelogEntryList } from '@lib/changelog/types';
import { getQueryArray, getQueryValue } from '@lib/utils';
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
