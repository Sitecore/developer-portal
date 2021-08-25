import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getMarkdownData } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
  const communityMarkDownFolder = "community";
  const helpMarkDownFolder = "help";
  const slack = await getMarkdownData("slack.md", communityMarkDownFolder);
  const stackexchange = await getMarkdownData("stackexchange.md", communityMarkDownFolder);
  const forums = await getMarkdownData("forums.md", communityMarkDownFolder);
  const support = await getMarkdownData("support.md", helpMarkDownFolder);

  return {
      props: {
          forums,
          slack,
          stackexchange,
          support,
      },
  };
}

export default function Community({ forums, slack, stackexchange, support}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Get Help</title>
        <meta name="description" content="Looking for help? Try these channels to get an answer to your question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Get Help</h1>

        <div className={styles.grid}>
          <div className={styles.socialsCard}>
            <ReactMarkdown>{support.markdown}</ReactMarkdown>
          </div>
          <div className={styles.youtubeCard}>
            <h2>Ask the community</h2>
            <div className={styles.threeColumn}>
              <div className={styles.oneThirdCard}>
                <ReactMarkdown>{slack.markdown}</ReactMarkdown>
              </div>
              <div className={styles.oneThirdCard}>
                <ReactMarkdown>{stackexchange.markdown}</ReactMarkdown>
              </div>
              <div className={styles.oneThirdCard}>
                <ReactMarkdown>{forums.markdown}</ReactMarkdown>
              </div>
            </div>
          </div>
          <div className={styles.youtubeCard}>
            <h2>Contact Us info here (or redirect to sitecore.com contact)</h2>
          </div>
          <div className={styles.youtubeCard}>
            <h2>Latest StackExchange questions</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
