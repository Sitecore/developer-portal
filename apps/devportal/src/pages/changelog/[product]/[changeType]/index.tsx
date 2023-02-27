import { getChangelogProductChangeTypePaths } from '@/src/common/static-paths';
import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';

export async function getStaticPaths() {
  const productPaths = await getChangelogProductChangeTypePaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const product = context.params.product;
  const changeType = context.params.changeType;

  const currentProduct: ProductConfig | undefined = Products.find((x) => getSlug(x.name) == product);
  const currentChangeType: ChangeTypeConfig | undefined = ChangeTypes.find((x) => getSlug(x.name) == changeType);

  if (currentProduct == undefined || currentChangeType == undefined)
    return {
      notFound: true,
    };

  return {
    props: {
      currentProduct,
      currentChangeType,
    },
    revalidate: 600, // 10 minutes
  };
}

export default function productPage({ currentProduct, currentChangeType }: { currentProduct: ProductConfig; currentChangeType: ChangeTypeConfig }) {
  return (
    <Layout title="Release Notes - Home" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1>{currentProduct.name}</h1>
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
