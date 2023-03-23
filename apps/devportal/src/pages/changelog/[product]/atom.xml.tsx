import Product from '@/../../packages/sc-changelog/types/product';
import { slugify } from '@/../../packages/sc-changelog/utils/stringUtils';
import { CreateFeed } from '@/src/common/changelog-feeds';
import { ChangelogEntriesByProduct, GetProducts } from 'sc-changelog/changelog';

// Default export to prevent next.js errors
const FeedPage = () => null;

export async function getServerSideProps(context: any) {
  const product = context.params.product;
  const products = await GetProducts().then((response: Product[]) => {
    return response;
  });

  const currentProduct: Product | undefined = products.find((p) => slugify(p.name) == product);

  if (currentProduct != null) {
    // Fetch data
    const changelogEntryList = await ChangelogEntriesByProduct(currentProduct?.id);
    const feed = await CreateFeed(changelogEntryList);
    //Set page headers
    context.res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    // cache for 600s so it wont call our wp on every request.
    context.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
    context.res.write(feed.atom1());
  } else {
    context.res.write('Not found');
  }
  context.res.end();

  return { props: {} };
}
export default FeedPage;
