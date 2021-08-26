import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import { getMarkdownData } from "../../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";

export async function getStaticProps() {
    const productMarkdownFolder = "product";
    const federatedExperienceManagerData = await getMarkdownData("federatedExperienceManager.md", productMarkdownFolder);
    const universalTracker = await getMarkdownData("universalTracker.md", productMarkdownFolder);
    const segmentationAndConditions = await getMarkdownData("segmentationAndConditions.md", productMarkdownFolder);
    const webTracking = await getMarkdownData("webTracking.md", productMarkdownFolder);

    return {
        props: {
            federatedExperienceManagerData,
            universalTracker,
            segmentationAndConditions,
            webTracking,
        },
    };
}

export default function ExperiencePlatform({ federatedExperienceManagerData, universalTracker, segmentationAndConditions, webTracking }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Personalization and Testing - Experience Platform</title>
                <meta name="description" content="Using Sitecore Experience Platform (XP) to personalize content and run content testing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Personalization and Testing - Experience Platform 🕵️</h1>
                <div className={styles.grid}>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{federatedExperienceManagerData.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{universalTracker.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{segmentationAndConditions.markdown}</ReactMarkdown>
                    </div>
                    <div className={styles.productCategoryCard}>
                        <ReactMarkdown>{webTracking.markdown}</ReactMarkdown>
                    </div>

                    <div className={styles.socialsCard}>
                        <h2>Personalization Socials</h2>
                    </div>

                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new personalization things</li></a>
                    </div>
                </div>
            </main>
        </div >
    )
}