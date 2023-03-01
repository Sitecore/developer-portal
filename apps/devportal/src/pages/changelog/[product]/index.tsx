import { getChangelogProductPaths } from '@/src/common/static-paths';
import ChangelogByMonth from '@/src/components/changelog/ChangelogByMonth';
import ChangelogList from '@/src/components/changelog/ChangelogList';
import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import Products from 'sc-changelog/constants/products';
import { getSlug } from 'sc-changelog/utils/stringUtils';
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
  //const changeType = context.params.changeType;
  //
  const currentProduct: ProductConfig | undefined = Products.find((x) => getSlug(x.name) == product);
  //const currentChangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => getSlug(x.name) == changeType);

  if (currentProduct == undefined)
    // || currentChangeType == undefined)
    return {
      notFound: true,
    };

  return {
    props: {
      currentProduct,
      //currentChangeType,
    },
    revalidate: 600, // 10 minutes
  };
}

type ChangelogProps = {
  currentProduct: ProductConfig;
  currentChangeType: ChangeTypeConfig;
};

const ChangelogHome = ({ currentProduct, currentChangeType }: ChangelogProps) => {
  return (
    <Layout title="Release Notes - Home" description="Empty">
      <Hero title="Changelog" description="Learn more about new versions, changes and improvements" />
      <VerticalGroup>
        <Container>
          <div className="mt-8 grid gap-16 md:grid-cols-5">
            <div className="col-span-3">
              <ChangelogList product={currentProduct.name} />
            </div>
            <div className="col-span-2 h-[calc(100vh-597px)]">
              <ChangelogByMonth />
            </div>
          </div>
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default ChangelogHome;
