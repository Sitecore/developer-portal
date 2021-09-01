import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getMarkdownData, getPageLevelInfoForFile } from "../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";
import { MarkdownAsset, MarkdownMeta } from '../interfaces/markdownAsset';
import StackExchangeFeed from '../components/stackExchangeFeed';
import YouTubeFeed from '../components/youtubeFeed';

export async function getStaticProps() {
  const communityMarkDownFolder = "community";
  const helpMarkDownFolder = "help";
  const pageInfo = await getPageLevelInfoForFile("home.md", "home");
  const slack = await getMarkdownData("slack.md", communityMarkDownFolder);
  const stackExchange = await getMarkdownData("stackexchange.md", communityMarkDownFolder);
  const forums = await getMarkdownData("forums.md", communityMarkDownFolder);
  const getHelp = await getMarkdownData("gethelp.md", helpMarkDownFolder);

  return {
      props: {
          pageInfo,
          forums,
          slack,
          stackExchange,
          getHelp
      },
  };
}

export default function Home({pageInfo, forums, slack, stackExchange, getHelp} : {pageInfo: MarkdownMeta, forums: MarkdownAsset, slack: MarkdownAsset, stackExchange: MarkdownAsset, getHelp: MarkdownAsset}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageInfo.prettyName}</title>
        <meta name="description" content={pageInfo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {pageInfo.prettyName}
        </h1>
        <p>
          {pageInfo.description}
        </p>

        <div className={styles.grid}>
          <YouTubeFeed pageInfo={pageInfo} />
          <div className={styles.youtubeCard}>
            <h2>Join these cool Sitecore Communities 🤖</h2>
            <div className={styles.threeColumn}>
              <div className={styles.oneThirdCard}>
                <ReactMarkdown>{slack.markdown}</ReactMarkdown>
              </div>
              <div className={styles.oneThirdCard}>
                <ReactMarkdown>{stackExchange.markdown}</ReactMarkdown>
              </div>
              <div className={styles.oneThirdCard}>
                <ReactMarkdown>{forums.markdown}</ReactMarkdown>
              </div>
            </div>
          </div>

          {/* PRODUCT SOLUTIONS */}
          <div className={styles.productCategoryCard}>
            <a href="content-management/" ><h2>Content Management (CMS) 💾 &rarr;</h2></a>
            <p>Integrate CMS into your tech stack to enable marketing teams to own the digital solutions.</p>
            <a href="content-management/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.productCategoryCard}>
            <a href="digital-asset-management/dam" ><h2>Digital Asset Management (DAM) 📀 &rarr;</h2></a>
            <p>Scale management and delivery of media and static assets</p>
            <a href="digital-asset-management/dam" className={styles.link}>Learn more...</a>
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
          <div className={styles.productCategoryCard}>
            <h2><a href="devops/">DevOps 🚢 &rarr;</a></h2>
            <p>Installation, deployment, and architecture</p>
            <a href="devops/" className={styles.link}>Learn more...</a>
          </div>
          <div className={styles.youtubeCard}>
            <ReactMarkdown>{getHelp.markdown}</ReactMarkdown>
          </div>
          <StackExchangeFeed pageInfo={pageInfo} />
        </div>
      </main>
    </div>
  )
}
