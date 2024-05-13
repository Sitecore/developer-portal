import { getChangelogCredentials } from '@/src/lib/changelog/changelog';
import { CreateFeed } from '@lib/changelog/changelog-feeds';
import { Changelog } from '@scdp/changelog';

// Default export to prevent next.js errors
const FeedPage = () => null;

export async function getServerSideProps(context: any) {
  const preview = context.preview ? context.preview : null;
  const changelog = new Changelog(getChangelogCredentials(), preview);
  // Fetch data
  const changelogEntryList = await changelog.getAllEntries();
  const feed = CreateFeed(changelogEntryList);
  //Set page headers
  context.res.setHeader('Content-Type', 'text/xml');
  // cache for 600s
  context.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
  context.res.write(feed.rss2());
  context.res.end();

  return { props: {} };
}
export default FeedPage;
