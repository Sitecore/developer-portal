// Global
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/dist/client/router';
import { classnames } from '@/tailwindcss-classnames';
// Scipts
import { getPageInfo, getPartials } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartialContentDict } from '@/interfaces/page-info';
// Component
import CommunityList from '@/components/lists/CommunityList';
import Container from '@/components/helper/Container';
import Layout from '@/components/layout/Layout';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('help');
  const partials = await getPartials({
    support: 'help/support',
  });

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Help({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PagePartialContentDict;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout pageInfo={pageInfo}>
      <Container>
        <div className={classnames('prose')}>
          <ReactMarkdown>{partials.support}</ReactMarkdown>
        </div>
        <CommunityList />
        <div className={styles.youtubeCard}>
          <h2>Contact Us info here (or redirect to sitecore.com contact)</h2>
        </div>
        <StackExchangeFeed content={pageInfo.stackexchange} />
      </Container>
    </Layout>
  );
}
