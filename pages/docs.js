import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import { getMarkdownData } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const docsMarkDownFolder = "docsMarkdown";
  const cmsDocs = await getMarkdownData("cms.md", docsMarkDownFolder);
  const damDocs = await getMarkdownData("dam.md", docsMarkDownFolder);
  const cdmDocs = await getMarkdownData("customerdatamanagement.md", docsMarkDownFolder);
  const personalizationDocs = await getMarkdownData("personalization.md", docsMarkDownFolder);
  const maDocs = await getMarkdownData("marketingautomation.md", docsMarkDownFolder);

  return {
      props: {
          cmsDocs,
          damDocs,
          cdmDocs,
          personalizationDocs,
          maDocs,
      },
  };
}

export default function Docs({ cmsDocs, damDocs, cdmDocs, personalizationDocs, maDocs }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sitecore Developer Documentation</title>
        <meta name="description" content="Links to various documentation sources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Developer Documentation</h1>

        <div className={styles.grid}>
          <div className={styles.searchCard}>
            <h2>I'm a unified search 🔍</h2>
          </div>
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
          <div className={styles.youtubeCard}>
            <h2>Help and Feedback</h2>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
