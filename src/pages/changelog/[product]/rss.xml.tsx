import { Changelog } from '@lib/changelog';
import { CreateFeed } from '@lib/changelog/feeds';
import { Product } from '@lib/changelog/types';
import { getQueryValue } from '@/src/lib/utils/requests';
import { slugify } from '@/src/lib/utils/stringUtil';
import { GetServerSidePropsContext } from 'next';

import { getChangelogCredentials } from '@/src/lib/changelog/common/credentials';

// Default export to prevent next.js errors
const FeedPage = () => null;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const product = context.params?.product;
  const search = getQueryValue(context.query?.search);
  const preview = context.preview ?? false;
  const changelog = new Changelog(getChangelogCredentials(), preview);

  const products = await changelog.getProducts().then((response: Array<Product>) => {
    return response;
  });

  const currentProduct: Product | undefined = products.find((p) => slugify(p.name) == product);

  if (currentProduct != null) {
    // Fetch data
    const changelogEntryList =
      search != null ? await changelog.getEntriesByTitleProductChangeType({ entryTitle: search.toString(), productId: currentProduct?.id, pageSize: 10 }) : await changelog.getEntries({ pageSize: 10, productId: currentProduct?.id });

    const feed = await CreateFeed(changelogEntryList);

    // Set page headers
    context.res.setHeader('Content-Type', 'text/xml');
    // cache for 600s
    // context.res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate');
    context.res.write(feed.rss2());
  } else {
    context.res.write('Not found');
  }

  context.res.end();

  return { props: {} };
}

export default FeedPage;
