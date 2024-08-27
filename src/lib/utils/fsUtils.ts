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
