import Container from 'ui/components/common/Container';
import VerticalGroup from 'ui/components/common/VerticalGroup';

import Layout from 'ui/layouts/Layout';

export default function Web() {
  return (
    <Layout title="Test" description="Empty">
      <VerticalGroup>
        <Container>
          <VerticalGroup size="lg">
            <h1>Developer Portal Playgrond</h1>
          </VerticalGroup>
        </Container>
      </VerticalGroup>
    </Layout>
  );
}
