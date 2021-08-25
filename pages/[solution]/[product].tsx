import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";
import { ParsedUrlQuery } from 'querystring';
import { getTaggedMarkdownData, getPageLevelInfo } from '../../lib/getMarkdownData';
import { Tags } from '../../interfaces/tags'
import { MarkdownAsset } from '../../interfaces/markdownAsset';
import { useRouter } from 'next/dist/client/router';

interface IParams extends ParsedUrlQuery {
    slug: string
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}

export async function getStaticProps(context: any) {

    const slug = context.params as IParams
    console.log(slug);

    let tags: Tags = {
        solution: slug.solution as string,
        products: [slug.product as string]
    }

    const pageInfo = await getPageLevelInfo(slug.product as string)
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

    return (
        <div className={styles.container}>
            <Head>
                <title>{slug.solution} - {slug.product}</title>
                <meta name="description" content="Commerce with Sitecore Experience Commerce" />
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
                </div>
            </main>
        </div>)
}

