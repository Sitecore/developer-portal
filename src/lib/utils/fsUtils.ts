import fs from 'fs';
import path from 'path';

export function searchForFile(folderPath: string, fileName: string): string | null {
  const filePath = path.join(folderPath, fileName);

  try {
    // Check if the file exists in the current folder
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return filePath;
    } else {
      // If not found, check the parent folder
      const parentFolder = path.dirname(folderPath);

      // Base case: If we've reached the root folder and still haven't found the file, return null
      if (parentFolder === folderPath) {
        return null;
      }

      // Recursively search in the parent folder
      return searchForFile(parentFolder, fileName);
    }
  } catch (err) {
    // Handle any errors that occur during the search
    console.error(`Error searching for file ${fileName}: ${err}`);

    return null;
  }
}

export const getAllMdFiles = (dir: string): string[] => {
  const files: string[] = [];

  const readDirectory = (directory: string) => {
    const entries = fs.readdirSync(directory);

    entries.forEach((entry) => {
      const entryPath = path.join(directory, entry);
      const stat = fs.statSync(entryPath);

      if (stat.isDirectory()) {
        readDirectory(entryPath);
      } else if (path.extname(entryPath) === '.md') {
        files.push(entryPath);
      }
    });
  };

  readDirectory(dir);

  return files;
};

export const convertFileToURL = (filePath: string): string | null => {
  const dataDirectory = path.join(process.cwd(), 'data/markdown/pages');

  const relativePath = path.relative(dataDirectory, filePath);

  return relativePath.replace(/\.md$/, '').replace(/\\/g, '/');
};
