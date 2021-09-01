import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <a href="/help"><h2>Need help?</h2></a>
                <a
                href="https://developers.sitecore.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/sitecore.svg" alt="Sitecore Logo" width={72} height={16} />
                </span>
            </a>
            </div>
        </footer>);
}

export default Footer;