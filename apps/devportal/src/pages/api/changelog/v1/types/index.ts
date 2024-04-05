// Interfaces
import type { NextApiRequest, NextApiResponse } from 'next';
import { GetChangeTypes } from '@scdp/changelog';
import { ChangeType } from '@scdp/changelog/types';

const handler = async (req: NextApiRequest, res: NextApiResponse<ChangeType[]>) => {
  const isPreview = req.preview ? true : false;

  await GetChangeTypes(isPreview).then((response: ChangeType[]) => {
    res.setHeader('Cache-Control', 'stale-while-revalidate');
    res.status(200).json(response);
  });
};

export default handler;
