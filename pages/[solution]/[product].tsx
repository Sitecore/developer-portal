// Global
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
import { getProductPaths } from '@/scripts/static-paths';
// Interfaces
import type { PageInfo } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import MarkdownContent from '@/components/helper/MarkdownContent';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/components/integrations/twitter/TwitterFeed';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';

export async function getStaticPaths() {
  const productPaths = await getProductPaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(context.params);
  const partials = pageInfo?.partials ? await getPartialsAsArray(pageInfo.partials) : [];
  const parent = context.params.solution;

  return {
    props: {
      pageInfo,
      partials,
      parent,
    },
  };
}

export default function productPage({
  pageInfo,
  partials,
  parent,
}: {
  pageInfo: PageInfo;
  partials: string[];
  parent: string;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout pageInfo={pageInfo}>
      <Link href={`/${parent}`}>
        <a>back up to {parent}...</a>
      </Link>
      <MarkdownContent partials={partials} />
      <StackExchangeFeed content={pageInfo.stackexchange} />
      <YouTubeFeed content={pageInfo.youtube} />
      <TwitterFeed content={pageInfo.twitter} />
    </Layout>
  );
}
