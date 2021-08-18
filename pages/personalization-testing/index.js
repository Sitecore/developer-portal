import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'

export async function getStaticProps() {
    return {
        props: {
        },
    };
}

export default function Personalization({ }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Personalization and Testing</title>
                <meta name="description" content="Deliver personalized content and test which content is working" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Personalization and Testing 🕵️‍♀️
                </h1>
                <a href="/" className={styles.link}><h2>Take me Home</h2></a>
                <div className={styles.grid}>
                    <div className={styles.searchCard}>
                        <h2>I'm a unified search 🔍</h2>
                    </div>

                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore CDP</h2>
                        <p>Use advanced decisioning models and machine learning for personalization in your composable DXP.</p>
                        <Link href="personalization-testing/cdp">
                            <a>Learn more...</a>
                        </Link>
                    </div>
                    
                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore Experience Platform</h2>
                        <p>Personalization and testing driven by xDB data the Sitecore rules engine.</p>
                        <Link href="personalization-testing/experience-platform">
                            <a>Learn more...</a>
                        </Link>
                    </div>

                    <div className={styles.socialsCard}>
                        <h2>Socials</h2>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>News & Announcements</h2>
                        <a href="" className={styles.link}><li>Cool new things</li></a>
                    </div>
                    <div className={styles.socialsCard}>
                        <h2>Get Help</h2>
                        <a href="https://support.sitecore.com/kb?id=kb_home" className={styles.link}><li>Sitecore Support</li></a>
                    </div>

                </div>
            </main>
        </div>)
}

