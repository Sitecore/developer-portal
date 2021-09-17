// Scripts
import { getPageInfo } from '@/scripts/page-info';
// Interfaces
import { PageInfo } from '@/interfaces/page-info';
// Components
import SocialPage from '@/components/layout/SocialPage';
// Data
import mvpPromo from '@/data/promos/mvp';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('community');

  return {
    props: {
      pageInfo,
    },
  };
}

type CommunityPageProps = {
  pageInfo: PageInfo;
};

const CommunityPage = ({ pageInfo }: CommunityPageProps): JSX.Element => (
  <SocialPage pageInfo={pageInfo} promoBefore={mvpPromo} />
);

export default CommunityPage;
