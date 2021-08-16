import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const webTracking = await getMarkdownData("webTracking.md");
  const xConnect = await getMarkdownData("xConnect.md");
  const xDB = await getMarkdownData("xDB.md");
  const referenceDataService = await getMarkdownData("referenceDataService.md");

  return {
    props: {
        webTracking,
        xConnect,
        xDB,
        referenceDataService
    },
  };
}

export default function XP({ webTracking, xConnect, xDB, referenceDataService }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Customer Data Management - Experience Platform</title>
        <meta name="description" content="Use the Sitecore Experience Platform to manage customer data with xDB and xConnect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Customer Data Management - Experience Platform 👨‍👨‍👧‍👧
        </h1>
        <a href="/" className={styles.link}><h2>Take me Home</h2></a>
        <div className={styles.grid}>
          <div className={styles.searchCard}>
            <h2>I'm a unified search 🔍</h2>
          </div>


          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{webTracking.markdown}</ReactMarkdown>
          </div>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{xConnect.markdown}</ReactMarkdown>
          </div>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{xDB.markdown}</ReactMarkdown>
          </div>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{referenceDataService.markdown}</ReactMarkdown>
          </div>


          <div className={styles.socialsCard}>
            <h2>Socials</h2>
          </div> 
          <div className={styles.socialsCard}>
            <h2>News & Announcements</h2>
            <a href="" className={styles.link}><li>Cool new things</li></a>
          </div>
          <div className={styles.socialsCard}>
            <h2>Get Help</h2>
            <a href="https://support.sitecore.com/kb?id=kb_home" className={styles.link}><li>Sitecore Support</li></a>
          </div>

        </div>
      </main>

      <Footer />

    </div>)
}

