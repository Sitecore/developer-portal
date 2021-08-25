import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
    const moosend = await getMarkdownData("moosend.md", "product");

    return {
        props: {
            moosend,
        },
    };
}

export default function MarketingAutomation2({ moosend }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Marketing Automation - Moosend</title>
                <meta name="description" content="Connecting with customers with Moosend marketing automation" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Marketing Automation - Moosend 🚗
                </h1>
                <div className={styles.grid}>

                    <div className={styles.productCategoryCardLarge}>
                        <ReactMarkdown>{moosend.markdown}</ReactMarkdown>
                    </div>

                    <div className={styles.socialsCard}>
                        <h2>General Marketing Automation Socials</h2>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new Marketing Automation things</li></a>
                    </div>
                </div>
            </main>
        </div>)
}

