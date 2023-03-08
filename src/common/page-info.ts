// Global
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
// Interfaces
import { SitecoreCommunityContent, SitecoreCommunityEvent } from '@/src/interfaces/integrations';
import type {
  ChildPageInfo,
  MarkdownMeta,
  PageInfo,
  PartialData,
} from '@/src/interfaces/page-info';
// Components
import { SITECORE_COMMUNITY_MAX_COUNT } from '@/src/components/integrations/sitecore-community/sitecore-community.constants';
import SitecoreCommunityApi from '@/src/components/integrations/sitecore-community/SitecoreCommunity.api';
import StackExchangeApi from '@/src/components/integrations/stackexchange/StackExchange.api';
import TwitterApi from '@/src/components/integrations/twitter/Twitter.api';
import YouTubeApi from '@/src/components/integrations/youtube/YouTube.api';

import { ParseContent } from '@/src/common/markdown/mdxParse';
import { ContentHeading } from '@/src/interfaces/contentheading';

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
  return params.product ? getProductFile(params) : getSolutionFile(params);
};

const getFileData = (directory: string, file: string): Matter => {
  let filePath = path.join(directory, `${file}.md`);
  // Check if file exists, if not then default to index.md
  if (!fs.existsSync(filePath)) {
    filePath = path.join(directory, `${file}/index.md`);
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(directory, `${file}.mdx`);
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

  return results;
};

export const getPageInfo = async (
  arg: string | ProductSolutionContextParams
): Promise<PageInfo | null> => {
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
    youtube: [],
    twitter: [],
    sitecoreCommunity: {},
    fileName: fileName,
    content: fileData.content,
    parsedContent: content?.result.compiledSource,
    headings: content?.headings,
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
    const maxResults =
      typeof meta.sitecoreCommunityBlog === 'number' ? meta.sitecoreCommunityBlog : undefined;
    const sort = meta.sitecoreCommunityBlogSort
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
    const sort = meta.sitecoreCommunityQuestionsSort
      ? Array.isArray(meta.sitecoreCommunityQuestionsSort)
        ? meta.sitecoreCommunityQuestionsSort[0]
        : meta.sitecoreCommunityQuestionsSort
      : 'publish';
    const forum = meta.sitecoreCommunityQuestionsCategory
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
