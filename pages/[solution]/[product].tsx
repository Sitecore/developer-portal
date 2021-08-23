import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { getMarkdownData } from "../../lib/getMarkdownData";
import ReactMarkdown from "react-markdown";
import { ParsedUrlQuery } from 'querystring';
import { getTaggedMarkdownData } from '../../lib/getMarkdownData';
import { Tags } from '../../interfaces/tags'
import { MarkdownAsset } from '../../interfaces/markdownAsset';
import { useRouter } from 'next/dist/client/router';

interface IParams extends ParsedUrlQuery {
    slug: string
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true // See the "fallback" section below
    };
}

export async function getStaticProps(context: any) {
    const slug = context.params as IParams
    console.log(slug);

    let tags: Tags = {
        solution: slug.solution as string,
        product: slug.product as string
    }

    console.log(tags);
    const files = await getTaggedMarkdownData(tags);

    return {
        props: {
            slug,
            files,
        },
    };
}

export default function productPage({ slug, files }: { slug: any, files: MarkdownAsset[] }) {
    const router = useRouter()
    console.log(files);

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
                    {slug.solution} {slug.product}
                </h1>
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

