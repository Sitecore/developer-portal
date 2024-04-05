import fs from 'fs';
import path, { join } from 'path';
import { Product } from '@scdp/changelog/types';
import { slugify } from '@scdp/changelog/utils';
import {GetProducts} from '@scdp/changelog';

const pagesDirectory = path.join(process.cwd(), 'data/markdown/pages/');

export type slugPagePaths = { params: { slug: string[] } };

export const getAllFilesRecursively = (dir: string, fileList: string[] = []): string[] => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (file.startsWith('_') || file.startsWith('manifest')) return;

    const filePath = join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      fileList = getAllFilesRecursively(filePath, fileList);
    } else {
      if (filePath.endsWith('.md') || filePath.endsWith('.mdx')) fileList.push(filePath);
    }
  });
  
  return fileList;
};

export const getStaticPathsRecursively = async (): Promise<slugPagePaths[]> => {
  const allFiles = getAllFilesRecursively(pagesDirectory);

  const paths: slugPagePaths[] = [];

  allFiles.forEach((filePath) => {
    if (filePath != null || filePath != undefined) {
      const relativePath = filePath.replace(pagesDirectory, '').replace('index.md', '');
      const pathSegments = relativePath.split('\\').map((segment) => segment.replace(/\.[^/.]+$/, '')); // Remove file extension

      const markdownRegex = /\.md(x)?$/;

      if (pathSegments != undefined) {
        paths.push({ params: { slug: relativePath.replace(markdownRegex, '').split(path.sep) } });
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

export const NEWSLETTER_DATA_DIRECTORY = path.join(process.cwd(), 'data/newsletters/');

export const getNewsletterStaticPaths = (): NewsletterPath[] => {
  const years = fs.readdirSync(NEWSLETTER_DATA_DIRECTORY);
  years.sort().reverse();

  const paths: NewsletterPath[] = [];

  years.forEach((year) => {
    const yearPath = path.resolve(NEWSLETTER_DATA_DIRECTORY, year);
    const months = fs.readdirSync(yearPath);

    months.sort().reverse();
    months.forEach((month) => {
      paths.push({ params: { year, month: month.substring(0, month.length - 5) } });
    });
  });

  return paths;
};

type ProductChangeLogPaths = { params: { product: string } };

export const getChangelogProductPaths = async (): Promise<ProductChangeLogPaths[]> => {
  const paths: ProductChangeLogPaths[] = [];

  const products = await GetProducts(false).then((response: Product[]) => {
    return response;
  });

  products.map((product: Product) => {
    paths.push({ params: { product: slugify(product.name) } });
  });

  return paths;
};
