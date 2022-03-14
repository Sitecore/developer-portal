// Global
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// Interfaces
import type { MarkdownMeta, PageInfo, ChildPageInfo, PartialData } from '@/interfaces/page-info';
import { SitecoreCommunityContent, SitecoreCommunityEvent } from '@/interfaces/integrations';
// Components
import StackExchangeApi from '@/components/integrations/stackexchange/StackExchange.api';
import TwitterApi from '@/components/integrations/twitter/Twitter.api';
import YouTubeApi from '@/components/integrations/youtube/YouTube.api';
import SitecoreCommunityApi, {
  SortOption,
} from '@/components/integrations/sitecore-community/SitecoreCommunity.api';
import { SITECORE_COMMUNITY_MAX_COUNT } from '@/components/integrations/sitecore-community/sitecore-community.constants';

const dataDirectory = path.join(process.cwd(), 'data/markdown');
const partialsDirectory = path.join(dataDirectory, 'partials');
const pagesDirectory = path.join(dataDirectory, 'pages');
const repoUrl = 'https://github.com/sitecore/developer-portal/edit/main';

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

const getSolutionFile = ({ solution }: ProductSolutionContextParams): string =>
  `solution/${solution}`;

const getProductFile = ({ solution, product }: ProductSolutionContextParams): string =>
  `solution/${solution}/product/${product}`;

const getFileFromContext = (params: ProductSolutionContextParams) => {
  return params.hasOwnProperty('product') ? getProductFile(params) : getSolutionFile(params);
};

const getFileData = (directory: string, file: string): Matter => {
  const filePath = path.join(directory, `${file}.md`);
  const fileMarkdown = fs.readFileSync(filePath, 'utf-8');
  // @TODO: Handle failures
  return matter(fileMarkdown);
};

export const getPageInfo = async (
  arg: string | ProductSolutionContextParams
): Promise<PageInfo | null> => {
  const file = typeof arg === 'string' ? arg : getFileFromContext(arg);
  const meta = getFileData(pagesDirectory, `${file}/index`).data as MarkdownMeta;
  const fileName = `${repoUrl}/data/markdown/pages/${file}/index.md`;
  const pageInfo = {
    // Default hasInPageNav to true, overwrite with false in md
    hasInPageNav: true,
    ...meta,
    stackexchange: [],
    youtube: [],
    twitter: [],
    sitecoreCommunity: {},
    fileName: fileName,
  } as PageInfo;

  /**
   * Fetch all integrations for the page so we can limit the number of requests
   *
   * All of these APIs will return an empty array if the corresponding meta key is null
   */
  pageInfo.stackexchange = await StackExchangeApi.get(meta.stackexchange);
  pageInfo.twitter = await TwitterApi.get(meta.twitter);
  let twitterHandle: string | undefined = undefined;
  if (meta.twitter) {
    const twitterAsArray: string[] = Array.isArray(meta.twitter) ? meta.twitter : [meta.twitter];
    twitterHandle =
      twitterAsArray && twitterAsArray.length > 0
        ? twitterAsArray.find((arg) => arg.startsWith('@'))
        : '';
  }

  if (!!twitterHandle) {
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
    const maxResults =
      typeof meta.sitecoreCommunityBlog === 'number' ? meta.sitecoreCommunityBlog : undefined;
    const sort = !!meta.sitecoreCommunityBlogSort
      ? Array.isArray(meta.sitecoreCommunityBlogSort)
        ? meta.sitecoreCommunityBlogSort[0]
        : meta.sitecoreCommunityBlogSort
      : 'created';
    const sCBlog = await SitecoreCommunityApi.get({
      forum: 'blog',
      contentType: 'blog',
      maxResults,
      sort,
    });
    pageInfo.sitecoreCommunity.blog = sCBlog as SitecoreCommunityContent[];
  }
  if (meta.sitecoreCommunityQuestions) {
    const maxResults =
      typeof meta.sitecoreCommunityQuestions === 'number'
        ? meta.sitecoreCommunityQuestions
        : SITECORE_COMMUNITY_MAX_COUNT;
    const sort = !!meta.sitecoreCommunityQuestionsSort
      ? Array.isArray(meta.sitecoreCommunityQuestionsSort)
        ? meta.sitecoreCommunityQuestionsSort[0]
        : meta.sitecoreCommunityQuestionsSort
      : 'publish';
    const forum = !!meta.sitecoreCommunityQuestionsCategory
      ? Array.isArray(meta.sitecoreCommunityQuestionsCategory)
        ? meta.sitecoreCommunityQuestionsCategory[0]
        : meta.sitecoreCommunityQuestionsCategory
      : undefined;
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
const getTiltesFromContent = (content: string): string[] => {
  const regExp = /(?<=^\#\#\s)(.*?)(?=\n|\r)/gm;
  const res = content.match(regExp);
  if (res) {
    return res.map((title) => {
      if (title.startsWith('[')) {
        const anchorTextRegExp = /(?<=\[)(.*?)(?=\])/g;
        const anchorText = content.match(anchorTextRegExp);
        return !!anchorText ? anchorText[0] : '';
      }
      return title;
    });
  }
  return [];
};

export const getPartialsAsArray = async (partials: string[]): Promise<PartialData> => {
  const content: string[] = [];
  let titles: string[] = [];
  let fileNames: string[] = [];

  partials.forEach((p) => {
    const data = getFileData(partialsDirectory, p) as Matter;
    const fileName = `${repoUrl}/data/markdown/partials/${p}.md`;

    content.push(data.content);
    fileNames.push(fileName);
    titles = titles.concat(getTiltesFromContent(data.content));
  });

  return {
    content,
    titles,
    fileNames,
  };
};

export const getPartialDataFromPage = async (
  arg: string | ProductSolutionContextParams
): Promise<PartialData | null> => {
  const file = typeof arg === 'string' ? arg : getFileFromContext(arg);
  const fileData = getFileData(pagesDirectory, `${file}/index`) as Matter;
  const fileName = `${repoUrl}/data/markdown/pages/${file}/index.md`;

  const content: string[] = [];
  let titles: string[] = [];
  let fileNames: string[] = [];

  content.push(fileData.content);
  fileNames.push(fileName);
  titles = titles.concat(getTiltesFromContent(fileData.content));

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
export const getChildPageInfo = async (
  params: ProductSolutionContextParams
): Promise<ChildPageInfo[]> => {
  const directory = path.join(pagesDirectory, `${getSolutionFile(params)}/product`);
  const children = fs.readdirSync(directory);
  return children.map((child) => {
    const meta = getFileData(directory, `${child}/index`).data as MarkdownMeta;

    return {
      description: meta.description,
      id: child,
      link: `/${Object.values(params)[0]}/${child}`,
      title: meta.title,
    } as ChildPageInfo;
  });
};
