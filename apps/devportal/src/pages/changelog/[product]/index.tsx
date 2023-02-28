import { getChangelogProductPaths } from '@/src/common/static-paths';
import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogList from '@/src/components/changelog/ChangelogList';
import { ProductConfig } from 'sc-changelog/configuration';
import Products from 'sc-changelog/constants/products';
import ChangelogEntry from 'sc-changelog/types/changeLogEntry';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import { LinkValue } from 'ui/common/types/link-value';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Hero from 'ui/components/heros/Hero';
import Layout from 'ui/layouts/Layout';

export async function getStaticPaths() {
  const productPaths = await getChangelogProductPaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const product = context.params.product;
  const items: ChangelogEntry[] = [];
  const currentProduct: ProductConfig | undefined = Products.find((x) => getSlug(x.name) == product);

  if (currentProduct == undefined)
    return {
      notFound: true,
    };

  return {
    props: {
      currentProduct,
      items,
    },
    revalidate: 600, // 10 minutes
  };
}

type ChangelogProductProps = {
  currentProduct: ProductConfig;
  items: ChangelogEntry[];
  changes: LinkValue[];
  entriesByMonth: { [month: string]: ChangelogEntry[] };
};

const ChangelogProduct = ({ currentProduct, items, changes, entriesByMonth }: ChangelogProductProps) => {
  return (
    <Layout title={`Changelog - ${currentProduct.name}`} description="Empty">
      <Hero title={`${currentProduct.name} changelog`} description="Learn more about new versions, changes and improvements" />
      <VerticalGroup>
        <Container>
          <div className="mt-8 grid gap-16 md:grid-cols-6">
            <div className="col-span-4">
              <ChangelogList items={items} />
            </div>
            <div className="col-span-2">
              <ChangelogByMonth productName={currentProduct.name} />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};
export default ChangelogProduct;
