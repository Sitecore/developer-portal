// Global
import ReactMarkdown from 'react-markdown';
// Lib
import { getMarkdownData, getPageLevelInfoForFile } from '@/lib/getMarkdownData';
// Interfaces
import { MarkdownAsset, MarkdownMeta } from '@/interfaces/markdownAsset';
// Components
import Layout from '@/components/layout/Layout';
import TwitterFeed from '@/components/twitterFeed';
import YouTubeFeed from '@/components/youtubeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  const discoverMarkDownFolder = 'discover';
  const pageInfo = await getPageLevelInfoForFile('discover.md', discoverMarkDownFolder);
  const supportKB = await getMarkdownData('supportkb.md', discoverMarkDownFolder);
  const cdpKB = await getMarkdownData('cdpkb.md', discoverMarkDownFolder);
  const sitecoreKC = await getMarkdownData('sitecoreknowledgecenter.md', discoverMarkDownFolder);
  const orderCloud = await getMarkdownData('ordercloud.md', discoverMarkDownFolder);
  const moosend = await getMarkdownData('moosend.md', discoverMarkDownFolder);
  const contentHub = await getMarkdownData('contenthub.md', discoverMarkDownFolder);

  return {
    props: {
      pageInfo,
      supportKB,
      cdpKB,
      sitecoreKC,
      orderCloud,
      moosend,
      contentHub,
    },
  };
}

export default function Discover({
  pageInfo,
  supportKB,
  cdpKB,
  sitecoreKC,
  orderCloud,
  moosend,
  contentHub,
}: {
  pageInfo: MarkdownMeta;
  supportKB: MarkdownAsset;
  cdpKB: MarkdownAsset;
  sitecoreKC: MarkdownAsset;
  orderCloud: MarkdownAsset;
  moosend: MarkdownAsset;
  contentHub: MarkdownAsset;
}) {
  return (
    <Layout pageInfo={pageInfo}>
      <div className={styles.grid}>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{supportKB.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{cdpKB.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{orderCloud.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{contentHub.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{moosend.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{sitecoreKC.markdown}</ReactMarkdown>
        </div>
        <YouTubeFeed pageInfo={pageInfo} />
        <TwitterFeed pageInfo={pageInfo} />
      </div>
    </Layout>
  );
}
