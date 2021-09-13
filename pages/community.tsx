// Scripts
import { getPageInfo, getPartials } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartials } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import MarkdownGrid from '@/components/helper/MarkdownGrid';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/components/integrations/twitter/TwitterFeed';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('community');
  const partials = await getPartials({
    slack: 'community/slack',
    stackExchange: 'community/stackexchange',
    forums: 'community/forums',
    mvpSite: 'community/mvp',
  });

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Community({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PagePartials;
}) {
  return (
    <Layout pageInfo={pageInfo}>
      <MarkdownGrid
        partials={[partials.slack, partials.stackExchange, partials.forums, partials.mvpSite]}
      />
      <TwitterFeed content={pageInfo.twitter} />
      <StackExchangeFeed content={pageInfo.stackexchange} />
    </Layout>
  );
}
