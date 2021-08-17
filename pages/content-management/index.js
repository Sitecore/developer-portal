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

export default function ContentManagement({ }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Content Management</title>
                <meta name="description" content="Integrate CMS into your tech stack to enable marketing teams to own the digital solutions." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Content Management 💾
                </h1>
                <a href="/" className={styles.link}><h2>Take me Home</h2></a>
                <div className={styles.grid}>
                    <div className={styles.searchCard}>
                        <h2>I'm a unified search 🔍</h2>
                    </div>

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

            <Footer />

        </div>)
}

