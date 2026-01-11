import fs from "node:fs";
import path, { join } from "node:path";
import { Changelog } from "@src/lib/changelog";
import type { Product } from "@src/lib/changelog/types";
import { slugify } from "@/src/lib/util/stringUtil";

import { getChangelogCredentials } from "./changelog/common/credentials";

const pagesDirectory = path.join(process.cwd(), "data/markdown/pages/");

export type slugPagePaths = { params: { slug: Array<string> } };

export const getAllFilesRecursively = (
  dir: string,
  fileList: Array<string> = [],
): Array<string> => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (file.startsWith("_") || file.startsWith("manifest")) {
      return;
    }

    const filePath = join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      fileList = getAllFilesRecursively(filePath, fileList);
    } else {
      if (filePath.endsWith(".md") || filePath.endsWith(".mdx")) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
};

export const getStaticPathsRecursively = async (): Promise<
  Array<slugPagePaths>
> => {
  const allFiles = getAllFilesRecursively(pagesDirectory);

  const paths: Array<slugPagePaths> = [];

  allFiles.forEach((filePath) => {
    if (filePath != null || filePath !== undefined) {
      const relativePath = filePath
        .replace(pagesDirectory, "")
        .replace("index.md", "");
      const pathSegments = relativePath
        .split("\\")
        .map((segment) => segment.replace(/\.[^/.]+$/, "")); // Remove file extension

      const markdownRegex = /\.md(x)?$/;

      if (pathSegments !== undefined) {
        paths.push({
          params: {
            slug: relativePath.replace(markdownRegex, "").split(path.sep),
          },
        });
      }
    }
  });

  return paths;
};

/* 
  Newsletter pages
*/

type NewsletterPathParams = {
  year: string;
  month: string;
};

export type NewsletterPath = { params: NewsletterPathParams };

export const NEWSLETTER_DATA_DIRECTORY = path.join(
  process.cwd(),
  "data/newsletters/",
);

export const getNewsletterStaticPaths = (): Array<NewsletterPath> => {
  const years = fs.readdirSync(NEWSLETTER_DATA_DIRECTORY);

  years.sort().reverse();

  const paths: Array<NewsletterPath> = [];

  years.forEach((year) => {
    const yearPath = path.resolve(NEWSLETTER_DATA_DIRECTORY, year);
    const months = fs.readdirSync(yearPath);

    months.sort().reverse();
    months.forEach((month) => {
      paths.push({
        params: { year, month: month.substring(0, month.length - 5) },
      });
    });
  });

  return paths;
};

type ProductChangeLogPaths = { params: { product: string } };

export const getChangelogProductPaths = async (): Promise<
  Array<ProductChangeLogPaths>
> => {
  const paths: Array<ProductChangeLogPaths> = [];
  const changelog = new Changelog(getChangelogCredentials(), false);
  const products = await changelog
    .getProducts()
    .then((response: Array<Product>) => {
      return response;
    });

  products.forEach((product: Product) => {
    paths.push({ params: { product: slugify(product.name) } });
  });

  return paths;
};
