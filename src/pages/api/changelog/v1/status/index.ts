// Interfaces
import { Changelog } from '@lib/changelog';
import { Status } from '@lib/changelog/types';
import type { NextApiRequest, NextApiResponse } from 'next';

import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

const handler = async (req: NextApiRequest, res: NextApiResponse<Array<Status>>) => {
  const isPreview = req.preview ? true : false;
  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog.getStatus().then((response: Array<Status>) => {
    res.setHeader('Cache-Control', 'stale-while-revalida1te');
    res.status(200).json(response);
  });
};

export default handler;
