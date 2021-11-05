import { TrialNavContext, TrialNavData } from '@/interfaces/page-info';
import fs from 'fs';
import path from 'path';

const solutionsDirectory = path.join(process.cwd(), 'data/markdown/pages/solution/');
const integrationDirectory = path.join(process.cwd(), 'data/markdown/pages/integrations/');
const trialPagesDirectory = path.join(process.cwd(), 'data/markdown/pages/trials/');
const TrialDirectory = path.join(process.cwd(), 'data/trials');

type SolutionPaths = { params: { solution: string } };
type ProductPaths = { params: { product: string; solution: string } };
type IntegrationPaths = { params: { integration: string } };
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

export const getTrialsPaths = async (): Promise<TrialPaths[]> => {
  const files = fs.readdirSync(trialPagesDirectory);
  return files.map((file) => ({ params: { trial: file } }));
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
