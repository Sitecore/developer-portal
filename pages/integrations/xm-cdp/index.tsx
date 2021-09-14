// Global
import ReactMarkdown from 'react-markdown';
// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import type { PageInfo } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';

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
      <div>
        {partials.map((partial, i) => (
          <div key={i}>
            <ReactMarkdown>{partial}</ReactMarkdown>
          </div>
        ))}
      </div>
    </Layout>
  );
}
