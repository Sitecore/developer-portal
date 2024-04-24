import path from 'path';

/**
 * The directory path where the markdown data is stored.
 */
export const DATA_DIRECTORY = path.join(process.cwd(), 'data/markdown');

/**
 * The directory path for markdown partials.
 */
export const PARTIALS_DIRECTORY = path.join(DATA_DIRECTORY, 'partials');
/**
 * The directory path for pages markdown.
 */
export const PAGES_DIRECTORY = path.join(DATA_DIRECTORY, 'pages');

/**
 * The directory path for pages markdown.
 */
export const NEWSLETTER_DIRECTORY = path.join(PAGES_DIRECTORY, 'newsletter');

/**
 * The URL of the GitHub repository for the developer portal.
 */
export const REPO_URL = 'https://github.com/sitecore/developer-portal';

/**
 * The URL for editing files in the GitHub repository.
 */
export const REPO_EDIT_URL = `${REPO_URL}/edit/main/apps/devportal`;

/**
 * The URL for browsing files in the GitHub repository.
 */
export const REPO_FILE_URL = `${REPO_URL}/blob/main/apps/devportal`;

/**
 * The filename of the navigation manifest file used to generate the sidebar navigation.
 */
export const NAVIGATION_FILE = 'manifest.json';
