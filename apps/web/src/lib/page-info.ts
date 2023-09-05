// Global
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
// Interfaces
import { SitecoreCommunityContent, SitecoreCommunityEvent } from 'ui/common/types/sitecoreCommunity';
import type { ChildPageInfo, MarkdownMeta, PageInfo, PagePartialGroup, PagePartials, PartialData, SubPageNavigation } from './interfaces/page-info';
// Components
import { SITECORE_COMMUNITY_MAX_COUNT } from 'ui/components/sitecoreCommunity/sitecore-community.constants';
import SitecoreCommunityApi from 'ui/components/sitecoreCommunity/SitecoreCommunity.api';
import StackExchangeApi from 'ui/components/stackexchange/StackExchange.api';
import TwitterApi from 'ui/components/twitter/Twitter.api';
import YouTubeApi from 'ui/components/youtube/YouTube.api';

import { ChangelogEntriesPaginated } from '@/../../packages/sc-changelog/changelog';
import { ContentHeading } from './interfaces/contentheading';
import { ParseContent } from './markdown/mdxParse';
import { searchForFile } from './utils/fsUtils';

const dataDirectory = path.join(process.cwd(), 'data/markdown');
const partialsDirectory = path.join(dataDirectory, 'partials');
const pagesDirectory = path.join(dataDirectory, 'pages');
const repoUrl = 'https://github.com/sitecore/developer-portal/edit/main/apps/devportal';

type Matter = {
  data: {
    title?: string;
    [name: string]: unknown;
  };
  content: string;
};

type ProductSolutionContextParams = {
  solution: string;
  product?: string;
};

const getSolutionFile = ({ solution }: ProductSolutionContextParams): string => `solution/${solution}`;

const getProductFile = ({ solution, product }: ProductSolutionContextParams): string => `solution/${solution}/product/${product}`;

const getFileFromContext = (params: ProductSolutionContextParams) => {
  return params.product ? getProductFile(params) : getSolutionFile(params);
};

const getFileData = (directory: string, file: string): Matter => {
  const hasExtension = file.endsWith('.mdx') || file.endsWith('.md');

  let filePath = hasExtension ? path.join(directory, `${file}`) : path.join(directory, `${file}.md`);
  // Check if file exists, if not then default to index.md

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

export const getPageInfo = async (arg: string | ProductSolutionContextParams, preview?: boolean): Promise<PageInfo | null> => {
  const file = typeof arg === 'string' ? arg : getFileFromContext(arg);
  const fileData = getFileData(pagesDirectory, `${file}`);
  const meta = fileData.data as MarkdownMeta;
  const content = await ParseContent(fileData.content);
  const fileName = `${repoUrl}/data/markdown/pages/${file}/index.md`;
  const pageInfo = {
    // Default hasInPageNav to true, overwrite with false in md
    hasInPageNav: true,
    ...meta,
    stackexchange: [],
    changelogEntries: [],
    youtube: [],
    twitter: [],
    sitecoreCommunity: {},
    fileName: fileName,
    content: fileData.content,
    parsedContent: content?.result.compiledSource,
    headings: content?.headings,
    previewMode: preview,
    slug: file,
    hasSubPageNav: searchForFile(path.join(pagesDirectory, `${file}`), 'manifest.json') != null ? true : false,
  } as PageInfo;

  /**
   * Fetch all integrations for the page so we can limit the number of requests
   *
   * All of these APIs will return an empty array if the corresponding meta key is null
   */
  pageInfo.stackexchange = await StackExchangeApi.get(meta.stackexchange);
  pageInfo.changelogEntries = await (await ChangelogEntriesPaginated(false, '5', '', '')).entries;
  pageInfo.twitter = await TwitterApi.get(meta.twitter);
  let twitterHandle: string | undefined = undefined;
  if (meta.twitter) {
    const twitterAsArray: string[] = Array.isArray(meta.twitter) ? meta.twitter : [meta.twitter];
    twitterHandle = twitterAsArray && twitterAsArray.length > 0 ? twitterAsArray.find((arg) => arg.startsWith('@')) : '';
  }

  if (twitterHandle) {
    pageInfo.twitterHandle = twitterHandle;
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
      const parsedContent = await ParseContent(data.content);

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

// const file = typeof arg === 'string' ? arg : getFileFromContext(arg);
//   const fileData = getFileData(pagesDirectory, `${file}`);

/**
 * Gets a list of ChildPageInfo for use on a parent page
 *
 * @param params The context params for the dynamic page
 * @returns An array of simplified ChildPageInfo for display on a parent page
 */
export const getChildPageInfo = async (currentFile: string, preview?: boolean): Promise<ChildPageInfo[]> => {
  const directory = path.join(pagesDirectory, currentFile);
  const children = fs.readdirSync(directory);

  return children
    .filter((obj) => !obj.startsWith('index') || obj == undefined)
    .map((child) => {
      const meta = getFileData(directory, `${child}`).data as MarkdownMeta;

      return {
        description: meta.description ? meta.description : null,
        id: child,
        link: `/${currentFile}/${meta.slug}`,
        title: meta.title,
        menuOrder: meta.menuOrder ? meta.menuOrder : null,
      } as ChildPageInfo;
    });
};

export const getChildNavgationInfo = async (currentUrlSegment: string, preview?: boolean): Promise<SubPageNavigation | undefined> => {
  const manifest = searchForFile(path.join(pagesDirectory, currentUrlSegment), 'manifest.json');
  if (manifest != null) {
    const fileData: SubPageNavigation = JSON.parse(fs.readFileSync(manifest, { encoding: 'utf-8' }));
    return fileData;
  }
};

const getChildItems= async (currentUrlSegment: string, fullPath: string, preview?: boolean): Promise<ChildPageInfo[]> => {

  const filesInFolder = fs.readdirSync(fullPath);

  const structure = Promise.all(filesInFolder
      .filter((obj) => !obj.startsWith('index') || obj == undefined || !fs.statSync(obj).isDirectory())
      .map(async (child) => {
          // Return as normal menu item with no sub items
          const meta = getFileData(fullPath, `${child}`).data as MarkdownMeta;

          return {
            description: meta.description ? meta.description : null,
            id: child,
            link: path.join(currentUrlSegment, meta.slug).replace(/\\/g, '/'),
            //link: `${currentUrlSegment}/${meta.slug}`,
            title: meta.title,
            menuOrder: meta.menuOrder ? meta.menuOrder : null,
          } as ChildPageInfo;
        
      })
  );

return structure;}
  // const returnList = Promise.all(
  //   children
  //     .filter((obj) => !obj.startsWith('index') || obj == undefined)
  //     .map(async (child) => {
  //       const meta = getFileData(directory, `${child}`).data as MarkdownMeta;
  //       const childDirectory = path.join(directory, child);

  //       if (!child.endsWith('.md') && fs.statSync(childDirectory).isDirectory()) {
  //         console.log(childDirectory);
  //         const subChildren = await getChildNavgationInfo(path.join(childDirectory), preview);
  //         //console.log(subChildren);
  //       }

  //       return {
  //         description: meta.description ? meta.description : null,
  //         id: child,
  //         link: `/${currentFile}/${meta.slug}`,
  //         title: meta.title,
  //         menuOrder: meta.menuOrder ? meta.menuOrder : null,
  //       } as ChildPageInfo;
  //     })
  // );

  // return returnList;
//};
