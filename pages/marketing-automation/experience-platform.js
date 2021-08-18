import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
    const sitecoreXPMarketingAutomation = await getMarkdownData("sitecoreXPMarketingAutomation.md");

    return {
        props: {
            sitecoreXPMarketingAutomation,
        },
    };
}

export default function MarketingAutomation2({ sitecoreXPMarketingAutomation }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Marketing Automation - Sitecore Experience Platform</title>
                <meta name="description" content="Connecting with customers using Sitecore Experience Platform marketing automation and email experience manager (EXM)" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Marketing Automation - Sitecore Experience Platform 🚗
                </h1>
                <a href="/" className={styles.link}><h2>Take me Home</h2></a>
                <div className={styles.grid}>
                    <div className={styles.searchCard}>
                        <h2>I'm a unified search 🔍</h2>
                    </div>
                  
                    <div className={styles.productCategoryCardLarge}>
                        <ReactMarkdown>{sitecoreXPMarketingAutomation.markdown}</ReactMarkdown>
                    </div>


                    <div className={styles.socialsCard}>
                        <h2>General Marketing Automation Socials</h2>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new Marketing Automation things</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>Get Help</h2>
                        <a href="https://support.sitecore.com/kb?id=kb_home" className={styles.link}><li>Sitecore Support</li></a>
                    </div>

                </div>
            </main>
        </div>)
}

