import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";
import { getTaggedMarkdownData, getPageLevelInfo } from '../../lib/getMarkdownData';
import { Tags } from '../../interfaces/tags'
import { MarkdownAsset } from '../../interfaces/markdownAsset';
import { useRouter } from 'next/dist/client/router';
import { UrlParams } from '../../interfaces/UrlParams';


export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}

export async function getStaticProps(context: any) {
    const slug: UrlParams = context.params;

    let tags: Tags = {
        solution: slug.solution,
        products: [slug.product]
    }

    const pageInfo = await getPageLevelInfo(tags)
    const files = await getTaggedMarkdownData(tags);

    return {
        props: {
            slug,
            files,
            pageInfo
        },
    };
}

export default function productPage({ slug, files, pageInfo }: { slug: any, files: MarkdownAsset[], pageInfo: any }) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    var stackexchangeFeed = '';
    if (pageInfo.stackexchange){
        stackexchangeFeed = (
            <div className={styles.socialsCard}>
                <h2>Latest StackExchange questions</h2>
                <p>{pageInfo.stackexchange.join()}</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{pageInfo.prettyName}</title>
                <meta name="description" content={pageInfo.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {pageInfo.prettyName}
                </h1>
                <h3>
                    {pageInfo.description}
                </h3>
                <div className={styles.grid}>
                    {files.map(file => (
                        <div key={file.id} id={file.id} className={styles.socialsCard}>
                            <ReactMarkdown>{file.markdown}</ReactMarkdown>
                        </div>
                    ))}
                    {stackexchangeFeed}
                </div>
                
            </main>
        </div>)
}

