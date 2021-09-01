import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getMarkdownData, getPageLevelInfoForFile } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";
import { MarkdownAsset, MarkdownMeta } from '../interfaces/markdownAsset';

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
    <div className={styles.container}>
      <Head>
        <title>{pageInfo.prettyName}</title>
        <meta name="description" content={pageInfo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{pageInfo.prettyName}</h1>
        <p>
          {pageInfo.description}
        </p>

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
          <div className={styles.youtubeCard}>
            <h2>@DocsSitecore Twitter feed 🕊</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
