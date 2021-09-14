// Global
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
// Scripts
import { getPageInfo, getChildPageInfo } from '@/scripts/page-info';
import { getSolutionPaths } from '@/scripts/static-paths';
// Interfaces
import { PageInfo, ChildPageInfo } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import StackExchangeFeed from '@/components/integrations/stackexchange/StackExchangeFeed';
import TwitterFeed from '@/components/integrations/twitter/TwitterFeed';
import YouTubeFeed from '@/components/integrations/youtube/YouTubeFeed';
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
  const pageInfo = await getPageInfo(context.params);
  const products = await getChildPageInfo(context.params);

  return {
    props: {
      pageInfo,
      products,
    },
  };
}

export default function solutionPage({
  pageInfo,
  products,
}: {
  pageInfo: PageInfo;
  products: ChildPageInfo[];
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout pageInfo={pageInfo}>
      {products.map((child) => (
        <div key={child.id} className={styles.productCategoryCardCompact}>
          <h2>{child.title}</h2>
          <p>{child.description}</p>
          <Link href={child.link}>
            <a>Learn more...</a>
          </Link>
        </div>
      ))}

      <StackExchangeFeed content={pageInfo.stackexchange} />

      <div className={styles.socialsCard}>
        <h2>News &amp; Announcements</h2>
        <a href="" className={styles.link}>
          <li>Cool new things</li>
        </a>
      </div>

      <YouTubeFeed content={pageInfo.youtube} />
      <TwitterFeed content={pageInfo.twitter} />
    </Layout>
  );
}
