// Scripts
import { getPageInfo, getPartialsAsArray } from '@/src/common/page-info';
import { getTrialsPaths } from '@/src/common/static-paths';
// Interfaces
import type { PageInfo, PartialData } from '@/src/interfaces/page-info';
// Components
import GenericContentPage from '@/src/layouts/GenericContentPage';

export async function getStaticPaths() {
  const trialPaths = await getTrialsPaths();
  return {
    paths: trialPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const pageInfo = await getPageInfo(`trials/${context?.params?.trial}`);
  const partials = pageInfo?.partials ? await getPartialsAsArray(pageInfo.partials) : [];

  return {
    props: {
      pageInfo,
      partials,
    },
    revalidate: 600, // 10 minutes
  };
}

const TrialPage = ({
  pageInfo,
  partials,
}: {
  pageInfo: PageInfo;
  partials: PartialData;
}): JSX.Element => <GenericContentPage pageInfo={pageInfo} partials={partials} />;

export default TrialPage;
