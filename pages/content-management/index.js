import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export async function getStaticProps() {
    return {
        props: {
        },
    };
}

export default function ContentManagement({ }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Content Management and Delivery</title>
                <meta name="description" content="Integrate CMS into your tech stack to enable marketing teams to own the digital solutions." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Content Management and Delivery 💾
                </h1>
                <div className={styles.grid}>
                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore Content Hub</h2>
                        <p>Centralize content strategy and operations for all delivery channels</p>
                        <Link href="content-management/content-hub">
                            <a>Learn more...</a>
                        </Link>
                    </div>
                    
                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore Experience Manager</h2>
                        <p>Manage content and presentation for the web channel</p>
                        <Link href="content-management/experience-manager">
                            <a>Learn more...</a>
                        </Link>
                    </div>

                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore Experience Accelerator (SXA)</h2>
                        <p>Turbo charge your Sitecore development</p>
                        <Link href="content-management/sxa">
                            <a>Learn more...</a>
                        </Link>
                    </div>

                    <div className={styles.socialsCard}>
                        <h2>Latest Stack Exchange questions</h2>
                        <p>#SXA, #sitecore-client, #content-search, #jss, #experience-editor, #content-editor, #media-library, #publishing, #security, #multilingual, #templates, #multisite, #workflow, #content-management, #content-delivery, #content-hub, #headless</p>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new things</li></a>
                    </div>
                </div>
            </main>
        </div>)
}

