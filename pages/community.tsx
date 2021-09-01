import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getMarkdownData, getPageLevelInfoForFile } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";
import { MarkdownAsset, MarkdownMeta } from '../interfaces/markdownAsset';

export async function getStaticProps() {
  const communityMarkDownFolder = "community";
  const pageInfo = await getPageLevelInfoForFile("community.md", communityMarkDownFolder)
  const slack = await getMarkdownData("slack.md", communityMarkDownFolder);
  const stackExchange = await getMarkdownData("stackexchange.md", communityMarkDownFolder);
  const forums = await getMarkdownData("forums.md", communityMarkDownFolder);
  const mvpSite = await getMarkdownData("mvp.md", communityMarkDownFolder);

  return {
      props: {
          pageInfo,
          forums,
          slack,
          stackExchange,
          mvpSite,
      },
  };
}

export default function Community({ pageInfo, forums, slack, stackExchange: stackExchange, mvpSite }: {pageInfo: MarkdownMeta, forums: MarkdownAsset, slack: MarkdownAsset, stackExchange: MarkdownAsset, mvpSite: MarkdownAsset}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageInfo.prettyName}</title>
        <meta name="description" content={pageInfo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{pageInfo.prettyName}</h1>
        <p>{pageInfo.description}</p>

        <div className={styles.grid}>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{slack.markdown}</ReactMarkdown>
					</div>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{stackExchange.markdown}</ReactMarkdown>
					</div>
          <div className={styles.productCategoryCard}>
            <ReactMarkdown>{forums.markdown}</ReactMarkdown>
					</div>
          <div className={styles.productCategoryCard}>
						<ReactMarkdown>{mvpSite.markdown}</ReactMarkdown>
					</div>
          <div className={styles.youtubeCard}>
            <h2>@WeAreSitecore Twitter feed 🕊</h2>
          </div>
          <div className={styles.youtubeCard}>
            <h2>Latest StackExchange questions</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
