// Global
import Image from 'next/image';
// Components
import Container from '@/components/helper/Container';
import TextLink from '@/components/helper/TextLink';
import Layout from '@/components/layout/Layout';

const pageInfo = {
  description: 'The page you are looking for cannot be found.',
  stackexchange: [],
  title: 'Page not found',
  twitter: [],
  youtube: [],
};

const NotFoundPage = (): JSX.Element => (
  <Layout pageInfo={pageInfo}>
    <Container>
      <TextLink href="/" text="Return home" />
    </Container>
  </Layout>
);

export default NotFoundPage;
