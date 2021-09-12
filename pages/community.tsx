// Global
import ReactMarkdown from 'react-markdown';
// Scripts
import { getPageInfo, getPartials } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartials } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/components/integrations/twitter/TwitterFeed';
import styles from '@/styles/Home.module.css';

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
      <div className={styles.grid}>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.slack}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.stackExchange}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.forums}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.mvpSite}</ReactMarkdown>
        </div>
        <TwitterFeed content={pageInfo.twitter} />
        <StackExchangeFeed content={pageInfo.stackexchange} />
      </div>
    </Layout>
  );
}
