// Interfaces
import { Changelog } from '@lib/changelog';
import { ChangeType } from '@lib/changelog/types';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

const handler = async (req: NextApiRequest, res: NextApiResponse<Array<ChangeType>>) => {
  const isPreview = req.preview ? true : false;
  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog.getChangeTypes().then((response: Array<ChangeType>) => {
    res.setHeader('Cache-Control', 'stale-while-revalidate');
    res.status(200).json(response);
  });
};

export default handler;
