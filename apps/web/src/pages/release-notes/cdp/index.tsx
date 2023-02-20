import { getReleaseNotesByProduct } from 'sc-changelog/getReleaseNotes';
import { Product } from 'sc-changelog/types';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';

export default function Web() {
  return (
    <Layout title="Release Notes - CDP" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1 className="testmva">Release Notes for CDP</h1>

            {getReleaseNotesByProduct(Product.CDP)}
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
