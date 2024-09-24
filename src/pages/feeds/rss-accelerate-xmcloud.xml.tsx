import { CreateAccelerateFeed } from '@lib/accelerate/feeds';
import { getLatestRecipes } from '@lib/accelerate/latest';

// Default export to prevent next.js errors
const FeedPage = () => null;

export async function getServerSideProps(context: any) {
  const preview = context.preview ? context.preview : null;

  const recipes = await getLatestRecipes('xm-cloud');
  if (recipes === null) {
    return { notFound: true };
  }

  const feed = CreateAccelerateFeed(recipes);

  // Set page headers
  context.res.setHeader('Content-Type', 'text/xml');
  // cache for 600s
  context.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
  context.res.write(feed.rss2());
  context.res.end();

  return { props: {} };
}

export default FeedPage;
