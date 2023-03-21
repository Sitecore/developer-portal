import { GetProducts } from '@/../../packages/sc-changelog/changelog';
import Product from '@/../../packages/sc-changelog/types/product';
import { slugify } from '@/../../packages/sc-changelog/utils/stringUtils';
import Container from '@/../../packages/ui/components/common/Container';
import VerticalGroup from '@/../../packages/ui/components/common/VerticalGroup';
import Hero from '@/../../packages/ui/components/heros/Hero';
import Layout from '@/../../packages/ui/layouts/Layout';
import { getChangelogProductPaths } from '@/src/common/static-paths';
import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogList from '@/src/components/changelog/ChangelogList';

type ChangelogProps = {
  currentProduct: Product;
};

export async function getStaticPaths() {
  const paths = await getChangelogProductPaths();

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const product = context.params.product;
  const products = await GetProducts().then((response: Product[]) => {
    return response;
  });

  const currentProduct: Product | undefined = products.find((p) => slugify(p.name) == product);

  return {
    props: {
      currentProduct: currentProduct,
    },
  };
}

const ChangelogProduct = ({ currentProduct }: ChangelogProps) => {
  return (
    <Layout title="Release Notes - Home" description="Empty">
      <Hero title="Changelog" description="Learn more about new versions, changes and improvements" />
      <VerticalGroup>
        <Container>
          <div className="mt-8 grid gap-16 md:grid-cols-5">
            <div className="col-span-3">
              <ChangelogList initialProduct={currentProduct} />
            </div>
            <div className="col-span-2 hidden md:block">
              <ChangelogByMonth product={currentProduct} />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};
export default ChangelogProduct;
