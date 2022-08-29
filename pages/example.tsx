// Scripts
import { getPageContent, getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PartialData } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';
//Promos
import opensourcePromo from '@/data/promos/opensource';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('example');
  const partials = pageInfo?.content
    ? await getPageContent(pageInfo)
    : pageInfo?.partials
    ? await getPartialsAsArray(pageInfo.partials)
    : [];

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Example({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PartialData;
}) {
  return <GenericContentPage pageInfo={pageInfo} partials={partials} hasGrid={false} />;
}
