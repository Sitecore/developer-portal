// Global
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Link from 'next/link';
// Interfaces
import { MarkdownMeta } from '@/interfaces/markdownAsset';
import { StackExchangeQuestion } from '@/interfaces/integrations';
import { Tags } from '@/interfaces/tags';
import { UrlParams } from '@/interfaces/UrlParams';
// Lib
import { getTaggedPages, getPageLevelInfo, getSolutionPaths } from '@/lib/getMarkdownData';
// Components
import stackExchangeApi from '@/components/integrations/stackexchange/StackExchange.api';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/components/integrations/TwitterFeed';
import YouTubeFeed from '@/components/youtubeFeed';
import styles from '../../styles/Home.module.css';

export async function getStaticPaths() {
  const solutionPaths = await getSolutionPaths();
  let staticPaths = {
    paths: solutionPaths,
    fallback: false,
  };
  return staticPaths;
}

export async function getStaticProps(context: any) {
  const slug: UrlParams = context.params;

  let pageTags: Tags = {
    solution: slug.solution,
    products: [slug.solution],
  };
  const pageInfo = await getPageLevelInfo(pageTags);
  const stackExchangeQuestions = await stackExchangeApi.get(pageInfo.stackexchange);

  let filesTags: Tags = {
    solution: slug.solution,
  };
  const files = await getTaggedPages(filesTags);

  return {
    props: {
      slug,
      files,
      pageInfo,
      stackExchangeQuestions,
    },
  };
}

export default function solutionPage({
  slug,
  files,
  pageInfo,
  stackExchangeQuestions,
}: {
  slug: any;
  files: MarkdownMeta[];
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
        <p>{pageInfo.description}</p>
        <div className={styles.grid}>
          {files.map((file) => (
            <div key={file.id} className={styles.productCategoryCardCompact}>
              <h2>{file.prettyName}</h2>
              <p>{file.description}</p>
              <Link href={`${slug.solution}/${file.product}`}>
                <a>Learn more...</a>
              </Link>
            </div>
          ))}

          <StackExchangeFeed questions={stackExchangeQuestions} />

          <div className={styles.socialsCard}>
            <h2>News &amp; Announcements</h2>
            <a href="" className={styles.link}>
              <li>Cool new things</li>
            </a>
          </div>

          <YouTubeFeed pageInfo={pageInfo} />
          <TwitterFeed args={pageInfo.twitter} />
        </div>
      </main>
    </div>
  );
}
