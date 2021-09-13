// Global
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/dist/client/router';
import { classnames } from '@/tailwindcss-classnames';
// Scipts
import { getPageInfo, getPartials } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartials } from '@/interfaces/page-info';
// Component
import Layout from '@/components/layout/Layout';
import MarkdownGrid from '@/components/helper/MarkdownGrid';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('help');
  const partials = await getPartials({
    slack: 'community/slack',
    stackExchange: 'community/stackexchange',
    forums: 'community/forums',
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
  partials: PagePartials;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout pageInfo={pageInfo}>
      <div className={styles.grid}>
        <div className={classnames('prose')}>
          <ReactMarkdown>{partials.support}</ReactMarkdown>
        </div>
        <div className={styles.youtubeCard}>
          <h2>Ask the community</h2>
          <MarkdownGrid partials={[partials.slack, partials.stackExchange, partials.forums]} />
        </div>
        <div className={styles.youtubeCard}>
          <h2>Contact Us info here (or redirect to sitecore.com contact)</h2>
        </div>
        <StackExchangeFeed content={pageInfo.stackexchange} />
      </div>
    </Layout>
  );
}
