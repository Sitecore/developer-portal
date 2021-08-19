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

export default function Commerce({ }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Commerce</title>
                <meta name="description" content="Build out order management, merchandising, marketplaces, and storefronts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Commerce 💸
                </h1>
                <a href="/" className={styles.link}><h2>Take me Home</h2></a>
                <div className={styles.grid}>
                    <div className={styles.productCategoryCardCompact}>
                        <h2>OrderCloud</h2>
                        <p>Cloud-native, headless, and API-first commerce solution</p>
                        <Link href="commerce/orderCloud">
                            <a>Learn more...</a>
                        </Link>
                    </div>
                    
                    <div className={styles.productCategoryCardCompact}>
                        <h2>Sitecore Experience Commerce</h2>
                        <p>Fully integrated Commerce as part of Sitecore's platform DXP</p>
                        <Link href="commerce/experience-commerce">
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

