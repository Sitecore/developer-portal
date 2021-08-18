import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import { getMarkdownData } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const communityMarkDownFolder = "communityMarkdown";
  const mvpSite = await getMarkdownData("mvp.md", communityMarkDownFolder);

  return {
      props: {
          mvpSite,
      },
  };
}

export default function Community({ mvpSite }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sitecore Community</title>
        <meta name="description" content="Connect with other members of the Sitecore Community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sitecore Community</h1>

        <div className={styles.grid}>
          <div className={styles.searchCard}>
            <h2>I'm a unified search 🔍</h2>
          </div>
          <div className={styles.productCategoryCard}>
						<h2>Forum box (TBD)</h2>
					</div>
          <div className={styles.productCategoryCard}>
						<h2>Slack box (TBD)</h2>
					</div>
          <div className={styles.productCategoryCard}>
						<h2>StackExchange box (TBD)</h2>
					</div>
          <div className={styles.productCategoryCard}>
						<ReactMarkdown>{mvpSite.markdown}</ReactMarkdown>
					</div>
          <div className={styles.youtubeCard}>
            <h2>Upcoming Events</h2>
          </div>
          <div className={styles.youtubeCard}>
            <h2>@WeAreSitecore Twitter feed 🕊</h2>
          </div>
          <div className={styles.youtubeCard}>
            <h2>Help and Feedback</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
