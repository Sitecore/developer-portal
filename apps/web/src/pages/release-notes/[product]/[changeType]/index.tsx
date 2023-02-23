import { ChangeTypeConfig, ProductConfig } from 'sc-changelog/configuration';
import ChangeTypes from 'sc-changelog/constants/changeTypes';
import Products from 'sc-changelog/constants/products';
import { getReleaseNotesByProductAndChangeType } from 'sc-changelog/getReleaseNotes';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';
import { getProductChangeTypePaths } from '../../../../lib/productPaths';

export async function getStaticPaths() {
  const productPaths = await getProductChangeTypePaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const product = context.params.product;
  const changeType = context.params.changeType;

  const currentProduct: ProductConfig = Products.find((x) => getSlug(x.name) == product);
  const currentChangeType: ChangeTypeConfig = ChangeTypes.find(
    (x) => getSlug(x.name) == changeType
  );

  return {
    props: {
      currentProduct,
      currentChangeType,
    },
    revalidate: 600, // 10 minutes
  };
}

export default function productPage({
  currentProduct,
  currentChangeType,
}: {
  currentProduct: ProductConfig;
  currentChangeType: ChangeTypeConfig;
}) {
  return (
    <Layout title="Release Notes - Home" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1>{currentProduct.name}</h1>

            <p>
              {getReleaseNotesByProductAndChangeType(currentProduct.type, currentChangeType.type)}
            </p>
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
