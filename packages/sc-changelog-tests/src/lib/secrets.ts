import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('../.env')) {
  dotenv.config({ path: '../.env' });
} else {
  dotenv.config({ path: '../.env.example' }); // you can delete this after you create your own .env file!
}

function getEnvironmentVariable(key: string): string {
  return process.env[key] as string;
}

export const SITECORE_CLIENT_ID = getEnvironmentVariable('SITECORE_CLIENT_ID');
export const SITECORE_CLIENT_SECRET = getEnvironmentVariable('SITECORE_CLIENT_SECRET');
