// Global
import type { ChildPageInfo, MarkdownMeta, PageInfo, PagePartialGroup, PagePartials, PartialData, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import { SITECORE_COMMUNITY_MAX_COUNT, SitecoreCommunityApi, StackExchangeApi, YouTubeApi } from '@scdp/ui/components';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { ContentHeading } from '@lib/interfaces/contentheading';
import { ParseContent } from '@lib/markdown/mdxParse';
import { Changelog } from '@scdp/changelog';
import { SitecoreCommunityContent, SitecoreCommunityEvent } from '@scdp/ui/components';
import { getChangelogCredentials } from './changelog/changelog';

const dataDirectory = path.join(process.cwd(), 'data/markdown');
const partialsDirectory = path.join(dataDirectory, 'partials');
const pagesDirectory = path.join(dataDirectory, 'pages');

export const repoUrl = 'https://github.com/sitecore/developer-portal/edit/main/apps/devportal';

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

export const getPageInfo = async (params: string | string[]): Promise<PageInfo | null> => {
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
    pageInfo.changelogEntries = (await changelog.getEntriesPaginated(meta.changelog ?? '6', meta.changelogProductId != null ? meta.changelogProductId.join('|') : '', '')).entries;
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
    pageInfo.sitecoreCommunity.blog = sCBlog as SitecoreCommunityContent[];
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
    pageInfo.sitecoreCommunity.questions = sCQuestions as SitecoreCommunityContent[];
  }
  if (meta.sitecoreCommunityEvents) {
    const sCEvents = await SitecoreCommunityApi.get({ contentType: 'event' });
    pageInfo.sitecoreCommunity.events = sCEvents as SitecoreCommunityEvent[];
  }
  if (meta.sitecoreCommunityNews) {
    const sCNews = await SitecoreCommunityApi.get({ forum: 'news' });
    pageInfo.sitecoreCommunity.news = sCNews as SitecoreCommunityContent[];
  }

  return pageInfo;
};

/**
 * Get partials as an array rather than a keyed object
 *
 * @param partials
 * @returns
 */

export const getPartialsAsArray = async (partials: string[]): Promise<PartialData> => {
  const content: string[] = [];
  const titles: ContentHeading[] = [];
  const fileNames: string[] = [];

  await Promise.all(
    partials.map(async function (partial) {
      const data = getFileData(partialsDirectory, partial) as Matter;
      const fileName = `${repoUrl}/data/markdown/partials/${partial}.md`;
      const parsedContent = await ParseContent(Buffer.from(data.content));

      if (parsedContent != null) {
        content.push(parsedContent.result.compiledSource);
        fileNames.push(fileName);
        parsedContent.headings.map((heading) => {
          titles.push(heading);
        });
      }
    })
  );
  return {
    content,
    titles,
    fileNames,
  };
};

export const getPartialGroupsAsArray = async (partialGroups: PagePartials[]): Promise<PagePartialGroup[]> => {
  const pagePartialsGroups: PagePartialGroup[] = [];

  await Promise.all(
    partialGroups.map(async (partialGroup) => {
      const partialGroupData = {
        title: partialGroup.title,
        description: partialGroup.description ? partialGroup.description : null,
        partials: await getPartialsAsArray(partialGroup.partials),
      } as PagePartialGroup;

      pagePartialsGroups.push(partialGroupData);
    })
  );
  return pagePartialsGroups;
};

export const getPageContent = async (pageInfo: PageInfo): Promise<PartialData> => {
  const content: string[] = [];
  const titles: ContentHeading[] = [];
  const fileNames: string[] = [];

  if (pageInfo.parsedContent && pageInfo.content) {
    content.push(pageInfo.parsedContent);
    fileNames.push(pageInfo.fileName);

    pageInfo.headings?.map((heading) => {
      titles.push(heading);
    });
  }

  return {
    content,
    titles,
    fileNames,
  };
};

/**
 * Gets a list of ChildPageInfo for use on a parent page
 *
 * @param params The context params for the dynamic page
 * @returns An array of simplified ChildPageInfo for display on a parent page
 */
export const getChildPageInfo = async (currentFile: string): Promise<ChildPageInfo[]> => {
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

function searchForFile(folderPath: string, fileName: string): string | null {
  const filePath = path.join(folderPath, fileName);

  try {
    // Check if the file exists in the current folder
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return filePath;
    } else {
      // If not found, check the parent folder
      const parentFolder = path.dirname(folderPath);

      // Base case: If we've reached the root folder and still haven't found the file, return null
      if (parentFolder === folderPath) {
        return null;
      }

      // Recursively search in the parent folder
      return searchForFile(parentFolder, fileName);
    }
  } catch (err) {
    // Handle any errors that occur during the search
    console.error(`Error searching for file ${fileName}: ${err}`);
    return null;
  }
}
