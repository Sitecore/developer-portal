// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PartialData } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';
//Promos
import opensourcePromo from '@/data/promos/opensource';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('contribute');
  const partials = await getPartialsAsArray([
    'contribute/contribute',
  ]);

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Contribute({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PartialData;
}) {
  return <GenericContentPage pageInfo={pageInfo} partials={partials} promoAfter={[opensourcePromo]} hasGrid={false} />;
}
