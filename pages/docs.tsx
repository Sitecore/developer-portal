// Global
import ReactMarkdown from "react-markdown";
// Lib
import { getMarkdownData, getPageLevelInfoForFile } from "@/lib/getMarkdownData";
// Interfaces
import { MarkdownAsset, MarkdownMeta } from '@/interfaces/markdownAsset';
// Components
import Layout from '@/components/layout/Layout';
import TwitterFeed from '@/components/twitterFeed';
import YouTubeFeed from '@/components/youtubeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
  const docsMarkDownFolder = "docs";
  const pageInfo = await getPageLevelInfoForFile("docs.md", docsMarkDownFolder);
  const cmsDocs = await getMarkdownData("cms.md", docsMarkDownFolder);
  const damDocs = await getMarkdownData("dam.md", docsMarkDownFolder);
  const cdmDocs = await getMarkdownData("customerdatamanagement.md", docsMarkDownFolder);
  const personalizationDocs = await getMarkdownData("personalization.md", docsMarkDownFolder);
  const maDocs = await getMarkdownData("marketingautomation.md", docsMarkDownFolder);
  const commerceDocs = await getMarkdownData("commerce.md", docsMarkDownFolder);

  return {
      props: {
          pageInfo,
          cmsDocs,
          damDocs,
          cdmDocs,
          personalizationDocs,
          maDocs,
          commerceDocs,
      },
  };
}

export default function Docs({ pageInfo, cmsDocs, damDocs, cdmDocs, personalizationDocs, maDocs, commerceDocs } : {pageInfo:MarkdownMeta, cmsDocs: MarkdownAsset, damDocs: MarkdownAsset, cdmDocs: MarkdownAsset, personalizationDocs: MarkdownAsset, maDocs: MarkdownAsset, commerceDocs: MarkdownAsset}) {
  return (
    <Layout pageInfo={pageInfo}>
      <div className={styles.grid}>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{cmsDocs.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{damDocs.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{cdmDocs.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{personalizationDocs.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{maDocs.markdown}</ReactMarkdown>
        </div>
        <div className={styles.productCategoryCard}>
          <ReactMarkdown>{commerceDocs.markdown}</ReactMarkdown>
        </div>
        <YouTubeFeed pageInfo={pageInfo} />
        <TwitterFeed pageInfo={pageInfo} />
      </div>
    </Layout>
  )
}
