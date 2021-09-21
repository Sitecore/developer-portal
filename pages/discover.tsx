// Scripts
import { getPageInfo, getPartialsAsArray } from '@/scripts/page-info';
// Interfaces
import { PageInfo, PartialData } from '@/interfaces/page-info';
// Components
import GenericContentPage from '@/components/layout/GenericContentPage';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('discover');
  const partials = await getPartialsAsArray([
    'discover/supportkb',
    'discover/cdpkb',
    'discover/ordercloud',
    'discover/contenthub',
    'discover/send',
    'discover/sitecoreknowledgecenter',
  ]);

  return {
    props: {
      pageInfo,
      partials,
    },
  };
}

export default function Discover({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PartialData;
}) {
  return <GenericContentPage pageInfo={pageInfo} partials={partials} hasGrid={true} />;
}
