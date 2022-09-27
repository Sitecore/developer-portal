// Scripts
import { getPageInfo, getPartialsAsArray } from '@/src/common/page-info';
// Interfaces
import { PageInfo, PartialData } from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';

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
    revalidate: 600, // 10 minutes
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
