import fs from 'fs';
import path from 'path';

const solutionsDirectory = path.join(process.cwd(), 'data/markdown/pages/solution/');
const integrationDirectory = path.join(process.cwd(), 'data/markdown/pages/integrations/');

type SolutionPaths = {
  params: {
    solution: string;
  };
};

type ProductPaths = {
  params: {
    product: string;
    solution: string;
  };
};

type IntegrationPaths = {
  params: {
    integration: string;
  };
};

type UseCasePaths = {
  params: {
    useCase: string;
    integration: string;
  };
};

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

export const getUseCasePaths = async (): Promise<IntegrationPaths[]> => {
  const paths: UseCasePaths[] = [];
  const integrations = fs.readdirSync(integrationDirectory);
  integrations.forEach((integration) => {
    const subdir = path.join(integrationDirectory, `${integration}/use-case`);
    if (fs.existsSync(subdir)) {
      const useCases = fs.readdirSync(subdir);
      useCases.forEach((useCase) => {
        if (useCase !== 'index.md') {
          paths.push({ params: { useCase, integration } });
        }
      });
    }
  });
  return paths;
};
