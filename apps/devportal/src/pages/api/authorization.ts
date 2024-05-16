import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'POST') {
    res.statusCode = 204;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Warning', '299 - Deprecated API');
    res.end(JSON.stringify({ message: 'Deprecated endpoint' }));
  }
  res.statusCode = 204;
  res.end();
};
