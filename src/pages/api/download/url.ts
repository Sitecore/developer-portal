import { authOptions } from '@/src/lib/auth/options';
import { isAuthenticatedOktaUser } from '@/src/lib/auth/verify';
import { AzureStorageConfig, getAzureStorageConfig, validateAndGenerateSasUrl } from '@/src/lib/downloads/azure';
import { getQueryValue } from '@/src/lib/utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (isAuthenticatedOktaUser(session)) {
    // Validate method is GET
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // Validate file parameter is provided
    if (!req.query.file) {
      return res.status(400).json({ error: 'File parameter is required' });
    }

    try {
      const fileName: string = getQueryValue(req.query.file);
      if (!fileName) {
        return res.status(400).json({ error: 'File parameter is required' });
      }
      // Create Azure storage configuration
      const config: AzureStorageConfig = getAzureStorageConfig();
      const sasUrl = await validateAndGenerateSasUrl(config, fileName, 15);

      return res.status(200).json({
        url: sasUrl,
        expiresIn: 15,
        fileName: fileName,
      });
    } catch (err) {
      console.error('Error generating SAS token:', err);
      return res.status(500).json({ error: 'Failed to generate valid download token' });
    }
  }
}
