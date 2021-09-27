// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
import { getIntegrationPaths } from '@/scripts/static-paths';
// Interfaces
import type { PageInfo, PartialData } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

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
