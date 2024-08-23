import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';
import { Changelog } from '@lib/changelog';
import { CreateFeed } from '@lib/changelog/feeds';

// Default export to prevent next.js errors
const FeedPage = () => null;

export async function getServerSideProps(context: any) {
  const preview = context.preview ? context.preview : null;
  const changelog = new Changelog(getChangelogCredentials(), preview);
  // Fetch data
  const changelogEntryList = await changelog.getEntries({ pageSize: 10 });
  // Fetch data
  const feed = await CreateFeed(changelogEntryList);
  //Set page headers
  context.res.setHeader('Content-Type', 'text/xml');
  // cache for 600s
  context.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
  context.res.write(feed.atom1());
  context.res.end();

  return { props: {} };
}
export default FeedPage;