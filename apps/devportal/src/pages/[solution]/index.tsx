// Global
// Scripts
import { getChildPageInfo, getPageInfo } from '@/src/common/page-info';
import { getSolutionPaths } from '@/src/common/static-paths';
// Interfaces
import type { CategoryTileProps } from '@/src/components/lists/CategoryTile';
import type { ChildPageInfo, PageInfo } from '@/src/interfaces/page-info';
// Components
import Container from '@/src/components/common/Container';
import SocialFeeds from '@/src/components/integrations/SocialFeeds';
import CategoryTileList from '@/src/components/lists/CategoryTileList';
import Layout from 'ui/layouts/Layout';

export async function getStaticPaths() {
  const solutionPaths = await getSolutionPaths();
  const staticPaths = {
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
    revalidate: 600, // 10 minutes
  };
}

type SolutionPageProps = {
  pageInfo: PageInfo;
  products: ChildPageInfo[];
};

const SolutionPage = ({ pageInfo, products }: SolutionPageProps): JSX.Element => {
  const categoryCards = products.map((product) => ({
    ...product,
    href: product.link,
  })) as CategoryTileProps[];

  return (
    <Layout pageInfo={pageInfo}>
      <div className="bg-theme-bg-alt py-16">
        <Container>
          <CategoryTileList cards={categoryCards} />
        </Container>
      </div>
      <Container>
        <SocialFeeds pageInfo={pageInfo} />
      </Container>
    </Layout>
  );
};

export default SolutionPage;
