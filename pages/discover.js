import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import { getMarkdownData } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const discoverMarkDownFolder = "discoverMarkdown";
  const supportKB = await getMarkdownData("supportkb.md", discoverMarkDownFolder);

  return {
      props: {
          supportKB,
      },
  };
}

export default function Docs({ supportKB }) {
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
          <div className={styles.searchCard}>
            <h2>I'm a unified search 🔍</h2>
          </div>
          <div className={styles.productCategoryCard}>
						<ReactMarkdown>{supportKB.markdown}</ReactMarkdown>
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
