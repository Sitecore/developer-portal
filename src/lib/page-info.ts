// Global

import fs from "node:fs";
import path from "node:path";
import type {
  ChildPageInfo,
  MarkdownMeta,
  PageInfo,
} from "@src/lib/interfaces/page-info";
import { ParseContent } from "@src/lib/markdown/mdxParse";
import matter from "gray-matter";

import type { ManifestConfig } from "./interfaces/manifest";
import { fetchPageIntegrations } from "./page-info/integrations";
import { fileCache } from "./util/fileCache";
import { searchForFile } from "./util/fsUtils";

const dataDirectory = path.join(process.cwd(), "data/markdown");
const pagesDirectory = path.join(dataDirectory, "pages");

const repoUrl = "https://github.com/sitecore/developer-portal/edit/main";

type Matter = {
  data: {
    title?: string;
    [name: string]: unknown;
  };
  content: string;
};

export const getFileData = (directory: string, file: string): Matter => {
  const cacheKey = `fileData:${directory}:${file}`;

  // Check cache first
  const cached = fileCache.get<Matter>(cacheKey);
  if (cached) {
    return cached;
  }

  const hasExtension = file.endsWith(".mdx") || file.endsWith(".md");

  let filePath = hasExtension
    ? path.join(directory, `${file}`)
    : path.join(directory, `${file}.md`);
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

  const fileMarkdown = fs.readFileSync(filePath, "utf-8");

  // @TODO: Handle failures
  const results = matter(fileMarkdown);

  const relativePath = path
    .relative(process.cwd(), filePath)
    .replace(/\\/g, "/");
  const fileName = `${repoUrl}/${relativePath}`;

  results.data.fileName = fileName;
  results.data.slug = file.split(".")[0];

  // Cache the result
  fileCache.set(cacheKey, results);

  return results;
};

export const getPageInfo = async (
  params: string | Array<string>,
): Promise<PageInfo | null> => {
  const relativePath = Array.isArray(params) ? params.join("/") : params;

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
    hasSubPageNav:
      searchForFile(
        path.join(pagesDirectory, `${relativePath}`),
        "manifest.json",
      ) != null,
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
   * Fetch all integrations for the page in parallel to improve performance
   *
   * All of these APIs will return an empty array if the corresponding meta key is null
   */
  await fetchPageIntegrations(meta, pageInfo);

  return pageInfo;
};

/**
 * Gets a list of ChildPageInfo for use on a parent page
 *
 * @param params The context params for the dynamic page
 * @returns An array of simplified ChildPageInfo for display on a parent page
 */
export const getChildPageInfo = async (
  currentFile: string,
): Promise<Array<ChildPageInfo>> => {
  const directory = path.join(pagesDirectory, currentFile);

  if (fs.existsSync(directory) === false) {
    return [];
  }

  let children = fs.readdirSync(directory);

  if (children.includes("manifest.json")) {
    children = children.filter((child) => child !== "manifest.json");
  }

  const items = children
    .filter((obj) => !obj.startsWith("index") || obj === undefined)
    .map((child) => {
      const meta = getFileData(directory, `${child}`).data as MarkdownMeta;
      return {
        description: meta.description || null,
        id: child,
        link: `/${currentFile}/${meta.slug}`,
        title: meta.title,
        menuOrder: meta.menuOrder || null,
        productLogo: meta.productLogo || null,
      } as ChildPageInfo;
    })
    .sort((a, b) => (a.menuOrder || 0) - (b.menuOrder || 0));

  return items;
};

export const getChildNavgationInfo = async (
  currentUrlSegment: string,
): Promise<ManifestConfig | undefined> => {
  const cacheKey = `manifest:${currentUrlSegment}`;

  // Check cache first
  const cached = fileCache.get<ManifestConfig>(cacheKey);
  if (cached) {
    return cached;
  }

  const manifest = searchForFile(
    path.join(pagesDirectory, currentUrlSegment),
    "manifest.json",
  );

  if (manifest != null) {
    const fileData: ManifestConfig = JSON.parse(
      fs.readFileSync(manifest, { encoding: "utf-8" }),
    );

    // Cache the result
    fileCache.set(cacheKey, fileData);

    return fileData;
  }
};
