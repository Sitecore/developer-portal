// Global
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/dist/client/router';
// Lib
import { getMarkdownData, getPageLevelInfoForFile } from '@/lib/getMarkdownData';
// Interfaces
import { MarkdownMeta, MarkdownAsset } from '@/interfaces/markdownAsset';
// Components
import Layout from '@/components/layout/Layout';
import TwitterFeed from '@/components/twitterFeed';
import YouTubeFeed from '@/components/youtubeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
    const learnFolder = "learn";
    const pageInfo = await getPageLevelInfoForFile("learn.md", learnFolder);
    const starterKits = await getMarkdownData("starterkits.md", learnFolder);
    const gettingStarted = await getMarkdownData("gettingstarted.md", learnFolder);
    const learningSitecore = await getMarkdownData("learningSitecore.md", learnFolder);
  
    return {
        props: {
            pageInfo,
            starterKits,
            gettingStarted,
            learningSitecore
        },
    };
}

export default function Learn({ pageInfo, starterKits, gettingStarted, learningSitecore }: {pageInfo: MarkdownMeta, starterKits: MarkdownAsset, gettingStarted: MarkdownAsset, learningSitecore: MarkdownAsset}) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <Layout pageInfo={pageInfo}>
            <div className={styles.grid}>
                <div className={styles.productCategoryCard}>
                    <ReactMarkdown>{starterKits.markdown}</ReactMarkdown>
                </div>
                <div className={styles.productCategoryCardLarge}>
                    <ReactMarkdown>{gettingStarted.markdown}</ReactMarkdown>
                </div>
                <div className={styles.productCategoryCardLarge}>
                    <ReactMarkdown>{learningSitecore.markdown}</ReactMarkdown>
                </div>
                <YouTubeFeed pageInfo={pageInfo} />
                <TwitterFeed pageInfo={pageInfo} />
                <div className={styles.socialsCard}>
                    <h2>News &amp; Announcements</h2>
                    <a href="" className={styles.link}><li>Cool new things</li></a>
                </div>
            </div>
        </Layout>
    );
};

