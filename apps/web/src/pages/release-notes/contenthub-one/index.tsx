import { getReleaseNotesByProduct } from 'sc-changelog/getReleaseNotes';
import { Product } from 'sc-changelog/types';
import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';

export default function Web() {
  return (
    <Layout title="Release Notes - Content Hub ONE" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1 className="testmva">Release Notes for Content Hub ONE</h1>

            {getReleaseNotesByProduct(Product.ContentHubOne)}
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
