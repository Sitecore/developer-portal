import styles from '../styles/Home.module.css'

export default function Personalization({ productName, productLink, DocLinks, DiscoverLinks, LearnLinks, PlaygroundLinks }) {
    return (
        <div className={styles.productCategoryCard}>
            <a href={productLink} ><h2>{productName}&rarr;</h2></a>
            <h4>Docs</h4>
            {DocLinks?.map((docLink) => (
                <a href={docLink.url} className={styles.link}><li>{docLink.text}</li></a>
            ))}
            <h4>Discover</h4>
            {DiscoverLinks?.map((discoverLink) => (
                <a href={discoverLink.url} className={styles.link}><li>{discoverLink.text}</li></a>
            ))}
            <h4>Learn</h4>
            {LearnLinks?.map((learnLink) => (
                <a href={learnLink.url} className={styles.link}><li>{learnLink.text}</li></a>
            ))}
            <h4>Playground</h4>
            {PlaygroundLinks?.map((playgroundLink) => (
                <a href={playgroundLink.url} className={styles.link}><li>{playgroundLink.text}</li></a>
            ))}
        </div>
    )
}
