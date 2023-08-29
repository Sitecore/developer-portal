import fs from 'fs';
import path, { join } from 'path';

const pagesDirectory = path.join(process.cwd(), 'data/markdown/pages/');

export type slugPagePaths = { params: { slug: string[] } };

export const getAllFilesRecursively = (dir: string, fileList: string[] = []): string[] => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fileList = getAllFilesRecursively(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
};

export const getStaticPathsRecursively = async (): Promise<slugPagePaths[]> => {
  const allFiles = getAllFilesRecursively(pagesDirectory);

  const paths = allFiles.map((filePath) => {
    const relativePath = filePath.replace(pagesDirectory, '').replace('index.md', '');
    const pathSegments = relativePath.split('\\').map((segment) => segment.replace(/\.[^/.]+$/, '')); // Remove file extension

    return { params: { slug: pathSegments } };
  });

  return paths;
};
