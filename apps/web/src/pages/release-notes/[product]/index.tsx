import { ProductConfig } from 'sc-changelog/configuration';
import Products from 'sc-changelog/constants/products';
import { getReleaseNotesByProduct } from 'sc-changelog/getReleaseNotes';
import { getSlug } from 'sc-changelog/utils/stringUtils';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';
import { getProductPaths } from '../../../lib/productPaths';

export async function getStaticPaths() {
  const productPaths = await getProductPaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const product = context.params.product;

  const currentProduct: ProductConfig = Products.find((x) => getSlug(x.name) == product);

  return {
    props: {
      currentProduct,
    },
    revalidate: 600, // 10 minutes
  };
}

export default function productPage({ currentProduct }: { currentProduct: ProductConfig }) {
  return (
    <Layout title="Release Notes - Home" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1>{currentProduct.name}</h1>

            <p>{getReleaseNotesByProduct(currentProduct.type)}</p>

            <p>{currentProduct.entityName}</p>
            <p>{currentProduct.entityId}</p>
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
