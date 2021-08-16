import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Footer from '../../components/footer'

export async function getStaticProps() {
    return {
        props: {
        },
    };
}

export default function MarketingAutomation({ }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Marketing Automation</title>
                <meta name="description" content="Connect with customers using marketing automation" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Marketing Automation 🚗
                </h1>
                <a href="/" className={styles.link}><h2>Take me Home</h2></a>
                <div className={styles.grid}>
                    <div className={styles.searchCard}>
                        <h2>I'm a unified search 🔍</h2>
                    </div>

                    <div className={styles.productCategoryCardCompact}>
                        <h2>Moosend</h2>
                        <p>A place to send Moos</p>
                        <a href="moosend">Learn more...</a>
                    </div>
                    
                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore XP: Marketing Automation and EXM</h2>
                        <p>A market for your automation</p>
                        <a href="experience-platform">Learn more...</a>
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

            <Footer />

        </div>)
}

