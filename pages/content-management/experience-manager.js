import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
    const webCMS = await getMarkdownData("webCMS.md");
    const jss = await getMarkdownData("jss.md");
    const sitecoreForms = await getMarkdownData("sitecoreForms.md");
    const headlessDotNet = await getMarkdownData("headlessDotNet.md");

    return {
        props: {
            webCMS,
            jss,
            sitecoreForms,
            headlessDotNet
        },
    };
}

export default function ExperienceManager({ webCMS, jss, sitecoreForms, headlessDotNet }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Content Management - Experience Manager</title>
                <meta name="description" content="Experience Manager for content management, Web CMS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Content Management - Experience Manager 💾
                </h1>
                <div className={styles.grid}>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{webCMS.markdown}</ReactMarkdown>
                    </div>

                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{jss.markdown}</ReactMarkdown>
                    </div>

                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{sitecoreForms.markdown}</ReactMarkdown>
                    </div>

                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{headlessDotNet.markdown}</ReactMarkdown>
                    </div>
                    
                    <div className={styles.socialsCard}>
                        <h2>General Web CMS Socials</h2>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new Web CMS things</li></a>
                    </div>
                </div>
            </main>
        </div>
    )
}
