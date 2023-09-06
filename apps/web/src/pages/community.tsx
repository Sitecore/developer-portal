// Scripts
import mvpPromo from '@/data/promos/mvp';
import SocialPage from '../layouts/SocialPage';
import { PageInfo } from '../lib/interfaces/page-info';
import { getPageInfo } from '../lib/page-info';

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
