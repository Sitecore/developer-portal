import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 299;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Warning: 299', 'Deprecated API');
  res.end(JSON.stringify({ message: 'Deprecated endpoint' }));
};
