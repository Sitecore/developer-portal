// Global
import { Changelog } from '@lib/changelog';
import type { ChildPageInfo, MarkdownMeta, PageInfo, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import { ParseContent } from '@lib/markdown/mdxParse';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { SITECORE_COMMUNITY_MAX_COUNT, SitecoreCommunityApi, SitecoreCommunityContent, SitecoreCommunityEvent, StackExchangeApi, YouTubeApi } from '../components/integrations';
import { getChangelogCredentials } from './changelog/common/credentials';
import { searchForFile } from './utils/fsUtils';

const dataDirectory = path.join(process.cwd(), 'data/markdown');
const pagesDirectory = path.join(dataDirectory, 'pages');

const repoUrl = 'https://github.com/sitecore/developer-portal/edit/main/apps/devportal';

type Matter = {
  data: {
    title?: string;
    [name: string]: unknown;
  };
  content: string;
};

const getFileData = (directory: string, file: string): Matter => {
  const hasExtension = file.endsWith('.mdx') || file.endsWith('.md');

  let filePath = hasExtension ? path.join(directory, `${file}`) : path.join(directory, `${file}.md`);
  // Check if file exists, if not then default to index.md

  if (!fs.existsSync(filePath)) {
    filePath = path.join(directory, `${file}.md`);
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(directory, `${file}.mdx`);
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(directory, `${file}/index.md`);
  }

  if (!fs.existsSync(filePath)) {
    filePath = path.join(directory, `${file}/index.mdx`);
  }

  const fileMarkdown = fs.readFileSync(filePath, 'utf-8');

  // @TODO: Handle failures
  const results = matter(fileMarkdown);

  const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
  const fileName = `${repoUrl}/${relativePath}`;

  results.data['fileName'] = fileName;
  results.data['slug'] = file.split('.')[0];

  return results;
};

export const getPageInfo = async (params: string | Array<string>): Promise<PageInfo | null> => {
  const relativePath = Array.isArray(params) ? params.join('/') : params;

  const fileData = getFileData(pagesDirectory, `${relativePath}`);
  const meta = fileData.data as MarkdownMeta;
  const content = await ParseContent(Buffer.from(fileData.content));
  const pageInfo = {
    hasInPageNav: true, // default to true, override in markdown
    ...meta,
    stackexchange: [],
    changelogProductId: [],
    changelogEntries: [],
    youtube: [],
    twitter: [],
    sitecoreCommunity: {},
    content: fileData.content,
    parsedContent: content?.result.compiledSource,
    headings: content?.headings,
    slug: params[params.length - 1],
    hasSubPageNav: searchForFile(path.join(pagesDirectory, `${relativePath}`), 'manifest.json') != null ? true : false,
    includeContributionInstructions: false, // default to true, override in markdown
  } as PageInfo;

  // Handle Persona Definition Mapping
  // if (meta.cdpPersonaDefinition) {
  //   pageInfo.cdpPersonaDefinition = {
  //     ProfileCards: meta.cdpPersonaDefinition.ProfileCards.map((profileCard: any) => {
  //       return {
  //         return JSON.parse(profileCard)
  //       };
  //     }),
  //   };
  // }

  /**
   * Fetch all integrations for the page so we can limit the number of requests
   *
   * All of these APIs will return an empty array if the corresponding meta key is null
   */
  pageInfo.stackexchange = await StackExchangeApi.get(meta.stackexchange);
  // pageInfo.twitter = await TwitterApi.get(meta.twitter);
  // let twitterHandle: string | undefined = undefined;
  // if (meta.twitter) {
  //   const twitterAsArray: string[] = Array.isArray(meta.twitter) ? meta.twitter : [meta.twitter];
  //   twitterHandle = twitterAsArray && twitterAsArray.length > 0 ? twitterAsArray.find((arg) => arg.startsWith('@')) : '';
  // }

  // if (twitterHandle) {
  //   pageInfo.twitterHandle = twitterHandle;
  // }

  if (meta.changelog) {
    const changelog = new Changelog(getChangelogCredentials());

    const entriesData = await changelog.getEntries({ productId: meta.changelogProductId?.join('|') ?? '', pageSize: meta.changelog ? Number(meta.changelog) : 6 });

    pageInfo.changelogEntries = entriesData.entries;
  }

  const youtubeInfo = await YouTubeApi.get(meta.youtube);

  pageInfo.youtube = youtubeInfo.content;

  // The playlistTitle is only used if the author has not already supplied a youtubeTitle meta tag
  if (youtubeInfo.playlistTitle) {
    pageInfo.youtubePlaylistTitle = youtubeInfo.playlistTitle;
  }

  // Sitecore Community
  if (meta.sitecoreCommunityBlog) {
    const maxResults = typeof meta.sitecoreCommunityBlog === 'number' ? meta.sitecoreCommunityBlog : undefined;
    const sort = meta.sitecoreCommunityBlogSort ? (Array.isArray(meta.sitecoreCommunityBlogSort) ? meta.sitecoreCommunityBlogSort[0] : meta.sitecoreCommunityBlogSort) : 'created';
    const sCBlog = await SitecoreCommunityApi.get({
      forum: 'blog',
      contentType: 'blog',
      maxResults,
      sort,
    });

    pageInfo.sitecoreCommunity.blog = sCBlog as Array<SitecoreCommunityContent>;
  }

  if (meta.sitecoreCommunityQuestions) {
    const maxResults = typeof meta.sitecoreCommunityQuestions === 'number' ? meta.sitecoreCommunityQuestions : SITECORE_COMMUNITY_MAX_COUNT;
    const sort = meta.sitecoreCommunityQuestionsSort ? (Array.isArray(meta.sitecoreCommunityQuestionsSort) ? meta.sitecoreCommunityQuestionsSort[0] : meta.sitecoreCommunityQuestionsSort) : 'publish';
    const forum = meta.sitecoreCommunityQuestionsCategory ? (Array.isArray(meta.sitecoreCommunityQuestionsCategory) ? meta.sitecoreCommunityQuestionsCategory[0] : meta.sitecoreCommunityQuestionsCategory) : undefined;
    const sCQuestions = await SitecoreCommunityApi.get({
      contentType: 'questions',
      maxResults,
      sort,
      forum,
    });

    pageInfo.sitecoreCommunity.questions = sCQuestions as Array<SitecoreCommunityContent>;
  }

  if (meta.sitecoreCommunityEvents) {
    const sCEvents = await SitecoreCommunityApi.get({ contentType: 'event' });

    pageInfo.sitecoreCommunity.events = sCEvents as Array<SitecoreCommunityEvent>;
  }

  if (meta.sitecoreCommunityNews) {
    const sCNews = await SitecoreCommunityApi.get({ forum: 'news' });

    pageInfo.sitecoreCommunity.news = sCNews as Array<SitecoreCommunityContent>;
  }

  return pageInfo;
};

/**
 * Gets a list of ChildPageInfo for use on a parent page
 *
 * @param params The context params for the dynamic page
 * @returns An array of simplified ChildPageInfo for display on a parent page
 */
export const getChildPageInfo = async (currentFile: string): Promise<Array<ChildPageInfo>> => {
  const directory = path.join(pagesDirectory, currentFile);

  if (fs.existsSync(directory) == false) {
    return [];
  }

  let children = fs.readdirSync(directory);

  if (children.includes('manifest.json')) {
    children = children.filter((child) => child !== 'manifest.json');
  }

  const items = children
    .filter((obj) => !obj.startsWith('index') || obj == undefined)
    .map((child) => {
      const meta = getFileData(directory, `${child}`).data as MarkdownMeta;

      return {
        description: meta.description || null,
        id: child,
        link: `/${currentFile}/${meta.slug}`,
        title: meta.title,
        menuOrder: meta.menuOrder || null,
      } as ChildPageInfo;
    })
    .sort((a, b) => (a.menuOrder || 0) - (b.menuOrder || 0));

  return items;
};

export const getChildNavgationInfo = async (currentUrlSegment: string): Promise<SidebarNavigationConfig | undefined> => {
  const manifest = searchForFile(path.join(pagesDirectory, currentUrlSegment), 'manifest.json');

  if (manifest != null) {
    const fileData: SidebarNavigationConfig = JSON.parse(fs.readFileSync(manifest, { encoding: 'utf-8' }));

    return fileData;
  }
};
