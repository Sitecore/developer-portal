// Global
import { classnames } from '@/tailwindcss-classnames';
// Scripts
import { getPageInfo, getChildPageInfo } from '@/scripts/page-info';
import { getSolutionPaths } from '@/scripts/static-paths';
// Interfaces
import { PageInfo, ChildPageInfo } from '@/interfaces/page-info';
// Components
import Layout from '@/components/layout/Layout';
import ProductCategoryCard from '@/components/cards/ProductCategoryCard';
import SocialFeeds from '@/components/integrations/SocialFeeds';

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
  return (
    <Layout pageInfo={pageInfo}>
      <ul
        className={classnames(
          'grid',
          'gap-6',
          'p-8',
          'bg-gray-lightest',
          'mb-11',
          'md:grid-cols-2'
        )}
      >
        {products.map((child) => (
          <ProductCategoryCard
            key={child.id}
            containerTag="li"
            headingLevel="h2"
            description={child.description as string}
            title={child.title}
            href={child.link}
          />
        ))}
      </ul>

      <SocialFeeds pageInfo={pageInfo} />
    </Layout>
  );
}
