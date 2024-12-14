import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { convertFileToURL, getAllMdFiles } from '../utils/fsUtils';
import { AccelerateRecipe } from './types/recipe';

export const getLatestRecipes = async (product: string, count?: number) => {
  const dataDirectory = path.join(process.cwd(), 'data/markdown/pages');
  const recipesRoot = path.join(dataDirectory, 'learn', 'accelerate', product);

  if (!fs.existsSync(recipesRoot)) {
    return null;
  }

  const recipeFiles = getAllMdFiles(recipesRoot);

  const recipes = await Promise.all(
    recipeFiles.map(async (file) => {
      const content = await fs.promises.readFile(file, 'utf-8');
      const { data } = matter(content);
      if (data.lastUpdated) {
        return {
          lastUpdated: data.lastUpdated,
          title: data.title,
          description: data.description,
          url: convertFileToURL(file),
          audience: data.audience,
        };
      }
      return null;
    })
  );

  const filteredRecipes = recipes
    .filter((recipe) => recipe !== null)
    .sort((a, b) => {
      if (a.lastUpdated < b.lastUpdated) {
        return 1;
      } else if (a.lastUpdated > b.lastUpdated) {
        return -1;
      } else {
        return 0;
      }
    }) as Array<AccelerateRecipe>;

  if (count) {
    return filteredRecipes.slice(0, count);
  }
  return filteredRecipes;
};
