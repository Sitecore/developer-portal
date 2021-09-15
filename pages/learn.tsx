// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PagePartial } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('learn');
  const partials = await getPartialsAsArray([
    'learn/starterkits',
    'learn/gettingstarted',
    'learn/learningSitecore',
  ]);

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Learn({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PagePartial[];
}) {
  return <GenericContentPage pageInfo={pageInfo} partials={partials} />;
}
