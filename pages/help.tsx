// Global
import ReactMarkdown from 'react-markdown';
import { useRouter } from 'next/dist/client/router';
// Lib
import { getMarkdownData, getPageLevelInfoForFile } from '@/lib/getMarkdownData';
// Interfaces
import { MarkdownMeta, MarkdownAsset } from '@/interfaces/markdownAsset';
// Component
import Layout from '@/components/layout/Layout';
import StackExchangeFeed from '@/components/stackExchangeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticProps() {
    const communityMarkDownFolder = "community";
    const helpMarkDownFolder = "help";
    const pageInfo = await getPageLevelInfoForFile("help.md", helpMarkDownFolder);
    const slack = await getMarkdownData("slack.md", communityMarkDownFolder);
    const stackexchange = await getMarkdownData("stackexchange.md", communityMarkDownFolder);
    const forums = await getMarkdownData("forums.md", communityMarkDownFolder);
    const support = await getMarkdownData("support.md", helpMarkDownFolder);
  
    return {
        props: {
            pageInfo,
            forums,
            slack,
            stackexchange,
            support,
        },
    };
}

export default function Help({ pageInfo, forums, slack, stackexchange, support }: {pageInfo: MarkdownMeta, forums: MarkdownAsset, slack: MarkdownAsset, stackexchange: MarkdownAsset, support: MarkdownAsset}) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <Layout pageInfo={pageInfo}>
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
                <StackExchangeFeed pageInfo={pageInfo} />
            </div>
        </Layout>
    );
}

