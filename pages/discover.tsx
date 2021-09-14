// Scripts
import { getPageInfo, getPartials } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartials } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import MarkdownGrid from '@/components/helper/MarkdownGrid';
import TwitterFeed from '@/components/integrations/twitter/TwitterFeed';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('discover');
  const partials = await getPartials({
    supportKB: 'discover/supportkb',
    cdpKB: 'discover/cdpkb',
    sitecoreKC: 'discover/sitecoreknowledgecenter',
    orderCloud: 'discover/ordercloud',
    moosend: 'discover/moosend',
    contentHub: 'discover/contenthub',
  });

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Discover({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PagePartials;
}) {
  return (
    <Layout pageInfo={pageInfo}>
      <MarkdownGrid
        partials={[
          partials.supportKB,
          partials.cdpKB,
          partials.orderCloud,
          partials.contentHub,
          partials.moosend,
          partials.sitecoreKC,
        ]}
      />
      <YouTubeFeed content={pageInfo.youtube} />
      <TwitterFeed content={pageInfo.twitter} />
    </Layout>
  );
}
