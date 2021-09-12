// Global
import ReactMarkdown from 'react-markdown';
// Scripts
import { getPageInfo, getPartials } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartials } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import TwitterFeed from '@/components/integrations/twitter/TwitterFeed';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';
import styles from '@/styles/Home.module.css';

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
      <div className={styles.grid}>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.supportKB}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.cdpKB}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.orderCloud}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.contentHub}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.moosend}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.sitecoreKC}</ReactMarkdown>
        </div>
        <YouTubeFeed content={pageInfo.youtube} />
        <TwitterFeed content={pageInfo.twitter} />
      </div>
    </Layout>
  );
}
