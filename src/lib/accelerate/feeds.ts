import { Feed } from 'feed';
import { AccelerateRecipe } from './types/recipe';

const publicUrl = process.env.NEXT_PUBLIC_PUBLIC_URL ? process.env.NEXT_PUBLIC_PUBLIC_URL : '';

export function CreateAccelerateFeed(recipes: Array<AccelerateRecipe>): Feed {
  const feed = new Feed({
    title: 'Sitecore Accelerate',
    description: 'Learn more about new and updated Sitecore Accelerate recipes!',
    id: `${publicUrl}`,
    link: `${publicUrl}/learn/accelerate`,
    language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `${publicUrl}/android-chrome-192x192.png`,
    favicon: `${publicUrl}/favicon.ico`,
    copyright: 'All rights reserved 2024, Sitecore',
    generator: 'Sitecore Developer Portal',
    author: {
      name: 'Sitecore',
      email: 'no-reply@sitecore.com',
      link: publicUrl,
    },
  });

  recipes.map((recipe: AccelerateRecipe) => {
    feed.addItem({
      title: recipe.title,
      description: recipe.description,
      link: `${publicUrl}/${recipe.url}`,
      date: new Date(recipe.lastUpdated),
    });
  });

  return feed;
}

