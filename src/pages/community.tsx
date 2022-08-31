// Scripts
import { getPageInfo } from '@/src/scripts/page-info';
// Interfaces
import { PageInfo } from '@/src/interfaces/page-info';
// Components
import SocialPage from '@/src/components/layout/SocialPage';
// Data
import mvpPromo from '@/data/promos/mvp';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('community');

  return {
    props: {
      pageInfo,
    },
    revalidate: 600, // 10 minutes
  };
}

type CommunityPageProps = {
  pageInfo: PageInfo;
};

const CommunityPage = ({ pageInfo }: CommunityPageProps): JSX.Element => (
  <SocialPage pageInfo={pageInfo} promoBefore={[mvpPromo]} />
);

export default CommunityPage;
