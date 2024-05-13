import { getChangelogCredentials } from '@/src/lib/changelog/changelog';
import { CreateFeed } from '@lib/changelog/changelog-feeds';
import { Changelog } from '@scdp/changelog';
import { Product } from '@scdp/changelog/types';
import { slugify } from '@scdp/changelog/utils';

// Default export to prevent next.js errors
const FeedPage = () => null;

export async function getServerSideProps(context: any) {
  const product = context.params.product;
  const preview = context.preview ? context.preview : null;
  const changelog = new Changelog(getChangelogCredentials(), preview);
  const products = await changelog.getProducts().then((response: Product[]) => {
    return response;
  });

  const currentProduct: Product | undefined = products.find((p) => slugify(p.name) == product);

  if (currentProduct != null) {
    // Fetch data
    const changelogEntryList = await changelog.getEntriesByProduct(currentProduct?.id);
    const feed = await CreateFeed(changelogEntryList);
    //Set page headers
    context.res.setHeader('Content-Type', 'text/xml');
    // cache for 600s
    context.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
    context.res.write(feed.atom1());
  } else {
    context.res.write('Not found');
  }
  context.res.end();

  return { props: {} };
}
export default FeedPage;
