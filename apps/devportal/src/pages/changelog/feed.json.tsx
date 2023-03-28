import { CreateFeed } from '@/src/common/changelog-feeds';
import { AllChangelogEntries } from 'sc-changelog/changelog';

// Default export to prevent next.js errors
const FeedPage = () => null;

export async function getServerSideProps(context: any) {
  // Fetch data
  const changelogEntryList = await AllChangelogEntries();
  const feed = await CreateFeed(changelogEntryList);
  //Set page headers
  context.res.setHeader('Content-Type', 'text/json; charset=utf-8');
  // cache for 600s
  context.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
  context.res.write(feed.json1());
  context.res.end();

  return { props: {} };
}
export default FeedPage;
