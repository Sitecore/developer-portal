import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import { getMarkdownData } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const docsMarkDownFolder = "docsMarkdown";
  const cmsDocs = await getMarkdownData("CMS.md", docsMarkDownFolder);

  return {
      props: {
          cmsDocs,
      },
  };
}

export default function Docs({ cmsDocs }) {
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
          <div className={styles.socialsCard}>
						<ReactMarkdown>{cmsDocs.markdown}</ReactMarkdown>
					</div>
          <div className={styles.productCategoryCard}>
            <h2>Content Management (CMS)</h2>
            <p>Integrate CMS into your tech stack to enable marketing teams to own the digital solutions.</p>
            <a href="content-management/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <a href="digital-asset-management/" ><h2>Digital Asset Management (DAM) 📀 &rarr;</h2></a>
            <p>Scale management and delivery of media and static assets</p>
            <a href="digital-asset-management/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <a href="customer-data-management/" ><h2>Customer Data Management 👨‍👨‍👧‍👧 &rarr;</h2></a>
            <p>Track events, activity, and customer profile information</p>
            <a href="customer-data-management/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <a href="personalization-testing/" ><h2>Personalization and Testing 🕵️‍♀️ &rarr;</h2></a>
            <p>Deliver personalized content and test which content is working</p>
            <a href="personalization-testing/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <a href="marketing-automation/" ><h2>Marketing Automation 🚗 &rarr;</h2></a>
            <p>Connect with customers using marketing automation</p>
            <a href="marketing-automation/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <h2><a href="commerce/">Commerce 💸 &rarr;</a></h2>
            <p>Build out order management, merchandising, marketplaces, and storefronts</p>
            <a href="commerce/" className={styles.link}>Learn more...</a>
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
