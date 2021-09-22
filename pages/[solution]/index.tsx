// Global
import { classnames } from '@/tailwindcss-classnames';
// Scripts
import { getPageInfo, getChildPageInfo } from '@/scripts/page-info';
import { getSolutionPaths } from '@/scripts/static-paths';
// Interfaces
import type { PageInfo, ChildPageInfo } from '@/interfaces/page-info';
import type { CategoryTileProps } from '@/components/cards/CategoryTile';
// Components
import CategoryTileList from '@/components/lists/CategoryTileList';
import Container from '@/components/helper/Container';
import Layout from '@/components/layout/Layout';
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
      <div className={classnames('py-16', 'bg-theme-bg-alt')}>
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
