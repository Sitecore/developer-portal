import { CreateFeed } from '@lib/changelog/changelog-feeds';
import { ChangelogEntriesByProduct } from 'sc-changelog/changelog';
import GetProducts from 'sc-changelog/products';
import { Product } from 'sc-changelog/types/product';
import { slugify } from 'sc-changelog/utils/stringUtils';

// Default export to prevent next.js errors
const FeedPage = () => null;

export async function getServerSideProps(context: any) {
  const product = context.params.product;
  const preview = context.preview ? context.preview : null;
  const products = await GetProducts(preview).then((response: Product[]) => {
    return response;
  });

  const currentProduct: Product | undefined = products.find((p) => slugify(p.name) == product);

  if (currentProduct != null) {
    // Fetch data
    const changelogEntryList = await ChangelogEntriesByProduct(preview, currentProduct?.id);
    const feed = await CreateFeed(changelogEntryList);
    //Set page headers
    context.res.setHeader('Content-Type', 'text/xml');
    // cache for 600s
    context.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
    context.res.write(feed.rss2());
  } else {
    context.res.write('Not found');
  }
  context.res.end();

  return { props: {} };
}
export default FeedPage;
