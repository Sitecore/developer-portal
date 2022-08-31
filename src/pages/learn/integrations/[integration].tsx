// Scripts
import { getPageInfo, getPartialsAsArray } from '@/src/common/page-info';
import { getIntegrationPaths } from '@/src/common/static-paths';
// Interfaces
import type { PageInfo, PartialData } from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';

export async function getStaticPaths() {
  const productPaths = await getIntegrationPaths();
  return {
    paths: productPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(`integrations/${context?.params?.integration}`);
  const partials = pageInfo?.partials ? await getPartialsAsArray(pageInfo.partials) : [];

  return {
    props: {
      pageInfo,
      partials,
    },
    revalidate: 600, // 10 minutes
  };
}

type XMCDPPageProps = {
  pageInfo: PageInfo;
  partials: PartialData;
};

const XMCDPPage = ({ pageInfo, partials }: XMCDPPageProps): JSX.Element => (
  <GenericContentPage pageInfo={pageInfo} partials={partials} />
);

export default XMCDPPage;
