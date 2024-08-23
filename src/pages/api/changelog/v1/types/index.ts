// Interfaces
import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';
import { Changelog } from '@lib/changelog';
import { ChangeType } from '@lib/changelog/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangeType[]>) => {
  const isPreview = req.preview ? true : false;
  const changelog = new Changelog(getChangelogCredentials(), isPreview);

  await changelog.getChangeTypes().then((response: ChangeType[]) => {
    res.setHeader('Cache-Control', 'stale-while-revalidate');
    res.status(200).json(response);
  });
};

export default handler;
