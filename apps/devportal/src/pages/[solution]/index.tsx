// Global
// Scripts
import { getChildPageInfo, getPageInfo } from '@/src/common/page-info';
import { getSolutionPaths } from '@/src/common/static-paths';
// Interfaces
import type { ChildPageInfo, PageInfo } from '@/src/interfaces/page-info';
import type { CategoryTileProps } from 'ui/components/lists/CategoryTile';
// Components
import SocialFeeds from '@/src/components/integrations/SocialFeeds';
import Container from 'ui/components/common/Container';
import CategoryTileList from 'ui/components/lists/CategoryTileList';
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
    <Layout
      title={pageInfo.title}
      description={pageInfo.description}
      openGraphImage={pageInfo.openGraphImage}
    >
      <div className="py-16 bg-theme-bg-alt">
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
