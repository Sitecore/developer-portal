// Global
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/dist/client/router';
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
  const pageInfo = await getPageInfo('learn');
  const partials = await getPartials({
    starterKits: 'learn/starterkits',
    gettingStarted: 'learn/gettingstarted',
    learningSitecore: 'learn/learningSitecore',
  });

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Learn({
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
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{partials.starterKits}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCardLarge}>
          <ReactMarkdown>{partials.gettingStarted}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCardLarge}>
          <ReactMarkdown>{partials.learningSitecore}</ReactMarkdown>
        </div>
        <YouTubeFeed content={pageInfo.youtube} />
        <TwitterFeed content={pageInfo.twitter} />
        <div className={styles.socialsCard}>
          <h2>News &amp; Announcements</h2>
          <a href="" className={styles.link}>
            <li>Cool new things</li>
          </a>
        </div>
      </div>
    </Layout>
  );
}
