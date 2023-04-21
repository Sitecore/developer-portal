import { TrialNavContext, TrialNavData } from '@/src/interfaces/trialNavigation';
import fs from 'fs';
import path from 'path';
import { CustomNavData } from 'ui/common/types/contentPager';

import Product from '@/../../packages/sc-changelog/types/product';
import { GetProducts } from 'sc-changelog/changelog';
import { slugify } from 'sc-changelog/utils/stringUtils';

const solutionsDirectory = path.join(process.cwd(), 'data/markdown/pages/solution/');
const integrationDirectory = path.join(process.cwd(), 'data/markdown/pages/integrations/');
const trialPagesDirectory = path.join(process.cwd(), 'data/markdown/pages/trials/');
const faqPagesDirectory = path.join(process.cwd(), 'data/markdown/pages/learn/faq/');
const gettingStartedDirectory = path.join(process.cwd(), 'data/markdown/pages/learn/getting-started/');
const faqDirectory = path.join(process.cwd(), 'data/faqs');
const TrialDirectory = path.join(process.cwd(), 'data/trials');

type SolutionPaths = { params: { solution: string } };
type ProductPaths = { params: { product: string; solution: string } };
type IntegrationPaths = { params: { integration: string } };
type GettingStartedPaths = { params: { article: string } };
type MultiPageArticlePaths = { params: { article: string; page?: string } };
type TrialPaths = { params: { trial: string } };
type TrialNavPaths = { params: TrialNavContext };

export const getSolutionPaths = async (): Promise<SolutionPaths[]> => {
  const files = fs.readdirSync(solutionsDirectory);
  return files.map((file) => ({ params: { solution: file } }));
};

export const getProductPaths = async (): Promise<ProductPaths[]> => {
  const paths: ProductPaths[] = [];
  const solutions = fs.readdirSync(solutionsDirectory);
  solutions.forEach((solution) => {
    const subdir = path.join(solutionsDirectory, `${solution}/product`);
    const products = fs.readdirSync(subdir);
    products.forEach((product) => {
      if (product !== 'index.md') {
        paths.push({ params: { product, solution } });
      }
    });
  });
  return paths;
};

export const getIntegrationPaths = async (): Promise<IntegrationPaths[]> => {
  const files = fs.readdirSync(integrationDirectory);
  return files.map((file) => ({ params: { integration: file } }));
};

export const getGettingStartedPaths = async (): Promise<GettingStartedPaths[]> => {
  const files = fs.readdirSync(gettingStartedDirectory);
  return files.map((file) => ({ params: { article: file } }));
};

export const getFaqPaths = async (): Promise<MultiPageArticlePaths[]> => {
  const files = fs.readdirSync(faqPagesDirectory);
  const paths: MultiPageArticlePaths[] = [];
  files.forEach((file) => {
    if (file !== 'index.md') {
      paths.push({ params: { article: file } });
    }
  });
  return paths;
};

export const getFaqNavPaths = async (): Promise<MultiPageArticlePaths[]> => {
  const faqs = fs.readdirSync(faqDirectory);
  const paths: MultiPageArticlePaths[] = [];
  faqs.forEach((file) => {
    const filePath = path.join(faqDirectory, file);
    const fileData: CustomNavData = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
    fileData.routes.forEach((route) => {
      paths.push({
        params: {
          article: fileData.path,
          page: route.path,
        },
      });
    });
  });
  return paths;
};

export const getTrialsPaths = async (): Promise<TrialPaths[]> => {
  const files = fs.readdirSync(trialPagesDirectory);
  const paths: TrialPaths[] = [];
  files.forEach((file) => {
    if (file !== 'index.md') {
      paths.push({ params: { trial: file } });
    }
  });
  return paths;
};

export const getTrialNavPaths = async (): Promise<TrialNavPaths[]> => {
  const trials = fs.readdirSync(TrialDirectory);
  const paths: TrialNavPaths[] = [];
  trials.forEach((file) => {
    const filePath = path.join(TrialDirectory, file);
    const fileData: TrialNavData = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }));
    fileData.nav.forEach((parent) => {
      parent.children.forEach((child) => {
        paths.push({
          params: {
            trial: file.replace(/\.[^/.]+$/, ''),
            parent: parent.slug,
            child: child.slug,
          },
        });
      });
    });
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

  const products = await GetProducts().then((response: Product[]) => {
    return response;
  });

  products.map((product: Product) => {
    paths.push({ params: { product: slugify(product.name) } });
  });

  return paths;
};
