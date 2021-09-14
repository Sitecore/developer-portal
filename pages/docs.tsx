// Global
import ReactMarkdown from 'react-markdown';
// Scipts
import { getPageInfo, getPartials } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartials } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import TwitterFeed from '@/components/integrations/twitter/TwitterFeed';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  const docsMarkDownFolder = 'docs';
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
      <div className={styles.grid}>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.cms}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.dam}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.cdm}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.personalization}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.ma}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.commerce}</ReactMarkdown>
        </div>
        <YouTubeFeed content={pageInfo.youtube} />
        <TwitterFeed content={pageInfo.twitter} />
      </div>
    </Layout>
  );
}
