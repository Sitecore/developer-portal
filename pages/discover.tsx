import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getMarkdownData } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";
import { MarkdownAsset } from '../interfaces/markdownAsset';

export async function getStaticProps() {
  const discoverMarkDownFolder = "discover";
  const supportKB = await getMarkdownData("supportkb.md", discoverMarkDownFolder);
  const cdpKB = await getMarkdownData("cdpkb.md", discoverMarkDownFolder);
  const sitecoreKC = await getMarkdownData("sitecoreknowledgecenter.md", discoverMarkDownFolder);
  const orderCloud = await getMarkdownData("ordercloud.md", discoverMarkDownFolder);
  const moosend = await getMarkdownData("moosend.md", discoverMarkDownFolder);
  const contentHub = await getMarkdownData("contenthub.md", discoverMarkDownFolder);

  return {
      props: {
          supportKB,
          cdpKB,
          sitecoreKC,
          orderCloud,
          moosend,
          contentHub,
      },
  };
}

export default function Discover({ supportKB, cdpKB, sitecoreKC, orderCloud, moosend, contentHub } 
  : {supportKB: MarkdownAsset, cdpKB: MarkdownAsset, sitecoreKC: MarkdownAsset, orderCloud: MarkdownAsset, moosend: MarkdownAsset, contentHub: MarkdownAsset}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Sitecore</title>
        <meta name="description" content="Get deep into the products with knowledgebase articles and how-to documents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Discover Sitecore</h1>

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
          <div className={styles.youtubeCard}>
            <h2>Discover Sitecore YouTube feed (5 most recent videos) 🎥</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
