// Scipts
import { getPageInfo, getPartials } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartials } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import MarkdownContent from '@/components/helper/MarkdownContent';
import TwitterFeed from '@/components/integrations/twitter/TwitterFeed';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('docs');
  const partials = await getPartials({
    cms: 'docs/cms',
    dam: 'docs/dam',
    cdm: 'docs/customerdatamanagement',
    personalization: 'docs/personalization',
    ma: 'docs/marketingautomation',
    commerce: 'docs/commerce',
  });

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Docs({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PagePartials;
}) {
  return (
    <Layout pageInfo={pageInfo}>
      <MarkdownContent
        partials={[
          partials.cms,
          partials.dam,
          partials.cdm,
          partials.personalization,
          partials.ma,
          partials.commerce,
        ]}
      />
      <YouTubeFeed content={pageInfo.youtube} />
      <TwitterFeed content={pageInfo.twitter} />
    </Layout>
  );
}
