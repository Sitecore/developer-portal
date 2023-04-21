// Scripts
import { getPageInfo, getPartialsAsArray } from '@/src/common/page-info';
// Interfaces
import { PageInfo, PartialData } from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';
//Promos
import opensourcePromo from '@/data/promos/opensource';

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo('contribute', context.preview ? context.preview : null);
  const partials = await getPartialsAsArray(['contribute/contribute']);

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Contribute({ pageInfo, partials }: { pageInfo: PageInfo; partials: PartialData }) {
  return <GenericContentPage pageInfo={pageInfo} partials={partials} promoAfter={[opensourcePromo]} hasGrid={false} />;
}
