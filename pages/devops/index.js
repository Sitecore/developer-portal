import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { getTaggedMarkdownData } from '../../lib/getMarkdownData';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps() {
    const devOpsFiles = await getTaggedMarkdownData('devops', '');

    return {
        props: {
            devOpsFiles,
        },
    };
}

export default function DevOps({ devOpsFiles }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>DevOps</title>
                <meta name="description" content="Scale management and delivery of media and static assets" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>DevOps 🎁</h1>
                <a href="/" className={styles.link}>
                    <h2>Take me Home</h2>
                </a>

                {devOpsFiles.map(file => (
                    <div className={styles.grid} id={file.id}>
                        <div className={styles.socialsCard}>
                            <ReactMarkdown>{file.markdown}</ReactMarkdown>
                        </div>
                    </div>
                ))}

            </main>
        </div>
    );
}
