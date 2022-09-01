// Scripts
import { getPageContent, getPageInfo, getPartialsAsArray } from '@/src/common/page-info';
// Interfaces
import { PageInfo, PartialData } from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';
//Promos

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
