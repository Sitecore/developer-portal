// Components
import Container from '@/src/components/common/Container';
import TextLink from '@/src/components/common/TextLink';
import Layout from '@/src/layouts/Layout';

const pageInfo = {
  description: 'The page you are looking for cannot be found.',
  stackexchange: [],
  title: 'Page not found',
  twitter: [],
  youtube: [],
  sitecoreCommunity: {},
  fileName: '',
  promoBefore: [],
  promoAfter: [],
};

const NotFoundPage = (): JSX.Element => (
  <Layout pageInfo={pageInfo}>
    <Container>
      <TextLink href="/" text="Return home" />
    </Container>
  </Layout>
);

export default NotFoundPage;
