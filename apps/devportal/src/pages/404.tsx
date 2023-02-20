// Components
import Container from '@/src/components/common/Container';
import TextLink from '@/src/components/common/TextLink';
import Layout from 'ui/layouts/Layout';

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
  <Layout title={pageInfo.title} description={pageInfo.description}>
    <Container>
      <TextLink href="/" text="Return home" />
    </Container>
  </Layout>
);

export default NotFoundPage;
