// Global
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
// Interfaces
import { MarkdownAsset, MarkdownMeta } from '@/interfaces/markdownAsset';
import { StackExchangeQuestion } from '@/interfaces/integrations';
import { Tags } from '@/interfaces/tags';
import { UrlParams } from '@/interfaces/UrlParams';
// Lib
import { getTaggedMarkdownData, getPageLevelInfo, getProductPaths } from '@/lib/getMarkdownData';
// Components
import stackExchangeApi from '@/components/integrations/stackexchange/StackExchange.api';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/components/integrations/TwitterFeed';
import YouTubeFeed from '@/components/youtubeFeed';
import styles from '@/styles/Home.module.css';

export async function getStaticPaths() {
  const productPaths = await getProductPaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const slug: UrlParams = context.params;

  let tags: Tags = {
    solution: slug.solution,
    products: [slug.product],
  };

  const pageInfo = await getPageLevelInfo(tags);
  const files = await getTaggedMarkdownData(tags);
  const stackExchangeQuestions = await stackExchangeApi.get(pageInfo.stackexchange);

  return {
    props: {
      slug,
      files,
      pageInfo,
      stackExchangeQuestions,
    },
  };
}

export default function productPage({
  slug,
  files,
  pageInfo,
  stackExchangeQuestions,
}: {
  slug: any;
  files: MarkdownAsset[];
  pageInfo: MarkdownMeta;
  stackExchangeQuestions: StackExchangeQuestion[];
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageInfo.prettyName}</title>
        <meta name="description" content={pageInfo.description} />
        <link
          rel="icon"
          href="https://sitecorecdn.azureedge.net/-/media/sitecoresite/images/global/logo/favicon.png"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{pageInfo.prettyName}</h1>
        <h3>{pageInfo.description}</h3>
        <Link href={`../${slug.solution}`}>
          <a>back up to {slug.solution}...</a>
        </Link>
        <div className={styles.grid}>
          {files.map((file) => (
            <div key={file.id} id={file.id} className={styles.socialsCard}>
              <ReactMarkdown>{file.markdown}</ReactMarkdown>
            </div>
          ))}

          <StackExchangeFeed questions={stackExchangeQuestions} />
          <YouTubeFeed pageInfo={pageInfo} />
          <TwitterFeed args={pageInfo.twitter} />
        </div>
      </main>
    </div>
  );
}
