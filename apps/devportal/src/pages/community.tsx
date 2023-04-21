// Scripts
import { getPageInfo } from '@/src/common/page-info';
// Interfaces
import { PageInfo } from '@/src/interfaces/page-info';
// Components
import SocialPage from '@/src/layouts/SocialPage';
// Data
import mvpPromo from '@/data/promos/mvp';

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo('community', context.preview ? context.preview : null);

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

const CommunityPage = ({ pageInfo }: CommunityPageProps): JSX.Element => <SocialPage pageInfo={pageInfo} promoBefore={[mvpPromo]} />;

export default CommunityPage;
