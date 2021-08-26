import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import { getMarkdownData } from "../../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const sitecoreCDP = await getMarkdownData("sitecoreCDP.md", "product");

  return {
    props: {
        sitecoreCDP,
    },
  };
}

export default function CDP({ sitecoreCDP}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Customer Data Management - Sitecore CDP</title>
        <meta name="description" content="Managing customer data with Sitecore CDP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Customer Data Management - Sitecore CDP 👨‍👨‍👧‍👧</h1>
        <div className={styles.grid}>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{sitecoreCDP.markdown}</ReactMarkdown>
          </div>

          <div className={styles.socialsCard}>
            <h2>General SitecoreCDP Socials</h2>
          </div> 
          <div className={styles.socialsCard}>
            <h2>News & Announcements</h2>
            <a href="" className={styles.link}><li>Cool new SitecoreCDP things</li></a>
          </div>
        </div>
      </main>
    </div>)
}

