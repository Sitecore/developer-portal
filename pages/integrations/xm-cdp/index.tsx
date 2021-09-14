// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import type { PageInfo } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import MarkdownContent from '@/components/helper/MarkdownContent';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('integrations/xm-cdp');
  const partials = pageInfo?.partials ? await getPartialsAsArray(pageInfo.partials) : [];

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function XM_CDP({ pageInfo, partials }: { pageInfo: PageInfo; partials: string[] }) {
  return (
    <Layout pageInfo={pageInfo}>
      <MarkdownContent partials={partials} />
    </Layout>
  );
}
