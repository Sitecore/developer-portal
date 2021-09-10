// Global
import ReactMarkdown from 'react-markdown';
// Lib
import { getMarkdownData, getPageLevelInfoForFile } from '@/lib/getMarkdownData';
// Interfaces
import { MarkdownAsset, MarkdownMeta } from '@/interfaces/markdownAsset';
import { StackExchangeQuestion } from '@/interfaces/integrations';
// Components
import Layout from '@/components/layout/Layout';
import stackExchangeApi from '@/components/integrations/stackexchange/StackExchange.api';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/components/integrations/TwitterFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  const communityMarkDownFolder = 'community';
  const pageInfo = await getPageLevelInfoForFile('community.md', communityMarkDownFolder);
  const slack = await getMarkdownData('slack.md', communityMarkDownFolder);
  const stackExchange = await getMarkdownData('stackexchange.md', communityMarkDownFolder);
  const forums = await getMarkdownData('forums.md', communityMarkDownFolder);
  const mvpSite = await getMarkdownData('mvp.md', communityMarkDownFolder);
  const stackExchangeQuestions = await stackExchangeApi.get(pageInfo.stackexchange);

  return {
    props: {
      pageInfo,
      forums,
      slack,
      stackExchange,
      stackExchangeQuestions,
      mvpSite,
    },
  };
}

export default function Community({
  pageInfo,
  forums,
  slack,
  stackExchange: stackExchange,
  stackExchangeQuestions,
  mvpSite,
}: {
  pageInfo: MarkdownMeta;
  forums: MarkdownAsset;
  slack: MarkdownAsset;
  stackExchange: MarkdownAsset;
  stackExchangeQuestions: StackExchangeQuestion[];
  mvpSite: MarkdownAsset;
}) {
  return (
    <Layout pageInfo={pageInfo}>
      <div className={styles.grid}>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{slack.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{stackExchange.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{forums.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{mvpSite.markdown}</ReactMarkdown>
        </div>
        <TwitterFeed args={pageInfo.twitter} />
        <StackExchangeFeed questions={stackExchangeQuestions} />
      </div>
    </Layout>
  );
}
