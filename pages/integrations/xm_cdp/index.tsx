import Head from 'next/head';
import styles from '../../../styles/Home.module.css';
import { getTaggedMarkdownData } from '../../../lib/getMarkdownData';
import ReactMarkdown from 'react-markdown';
import { Tags } from '../../../interfaces/tags'
import { MarkdownAsset } from '../../../interfaces/markdownAsset'

export async function getStaticProps() {
    let tags: Tags = {
        //product: 'xm',
        area: 'integrations'
    }
    const taggedFiles = await getTaggedMarkdownData(tags);

    return {
        props: {
            taggedFiles,
        },
    };
}

export default function XM_CDP({ taggedFiles }: { taggedFiles: MarkdownAsset[] }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>XM &lt;-&gt; CDP Integration</title>
                <meta name="description" content="Scale management and delivery of media and static assets" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>XM &lt;-&gt; CDP Integration 🔁</h1>

                <div className={styles.grid}>

                    {taggedFiles.map(file => (
                        <div id={file.id} className={styles.socialsCard}>
                            <ReactMarkdown>{file.markdown}</ReactMarkdown>
                        </div>
                    ))}

                </div>

            </main>
        </div>
    );
}
