// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import type { PageInfo, PartialData } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('integrations/xm-cdp');
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
