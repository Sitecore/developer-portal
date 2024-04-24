import fs from 'fs';
import path from 'path';
import { NAVIGATION_FILE, NEWSLETTER_DIRECTORY } from '../constants';
import { SidebarNavigationConfig } from './interfaces/page-info';

export const getLatestNewsletter = async () => {
  const manifest: SidebarNavigationConfig = JSON.parse(fs.readFileSync(path.join(NEWSLETTER_DIRECTORY, NAVIGATION_FILE), 'utf-8'));

  const redirectUrl = '/newsletter/' + manifest.routes[0].children[0].path;
  return redirectUrl;
};
