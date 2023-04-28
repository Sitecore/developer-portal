// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import GetChangeTypes from 'sc-changelog/changeTypes';
import { ChangeType } from 'sc-changelog/types/changeType';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangeType[]>) => {
  const isPreview = req.preview ? true : false;

  await GetChangeTypes(isPreview).then((response: ChangeType[]) => {
    res.setHeader('Cache-Control', 'stale-while-revalidate');
    res.status(200).json(response);
  });
};

export default handler;
